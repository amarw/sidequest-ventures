// Fails the build if anything from docs/ ended up in the deploy output.
import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const dist = 'dist';
const leaks = [];
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (/^(docs|designs|design-system|canvas-source)$/i.test(name) || /\.dc\.html$/i.test(name)) leaks.push(p);
    if (statSync(p).isDirectory()) walk(p);
  }
};
walk(dist);
if (leaks.length) {
  console.error('Design docs leaked into dist/:\n' + leaks.join('\n'));
  process.exit(1);
}
console.log('dist/ check passed: no docs/ content in the deploy output.');
