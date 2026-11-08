// S06: Scene breaks, typed and detected (draft 5). Two typed breaks (“***” and “- - -”, the same rule), one of
// them selected with its right-click menu, the notice card for the one just typed, the proposed break as a dashed
// rule with a dashed gutter icon and the standard mark card, and the chapter list with the new scenes named.
const L = require('../lib');
const P = L.sample.chapter7Plain;
const I = L.icons;

const pointer = (x, y) => `<svg class="cursorptr" style="left:${x}px;top:${y}px" width="14" height="20" viewBox="0 0 14 20"><path d="M1 1v15l4-3.5 2.5 6 2.5-1-2.5-5.5H13z" fill="#fff" stroke="#222" stroke-width="1.2" stroke-linejoin="round"/></svg>`;
// the proposal icon: the .u-prop look as an icon, a dashed circle (lib has no `prop` glyph yet; defined here)
const propIcon = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="8" cy="8" r="6.3" stroke-dasharray="2.75 2.2"/></svg>`;

const pLeave = 'Vega left the coin where it was and her glass untouched. She did not look at the back-room door on the way out, which took more effort than the walk home would.';
const p10 = 'At the corner of Harbor Street she stopped under the awning of the pawnshop and counted the windows above the Blue Lamp. Three dark, one lit. She stood there long enough for the light to go out.';
const p11 = 'Outside, the rain had started again by the time Vega woke, and the light through the blind was the flat gray of nine in the morning. She lay still and counted what she knew, which did not take long.';

const col = `<p class="first">${P[7]}</p><p>${P[8]}</p>`
  + `<div class="para brk selblk"><div class="srule"></div></div>`
  + `<p class="first">${pLeave}</p>`
  + `<div class="para brk"><div class="srule"></div></div>`
  + `<p class="first">${p10}</p>`
  + `<div class="para brk"><div class="srule det"></div><span class="gm prop">${propIcon}</span></div>`
  + `<p class="first">${p11}</p>`;

// ---------- the chapter list: chapter 7 with its scenes, two of them without a kept name ----------
const cnt = (r) => {
  const parts = [];
  if (r.notes) parts.push(`<span class="k-note">${r.notes}${I.note}</span>`);
  if (r.tasks) parts.push(`<span class="k-task">${r.tasks}${I.task}</span>`);
  return `<span class="cnt">${parts.join('')}</span>`;
};
function row(r) {
  if (r.type === 'front') return `<div class="nrow fm"><span class="cv"></span><span class="n"></span><span class="t">${L.esc(r.title)}</span></div>`;
  if (r.type === 'part') return `<div class="nrow part"><span class="cv"></span><span class="t">${L.esc(r.title)}</span></div>`;
  if (r.type === 'scene') {
    const t = `<span class="t${r.fw ? ' fw' : ''}">${L.esc(r.title)}</span>${r.ai ? '<span class="aitag">AI</span>' : ''}`;
    return `<div class="srow${r.here ? ' here' : ''}${r.det ? ' det' : ''}">${t}</div>`;
  }
  return `<div class="nrow${r.cur ? ' cur' : ''}"><span class="cv">${r.cur ? I.chevron : ''}</span><span class="n">${r.n}</span><span class="t">${L.esc(r.title)}</span>${cnt(r)}</div>`;
}
const rows = [
  { type: 'front', title: 'Front matter' },
  { type: 'part', title: 'Part One: Winter in the Harbor District' },
  { n: 1, title: 'Rain on the glass' },
  { n: 2, title: 'The bartender' },
  { n: 3, title: 'A note under the office door, left by someone who knew where the spare key was kept', tasks: 1 },
  { n: 4, title: 'Quarter past three', tasks: 1 },
  { n: 5, title: 'Kit’s ledger' },
  { n: 6, title: 'The back room', notes: 2 },
  { n: 7, title: 'Lena’s warning', notes: 1, tasks: 2, cur: true },
  { type: 'scene', title: 'Vega asks about Kit' },
  { type: 'scene', title: 'Lena lies about the back room, and Vega pretends to believe her' },
  { type: 'scene', title: 'Vega leaves without paying', ai: true },
  { type: 'scene', title: 'At the corner of Harbor…', fw: true, here: true },
  { type: 'scene', title: 'Outside, the rain…', fw: true, det: true },
  { n: 8, title: 'Closing time', tasks: 1 },
  { n: 9, title: 'The pawnshop', tasks: 1 },
];
const nav = `<div class="nav">`
  + `<div class="navtop"><div class="filter">${I.magnifier}<span>Filter chapters (titles and text)</span></div></div>`
  + `<div class="navbody">${rows.map(row).join('')}</div>`
  + `<div class="navfoot"><span class="btn q">+ New chapter</span></div></div>`;

// the standard mark card on the proposed break, its header icon swapped for the dashed circle
const card = L.markCard({
  kind: 'prop', title: 'Proposed · scene break', text: 'Time jumps from ten to the next morning',
  acts: [['✓', 'Keep', 'Enter'], ['✗', 'Not a scene', 'Delete']], x: 1076, y: 530,
}).replace(/<div class="mc-h"><svg.*?<\/svg>/, `<div class="mc-h">${propIcon}`);

const RULE1 = { x: 1008, y: 274 }; // window coordinates: the pointer on the selected break
const menu = `<div class="menu" style="left:${RULE1.x + 4}px;top:${RULE1.y + 6}px"><div class="mi">Remove scene break</div><div class="mi">Name this scene…</div></div>`;

const css = `<style>
.s06 .brk{padding:11px 0;margin:15px 0}
.s06 .brk .srule{margin:0 80px}
.s06 .brk .srule.det{margin:0 110px}
.s06 .selblk{background:#cfe0f3;border-radius:2px}
.s06 .selblk .srule{background:linear-gradient(90deg,transparent,#7f8794 25%,#7f8794 75%,transparent)}
.s06 .para>.gm.prop{position:absolute;left:calc(100% + 14px);top:4px;color:var(--ink3)}
.s06 .mc.prop .mc-h svg{color:var(--ink3)}
.s06 .nrow.fm .t{color:var(--ink3)}
.s06 .srow .fw{color:var(--ink3)}
.s06 .srow.here .fw{color:var(--ink3)}
.s06 .srow.det{color:var(--ink3)}
.s06 .aitag{flex:none;align-self:center;font:600 8.5px/1 var(--ui);letter-spacing:.06em;color:var(--ink3);border:1px solid var(--ink4);border-radius:3px;padding:2px 3px}
</style>`;

const html = css + L.win({
  mode: 'Write',
  crumbs: { chapter: 'Chapter 7 · Lena’s warning', scene: 'At the corner of Harbor…' },
  left: nav,
  page: L.pageCol(col, { paddingTop: 40 }),
  status: { style: 'Plain', words: '2,531 words', pages: 'book p. ~146/248', fixes: '3 fixes' },
  ask: 'normal',
  content: L.notice('Scene break', { kind: 'fix' }),
  extra: pointer(RULE1.x, RULE1.y) + menu + card
    + L.ann(2, 'A break is a block like a paragraph: a click selects it with the selection color; it is copied, cut and pasted as its “***” line; Backspace or Delete removes it', 1076, 192, { w: 300 })
    + L.ann(6, 'Right-click on a rule: Remove scene break (the two scenes merge, with Undo) · Name this scene…', 1076, 356, { w: 300 })
    + L.ann(1, 'Typed “***” above and “- - -” here: a line holding only a repeated symbol becomes the same soft rule; on disk it is a “***” line', 1076, 426, { w: 300 })
    + L.ann(3, 'Proposed, not done: a dashed rule and a dashed icon in the gutter, with the same card as every other mark: what, why, Keep or Not a scene', 1076, 640, { w: 300 })
    + L.ann(4, 'Notices are one card at the bottom center of the page, never on a timer: this one for the time you meant the characters; also a line in History', 1076, 776, { w: 260 })
    + L.ann(5, 'Scenes without a name show their first words in gray; the AI names them when one is connected, tagged AI; the dashed guide and lighter text mean proposed, not kept', 14, 640, { w: 300 }),
});

module.exports = {
  id: 'S06',
  file: 's06-scene-breaks',
  title: 'Scene breaks, typed and detected',
  width: 1440,
  height: 900,
  html: html.replace('<div class="win"', '<div class="win s06"'),
  caption: L.caption({
    id: 'S06', title: 'Scene breaks, typed and detected',
    scene: 'The end of chapter 7. The writer typed “***” after Lena’s warning some time ago, and “- - -” just now after Vega leaves the bar: both are the same soft rule, and the notice at the bottom offers Undo for the new one. The first rule was right-clicked, so it is selected and its menu is open. Further down, the time jumps to the next morning without a break, so Libreto proposes one with a dashed rule, a dashed gutter icon and its card.',
    on: 'the typed scene break as a soft gray rule, selected (blue block) with the pointer and the menu “Remove scene break · Name this scene…”, the second typed rule, the notice card “Scene break · Undo Ctrl+Z · ✕” at the bottom center, the proposed break as a dashed rule with the dashed gutter icon and the card “Proposed · scene break · Time jumps from ten to the next morning · ✓ Keep Enter · ✗ Not a scene Delete”, the chapter list with chapter 7 open: “Vega leaves without paying” tagged AI, “At the corner of Harbor…” in gray (first words, the current scene), “Outside, the rain…” in gray on a dashed guide (detected, not kept), chapter 7 text around them, the strip with the modes at the right, the status bar pills, the Ask button',
    off: 'the typed characters “***” or “- - -” themselves, a Scene break style in the styles palette, the Reference panel, a tooltip on the rule, the notice after a removal (History and S33), chapters 10 and 11 and Back matter (below the cut), Search &amp; ask box, provider icon in the status bar',
  }),
};
