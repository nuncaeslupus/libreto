// S12: Write with everything open. Navigator left, Reference panel right, the page where it always is.
const L = require('../lib');
const P = L.sample.chapter7Paragraphs;

// marks: a note on the third paragraph (Vega takes the stool), a task on the fifth (the green ledger)
const marks = { 2: L.gm('note', L.lineTop(0)), 4: L.gm('task', L.lineTop(0)) };
const col = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>`
  + P.map((p, i) => {
    const para = `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`;
    return marks[i] ? `<div class="para">${para}${marks[i]}</div>` : para;
  }).join('');

const html = L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  left: L.navigator({ rows: L.sample.navRows }),
  right: L.reference({ kind: 'Person', name: 'Lena', backOn: true, body: L.refCard(L.sample.lena) }),
  page: L.pageCol(col, { paddingTop: 40 }),
  status: { style: 'Plain', words: '2,418 words', pages: 'book p. ~146/248', fixes: '3 fixes', highlightsOn: true },
  ask: 'normal',
  extra: L.ann(1, 'The page did not move: it is centered on the window, the panels take the margins', 650, 146, { w: 300 })
    + L.ann(2, 'The text column is 620 px at 100%', 400, 100)
    + L.ann(3, 'Counts are the same icons as the gutter marks: notes amber, tasks blue', 20, 690, { w: 236 })
    + L.ann(4, 'A Reference, not tabs: back and forward through what you looked at; no filter box', 1076, 700, { w: 280 })
    + L.ann(5, 'The Ask button floats over everything, here over the panel’s corner', 1100, 822, { w: 240 }),
});

module.exports = {
  id: 'S12',
  file: 's12-everything-open',
  title: 'Write with everything open',
  width: 1440,
  height: 900,
  html,
  caption: L.caption({
    id: 'S12', title: 'Write with everything open',
    scene: 'Chapter 7 with the navigator and the Reference panel open. Highlights are on, so characters, places, things and the Thought style are tinted. The page stays centered on the window; the panels only use the margins.',
    on: 'navigator (filter, front matter, parts, chapters with icon counts, chapter 7 open with its scenes on a guide line, “+ New chapter”), the page with two gutter marks (a note and a task), the Reference panel with Lena’s card (picture, line, Appears/First/Knows, facts from the text and from research, open questions, research topics), the Ask button over the panel’s corner, the status bar with ✓ 3 fixes and Highlights active',
    off: 'tabs in the right panel, a filter box in the Reference panel, bullets in the navigator, Search &amp; ask box, provider icon in the status bar',
  }),
};
