import { build } from 'esbuild';
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = new URL('../', import.meta.url);
const manifest = JSON.parse(await readFile(new URL('package.json', root), 'utf8'));
const result = await build({
  absWorkingDir: fileURLToPath(root),
  entryPoints: ['client/client.js'],
  bundle: true,
  platform: 'browser',
  format: 'cjs',
  target: 'es2020',
  write: false,
  legalComments: 'none'
});

// 加载脚本时只注册工厂；源码与样式副作用由宿主在导入、激活时执行。
const code = `// 自动构建产物，请修改 client/client.js 后运行 npm run build。\nwindow.__ModuleLoader__.load({\n  id: ${JSON.stringify(manifest.name)},\n  factory: (require) => {\n    const module = { exports: {} };\n    const exports = module.exports;\n${result.outputFiles[0].text}\n    return module.exports;\n  }\n});\n`;
await writeFile(new URL(manifest.exports['./client'], root), code, 'utf8');
console.log(`已构建 ${manifest.name} 的前端注册包。`);
