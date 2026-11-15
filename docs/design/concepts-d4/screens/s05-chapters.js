// S05: Chapters, on the left (draft 7). The list open in Write: parts as rows, scenes indented under their chapter,
// no badges, the empty filter. The mouse rests between two rows: the small “+” at the right, and its menu
// “Scene · Chapter · Part” open. Discarded at the end of the list, “Put back” on the hovered scene. The standing
// continuity notice after a move. Under the window: the right-click menu of each level, and a drag in progress.
const L = require('../lib');
const P = L.sample.chapter7Plain;
const I = L.icons;

const pointer = (x, y) => `<svg class="cursorptr" style="left:${x}px;top:${y}px" width="14" height="20" viewBox="0 0 14 20"><path d="M1 1v15l4-3.5 2.5 6 2.5-1-2.5-5.5H13z" fill="#fff" stroke="#222" stroke-width="1.2" stroke-linejoin="round"/></svg>`;

// row(r) → one list row (part | chapter | scene | plus | discarded)
function row(r) {
  const t = L.esc(r.title || '');
  if (r.type === 'part') return `<div class="nrow part"><span class="cv"></span><span class="t">${t}</span></div>`;
  if (r.type === 'scene') return `<div class="srow${r.here ? ' here' : ''}${r.hov ? ' hov' : ''}${r.src ? ' dragsrc' : ''}${r.fresh ? ' fresh' : ''}"><span class="t">${t}</span></div>`
    + (r.dropAfter ? '<div class="dropline"></div>' : '');
  if (r.type === 'plus') return `<div class="addline"><span class="pl">${I.plus}</span></div>`;
  const cv = r.cur || r.open ? I.chevron : r.hov ? I['chevron-right'] : '';
  return `<div class="nrow${r.cur ? ' cur' : ''}${r.hov ? ' hov' : ''}"><span class="cv">${cv}</span><span class="n">${r.n}</span><span class="t">${t}</span></div>`;
}
const menu = (items, x, y, o = {}) => `<div class="menu" style="left:${x}px;top:${y}px${o.w ? `;min-width:${o.w}px` : ''}">`
  + (o.head ? `<div class="mhd">${o.head}</div>` : '')
  + items.map((t) => (t === '-' ? '<div class="msep"></div>' : `<div class="mi${t === o.hov ? ' hov' : ''}">${t}</div>`)).join('') + `</div>`;

// ---------- the window ----------
const rows = [
  { type: 'part', title: 'Part One: Winter in the Harbor District' },
  { n: 1, title: 'Rain on the glass' },
  { n: 2, title: 'The bartender' },
  { n: 3, title: 'A note under the office door' },
  { n: 4, title: 'Quarter past three' },
  { n: 5, title: 'Kit’s ledger' },
  { n: 6, title: 'The back room' },
  { n: 7, title: 'Lena’s warning', cur: true },
  { type: 'scene', title: 'Lena lies about the back room, and Vega pretends to believe her', here: true },
  { type: 'scene', title: 'Vega leaves without paying' },
  { type: 'plus' },
  { n: 8, title: 'Closing time', open: true },
  { type: 'scene', title: 'Last orders' },
  { type: 'scene', title: 'Lena counts the till' },
  { type: 'scene', title: 'Vega asks about Kit', fresh: true },
  { n: 9, title: 'The pawnshop' },
  { type: 'part', title: 'Part Two: Spring' },
  { n: 10, title: 'Station steps' },
  { n: 11, title: 'The back room, finally' },
];
const discarded = `<div class="dscd"><div class="dh">${I['chevron']}<span>Discarded</span><span class="dn">2</span></div>`
  + `<div class="srow dr hov"><span class="t">Kit’s first visit to the pawnshop</span><span class="pb">Put back</span></div>`
  + `<div class="srow dr"><span class="t">Lena’s sister, an early draft</span></div></div>`;
const nav = `<div class="nav">`
  + `<div class="navtop"><div class="filter">${I.magnifier}<span>Filter (titles and text)</span></div></div>`
  + `<div class="navbody">${rows.map(row).join('')}${discarded}</div>`
  + menu(['Scene', 'Chapter', 'Part'], 214, 320, { hov: 'Chapter', w: 92 })
  + `</div>`;

