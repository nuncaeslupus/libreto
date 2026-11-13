// S05: Chapters, on the left (draft 6). The navigator filtered by “lena”: the matched letters lit in the titles,
// gray hit counts, no badges, Front and Back matter as first and last rows with “+ New ▾”, the right-click menu on a
// chapter row, and the notice left by a drop a moment ago. Under the window: the scene-row menu beside the delete
// dialog, and a scene row being dragged with the drop line between two scenes of chapter 8.
const L = require('../lib');
const P = L.sample.chapter7Plain;
const I = L.icons;

const pointer = (x, y) => `<svg class="cursorptr" style="left:${x}px;top:${y}px" width="14" height="20" viewBox="0 0 14 20"><path d="M1 1v15l4-3.5 2.5 6 2.5-1-2.5-5.5H13z" fill="#fff" stroke="#222" stroke-width="1.2" stroke-linejoin="round"/></svg>`;

// in Write the list carries no badges: the counts live in Review
const cnt = () => '';
// the filter’s letters lit in a title: a soft yellow mark on exactly those letters
const hlt = (t) => L.esc(t).replace(/Lena/g, '<span class="hl">Lena</span>');

// row(r, {hl}) → one navigator row (front | back | part | scene | chapter)
function row(r, o = {}) {
  const t = o.hl ? hlt(r.title) : L.esc(r.title);
  if (r.type === 'front' || r.type === 'back') return `<div class="nrow fm"><span class="cv">${I['chevron-right']}</span><span class="n"></span><span class="t">${t}</span><span class="newm">+ New ▾</span></div>`;
  if (r.type === 'part') return `<div class="nrow part"><span class="cv"></span><span class="t">${t}</span></div>`;
  if (r.type === 'scene') return `<div class="srow${r.here ? ' here' : ''}${r.hov ? ' hov' : ''}${r.src ? ' dragsrc' : ''}"><span class="t">${t}</span></div>`
    + (r.dropAfter ? '<div class="dropline"></div>' : '');
  const cv = r.cur ? I.chevron : r.hov ? I['chevron-right'] : '';
  return `<div class="nrow${r.cur ? ' cur' : ''}${r.hov ? ' hov' : ''}${r.src ? ' dragsrc' : ''}"><span class="cv">${cv}</span><span class="n">${r.n}</span><span class="t">${t}</span>${cnt(r)}${r.hits !== undefined ? `<span class="hits">${r.hits}</span>` : ''}</div>`;
}
const menu = (groups, x, y, o = {}) => `<div class="menu" style="left:${x}px;top:${y}px${o.w ? `;min-width:${o.w}px` : ''}">`
  + groups.map((g) => g.map((t) => `<div class="mi${t === o.hov ? ' hov' : ''}">${t}</div>`).join('')).join('<div class="msep"></div>') + `</div>`;
const chapterMenu = [['New chapter before', 'New chapter after'], ['Start a new part at this chapter'], ['Rename'], ['Remove the chapter mark', 'Delete chapter…']];
const sceneMenu = [['New scene before', 'New scene after'], ['Rename'], ['Start a new chapter here', 'Remove the scene break'], ['Delete scene…']];

// ---------- the window: the list filtered by “lena”, right-click on chapter 8 ----------
const rows = [
  { type: 'front', title: 'Front matter' },
  { type: 'part', title: 'Part One: Winter in the Harbor District' },
  { n: 2, title: 'The bartender', hits: 14, hov: true },
  { n: 6, title: 'The back room', notes: 2, hits: 3 },
  { n: 7, title: 'Lena’s warning', notes: 1, tasks: 2, hits: 9, cur: true },
  { type: 'scene', title: 'Lena lies about the back room, and Vega pretends to believe her', here: true },
  { type: 'scene', title: 'Vega leaves without paying' },
  { n: 8, title: 'Closing time', tasks: 1, hits: 4 },
  { type: 'part', title: 'Part Two: Spring' },
  { n: 11, title: 'The back room, finally', notes: 1, hits: 2 },
  { type: 'back', title: 'Back matter' },
];
const MENU = { x: 196, y: 112 }; // nav coordinates: the pointer on chapter 2’s row
const nav = `<div class="nav">`
  + `<div class="navtop"><div class="filter foc">${I.magnifier}<span class="typed">lena</span><span class="cursor"></span></div></div>`
  + `<div class="navbody">${rows.map((r) => row(r, { hl: true })).join('')}</div>`
  + `<div class="navfoot"><span class="btn q">+ New chapter</span></div>`
  + menu(chapterMenu, MENU.x + 2, MENU.y + 2) + `</div>`;

