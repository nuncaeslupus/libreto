// S02: Write, first minute. Chapter 1 just typed; three kinds of underline and one gutter tick.
const L = require('../lib');

const p1 = 'Rain had been falling on the Blue Lamp since noon, and by six the gutters on Harbor Street had given up. Vega sat at the window table with her coat still on, watching <span class="u-fix">the</span> door the way other people watch a kettle.';
const p2 = 'She had been told the man would come at half past<span class="u-fix">, </span>and it was a quarter to seven now. The only person who had come in was a boy with wet hair and a green ledger under his arm, who looked at her, looked away, and then walked straight to her table as if he had <span class="u-spell">recieved</span> instructions<span class="cursor"></span>';

const col = `<div class="chap"><h1 class="u-fix">Chapter 1</h1></div>`
  + `<p class="first">${p1}</p>`
  + `<div class="para"><p>${p2}</p>${L.gm('fix', L.lineTop(0))}</div>`;

const html = L.win({
  mode: 'Write',
  crumbs: 'Chapter 1',
  page: L.pageCol(col, { paddingTop: 110 }),
  status: { style: 'Plain', words: '96 words', pages: 'book p. ~1', fixes: '2 fixes' },
  ask: 'normal',
  extra: L.tip('Ask · Ctrl+K', { right: 22, y: 776 })
    + L.ann(1, 'The strip never moves: panel toggles at its two ends, both off here', 56, 100, { w: 300 })
    + L.ann(2, 'Five modes; Write is the current one', 560, 100)
    + L.ann(3, 'Green dotted: a change Libreto made (“teh” → “the”, a comma). Red dotted: a spelling suggestion, not applied. Blue dotted would be grammar', 1072, 236, { w: 300 })
    + L.ann(4, 'The green tick sits on the exact line of the added comma', 1072, 352, { w: 240 })
    + L.ann(5, 'Ask: one entry for search, commands and the AI', 1086, 822, { w: 240 })
    + L.ann(6, 'No toolbar: the style of the paragraph lives in the chip', 30, 830),
});

module.exports = {
  id: 'S02',
  file: 's02-write-first-minute',
  title: 'Write, first minute',
  width: 1440,
  height: 900,
  html,
  caption: L.caption({
    id: 'S02', title: 'Write, first minute',
    scene: 'A new novel. The writer typed “Chapter 1”, a paragraph with “teh”, and a sentence where Libreto added a comma; “recieved” is still misspelled. Each change leaves a quiet mark on its own characters; the mouse rests on the Ask button.',
    on: 'the strip with both panel toggles off and the modes centered, Chapter 1 as a heading with its green underline, three underlines (two green, one red), one green tick in the right gutter, the status bar (Plain, 96 words, book p. ~1, ✓ 2 fixes, Highlights, History, zoom), the Ask button with its tooltip',
    off: 'navigator, Reference panel, toolbar, Search &amp; ask box, provider icon in the status bar',
  }),
};
