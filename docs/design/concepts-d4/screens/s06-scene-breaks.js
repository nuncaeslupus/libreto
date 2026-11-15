// S06: Scene breaks, typed and detected (draft 7). Show ▸ Scene names on: two typed breaks (the same soft rule), one
// selected, each with its scene name at the right (one unnamed, as its first words); the passing notice for the new one;
// a detected break as a blue dashed rule with its card; the list with its ⋯ menu open. Under the window: the
// right-click menus of a break and of the text (Insert ▸ Scene break, Chapter here, Part here).
const L = require('../lib');
const P = L.sample.chapter7Plain;
const I = L.icons;
const PTR = { x: 300, y: 128 }; // window coordinates: the pointer on “Name the unnamed scenes (AI)”
const CARD = { x: 1060, y: 662 }; // window coordinates: the card beside the dashed rule

const pointer = (x, y) => `<svg class="cursorptr" style="left:${x}px;top:${y}px" width="14" height="20" viewBox="0 0 14 20"><path d="M1 1v15l4-3.5 2.5 6 2.5-1-2.5-5.5H13z" fill="#fff" stroke="#222" stroke-width="1.2" stroke-linejoin="round"/></svg>`;

const pLeave = 'Vega left the coin where it was and her glass untouched. She did not look at the back-room door on the way out, which took more effort than the walk home would.';
const p10 = 'At the corner of Harbor Street she stopped under the awning of the pawnshop and counted the windows above the Blue Lamp. Three dark, one lit. She stood there long enough for the light to go out.';
const p11 = 'Outside, the rain had started again by the time Vega woke, and the light through the blind was the flat gray of nine in the morning. She lay still and counted what she knew, which did not take long.';

