// S13: one key back to the page (Ctrl+Shift+H), and Focus (F11). Two frames stacked.
const L = require('../lib');
const P = L.sample.chapter7Plain;

// the same marks as S12: a note on the third paragraph, a task on the fifth
const marks = { 2: L.gm('note', L.lineTop(0)), 4: L.gm('task', L.lineTop(0)) };
const withMarks = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>`
  + P.map((p, i) => {
    const para = `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`;
    return marks[i] ? `<div class="para">${para}${marks[i]}</div>` : para;
  }).join('');
const plain = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>`
  + P.map((p, i) => `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`).join('');

const label = (t) => `<div style="font:600 11px var(--ui);letter-spacing:.06em;text-transform:uppercase;color:#66696e;padding:12px 28px 8px">${t}</div>`;

// top frame: S12 after Ctrl+Shift+H
const top = L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  page: L.pageCol(withMarks, { paddingTop: 40 }),
  status: { style: 'Plain', words: '2,418 words', pages: 'book p. ~146/248', fixes: '3 fixes' },
  ask: 'normal',
  extra: L.tip('Show the chapters', { x: 10, y: 128, key: 'Ctrl+Shift+L' })
    + L.ann(1, 'One key, Ctrl+Shift+H, hid both columns and quieted the highlights; the same key brings back what was open', 40, 300, { w: 300 })
    + L.ann(2, 'The marks stay in the gutter; the page did not move', 1076, 230, { w: 260 }),
});

// bottom frame: Focus. No menu bar, no strip, no status bar, no Ask button: the page alone.
const focus = `<div class="win" style="width:1440px;height:900px">`
  + `<div class="content">${L.pageCol(plain, { paddingTop: 72 })}`
  + `<div style="position:absolute;right:22px;top:16px;opacity:.5;font:12.5px var(--ui);color:var(--ink2)">Exit focus · F11</div>`
  + `</div>`
  + L.ann(3, 'Focus: nothing but the page, with the book’s own paragraph spacing and indent', 40, 300, { w: 300 })
  + L.ann(4, 'The mouse brings back this small “Exit focus”; F11 or Esc leaves', 1076, 48, { w: 280 })
  + `</div>`;

const html = `<div style="background:#d9d9d6">${label('After Ctrl+Shift+H')}${top}${label('Focus · F11')}${focus}</div>`;

module.exports = {
  id: 'S13',
  file: 's13-hide-and-focus',
  title: 'One key back to the page, and Focus',
  width: 1440,
  height: 1900,
  html,
  caption: L.caption({
    id: 'S13', title: 'One key back to the page, and Focus',
    scene: 'Top: the writer pressed Ctrl+Shift+H on the S12 layout: both columns closed, highlights off, the two marks still in the gutter, the mouse on the left toggle. Bottom: F11. Focus leaves only the page; the mouse just moved, so a faded “Exit focus · F11” shows at the top right.',
    on: 'top: the strip with both toggles off and the tooltip “Show the chapters · Ctrl+Shift+L”, the page with the note and task marks, the Ask button, the status bar with Highlights inactive; bottom: the page alone on the paper and the faded “Exit focus · F11”',
    off: 'top: navigator, Reference panel, highlights; bottom: title bar, menu bar, strip, status bar, Ask button, marks, Search &amp; ask box, provider icon in the status bar',
  }),
};
