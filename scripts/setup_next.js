import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

console.log('Creating Next.js app in temp_next...');
if (fs.existsSync('temp_next')) {
  fs.rmSync('temp_next', { recursive: true, force: true });
}

execSync('npx -y create-next-app@latest temp_next --ts --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm --yes', {
  stdio: 'inherit'
});

console.log('Copying files from temp_next to root...');
const items = fs.readdirSync('temp_next');
for (const item of items) {
  const src = path.join('temp_next', item);
  const dest = path.join('.', item);
  fs.cpSync(src, dest, { recursive: true, force: true });
}

console.log('Cleaning up temp_next...');
fs.rmSync('temp_next', { recursive: true, force: true });

console.log('Installing lucide-react...');
execSync('npm install lucide-react', { stdio: 'inherit' });

console.log('Setup complete!');
