// S05: Chapters, on the left. The navigator filtered by “lena” (titles and text), hit counts in gray,
// chapter 7 open with its scenes, a right-click menu on its row, “+ New chapter” at the bottom.
const L = require('../lib');
const P = L.sample.chapter7Plain;
const I = L.icons;

const cnt = (r) => {
  const parts = [];
  if (r.notes) parts.push(`<span class="k-note">${r.notes}${I.note}</span>`);
  if (r.tasks) parts.push(`<span class="k-task">${r.tasks}${I.task}</span>`);
  return `<span class="cnt">${parts.join('')}</span>`;
};
const rows = [
  { type: 'part', title: 'Part One: Winter in the Harbor District' },
  { n: 2, title: 'The bartender', hits: 14 },
  { n: 6, title: 'The back room', notes: 2, hits: 3 },
  { n: 7, title: 'Lena’s warning', notes: 1, tasks: 2, hits: 9, cur: true },
  { type: 'scene', title: 'Vega asks about Kit' },
  { type: 'scene', title: 'Lena lies about the back room, and Vega pretends to believe her', here: true },
  { type: 'scene', title: 'Vega leaves without paying' },
  { n: 8, title: 'Closing time', tasks: 1, hits: 4 },
  { type: 'part', title: 'Part Two: Spring' },
  { n: 11, title: 'The back room, finally', notes: 1, hits: 2 },
];
const navRows = rows.map((r) => {
  if (r.type === 'part') return `<div class="nrow part"><span class="cv"></span><span class="t">${L.esc(r.title)}</span></div>`;
  if (r.type === 'scene') return `<div class="srow${r.here ? ' here' : ''}"><span class="t">${L.esc(r.title)}</span></div>`;
  return `<div class="nrow${r.cur ? ' cur' : ''}"><span class="cv">${r.cur ? I.chevron : ''}</span><span class="n">${r.n}</span><span class="t">${L.esc(r.title)}</span>${cnt(r)}<span class="hits">${r.hits}</span></div>`;
}).join('');

const items = ['New chapter before', 'New chapter after', 'New part', 'Rename', 'Delete chapter…'];
const menu = `<div class="menu" style="left:248px;top:186px;min-width:150px">${items.map((t, i) => (i === 3 ? '<div class="msep"></div>' : '') + `<div class="mi">${t}</div>`).join('')}</div>`;

const nav = `<div class="nav">`
  + `<div class="navtop"><div class="filter foc">${I.magnifier}<span class="typed">lena</span><span class="cursor"></span></div></div>`
  + `<div class="navbody">${navRows}</div>`
  + `<div class="navfoot"><span class="btn q">+ New chapter</span></div>`
  + menu + `</div>`;

const css = `<style>
.s05 .nrow .hits{flex:none;width:22px;text-align:right;color:var(--ink3);font-size:11px;font-weight:400;padding-left:4px}
.s05 .navtop .filter.foc{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-tint);color:var(--ink)}
.s05 .navtop .filter .typed{flex:none}
.s05 .navtop .filter .cursor{height:14px;vertical-align:-2px;margin-left:0}
</style>`;

const marks = { 2: L.gm('note', L.lineTop(0)), 4: L.gm('task', L.lineTop(0)), 7: L.gm('task', L.lineTop(0)) };
const col = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>`
  + P.map((p, i) => {
    const para = `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`;
    return marks[i] ? `<div class="para">${para}${marks[i]}</div>` : para;
  }).join('');

const html = css + L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  left: nav,
  page: L.pageCol(col, { paddingTop: 40 }),
  status: { style: 'Plain', words: '2,418 words', pages: 'book p. ~146/248', fixes: '3 fixes' },
  ask: 'normal',
  extra: `<div class="win s05-ann"></div>`
    + L.ann(1, 'The filter matches titles and text: “lena” keeps every chapter she is in, with a gray hit count at the right', 14, 462, { w: 226 })
    + L.ann(2, 'Icon counts: the same note and task icons as the gutter, capped at 99+', 14, 548, { w: 226 })
    + L.ann(3, 'Right-click on any row: before, after, a part, rename, delete', 14, 614, { w: 226 })
    + L.ann(4, 'Scenes sit under a thin guide line in lighter text, no bullets: nothing here looks like a mark', 14, 680, { w: 226 })
    + L.ann(5, 'Adding needs no key: the button at the bottom of the list', 14, 760, { w: 226 })
    + L.ann(6, 'The breadcrumb names the chapter and the scene, each a menu of its siblings; no part', 440, 96),
});

module.exports = {
  id: 'S05',
  file: 's05-chapters',
  title: 'Chapters, on the left',
  width: 1440,
  height: 900,
  html: html.replace('<div class="win s05-ann"></div>', '').replace('<div class="win"', '<div class="win s05"'),
  caption: L.caption({
    id: 'S05', title: 'Chapters, on the left',
    scene: 'The writer opened the chapter list, typed “lena” in the filter, and right-clicked chapter 7. Only the chapters where Lena appears remain, each with a gray hit count (two of them under the menu); chapter 7 is open with its three scenes on a guide line.',
    on: 'the navigator with the filter “lena” and five chapters (2, 6, 7, 8, 11) with icon counts and hit counts, parts in small caps, chapter 7 bold with its scenes (the current one marked), the right-click menu (New chapter before, New chapter after, New part, Rename, Delete chapter…), “+ New chapter”, the page with chapter 7 and three gutter marks, the breadcrumb “Chapter 7 · Lena’s warning › Lena lies about the back room”, the Ask button',
    off: 'bullets on scenes, chapters without Lena (1, 3, 4, 5, 9, 10), Front matter, a part in the breadcrumb, the Reference panel, Search &amp; ask box, provider icon in the status bar',
  }),
};
