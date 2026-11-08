// S10: Hold Alt. Chapter 7 with everything revealed: people, places, things, the Thought labeled in the margin,
// notes, tasks and fixes in the gutter, and a key hint at the bottom.
const L = require('../lib');
const P = L.sample.chapter7Paragraphs;
const I = L.icons;

const marks = {
  2: L.gm('note', L.lineTop(0)),
  4: L.gm('task', L.lineTop(0)),
  5: `<span class="gms" style="top:${L.lineTop(1)}px"><span class="gm note">${I.note}</span><span class="gm task">${I.task}</span><span class="gm more">+1</span></span>`,
  6: `<span class="mlabel" style="top:${L.lineTop(0) - 2}px">Thought</span>`,
  8: L.gm('fix', L.lineTop(0)),
};
const col = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>`
  + P.slice(0, 9).map((p, i) => {
    const para = `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`;
    return marks[i] ? `<div class="para">${para}${marks[i]}</div>` : para;
  }).join('');

const css = `<style>
.s10 .mlabel{color:#8f6a14;font-size:11px;top:8px}
.s10 .keyhint{position:absolute;left:50%;bottom:18px;transform:translateX(-50%);z-index:26;display:inline-flex;align-items:center;gap:8px;background:#fff;border:1px solid var(--line);border-radius:16px;padding:5px 14px;font:12.5px var(--ui);color:var(--ink2);box-shadow:0 4px 14px rgba(0,0,0,.08);white-space:nowrap}
.s10 .keyhint kbd{margin:0}
</style>`;

const hint = `<div class="keyhint"><kbd>Alt</kbd> held · release to clear · <kbd>Ctrl+Shift+A</kbd> keeps it</div>`;

const html = css + L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  page: L.pageCol(col, { paddingTop: 40 }),
  status: { style: 'Plain', words: '2,418 words', pages: 'book p. ~146/248', fixes: '3 fixes' },
  ask: 'normal',
  content: hint,
  extra: L.ann(1, 'Everything Libreto knows about this page: people blue, places green, things purple, the Thought tinted and named in the margin, notes, tasks and fixes in the gutter', 40, 150, { w: 320 })
    + L.ann(2, 'Release Alt and the page is clean; Ctrl+Shift+A toggles the same reveal for those who find Alt awkward', 40, 268, { w: 320 })
    + L.ann(3, 'Alt+click a name opens its peek', 1060, 150, { w: 240 })
    + L.ann(4, 'Several marks on one line stack sideways: three at most, then a count', 1112, 560, { w: 280 })
    + L.ann(5, 'Hovering does nothing by itself: no card ever pops up because the mouse passed over a word', 1060, 680, { w: 300 }),
});

module.exports = {
  id: 'S10',
  file: 's10-hold-alt',
  title: 'Hold Alt',
  width: 1440,
  height: 900,
  html: html.replace('<div class="win"', '<div class="win s10"'),
  caption: L.caption({
    id: 'S10', title: 'Hold Alt',
    scene: 'The writer holds Alt on chapter 7. For as long as the key is down, the page shows everything Libreto knows about it: people, places and things tinted by kind, the thought labeled in the margin, every note, task and fix in the gutter. A small line at the bottom says how to keep or clear it.',
    on: 'chapter 7 with Vega, Lena and Kit in blue, the Blue Lamp, the back-room door and the station steps in green, the little green ledger in purple, “It was a good lie.” tinted with the margin label Thought, gutter marks (a note, a task, a note + task + “+1” on one line, a fix), the key hint “Alt held · release to clear · Ctrl+Shift+A keeps it”, the Ask button, the status bar with Highlights off',
    off: 'a peek card or any hover card, navigator, Reference panel, Highlights turned on in the status bar, Search &amp; ask box, provider icon in the status bar',
  }),
};
