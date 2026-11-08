// S05: Chapters, on the left (draft 5). The navigator filtered by “lena”: the matched letters lit in the titles,
// gray hit counts beside the icon counts, Front and Back matter as gray rows, the right-click menu on a chapter row.
// Under the window: the scene-row menu beside the delete dialog, and the drag sign (moving happens in Plan).
const L = require('../lib');
const P = L.sample.chapter7Plain;
const I = L.icons;

const pointer = (x, y) => `<svg class="cursorptr" style="left:${x}px;top:${y}px" width="14" height="20" viewBox="0 0 14 20"><path d="M1 1v15l4-3.5 2.5 6 2.5-1-2.5-5.5H13z" fill="#fff" stroke="#222" stroke-width="1.2" stroke-linejoin="round"/></svg>`;

const cnt = (r) => {
  const parts = [];
  if (r.notes) parts.push(`<span class="k-note">${r.notes}${I.note}</span>`);
  if (r.tasks) parts.push(`<span class="k-task">${r.tasks}${I.task}</span>`);
  return `<span class="cnt">${parts.join('')}</span>`;
};
// the filter’s letters lit in a title: a soft yellow mark on exactly those letters
const hlt = (t) => L.esc(t).replace(/Lena/g, '<span class="hl">Lena</span>');

// row(r, {hl}) → one navigator row (front | back | part | scene | chapter)
function row(r, o = {}) {
  const t = o.hl ? hlt(r.title) : L.esc(r.title);
  if (r.type === 'front' || r.type === 'back') return `<div class="nrow fm"><span class="cv"></span><span class="n"></span><span class="t">${t}</span></div>`;
  if (r.type === 'part') return `<div class="nrow part"><span class="cv"></span><span class="t">${t}</span></div>`;
  if (r.type === 'scene') return `<div class="srow${r.here ? ' here' : ''}${r.hov ? ' hov' : ''}"><span class="t">${t}</span></div>`;
  const cv = r.cur ? I.chevron : r.hov ? I['chevron-right'] : '';
  return `<div class="nrow${r.cur ? ' cur' : ''}${r.hov ? ' hov' : ''}${r.src ? ' dragsrc' : ''}"><span class="cv">${cv}</span><span class="n">${r.n}</span><span class="t">${t}</span>${cnt(r)}${r.hits !== undefined ? `<span class="hits">${r.hits}</span>` : ''}</div>`;
}
const menu = (groups, x, y, o = {}) => `<div class="menu" style="left:${x}px;top:${y}px${o.w ? `;min-width:${o.w}px` : ''}">`
  + groups.map((g) => g.map((t) => `<div class="mi${t === o.hov ? ' hov' : ''}">${t}</div>`).join('')).join('<div class="msep"></div>') + `</div>`;
const chapterMenu = [['New chapter before', 'New chapter after'], ['New part before', 'New part after'], ['Rename'], ['Remove the chapter mark', 'Delete chapter…']];
const sceneMenu = [['Rename'], ['Start a new chapter here', 'Remove the scene break'], ['Delete scene…']];

// ---------- the window: the list filtered by “lena”, right-click on chapter 8 ----------
const rows = [
  { type: 'front', title: 'Front matter' },
  { type: 'part', title: 'Part One: Winter in the Harbor District' },
  { n: 2, title: 'The bartender', hits: 14 },
  { n: 6, title: 'The back room', notes: 2, hits: 3 },
  { n: 7, title: 'Lena’s warning', notes: 1, tasks: 2, hits: 9, cur: true },
  { type: 'scene', title: 'Vega asks about Kit' },
  { type: 'scene', title: 'Lena lies about the back room, and Vega pretends to believe her', here: true },
  { type: 'scene', title: 'Vega leaves without paying' },
  { n: 8, title: 'Closing time', tasks: 1, hits: 4, hov: true },
  { type: 'part', title: 'Part Two: Spring' },
  { n: 11, title: 'The back room, finally', notes: 1, hits: 2 },
  { type: 'back', title: 'Back matter' },
];
const MENU = { x: 196, y: 296 }; // nav coordinates: the pointer on chapter 8’s row
const nav = `<div class="nav">`
  + `<div class="navtop"><div class="filter foc">${I.magnifier}<span class="typed">lena</span><span class="cursor"></span></div></div>`
  + `<div class="navbody">${rows.map((r) => row(r, { hl: true })).join('')}</div>`
  + `<div class="navfoot"><span class="btn q">+ New chapter</span></div>`
  + menu(chapterMenu, MENU.x + 2, MENU.y + 2) + `</div>`;

