import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import test from 'node:test';

const require = createRequire(import.meta.url);
const semver = require('semver');
const manifest = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8'));
const range = manifest.peerDependencies['@deepseek-ai/dsh-client-ui-theme'];

// 与宿主 evaluatePluginCompatibility 一致，预发布版本参与范围比较。
for (const version of ['0.0.1-rc.1', '0.1.0-rc.1', '0.1.7-rc.2', '0.2.0-rc.2', '0.2.0', '0.2.5']) {
  test(`主题允许兼容的运行时 ${version}`, () => {
    assert.equal(semver.satisfies(version, range, { includePrerelease: true }), true);
  });
}

for (const version of ['0.0.0', '0.2.0-rc.1', '0.3.0-rc.1', '0.3.0', '1.0.0']) {
  test(`主题拒绝未适配的运行时 ${version}`, () => {
    assert.equal(semver.satisfies(version, range, { includePrerelease: true }), false);
  });
}
