// S02: Write, the first minute (draft 7). A new project on its first chapter, both columns closed, the gray
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
const p2 = 'She had <span class="u-fix">received</span> no word since half past, and it was a quarter to seven now. The only person who had come in was a boy with wet hair and a green ledger under his arm, who looked at her, looked away, and then walked straight to her table as if someone had sent him. He put two <span class="u-spell hov">leters</span> down in front of her and left without a word.';
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
  mode: 'Write',
  crumbs: 'Chapter 1',
  strip: { reviewCount: 3 },
  page: L.pageCol(col, { paddingTop: 110 }),
  status: { style: 'Thought', styleLook: 'thought', words: '164 words', pages: 'p. 146 of 248' },
  ask: 'normal',
  extra: L.markCard({
    kind: 'unknown', title: 'Unknown · word', rows: ['letters', 'letter'], keys: false,
    text: '<span class="lk">Ignore everywhere in this project</span>',
    acts: [['–', 'Ignore here', ''], ['+', 'Add to dictionary', '']],
    x: W.x + W.w - 300, y: W.y + W.h + 6, w: 290,
  })
    + pointer(W.x + 24, W.y + 9)
    + L.ann(1, 'Where you are: chapter › scene, each a menu of its siblings', 196, 102, { w: 230 })
    + L.ann(2, 'The mode switch: one control, six positions, Write pressed; the small blue count on Review says something waits there', 880, 102, { w: 250 })
    + L.ann(3, 'Find (Ctrl+F), the bell, the right toggle', 1182, 102, { w: 150 })
    + L.ann(4, 'One word, one underline: red, Libreto does not know it · blue, a proposal (“was”/“were”) · green, already fixed (“recieved”)', 1068, 388, { w: 300 })
    + L.ann(5, 'In Write the gutter holds only your own notes', 1068, 470, { w: 300 })
    + L.ann(6, 'Hovering the red word: the candidates as rows, Ignore here, Add to dictionary, “Ignore everywhere” a click away, and the gray keys line. On hover the buttons show no keys', 10, 560, { w: 260 })
    + L.ann(7, 'The Ask button: the AI’s one door (Ctrl+K)', 1130, 724, { w: 190 })
    + L.ann(8, 'The style at the cursor in its own look; p. 146 of 248 in the printed book; Saved 19:32: Libreto saves as you type', 30, 800, { w: 330 })
    + L.ann(9, 'Whole book ▾, Show ▾ (underlines, scene names, your notes), History, zoom, and last ⌨: the keys that work right here (F1)', 870, 800, { w: 330 }),
}) + `<div class="below s02"><div class="crop" style="width:720px"><div class="lbl">Opened from the keyboard (Ctrl+.): the keys show inside the buttons</div><div class="cards">`
  + L.markCard({ kind: 'pending', title: 'Pending · agreement', before: 'the envelopes <span class="was">was</span>', after: 'the envelopes <span class="now">were</span>', x: 0, y: 0 })
  + L.markCard({ kind: 'done', title: 'Done · typo', before: 'rec<span class="was">ie</span>ved', after: 'rec<span class="now">ei</span>ved', x: 0, y: 0 })
  + `</div></div></div>`;

module.exports = {
  id: 'S02',
  file: 's02-write-first-minute',
  title: 'Write, the first minute',
  width: 1440,
  height: 1132,
  html: html.replace('<div class="win"', '<div class="win s02"'),
  caption: L.caption({
    id: 'S02', title: 'Write, the first minute',
    scene: 'A new project, Write mode, both columns closed. The heading “Chapter 1” is a gray placeholder. Libreto fixed “recieved” (green), proposes “were” for “the envelopes was” (blue) and does not know “leters” (red). The cursor is in a Thought; the mouse rests on “leters” and its card is open. Under the window: two cards opened from the keyboard.',
    on: 'the menu bar; the strip (left toggle, Back, Forward, Undo, Redo, “Chapter 1 ▾”, the mode switch with Write pressed and a blue 3 on Review, Find, the bell, the right toggle); the gray placeholder heading; one red, one blue and one green dotted underline, one per word; one amber note bubble in the gutter; the hover card “Unknown · word” (rows letters / letter, – Ignore here · + Add to dictionary, the gray link “Ignore everywhere in this project”, the keys footer); the status bar (Thought in italics, 164 words, p. 146 of 248, Saved 19:32, Whole book ▾, Show ▾, History, zoom, ⌨ last); the Ask button; in the crop, “Pending · agreement” (✓ Apply Enter · ✗ Dismiss Delete) and “Done · typo” (✓ Keep Enter · ✗ Undo Delete)',
    off: 'navigator, Reference panel, any blue, green or red badge in the gutter (Review only), two underlines on one word, “Make a Codex entry” (a name goes to the Codex from the right-click menu), the red-to-green fade as a fix happens',
  }),
};
