// S24: Board view (draft 8; from draft 7's S16 and S35). One row per chapter, parts as thin bands, the Navigator open on
// Book (clicking a chapter scrolls the board). Moves are immediate: no Apply/Discard; a notice says what moved and what
// it may break, with Undo and Add to Review. The side panel shows the selected scene.
const L = require('../lib');

const POV = { Vega: '#7d5bbf', Kit: '#4f8a8b', Lena: '#b5577e' };
const ST = { draft: 'Draft', working: 'Working', done: 'Done' };
const HX = 14, HW = 150, CW = 178, CG = 10;
const cx = (i) => HX + HW + i * (CW + CG);
const RH = 92;

const WARN = `<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#b5651d" stroke-width="1.6" stroke-linejoin="round"><path d="M8 2 14.5 13.5h-13z"/><path d="M8 6.5v3.2M8 11.6v.1" stroke-linecap="round"/></svg>`;
const card = (c, i) => `<div class="pcard${c.sel ? ' sel' : ''}${c.moved ? ' moved' : ''}" style="left:${cx(i)}px"><i style="background:${POV[c.pov]}"></i>`
  + `<div class="pt"><span class="pn">${c.n}</span>${c.t}</div><div class="pl">${c.pov} · ${c.place}</div>`
  + `<div class="pb"><span class="st ${c.st || 'draft'}"></span>${ST[c.st || 'draft']}${c.line ? `<span class="sl">${c.line}</span>` : ''}${c.warn ? `<span class="wf">${WARN}</span>` : ''}${c.moved ? '<span class="mv">moved</span>' : ''}</div></div>`;
const row = (y, num, title, sub, cards, o = {}) => `<div class="prow${o.gray ? ' gray' : ''}${o.cur ? ' curr' : ''}" style="top:${y}px">`
  + `<div class="rh"><span class="grip">⋮⋮</span>${num ? `<span class="ln">${num}</span>` : ''}<span class="lt">${title}</span><small>${sub}</small></div>`
  + cards.map(card).join('') + (o.scroll ? `<div class="rscroll"><i></i></div>` : '') + `</div>`;

const Y8 = 50, Y9 = Y8 + RH, YP = Y9 + RH, Y10 = YP + 24, Y11 = Y10 + RH, YS = Y11 + RH + 4, YU = YS + 8, YD = YU + RH;

