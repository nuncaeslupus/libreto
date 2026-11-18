// S19: Review all, the walk. The margin becomes one card at a time, level with its line; the header says what is
// decided and what is left (no position); keys in the buttons; Stop; resumes where you stop. Inset: the end panel.
const C = require('../rev-common');
const { L, I, who, btn } = C;

const css = `<style>
.s19 .tM2{background:rgba(111,79,201,.14);box-shadow:inset 0 -2px 0 rgba(111,79,201,.55)}
.s19 .del{text-decoration:line-through;color:var(--ink3)}
.s19 .tsel{outline:2px solid rgba(111,79,201,.55);outline-offset:2px;border-radius:2px}
.s19 .para{position:relative}
.s19 .walk{padding:12px 14px 0}
.s19 .walk .t1{display:flex;align-items:center;gap:8px}
.s19 .walk .t1 b{font:600 14px var(--ui)}.s19 .walk .t1 .sp{flex:1}
.s19 .walk .t2{display:flex;align-items:center;gap:7px;margin:9px 0 0;font-size:13.5px}
.s19 .walk .t2 b{font-weight:600}
.s19 .walk .pb{height:4px;border-radius:2px;background:var(--line);margin-top:9px;position:relative}
.s19 .walk .pb i{position:absolute;left:0;top:0;bottom:0;width:50%;border-radius:2px;background:#6f4fc9}
.s19 .stop{border:1px solid var(--line);border-radius:6px;background:#fff;padding:3px 11px;font:500 12.5px var(--ui)}
.s19 .rc .b{padding:3px 8px}
.s19 .rc .b kbd{font-size:10.5px;padding:0 5px}
.s19 .rc .a{gap:6px}
.s19 .wfoot{position:absolute;left:14px;right:14px;bottom:12px;color:var(--ink3);font-size:11.5px;line-height:1.45;border-top:1px solid var(--line);padding-top:8px}
.s19 .wfoot b{font-weight:600;color:var(--ink2)}
.below.s19b{display:flex;gap:24px;padding:20px 28px 22px;align-items:flex-start}
.s19b .endp{width:340px;background:var(--soft);border:1px solid var(--line);border-radius:9px;padding:12px 14px 14px;font:12.5px/1.45 var(--ui);color:var(--ink)}
.s19b .endp h4{margin:0 0 4px;font:600 14px var(--ui)}
.s19b .endp .big{font:600 15px var(--ui);margin:6px 0 2px}
.s19b .endp .row{display:flex;gap:8px;margin-top:12px;flex-wrap:wrap}
.s19b .endp .b{border:1px solid var(--line);border-radius:6px;padding:3px 10px;background:#fff}
.s19b .endp .b.p{border-color:var(--accent);color:var(--accent)}
.s19b .endp .b.r{color:var(--red);border-color:#e3b3a8}
.s19b .endp small{color:var(--ink3);font-size:11.5px}
.s19b .note2{max-width:640px;font:13px/1.5 var(--ui);color:var(--ink2);align-self:center}
</style>`;

const col = `<div style="height:40px"></div>`
  + `<div class="para"><p class="first">Vega took the stool at the end of the bar, the one with a view of the back-room door. “Has Kit been in?”</p></div>`
  + `<div class="para"><p>“Kit who?” Lena set a glass down <span class="del tM2" data-m="chg">hard enough to make it ring</span> <span class="tM2 tsel" data-m="chg2">harder than she meant to</span>. “Half the city’s called Kit.”</p></div>`
  + `<div class="para"><p>“Mine. Thin, nervous, writes everything down in a little green ledger.” Vega slid a coin across the counter and left her hand on it. “He said he’d meet me here at nine.”</p></div>`
  + `<div class="para"><p>Lena looked at the coin, then at the door behind her. “Nobody came in at nine. Nobody’s been in that room since Tuesday.”</p></div>`
  + `<div class="para"><p><i>It was a good lie.</i> Vega had heard worse from people who were paid to tell them. But there was a wet ring on the bar by the back-room door, and a second glass upside down on the drainer, still beaded.</p></div>`
  + L.sample.chapter7Plain.slice(7).map((p) => `<div class="para"><p>${p}</p></div>`).join('');

