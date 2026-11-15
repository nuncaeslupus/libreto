// S34: Review all. The margin becomes a walk: one card at a time, level with its line, the text scrolled to it,
// a line at the top that says where the walk is; the keys sit inside the buttons.
const L = require('../lib');
const I = L.icons;

const CT = 92; // top of the content area in window coordinates (title bar 30 + menu bar 26 + strip 36)

const extraCss = `<style>
.page{clip-path:inset(0 -420px)}
/* left column: four kinds of counts and the two toggle rows */
.nrow .cnt .k-unk{color:var(--spell)}
.navrev{gap:6px;padding:2px 10px 10px;border-bottom:1px solid var(--line2);margin-bottom:6px}
.u-note{border-bottom:2px dotted var(--note);padding-bottom:1px}
.navrev .kf{flex-wrap:nowrap;gap:0}
.kf span{display:inline-flex;align-items:center;gap:4px;font-size:12px;padding:2px 6px;white-space:nowrap}
.kf svg{width:12px;height:12px}
.kf .k-note svg{color:var(--note)}.kf .k-task svg{color:var(--task)}.kf .k-fix svg{color:var(--fix)}.kf .k-unk svg{color:var(--spell)}
.navfoot{display:flex;gap:6px;align-items:center}
.navfoot .btn{flex:1}
.navfoot .ib.on{background:#e6e6e3;box-shadow:none;color:var(--ink)}
/* the margin: 320 px, its own scrollbar, cards level with their lines */
.mrg{position:absolute;left:calc(100% + 90px);top:0;width:320px;height:779px;background:var(--soft);border-left:1px solid var(--line);text-indent:0;font:12.5px/1.4 var(--ui);z-index:3}
.mrg .mtop{position:absolute;left:12px;right:20px;top:10px;display:flex;align-items:center;gap:8px;color:var(--ink3);font-size:12px}
.mrg .mtop .sp{flex:1}
.mrg .sbar{position:absolute;right:3px;top:6px;bottom:6px;width:6px;border-radius:3px;background:rgba(0,0,0,.05)}
.mrg .sbar i{position:absolute;left:0;right:0;top:0;height:310px;border-radius:3px;background:rgba(0,0,0,.2)}
.mrg .mc{left:12px;width:290px;box-shadow:0 1px 3px rgba(0,0,0,.05);z-index:5;padding:7px 10px 7px}
.mrg .mc .mc-s{color:var(--ink2);font-weight:500}
.mrg .mc.q{color:var(--ink2)}
.mrg .mc.q .mc-b{border-color:var(--line);color:var(--ink2)}
.mrg .mc.sel{border-color:var(--task);box-shadow:0 0 0 3px var(--task-tint),0 6px 18px rgba(0,0,0,.08);z-index:6}
.mrg .mc-a{gap:5px;flex-wrap:wrap}
.mrg .mc-b{padding:2px 7px}
.mrg .mc-b i svg{width:12px;height:12px;display:block}
.mrg .mc-ba{margin:0 0 5px}
.mrg .mc-x{margin:0 0 5px}
.mrg .mc-x .was{background:var(--red-tint);border-radius:2px}.mrg .mc-x .now{background:var(--fix-tint);border-radius:2px}
.mline{position:absolute;height:1.5px;background:var(--task);z-index:4}
.gcnt{font:600 10px var(--ui);color:var(--task);margin-left:2px}
.tf{background:rgba(0,0,0,.045);border-radius:2px}
.gms.dim{opacity:.35}
.mrg .walk{position:absolute;left:12px;right:20px;top:12px}
.mrg .walk .wl{display:flex;align-items:center;gap:7px;font-size:14px;color:var(--ink)}
.mrg .walk .stop{padding:2px 10px;font-size:12px}
.mrg .inset .il{font-size:11px;color:var(--ink3);margin-bottom:6px}
.mrg .inset .sum{font-size:12.5px;color:var(--ink);display:flex;gap:4px;align-items:baseline}.mrg .inset .sum .lk{margin-left:auto}
.mrg .mc.sel .mc-a{gap:4px}.mrg .mc.sel .mc-b{padding:2px 6px;gap:4px}
.mrg .walk .wl b{font-weight:600}
.mrg .walk .wl .sp{flex:1}
.mrg .walk .wl small{color:var(--ink3);font-size:11.5px}
.mrg .walk .pb{height:3px;border-radius:2px;background:var(--line);margin-top:8px;position:relative}
.mrg .walk .pb i{position:absolute;left:0;top:0;bottom:0;width:33.3%;border-radius:2px;background:var(--task)}
.mrg .mc.sel .mc-b kbd{font-size:10.5px;padding:0 4px}
.mrg .db{display:block;font-size:11.5px;color:var(--accent);margin-top:6px}
.mrg .db span{color:var(--ink3)}
.mrg .inset{position:absolute;left:12px;width:290px;border:1px dashed var(--ink4);border-radius:9px;padding:8px 10px 9px;color:var(--ink2);font-size:11.5px;background:rgba(255,255,255,.5)}
.mrg .inset .mc-a{border-top:0;padding-top:4px}
.ts{background:rgba(47,111,179,.2);border-radius:2px}
</style>`;

