// S23: Undo and Revert, not a moment: a board. Ctrl+Z scrolls to its place; a notice "40 moves on the Board";
// later the History ▸ Today popover; the result "Reverted 38 of 40 moves ...".
const C = require('../rev-common');
const { L, I } = C;

const css = `<style>
.s23{display:flex;flex-direction:column;gap:20px;padding:24px 28px 26px;background:#d9d9d6;position:relative}
.s23 .row{display:flex;gap:20px;align-items:flex-start}
.s23 .crop>.z{padding:14px 16px 16px;position:relative}
.s23 .notice{position:static;transform:none;display:inline-flex}
.s23 .notice b{font-weight:600}
.s23 .notice .lk{margin-left:12px}
.s23 .inpage{position:relative;height:210px;overflow:hidden;background:#fff}
.s23 .inpage .pg{width:560px;margin:22px auto 0;font:16px/1.7 var(--text);color:var(--ink)}
.s23 .inpage .pg p{margin:0;text-indent:1.5em}
.s23 .inpage .flash{position:relative;background:rgba(59,110,168,.10);box-shadow:0 0 0 6px rgba(59,110,168,.10);border-radius:3px;margin-top:34px}
.s23 .inpage .flash .srule{margin:12px 80px 10px}
.s23 .inpage .undid{position:absolute;right:-6px;top:-30px;font:600 11px var(--ui);color:#fff;background:var(--accent);border-radius:5px;padding:2px 8px;white-space:nowrap}
.s23 .inpage .mst{position:absolute;left:0;right:0;bottom:0;height:26px;border-top:1px solid var(--line);background:var(--chrome);display:flex;gap:16px;align-items:center;padding:0 12px;font:12px var(--ui);color:var(--ink2)}
.s23 .htp{width:470px;background:#fff;border:1px solid var(--line);border-radius:10px;box-shadow:0 10px 30px rgba(0,0,0,.14);padding:5px 0 4px;font:13px var(--ui)}
.s23 .htp .mhd{padding:7px 14px 3px}
.s23 .htp .hx{display:flex;gap:12px;align-items:center;padding:6px 14px}
.s23 .htp .hx .t{width:40px;color:var(--ink3);font-variant-numeric:tabular-nums;flex:none}
.s23 .htp .hx .w{flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.s23 .htp .hx .lk{width:50px;text-align:right;flex:none}
.s23 .htp .hx .g{width:50px;text-align:right;color:var(--ink4);flex:none}
.s23 .htp .ft{border-top:1px solid var(--line2);margin-top:4px;padding:7px 14px 5px;display:flex}
.s23 .htp .ft .lk{margin-left:auto}
.s23 .sbar2{display:flex;align-items:center;gap:4px;height:28px;margin-top:6px;border-top:1px solid var(--line);padding:0 10px;font-size:12px;color:var(--ink2);justify-content:flex-end}
.s23 .sbar2 .sb{padding:2px 8px;border-radius:5px;display:inline-flex;gap:6px;align-items:center}
.s23 .sbar2 .sb.act{background:#e6e6e3;color:var(--ink)}
.s23 .stk{display:flex;align-items:center;gap:0;margin:4px 0 0}
.s23 .stk .step{border:1px solid var(--line);border-radius:8px;background:#fff;padding:6px 12px 7px;text-align:center;font:12.5px var(--ui);min-width:122px}
.s23 .stk .step small{display:block;font:600 9.5px var(--ui);letter-spacing:.07em;text-transform:uppercase;color:var(--ink3);margin-bottom:2px}
.s23 .stk .step.now{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-tint)}
.s23 .stk .cx{width:20px;height:1px;background:var(--ink4)}
.s23 .stk .lab{width:110px;font:600 11px var(--ui);color:var(--ink2);flex:none}
.s23 .cap{font:13px/1.5 var(--ui);color:var(--ink2);margin-top:8px;max-width:640px}
.s23 .cap b{color:var(--ink)}
</style>`;

const crop = (label, w, inner, after = '', pad = true) => `<div class="crop" style="width:${w}px"><div class="lbl">${label}</div><div class="z"${pad ? '' : ' style="padding:0"'}>${inner}</div>${after}</div>`;
const nt = (text, o) => L.notice(text, o);

// (1) Ctrl+Z at its place
const place = `<div class="inpage"><div class="pg"><p>“Then hear this.” Lena leaned close enough that Vega could smell the lemon on her hands. “Go home. Don’t come back to the Blue Lamp tomorrow.”</p>`
  + `<div class="flash"><span class="undid">Undone: scene break removed</span><div class="srule"></div><p class="first" style="text-indent:0">Outside, the rain had turned to the fine kind that does not fall so much as hang.</p></div></div><div class="mst"><span>Plain</span><span>2,418 words</span><span>p. 146 of 248</span><span style="margin-left:auto">Next: Edit ▸ Undo typing  ·  Ctrl+Z</span></div></div>`;