const walk = `<div class="walk" data-m="walk"><div class="t1"><b>Review all</b><span class="sp"></span><span class="stop">■ Stop</span></div>`
  + `<div class="t2">${who('M')}<span><b>Marta</b> · decided 150 · left 150</span></div><div class="pb"><i></i></div></div>`;
const CT = 96;
const card = (y) => `<div class="rc pend sel" style="top:${y}px;left:10px;right:12px"><div class="h">${I.pending}<b>Change</b><small>5 words</small>${who('M')}</div>`
  + `<div class="x"><span class="was">hard enough to make it ring</span><br><span class="now">harder than she meant to</span></div>`
  + `<div class="a">${btn('Accept', { p: 1, g: '✓', k: 'Enter' })}${btn('Reject', { g: '✗', k: 'Delete' })}${btn('Skip', { k: 'S' })}${btn('Edit', { g: '✎', k: 'E' })}</div></div>`;
const margin = (y) => `<div class="rvm" data-m="rvm">${walk}${card(y)}<div class="wfoot"><b>Stop</b> or close the margin at any time: it resumes where you stop. The keys act on the card; click in the text to type, and the walk waits.</div></div>`;

const html = css + C.css + L.win({
  view: 'Text', crumbs: { chapter: 'Chapter 7 · Lena’s warning', scene: 'Lena lies about the back room' },
  strip: { review: 12, reviewOn: true },
  page: L.pageCol(col, { paddingTop: 0 }),
  right: margin(106),
  ask: false,
  status: { style: 'Plain', words: '2,418 words', pages: 'p. 146 of 248' },
  extra: L.ann(1, 'The header counts what is decided and what is left: it does not move when you skip or the list changes', 20, 160, { w: 330 })
    + L.ann(2, 'Which cards are in the walk follows the filters and the round you chose', 20, 250, { w: 330 })
    + L.ann(3, 'The text scrolls to the line; the card sits level with it and Marta’s change is outlined in her tint', 20, 330, { w: 330 })
    + L.ann(4, 'The keys are inside the buttons; Edit lets you change the words before accepting', 20, 430, { w: 330 })
    + L.ann(5, 'A stray click in the text does not end the walk: it waits while you type', 20, 520, { w: 330 }),
}).replace('<div class="win"', '<div class="win s19"')
 + `<div class="below s19b"><div class="endp"><small style="text-transform:uppercase;letter-spacing:.06em">At the end of the walk</small><h4>Marta · Nov 7</h4><div class="big">Decided 296 · Skipped 4</div><small>Accepted 210 · Rejected 86 · the 4 skipped are still open in Review</small><div class="row"><span class="b p">Show the 4 skipped</span><span class="b r">Revert this round</span></div></div>`
 + `<div class="endp"><small style="text-transform:uppercase;letter-spacing:.06em">Coming back after stopping at 150</small><h4>Marta · Nov 7</h4><div class="big">Decided 150 · left 150</div><small>The walk picks up at the next undecided card</small><div class="row"><span class="b p">Review all ▶</span><span class="b">Revert this round</span></div></div>`
 + `<div class="note2">Revert this round puts back every text change Marta’s round made, as one step. What it cannot revert because you edited the words afterwards stays, and the result says so (see S23).</div></div>`;

module.exports = {
  id: 'S19', file: 's19-review-all', title: 'Review all, the walk', width: 1440, height: 900 + 150,
  html,
  caption: L.caption({
    id: 'S19', title: 'Review all, the walk',
    scene: 'The writer pressed Review all ▶ on Marta’s round. The margin is now a walk: one card at a time, level with its line, the text scrolled to Marta’s change. Half the round is decided. Below the window, two small frames: the end of the walk, and what the margin offers when you come back after stopping.',
    on: 'Review pressed; the walk header (Review all, ■ Stop, “Marta · decided 150 · left 150”, a progress bar); the change card (old words struck, new words below, ✓ Accept Enter, ✗ Reject Delete, Skip S, ✎ Edit E); the text with Marta’s change in her tint, outlined; the footer “resumes where you stop”; in the frames, “Decided 296 · Skipped 4” with Show the 4 skipped and Revert this round, and the resume state',
    off: 'a position like “4 / 12”, the navigator, the Ask button, other cards (the walk shows one)',
  }),
};
