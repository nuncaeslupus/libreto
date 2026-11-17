// S12: Write with everything open. Chapters left, Reference panel right, both 320 px; the reveal on (hues in the
// text, style labels in the left margin); the page where it always is; the Ask button over the panel's corner.
const L = require('../lib');
const P = L.sample.chapter7Paragraphs.slice();

// the reveal shows every underline and badge: one of each kind here, one word one underline
P[0] = P[0].replace('jukebox', '<span class="u-spell">jukebox</span>');
P[5] = P[5].replace('since Tuesday', 'since <span class="u-gram">tuesday</span>');
P[6] = P[6].replace('<span class="thought rv-s">', '<span class="thought">');
P[7] = P[7].replace('quietly', '<span class="u-fix">quietly</span>');

const marks = {
  0: L.gm('unknown', L.lineTop(0)),
  2: L.gm('note', L.lineTop(0)),
  5: L.gm('pending', L.lineTop(1)),
  6: `<span class="mlabel" style="top:${L.lineTop(0) - 1}px">Thought</span>`,
  7: L.gm('done', L.lineTop(0)),
};
const col = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>`
  + P.map((p, i) => {
    const para = `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`;
    return marks[i] ? `<div class="para">${para}${marks[i]}</div>` : para;
  }).join('');

// in Write the chapter list counts only your notes; what waits for a decision is counted on the Review position
const rows = L.sample.navRows.map((r) => (r.type === 'chapter' ? { ...r, tasks: 0, fixes: 0 } : r));

// Lena as the panel shows her (the same summary as S11)
const facts = [
  ['Nobody’s been in that room since Tuesday.', 'ch. 7'],
  ['Locks the back room herself at closing.', 'ch. 8'],
  ['Drives a green Fiat.', 'ch. 6'],
  ['Smells of lemon; dries dry glasses.', 'ch. 7'],
  ['Has known Kit since he was a boy.', 'ch. 5'],
];
const body = L.refCard({ name: '', line: L.sample.lena.line,
  facts: [['Appears', 'ch. 2–8 · 31 mentions'], ['With', '<span class="lk">Kit</span>, <span class="lk">Vega</span> · at <span class="lk">the Blue Lamp</span>']] })
  + `<div class="nh">Facts <span class="sp"></span><span class="tn">five most recent</span></div>`
  + `<div class="f5">${facts.map(([t, w]) => `<div><span>${t}</span><span class="lk">${w}</span></div>`).join('')}</div>`
  + `<div class="all"><span class="lk">All 84 facts in the Codex</span></div>`
  + `<div class="nh">Open questions</div><div class="q">How old is she? “about fifty” in <span class="lk">ch. 2</span>, “not yet forty” in <span class="lk">ch. 8</span></div>`
  + `<div class="nh">Research</div>`
  + `<div class="rrow"><div class="pic sm"></div><div class="t"><span class="lk">Bars in the 1950s</span><small>topic · 6 notes</small></div></div>`
  + `<div class="rrow"><div class="pic sm"></div><div class="t"><span class="lk">The Blue Lamp’s history</span><small>topic · 2 photos</small></div></div>`;

const css = `<style>
.s12 .w620{position:absolute;left:410px;top:100px;width:620px;height:0;border-top:1.5px solid var(--mark);z-index:30}
.s12 .w620:before,.s12 .w620:after{content:"";position:absolute;top:-5px;width:1.5px;height:9px;background:var(--mark)}
.s12 .w620:before{left:0}.s12 .w620:after{right:0}
.s12 .mlabel{color:var(--ink3);font:500 11px var(--ui);letter-spacing:.03em;border-right:2px solid var(--ink4);padding-right:7px;right:calc(100% + 12px)}
.s12 .refbody .tcard{padding:12px 14px 8px}
.s12 .refbody .f5>div{display:flex;gap:8px;justify-content:space-between;padding:3px 0;border-bottom:1px solid var(--line2);font-size:12.5px}
.s12 .refbody .f5 .lk{flex:none;font-size:11.5px}
.s12 .refbody .all{margin:6px 0 0;font-size:12px}
.s12 .refbody .all .lk{text-decoration:underline;text-underline-offset:2px}
.s12 .refbody .nh .tn{color:var(--ink4)}
.s12 .refbody .rrow{padding:3px 0}
</style>`;

const html = css + `<div class="s12" style="position:relative">` + L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  left: L.navigator({ rows }),
  right: L.reference({ kind: 'Person', name: 'Lena Marsh', backOn: true, body }),
  page: L.pageCol(col, { paddingTop: 40 }),
  strip: { reviewCount: 12 },
  status: { style: 'Plain', words: '2,418 words', pages: 'p. 146 of 248' },
  ask: 'normal',
  extra: `<span class="w620"></span>`
    + L.ann(1, 'The text column is 620 px at 100 %, centered on the window', 600, 110)
    + L.ann(2, 'The page did not move: the columns took the margins, not the text', 650, 160, { w: 300 })
    + L.ann(3, 'Both columns are 320 px, always; nothing to resize', 20, 716, { w: 280 })
    + L.ann(4, 'Reveal on (Ctrl+Shift+A): hues in the text, the style named in the left margin, every underline and badge in the gutter', 20, 632, { w: 280 })
    + L.ann(5, 'The Ask button floats over the panel’s corner; the panel’s content ends above its foot, never behind the button', 1050, 712, { w: 260, r: true })
    + L.ann(6, 'Too small or too large? The size of the interface, not of the text: Settings ▸ General ▸ Interface size', 20, 776, { w: 280 }),
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
    scene: 'The most Write can show on a 1440 px laptop: chapter 7 with the chapter list and the Reference panel open, both 320 px, and the reveal on, so people, places, things and motifs are tinted, the Thought style is named in the left margin and every mark shows. The page stays centered on the window, 620 px at 100 %; the columns only use the margins. Shown to judge the load; nobody needs this all day.',
    on: 'the chapter list (filter, front matter, parts, chapters with note counts only, chapter 7 open with its scenes), the page with the hues, the margin label Thought, a red, a blue and a green underline and their badges plus a note bubble; the Reference panel with its two-row head (‹ › PERSON ✕, “Lena Marsh”), the summary body (line, Appears, With, five facts, All 84 facts in the Codex, open question, Research) and the foot Open in Codex · Ask the AI; the Ask button over the panel’s corner; the mode switch with 12 on Review',
    off: 'review counts in the chapter list, tabs or a search box in the Reference panel, a resize handle',
  }),
};
