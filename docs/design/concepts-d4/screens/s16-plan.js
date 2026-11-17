// S16: Plan, as rows. One row per chapter, its scenes left to right, the board scrolling down like the chapter
// list; a part is a thin band between rows. Above the board one line: + New card, Color by ▾, and the moves
// with their menu open (moves and the continuity issues in one list). A card is being dragged into a lit row;
// the Reference panel shows the selected card's scene.
const L = require('../lib');

// Color by: point of view (hues outside the four mark colors)
const POV = { Vega: '#7d5bbf', Kit: '#4f8a8b', Lena: '#b5577e' };
const ST = { draft: 'Draft', working: 'Working', done: 'Done' };

const HX = 16, HW = 168, CW = 196, CG = 10;          // row header, card width and gap
const cx = (i) => HX + HW + i * (CW + CG);
const RH = 92;                                       // row height (card 74 + room)

// card({n, t, pov, place, st, line, sel, moved, ghost})
const card = (c, i) => {
  if (c.ghost) return `<div class="pcard ghost" style="left:${cx(i)}px"></div>`;
  return `<div class="pcard${c.sel ? ' sel' : ''}${c.moved ? ' moved' : ''}" style="left:${cx(i)}px"><i style="background:${POV[c.pov]}"></i>`
    + `<div class="pt"><span class="pn">${c.n}</span>${c.t}</div><div class="pl">${c.pov} · ${c.place}</div>`
    + `<div class="pb"><span class="st ${c.st || 'draft'}"></span>${ST[c.st || 'draft']}${c.line ? `<span class="sl">${c.line}</span>` : ''}${c.moved ? '<span class="mv">moved</span>' : ''}</div></div>`;
};
// row(y, num, title, sub, cards, {lit, gray, scroll})
const row = (y, num, title, sub, cards, o = {}) => `<div class="prow${o.lit ? ' lit' : ''}${o.gray ? ' gray' : ''}" style="top:${y}px">`
  + `<div class="rh"><span class="grip">⋮⋮</span>${num ? `<span class="ln">${num}</span>` : ''}<span class="lt">${title}</span><small>${sub}</small></div>`
  + cards.map(card).join('') + (o.scroll ? `<div class="rscroll"><i></i></div>` : '') + (o.drop ? `<div class="dropline" style="left:${cx(o.drop) - CG / 2 - 1.5}px"></div>` : '') + `</div>`;

const WARN = `<svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="#b5651d" stroke-width="1.5" stroke-linejoin="round"><path d="M8 2 14.5 13.5h-13z"/><path d="M8 6.5v3.2M8 11.6v.1" stroke-linecap="round"/></svg>`;

// rows, in board coordinates (the board starts under the strip)
const Y8 = 54, Y9 = Y8 + RH, YP = Y9 + RH, Y10 = YP + 24, Y11 = Y10 + RH, YS = Y11 + RH + 4, YU = YS + 10, YD = YU + RH;

const moves = `<div class="movemenu" data-m="moves"><div class="mh">3 moves · nothing changes in the text until Apply</div>`
  + `<div class="mvr"><span class="k">1</span><div><b>Vega reads the ledger</b> · from chapter 11, after “Kit finds the ledger” → to chapter 10, after “The confession”`
  + `<div class="mw">${WARN}<span>Vega reads the ledger before Kit finds it (11.2)</span><span class="lk">Add as a task</span></div></div></div>`
  + `<div class="mvr"><span class="k">2</span><div><b>A green Fiat outside</b> · from chapter 9, after “The pawnbroker remembers Kit” → to chapter 8, at the end</div></div>`
  + `<div class="mvr"><span class="k">3</span><div><b>Kit’s sister visits</b> · from Discarded → to Unplaced</div></div>`
  + `<div class="mf"><span class="lk">Undo the last move</span></div></div>`;

