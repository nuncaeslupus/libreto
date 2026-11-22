// S06: The Navigator on Book (draft 8; from draft 7's S05). Front group, Prologue (unnumbered), parts, chapters (one
// long title clamped to two lines), scenes, Back group, and Discarded and Unplaced pinned at the bottom. The mouse
// between two rows shows the + and its menu (Scene, Chapter, Part, Unnumbered chapter); a right-click menu on Prologue.
const L = require('../lib');
const P = L.sample.chapter7Plain;
const I = L.icons;

const css = `<style>
.s06 .nav{position:relative;width:292px}
.s06 .crop .nav{position:absolute;left:0;top:0;bottom:0}
.s06 .nav .navbody{overflow:hidden}
.s06 .navfoot{border-top:1px solid var(--line);padding:4px 8px 8px;background:var(--soft)}
.s06 .navfoot .nrow.pinned{border-top:0;margin:0;padding:4px}
.s06 .nrow.grp{margin-top:8px}
.s06 .nrow.pro{margin-top:12px}
.s06 .nrow.hov{background:#ececea}
.s06 .nrow .n:empty:before{content:"";}
.s06 .nrow.un .n{color:var(--ink4)}
.s06 .addline{margin:1px 4px 1px 0}
.s06 .addline:before{left:34px;right:30px}
.s06 .menu .ck{display:inline-block;width:13px;height:13px;border:1.5px solid var(--ink3);border-radius:3px;margin-left:auto;flex:none}
.s06 .menu .mi{display:flex;align-items:center}
.s06 .menu .mi.hov .ck{border-color:var(--ink)}
.s06 .menu .mhd{padding-top:4px}
</style>`;

const pointer = (x, y) => `<svg class="cursorptr" style="left:${x}px;top:${y}px" width="14" height="20" viewBox="0 0 14 20"><path d="M1 1v15l4-3.5 2.5 6 2.5-1-2.5-5.5H13z" fill="#fff" stroke="#222" stroke-width="1.2" stroke-linejoin="round"/></svg>`;

const rows = [
  { type: 'group', title: 'Front' },
  { type: 'matter', title: 'Dedication' },
  { type: 'matter', title: 'Epigraph' },
  { type: 'chapter', n: '', title: 'Prologue', un: true },
  { type: 'part', title: 'Part One: Winter in the Harbor District' },
  { type: 'chapter', n: 1, title: 'Rain on the glass' },
  { type: 'chapter', n: 2, title: 'The bartender' },
  { type: 'chapter', n: 3, title: 'A note under the office door, left by someone who knew where the spare key was kept', clamp: true },
  { type: 'chapter', n: 4, title: 'Quarter past three' },
  { type: 'chapter', n: 5, title: 'Kit’s ledger' },
  { type: 'chapter', n: 6, title: 'The back room' },
  { type: 'chapter', n: 7, title: 'Lena’s warning', cur: true },
  { type: 'scene', title: 'Vega asks about Kit' },
  { type: 'scene', title: 'Lena lies about the back room, and Vega pretends to believe her', here: true },
  { type: 'scene', title: 'Vega leaves without paying' },
  { type: 'add' },
  { type: 'chapter', n: 8, title: 'Closing time' },
  { type: 'chapter', n: 9, title: 'The pawnshop' },
  { type: 'part', title: 'Part Two: Spring' },
  { type: 'chapter', n: 10, title: 'Station steps' },
  { type: 'chapter', n: 11, title: 'The back room, finally' },
  { type: 'group', title: 'Back' },
  { type: 'matter', title: 'Acknowledgments' },
  { type: 'matter', title: 'About the author' },
];
const foot = `<div class="nrow pinned"><span class="cv">${I['chevron-right']}</span><span class="t">Discarded</span><span class="gc">3</span></div>`
  + `<div class="nrow pinned"><span class="cv">${I['chevron-right']}</span><span class="t">Unplaced</span><span class="gc">2</span></div>`;

