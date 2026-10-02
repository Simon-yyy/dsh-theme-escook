import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import vm from 'node:vm';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { browserFixture } from './helpers/browser.mjs';

const hostFixture = process.env.DSH_CLIENT_MODULES_FIXTURE;
const cordisFixture = process.env.DSH_CORDIS_FIXTURE;

async function loadedTheme() {
  const browser = browserFixture();
  const pendingQueue = [];
  const target = { mode: 'queue', pendingQueue, load: (registration) => pendingQueue.push(registration) };
  browser.window.__ModuleLoader__ = target;
  new vm.Script(await readFile(hostFixture, 'utf8')).runInContext(browser.context);
  const hostRegistration = pendingQueue.pop();
  assert.equal(hostRegistration.id, '@deepseek-ai/dsh-client-modules');
  const host = hostRegistration.factory(() => { throw new Error('宿主模块加载器不应依赖外部模块'); });
  const manifestUrl = process.env.DSH_THEME_PACKAGE_DIR
    ? pathToFileURL(resolve(process.env.DSH_THEME_PACKAGE_DIR, 'package.json'))
    : new URL('../package.json', import.meta.url);
  const manifest = JSON.parse(await readFile(manifestUrl, 'utf8'));
  const code = await readFile(new URL(manifest.exports['./client'], manifestUrl), 'utf8');
  const url = `plugins/??${manifest.name}/client.js&rev=${manifest.version}`;
  let loads = 0;
  const modules = host.createClientModuleSystem(target, { id: '@deepseek-ai/dsh-client-modules', exports: host }, {
    boot: {
      rev: 'theme-loader-test',
      entries: [{ id: manifest.name, url, rev: manifest.version, immediately: true }],
      batches: [{ phase: 'application', url, rev: manifest.version, entries: [manifest.name] }]
    },
    staticModules: {},
    loadBundle: async () => {
      loads++;
      new vm.Script(code, { filename: `${manifest.name}/client.js` }).runInContext(browser.context);
    }
  });
  const plugin = await modules.import(manifest.name);
  assert.equal(loads, 1);
  assert.equal(modules.importError(manifest.name), undefined);
  assert.equal(browser.styles.length, 0);
  return { browser, modules, plugin, manifest };
}

test('通过真实宿主模块加载器导入、激活、卸载主题', { skip: !hostFixture && '需要设置 DSH_CLIENT_MODULES_FIXTURE，指向安装包中的真实客户端模块加载器' }, async () => {
  const { browser, modules, plugin, manifest } = await loadedTheme();
  const dispose = plugin.apply({});
  assert.equal(typeof dispose, 'function');
  assert.equal(browser.styles.length, 1);
  browser.window.__ESCOOK_THEME__.setScheme('light');
  assert.equal(browser.attributes.get('data-dsh-theme'), 'escook-light');
  dispose();
  modules.invalidate(manifest.name);
  assert.equal(browser.styles.length, 0);
  assert.equal(browser.window.__ESCOOK_THEME__, undefined);
});

test('真实 Cordis 负责主题激活、卸载与重新启用', {
  skip: !(hostFixture && cordisFixture) && '需要真实宿主加载器和 DSH_CORDIS_FIXTURE，缺少时不得视为已验证'
}, async () => {
  const { Context } = await import(pathToFileURL(resolve(cordisFixture)));
  const { browser, modules, manifest } = await loadedTheme();
  const ctx = new Context();
  try {
    for (let iteration = 0; iteration < 2; iteration++) {
      const plugin = await modules.import(manifest.name);
      assert.equal(browser.styles.length, 0);
      const fiber = ctx.plugin(plugin);
      await fiber;
      assert.equal(browser.styles.length, 1);
      for (const key of Object.keys(plugin.THEME_SCHEMES)) {
        browser.window.__ESCOOK_THEME__.setScheme(key);
        assert.equal(browser.attributes.get('data-dsh-theme'), `escook-${key}`);
      }
      await fiber.dispose();
      assert.equal(browser.styles.length, 0, '真实卸载应清理主题样式');
      assert.equal(browser.attributes.has('data-dsh-theme'), false);
      assert.equal(browser.window.__ESCOOK_THEME__, undefined);
      modules.invalidate(manifest.name);
    }
  } finally {
    await ctx.fiber.dispose();
  }
});