const marks = { 2: L.gm('note', L.lineTop(0)) }; // in Write the gutter holds only your own notes
const col = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>`
  + P.map((p, i) => {
    const para = `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`;
    return marks[i] ? `<div class="para">${para}${marks[i]}</div>` : para;
  }).join('');

// ---------- crops ----------
const cropNav = (rowsHtml) => `<div class="nav"><div class="navtop"><div class="filter">${I.magnifier}<span>Filter (titles and text)</span></div></div><div class="navbody">${rowsHtml}</div></div>`;

// (1) one right-click menu per level
const levelMenus = `<div class="crop" style="width:690px"><div class="lbl">Right-click: one short menu per level</div><div class="lv">`
  + menu(['Rename', 'Make this scene a chapter', 'Join with the previous scene', 'Move to Discarded', '-', 'Delete…'], 0, 0, { head: 'A scene' })
  + menu(['Rename', 'Start a new part here', 'Join with the previous chapter', 'Move to Discarded', '-', 'Delete…'], 0, 0, { head: 'A chapter', hov: 'Join with the previous chapter' })
  + menu(['Rename', 'Remove the part heading'], 0, 0, { head: 'A part' })
  + `</div></div>`;

// (2) dragging a scene row: the ghost under the pointer, the source dimmed, a line where it lands (end of chapter 8)
const rows2 = [
  { n: 7, title: 'Lena’s warning', cur: true },
  { type: 'scene', title: 'Vega asks about Kit', src: true },
  { type: 'scene', title: 'Lena lies about the back room, and Vega pretends to believe her', here: true },
  { type: 'scene', title: 'Vega leaves without paying' },
  { n: 8, title: 'Closing time', open: true },
  { type: 'scene', title: 'Last orders' },
  { type: 'scene', title: 'Lena counts the till', dropAfter: true },
  { n: 9, title: 'The pawnshop' },
  { n: 10, title: 'Station steps' },
];
const DRAG = { x: 150, y: 236 }; // crop-body coordinates: the pointer, on the drop line
const ghost = `<div class="srow ghost-row" style="left:${DRAG.x + 18}px;top:${DRAG.y + 16}px"><span class="t">Vega asks about Kit</span></div>`;
const crop2 = `<div class="crop" style="width:660px"><div class="lbl">A moment earlier: dragging a scene row into chapter 8</div>`
  + `<div class="cbody" style="height:300px">${cropNav(rows2.map(row).join(''))}`
  + ghost + pointer(DRAG.x, DRAG.y)
  + `</div></div>`;

const css = `<style>
.s05 .srow.dragsrc{opacity:.35}
.s05 .srow.hov{background:#ececea;color:var(--ink)}
.s05 .srow.fresh{background:rgba(59,110,168,.05)}
.s05 .dropline{position:relative;height:0;margin:1px 6px 1px 46px;border-top:2px solid var(--accent)}
.s05 .dropline:before{content:"";position:absolute;left:-4px;top:-5px;width:6px;height:6px;border:2px solid var(--accent);border-radius:50%;background:#fff}
.s05 .addline{position:relative;height:0;margin:2px 4px 2px 22px;border-top:1.5px solid var(--accent)}
.s05 .addline .pl{position:absolute;right:-2px;top:-10px;width:19px;height:19px;border-radius:50%;background:#fff;border:1.5px solid var(--accent);color:var(--accent);display:flex;align-items:center;justify-content:center}
.s05 .addline .pl svg{width:12px;height:12px}
.s05 .dscd{margin:14px 0 0;padding-top:8px;border-top:1px solid var(--line)}
.s05 .dscd .dh{display:flex;align-items:center;gap:6px;padding:2px 4px 4px;font:600 10.5px var(--ui);letter-spacing:.08em;text-transform:uppercase;color:var(--ink3)}
.s05 .dscd .dh svg{width:10px;height:10px}
.s05 .dscd .dn{font-weight:400;letter-spacing:0}
.s05 .dscd .srow.dr{padding-left:24px;color:var(--ink3)}
.s05 .dscd .srow.dr:before{display:none}
.s05 .dscd .srow.dr.hov{color:var(--ink)}
.s05 .dscd .pb{flex:none;color:var(--accent);font-size:12px}
.s05 .menu{min-width:190px}
.s05 .lv{display:flex;gap:18px;padding:16px 18px 18px;align-items:flex-start;background:var(--soft)}
.s05 .lv .menu{position:relative;left:auto!important;top:auto!important;box-shadow:0 1px 3px rgba(0,0,0,.08)}
.s05 .crop .cbody{position:relative;background:var(--paper);overflow:hidden}
.s05 .crop .nav{position:absolute;left:0;top:0;bottom:0;width:280px}
.s05 .ghost-row{position:absolute;z-index:45;width:230px;background:#fff;border:1px solid var(--line);border-radius:6px;box-shadow:0 10px 26px rgba(0,0,0,.18),0 1px 3px rgba(0,0,0,.08);transform:rotate(-1.2deg);padding:4px 8px;color:var(--ink)}
.s05 .ghost-row:before{display:none}
.s05.below{position:relative}
</style>`;

const html = css + L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  left: nav,
  page: L.pageCol(col, { paddingTop: 40 }),
  strip: { reviewCount: 12 },
  status: { style: 'Plain', words: '2,418 words', pages: 'p. 146 of 248' },
  ask: 'normal',
  content: L.notice('Moved ‘Vega asks about Kit’ after chapter 8 · <b>Kit finds the ledger only in chapter 9</b>', {
    kind: 'info', standing: true, undo: false,
    acts: '<span class="lk">Undo<kbd>Ctrl+Z</kbd></span><span class="lk">Add to Review</span>',
  }),
  extra: pointer(296, 404)
    + L.ann(1, 'Rest the mouse between two rows: a small + at the right offers what can start there (Scene, Chapter, Part). No button at the bottom, no automatic “Part One”', 404, 360, { w: 280 })
    + L.ann(2, 'Discarded: every text removed from the book, kept as scenes with their names and words; Put back or a drag returns it, Delete… there is the only real deletion', 300, 624, { w: 300 })
    + L.ann(3, 'Said once, when you stop: Undo, Add to Review (a pending card for later), or ✕', 1060, 760, { w: 270 })
    + L.ann(4, 'Keys: Ctrl+Shift+↑ / ↓ move the selected row, across chapters too; F6 moves the focus between the list, the page and the right column', 1060, 640, { w: 300 })
    + L.ann(5, 'Parts as rows, scenes indented under their chapter with a guide line; in Write no badges (the counts appear in Review)', 300, 150, { w: 300 }),
}) + `<div class="below s05">${levelMenus}${crop2}`
  + L.ann(6, 'Joining never deletes text and never asks; Delete… asks in words and pages', 380, 240, { w: 290 })
  + L.ann(7, 'Dragging a row moves it: a line shows where it lands; the pointer refuses only the impossible (a chapter inside a scene)', 1020, 160, { w: 330 })
  + `</div>`;

module.exports = {
  id: 'S05',
  file: 's05-chapters',
  title: 'Chapters, on the left',
  width: 1440,
  height: 1290,
  html: html.replace('<div class="win"', '<div class="win s05"'),
  caption: L.caption({
    id: 'S05', title: 'Chapters, on the left',
    scene: 'A moment ago the writer dragged the scene “Vega asks about Kit” from chapter 7 to the end of chapter 8; the notice at the bottom says the move breaks continuity. Now the mouse rests between the last scene of chapter 7 and chapter 8, and the small + has opened its menu. Under the window: the right-click menu of each level, and the drag itself.',
    on: 'the list with the empty filter “Filter (titles and text)”, two parts as rows, chapters 1–11, chapter 7 current with its scenes, chapter 8 open with “Vega asks about Kit” at its end, no badges, the + between two rows with its menu Scene · Chapter · Part, Discarded with two scenes and “Put back” on the hovered one; chapter 7 on the page with one note bubble; the standing notice “Moved ‘Vega asks about Kit’ after chapter 8 · Kit finds the ledger only in chapter 9 · Undo · Add to Review · ✕”; the strip with Review 12; the status bar; the Ask button. Crop 1: the scene, chapter and part menus. Crop 2: the scene row dragged as a ghost, its source dimmed, the drop line at the end of chapter 8',
    off: '“+ New chapter”, bullets on scenes, counts of marks in the list, Front and Back matter rows, a dialog stopping the drop, the Reference panel',
  }),
};
