// S14: Everything open (draft 8; from draft 7's S12). 1440 px: Navigator + text + side panel. Inset: the honest 1280 px window.
const L = require('../lib');
const B = require('../b2-parts');
const P = L.sample.chapter7Plain.slice();
P[0] = P[0].replace('jukebox', '<span class="u-spell">jukbox</span>');
P[5] = P[5].replace('since Tuesday', 'since <span class="u-gram">tuesday</span>');
const marks = { 2: L.gm('note', L.lineTop(0)) };
const col = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>`
  + P.map((p, i) => {
    const para = `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`;
    return marks[i] ? `<div class="para">${para}${marks[i]}</div>` : para;
  }).join('');

const rows = L.sample.navRows.map((r) => (r.type === 'chapter' ? { ...r, tasks: 0, fixes: 0, notes: 0 } : r.type === 'front' ? { type: 'group', title: 'Front', open: false } : r));
const css = B.lenaCss + `<style>
.s14 .w620{position:absolute;left:410px;top:100px;width:620px;height:0;border-top:1.5px solid var(--ann);z-index:30}
.s14 .w620:before,.s14 .w620:after{content:"";position:absolute;top:-5px;width:1.5px;height:9px;background:var(--ann)}
.s14 .w620:before{left:0}.s14 .w620:after{right:0}
.below.s14{gap:24px;align-items:flex-start;padding:22px 28px}
.s14 .fr{position:relative;flex:none;overflow:hidden;box-shadow:0 6px 24px rgba(0,0,0,.14)}
.s14 .fr .in{transform-origin:top left}
.s14 .lbl3{font:600 11px var(--ui);letter-spacing:.06em;text-transform:uppercase;color:#66696e;margin-bottom:8px}
.s14 .prose{flex:1;font:13.5px/1.6 var(--ui);color:var(--ink2);padding-top:22px}
.s14 .prose p{margin:0 0 10px}
</style>`;

const main = L.win({
  view: 'Text', crumbs: L.sample.crumbs7, strip: { review: 12 },
  left: L.navigator({ rows }),
  right: L.reference({ kind: 'Person', name: 'Lena', backOn: true, body: B.lenaBody() }),
  page: L.pageCol(col, { paddingTop: 40 }),
  status: { style: 'Plain', words: '812 of 1,000 today', goal: 81, pages: 'p. 146 of 248' },
  ask: 'normal',
  extra: `<span class="w620"></span>`
    + L.ann(1, 'The text column: 620 px at 100 %, centered on the window. The most the window shows at 1440 px', 570, 108, { w: 290 })
    + L.ann(2, 'The page did not move; the two columns took the margins, not the text', 640, 168, { w: 300 })
    + L.ann(3, 'Navigator: 280 px, with Book · Codex · Research at its head', 20, 800, { w: 250 })
    + L.ann(4, 'Side panel: 350 px, one thing at a time (here Lena)', 1090, 740, { w: 240 }),
});

// the honest 1280 px window: the writer opened the Navigator while Lena was in the side panel; the panel closed
const SC = 0.62;
const narrow = L.win({
  width: 1280, height: 720, view: 'Text', crumbs: L.sample.crumbs7, strip: { review: 12 },
  left: L.navigator({ rows }),
  page: L.pageCol(col, { paddingTop: 40 }),
  status: { style: 'Plain', words: '812 of 1,000 today', goal: 81, pages: 'p. 146 of 248' },
  ask: 'normal',
  content: L.notice('The side panel closed to keep the text readable at this width.', { undo: false, acts: '<span class="lk">Reopen</span>' }),
});
const fw = 1280 * SC, fh = 720 * SC;
const below = `<div class="below s14" style="position:relative;height:520px;padding:0"><div class="lbl3" style="position:absolute;left:28px;top:20px">The same layout at 1280 px</div><div class="fr" style="position:absolute;left:28px;top:44px;width:${fw}px;height:${fh}px"><div class="in" style="width:1280px;height:720px;transform:scale(${SC})">${narrow}</div></div>`
  + `<div class="prose" style="position:absolute;left:860px;top:30px;width:550px"><p><b>What closes.</b> The text keeps its 620 px, centered. The Navigator (280) and the side panel (350) need 630 px beside it, more than a 1280 px window has. When the second of them is opened, the one opened earlier closes, and a notice says so with Reopen. Nothing is squeezed and the text never moves.</p>`
  + `<p>Narrower still, the panels become overlays above the text, closed with Esc. The size of the interface is a setting (Settings ▸ Reading &amp; seeing), up to 200 %; the page then keeps its measure in characters and the columns grow with it.</p></div></div>`;

module.exports = {
  id: 'S14', file: 's14-everything-open', title: 'Everything open, the text in the middle', width: 1440, height: 900 + 520,
  html: css + main.replace('<div class="win"', '<div class="win s14"') + below,
  caption: L.caption({
    id: 'S14', title: 'Everything open, the text in the middle',
    scene: 'The most the window shows at 1440 px: the Navigator on the left, chapter 7 in the middle, Lena in the side panel on the right. The text stays 620 px wide and centered; the columns take the margins. Below, the honest version at 1280 px: there the Navigator and the side panel do not both fit beside the text, so opening one closes the other and a notice says so.',
    on: 'the Navigator (Book · Codex · Research, filter, parts, chapters, chapter 7 with its scenes), the page with a red wavy, a blue dashed underline and a note bubble, the side panel with Lena (two-row head, summary, Research topics, the foot), the Ask button, the status bar; the 620 px rule; in the inset, the 1280 px window with the Navigator, no side panel, the notice “The side panel closed to keep the text readable at this width · Reopen”',
    off: 'review counts in the chapter list, a resize handle, a squeezed text column',
  }),
};