const board = `<div class="board">`
  + `<div class="pbar"><span class="btn">+ New card</span><span class="btn dd">Color by: Point of view</span></div>`
  + row(Y8, 8, 'Closing time', '5 scenes', [
    { n: '8.1', t: 'Lena counts the till', pov: 'Lena', place: 'The Blue Lamp', st: 'done' },
    { n: '8.2', t: 'Vega waits across the street', pov: 'Vega', place: 'Harbor Street', st: 'done', line: 'The ledger' },
    { n: '8.3', t: 'A light in the back room', pov: 'Vega', place: 'Harbor Street', st: 'working', line: 'The ledger' },
    { n: '8.4', t: 'Kit runs', pov: 'Kit', place: 'Harbor Street', st: 'draft' },
    { n: '8.5', t: 'A green Fiat outside', pov: 'Lena', place: 'Harbor Street', st: 'draft' },
  ], { scroll: true })
  + row(Y9, 9, 'The pawnshop', '2 scenes', [
    { n: '9.1', t: 'Under the pawnshop awning', pov: 'Vega', place: 'Harbor Street', st: 'working' },
    { n: '9.2', t: 'The pawnbroker remembers Kit', pov: 'Vega', place: 'The pawnshop', st: 'draft', line: 'The ledger' },
  ])
  + `<div class="bpart" style="top:${YP}px">Part Two · Spring</div>`
  + row(Y10, 10, 'Station steps', '3 scenes', [
    { n: '10.1', t: 'Kit waits on the station steps', pov: 'Kit', place: 'The station steps', st: 'done' },
    { n: '10.2', t: 'The confession', pov: 'Kit', place: 'The back room', st: 'working', line: 'The ledger', warn: true },
    { n: '10.3', t: 'Lena unlocks the back room', pov: 'Lena', place: 'The Blue Lamp', st: 'draft', moved: true, sel: true },
  ], { cur: true })
  + row(Y11, 11, 'The back room, finally', '3 scenes', [
    { n: '11.1', t: 'Kit finds the ledger', pov: 'Kit', place: 'The back room', st: 'draft', line: 'The ledger' },
    { n: '11.2', t: 'Kit burns a page', pov: 'Kit', place: 'The back room', st: 'draft', line: 'The ledger' },
    { n: '11.3', t: 'Vega and Lena, at closing', pov: 'Vega', place: 'The Blue Lamp', st: 'draft' },
  ])
  + `<div class="hr" style="top:${YS}px"></div>`
  + row(YU, '', 'Unplaced', 'not printed · 2', [
    { n: '—', t: 'Lena asks about the ledger', pov: 'Vega', place: 'The Blue Lamp', st: 'draft' },
    { n: '—', t: 'Kit’s sister visits', pov: 'Kit', place: 'The Blue Lamp', st: 'draft' },
  ], { gray: true })
  + row(YD, '', 'Discarded', 'kept · 3', [
    { n: '—', t: 'The dream about the harbor', pov: 'Vega', place: 'Harbor Street', st: 'draft' },
    { n: '—', t: 'The pawnshop awning, at night', pov: 'Vega', place: 'Harbor Street', st: 'draft' },
    { n: '—', t: 'A second ending', pov: 'Kit', place: 'The station steps', st: 'draft' },
  ], { gray: true })
  + `<div class="legend">Color by: <span class="dd">Point of view</span><span class="sep">·</span>`
  + Object.entries(POV).map(([k, v]) => `<span class="lg"><i style="background:${v}"></i>${k}</span>`).join('<span class="sep">·</span>')
  + `<span class="sep" style="margin-left:14px">|</span><span class="lg"><span class="st draft"></span>Draft</span><span class="lg"><span class="st working"></span>Working</span><span class="lg"><span class="st done"></span>Done</span>`
  + `</div><div class="vscroll"><i></i></div>`
  + L.notice(`Moved “Lena unlocks the back room” to ch. 10 <span class="nsub">Kit is inside the back room in 10.2 before Lena unlocks it</span>`, { kind: 'info', style: 'left:50%;bottom:50px;max-width:640px', acts: '<span class="lk">Add to Review</span>' })
  + `</div>`;

const scene = `<div class="scn">`
  + `<div class="fl">The line</div><div class="ed txt">Lena unlocks the back room for Kit, then pretends she never did.</div>`
  + `<div class="fl">Who · where</div><div class="chips"><span>Lena</span><span>Kit</span><span>The Blue Lamp</span><span class="add">+</span></div>`
  + `<div class="fl">Heads up</div><div class="rel">${WARN}<span>Kit is inside the back room in <span class="lk">10.2</span> before this scene</span></div>`
  + `<div class="fl">Words</div><div style="font-size:12.5px">1,140 · about 4 pages</div>`
  + `<div class="fl">Labels</div><dl>`
  + `<dt>Status</dt><dd><span class="v dd">Draft</span></dd>`
  + `<dt>Storyline</dt><dd><span class="v dd">The ledger</span></dd>`
  + `<dt>Point of view</dt><dd><span class="v">Lena</span><small>from the Codex</small></dd>`
  + `<dt>My label</dt><dd><span class="v dd">Rewrite</span></dd></dl></div>`;

