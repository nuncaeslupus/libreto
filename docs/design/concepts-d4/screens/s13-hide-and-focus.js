// S13: one key back to the page (Ctrl+Shift+H), and Focus (F11). Two windows side by side, at half size:
// left the normal Write after Ctrl+Shift+H, right Focus (only the page) with the small "Exit focus" at the top.
const L = require('../lib');
const P = L.sample.chapter7Plain;
const SC = 0.488;

const marks = { 2: L.gm('note', L.lineTop(0)) };
const withMarks = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>`
  + P.map((p, i) => {
    const para = `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`;
    return marks[i] ? `<div class="para">${para}${marks[i]}</div>` : para;
  }).join('');
const plain = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>`
  + P.map((p, i) => `<p${i === 0 ? ' class="first"' : ''}>${p.replace('“Kit who?” Lena', '“Kit who?” <span class="hit">Lena</span>')}</p>`).join('');

// left: S12 after Ctrl+Shift+H, both columns closed, the reveal quiet, your note still in the gutter
const write = L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  page: L.pageCol(withMarks, { paddingTop: 40 }),
  strip: { reviewCount: 12 },
  status: { style: 'Plain', words: '2,418 words', pages: 'p. 146 of 248' },
  ask: 'normal',
  extra: L.tip('Hide both columns', { x: 10, y: 98, key: 'Ctrl+Shift+H' }),
});

// right: Focus. No title bar, menu bar, strip, status bar or Ask button: the page alone; a peek is open on Lena
const peek = `<div class="peek" style="left:520px;top:396px;width:300px">`
  + `<div class="pk-kind">Person</div><div class="pk-title" style="color:var(--accent)">Lena</div>`
  + `<div class="pk-line">Bartender at the Blue Lamp. Covers for Kit.</div>`
  + `<div class="pk-actions"><span class="btn">Open</span><span class="sp"></span><kbd>Esc</kbd></div></div>`;
const focus = `<div class="win" style="width:1440px;height:900px">`
  + `<div class="content">${L.pageCol(plain, { paddingTop: 72 })}${peek}`
  + `<div class="exitf"><span>Exit focus</span><kbd>F11</kbd></div>`
  + `</div></div>`;

const frame = (html, x, y) => `<div style="position:absolute;left:${x}px;top:${y}px;width:${1440 * SC}px;height:${900 * SC}px;overflow:hidden;box-shadow:0 6px 24px rgba(0,0,0,.14)">`
  + `<div style="transform:scale(${SC});transform-origin:top left">${html}</div></div>`;
const label = (t, x, y) => `<div style="position:absolute;left:${x}px;top:${y}px;font:600 11px var(--ui);letter-spacing:.06em;text-transform:uppercase;color:#66696e">${t}</div>`;

const css = `<style>
.s13 .exitf{position:absolute;left:50%;top:12px;transform:translateX(-50%);display:inline-flex;gap:8px;align-items:center;background:#fff;border:1px solid var(--line);border-radius:14px;padding:4px 12px;font:12.5px var(--ui);color:var(--ink2);box-shadow:0 2px 8px rgba(0,0,0,.08)}
.s13 .hit{background:rgba(0,0,0,.08);box-shadow:0 0 0 2px rgba(0,0,0,.08);border-radius:2px}
</style>`;

const FX = 16, FX2 = 16 + 1440 * SC + 8, FY = 44, H = 690;
const html = css + `<div class="s13" style="position:relative;width:1440px;height:${H}px;background:#d9d9d6">`
  + label('Write, after Ctrl+Shift+H', FX, 20)
  + frame(write, FX, FY)
  + label('Focus · F11 or View ▸ Focus', FX2, 20)
  + frame(focus, FX2, FY)
  + L.ann(1, 'Ctrl+Shift+H closed both columns and quieted the reveal; the same key brings back what was open. Open a column by hand in between, and the key just hides again', FX, 506, { w: 300 })
    + L.ann(2, 'Your notes stay in the gutter; the page did not move', 420, 506, { w: 250 })
    + L.ann(3, 'Focus leaves only the page: no strip, status bar or Ask button. The book’s own paragraph spacing and first-line indent, as set in Book; in the whole-book view, the whole book, scrolled where you were', FX2, 506, { w: 330 })
    + L.ann(4, 'The mouse brings back the small “Exit focus” at the top; F11 leaves Focus', 1110, 506, { w: 290 })
    + L.ann(5, 'Esc closes the innermost thing (this peek, a card) and nothing more: never Focus itself', 1110, 590, { w: 290 })
  + `</div>`;

module.exports = {
  id: 'S13',
  file: 's13-hide-and-focus',
  title: 'One key back to the page, and Focus',
  width: 1440,
  height: H,
  html,
  caption: L.caption({
    id: 'S13', title: 'One key back to the page, and Focus',
    scene: 'Two windows at half size. Left: the writer pressed Ctrl+Shift+H on the S12 layout: both columns closed, the reveal quiet, her note still in the gutter. Right: F11. Focus leaves only the page; the mouse just moved, so the small “Exit focus · F11” shows at the top; a peek on Lena is open, and Esc will close the peek, not Focus.',
    on: 'left: the window with menu bar and strip (both toggles off, the tooltip “Hide both columns · Ctrl+Shift+H”), the page with the note bubble, the Ask button, the status bar; right: the page alone on the paper, “Exit focus F11” at the top, a peek on Lena with Esc',
    off: 'left: navigator, Reference panel, the reveal’s hues; right: title bar, menu bar, strip, status bar, Ask button, any badge',
  }),
};
