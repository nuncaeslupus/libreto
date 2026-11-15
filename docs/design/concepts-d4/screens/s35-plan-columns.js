// S35: Plan, as columns. The same board as S16 the other way: one column per chapter, scenes top to bottom, the
// board scrolling sideways, parts as bands above their columns. Shown so the choice between rows and columns can be
// made with both in view; draft 7 proposes rows (S16).
const L = require('../lib');

const POV = { Vega: '#7d5bbf', Kit: '#4f8a8b', Lena: '#b5577e' };
const ST = { draft: 'Draft', working: 'Working', done: 'Done' };
const HX = 16, HW = 0, CW = 0, RH = 92;   // names the shared card styles use (from S16)

const LW = 196, GAP = 12, X0 = 16;
const lx = (i) => X0 + i * (LW + GAP);

const card = (c) => `<div class="pcard${c.sel ? ' sel' : ''}${c.moved ? ' moved' : ''}"><i style="background:${POV[c.pov]}"></i>`
  + `<div class="pt"><span class="pn">${c.n}</span>${c.t}</div><div class="pl">${c.pov} · ${c.place}</div>`
  + `<div class="pb"><span class="st ${c.st || 'draft'}"></span>${ST[c.st || 'draft']}${c.line ? `<span class="sl">${c.line}</span>` : ''}${c.moved ? '<span class="mv">moved</span>' : ''}</div></div>`;
const lane = (i, num, title, sub, cards, o = {}) => `<div class="lane${o.gray ? ' gray' : ''}" style="left:${lx(i)}px">`
  + `<div class="lh"><span class="grip">⋮⋮</span>${num ? `<span class="ln">${num}</span>` : ''}<span class="lt">${title}</span><small>${sub}</small></div>`
  + cards.map(card).join('') + `</div>`;

const WARN = `<svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="#b5651d" stroke-width="1.5" stroke-linejoin="round"><path d="M8 2 14.5 13.5h-13z"/><path d="M8 6.5v3.2M8 11.6v.1" stroke-linecap="round"/></svg>`;

