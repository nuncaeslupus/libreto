// S08: Structure edits and their notices (draft 8; from draft 7's S06). A typed *** that became a soft rule, a detected
// break (dashed blue rule) with its card, and, after deleting chapter 8, the notice with Undo and Open in Discarded.
// Insets: *** before and after Enter; a paste that starts 12 chapters.
const L = require('../lib');
const P = L.sample.chapter7Plain;
const I = L.icons;

const css = `<style>
.s08 .brk{padding:6px 0;margin:6px 0;position:relative}
.s08 .brk .srule{margin:12px 90px}
.s08 .brk .srule.det{border-top:2px dashed var(--gram);margin:12px 90px;-webkit-mask-image:none}
.s08 .nav{position:relative;width:292px}
.s08 .navfoot{border-top:1px solid var(--line);padding:4px 8px 8px;background:var(--soft)}
.s08 .navfoot .nrow.pinned{border-top:0;margin:0;padding:4px}
.s08 .nrow.fresh{background:rgba(59,110,168,.07)}
.s08 .notice .ntx b{font-weight:600}
.s08 .notice{white-space:nowrap}
.s08 .notice .lk{white-space:nowrap}
.s08b{position:relative;display:flex;gap:16px;padding:18px 28px;background:#e3e3e0;align-items:flex-start}
.s08b .cbx{position:relative;background:var(--paper);height:290px;overflow:hidden}
.s08b .mn{width:420px;margin:0 auto;padding-top:16px;font:15px/1.6 var(--text);color:var(--ink)}
.s08b .mn p{margin:0}
.s08b .mn .srule{margin:12px 70px}
.s08b .typed{font:15px/1.6 var(--text);letter-spacing:.2em;color:var(--ink2);margin:6px 0}
.s08b .mn .notice{position:absolute;bottom:10px}
.s08b .h{font:400 22px/1.3 var(--text);margin:6px 0 4px;display:block}
.s08b .h.pr{color:var(--ink3)}
.s08b .ph{display:inline-block;border:1px dashed var(--gram);padding:0 5px;border-radius:3px}
</style>`;

