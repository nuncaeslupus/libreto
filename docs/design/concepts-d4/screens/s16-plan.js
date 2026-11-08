// S16: Plan. The book as cards in chapter groups; a drag with its warning, moves collected in a bar, one card's detail open.
const L = require('../lib');

const POV = { Vega: '#3b6ea8', Kit: '#2f8a66', Lena: '#b8860b' };

// card({n, t, pov, place, cur, ghost})
const card = (c) => {
  if (c.ghost) return `<div class="pcard ghost"></div>`;
  return `<div class="pcard${c.cur ? ' cur' : ''}"><i style="background:${POV[c.pov]}"></i>`
    + `<div class="pn">${c.n}</div><div class="pt">${c.t}</div><div class="pl">${c.pov} · ${c.place}</div></div>`;
};
const group = (x, title, sub, cards) => `<div class="pgroup" style="left:${x}px">`
  + `<div class="pgh"><span>${title}</span><small>${sub}</small></div>${cards.map(card).join('')}</div>`;

const COLS = { 6: 40, 7: 290, 8: 540, U: 790 };
const CW = 230;

const board = `<div class="board">`
  // the bar of moves
  + `<div class="pbar"><span class="moves">3 moves</span><span class="btn pri">Apply</span><span class="btn">Discard</span>`
  + `<span class="sp"></span><span class="switch off"></span><span class="swl">Details</span><span class="chip dd" style="margin-left:14px">Color by</span></div>`
  // the part header spans the chapter groups
  + `<div class="part" style="left:${COLS[6]}px;width:${COLS[8] + CW - COLS[6]}px">Part One · Winter</div>`
  + group(COLS[6], '6 The back room', '3 scenes', [
    { n: '6.1', t: 'The locked door behind the bar', pov: 'Vega', place: 'The Blue Lamp' },
    { n: '6.2', t: 'A man asks for the back room', pov: 'Lena', place: 'The Blue Lamp' },
    { n: '6.3', t: 'Kit waits by the till', pov: 'Kit', place: 'The Blue Lamp' },
  ])
  + group(COLS[7], '7 Lena’s warning', '3 scenes', [
    { n: '7.1', t: 'Vega asks about Kit', pov: 'Vega', place: 'The Blue Lamp' },
    { n: '7.2', t: 'Lena lies about the back room', pov: 'Vega', place: 'The Blue Lamp' },
    { n: '7.3', t: 'Vega leaves without paying', pov: 'Vega', place: 'Harbor Street' },
  ])
  + group(COLS[8], '8 Closing time', '3 scenes', [
    { n: '8.1', t: 'Lena locks the back room', pov: 'Lena', place: 'The Blue Lamp' },
    { n: '8.2', t: 'Kit finds the ledger', pov: 'Kit', place: 'The back room' },
    { ghost: true },
  ])
  + group(COLS.U, 'Unplaced', '2 scenes', [
    { n: '—', t: 'Lena asks about the ledger', pov: 'Vega', place: 'The Blue Lamp', cur: true },
    { n: '—', t: 'The pawnshop awning', pov: 'Vega', place: 'The pawnshop' },
  ])
  // the drop line at the end of chapter 7, the dragged card and its warning
  + `<div class="dropline" style="left:${COLS[7]}px;top:366px;width:${CW}px"></div>`
  + `<div class="pcard drag" style="left:${COLS[7] + 8}px;top:376px"><i style="background:${POV.Vega}"></i><div class="pn">8.3</div><div class="pt">Vega reads the ledger</div><div class="pl">Vega · The back room</div></div>`
  + `<div class="warn" style="left:${COLS[7]}px;top:468px">`
  + `<svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="#b5651d" stroke-width="1.5" stroke-linejoin="round"><path d="M8 2 14.5 13.5h-13z"/><path d="M8 6.5v3.2M8 11.6v.1" stroke-linecap="round"/></svg>`
  + `<span>Vega reads the ledger before Kit finds it (ch. 7 → ch. 8)</span></div>`
  // the detail of the clicked card
  + `<div class="detail" style="left:1040px;top:122px"><div class="dt">Lena asks about the ledger</div>`
  + `<div class="dr"><span class="lk">Vega</span>, <span class="lk">Lena</span> · <span class="lk">The Blue Lamp</span></div>`
  + `<div class="dr"><span class="dk">Relies on</span> Kit’s ledger exists <span class="lk">(ch. 5)</span></div>`
  + `<div class="dr"><span class="dk">Words</span> 412</div></div>`
  // the legend
  + `<div class="legend">Color by: <span class="dd">Point of view</span><span class="sep">·</span>`
  + Object.entries(POV).map(([k, v]) => `<span class="lg"><i style="background:${v}"></i>${k}</span>`).join('<span class="sep">·</span>')
  + `</div></div>`;

