// S06: Scene breaks, typed and detected (draft 6). Two typed breaks (“***” and “- - -”, the same soft rule), one of
// them selected, the notice for the one just typed, the detected break as a blue dashed rule with its card (no gutter
// badge in Write), and the chapter list with scenes named by their first words and its ⋯ menu open.
// Under the window: the right-click menu of a scene break.
const L = require('../lib');
const P = L.sample.chapter7Plain;
const I = L.icons;
const PTR = { x: 300, y: 128 }; // window coordinates: the pointer on “Name the scenes (AI)”

const pointer = (x, y) => `<svg class="cursorptr" style="left:${x}px;top:${y}px" width="14" height="20" viewBox="0 0 14 20"><path d="M1 1v15l4-3.5 2.5 6 2.5-1-2.5-5.5H13z" fill="#fff" stroke="#222" stroke-width="1.2" stroke-linejoin="round"/></svg>`;

const pLeave = 'Vega left the coin where it was and her glass untouched. She did not look at the back-room door on the way out, which took more effort than the walk home would.';
const p10 = 'At the corner of Harbor Street she stopped under the awning of the pawnshop and counted the windows above the Blue Lamp. Three dark, one lit. She stood there long enough for the light to go out.';
const p11 = 'Outside, the rain had started again by the time Vega woke, and the light through the blind was the flat gray of nine in the morning. She lay still and counted what she knew, which did not take long.';

const col = `<p class="first">${P[7]}</p><p>${P[8]}</p>`
  + `<div class="para brk selblk"><div class="srule"></div></div>`
  + `<p class="first">${pLeave}</p>`
  + `<div class="para brk"><div class="srule"></div></div>`
  + `<p class="first">${p10}</p>`
  + `<div class="para brk"><div class="srule det"></div></div>`
  + `<p class="first">${p11}</p>`;

// ---------- the chapter list: chapter 7 with its scenes; no badges in Write ----------
function row(r) {
  if (r.type === 'front') return `<div class="nrow fm"><span class="cv"></span><span class="n"></span><span class="t">${L.esc(r.title)}</span></div>`;
  if (r.type === 'part') return `<div class="nrow part"><span class="cv"></span><span class="t">${L.esc(r.title)}</span></div>`;
  if (r.type === 'scene') return `<div class="srow${r.here ? ' here' : ''}${r.det ? ' det' : ''}"><span class="t${r.fw ? ' fw' : ''}">${L.esc(r.title)}</span></div>`;
  return `<div class="nrow${r.cur ? ' cur' : ''}"><span class="cv">${r.cur ? I.chevron : ''}</span><span class="n">${r.n}</span><span class="t">${L.esc(r.title)}</span></div>`;
}
const rows = [
  { type: 'front', title: 'Front matter' },
  { type: 'part', title: 'Part One: Winter in the Harbor District' },
  { n: 1, title: 'Rain on the glass' },
  { n: 2, title: 'The bartender' },
  { n: 3, title: 'A note under the office door, left by someone who knew where the spare key was kept' },
  { n: 4, title: 'Quarter past three' },
  { n: 5, title: 'Kit’s ledger' },
  { n: 6, title: 'The back room' },
  { n: 7, title: 'Lena’s warning', cur: true },
  { type: 'scene', title: 'Vega asks about Kit' },
  { type: 'scene', title: 'Lena lies about the back room, and Vega pretends to believe her' },
  { type: 'scene', title: 'Vega left the coin where…', fw: true },
  { type: 'scene', title: 'At the corner of Harbor…', fw: true, here: true },
  { type: 'scene', title: 'Outside, the rain…', fw: true, det: true },
  { n: 8, title: 'Closing time' },
  { n: 9, title: 'The pawnshop' },
];
const NAVMENU = { x: 168, y: 44 }; // nav coordinates, under the ⋯ button
const navMenu = `<div class="menu" style="left:${NAVMENU.x}px;top:${NAVMENU.y}px;min-width:200px">`
  + `<div class="mi hov"><span class="mic">${I.spark}</span>Name the scenes (AI)</div>`
  + `<div class="msep"></div><div class="mi"><span class="mic"></span>Show scenes</div><div class="mi"><span class="mic"></span>Fold all chapters</div></div>`;
const nav = `<div class="nav">`
  + `<div class="navtop"><div class="filter">${I.magnifier}<span>Filter chapters (titles and text)</span></div><span class="ib on more">⋯</span></div>`
  + `<div class="navbody">${rows.map(row).join('')}</div>`
  + `<div class="navfoot"><span class="btn q">+ New chapter</span></div>` + navMenu + `</div>`;

// the standard mark card on the detected break, opened with Ctrl+. (keys inside the buttons)
const card = L.markCard({
  kind: 'pending', title: 'Pending · scene break', text: 'Time jumps from ten to the next morning',
  acts: [['✓', 'Keep', 'Enter'], ['✗', 'Not a scene', 'Delete']], x: 1076, y: 470,
});

