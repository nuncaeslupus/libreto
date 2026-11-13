// S16: Plan. The book as cards in lanes, one lane per chapter, side by side, a long shelf that scrolls sideways;
// a card being dragged with its lane lit and the warning; moves and issues at the top right; the Reference panel
// shows the selected card's scene.
const L = require('../lib');

// Color by: point of view (hues outside the four mark colors)
const POV = { Vega: '#7d5bbf', Kit: '#4f8a8b', Lena: '#b5577e' };

const LW = 220, GAP = 14, X0 = 16;
const lx = (i) => X0 + i * (LW + GAP);

// card({n, t, pov, place, sel, ghost})
const card = (c) => {
  if (c.ghost) return `<div class="pcard ghost"></div>`;
  if (c.drop) return `<div class="dropline"></div>`;
  return `<div class="pcard${c.sel ? ' sel' : ''}"><i style="background:${POV[c.pov]}"></i>`
    + `<div class="pn">${c.n}</div><div class="pt">${c.t}</div><div class="pl">${c.pov} · ${c.place}</div></div>`;
};
// lane(i, num, title, sub, cards, {lit, gray})
const lane = (i, num, title, sub, cards, o = {}) => `<div class="lane${o.lit ? ' lit' : ''}${o.gray ? ' gray' : ''}" style="left:${lx(i)}px">`
  + `<div class="lh"><span class="grip">⋮⋮</span>${num ? `<span class="ln">${num}</span>` : ''}<span class="lt">${title}</span><small>${sub}</small></div>`
  + cards.map(card).join('') + `</div>`;

const WARN = `<svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="#b5651d" stroke-width="1.5" stroke-linejoin="round"><path d="M8 2 14.5 13.5h-13z"/><path d="M8 6.5v3.2M8 11.6v.1" stroke-linecap="round"/></svg>`;

const board = `<div class="board">`
  // the moves, at the top right; the Issues popover open
  + `<div class="pbar"><span class="sp"></span><span class="moves">3 moves</span><span class="dot">·</span>`
  + `<span class="iss dd">${WARN}1 issue</span><span class="dot">·</span><span class="btn pri">Apply</span><span class="btn">Discard</span></div>`
  + `<div class="issues"><div class="ih">Issues · read them before Apply</div>`
  + `<div class="ir">${WARN}<div>Lena unlocks the back room after Kit is already inside it<small>move 2 · 11.1 after 11.2 · <span class="lk">Show the move</span></small></div></div></div>`
  // the parts, as a thin band above their chapters
  + `<div class="part" style="left:0;width:${lx(1) - GAP - 0}px">‹ Part One</div>`
  + `<div class="part" style="left:${lx(1)}px;width:${2 * LW + GAP}px">Part Two · Spring</div>`
  // the lanes
  + lane(0, 9, 'The pawnshop', '', [
    { n: '9.1', t: 'Under the pawnshop awning', pov: 'Vega', place: 'Harbor Street' },
    { n: '9.2', t: 'The pawnbroker remembers Kit', pov: 'Vega', place: 'The pawnshop' },
    { n: '9.3', t: 'A green Fiat outside', pov: 'Lena', place: 'Harbor Street' },
  ])
  + lane(1, 10, 'Station steps', '', [
    { n: '10.1', t: 'Kit waits on the station steps', pov: 'Kit', place: 'The station steps' },
    { n: '10.2', t: 'The confession', pov: 'Kit', place: 'The station steps' },
    { drop: true },
  ], { lit: true })
  + lane(2, 11, 'The back room, finally', '', [
    { n: '11.1', t: 'Lena unlocks the back room', pov: 'Lena', place: 'The Blue Lamp' },
    { n: '11.2', t: 'Kit finds the ledger', pov: 'Kit', place: 'The back room' },
    { ghost: true },
  ])
  + lane(3, '', 'Unplaced', 'not printed', [
    { n: '—', t: 'Lena asks about the ledger', pov: 'Vega', place: 'The Blue Lamp' },
    { n: '—', t: 'The pawnshop awning, at night', pov: 'Vega', place: 'Harbor Street' },
  ], { gray: true })
  + lane(4, '', 'Discarded', 'kept', [
    { n: '—', t: 'The dream about the harbor', pov: 'Vega', place: 'Harbor Street' },
    { n: '—', t: 'Kit’s sister visits', pov: 'Kit', place: 'The Blue Lamp' },
  ], { gray: true })
  // the dragged card under the pointer, and the warning before the drop
  + `<div class="pcard drag sel" style="left:${lx(1) + 26}px;top:368px"><i style="background:${POV.Vega}"></i><div class="pn">11.3</div><div class="pt">Vega reads the ledger</div><div class="pl">Vega · The back room</div></div>`
  + `<svg class="ptr" style="left:${lx(1) + 170}px;top:406px" width="16" height="22" viewBox="0 0 16 22"><path d="M1 1v17l4.5-4 3 6.5 3-1.4-3-6.3H14z" fill="#fff" stroke="#222" stroke-width="1.3" stroke-linejoin="round"/></svg>`
  + `<div class="warn" style="left:${lx(1) + 10}px;top:458px">${WARN}<span>Vega reads the ledger before Kit finds it<small>ch. 10 → ch. 11 · it arrives in 11.2</small></span></div>`
  // the shelf scrolls sideways
  + `<div class="hscroll"><i></i></div>`
  // the legend
  + `<div class="legend">Color by: <span class="dd">Point of view</span><span class="sep">·</span>`
  + Object.entries(POV).map(([k, v]) => `<span class="lg"><i style="background:${v}"></i>${k}</span>`).join('<span class="sep">·</span>')
  + `</div></div>`;

