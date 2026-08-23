/**
 * Theme Variable Integrity Test Suite
 */

import { THEME_SCHEMES } from '../client/client.js';

console.log('🧪 [Test] Running dsh-theme-escook validation tests...');

const REQUIRED_VARS = [
  '--dsw-alias-bg-base',
  '--dsw-alias-bg-layer-1',
  '--dsw-alias-bg-layer-2',
  '--dsw-specific-sidebar-fill',
  '--dsw-alias-brand-primary',
  '--dsw-alias-button-primary-fill',
  '--dsw-alias-label-primary'
];

let hasErrors = false;

for (const [key, scheme] of Object.entries(THEME_SCHEMES)) {
  console.log(`  Checking scheme: ${scheme.name} (${key})...`);
  for (const v of REQUIRED_VARS) {
    if (!scheme.css.includes(v)) {
      console.error(`    ❌ Missing required CSS variable: ${v}`);
      hasErrors = true;
    }
  }
}

if (hasErrors) {
  console.error('\n❌ Tests failed.');
  process.exit(1);
} else {
  console.log('\n✅ All 4 theme schemes passed CSS variable integrity checks!');
}