const marks = { 2: L.gm('note', L.lineTop(0)) }; // in Write the gutter holds only your own notes
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
const CROP_H = 384;
const crop1 = `<div class="crop" style="width:640px"><div class="lbl">Right-click on a scene row · the dialog after Delete scene…</div>`
  + `<div class="cbody" style="height:${CROP_H}px">${cropNav(rows1.map((r) => row(r)).join(''))}`
  + pointer(M1.x, M1.y) + menu(sceneMenu, M1.x + 4, M1.y + 4, { hov: 'Delete scene…' })
  + `<div class="dlg" style="left:334px;top:30px;width:300px"><div class="dlg-h">Delete the scene ‘Vega asks about Kit’?</div>`
  + `<div class="dlg-b">1,300 words, about 5 pages. It goes to Discarded, where you can get it back.</div>`
  + `<div class="dlg-f"><span class="btn red">Delete</span><span class="btn">Cancel</span></div></div>`
  + L.ann(4, 'One menu per level, in its own words: chapter row above, scene row here; a part row has Rename and Remove the part mark', 336, 222, { w: 270 })
  + L.ann(6, 'Remove never deletes text and asks nothing (Undo); Delete asks, in words that mean something', 336, 306, { w: 270 })
  + `</div></div>`;

// (2) dragging a scene row: the ghost under the pointer, the source dimmed, a line where it will land (chapter 8)
const rows2 = [
  { n: 6, title: 'The back room' },
  { n: 7, title: 'Lena’s warning', cur: true },
  { type: 'scene', title: 'Vega asks about Kit', src: true },
  { type: 'scene', title: 'Lena lies about the back room, and Vega pretends to believe her', here: true },
  { type: 'scene', title: 'Vega leaves without paying' },
  { n: 8, title: 'Closing time' },
  { type: 'scene', title: 'Last orders' },
  { type: 'scene', title: 'Lena counts the till', dropAfter: true },
  { type: 'scene', title: 'The lights go out upstairs' },
  { n: 9, title: 'The pawnshop' },
  { n: 10, title: 'Station steps' },
];
const DRAG = { x: 150, y: 250 }; // crop-body coordinates: the pointer, on the drop line
const ghost = `<div class="srow ghost-row" style="left:${DRAG.x + 18}px;top:${DRAG.y + 16}px"><span class="t">Vega asks about Kit</span></div>`;
const crop2 = `<div class="crop" style="width:680px"><div class="lbl">Dragging a scene row into chapter 8</div>`
  + `<div class="cbody" style="height:${CROP_H}px">${cropNav(rows2.map((r) => row(r)).join(''))}`
  + ghost + pointer(DRAG.x, DRAG.y)
  + L.ann(8, 'Dragging a row moves it: a line shows where it lands; the pointer refuses only the impossible (a chapter inside a scene); the drop is one Undo', 300, 200, { w: 330 })
  + `</div></div>`;