const css = `<style>
.board{position:absolute;inset:0;z-index:1;background:var(--soft);font:13px var(--ui);color:var(--ink)}
.pbar{position:absolute;left:0;right:0;top:0;height:44px;display:flex;align-items:center;gap:8px;padding:0 24px 0 40px;background:#fff;border-bottom:1px solid var(--line)}
.pbar .moves{font-weight:600;margin-right:6px}
.pbar .sp{flex:1}
.pbar .swl{color:var(--ink2)}
.pbar .chip{font-size:12.5px;padding:3px 10px}
.part{position:absolute;top:60px;font:600 10.5px var(--ui);letter-spacing:.08em;text-transform:uppercase;color:var(--ink3);padding-bottom:4px;border-bottom:1px solid var(--line)}
.pgroup{position:absolute;top:86px;width:${CW}px}
.pgh{height:28px;display:flex;align-items:baseline;gap:8px;font-weight:600;padding:0 2px}
.pgh small{font-weight:400;color:var(--ink3);font-size:11.5px}
.pcard{position:relative;width:${CW}px;height:72px;margin-top:10px;background:#fff;border:1px solid var(--line);border-radius:9px;padding:8px 12px 8px 18px}
.pcard i{position:absolute;left:7px;top:9px;bottom:9px;width:4px;border-radius:2px}
.pcard .pn{font-size:11px;color:var(--ink3)}
.pcard .pt{font:14px/1.3 var(--text);margin-top:1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.pcard .pl{font-size:11px;color:var(--ink3);margin-top:4px}
.pcard.cur{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-tint)}
.pcard.ghost{border:1.5px dashed var(--ink4);background:none}
.pcard.drag{position:absolute;margin:0;z-index:5;transform:rotate(-2deg);box-shadow:0 14px 30px rgba(0,0,0,.18);border-color:#b5651d}
.dropline{position:absolute;height:3px;border-radius:2px;background:var(--accent)}
.warn{position:absolute;z-index:6;display:flex;align-items:center;gap:8px;width:420px;background:#fff;border:1px solid #e8c6a6;border-radius:9px;padding:9px 12px;font-size:12.5px;line-height:1.4;color:var(--ink);box-shadow:0 10px 30px rgba(0,0,0,.13)}
.detail{position:absolute;width:320px;background:#fff;border:1px solid var(--line);border-radius:10px;padding:12px 14px;box-shadow:0 10px 30px rgba(0,0,0,.12);font-size:13px;line-height:1.5}
.detail .dt{font:15px/1.3 var(--text);margin-bottom:6px}
.detail .dr{color:var(--ink2);margin-top:2px}
.detail .dk{display:inline-block;width:62px;color:var(--ink3)}
.legend{position:absolute;left:40px;bottom:14px;display:flex;align-items:center;gap:8px;color:var(--ink2)}
.legend .sep{color:var(--ink4)}
.legend .lg{display:inline-flex;align-items:center;gap:6px;color:var(--ink)}
.legend .lg i{width:10px;height:10px;border-radius:50%}
</style>`;

const colorMenu = `<div class="below"><div class="crop" style="width:300px"><div class="lbl">The Color by menu</div>`
  + `<div class="menu" style="position:static;box-shadow:none;border:0;border-radius:0;padding:6px 8px">`
  + ['Point of view', 'Status', 'Storyline', 'Timeline', 'My labels'].map((t, i) => `<div class="mi${i === 0 ? ' hov' : ''}"><span style="width:14px;flex:none;text-align:center">${i === 0 ? '✓' : ''}</span><span>${t}</span></div>`).join('')
  + `</div></div></div>`;

const html = css + L.win({
  mode: 'Plan',
  crumbs: L.sample.crumbs7,
  page: '',
  content: board,
  status: { style: false, view: false, words: '86,240 words', pages: '11 chapters · 23 scenes', fixes: '3 fixes' },
  ask: 'normal',
  extra: L.ann(1, 'Moves collect here; nothing changes in the text until Apply', 300, 100, { w: 260 })
    + L.ann(2, 'Before the drop: what the move would break, from the index', 730, 568, { w: 250 })
    + L.ann(3, 'Unplaced never deletes: scenes from a removed group wait here and show at the end of the chapter list in Write', 790, 390, { w: 230 })
    + L.ann(4, 'Every card carries labels; Color by chooses which one paints the bar at the left', 440, 826, { w: 300 })
    + L.ann(5, 'A click opens the detail beside the card', 1040, 370, { w: 220 })
    + L.ann(6, 'Details shows a second line on every card', 1010, 136, { w: 200 }),
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
    scene: 'The book as cards, one per scene, in chapter groups under Part One. The writer drags “Vega reads the ledger” from chapter 8 to the end of chapter 7 and, before dropping, sees the continuity warning. Two earlier moves are already waiting in the bar; an unplaced card is clicked and its detail is open beside it.',
    on: 'the bar “3 moves · Apply · Discard”, the Details toggle and Color by, the part header, four groups (6, 7, 8, Unplaced), cards with a color bar and labels, a dragged card with its drop line and the warning, the ghost it left in chapter 8, the clicked card with its detail (scene line, people and place, relies on, words), the legend “Color by: Point of view”, the Ask button; under the window, the Color by menu',
    off: 'the chapter list, the Reference panel, the text, group templates, a Search &amp; ask box',
  }),
};