const css = `<style>
.s06 .brk{padding:11px 0;margin:15px 0}
.s06 .brk .srule{margin:0 80px}
.s06 .brk .srule.det{margin:0 110px}
.s06 .selblk{background:#cfe0f3;border-radius:2px}
.s06 .selblk .srule{background:linear-gradient(90deg,transparent,#7f8794 25%,#7f8794 75%,transparent)}
.s06 .srule.det{border-top:2px dashed var(--gram);margin:0 90px;-webkit-mask-image:none}
.s06 .navtop .more{width:28px;height:28px;font-size:16px;color:var(--ink2);letter-spacing:-1px}
.s06 .nav .menu .mi{gap:8px}
.s06 .nav .menu .mic{display:inline-flex;width:15px;color:var(--ink2)}
.s06 .nav .menu .mi.hov .mic{color:var(--accent)}
.s06 .nav .menu .mic svg{width:15px;height:15px}
.below.s06{position:relative}
.below.s06 .cbody{position:relative;background:var(--paper);height:150px;overflow:hidden}
.below.s06 .mini{width:420px;margin:0 auto;padding-top:18px;font:15px/1.6 var(--text);color:var(--ink)}
.below.s06 .mini p{margin:0}
.below.s06 .mini .brk{padding:9px 0;margin:8px 0}
.below.s06 .mini .srule{margin:0 60px}
.s06 .nrow.fm .t{color:var(--ink3)}
.s06 .srow .fw{color:var(--ink3)}
.s06 .srow.here .fw{color:var(--ink3)}
.s06 .srow.det{color:var(--ink3)}
</style>`;

const html = css + L.win({
  mode: 'Write',
  crumbs: { chapter: 'Chapter 7 · Lena’s warning', scene: 'At the corner of Harbor…' },
  left: nav,
  page: L.pageCol(col, { paddingTop: 40 }),
  strip: { reviewCount: 12 },
  status: { style: 'Plain', words: '2,531 words', pages: 'book p. ~146/248', review: '12 to review' },
  ask: 'normal',
  content: L.notice('Scene break', { kind: 'fix' }),
  extra: pointer(PTR.x, PTR.y) + card
    + L.ann(1, 'A break is a block like a paragraph: a click selects it with the selection color; it is copied, cut and pasted as its “***” line; Backspace or Delete removes it', 1076, 214, { w: 300 })
    + L.ann(2, 'Typed “***” above and “- - -” here: a line holding only a repeated symbol becomes the same soft gray rule; on disk it is a “***” line', 1076, 336, { w: 300 })
    + L.ann(3, 'Detected: time jumps without a break, so Libreto proposes one, a blue dashed rule and the usual card. No badge in the gutter in Write; it also waits in Review', 1076, 584, { w: 300 })
    + L.ann(4, 'A notice for the time you meant the characters: Undo, or Got it', 892, 810, { w: 250 })
    + L.ann(5, 'Scenes without a name show their first words in gray; a detected scene stays lighter, on a dashed guide, until you keep it', 14, 556, { w: 280 })
    + L.ann(6, 'With an AI connected, the list’s ⋯ menu proposes names for the scenes, marked as proposed until you keep them', 14, 642, { w: 280 }),
}) + `<div class="below s06"><div class="crop" style="width:520px"><div class="lbl">Right-click on a scene break</div><div class="cbody">`
  + `<div class="mini"><p>Vega walked the long way around, past the station steps.</p><div class="para brk selblk"><div class="srule"></div></div><p>Vega left the coin where it was.</p></div>`
  + `<div class="menu" style="left:300px;top:52px"><div class="mi hov">Remove scene break</div><div class="mi">Name this scene…</div></div>`
  + pointer(296, 46)
  + `</div></div>` + L.ann(7, 'Right-click on a break: Remove scene break (the two scenes merge, the row fades from the list, a notice with Undo) · Name this scene…', 560, 64, { w: 340 }) + `</div>`;

module.exports = {
  id: 'S06',
  file: 's06-scene-breaks',
  title: 'Scene breaks, typed and detected',
  width: 1440,
  height: 1121,
  html: html.replace('<div class="win"', '<div class="win s06"'),
  caption: L.caption({
    id: 'S06', title: 'Scene breaks, typed and detected',
    scene: 'The end of chapter 7. The writer typed “***” after Lena’s warning some time ago, and “- - -” just now after Vega leaves the bar: both are the same soft rule, and the notice at the bottom offers Undo for the new one. The first rule is selected. Further down, the time jumps to the next morning without a break, so Libreto proposes one with a blue dashed rule; its card is open. In the chapter list the ⋯ menu is open on “Name the scenes (AI)”. Under the window: the right-click menu of a break.',
    on: 'the typed scene break as a soft gray rule, selected (blue block), the second typed rule, the notice “Scene break · Undo Ctrl+Z · Got it” at the bottom center, the detected break as a blue dashed rule with the card “Pending · scene break · Time jumps from ten to the next morning · ✓ Keep Enter · ✗ Not a scene Delete”, the chapter list with no badges and chapter 7 open: “Vega left the coin where…” and “At the corner of Harbor…” (the current scene) in gray, first words, “Outside, the rain…” lighter on a dashed guide (detected, not kept), the ⋯ menu (Name the scenes (AI) with the spark, Show scenes, Fold all chapters) with the pointer, the strip with the tabs and 12 on Review, the status bar (Plain, 2,531 words, book p. ~146/248, ● 12 to review, ⌨, Whole book, Show, History, zoom), the Ask button; in the crop, a selected break with its menu “Remove scene break · Name this scene…”',
    off: 'the typed characters “***” or “- - -” themselves, a gutter badge for the detected break, a Scene break style in the styles palette, the Reference panel, the notice after a removal (S33), the names the AI would propose, chapters 10 and 11 and Back matter (below the cut)',
  }),
};
