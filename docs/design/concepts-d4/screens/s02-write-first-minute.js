// S02: Write, first minute. Chapter 1 just typed: three fixes (green), one grammar proposal (blue), one unknown
// word (red); one gutter icon per line; the mark card open on the hovered “received”. Under the window, the same
// card for the proposal and for the unknown word.
const L = require('../lib');

// --- marks the toolkit does not have yet (lib.js has no proposal / spelling icon): defined here, same look as in S03 ---
const svg = (inner, sw = 1.5) => `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;
const propIcon = svg('<circle cx="8" cy="8" r="6.3" stroke-dasharray="2.6 2.4"/>');
const spellIcon = svg('<circle cx="8" cy="8" r="6.3" stroke-dasharray="1.2 2.3"/><path d="M6.3 6.5a1.8 1.8 0 1 1 2.6 1.6c-.6.3-.9.7-.9 1.3"/><circle cx="8" cy="11.7" r=".55" fill="currentColor"/>');
// one icon per line: the first mark's icon followed by a small count when the line holds several
const gmCount = (kind, n, top) => `<span class="gms" style="top:${top}px"><span class="gm ${kind}">${kind === 'prop' ? propIcon : L.icons[kind]}</span><span class="gm more">${n}</span></span>`;
const gmProp = (top) => `<span class="gm prop" style="top:${top}px">${propIcon}</span>`;
// the mark card with another header icon than the tick (markCard falls back to the fix icon for every kind)
const card = (o, ico) => (ico ? L.markCard(o).replace(/<svg[\s\S]*?<\/svg>/, ico) : L.markCard(o));
const pointer = (x, y) => `<svg class="cursorptr" style="left:${x}px;top:${y}px" width="14" height="20" viewBox="0 0 14 20"><path d="M1 1v15l4-3.5 2.5 6 2.5-1-2.5-5.5H13z" fill="#fff" stroke="#222" stroke-width="1.2" stroke-linejoin="round"/></svg>`;

const css = `<style>
.s02 .chap h1.ph{color:var(--ink3)}
.s02 .gm.prop,.below.s02 .gm.prop{color:var(--ink3)}
.s02 .gm.prop svg{width:16px;height:16px}
.mc-ba{font:14px/1.4 var(--text)}
.below.s02{position:relative}
.below.s02 .cards{display:flex;gap:28px;padding:18px 20px 20px;align-items:flex-start}
.below.s02 .crop .mc{position:relative;box-shadow:0 1px 3px rgba(0,0,0,.08)}
.mc-b{white-space:nowrap}
</style>`;

const p1 = 'Rain had been falling on the Blue Lamp since noon, and by six the gutters on <span class="u-spell">Harborstreet</span> had given up. Vega sat at the window table with her coat still on, watching <span class="u-fix">the</span> door the way other people watch a kettle.';
const p2 = 'She had <span class="u-fix hov">received</span> no word since half past<span class="u-fix">, </span>and it was a quarter to seven now. The only person who had come in was a boy with wet hair and a green ledger under his arm, who looked at her, looked away, and then walked straight to her table as if someone had sent him. He put two envelopes down in front of her and left without a word, and the door let in the smell of the rain and the sound of a bus that did not stop for anyone.';
const p3 = 'On the table between them <span class="u-gram">the letters was still sealed</span>, and she did not touch them.<span class="cursor"></span>';

const col = `<div class="chap"><h1 class="ph">Chapter 1</h1></div>`
  + `<div class="para"><p class="first">${p1}</p>${L.gm('fix', L.lineTop(2))}</div>`
  + `<div class="para"><p>${p2}</p>${gmCount('fix', 2, L.lineTop(0))}</div>`
  + `<div class="para"><p>${p3}</p>${gmProp(L.lineTop(0))}</div>`;

// window coordinates of the hovered word, measured on the build (the card hangs under it, the pointer rests on it)
const W = { x: 497, y: 368, w: 61, h: 23 };

const html = css + L.win({
  mode: 'Write',
  crumbs: 'Chapter 1',
  page: L.pageCol(col, { paddingTop: 110 }),
  status: { style: 'Plain', words: '138 words', pages: 'book p. ~1', fixes: '3 fixes' },
  ask: 'normal',
  extra: card({ kind: 'fix', title: 'Fixed · typo', sub: 'just now', before: 'recieved', after: 'received', x: W.x, y: W.y + W.h + 8 })
    + pointer(W.x + W.w * 0.55, W.y + 10)
    + L.ann(1, 'The breadcrumb owns the left, with all the room it needs; the five modes sit at the right end as a pill of fixed width, next to the right toggle. One line: on a narrow window the breadcrumb gives way, never the modes', 300, 100, { w: 560 })
    + L.ann(2, 'Hover any mark, or press Ctrl+. with the cursor in it: the same card everywhere. What happened, Was / Now, ✓ Enter · ✗ Delete; Esc closes it, F8 and Shift+F8 walk the marks', 60, 420, { w: 300 })
    + L.ann(3, 'One icon per line in the right gutter, with a small count when a line holds several marks (“received” and the comma); the count opens them as a list', 1072, 352, { w: 300 })
    + L.ann(4, 'The fix rule: Libreto changes by itself only what has one possible answer and does not touch meaning (“teh”, “recieved”, a space before a comma): green, done. Agreement (“the letters was”) is proposed in blue; a word it does not know is red, with no icon', 60, 236, { w: 300 })
    + L.ann(5, 'Every status item that opens a menu looks like it does: a soft pill and a ▾', 30, 830, { w: 300 })
    + L.ann(6, 'Ask, the AI’s door: Ctrl+K or the round button', 1086, 822, { w: 240 }),
}) + `<div class="below s02"><div class="crop" style="width:840px"><div class="lbl">The same card for a proposal and for an unknown word</div><div class="cards">`
  + card({ kind: 'gram', title: 'Proposed · grammar', before: 'the letters was', after: 'the letters were', x: 0, y: 0 }, propIcon)
  + card({ kind: 'spell', title: 'Unknown word', text: 'Did you mean Harbor Street?', acts: [['✓', 'Replace', 'Enter'], ['', 'Add to the book’s words', ''], ['✗', 'Ignore', 'Delete']], x: 0, y: 0, w: 440 }, spellIcon)
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
    scene: 'A new novel, Write mode, both columns closed. The heading “Chapter 1” is a gray placeholder. In two paragraphs Libreto fixed “teh”, a space before a comma and “recieved” (green), proposes “the letters were” (blue) and does not know “Harborstreet” (red). The mouse rests on “received” and its card is open. Under the window: the same card for the proposal and for the unknown word.',
    on: 'the strip with the breadcrumb “Chapter 1 ▾” at the left and the modes pill at the right, both toggles off; the gray placeholder heading; three green, one blue and one red underline on the exact characters; the gutter with one icon per line (a fix, a fix with the count 2, a dashed proposal icon); the mark card “Fixed · typo · just now, Was recieved, Now received, ✓ Keep Enter · ✗ Undo Delete” with the pointer on the word; the status bar as pills (Plain ▾, 138 words ▾, book p. ~1 ▾, ✓ 3 fixes ▾, By chapter ▾, Highlights ▾, History ▾, zoom); the Ask button; in the crop, the cards “Proposed · grammar” (Was the letters was, Now the letters were, ✓ Apply · ✗ Skip) and “Unknown word” (Did you mean Harbor Street?, ✓ Replace · Add to the book’s words · ✗ Ignore)',
    off: 'navigator, Reference panel, toolbar, a gutter icon for the red word, the Ask tooltip (the mouse is on the text), the red-to-green fade of a fix as it happens, Search &amp; ask box, provider icon in the status bar',
  }),
};
