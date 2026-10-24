/**
 * Created by 11Hopem
 * Copyright (c) 2026 11Hopem. All rights reserved.
 * Licensed under 11Hopem Proprietary License.
 */

import { test } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

test('Verify all 20 AI idea briefs exist across 7 verticals and have structured sections', () => {
  const ideasDir = path.join(ROOT_DIR, 'fikirler');
  assert.ok(fs.existsSync(ideasDir), 'fikirler directory must exist');

  const categories = [
    '01-otonom-ajanlar-ve-otomasyon',
    '02-sesli-yapay-zeka-ve-iletisim',
    '03-bilgisayarli-goru-ve-multimodal',
    '04-dikey-ai-saas-ve-sektorel',
    '05-uretken-medya-ve-pazarlama',
    '06-egitim-edtech-ve-kisisel-ai',
    '07-gelistirici-ve-operasyon-ai'
  ];

  let totalIdeaFiles = 0;
  categories.forEach(cat => {
    const catPath = path.join(ideasDir, cat);
    assert.ok(fs.existsSync(catPath), `Category directory must exist: ${cat}`);
    const files = fs.readdirSync(catPath).filter(f => f.endsWith('.md'));
    assert.ok(files.length >= 2, `Category ${cat} must contain at least 2 idea files`);
    totalIdeaFiles += files.length;

    files.forEach(f => {
      const content = fs.readFileSync(path.join(catPath, f), 'utf-8');
      assert.match(content, /Problem/i, `File ${f} must detail the Problem`);
      assert.match(content, /Hedef Kitle/i, `File ${f} must specify Target Audience`);
      assert.match(content, /MVP|Mimari|Özellik/i, `File ${f} must outline MVP or Architecture scope`);
      assert.match(content, /Gelir/i, `File ${f} must explain Revenue Model`);
      assert.match(content, /Benchmark/i, `File ${f} must list Real-world Benchmarks`);
    });
  });

  assert.strictEqual(totalIdeaFiles, 20, 'Must contain exactly 20 deep AI venture briefs');
});

test('Verify evaluation matrix document exists and contains AI comparison table', () => {
  const matrixPath = path.join(ROOT_DIR, 'degerlendirme-matrisi.md');
  assert.ok(fs.existsSync(matrixPath), 'degerlendirme-matrisi.md must exist');
  const content = fs.readFileSync(matrixPath, 'utf-8');
  assert.match(content, /VoiceDesk AI/);
  assert.match(content, /RefundOps AI/);
  assert.match(content, /LexRedline AI/);
  assert.match(content, /Top 3/i);
});

test('Verify index.html branding, SEO and 1:1 Favicon compliance', () => {
  const htmlPath = path.join(ROOT_DIR, 'index.html');
  assert.ok(fs.existsSync(htmlPath), 'index.html must exist');
  const html = fs.readFileSync(htmlPath, 'utf-8');

  assert.match(html, /<meta name="author" content="11Hopem"/i);
  assert.match(html, /<link rel="icon" type="image\/svg\+xml" href="\/favicon\.svg"/i);
  assert.match(html, /<link rel="icon" type="image\/x-icon" href="\/favicon\.ico"/i);
  assert.match(html, /https:\/\/11hopem\.com/i);
  assert.ok(!html.includes('Software Ltd. Şti.'), 'Must strictly not include "Software Ltd. Şti."');
});

test('Verify brand assets exist and are not empty', () => {
  for (const f of ['assets/logo.svg', 'public/logo.svg', 'public/favicon.svg', 'public/favicon.ico', 'public/apple-touch-icon.png', 'public/og-image.png']) {
    const full = path.join(ROOT_DIR, f);
    assert.ok(fs.existsSync(full), `Asset must exist: ${f}`);
    assert.ok(fs.statSync(full).size > 0);
  }
});
