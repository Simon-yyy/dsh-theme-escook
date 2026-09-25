import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const packageUrl = new URL('../package.json', import.meta.url);
const manifest = JSON.parse(await readFile(packageUrl, 'utf8'));

test('client plugin exposes the subpath required by DSH', async () => {
  assert.ok(manifest.dsh?.client);
  assert.equal(manifest.exports?.['./client'], './client/client.js');

  const client = await import('dsh-theme-escook/client');
  assert.equal(typeof client.default, 'function');
});