const board = `<div class="board">`
  + `<div class="pbar"><span class="btn">+ New card</span><span class="btn dd">Color by: Point of view</span><span class="sp"></span>`
  + `<span class="btn dd on" data-m="mvbtn">3 moves</span><span class="dot">·</span><span class="btn pri">Apply</span><span class="btn">Discard</span></div>`
  + row(Y8, 8, 'Closing time', '5 scenes', [
    { n: '8.1', t: 'Lena counts the till', pov: 'Lena', place: 'The Blue Lamp', st: 'done' },
    { n: '8.2', t: 'Vega waits across the street', pov: 'Vega', place: 'Harbor Street', st: 'done', line: 'The ledger' },
    { n: '8.3', t: 'A light in the back room', pov: 'Vega', place: 'Harbor Street', st: 'working', line: 'The ledger' },
    { n: '8.4', t: 'Kit runs', pov: 'Kit', place: 'Harbor Street', st: 'draft' },
    { n: '8.5', t: 'A green Fiat outside', pov: 'Lena', place: 'Harbor Street', st: 'draft', moved: true },
  ], { scroll: true })
  + row(Y9, 9, 'The pawnshop', '2 scenes', [
    { n: '9.1', t: 'Under the pawnshop awning', pov: 'Vega', place: 'Harbor Street', st: 'working' },
    { n: '9.2', t: 'The pawnbroker remembers Kit', pov: 'Vega', place: 'The pawnshop', st: 'draft', line: 'The ledger' },
  ])
  + `<div class="part" style="top:${YP}px" data-m="part">Part Two · Spring</div>`
  + row(Y10, 10, 'Station steps', '3 scenes', [
    { n: '10.1', t: 'Kit waits on the station steps', pov: 'Kit', place: 'The station steps', st: 'done' },
    { n: '10.2', t: 'The confession', pov: 'Kit', place: 'The station steps', st: 'working', line: 'The ledger' },
    { n: '10.3', t: 'Vega reads the ledger', pov: 'Vega', place: 'The back room', st: 'draft', line: 'The ledger', moved: true, sel: true },
  ], { lit: true, drop: 1 })
  + row(Y11, 11, 'The back room, finally', '4 scenes', [
    { ghost: true },
    { n: '11.2', t: 'Kit finds the ledger', pov: 'Kit', place: 'The back room', st: 'draft', line: 'The ledger' },
    { n: '11.3', t: 'Kit burns a page', pov: 'Kit', place: 'The back room', st: 'draft', line: 'The ledger' },
    { n: '11.4', t: 'Vega and Lena, at closing', pov: 'Vega', place: 'The Blue Lamp', st: 'draft' },
  ])
  + `<div class="hr" style="top:${YS}px"></div>`
  + row(YU, '', 'Unplaced', 'not printed', [
    { n: '—', t: 'Lena asks about the ledger', pov: 'Vega', place: 'The Blue Lamp', st: 'draft' },
    { n: '—', t: 'The pawnshop awning, at night', pov: 'Vega', place: 'Harbor Street', st: 'draft' },
    { n: '—', t: 'Kit’s sister visits', pov: 'Kit', place: 'The Blue Lamp', st: 'draft', moved: true },
  ], { gray: true })
  + row(YD, '', 'Discarded', 'kept', [
    { n: '—', t: 'The dream about the harbor', pov: 'Vega', place: 'Harbor Street', st: 'draft' },
  ], { gray: true })
  // the dragged card under the pointer, and what Libreto knows before the drop
  + `<div class="pcard drag" style="left:${cx(1) - 70}px;top:${Y10 + 40}px" data-m="drag"><i style="background:${POV.Lena}"></i><div class="pt"><span class="pn">11.1</span>Lena unlocks the back room</div><div class="pl">Lena · The Blue Lamp</div><div class="pb"><span class="st draft"></span>Draft</div></div>`
  + `<svg class="ptr" style="left:${cx(1) + 80}px;top:${Y10 + 80}px" width="16" height="22" viewBox="0 0 16 22"><path d="M1 1v17l4.5-4 3 6.5 3-1.4-3-6.3H14z" fill="#fff" stroke="#222" stroke-width="1.3" stroke-linejoin="round"/></svg>`
  + `<div class="warn" style="left:${cx(1) + 106}px;top:${Y10 + 96}px" data-m="warn">${WARN}<span>Kit is inside the back room in 10.2, before Lena unlocks it<small>ch. 11 → ch. 10 · who is where, from the text</small></span></div>`
  + moves
  // the legend
  + `<div class="legend">Color by: <span class="dd">Point of view</span><span class="sep">·</span>`
  + Object.entries(POV).map(([k, v]) => `<span class="lg"><i style="background:${v}"></i>${k}</span>`).join('<span class="sep">·</span>')
  + `<span class="sep" style="margin-left:14px">|</span><span class="lg"><span class="st draft"></span>Draft</span><span class="lg"><span class="st working"></span>Working</span><span class="lg"><span class="st done"></span>Done</span>`
  + `</div><div class="vscroll"><i></i></div></div>`;