// (2) latest-step notice; (4) result notice
const n1 = nt('<b>40 moves</b> on the Board', { kind: 'info', standing: true, undo: false, acts: '<span class="lk">Revert</span>' });
const n1b = nt('<b>40 moves</b> on the Board', { kind: 'info', standing: true, acts: '' });
const n2 = nt('Reverted <b>38 of 40</b> moves; <b>2 scenes you edited since were kept</b>', { kind: 'fix', undo: false, acts: '<span class="lk">Show</span>' });

// (3) History ▸ Today
const hr = (t, w, a) => `<div class="hx"><span class="t">${t}</span><span class="w">${w}</span>${a}</div>`;
const htp = `<div class="htp"><div class="mhd">Today</div>`
  + hr('21:12', '40 moves on the Board', '<span class="lk">Revert</span>')
  + hr('21:11', 'Scene break removed in chapter 7', '<span class="g">—</span>')
  + hr('21:10', 'Fixed “teh” → “the” in chapter 7', '<span class="lk">Revert</span>')
  + hr('20:40', 'Marta · 150 changes taken (walk)', '<span class="lk">Revert</span>')
  + hr('20:12', 'Saved a version “Before Marta’s changes”', '<span class="g"></span>')
  + `<div class="ft"><span style="color:var(--ink3)">Waiting decisions are in Review, not here</span><span class="lk">All versions…</span></div></div>`
  + `<div class="sbar2"><span class="sb">Show ▾</span><span class="sb act">${I.clock}History ▾</span><span style="width:210px"></span></div>`;

// (5) stacks
const step = (a, b, now) => `<div class="step${now ? ' now' : ''}"><small>${a}</small>${b}</div>`;
const stacks = `<div class="stk"><span class="lab">Manuscript</span>${step('typing', '“Nobody came…”')}<span class="cx"></span>${step('typing', '“…since Tuesday”')}<span class="cx"></span>${step('Board', '40 moves')}<span class="cx"></span>${step('typing', 'ten minutes', 1)}</div>`
  + `<div class="stk" style="margin-top:10px"><span class="lab">Entry: Lena</span>${step('field', 'Age: about 50')}<span class="cx"></span>${step('field', 'Knows: Kit', 1)}</div>`
  + `<div class="stk" style="margin-top:10px"><span class="lab">Topic: Bars</span>${step('typing', 'a source', 1)}</div>`
  + `<div class="cap"><b>Ctrl+Z</b> is linear and belongs to what you are looking at: the manuscript is one stack; each Codex entry, topic and field has its own. Taking back something older, like the 40 moves under ten minutes of typing, is <b>Revert</b>: a new step that inverts just that thing.</div>`;

const html = css + C.css + `<div class="s23"><div class="row">`
  + crop('1 · Ctrl+Z scrolls to its place and says what it undid', 760, place, '<div class="cap" style="padding:0 16px 12px">The text scrolls to the change and flashes it; the Edit menu names what Ctrl+Z will undo.</div>', false)
  + `<div style="display:flex;flex-direction:column;gap:20px">`
  + crop('2 · A notice while it is the latest step', 580, n1b, '<div class="cap" style="padding:0 16px 12px">Stays until you type on or press ✕, never on a timer.</div>')
  + crop('3 · After you typed on, the same notice says Revert', 580, n1)
  + `</div></div><div class="row">`
  + crop('4 · History ▸ Today (status bar): today’s messages, no bell', 520, htp, '<div class="cap" style="padding:0 16px 12px">Revert shows where it still applies; a dash where nothing can be inverted.</div>')
  + `<div style="display:flex;flex-direction:column;gap:20px">`
  + crop('5 · The result, honest about what it could not do', 820, n2)
  + crop('6 · Which stack Ctrl+Z walks', 820, stacks)
  + `</div></div>`
  + `</div>`;

module.exports = {
  id: 'S23', file: 's23-undo-revert', title: 'Undo and Revert', width: 1440, height: 1160,
  html,
  caption: L.caption({
    id: 'S23', title: 'Undo and Revert',
    scene: 'Not a moment in the app: a board. Ctrl+Z walks back the last step and shows where. Moving 40 scenes on the Board leaves a notice that says Undo while it is the latest step and Revert after the writer typed on. History ▸ Today lists the day’s messages with Revert where it applies. Reverting 40 moves after typing says exactly what it could not do.',
    on: 'the flashed paragraph with “Undone: scene break removed”; the notice “40 moves on the Board” with Undo then with Revert; the History ▸ Today popover (times, messages, Revert, “All versions…”); “Reverted 38 of 40 moves; 2 scenes you edited since were kept · Show”; the three stacks (manuscript, Codex entry, topic)',
    off: 'a bell, a timer, Undo and Redo arrows in the strip, a Redo button',
  }),
};
