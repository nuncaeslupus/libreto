// S02: Write, first minute (draft 6). Chapter 1 just typed: fixes (green), one proposal (blue) drawn a row below the
// red word inside it, unknown words (red); the gutter holds only an amber note; the hover card on “received” without
// keys. Under the window: the same card opened from the keyboard, keys inside the buttons.
const L = require('../lib');

const pointer = (x, y) => `<svg class="cursorptr" style="left:${x}px;top:${y}px" width="14" height="20" viewBox="0 0 14 20"><path d="M1 1v15l4-3.5 2.5 6 2.5-1-2.5-5.5H13z" fill="#fff" stroke="#222" stroke-width="1.2" stroke-linejoin="round"/></svg>`;

const css = `<style>
.s02 .chap h1.ph{color:var(--ink3)}
/* two marks on one word never share a height: the outer (blue, the whole proposal) is drawn one row lower */
.s02 .u-gram.stk{padding-bottom:6px}
.s02 .u-gram.stk .u-spell{padding-bottom:1px}
.mc-b{white-space:nowrap}
.s02 .mc .mc-x.first{font-size:11.5px;color:var(--ink3);margin:0 0 6px}
.below.s02{position:relative}
.below.s02 .cards{display:flex;gap:28px;padding:18px 20px 20px;align-items:flex-start}
.below.s02 .crop .mc{position:relative;box-shadow:0 1px 3px rgba(0,0,0,.08)}
</style>`;

const p1 = 'Rain had been falling on the Blue Lamp since noon, and by six the gutters on <span class="u-spell">Harborstreet</span> had given up. Vega sat at the window table with her coat still on, watching <span class="u-fix">the</span> door the way other people watch a kettle.';
const p2 = 'She had <span class="u-fix hov">received</span> no word since half past<span class="u-fix">, </span>and it was a quarter to seven now. The only person who had come in was a boy with wet hair and a green ledger under his arm, who looked at her, looked away, and then walked straight to her table as if someone had sent him. He put two envelopes down in front of her and left without a word.';
const p3 = 'On the table between them <span class="u-gram stk">the <span class="u-spell">leters</span> was still sealed</span>, and she did not touch them.';
const p4 = '<span class="thought">Not here, not with the whole bar<span class="cursor"></span> watching.</span>';

const col = `<div class="chap"><h1 class="ph">Chapter 1</h1></div>`
  + `<div class="para"><p class="first">${p1}</p></div>`
  + `<div class="para"><p>${p2}</p>${L.gm('note', L.lineTop(3))}</div>`
  + `<div class="para"><p>${p3}</p></div>`
  + `<div class="para"><p>${p4}</p></div>`;

// window coordinates of the hovered word, measured on the build (the card hangs under it, the pointer rests on it)
const W = { x: 499, y: 342, w: 61, h: 23 };

const html = css + L.win({
  mode: 'Write',
  crumbs: 'Chapter 1',
  strip: { reviewCount: 12 },
  page: L.pageCol(col, { paddingTop: 110 }),
  status: { style: 'Thought', styleLook: 'thought', words: '164 words', pages: 'book p. ~1', review: '12 to review' },
  ask: 'normal',
  extra: L.markCard({ kind: 'done', title: 'Done · typo', sub: 'just now', before: 'rec<span class="was">ie</span>ved', after: 'rec<span class="now">ei</span>ved', text: '', acts: [['✓', 'Keep', ''], ['✗', 'Undo', '']], x: W.x + W.w - 300, y: W.y + W.h + 8 })
      .replace('<div class="mc-a">', '<div class="mc-x first">Ctrl+. opens this from the keyboard</div><div class="mc-a">')
    + pointer(W.x + W.w * 0.55, W.y + 10)
    + L.ann(1, 'The ☰ menu: on Linux and Windows the menu bar lives behind it; on macOS the system bar stays', 14, 76, { w: 250 })
    + L.ann(2, 'Six modes as tabs, the current one underlined; the Review tab carries a blue count when something waits there', 940, 76, { w: 300 })
    + L.ann(3, 'Find (Ctrl+F) and the bell for notices, then the right toggle', 1130, 142, { w: 230, r: true })
    + L.ann(4, 'Your own notes, amber, are the only thing in the gutter in Write', 1076, 424, { w: 280 })
    + L.ann(5, 'Two marks never share a height: red “leters” inside the blue proposal, so the blue is drawn one row lower', 1076, 494, { w: 300 })
    + L.ann(6, 'On hover the buttons are plain; opened with Ctrl+. they show their keys (below). The first hover of all says so once', 14, 400, { w: 220, r: true })
    + L.ann(7, '“● 12 to review”: the same count as the tab, and a click opens Review', 290, 826, { w: 260 })
    + L.ann(8, '⌨ lists the keys that work right where you are', 690, 832, { w: 230, r: true })
    + L.ann(9, 'Show ▾: underlines on or off, and the highlights', 1000, 790, { w: 260 }),
}) + `<div class="below s02"><div class="crop" style="width:760px"><div class="lbl">Opened from the keyboard (Ctrl+.): the keys show inside the buttons</div><div class="cards">`
  + L.markCard({ kind: 'pending', title: 'Pending · agreement', before: 'the leters <span class="was">was</span>', after: 'the leters <span class="now">were</span>', x: 0, y: 0 })
  + L.markCard({ kind: 'unknown', title: 'Unknown · leters', text: 'Did you mean <b>letters</b>?', acts: [['+', 'Add to dictionary', ''], ['◉', 'Make a Codex entry', '']], x: 0, y: 0, w: 360 })
  + `</div></div></div>`;

module.exports = {
  id: 'S02',
  file: 's02-write-first-minute',
  title: 'Write, first minute',
  width: 1440,
  height: 1132,
  html: html.replace('<div class="win"', '<div class="win s02"'),
  caption: L.caption({
    id: 'S02', title: 'Write, first minute',
    scene: 'A new project, Write mode, both columns closed. The heading “Chapter 1” is a gray placeholder. Libreto fixed “teh”, a space before a comma and “recieved” (green), proposes “the leters were” for “the leters was” (blue, the whole phrase) and does not know “Harborstreet” or “leters” (red). The cursor is in a Thought; the mouse rests on “received” and its card is open. Under the window: the cards opened from the keyboard.',
    on: 'the strip (☰, left toggle, Back, Forward, Undo, Redo, “Chapter 1 ▾”, the six tabs with Write underlined and a blue 12 on Review, Find, the bell, the right toggle); the gray placeholder heading; green, blue and red dotted underlines on the exact characters, the blue one drawn a row below the red “leters”; one amber note badge in the gutter; the hover card “Done · typo · just now, Was rec(ie)ved, Now rec(ei)ved, Ctrl+. opens this from the keyboard, ✓ Keep · ✗ Undo” without keys, with the pointer on the word; the status bar (Thought in italics, 164 words, book p. ~1, ● 12 to review in blue, ⌨, Whole book ▾, Show ▾, History, zoom); the Ask button; in the crop, “Pending · agreement” (Was the leters was, Now the leters were, ✓ Apply Enter · ✗ Skip Delete) and “Unknown · leters” (Did you mean letters?, + Add to dictionary · ◉ Make a Codex entry)',
    off: 'navigator, Reference panel, toolbar, any blue, green or red badge in the gutter (Review only), the menu bar row (behind ☰), the Ask tooltip (the mouse is on the text), the red-to-green fade as a fix happens, a provider icon in the status bar',
  }),
};