const board = `<div class="board">`
  + `<div class="pbar"><span class="btn">+ New card</span><span class="btn dd">Color by: Point of view</span><span class="sp"></span>`
  + `<span class="btn dd">3 moves</span><span class="dot">·</span><span class="btn pri">Apply</span><span class="btn">Discard</span></div>`
  + `<div class="part pband" style="left:${lx(0)}px;width:${2 * LW + GAP}px">Part One · Winter in the Harbor District</div>`
  + `<div class="part pband" style="left:${lx(2)}px;width:${2 * LW + GAP}px">Part Two · Spring</div>`
  + lane(0, 8, 'Closing time', '5', [
    { n: '8.1', t: 'Lena counts the till', pov: 'Lena', place: 'The Blue Lamp', st: 'done' },
    { n: '8.2', t: 'Vega waits across the street', pov: 'Vega', place: 'Harbor Street', st: 'done', line: 'The ledger' },
    { n: '8.3', t: 'A light in the back room', pov: 'Vega', place: 'Harbor Street', st: 'working', line: 'The ledger' },
    { n: '8.4', t: 'Kit runs', pov: 'Kit', place: 'Harbor Street', st: 'draft' },
    { n: '8.5', t: 'A green Fiat outside', pov: 'Lena', place: 'Harbor Street', st: 'draft', moved: true },
  ])
  + lane(1, 9, 'The pawnshop', '2', [
    { n: '9.1', t: 'Under the pawnshop awning', pov: 'Vega', place: 'Harbor Street', st: 'working' },
    { n: '9.2', t: 'The pawnbroker remembers Kit', pov: 'Vega', place: 'The pawnshop', st: 'draft', line: 'The ledger' },
  ])
  + lane(2, 10, 'Station steps', '3', [
    { n: '10.1', t: 'Kit waits on the station steps', pov: 'Kit', place: 'The station steps', st: 'done' },
    { n: '10.2', t: 'The confession', pov: 'Kit', place: 'The station steps', st: 'working', line: 'The ledger' },
    { n: '10.3', t: 'Vega reads the ledger', pov: 'Vega', place: 'The back room', st: 'draft', line: 'The ledger', moved: true, sel: true },
  ])
  + lane(3, 11, 'The back room, finally', '4', [
    { n: '11.1', t: 'Lena unlocks the back room', pov: 'Lena', place: 'The Blue Lamp', st: 'draft' },
    { n: '11.2', t: 'Kit finds the ledger', pov: 'Kit', place: 'The back room', st: 'draft', line: 'The ledger' },
    { n: '11.3', t: 'Kit burns a page', pov: 'Kit', place: 'The back room', st: 'draft', line: 'The ledger' },
    { n: '11.4', t: 'Vega and Lena, at closing', pov: 'Vega', place: 'The Blue Lamp', st: 'draft' },
  ])
  + lane(4, '', 'Unplaced', 'not printed', [
    { n: '—', t: 'Lena asks about the ledger', pov: 'Vega', place: 'The Blue Lamp', st: 'draft' },
    { n: '—', t: 'The pawnshop awning, at night', pov: 'Vega', place: 'Harbor Street', st: 'draft' },
    { n: '—', t: 'Kit’s sister visits', pov: 'Kit', place: 'The Blue Lamp', st: 'draft', moved: true },
  ], { gray: true })
  + lane(5, '', 'Discarded', 'kept', [
    { n: '—', t: 'The dream about the harbor', pov: 'Vega', place: 'Harbor Street', st: 'draft' },
  ], { gray: true })
  + `<div class="hscroll"><i></i></div>`
  + `<div class="legend">Color by: <span class="dd">Point of view</span><span class="sep">·</span>`
  + Object.entries(POV).map(([k, v]) => `<span class="lg"><i style="background:${v}"></i>${k}</span>`).join('<span class="sep">·</span>')
  + `<span class="sep" style="margin-left:14px">|</span><span class="lg"><span class="st draft"></span>Draft</span><span class="lg"><span class="st working"></span>Working</span><span class="lg"><span class="st done"></span>Done</span>`
  + `</div></div>`;

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
.pcard{position:relative;margin-bottom:10px;width:auto;height:74px;box-sizing:border-box;background:#fff;border:1px solid var(--line);border-radius:9px;padding:7px 10px 7px 18px}
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

.part.pband{right:auto;top:52px;height:18px;padding-left:4px;background:none;border:0;border-bottom:2px solid #d8d8d4}
.lane{position:absolute;top:80px;width:${LW}px;bottom:66px;border-radius:10px;padding:0 8px;box-sizing:border-box;background:rgba(0,0,0,.025)}
.lh{height:38px;display:flex;align-items:center;gap:6px;font-weight:600;padding:0 2px;white-space:nowrap}
.lh .grip{color:var(--ink4);font-size:11px;letter-spacing:-2px;font-weight:400;margin-right:2px}
.lh .ln{color:var(--ink3);font-weight:500}
.lh .lt{overflow:hidden;text-overflow:ellipsis;min-width:0}
.lh small{font-weight:400;color:var(--ink3);font-size:11.5px;margin-left:auto;flex:none}
.lane.gray .lh{color:var(--ink3)}
.lane.gray .lh .lt{color:var(--ink2)}
.lane.gray .pcard{background:#fafaf9}
.lane.gray .pcard .pt{color:var(--ink2)}
.hscroll{position:absolute;left:12px;right:12px;bottom:46px;height:7px;border-radius:4px;background:rgba(0,0,0,.06)}
.hscroll i{position:absolute;top:0;bottom:0;left:30%;width:52%;border-radius:4px;background:rgba(0,0,0,.24)}
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

const html = css + L.win({
  mode: 'Plan',
  crumbs: false,
  right: L.reference({ kind: 'Scene', name: 'Vega reads the ledger', open: 'Open in Write', body: scene }),
  page: '',
  content: board,
  status: { style: false, view: false, words: '86,240 words', pages: '11 chapters · 31 scenes' },
  ask: 'normal',
  extra: L.ann(1, '<b style="all:unset;font-weight:700">Columns, for:</b> a card has room for two lines and its labels, a chapter reads as a stack, the right panel is beside the cards it describes', 432, 690, { w: 300 })
    + L.ann(2, '<b style="all:unset;font-weight:700">Columns, against:</b> thirty chapters are thirty columns and a long sideways scroll, which mice and trackpads do worse than a vertical one; the part bands are far from the cards', 640, 560, { w: 300 }),
});

module.exports = {
  id: 'S35',
  file: 's35-plan-columns',
  title: 'Plan, as columns',
  width: 1440,
  height: 900,
  html,
  caption: L.caption({
    id: 'S35', title: 'Plan, as columns',
    scene: 'The same board and the same moment as S16, the other way: one column per chapter, scenes top to bottom, the board scrolling sideways. Here to choose with both in view; draft 7 proposes rows (S16).',
    on: 'no breadcrumb, the left column closed; the same line above the board (+ New card, Color by: Point of view ▾, 3 moves ▾ · Apply · Discard), the menu closed; the part bands above their columns (Part One over 8 and 9, Part Two over 10 and 11); columns 8 to 11, then Unplaced and Discarded (the last cut by the edge); cards with the point-of-view bar, place, status dot and storyline, moved cards dashed blue; the sideways scrollbar; the legend; the same Reference panel (SCENE, Vega reads the ledger); the Ask button; two callouts, for and against',
    off: 'the moves menu, a drag in progress (both in S16), the text, the chapter list',
  }),
};
