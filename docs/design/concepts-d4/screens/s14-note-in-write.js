// S14: a note, without leaving Write. A clicked note bubble with its card beside the line, the anchored words
// tinted; a folded bubble with a count; the faint + on the line under the mouse.
const L = require('../lib');
const P = L.sample.chapter7Plain.slice();

P[5] = P[5].replace('since Tuesday', '<span class="tint-n">since Tuesday</span>');

const extraCss = `<style>
.tint-n{background:rgba(184,134,11,.22);box-shadow:inset 0 -2px 0 rgba(184,134,11,.55);border-radius:2px}
.nline{position:absolute;left:calc(100% + 31px);width:42px;height:1.5px;background:var(--note)}
.gm.add{color:var(--ink4);border:1px solid var(--line);border-radius:4px;background:#fff}
.gm.add svg{width:11px;height:11px}
.gm.fold2{width:auto!important;gap:1px!important}
.gm.fold2 i{font:600 10px var(--ui);font-style:normal;color:var(--note);margin-left:2px}
.mc.note.sel{border-color:var(--note);box-shadow:0 0 0 3px var(--note-tint),0 10px 30px rgba(0,0,0,.12)}
.mc.note .mc-x .lk{text-decoration:underline;text-underline-offset:2px}
.mc.note .mc-x{color:var(--ink);font-size:13px}
.mc.note .mc-b:first-child{border-color:var(--line);color:var(--ink)}
</style>`;

// two notes on one line fold into one bubble with a count
const folded2 = `<span class="gm note fold2" style="top:${L.lineTop(0)}px">${L.icons.note}<i>2</i></span>`;

const col = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>`
  + P.map((p, i) => {
    const para = `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`;
    if (i === 2) return `<div class="para">${para}${folded2}</div>`;
    if (i === 5) return `<div class="para">${para}${L.gm('note', L.lineTop(1), { sel: true })}<span class="nline" style="top:${L.lineTop(1) + 7.5}px"></span></div>`;
    if (i === 8) return `<div class="para">${para}<span class="gm add" style="top:${L.lineTop(0)}px">${L.icons.plus}</span></div>`;
    return para;
  }).join('');

const pointer = `<svg class="cursorptr" style="left:720px;top:634px" viewBox="0 0 14 20"><path d="M1 1v15l4-3.6 2.6 6 2.3-1-2.6-5.9H13z" fill="#111" stroke="#fff" stroke-width="1.2"/></svg>`;

// the open card, level with its line (window coordinates); opened with the mouse, so no keys in the buttons
const card = L.markCard({
  kind: 'note', title: 'Note', sub: '2 min ago', who: 'You',
  text: 'Does the reader know about the spare key yet? Check with <span class="lk">chapter 10</span>.',
  acts: [['↩', 'Reply', ''], ['✓', 'Resolve', ''], ['✕', 'Delete', '']],
  foot: 'Esc returns to the sentence · Ctrl+Shift+N new note',
  x: 1102, y: 548, w: 300,
}).replace('class="mc note"', 'class="mc note sel"');

const html = extraCss + L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  page: L.pageCol(col, { paddingTop: 40 }),
  strip: { reviewCount: 12 },
  status: { style: 'Plain', words: '2,418 words', pages: 'p. 146 of 248' },
  ask: 'normal',
  content: pointer,
  extra: card
    + L.tip('Add note', { x: 1072, y: 717, key: 'Ctrl+Shift+N' })
    + L.ann(1, 'Several notes on one line fold into one bubble with a count', 1086, 344, { w: 300 })
    + L.ann(2, 'Click the bubble: the card opens right there, with a short line from the badge to the card. Reply, Resolve, Delete', 1062, 470, { w: 300 })
    + L.ann(3, 'The anchored words are tinted: with a selection, the note holds those words; without, the paragraph', 40, 564, { w: 300 })
    + L.ann(4, 'A place named in a note (“check with chapter 10”) becomes a link by itself', 40, 470, { w: 300 })
    + L.ann(5, 'On the line under the mouse, a faint + adds a note; or Ctrl+Shift+N, or right-click ▸ Add note. Esc returns to the sentence', 1040, 770, { w: 280 })
    + L.ann(6, 'Your own notes are the only badges Write shows; a reader’s note, an AI finding or a grammar proposal waits in Review, with the person’s initial', 40, 680, { w: 300 }),
});

module.exports = {
  id: 'S14',
  file: 's14-note-in-write',
  title: 'A note, without leaving Write',
  width: 1440,
  height: 900,
  html,
  caption: L.caption({
    id: 'S14', title: 'A note, without leaving Write',
    scene: 'The writer clicked the amber bubble at “Nobody came in at nine…”: its card opened beside the line, joined to the badge by a short line, with the anchored words tinted; the note says “check with chapter 10”, and the chapter became a link by itself. Higher up, two notes on one line fold into one bubble with a count. The mouse rests on another line, where a faint + offers a new note.',
    on: 'the page with a selected amber bubble, its line and its card (Note · 2 min ago · You, the text with the link “chapter 10”, Reply · Resolve · Delete, the gray keys line), “since Tuesday” tinted, a folded bubble with the count 2, the faint + on the hovered line with the tooltip “Add note · Ctrl+Shift+N”, the pointer, the mode switch with 12 on Review, the Ask button',
    off: 'blue, green or red badges in the gutter, a reader’s or an AI card, Apply or Dismiss on a note, the navigator, the Reference panel',
  }),
};