const css = `<style>
.s05 .nrow .hits{flex:none;width:22px;text-align:right;color:var(--ink3);font-size:11px;font-weight:400;padding-left:4px}
.s05 .nrow.fm .t{color:var(--ink2)}
.s05 .nrow.fm .cv svg{width:10px;height:10px}
.s05 .nrow .newm{flex:none;font-size:11.5px;color:var(--ink2);padding:0 4px;border-radius:4px}
.s05 .srow.dragsrc{opacity:.35}
.s05 .dropline{position:relative;height:0;margin:1px 6px 1px 46px;border-top:2px solid var(--accent)}
.s05 .dropline:before{content:"";position:absolute;left:-4px;top:-5px;width:6px;height:6px;border:2px solid var(--accent);border-radius:50%;background:#fff}
.s05 .notice{max-width:none}
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
.s05 .ghost-row{position:absolute;z-index:45;width:230px;background:#fff;border:1px solid var(--line);border-radius:6px;box-shadow:0 10px 26px rgba(0,0,0,.18),0 1px 3px rgba(0,0,0,.08);transform:rotate(-1.2deg);padding:4px 8px;color:var(--ink)}
.s05 .ghost-row:before{display:none}
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
  strip: { reviewCount: 12 },
  status: { style: 'Plain', words: '2,418 words', pages: 'book p. ~146/248', review: '12 to review' },
  ask: 'normal',
  content: L.notice('Moved ‘Vega asks about Kit’ after chapter 8 · <b>Kit finds the ledger only in chapter 9</b>', { kind: 'info' }),
  extra: pointer(MENU.x, MENU.y + 66)
    + L.ann(1, 'Right-click a chapter row: New chapter before / after, Start a new part at this chapter, Rename, Remove the chapter mark (the text joins the previous chapter), Delete chapter…', 14, 422, { w: 270 })
    + L.ann(2, 'The filter matches titles and text: “lena” keeps the chapters where she appears, the letters lit, the gray number her mentions there; parts stay as headings', 14, 520, { w: 270 })
    + L.ann(3, 'In Write the list carries no badges, so nothing on it looks like a mark; the counts appear in Review', 14, 618, { w: 270 })
    + L.ann(5, 'Front matter first, Back matter last, folded; “+ New ▾” lists what can go there, and only filled ones print', 14, 690, { w: 270 })
    + L.ann(7, 'A drop that breaks continuity says so in the notice instead of a dialog stopping you: Undo, or Got it', 1084, 736, { w: 250 }),
}) + `<div class="below s05">${crop1}${crop2}</div>`;

module.exports = {
  id: 'S05',
  file: 's05-chapters',
  title: 'Chapters, on the left',
  width: 1440,
  height: 1355,
  html: html.replace('<div class="win"', '<div class="win s05"'),
  caption: L.caption({
    id: 'S05', title: 'Chapters, on the left',
    scene: 'A moment ago the writer dragged the scene “Vega asks about Kit” from chapter 7 into chapter 8; the notice at the bottom says the move breaks continuity. Then they typed “lena” in the filter and right-clicked chapter 2. Only the chapters where Lena appears remain, each with a gray count; the matched letters are lit; chapter 7 is open with its two remaining scenes. Under the window: the menu of a scene row with the dialog that Delete scene… opens, and the drag itself.',
    on: 'the navigator with the filter “lena”, Front matter first and Back matter last, folded, each with “+ New ▾”, the parts as headings, chapters 2, 6, 7, 8 and 11 with gray hit counts and no badges, “Lena” lit in “Lena’s warning” and in a scene title, chapter 7 bold with its scenes (the current one marked), the chapter-row menu on chapter 2 (New chapter before, New chapter after, Start a new part at this chapter, Rename, Remove the chapter mark, Delete chapter…) with the pointer, “+ New chapter”, the page with chapter 7 and one amber note in the gutter, the notice “Moved ‘Vega asks about Kit’ after chapter 8 · Kit finds the ledger only in chapter 9 · Undo Ctrl+Z · Got it”, the strip with the tabs and 12 on Review, the status bar (Plain, words, page, ● 12 to review, ⌨, Whole book, Show, History, zoom), the Ask button; crop 1: the scene-row menu (New scene before, New scene after, Rename, Start a new chapter here, Remove the scene break, Delete scene…) and the dialog “Delete the scene ‘Vega asks about Kit’? 1,300 words, about 5 pages. It goes to Discarded, where you can get it back. Delete · Cancel”; crop 2: the scene row dragged as a ghost, its source dimmed in chapter 7, and the drop line between “Lena counts the till” and “The lights go out upstairs” in chapter 8',
    off: 'bullets on scenes, badges or counts of marks in the list, chapters without Lena (1, 3, 4, 5, 9, 10), a part-row menu, a part in the breadcrumb, a dialog stopping the drop, the Reference panel',
  }),
};
