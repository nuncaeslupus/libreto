// S31: Pages view (draft 8; from draft 7's S24 Book).
const L = require('../lib');
const C = require('../pages-common');

const html = C.pagesWin({
  extra: L.ann(1, 'The book outline is the Navigator: front matter, parts, chapters with their pages, back matter. Ticks switch generated pages on or off; written pages are rows you open and type in', 336, 664, { w: 330 })
    + L.ann(2, 'Preview as Print, Ebook or Manuscript: the same book, three looks', 336, 790, { w: 330 })
    + L.ann(3, 'Chapter 6 ends on the left page; chapter 7 opens on the right: sink, number and title, drop cap, small-caps first line', 740, 664, { w: 330 })
    + L.ann(4, 'Theme and trim first, then groups of settings, folded until you open one', 1110, 540, { w: 200 })
    + L.ann(5, '“Layout issues 3” lists what looks wrong on a page and jumps to it', 1110, 610, { w: 200 })
    + L.ann(6, 'One door out: Export… with its profiles. Print… is in File', 1110, 730, { w: 200 }),
}).replace('The pawnshop and the man who never came back', 'The pawnshop').replace(/Vega Marín/g, 'Nora Quiles');
module.exports = {
  id: 'S31', file: 's31-pages', title: 'Pages', width: 1440, height: 940, html,
  caption: L.caption({
    id: 'S31', title: 'Pages',
    scene: 'The Pages view of the manuscript: the printed book. Chapter 7 is selected in the outline; the center shows the spread 146–147 as Print.',
    on: 'the Navigator as the book outline (Front with Half-title, Title, Copyright ticked and Contents unticked, Dedication and Epigraph as written pages; Part One; chapters with page ranges, “7 Lena’s warning 147–158” selected; Part Two; Back); “Preview as: Print · Ebook · Manuscript”; the spread with running head and folio on the left page and the chapter 7 opener on the right; the Book layout panel (Theme Classic, Trim 6 × 9 in, Type open, five folded groups, “Layout issues 3”, Export…)',
    off: 'Undo, a mode switch, a Print button (File ▸ Print…), the Ask button (hidden to keep the spread clear), the Layout issues list (S32)',
  }),
};