// ---- the text (the end of chapter 7), underlines on ----
const col0 = `<p style="margin-top:-12px">her hands. “Go home. Don’t come back to the Blue Lamp tomorrow. And don’t ask Kit what he saw.”</p>`
  + `<div class="srule"></div>`
  + `<p class="first">Outside, the rain had turned to <span class="u-spell" data-m="unk">mizzle</span>, the fine kind that does not fall so much as hang. Vega walked the long way around, past the station steps, because it was the way Kit always walked.</p>`
  + `<p>She had asked him once, on the <span class="u-gram ts" data-m="sel">station steps</span>, whether he would ever lie to her.</p>`
  + `<p>Kit said no.</p>`
  + `<p>He said it too fast, the way people answer a question they have rehearsed on the walk over, and she had let it go because it was late and she wanted to believe him.</p>`
  + `<p>At the corner of Harbor Street she stopped under <span class="u-note" data-m="you">the awning of the pawnshop</span> and counted the windows above the Blue Lamp. Three dark, one lit. The lit one was the back room.</p>`
  + `<p>She did not go back in. She stood there long enough for the light to go out, and then a little longer, in case it came on again.</p>`
  + `<div class="srule"></div>`
  + `<p class="first">The ledger was where Kit had said it would be, under the loose board by the stove, wrapped in a dish towel that smelled of lemons.</p>`;

// window y of the top of each marked line (measured from the rendered page)
const Y = { unk: 196, sel: 289, you: 413 };
const badgeTop = (y) => y - CT + 7.5;                  // a 16 px badge centered on a 31 px line, col coordinates
const badge = (kind, y, o = {}) => `<span class="gms${o.sel ? '' : ' dim'}" style="top:${badgeTop(y)}px"><span class="gm ${kind}${o.sel ? ' sel' : ''}">${I[kind === 'done' ? 'fix' : kind]}</span></span>`;
const gutterHtml = badge('unknown', Y.unk) + badge('pending', Y.sel, { sel: true }) + badge('note', Y.you)
  + `<span class="mline" style="left:calc(100% + 34px);width:56px;top:${badgeTop(Y.sel) + 7.5}px"></span>`;

// ---- the walk: one card, level with its line; the keys are inside the buttons ----
const card = L.markCard({ kind: 'pending', title: 'Pending · repeated words', who: 'ai', x: 12, y: Y.sel - 6 - CT,
  before: 'on the <span class="was">station<span class="ws">·</span></span>steps', after: 'on the steps',
  text: '“The station steps” is in the line above too.<span class="db" data-m="db">Don’t bother me <span>· no more “repeated words” in this project</span></span>',
  acts: [['✓', 'Apply', 'Enter'], ['✗', 'Dismiss', 'Delete'], ['✎', 'Edit', ''], ['→', 'Skip for now', 'Tab']] })
  .replace('class="mc ', 'data-m="card" class="mc sel ');
// what the margin says at the end of the walk, and when you come back to a paused one
const insets = `<div class="inset" style="top:${600 - CT}px" data-m="end"><div class="il">At the end of the walk</div>`
  + `<div class="sum"><b>9</b> applied · <b>2</b> dismissed · <b>1</b> skipped<span class="lk">Undo all</span></div></div>`
  + `<div class="inset" style="top:${680 - CT}px" data-m="cont"><div class="il">Coming back to Review after leaving mid-walk</div>`
  + `<span class="btn pri">Continue · 4 / 12</span></div>`;