const pro = (h) => h.replace(/<div class="nrow( hov)?"><span class="cv">([^]*?)<\/span><span class="n"><\/span><span class="t">Prologue/, (m, hv, cv) => `<div class="nrow pro${hv || ''}"><span class="cv">${cv}</span><span class="n"></span><span class="t">Prologue`);
let nav = pro(L.navigator({ rows, footer: foot, section: 'Book', placeholder: 'Filter' }));
const mitem = (t, o = {}) => `<div class="mi${o.hov ? ' hov' : ''}">${t}${o.ck ? '<span class="ck"></span>' : ''}</div>`;
const menus = `<div class="menu" style="left:300px;top:440px;min-width:178px"><div class="mhd">Add here</div>`
  + mitem('Scene') + mitem('Chapter', { hov: true }) + mitem('Part') + mitem('Unnumbered chapter') + `</div>`;
nav = nav.replace(/<\/div>$/, menus + '</div>');

const col = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>`
  + P.slice(0, 4).map((p, i) => `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`).join('');

const mrows = rows.slice(0, 5).map((r) => (r.title === 'Prologue' ? { ...r, hov: true } : r));
const inset = pro(L.navigator({ rows: mrows, section: 'Book', placeholder: 'Filter' }))
  .replace(/<\/div>$/, `<div class="menu" style="left:150px;top:190px;min-width:196px"><div class="mhd">Prologue</div>${mitem('Rename')}${mitem('Numbered', { hov: true, ck: true })}${mitem('Start a new part here')}<div class="msep"></div>${mitem('Move to Discarded')}${mitem('Delete…')}</div></div>`)
  + pointer(118, 176);
const html = css + '<div class="s06">' + L.win({
  view: 'Text',
  height: 960,
  crumbs: L.sample.crumbs7,
  left: nav,
  page: L.pageCol(col, { paddingTop: 40 }),
  strip: { review: 12, leftOn: true },
  status: { style: 'Plain', words: '812 of 1,000 today', goal: 81, pages: 'p. 146 of 248' },
  ask: 'normal',
  extra: pointer(264, 610)
    + L.ann(1, 'The switch at the head of the Navigator: Book · Codex · Research (Ctrl+Shift+1/2/3)', 1060, 118, { w: 330 })
    + L.ann(2, 'Front and Back are groups: written pages (Dedication, Epigraph, Acknowledgments) are rows here; generated pages (title, contents) are switches in Pages', 1060, 215, { w: 330 })
    + L.ann(3, 'Prologue has no number; the inset below shows how to give it one', 1060, 340, { w: 330 })
    + L.ann(4, 'A long title keeps its place: two lines, then “…”; the full title is the hover and the heading', 1060, 440, { w: 330 })
    + L.ann(5, 'Rest the mouse between two rows: the + offers Scene · Chapter · Part · Unnumbered chapter, and the blue line says where', 1060, 560, { w: 330 })
    + L.ann(6, 'Pinned at the bottom: Discarded (removed texts, kept; Put back) and Unplaced (cards that belong to no scene yet)', 1060, 790, { w: 330 }),
}) + `<div class="below"><div class="crop" style="width:440px"><div class="lbl">Right-click on Prologue</div><div style="position:relative;height:390px;background:var(--soft)">${inset}</div></div></div></div>`;

module.exports = {
  id: 'S06',
  file: 's06-navigator-book',
  title: 'The Navigator on Book',
  width: 1440,
  height: 1600,
  html,
  caption: L.caption({
    id: 'S06', title: 'The Navigator on Book',
    scene: 'The Navigator open on the Book section while the writer works in chapter 7. The mouse rests between the last scene of chapter 7 and chapter 8, and the + has opened its menu. Under the window: the right-click menu on Prologue.',
    on: 'the switch Book · Codex · Research; the Front group (Dedication, Epigraph); Prologue without a number; Part One and Part Two as rows; chapters 1 to 11 with chapter 3 clamped to two lines; chapter 7 current with three scenes and the current scene marked; the blue line with + and its menu (Scene, Chapter, Part, Unnumbered chapter); in the inset the right-click menu on Prologue (Rename, Numbered ☐, Start a new part here, Move to Discarded, Delete…); the Back group (Acknowledgments, About the author); pinned Discarded · 3 and Unplaced · 2; the strip with Review 12; the status bar with a goal ring',
    off: 'badges or counts of marks (they live in the Review margin), a “+ New chapter” button, bullets on scenes, the Codex and Research lists (S07)',
  }),
};