// Scene names on (Show ▸ Scene names): each name in small gray at the right of its rule, the first scene's at the
// top of the chapter; an unnamed scene reads as its first words, lighter
const brk = (cls, name, o = {}) => `<div class="para brk${cls ? ' ' + cls : ''}"><div class="srule${o.det ? ' det' : ''}"></div>${name ? `<span class="snm${o.un ? ' un' : ''}">${name}</span>` : ''}</div>`;
const col = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1><span class="snm top">Vega asks about Kit</span></div>`
  + `<p class="first">${P[0]}</p>`
  + brk('selblk', 'Lena lies about the back room')
  + `<p class="first">${P[5]}</p>`
  + brk('', 'Vega left the coin where…', { un: true })
  + `<p class="first">${pLeave}</p>`
  + brk('', 'Vega counts the windows')
  + `<p class="first">${p10}</p>`
  + brk('', '', { det: true })
  + `<p class="first">${p11}</p>`;

// ---------- the chapter list: chapter 7 with its scenes; no badges in Write ----------
function row(r) {
  if (r.type === 'front') return `<div class="nrow fm"><span class="cv"></span><span class="n"></span><span class="t">${L.esc(r.title)}</span></div>`;
  if (r.type === 'part') return `<div class="nrow part"><span class="cv"></span><span class="t">${L.esc(r.title)}</span></div>`;
  if (r.type === 'scene') return `<div class="srow${r.here ? ' here' : ''}${r.det ? ' det' : ''}"><span class="t${r.fw ? ' fw' : ''}">${L.esc(r.title)}</span></div>`;
  return `<div class="nrow${r.cur ? ' cur' : ''}"><span class="cv">${r.cur ? I.chevron : ''}</span><span class="n">${r.n}</span><span class="t">${L.esc(r.title)}</span></div>`;
}
const rows = [
  { type: 'part', title: 'Part One: Winter in the Harbor District' },
  { n: 1, title: 'Rain on the glass' },
  { n: 2, title: 'The bartender' },
  { n: 3, title: 'A note under the office door, left by someone who knew where the spare key was kept' },
  { n: 4, title: 'Quarter past three' },
  { n: 5, title: 'Kit’s ledger' },
  { n: 6, title: 'The back room' },
  { n: 7, title: 'Lena’s warning', cur: true },
  { type: 'scene', title: 'Vega asks about Kit' },
  { type: 'scene', title: 'Lena lies about the back room' },
  { type: 'scene', title: 'Vega left the coin where…', fw: true, here: true },
  { type: 'scene', title: 'Vega counts the windows' },
  { type: 'scene', title: 'Outside, the rain…', fw: true, det: true },
  { n: 8, title: 'Closing time' },
  { n: 9, title: 'The pawnshop' },
];
const NAVMENU = { x: 168, y: 44 }; // nav coordinates, under the ⋯ button
const navMenu = `<div class="menu" style="left:${NAVMENU.x}px;top:${NAVMENU.y}px;min-width:200px">`
  + `<div class="mi hov"><span class="mic">${I.spark}</span>Name the unnamed scenes (AI)</div>`
  + `<div class="msep"></div><div class="mi"><span class="mic"></span>Collapse all chapters</div></div>`;
const nav = `<div class="nav">`
  + `<div class="navtop"><div class="filter">${I.magnifier}<span>Filter (titles and text)</span></div><span class="ib on more">⋯</span></div>`
  + `<div class="navbody">${rows.map(row).join('')}</div>`
  + navMenu + `</div>`;

// the standard mark card on the detected break, opened with Ctrl+. (keys inside the buttons)
const card = L.markCard({
  kind: 'prop', title: 'Pending · scene break', who: 'ai', text: 'The time jumps from night to the next morning',
  acts: [['✓', 'Keep', ''], ['✗', 'Dismiss', '']], x: CARD.x, y: CARD.y, w: 290,
});

const css = `<style>
.s06 .brk{padding:11px 0;margin:12px 0;display:flex;align-items:center;position:relative}
.s06 .brk .srule{flex:1;margin:0 0 0 110px}
.s06 .brk .srule.det{margin:0 110px}
.s06 .snm{flex:none;width:200px;text-align:right;font:12px var(--ui);color:var(--ink3);padding-left:14px}
.s06 .snm.un{color:var(--ink4)}
.s06 .chap{position:relative}
.s06 .snm.top{position:absolute;right:0;bottom:6px}
.s06 .selblk{background:#cfe0f3;border-radius:2px}
.s06 .selblk .snm{color:var(--ink2)}
.s06 .selblk .srule{background:linear-gradient(90deg,transparent,#7f8794 25%,#7f8794 75%,transparent)}
.s06 .srule.det{border-top:2px dashed var(--gram);margin:0 90px;-webkit-mask-image:none}
.s06 .navtop .more{width:28px;height:28px;font-size:16px;color:var(--ink2);letter-spacing:-1px}
.s06 .nav .menu .mi{gap:8px}
.s06 .nav .menu .mic{display:inline-flex;width:15px;color:var(--ink2)}
.s06 .nav .menu .mi.hov .mic{color:var(--accent)}
.s06 .nav .menu .mic svg{width:15px;height:15px}
.below.s06{position:relative}
.below.s06 .cbody{position:relative;background:var(--paper);height:196px;overflow:hidden}
.below.s06 .mini{width:420px;margin:0 auto;padding-top:18px;font:15px/1.6 var(--text);color:var(--ink)}
.below.s06 .mini p{margin:0}
.below.s06 .mini .brk{padding:9px 0;margin:8px 0}
.below.s06 .mini .srule{margin:0 60px}
.s06 .nrow.fm .t{color:var(--ink3)}
.s06 .srow .fw{color:var(--ink4)}
.s06 .srow.here .fw{color:var(--ink3)}
.s06 .srow.det{color:var(--ink3)}
</style>`;

const html = css + L.win({
  mode: 'Write',
  crumbs: { chapter: 'Chapter 7 · Lena’s warning', scene: 'Vega left the coin where…' },
  left: nav,
  page: L.pageCol(col, { paddingTop: 40 }),
  strip: { reviewCount: 12 },
  status: { style: 'Plain', words: '2,531 words', pages: 'p. 146 of 248', show: 'Show', highlightsOn: false },
  ask: 'normal',
  content: L.notice('Scene break', { kind: 'fix' }),
  extra: pointer(PTR.x, PTR.y) + card
    + L.ann(1, 'A typed break: a line of only a repeated symbol (***, - - -, ~) becomes this soft rule; a click selects it like a paragraph; on disk it is a “***” line', 1060, 290, { w: 300 })
    + L.ann(2, 'Show ▸ Scene names: each name in small gray at the right of its rule, the first scene’s at the top of the chapter; a click renames. An unnamed scene reads as its first words, lighter', 1060, 400, { w: 300 })
    + L.ann(3, 'Detected: the time jumps without a break. A blue dashed rule and the usual card: Keep or Dismiss', 1060, 580, { w: 300 })
    + L.ann(4, 'A passing notice, for the time you meant the characters themselves: Undo, ✕', 870, 806, { w: 250 })
    + L.ann(5, 'In the list too: unnamed scenes as their first words, lighter; a detected one on a dashed guide until it is kept', 14, 556, { w: 280 })
    + L.ann(6, 'With an AI connected, ⋯ ▸ Name the unnamed scenes proposes names, kept one by one', 14, 642, { w: 280 }),
}) + `<div class="below s06"><div class="crop" style="width:520px"><div class="lbl">Right-click on a scene break</div><div class="cbody">`
  + `<div class="mini"><p>Vega walked the long way around, past the station steps.</p><div class="para brk selblk"><div class="srule"></div></div><p>Vega left the coin where it was.</p></div>`
  + `<div class="menu" style="left:300px;top:52px"><div class="mi hov">Remove scene break</div><div class="mi">Rename the scene…</div></div>`
  + pointer(296, 46)
  + `</div></div>`
  + `<div class="crop" style="width:560px"><div class="lbl">Right-click in the text, no selection</div><div class="cbody">`
  + `<div class="mini" style="margin:0 0 0 30px">She stood there long enough for the light to go out.<span class="cursor" style="height:16px"></span></div>`
  + `<div class="menu" style="left:110px;top:44px;min-width:170px"><div class="mi">Style as<span class="r">▸</span></div><div class="mi hov">Insert<span class="r">▸</span></div><div class="msep"></div><div class="mi">Add note</div><div class="mi">Paste</div></div>`
  + `<div class="menu" style="left:286px;top:66px;min-width:150px"><div class="mi hov">Scene break</div><div class="mi">Chapter here</div><div class="mi">Part here</div></div>`
  + pointer(106, 40)
  + `</div></div>`
  + L.ann(7, 'Remove scene break merges the two scenes: the row fades from the list, and the notice says “Scene break removed · Undo”', 40, 196, { w: 420 })
  + L.ann(8, 'Insert ▸ Scene break, Chapter here, Part here: the same three as the list’s +', 1132, 90, { w: 250 })
  + `</div>`;

module.exports = {
  id: 'S06',
  file: 's06-scene-breaks',
  title: 'Scene breaks, typed and detected',
  width: 1440,
  height: 1200,
  html: html.replace('<div class="win"', '<div class="win s06"'),
  caption: L.caption({
    id: 'S06', title: 'Scene breaks, typed and detected',
    scene: 'Chapter 7 with Show ▸ Scene names on. The writer typed “***” after the first scene some time ago (that rule is selected) and “- - -” just now after Lena’s lie: both are the same soft rule, and the passing notice offers Undo for the new one. Each rule carries its scene’s name at the right, the first scene’s name sits at the top of the chapter, and the scene after the new rule has no name yet, so it reads as its first words. Further down the time jumps without a break, so Libreto proposes one: a blue dashed rule with its card. In the list the ⋯ menu is open. Under the window: the right-click menus of a break and of the text.',
    on: 'the soft gray rules (one selected), the scene names in small gray (one lighter: first words), the blue dashed rule with the card “Pending · scene break” (who: the AI, ✓ Keep · ✗ Dismiss, keys footer), the passing notice “Scene break · Undo · ✕”, the list without badges, chapter 7 with its scenes (one as first words, lighter; the detected one on a dashed guide), the ⋯ menu (Name the unnamed scenes (AI), Collapse all chapters), the strip with 12 on Review, the status bar, the Ask button; crops: “Remove scene break · Rename the scene…”, and the text menu Style as ▸ · Insert ▸ (Scene break, Chapter here, Part here) · Add note · Paste',
    off: 'the typed characters “***” or “- - -” themselves, a gutter badge for the detected break, the Show menu itself (S29), the Reference panel, the names the AI would propose',
  }),
};