const css = `<style>
.board{position:absolute;left:0;top:0;bottom:0;right:320px;z-index:1;background:var(--soft);font:13px var(--ui);color:var(--ink);overflow:hidden}
.pbar{position:absolute;left:0;right:0;top:0;height:44px;display:flex;align-items:center;gap:8px;padding:0 16px;background:#fff;border-bottom:1px solid var(--line);z-index:7}
.pbar .sp{flex:1}
.pbar .dot{color:var(--ink4)}
.pbar .btn.on{background:#e8e8e5;box-shadow:inset 0 0 0 1px var(--ink4)}
.movemenu{position:absolute;right:96px;top:48px;width:420px;z-index:9;background:#fff;border:1px solid var(--line);border-radius:10px;box-shadow:0 10px 30px rgba(0,0,0,.16);padding:6px;font-size:12.5px;line-height:1.45}
.movemenu .mh{font:600 10.5px var(--ui);letter-spacing:.06em;text-transform:uppercase;color:var(--ink3);padding:5px 8px 5px}
.mvr{display:flex;gap:9px;padding:7px 8px;border-radius:6px}
.mvr+.mvr{border-top:1px solid var(--line2)}
.mvr .k{flex:none;width:18px;height:18px;border-radius:9px;background:var(--accent-tint);color:var(--accent);font:600 10.5px/18px var(--ui);text-align:center;margin-top:1px}
.mvr b{font-weight:600}
.mw{display:flex;align-items:flex-start;gap:7px;margin-top:6px;padding:6px 8px;border-radius:6px;background:#fdf3e8;color:#8a4a14;box-shadow:inset 0 0 0 1px #efcfae}
.mw svg{flex:none;margin-top:2px}.mw .lk{margin-left:auto;white-space:nowrap;padding-left:8px}
.movemenu .mf{border-top:1px solid var(--line2);padding:6px 8px 3px;font-size:12px}
.part{position:absolute;left:0;right:0;height:18px;font:600 10.5px/18px var(--ui);letter-spacing:.08em;text-transform:uppercase;color:var(--ink3);padding-left:${HX + 4}px;background:#e9e9e6;border-top:1px solid #d8d8d4;border-bottom:1px solid #d8d8d4}
.prow{position:absolute;left:0;right:0;height:${RH}px}
.prow.lit{background:var(--accent-tint);box-shadow:inset 0 0 0 1.5px var(--accent)}
.rh{position:absolute;left:${HX}px;top:10px;width:${HW - 16}px;display:flex;flex-wrap:wrap;align-items:baseline;gap:2px 6px;font-weight:600;line-height:1.3}
.rh .grip{color:var(--ink4);font-size:11px;letter-spacing:-2px;font-weight:400}
.rh .ln{color:var(--ink3);font-weight:500}
.rh .lt{min-width:0}
.rh small{flex-basis:100%;font-weight:400;color:var(--ink3);font-size:11.5px;padding-left:16px}
.prow.gray .rh{color:var(--ink2)}
.prow.gray .pcard{background:#fafaf9}
.prow.gray .pcard .pt{color:var(--ink2)}
.pcard{position:absolute;top:9px;width:${CW}px;height:74px;box-sizing:border-box;background:#fff;border:1px solid var(--line);border-radius:9px;padding:7px 10px 7px 18px}
.pcard i{position:absolute;left:7px;top:9px;bottom:9px;width:4px;border-radius:2px}
.pcard .pt{font:14px/1.3 var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.pcard .pn{font:11px var(--ui);color:var(--ink3);margin-right:6px}
.pcard .pl{font-size:11px;color:var(--ink3);margin-top:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.pcard .pb{display:flex;align-items:center;gap:5px;font-size:11px;color:var(--ink2);margin-top:4px;white-space:nowrap}
.pcard .sl{border:1px solid var(--line);border-radius:9px;padding:0 6px;color:var(--ink2);margin-left:4px}
.pcard .mv{margin-left:auto;color:var(--accent);font-size:10.5px}
.st{display:inline-block;width:8px;height:8px;border-radius:50%;box-sizing:border-box;flex:none;border:1.5px solid #8d8f93}
.st.working{background:linear-gradient(90deg,#8d8f93 50%,transparent 50%)}
.st.done{background:#5d6065;border-color:#5d6065}
.pcard.sel{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-tint)}
.pcard.moved{border-style:dashed;border-color:var(--accent)}
.pcard.moved.sel{border-style:solid}
.pcard.ghost{border:1.5px dashed var(--ink4);background:none}
.pcard.drag{z-index:5;transform:rotate(-2deg);box-shadow:0 0 0 3px var(--accent-tint),0 14px 30px rgba(0,0,0,.18);border-color:var(--accent)}
.dropline{position:absolute;top:8px;width:3px;height:76px;border-radius:2px;background:var(--accent)}
.rscroll{position:absolute;left:${HX + HW}px;right:24px;bottom:2px;height:4px;border-radius:2px;background:rgba(0,0,0,.05)}
.rscroll i{position:absolute;top:0;bottom:0;left:0;width:82%;border-radius:2px;background:rgba(0,0,0,.2)}
.hr{position:absolute;left:${HX}px;right:16px;height:0;border-top:1.5px solid #cfcfcb}
.ptr{position:absolute;z-index:7}
.warn{position:absolute;z-index:6;display:flex;align-items:flex-start;gap:8px;width:290px;background:#fff;border:1px solid #e8c6a6;border-radius:9px;padding:8px 11px;font-size:12.5px;line-height:1.4;color:var(--ink);box-shadow:0 10px 30px rgba(0,0,0,.13)}
.warn svg{flex:none;margin-top:2px}
.warn small{display:block;color:var(--ink3);font-size:11.5px}
.vscroll{position:absolute;right:3px;top:50px;bottom:44px;width:6px;border-radius:3px;background:rgba(0,0,0,.05)}
.vscroll i{position:absolute;left:0;right:0;top:46%;height:30%;border-radius:3px;background:rgba(0,0,0,.22)}
.legend{position:absolute;left:16px;right:16px;bottom:0;height:38px;display:flex;align-items:center;gap:8px;color:var(--ink2);border-top:1px solid var(--line);background:var(--soft)}
.legend .sep{color:var(--ink4)}
.legend .lg{display:inline-flex;align-items:center;gap:6px;color:var(--ink)}
.legend .lg i{width:10px;height:10px;border-radius:50%}
/* the scene in the Reference panel: every field editable */
.scn .fl{font:600 10.5px var(--ui);letter-spacing:.08em;text-transform:uppercase;color:var(--ink3);margin:12px 0 4px}
.scn .fl:first-child{margin-top:0}
.scn .ed{background:#fff;border:1px solid var(--line);border-radius:7px;padding:6px 9px;font-size:12.5px;line-height:1.45;color:var(--ink)}
.scn .ed.txt{font:14px/1.45 var(--text)}
.scn .chips{display:flex;flex-wrap:wrap;gap:5px}
.scn .chips span{background:#fff;border:1px solid var(--line);border-radius:12px;padding:2px 9px;font-size:12px;color:var(--accent)}
.scn .chips span.add{color:var(--ink3);border-style:dashed}
.scn .rel{display:flex;gap:7px;align-items:flex-start;padding:3px 0;font-size:12.5px}
.scn .rel svg{flex:none;margin-top:1px}
.scn .rel .ok{width:15px;flex:none;text-align:center;color:var(--ink3)}
.scn dl{display:grid;grid-template-columns:88px 1fr;gap:5px 8px;margin:0;font-size:12.5px;align-items:center}
.scn dt{color:var(--ink3)}
.scn dd{margin:0;display:flex;align-items:center;gap:6px}
.scn dd .v{background:#fff;border:1px solid var(--line);border-radius:6px;padding:1px 8px}
.scn dd small{color:var(--ink3);font-size:11px}
.scn .refbody,.ref .refbody{padding-bottom:20px}
</style>`;