const navRows = [
  { type: 'group', title: 'Front', open: false },
  { type: 'part', title: 'Part One: Winter in the Harbor District' },
  ...[['Rain on the glass'], ['The bartender'], ['A note under the office door'], ['Quarter past three'], ['Kit’s ledger'], ['The back room'], ['Lena’s warning'], ['Closing time'], ['The pawnshop']].map(([t], i) => ({ type: 'chapter', n: i + 1, title: t })),
  { type: 'part', title: 'Part Two: Spring' },
  { type: 'chapter', n: 10, title: 'Station steps', cur: true, hov: true },
  { type: 'chapter', n: 11, title: 'The back room, finally' },
  { type: 'pinned', title: 'Unplaced', count: '2' },
  { type: 'pinned', title: 'Discarded', count: '3' },
];
const css = `<style>
.board{position:absolute;left:320px;top:0;bottom:0;right:320px;z-index:1;background:var(--soft);font:13px var(--ui);color:var(--ink);overflow:hidden}
.pbar{position:absolute;left:0;right:0;top:0;height:44px;display:flex;align-items:center;gap:8px;padding:0 16px;background:#fff;border-bottom:1px solid var(--line);z-index:7}
.pbar .sp{flex:1}
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
.bpart{position:absolute;left:0;right:0;height:18px;font:600 10.5px/18px var(--ui);letter-spacing:.08em;text-transform:uppercase;color:var(--ink3);padding-left:${HX + 4}px;background:#e9e9e6;border-top:1px solid #d8d8d4;border-bottom:1px solid #d8d8d4}
.prow{position:absolute;left:0;right:0;height:${RH}px}
.prow.curr .rh .lt{color:var(--accent)}
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
.pcard .wf{margin-left:auto;display:inline-flex}
.pcard .wf+.mv{margin-left:6px}
.notice .nsub{display:block;color:var(--ink3);font-size:12px;margin-top:1px}
.notice .ntx{white-space:normal}
.s24 .notice{white-space:normal;min-width:600px}
.notice .lk{white-space:nowrap}
.s24 .navbody{display:block}
.s24 .navbody>*{flex:none}
</style>`;
const html = css + L.win({
  view: 'Board',
  crumbs: 'Book',
  left: L.navigator({ rows: navRows, section: 'Book', placeholder: 'Filter chapters' }),
  right: L.reference({ kind: 'Scene', name: 'Lena unlocks the back room', open: 'Open in text', body: scene }),
  page: '',
  content: board,
  strip: { review: 12 },
  status: { style: false, view: false, words: '86,240 words', goal: 60, pages: '11 chapters · 31 scenes' },
  ask: 'normal',
  extra: L.ann(1, 'The Navigator stays on Book: click a chapter and the board scrolls to its row', 20, 712, { w: 270 })
    + L.ann(2, 'Parts are thin bands between rows; a long chapter scrolls sideways in its own row', 846, 238, { w: 240 })
    + L.ann(3, 'The move happened at once. The notice says what moved and what it may break: Undo while it is the latest step, Revert after', 846, 530, { w: 250 })
    + L.ann(4, 'Unplaced (not printed) and Discarded (kept) come last, in the Navigator and on the board, gray', 24, 628, { w: 270 })
    + L.ann(5, 'Only two controls: a new card, and what the color means', 700, 104, { w: 330 })
    + L.ann(6, 'The selected scene: line, who, where, status, words, labels; who and where fill from the Codex', 1040, 650, { w: 260 }),
});

module.exports = {
  id: 'S24',
  file: 's24-board',
  title: 'Board view',
  width: 1440,
  height: 900,
  html: html.replace('<div class="win"', '<div class="win s24"'),
  caption: L.caption({
    id: 'S24', title: 'Board view',
    scene: 'The Board view of the manuscript, one row per chapter with the parts as bands. The writer dragged “Lena unlocks the back room” from chapter 11 into chapter 10; the move is already done, with no Apply or Discard, and a notice says what moved and why it may be a problem (Kit is inside the back room in 10.2 before Lena unlocks it), with Undo and Add to Review. The Navigator is open on Book; the moved card is selected and the side panel shows its scene.',
    on: 'the strip with the view switch on Board and Review 12; the Navigator (Book · Codex · Research, chapters with Part Two current, Unplaced 2 and Discarded 3 pinned); the toolbar (+ New card, Color by: Point of view ▾); rows 8 to 11 with the Part Two band, the warning flag on 10.2, the moved card, selected and marked “moved”, Unplaced and Discarded rows in gray, the legend; the notice (Undo, Add to Review, ✕); the side panel with the scene’s line, who and where, a heads-up, words and labels; the Ask button',
    off: 'Apply and Discard, a count of pending moves, the text, a mode switch',
  }),
};