const marks = { 2: L.gm('note', L.lineTop(0)), 4: L.gm('task', L.lineTop(0)), 7: L.gm('task', L.lineTop(0)) };
const col = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>`
  + P.map((p, i) => {
    const para = `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`;
    return marks[i] ? `<div class="para">${para}${marks[i]}</div>` : para;
  }).join('');

// ---------- crops ----------
const cropNav = (rowsHtml, o = {}) => `<div class="nav"${o.top ? ` style="top:${o.top}px"` : ''}><div class="navtop"><div class="filter">${I.magnifier}<span>Filter chapters (titles and text)</span></div></div><div class="navbody">${rowsHtml}</div></div>`;

// (1) right-click on a scene row, and the dialog that Delete scene… opens
const rows1 = [
  { n: 6, title: 'The back room', notes: 2 },
  { n: 7, title: 'Lena’s warning', notes: 1, tasks: 2, cur: true },
  { type: 'scene', title: 'Vega asks about Kit', hov: true },
  { type: 'scene', title: 'Lena lies about the back room, and Vega pretends to believe her', here: true },
  { type: 'scene', title: 'Vega leaves without paying' },
  { n: 8, title: 'Closing time', tasks: 1 },
  { n: 9, title: 'The pawnshop', tasks: 1 },
];
const M1 = { x: 130, y: 106 }; // crop-body coordinates: the pointer on the scene row
const CROP_H = 350;
const crop1 = `<div class="crop" style="width:640px"><div class="lbl">Right-click on a scene row · the dialog after Delete scene…</div>`
  + `<div class="cbody" style="height:${CROP_H}px">${cropNav(rows1.map((r) => row(r)).join(''))}`
  + pointer(M1.x, M1.y) + menu(sceneMenu, M1.x + 4, M1.y + 4, { hov: 'Delete scene…' })
  + `<div class="dlg" style="left:334px;top:30px;width:300px"><div class="dlg-h">Delete the scene ‘Vega asks about Kit’?</div>`
  + `<div class="dlg-b">1,300 words, about 5 pages. To bring it back later, go to History.</div>`
  + `<div class="dlg-f"><span class="btn red">Delete</span><span class="btn">Cancel</span></div></div>`
  + L.ann(3, 'One menu per level, in its own words: chapter row above, scene row here, part row', 336, 228, { w: 260 })
  + L.ann(4, 'Remove never deletes text and asks nothing (Undo); Delete asks, in words that mean something', 336, 282, { w: 260 })
  + `</div></div>`;

// (2) dragging a row: the ghost under the pointer, the sign, Plan lit in the dimmed strip
const rows2 = [
  { n: 4, title: 'Quarter past three', tasks: 1 },
  { n: 5, title: 'Kit’s ledger' },
  { n: 6, title: 'The back room', notes: 2 },
  { n: 7, title: 'Lena’s warning', notes: 1, tasks: 2, cur: true },
  { type: 'scene', title: 'Vega asks about Kit' },
  { type: 'scene', title: 'Lena lies about the back room, and Vega pretends to believe her', here: true },
  { type: 'scene', title: 'Vega leaves without paying' },
  { n: 8, title: 'Closing time', tasks: 1 },
  { n: 9, title: 'The pawnshop', tasks: 1, src: true },
];
const DRAG = { x: 150, y: 138 }; // crop-body coordinates: the pointer, between chapters 5 and 6
const dimStrip = L.strip({ mode: 'Write', crumbs: 'Chapter 7', leftOn: true })
  .replace('class="strip"', 'class="strip dimmed"').replace('<span>Plan</span>', '<span class="lit">Plan</span>');
const ghost = `<div class="nrow ghost-row" style="left:${DRAG.x - 70}px;top:${DRAG.y - 14}px"><span class="cv"></span><span class="n">9</span><span class="t">The pawnshop</span>${cnt({ tasks: 1 })}</div>`;
const crop2 = `<div class="crop" style="width:680px"><div class="lbl">Dragging a chapter row</div>`
  + `<div class="cbody" style="height:${CROP_H}px">${dimStrip}${cropNav(rows2.map((r) => row(r)).join(''), { top: 36 })}`
  + ghost + pointer(DRAG.x, DRAG.y) + L.tip('Moving happens in Plan →', { x: DRAG.x + 12, y: DRAG.y + 24 })
  + L.ann(6, 'Dragging moves nothing: the sign under the pointer says where moving happens, Plan lights up in the strip while the rest dims, and a click on the sign opens Plan with this chapter’s card selected', 300, 212, { w: 320 })
  + `</div></div>`;

const css = `<style>
.s05 .nrow .hits{flex:none;width:22px;text-align:right;color:var(--ink3);font-size:11px;font-weight:400;padding-left:4px}
.s05 .nrow.fm .t{color:var(--ink3)}
.s05 .hl{background:#fbe7a1;border-radius:2px;box-shadow:0 0 0 1px #fbe7a1}
.s05 .srow.hov{background:#ececea;color:var(--ink)}
.s05 .navtop .filter.foc{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-tint);color:var(--ink)}
.s05 .navtop .filter .typed{flex:none}
.s05 .navtop .filter .cursor{height:14px;vertical-align:-2px;margin-left:0}
.s05 .menu{min-width:190px}
.s05 .crop .cbody{position:relative;background:var(--paper);overflow:hidden}
.s05 .crop .nav{position:absolute;left:0;top:0;bottom:0;width:280px}
.s05 .crop .dlg{z-index:41}
.s05 .crop .dlg-b{font-size:13px;line-height:1.45;color:var(--ink2)}
.s05 .crop .strip.dimmed{opacity:1;border-bottom:1px solid var(--line2)}
.s05 .crop .strip.dimmed>*:not(.right){opacity:.34}
.s05 .crop .strip.dimmed .right>.tog{opacity:.34}
.s05 .crop .strip.dimmed .modes{background:transparent;border-color:rgba(0,0,0,.05)}
.s05 .crop .strip.dimmed .modes span:not(.lit){opacity:.34}
.s05 .crop .strip.dimmed .modes .lit{background:#fff;color:var(--accent);font-weight:600;box-shadow:0 0 0 1.5px var(--accent),0 0 0 5px rgba(59,110,168,.2),0 0 0 9px rgba(59,110,168,.08)}
.s05 .nrow.dragsrc{opacity:.35}
.s05 .ghost-row{position:absolute;z-index:45;width:250px;background:#fff;border:1px solid var(--line);border-radius:6px;box-shadow:0 10px 26px rgba(0,0,0,.18),0 1px 3px rgba(0,0,0,.08);transform:rotate(-1.2deg);padding:4px 6px}
.s05 .ghost-row .cnt{width:auto;flex:none;display:flex;gap:7px;font-size:11px;color:var(--ink2);padding:0 2px 0 6px}
.s05 .ghost-row .cnt span{display:inline-flex;align-items:center;gap:3px}
.s05 .ghost-row .cnt svg{width:11px;height:11px}
.s05 .ghost-row .cnt .k-task{color:var(--task)}
.s05.below{position:relative}
</style>`;

const html = css + L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  left: nav,
  page: L.pageCol(col, { paddingTop: 40 }),
  status: { style: 'Plain', words: '2,418 words', pages: 'book p. ~146/248', fixes: '3 fixes' },
  ask: 'normal',
  extra: pointer(MENU.x, MENU.y + 92)
    + L.ann(1, 'The filter matches titles and text: matched letters light up in a title; the gray number is its hits in the chapter', 14, 626, { w: 290 })
    + L.ann(2, 'The icon counts are notes and tasks waiting there, not words (words: Plan cards, Statistics, the tooltip)', 14, 694, { w: 290 })
    + L.ann(5, '“+ New chapter” adds one after the current chapter, cursor in its heading, with a notice saying where it went', 14, 760, { w: 290 }),
}) + `<div class="below s05">${crop1}${crop2}</div>`;

module.exports = {
  id: 'S05',
  file: 's05-chapters',
  title: 'Chapters, on the left',
  width: 1440,
  height: 1310,
  html: html.replace('<div class="win"', '<div class="win s05"'),
  caption: L.caption({
    id: 'S05', title: 'Chapters, on the left',
    scene: 'The writer opened the chapter list, typed “lena” in the filter, and right-clicked chapter 8. Only the chapters where Lena appears remain, each with a gray hit count; the matched letters are lit in the titles; chapter 7 is open with its three scenes. Under the window: the menu of a scene row with the dialog that Delete scene… opens, and a chapter row being dragged.',
    on: 'the navigator with the filter “lena”, Front matter and Back matter as gray rows, five chapters (2, 6, 7, 8, 11) with icon counts and hit counts, “Lena” lit in “Lena’s warning” and in a scene title, chapter 7 bold with its scenes (the current one marked), the chapter-row menu on chapter 8 (New chapter before, New chapter after, New part before, New part after, Rename, Remove the chapter mark, Delete chapter…) with the pointer, “+ New chapter”, the page with chapter 7 and three gutter marks, the strip with the modes at the right, the status bar pills (Plain, words, page, 3 fixes, By chapter, Highlights, History), the Ask button; crop 1: the scene-row menu (Rename, Start a new chapter here, Remove the scene break, Delete scene…) and the dialog “Delete the scene ‘Vega asks about Kit’? 1,300 words, about 5 pages… Delete · Cancel”; crop 2: chapter 9 dragged as a ghost, the sign “Moving happens in Plan →”, the dimmed strip with Plan lit',
    off: 'bullets on scenes, chapters without Lena (1, 3, 4, 5, 9, 10), the counts of chapters 8 and 11 (under the menu), a part-row menu, a part in the breadcrumb, an insertion line while dragging, the Reference panel, Search &amp; ask box, provider icon in the status bar',
  }),
};