const scene = `<div class="scn" data-m="panel">`
  + `<div class="fl">The line</div><div class="ed txt">Vega reads Kit’s ledger by the stove and finds her own name in it.</div>`
  + `<div class="fl">Who · where</div><div class="chips"><span>Vega</span><span>Kit</span><span>The back room</span><span class="add">+</span></div>`
  + `<div class="fl">Relies on</div>`
  + `<div class="rel">${WARN}<span>Kit finds the ledger <span class="lk">(11.2)</span></span></div>`
  + `<div class="rel"><span class="ok">✓</span><span>The ledger is green <span class="lk">(ch. 5)</span></span></div>`
  + `<div class="rel"><span class="ok">✓</span><span>Lena keeps the back-room key <span class="lk">(ch. 6)</span></span></div>`
  + `<div class="fl">Words</div><div style="font-size:12.5px">1,140 · about 4 pages</div>`
  + `<div class="fl">Labels</div><dl>`
  + `<dt>Point of view</dt><dd><span class="v">Vega</span><small>from the Codex</small></dd>`
  + `<dt>Place</dt><dd><span class="v">The back room</span><small>from the Codex</small></dd>`
  + `<dt>Status</dt><dd><span class="v dd">Draft</span></dd>`
  + `<dt>Storyline</dt><dd><span class="v dd">The ledger</span></dd>`
  + `<dt>My label</dt><dd><span class="v dd">Rewrite</span></dd></dl>`
  + `</div>`;