const css = `<style>
.board{position:absolute;left:0;top:0;bottom:0;right:320px;z-index:1;background:var(--soft);font:13px var(--ui);color:var(--ink);overflow:hidden}
.pbar{position:absolute;left:0;right:0;top:0;height:44px;display:flex;align-items:center;gap:8px;padding:0 16px;background:#fff;border-bottom:1px solid var(--line)}
.pbar .sp{flex:1}
.pbar .moves{font-weight:600}
.pbar .dot{color:var(--ink4)}
.pbar .iss{display:inline-flex;align-items:center;gap:6px;color:#9a5418;background:#fbf1e6;border-radius:6px;padding:4px 9px;box-shadow:0 0 0 1px #ecc9a5}
.issues{position:absolute;right:96px;top:48px;width:330px;z-index:8;background:#fff;border:1px solid var(--line);border-radius:10px;box-shadow:0 10px 30px rgba(0,0,0,.14);padding:6px}
.issues .ih{font:600 10.5px var(--ui);letter-spacing:.08em;text-transform:uppercase;color:var(--ink3);padding:5px 8px 4px}
.issues .ir{display:flex;gap:9px;align-items:flex-start;padding:6px 8px;border-radius:6px;background:#fdf6ef;line-height:1.4;font-size:12.5px}
.issues .ir svg{flex:none;margin-top:2px}
.issues small{display:block;color:var(--ink3);font-size:11.5px;margin-top:2px}
.part{position:absolute;top:122px;height:18px;font:600 10.5px/18px var(--ui);letter-spacing:.08em;text-transform:uppercase;color:var(--ink3);border-bottom:2px solid #d8d8d4;white-space:nowrap;overflow:hidden;padding-left:2px}
.lane{position:absolute;top:150px;width:${LW}px;height:540px;border-radius:10px;padding:0 8px;background:rgba(0,0,0,.025)}
.lane.lit{background:var(--accent-tint);box-shadow:inset 0 0 0 1.5px var(--accent)}
.lh{height:38px;display:flex;align-items:center;gap:6px;font-weight:600;padding:0 2px;white-space:nowrap}
.lh .grip{color:var(--ink4);font-size:11px;letter-spacing:-2px;font-weight:400;margin-right:2px}
.lh .ln{color:var(--ink3);font-weight:500}
.lh .lt{overflow:hidden;text-overflow:ellipsis;min-width:0}
.lh small{font-weight:400;color:var(--ink3);font-size:11.5px;margin-left:auto;flex:none}
.lane.gray .lh{color:var(--ink3)}
.lane.gray .lh .lt{color:var(--ink2)}
.lane.gray .pcard{background:#fafaf9}
.lane.gray .pcard .pt{color:var(--ink2)}
.pcard{position:relative;height:72px;margin-bottom:10px;background:#fff;border:1px solid var(--line);border-radius:9px;padding:8px 10px 8px 18px}
.pcard i{position:absolute;left:7px;top:9px;bottom:9px;width:4px;border-radius:2px}
.pcard .pn{font-size:11px;color:var(--ink3)}
.pcard .pt{font:14px/1.3 var(--text);margin-top:1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.pcard .pl{font-size:11px;color:var(--ink3);margin-top:4px}
.pcard.sel{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-tint)}
.pcard.ghost{border:1.5px dashed var(--ink4);background:none}
.pcard.drag{position:absolute;width:${LW - 16}px;margin:0;z-index:5;transform:rotate(-2deg);box-shadow:0 0 0 3px var(--accent-tint),0 14px 30px rgba(0,0,0,.18)}
.dropline{height:3px;border-radius:2px;background:var(--accent);margin:-4px 0 8px}
.ptr{position:absolute;z-index:7}
.warn{position:absolute;z-index:6;display:flex;align-items:flex-start;gap:8px;width:300px;background:#fff;border:1px solid #e8c6a6;border-radius:9px;padding:9px 12px;font-size:12.5px;line-height:1.4;color:var(--ink);box-shadow:0 10px 30px rgba(0,0,0,.13)}
.warn svg{flex:none;margin-top:2px}
.warn small{display:block;color:var(--ink3);font-size:11.5px}
.hscroll{position:absolute;left:12px;right:12px;bottom:46px;height:7px;border-radius:4px;background:rgba(0,0,0,.06)}
.hscroll i{position:absolute;top:0;bottom:0;left:58%;width:34%;border-radius:4px;background:rgba(0,0,0,.24)}
.legend{position:absolute;left:16px;bottom:14px;display:flex;align-items:center;gap:8px;color:var(--ink2)}
.legend .sep{color:var(--ink4)}
.legend .lg{display:inline-flex;align-items:center;gap:6px;color:var(--ink)}
.legend .lg i{width:10px;height:10px;border-radius:50%}
/* the scene in the Reference panel: every field editable; the kind label gives its room to the scene's name */
.refhead .kind{display:none}
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
.scn .nc{margin-top:16px}
.scn .nc .btn{width:100%;justify-content:center}
.scn .nc small{display:block;color:var(--ink3);font-size:11.5px;margin-top:5px;text-align:center}
</style>`;