const pLeave = 'Vega left the coin where it was and her glass untouched. She did not look at the back-room door on the way out, which took more effort than the walk home would.';
const p11 = 'Outside, the rain had started again by the time Vega woke, and the light through the blind was the flat gray of nine in the morning. She lay still and counted what she knew, which did not take long.';
const brk = (det) => `<div class="brk"><div class="srule${det ? ' det' : ''}"></div></div>`;
const col = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>`
  + `<p class="first">${P[5]}</p>` + brk(false)
  + `<p class="first">${pLeave}</p>` + brk(true)
  + `<p class="first">${p11}</p>`;

const raw = (h) => ({ type: 'raw', html: h });
const nrow = (n, t, cls = '') => raw(`<div class="nrow ${cls}"><span class="cv"></span><span class="n">${n}</span><span class="t">${t}</span></div>`);
const rows = [
  { type: 'part', title: 'Part One: Winter in the Harbor District' },
  { type: 'chapter', n: 5, title: 'Kit’s ledger' },
  { type: 'chapter', n: 6, title: 'The back room' },
  { type: 'chapter', n: 7, title: 'Lena’s warning', cur: true },
  { type: 'scene', title: 'Vega asks about Kit' },
  { type: 'scene', title: 'Lena lies about the back room', here: true },
  { type: 'scene', title: 'Vega leaves without paying' },
  { type: 'scene', title: 'Outside, the rain…', det: true },
  nrow(8, 'The pawnshop', 'fresh'),
  { type: 'part', title: 'Part Two: Spring' },
  { type: 'chapter', n: 9, title: 'Station steps' },
  { type: 'chapter', n: 10, title: 'The back room, finally' },
];
const foot = `<div class="nrow pinned"><span class="cv">${I['chevron-right']}</span><span class="t">Discarded</span><span class="gc" style="color:var(--ink);font-weight:600">4</span></div>`
  + `<div class="nrow pinned"><span class="cv">${I['chevron-right']}</span><span class="t">Unplaced</span><span class="gc">2</span></div>`;

const card = L.markCard({
  kind: 'prop', title: 'Suggestion · scene break', who: 'L',
  text: 'The time jumps from night to the next morning',
  acts: [['✓', 'Accept', ''], ['✗', 'Reject', '']], x: 1070, y: 400, w: 290,
});

const notice = L.notice('<b>Deleted chapter 8 “Closing time”</b> (2,300 words); the chapters after it moved up one', {
  kind: 'info', standing: true, undo: false,
  acts: '<span class="lk">Undo<kbd>Ctrl+Z</kbd></span><span class="lk">Open in Discarded</span>',
});

const win = L.win({
  view: 'Text', height: 880,
  crumbs: L.sample.crumbs7,
  left: L.navigator({ rows, footer: foot, section: 'Book' }),
  page: L.pageCol(col, { paddingTop: 40 }),
  strip: { review: 12, leftOn: true },
  status: { style: 'Plain', words: '812 of 1,000 today', goal: 81, pages: 'p. 146 of 248' },
  ask: 'normal',
  content: notice,
  extra: card
    + L.ann(1, 'A typed *** (or - - -, ~) on its own line became this soft rule; on disk it stays a *** line', 1070, 210, { w: 300 })
    + L.ann(2, 'Detected: the time jumps without a break. A dashed blue rule and a card; nothing exists until you accept', 1070, 290, { w: 300 })
    + L.ann(3, 'The detected scene shows in the list on a dashed guide, in gray, until it is accepted', 20, 520, { w: 250 })
    + L.ann(4, 'Deleting a chapter never asks first. Libreto says what happened, in words and numbers, and keeps the text in Discarded (now 4)', 20, 640, { w: 250 })
    + L.ann(5, 'The notice stays until you type on or press ✕. It says Undo while it is the latest step and Revert after later edits; the text stays in Discarded either way', 1000, 715, { w: 330 }),
});

const crop = (label, w, inner) => `<div class="crop" style="width:${w}px"><div class="lbl">${label}</div>${inner}</div>`;
const typing = crop('Typing *** and Enter', 420, `<div class="cbx"><div class="mn" style="width:364px"><p>She stood there long enough for the light to go out.</p><div class="typed">***<span class="cursor" style="height:15px;vertical-align:-3px"></span></div></div>`
  + `<div style="position:absolute;left:0;right:0;top:92px;text-align:center;font:12px var(--ui);color:var(--ink3)">after Enter</div>`
  + `<div class="mn" style="width:364px;padding-top:0;position:absolute;left:0;right:0;top:112px"><div class="srule"></div><p>The next morning the rain had started again.<span class="cursor" style="height:15px;vertical-align:-3px"></span></p></div></div>`);

const paste = crop('A paste that starts 12 chapters', 680, `<div class="cbx"><div class="mn" style="width:520px"><span class="h">Chapter 1</span><p>Rain had been falling on the Blue Lamp since noon, and by six the gutters on Harbor Street had given up.</p><span class="h">Chapter 2</span><p>The bartender did not look up when the door opened.</p><span class="h">Chapter 3</span><p>…</p></div>`
  + L.notice('This paste starts <b>12 chapters</b>', { kind: 'info', standing: true, undo: false, acts: '<span class="lk">Make them chapters</span><span class="lk">Paste headings as plain text</span><span class="lk">Undo</span>' })
  + `</div>`);

const html = css + '<div class="s08">' + win + '</div>'
  + `<div class="below s08b">${typing}${paste}`
  + L.ann(6, '“Make them chapters” accepts them; “Paste headings as plain text” keeps the words and drops the structure. Until you choose, the paste is already in and Undo takes it all back', 1170, 60, { w: 230 })
  + `</div>`;

module.exports = {
  id: 'S08',
  file: 's08-structure',
  title: 'Scene breaks and structure edits',
  width: 1440,
  height: 1300,
  html: html.replace(/<div class="win"/, '<div class="win s08"'),
  caption: L.caption({
    id: 'S08', title: 'Scene breaks and structure edits',
    scene: 'Chapter 7 after a few edits. The writer typed *** a moment ago and it became a soft rule; further down, Libreto noticed a time jump and drew a dashed blue rule with its card. Chapter 8 was just deleted, and the notice says exactly what happened. Under the window: *** before and after Enter, and a paste that starts 12 chapters.',
    on: 'the Navigator (chapters 5 to 10 with the old chapter 9 now 8, the detected scene on a dashed guide, Discarded 4, Unplaced 2); the soft rule; the dashed blue rule with the card “Suggestion · scene break” (initial L, Accept, Reject); the notice “Deleted chapter 8 “Closing time” (2,300 words); the chapters after it moved up one · Undo · Open in Discarded · ✕”; insets: ***, then a rule after Enter; the paste notice “This paste starts 12 chapters · Make them chapters · Paste headings as plain text · Undo”',
    off: 'a confirmation dialog before deleting, a timer on any notice, the typed characters after they became a rule, scene names (Show ▸ Scene names is off)',
  }),
};