const margin = `<div class="mrg"><div class="walk" data-m="walk"><div class="wl"><b>4 / 12</b>${L.who('ai')}<span class="sp"></span><span class="btn stop">■ Stop</span></div><div class="pb"><i></i></div></div>`
  + card + insets + `<div class="sbar"><i style="top:300px;height:120px"></i></div></div>`;

const col = margin + col0 + gutterHtml;

// ---- the left column: chapters with counts of the four kinds, the two toggle rows ----
const K = { note: ['k-note', I.note], pending: ['k-task', I.pending], done: ['k-fix', I.fix], unknown: ['k-unk', I.unknown] };
const cnt = (c) => `<span class="cnt">${Object.entries(c).map(([k, n]) => `<span class="${K[k][0]}">${n}${K[k][1]}</span>`).join('')}</span>`;
const COUNTS = { 3: { pending: 1 }, 4: { pending: 1 }, 7: { note: 3, pending: 1, done: 1, unknown: 1 }, 8: { pending: 1, unknown: 1 }, 9: { done: 1 }, 11: { note: 1 } };
const rows = L.sample.navRows.map((r) => {
  const { notes, tasks, fixes, ...rest } = r;
  return r.type === 'scene' ? { ...rest, here: r.title === 'Vega leaves without paying' } : rest;
});
let nav = L.navigator({ rows, review: true });
for (const r of rows.filter((x) => x.type === 'chapter' && COUNTS[x.n])) {
  const t = `<span class="t">${L.esc(r.title)}</span><span class="cnt"></span>`;
  nav = nav.replace(t, `<span class="t">${L.esc(r.title)}</span>${cnt(COUNTS[r.n])}`);
}

const html = extraCss + L.win({
  mode: 'Review',
  crumbs: { chapter: 'Chapter 7 · Lena’s warning', scene: 'Vega leaves without paying' },
  strip: { reviewCount: 12 },
  left: nav,
  page: L.pageCol(col, { paddingTop: 0 }),
  status: { style: 'Plain', words: '2,418 words', pages: 'p. 146 of 248' },
  ask: 'normal',
  extra: L.ann(1, 'Where the walk is: 4 / 12 and who the card is from; Stop ends the walk', 1104, 146, { w: 270 })
    + L.ann(2, 'Esc does nothing here: a stray key cannot drop you out', 1104, 200, { w: 270 })
    + L.ann(3, 'The toggles decide which cards are in the walk', 16, 684, { w: 250 })
    + L.ann(4, 'Keys inside the buttons: Enter Apply, Delete Dismiss, Edit changes the proposal first, Tab skips for now', 16, 732, { w: 250 })
    + L.ann(5, 'Don’t bother me silences that kind of AI or rule finding here; Settings ▸ Tips lists them', 16, 796, { w: 250 })
    + L.ann(6, 'Undo for the whole walk; leaving the mode pauses it', 1104, 760, { w: 200 }),
});

module.exports = {
  id: 'S34',
  file: 's34-review-all',
  title: 'Review all',
  width: 1440,
  height: 900,
  html,
  caption: L.caption({
    id: 'S34', title: 'Review all',
    scene: 'The writer clicked Review all ▶ at the top of the margin of chapter 7. The walk is at its fourth card of twelve, a rule finding on “the station steps”, used twice in two lines: the text has scrolled to that line and tints it, the card sits level with it, and the rest of the margin is empty. Esc does nothing here; Stop ends the walk.',
    on: 'the left column with its two toggle rows deciding what is in the walk; the text scrolled to the line, underlines on, the words tinted, the other badges faint; the margin header “4 / 12” with the spark (the finding is the AI’s) and ■ Stop, a thin progress bar; one card with the keys inside its buttons (✓ Apply Enter, ✗ Dismiss Delete, ✎ Edit, → Skip for now Tab) and the Don’t bother me link; two dashed insets: the end of the walk (9 applied · 2 dismissed · 1 skipped · Undo all) and the Continue · 4 / 12 button that Review offers when you come back; the Review count 12; the Ask button',
    off: 'the other cards (the walk shows one), the list of silenced findings in Settings ▸ Tips',
  }),
};
