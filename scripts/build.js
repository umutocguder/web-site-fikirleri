/**
 * Created by 11Hopem
 * Contact: umutocgdr@gmail.com
 *
 * Copyright (c) 2026 11hopem. All rights reserved.
 * Licensed under proprietary software license terms.
 * Any unauthorized reproduction, transfer, or distribution is strictly prohibited.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    for (const item of fs.readdirSync(src)) {
      copyRecursive(path.join(src, item), path.join(dest, item));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

console.log('[Build] Synchronizing web-site-fikirleri into public/ directory...');
if (!fs.existsSync(PUBLIC_DIR)) {
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
}

// Copy index.html, assets, fikirler, robots.txt, sitemap.xml
for (const item of ['index.html', 'assets', 'fikirler', 'robots.txt', 'sitemap.xml', 'degerlendirme-matrisi.md']) {
  const srcPath = path.join(ROOT_DIR, item);
  const destPath = path.join(PUBLIC_DIR, item);
  if (fs.existsSync(srcPath)) {
    copyRecursive(srcPath, destPath);
  }
}

// Copy favicon files directly to public root
for (const fav of ['favicon.ico', 'favicon.svg', 'apple-touch-icon.png', 'og-image.png', 'logo.svg']) {
  const srcFav = path.join(ROOT_DIR, 'assets', fav);
  const destFav = path.join(PUBLIC_DIR, fav);
  if (fs.existsSync(srcFav)) {
    fs.copyFileSync(srcFav, destFav);
  }
}

console.log('[Build] Build complete! Public directory is production-ready.');