const crop = (label, items, w) => `<div class="crop" style="width:${w}px"><div class="lbl">${label}</div>`
  + `<div class="menu" style="position:static;box-shadow:none;border:0;border-radius:0;padding:6px 8px">${items}</div></div>`;
const mi = (t, o = {}) => (t === '-' ? '<div class="msep"></div>' : `<div class="mi${o.hov ? ' hov' : ''}"><span style="width:14px;flex:none;text-align:center">${o.ok ? '✓' : ''}</span><span>${t}</span>${o.r ? `<span class="r">${o.r}</span>` : ''}</div>`);
const below = `<div class="below">`
  + crop('Right-click on a card', [mi('Open'), mi('Rename'), mi('-'), mi('Labels', { r: '▸' }), mi('Move to', { r: '▸', hov: true }), mi('-'), mi('Unplace'), mi('Move to Discarded'), mi('Delete…')].join(''), 240)
  + crop('The Color by menu', ['Point of view', 'Place', 'Status', 'Storyline', 'My label'].map((t, i) => mi(t, { ok: i === 0, hov: i === 0 })).join(''), 240)
  + `</div>`;

const html = css + L.win({
  mode: 'Plan',
  crumbs: false,
  right: L.reference({ kind: 'Scene', name: 'Vega reads the ledger', open: 'Open in Write', body: scene }),
  page: '',
  content: board,
  status: { style: false, view: false, words: '86,240 words', pages: '11 chapters · 31 scenes' },
  ask: 'normal',
  extra: L.ann(1, 'Moves and the issues they raise: one list, read once before Apply', 812, 396, { w: 250 })
    + L.ann(2, 'A part is a thin band between rows', 210, 336)
    + L.ann(3, 'The row under the pointer lights up; before the drop, what Libreto knows the move breaks', 812, 572, { w: 250 })
    + L.ann(4, 'Unplaced (not printed, not counted) and Discarded: the last two rows, under a line, gray', 400, 752, { w: 330 })
    + L.ann(5, 'One row per chapter, scenes left to right, the board scrolls down; a long chapter scrolls a little sideways in its own row', 400, 664, { w: 330 })
    + L.ann(6, 'The selected card’s scene, all editable; point of view and place fill themselves from the Codex', 1150, 700, { w: 250 }),
}) + below;

module.exports = {
  id: 'S16',
  file: 's16-plan',
  title: 'Plan, as rows',
  width: 1440,
  height: 900,
  html,
  caption: L.caption({
    id: 'S16', title: 'Plan, as rows',
    scene: 'The end of Part One and the start of Part Two, one row per chapter. Three moves wait for Apply, their menu open: the first one breaks continuity, and its warning sits under it with Add as a task. The writer now drags “Lena unlocks the back room” out of chapter 11 into chapter 10; the row lights up and, before the drop, the warning shows. The selected card, “Vega reads the ledger” (moved, pending), fills the Reference panel.',
    on: 'no breadcrumb, the left column closed; the line above the board (+ New card, Color by: Point of view ▾, 3 moves ▾ · Apply · Discard) with the moves menu open (three moves in words, an orange warning with Add as a task under the first); rows 8 and 9 (8 cut at the right with its own small sideways scrollbar), the Part Two band, rows 10 (lit, with the drop line) and 11 (with the ghost the card left), a line, then Unplaced and Discarded in gray; cards with the point-of-view bar, place, status dot and storyline; moved cards dashed blue; the dragged card, the pointer and the warning; the legend at the bottom; the Reference panel (SCENE, the name large, line, who and where, relies on, words, labels; foot Open in Write · Ask the AI); the Ask button. Under the window: the right-click menu on a card, and the Color by menu',
    off: 'the text, the chapter list, the view item in the status bar, the “leave with moves pending” question, Write’s gray Unplaced and Discarded rows',
  }),
};
