// S03: Write, the first minute (draft 8; from draft 7's S02). A new project on its first chapter, both columns closed, the gray
// placeholder heading. One word per kind of mark, one underline each: red “leters” (unknown), blue “was” (pending,
// agreement), green “received” (done). The gutter holds only a note bubble. The mouse rests on the red word and its
// card is open (candidate rows, Ignore here, Add to dictionary, the gray “Ignore everywhere” link, the keys footer).
// Under the window: two cards opened from the keyboard, keys inside their buttons.
const L = require('../lib');

const pointer = (x, y) => `<svg class="cursorptr" style="left:${x}px;top:${y}px" width="14" height="20" viewBox="0 0 14 20"><path d="M1 1v15l4-3.5 2.5 6 2.5-1-2.5-5.5H13z" fill="#fff" stroke="#222" stroke-width="1.2" stroke-linejoin="round"/></svg>`;

const css = `<style>
.s02 .chap h1.ph{color:var(--ink3)}
.mc-b{white-space:nowrap}
.s02 .mc .mc-x .lk{color:var(--ink3);text-decoration:underline;text-decoration-color:var(--line);text-underline-offset:2px;font-size:12px}
.below.s02 .cards{display:flex;gap:28px;padding:18px 20px 20px;align-items:flex-start}
.below.s02 .crop .mc{position:relative;box-shadow:0 1px 3px rgba(0,0,0,.08)}
</style>`;

const p1 = 'Rain had been falling on the Blue Lamp since noon, and by six the gutters on Harbor Street had given up. Vega sat at the window table with her coat still on, watching the door the way other people watch a kettle.';
const p2 = 'She had <span class="u-fix">received</span> no word since half past, and it was a quarter to seven now. The only person who had come in was a boy with wet hair and a green ledger under his arm, who looked at her, looked away, and then walked straight to her table as if <span class="u-note">someone had sent him</span>. He put two <span class="u-spell hov">leters</span> down in front of her and left without a word.';
const p3 = 'On the table between them the envelopes <span class="u-gram">was</span> still sealed, and she did not touch them.';
const p4 = '<span class="thought">Not here, not with the whole bar<span class="cursor"></span> watching.</span>';

const col = `<div class="chap"><h1 class="ph">Chapter 1</h1></div>`
  + `<div class="para"><p class="first">${p1}</p></div>`
  + `<div class="para"><p>${p2}</p>${L.gm('note', L.lineTop(3))}</div>`
  + `<div class="para"><p>${p3}</p></div>`
  + `<div class="para"><p>${p4}</p></div>`;

// window coordinates of the hovered word (measured on the build): the card hangs under it
const W = { x: 664, y: 461, w: 39, h: 23 };

const html = css + L.win({
  view: 'Text',
  crumbs: 'Chapter 1',
  strip: { review: 3 },
  page: L.pageCol(col, { paddingTop: 110 }),
  status: { style: 'Thought', styleLook: 'thought', words: '164 of 500 today', goal: 33, pages: 'p. 1 of 1' },
  ask: 'normal',
  extra: L.markCard({
    kind: 'unknown', title: 'Check spelling', who: 'L', rows: ['letters', 'letter'], keys: false,
    text: '<span class="lk">Leave as is everywhere in this book</span>',
    acts: [['–', 'Leave as is', ''], ['+', 'Add to dictionary', '']],
    x: W.x + W.w - 300, y: W.y + W.h + 6, w: 290,
  })
    + pointer(W.x + 24, W.y + 9)
    + L.ann(1, 'Navigator, Back, Forward, then where you are (chapter, and scene once there are scenes), each a menu of its siblings. Undo lives in Edit and Ctrl+Z, not here', 150, 102, { w: 250 })
    + L.ann(2, 'The view switch above, only when the center holds the manuscript: Text (writing) · Board (scenes as cards) · Pages (the printed book)', 560, 112, { w: 300 })
    + L.ann(3, 'Review, above: a toggle, not a place. It opens the margin beside this same text; the number is what waits', 1090, 112, { w: 300 })
    + L.ann(4, 'One shape per meaning: wavy = check spelling · dashed = a suggestion waits · thin solid = fixed for you · tinted = a note', 1068, 388, { w: 300 })
    + L.ann(5, 'A note is an amber tint on its words plus a bubble in the gutter; others’ notes show as hollow bubbles', 1068, 470, { w: 300 })
    + L.ann(6, 'The card says who: L = a Libreto rule, You, M for Marta, the spark for the AI', 10, 560, { w: 260 })
    + L.ann(7, 'Ask: the AI’s one door (Ctrl+K), gray but working when no AI is connected', 1130, 724, { w: 190 })
    + L.ann(8, 'Words today against today’s goal (the ring), the page in the printed book, and Saved: Libreto saves as you type', 30, 800, { w: 330 })
    + L.ann(9, 'Show ▾ (marks, notes, scene names, whole book or one chapter), History (today’s messages and versions), zoom, the keys for here', 870, 800, { w: 330 }),
}) + `<div class="below s02"><div class="crop" style="width:800px"><div class="lbl">Opened from the keyboard (Ctrl+.): the keys show inside the buttons</div><div class="cards">`
  + L.markCard({ kind: 'pending', title: 'Suggestion · agreement', who: 'L', before: 'the envelopes <span class="was">was</span>', after: 'the envelopes <span class="now">were</span>', acts: [['✓', 'Accept', 'Enter'], ['✗', 'Reject', 'Delete'], ['✎', 'Edit', 'E']], x: 0, y: 0, w: 372 })
  + L.markCard({ kind: 'done', title: 'Fixed for you · typo', who: 'L', before: 'rec<span class="was">ie</span>ved', after: 'rec<span class="now">ei</span>ved', x: 0, y: 0 })
  + `</div></div></div>`;

module.exports = {
  id: 'S03',
  file: 's03-write-first-minute',
  title: 'Write, the first minute',
  width: 1440,
  height: 1132,
  html: html.replace('<div class="win"', '<div class="win s02"'),
  caption: L.caption({
    id: 'S03', title: 'Write, the first minute',
    scene: 'A new project on its first chapter, nothing open but the text. Libreto fixed “recieved” for you (thin green line), proposes “were” for “the envelopes was” (dashed blue) and does not know “leters” (wavy red). One of your notes is an amber tint on “someone had sent him” with its bubble in the gutter. The mouse rests on “leters” and its card is open; under the window, two cards opened from the keyboard.',
    on: 'the menu bar (File to Help); the strip: Navigator toggle, Back, Forward, “Chapter 1 ▾”, the centered switch Text · Board · Pages with Text pressed, Review 3, Find, side-panel toggle; the gray placeholder heading; the four marks, one shape each; the amber bubble; the card “Check spelling” with initial L (rows letters / letter, Leave as is, Add to dictionary, the gray link for the whole book, keys footer); the status bar (Thought chip, a ring and “164 of 500 today”, page, Saved 19:32, Show, History, zoom, keys); the Ask button; the cards “Suggestion · agreement” (Accept / Reject / Edit) and “Fixed for you · typo” (Undo)',
    off: 'the Navigator, the side panel, Undo or Redo arrows, a bell, a mode switch, any badge in the gutter other than your own note, two marks on one word',
  }),
};
