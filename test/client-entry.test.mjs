import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import vm from 'node:vm';
import { browserFixture } from './helpers/browser.mjs';

const packageUrl = new URL('../package.json', import.meta.url);
const manifest = JSON.parse(await readFile(packageUrl, 'utf8'));
const clientCode = await readFile(new URL(manifest.exports['./client'], packageUrl), 'utf8');

function registeredClient(browser = browserFixture()) {
  const registrations = [];
  browser.window.__ModuleLoader__ = { load: (registration) => registrations.push(registration) };
  new vm.Script(clientCode, { filename: 'dsh-theme-escook/client.js' }).runInContext(browser.context);
  assert.equal(registrations.length, 1);
  assert.equal(registrations[0].id, manifest.name);
  assert.equal(typeof registrations[0].factory, 'function');
  const client = registrations[0].factory((request) => { throw new Error(`不应加载外部依赖 ${request}`); });
  return { browser, client };
}

test('客户端以普通脚本注册正确模块，并在激活前保持无副作用', () => {
  assert.ok(manifest.dsh?.client);
  const { browser, client } = registeredClient();
  assert.equal(typeof client.apply, 'function');
  assert.equal(Object.keys(client.THEME_SCHEMES).length, 4);
  assert.equal(browser.styles.length, 0);
  assert.equal(browser.window.__ESCOOK_THEME__, undefined);
});

test('宿主激活后可切换四套主题，卸载时清理样式和控制器', () => {
  const { browser, client } = registeredClient();
  const dispose = client.apply({});
  assert.equal(typeof dispose, 'function');
  assert.equal(browser.styles.length, 1);
  const controller = browser.window.__ESCOOK_THEME__;
  for (const key of Object.keys(client.THEME_SCHEMES)) {
    controller.setScheme(key);
    assert.equal(controller.getCurrentScheme(), key);
    assert.equal(browser.attributes.get('data-dsh-theme'), `escook-${key}`);
    assert.equal(browser.styles[0].textContent, client.THEME_SCHEMES[key].css);
  }
  dispose();
  assert.equal(browser.styles.length, 0);
  assert.equal(browser.window.__ESCOOK_THEME__, undefined);
  assert.equal(browser.attributes.has('data-dsh-theme'), false);
});

test('桌面内置主题路径同步配色，并在卸载时释放插件控制器', () => {
  const browser = browserFixture();
  let registered;
  let current = 'dark-soft';
  browser.window.__DSH_BUILTIN_THEMES__ = {
    registerThemes(schemes) { registered = schemes; },
    apply(key) { current = key; },
    getCurrent() { return current; }
  };
  const { client } = registeredClient(browser);
  const dispose = client.apply({});
  assert.equal(typeof dispose, 'function');
  assert.equal(registered, client.THEME_SCHEMES);
  const controller = browser.window.__ESCOOK_THEME__;
  controller.setScheme('light');
  assert.equal(controller.getCurrentScheme(), 'light');
  assert.equal(browser.styles.length, 0);
  dispose();
  assert.equal(browser.window.__ESCOOK_THEME__, undefined);
});