const scene = `<div class="scn">`
  + `<div class="fl">The line</div><div class="ed txt">Vega reads Kit’s ledger by the stove and finds her own name in it.</div>`
  + `<div class="fl">Who · where</div><div class="chips"><span>Vega</span><span>Kit</span><span>The back room</span><span class="add">+</span></div>`
  + `<div class="fl">Relies on</div>`
  + `<div class="rel">${WARN}<span>Kit finds the ledger <span class="lk">(11.2)</span></span></div>`
  + `<div class="rel"><span class="ok">✓</span><span>The ledger is green <span class="lk">(ch. 5)</span></span></div>`
  + `<div class="rel"><span class="ok">✓</span><span>Lena keeps the back-room key <span class="lk">(ch. 6)</span></span></div>`
  + `<div class="fl">Labels</div><dl>`
  + `<dt>Point of view</dt><dd><span class="v">Vega</span><small>from the Codex</small></dd>`
  + `<dt>Place</dt><dd><span class="v">The back room</span><small>from the Codex</small></dd>`
  + `<dt>Status</dt><dd><span class="v dd">Draft</span></dd>`
  + `<dt>Storyline</dt><dd><span class="v dd">The ledger</span></dd>`
  + `<dt>Timeline</dt><dd><span class="v dd">Day 6, night</span></dd>`
  + `<dt>My label</dt><dd><span class="v dd">Rewrite</span></dd></dl>`
  + `<div class="fl">Words</div><div style="font-size:12.5px">1,140 · about 4 pages</div>`
  + `<div class="nc"><span class="btn">+ New card</span><small>A scene that does not exist yet; it lands in Unplaced</small></div>`
  + `</div>`;

