// S12: Write with everything open. Chapters left, Reference panel right, both 320 px; the page where it always is.
const L = require('../lib');
const P = L.sample.chapter7Paragraphs;

// Write shows only your own notes in the gutter: one note on the third paragraph (Vega takes the stool)
const marks = { 2: L.gm('note', L.lineTop(0)) };
const col = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>`
  + P.map((p, i) => {
    const para = `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`;
    return marks[i] ? `<div class="para">${para}${marks[i]}</div>` : para;
  }).join('');

// in Write the chapter list counts only your notes; what waits for a decision is counted on the Review tab
const rows = L.sample.navRows.map((r) => (r.type === 'chapter' ? { ...r, tasks: 0, fixes: 0 } : r));

const css = `<style>
.s12 .w620{position:absolute;left:410px;top:72px;width:620px;height:0;border-top:1.5px solid var(--mark);z-index:30}
.s12 .w620:before,.s12 .w620:after{content:"";position:absolute;top:-5px;width:1.5px;height:9px;background:var(--mark)}
.s12 .w620:before{left:0}.s12 .w620:after{right:0}
</style>`;

const html = css + `<div class="s12" style="position:relative">` + L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  left: L.navigator({ rows }),
  right: L.reference({ kind: 'Person', name: 'Lena', backOn: true, body: L.refCard(L.sample.lena) }),
  page: L.pageCol(col, { paddingTop: 40 }),
  strip: { reviewCount: 12 },
  status: { style: 'Plain', words: '2,418 words', pages: 'book p. ~146/248', review: '12 to review', highlightsOn: true },
  ask: 'normal',
  extra: `<span class="w620"></span>`
    + L.ann(1, 'The text column is 620 px at 100 %, centered on the window', 600, 82)
    + L.ann(2, 'The page did not move: the columns took the margins, not the text', 650, 146, { w: 300 })
    + L.ann(3, 'Both columns are 320 px, always; nothing to resize', 20, 690, { w: 280 })
    + L.ann(4, 'In the gutter (by the third paragraph), only your own notes, amber; what waits for a decision waits in Review: the tab says 12', 1050, 698, { w: 300 })
    + L.ann(5, 'The Ask button floats over everything, here over the panel’s corner', 1080, 790, { w: 240 }),
}) + `</div>`;

module.exports = {
  id: 'S12',
  file: 's12-everything-open',
  title: 'Everything open, the text in the middle',
  width: 1440,
  height: 900,
  html,
  caption: L.caption({
    id: 'S12', title: 'Everything open, the text in the middle',
    scene: 'The most Write can show on a 1440 px laptop: chapter 7 with the chapter list and the Reference panel open, both 320 px, the reveal on, so people, places, things and the Thought style are tinted. The page stays centered on the window, 620 px at 100 %; the columns only use the margins. Shown to judge the load; nobody needs this all day.',
    on: 'the chapter list (filter, front matter, parts, chapters with note counts only, chapter 7 open with its scenes), the page with one amber note in the gutter, the Reference panel with Lena’s card (picture, line, Appears/First/Knows, facts from the text and from research, open questions, topics), the strip with the six tabs and 12 on Review, the Ask button over the panel’s corner, the status bar with 12 to review and Show active',
    off: 'blue, green or red badges in the gutter, review counts in the chapter list, tabs or a search box in the Reference panel',
  }),
};
