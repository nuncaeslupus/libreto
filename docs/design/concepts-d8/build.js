#!/usr/bin/env node
// Libreto concept draft 4 builder: node build.js [id…]
// Loads every screens/*.js module ({id, file, title, width, height, html, caption}),
// writes <file>.html next to d4.css and renders <file>.png with Playwright at 2×.
'use strict';
const fs = require('fs');
const path = require('path');

const here = __dirname;
const screensDir = path.join(here, 'screens');
const want = process.argv.slice(2).map((s) => s.toLowerCase());

const mods = fs.readdirSync(screensDir).filter((f) => f.endsWith('.js')).sort()
  .map((f) => ({ f, m: require(path.join(screensDir, f)) }))
  .filter(({ f, m }) => !want.length || want.some((w) => w === String(m.id).toLowerCase() || w === m.file.toLowerCase() || w === f.toLowerCase().replace(/\.js$/, '')));

if (!mods.length) { console.error('no screen matches', want.join(' ')); process.exit(1); }

function pageHtml(s) {
  const width = s.width || 1440;
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=${width}">
<title>Libreto concept ${s.id}: ${s.title}</title>
<link rel="stylesheet" href="d4.css">
</head><body style="width:${width}px;background:#d9d9d6">
${s.html}
${s.caption || ''}
</body></html>
`;
}

(async () => {
  const { chromium } = require('playwright');
  const browser = await chromium.launch();
  try {
    for (const { m: s } of mods) {
      const out = path.join(here, s.file);
      fs.writeFileSync(out + '.html', pageHtml(s));
      const ctx = await browser.newContext({ viewport: { width: s.width || 1440, height: 10 }, deviceScaleFactor: 2 });
      const page = await ctx.newPage();
      await page.setViewportSize({ width: s.width || 1440, height: 10 });
      await page.goto('file://' + out + '.html');
      await page.evaluate(() => document.fonts.ready);
      await page.screenshot({ path: out + '.png', fullPage: true });
      await ctx.close();
      console.log(`${s.id}  ${s.file}.html  ${s.file}.png`);
    }
  } finally {
    await browser.close();
  }
})().catch((e) => { console.error(e); process.exit(1); });