const colorMenu = `<div class="below"><div class="crop" style="width:300px"><div class="lbl">The Color by menu</div>`
  + `<div class="menu" style="position:static;box-shadow:none;border:0;border-radius:0;padding:6px 8px">`
  + ['Point of view', 'Status', 'Storyline', 'Timeline', 'My labels'].map((t, i) => `<div class="mi${i === 0 ? ' hov' : ''}"><span style="width:14px;flex:none;text-align:center">${i === 0 ? '✓' : ''}</span><span>${t}</span></div>`).join('')
  + `</div></div></div>`;

const html = css + L.win({
  mode: 'Plan',
  crumbs: false,
  right: L.reference({ kind: 'Scene', name: 'Vega reads the ledger', open: 'Open ↗', body: scene }),
  page: '',
  content: board,
  status: { style: false, view: false, words: '86,240 words', pages: '11 chapters · 23 scenes' },
  ask: 'normal',
  extra: L.ann(1, 'Moves collect at the top right; Issues lists the warnings so you read them once before Apply; nothing changes in the text until then', 300, 76, { w: 300 })
    + L.ann(2, 'Parts are a thin band above their chapters', 20, 160)
    + L.ann(3, 'The lane under the pointer lights up; before the drop, what the move would break', 260, 640, { w: 210 })
    + L.ann(4, 'Unplaced (not printed, not counted) and Discarded close the shelf; both are gray rows at the end of the chapter list in Write', 740, 640, { w: 260 })
    + L.ann(5, 'One lane per chapter, side by side: a long book is a long shelf that scrolls sideways', 520, 770, { w: 300 })
    + L.ann(6, 'The selected card’s scene, all editable; Point of view and Place fill themselves from the Codex', 1110, 690, { w: 270 }),
}) + colorMenu;

module.exports = {
  id: 'S16',
  file: 's16-plan',
  title: 'Plan',
  width: 1440,
  height: 900,
  html,
  caption: L.caption({
    id: 'S16', title: 'Plan',
    scene: 'The end of the shelf: chapter 9 of Part One, chapters 10 and 11 of Part Two, then Unplaced and Discarded. The writer drags “Vega reads the ledger” out of chapter 11 into chapter 10; the lane under the pointer lights up and, before the drop, the continuity warning shows. Two earlier moves are waiting at the top right with one issue, its list open. The dragged card is the selected one, and the Reference panel shows its scene.',
    on: 'no breadcrumb, the left column closed; at the top right “3 moves · 1 issue ▾ · Apply · Discard” with the Issues popover (one warning); the part bands; five lanes (9, 10 lit, 11 with the ghost the card left, Unplaced and Discarded with gray headers, the last cut by the edge) and a horizontal scrollbar; cards with a color bar; the dragged card, the pointer, the drop line and the warning; the Reference panel with the scene (line, who and where, relies on, labels, words) and + New card; the legend “Color by: Point of view”; the Ask button; under the window, the Color by menu',
    off: 'the text, the chapter list, the view item in the status bar, Write’s gray Unplaced and Discarded rows, the “leave with moves pending” question',
  }),
};
