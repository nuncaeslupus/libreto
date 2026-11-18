// S37: Settings ▸ AI (draft 8; replaces d7 S25). Two connection cards, three levels, budget, the live disclosure line, agent permission.
const L = require('../lib');
const K = require('../d8-kit-s37');

const css = `<style>
.s37 .cards{display:flex;gap:14px}
.s37 .card{flex:1;border:1px solid var(--line);border-radius:10px;padding:11px 14px 12px;background:var(--paper);display:flex;flex-direction:column;gap:6px;min-width:0}
.s37 .card.sel{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-tint)}
.s37 .card h4{margin:0;font:600 13.5px var(--ui);display:flex;align-items:center;gap:8px}
.s37 .card h4 .tag{font:500 10.5px var(--ui);border:1px solid var(--line);border-radius:9px;padding:0 7px;color:var(--ink3)}
.s37 .card h4 .tag.d{color:var(--accent);border-color:transparent;background:var(--accent-tint)}
.s37 .card p{margin:0;color:var(--ink2);font-size:12.5px;line-height:1.45}
.s37 .okl{display:flex;align-items:center;gap:6px;color:var(--fix);font-size:12.5px}
.s37 .btns{display:flex;gap:8px;margin-top:2px}
.s37 .btn{height:25px;font-size:12px}
.s37 .mrow{display:flex;align-items:center;gap:8px;font-size:12.5px}
.s37 .mrow .l{width:134px;color:var(--ink2)}
.s37 .mrow .px{color:var(--ink3);font-size:11.5px}
.s37 .inp.key{font-family:ui-monospace,monospace;width:200px;color:var(--ink2)}
.s37 .lv{display:flex;gap:10px;align-items:flex-start;padding:3px 0}
.s37 .lv b{width:110px;flex:none;font-weight:600}
.s37 .lv .rd{margin-top:2px}
.s37 .sub3{margin:3px 0 2px 120px;display:flex;flex-direction:column;gap:3px}
.s37 .est{margin:5px 0 0 120px;color:var(--ink2);font-size:12.5px}
.s37 .mbar{width:170px;height:7px;border-radius:4px;background:var(--line);overflow:hidden;display:inline-block}
.s37 .mbar i{display:block;height:100%;background:var(--accent)}
.s37 .live{display:flex;align-items:center;gap:10px;background:var(--soft);border:1px solid var(--line);border-radius:9px;padding:8px 12px;font-size:13px}
.s37 .live b{font-weight:600}
.s37 .below .crop .lbl{white-space:nowrap}
.s37 .insets{display:flex;gap:16px}
.s37 .ins{padding:12px 14px;font-size:12.5px;line-height:1.45;display:flex;flex-direction:column;gap:8px}
.s37 .nt{display:flex;gap:9px;align-items:flex-start;border:1px solid var(--line);border-left:3px solid var(--accent);border-radius:8px;padding:9px 12px;box-shadow:0 1px 4px rgba(0,0,0,.06)}.s37 .nt svg{flex:none;margin-top:2px;color:var(--accent)}.s37 .nt .lk{white-space:nowrap}
</style>`;

const cards = `<div class="cards">
  <div class="card sel"><h4><span class="rd on"></span>Your Claude subscription <span class="tag d">default</span></h4>
    <p>Through Claude Desktop, using Libreto’s connector. No key to paste.</p>
    <div class="okl">${L.icons.fix}Connected to <b style="font-weight:600;color:var(--ink)">The Blue Lamp</b></div>
    <p>Proposals arrive in Review. Requests count against your plan, not a bill.</p>
    <div class="btns"><span class="btn q">Disconnect</span><span class="btn q">Choose another book…</span></div></div>
  <div class="card"><h4><span class="rd"></span>API key · pay per use <span class="tag">advanced</span></h4>
    <p>Your own key from Anthropic; you pay them per word sent and received.</p>
    <div class="mrow"><span class="l">Key</span><span class="inp key">sk-ant-••••••••3f9a</span></div>
    <div class="mrow"><span class="l">Writing and chat</span>${K.dd('Sonnet', 110)}<span class="px">$$</span></div>
    <div class="mrow"><span class="l">Background reads</span>${K.dd('Haiku-class', 110)}<span class="px">$</span></div></div>
</div>`;

const main = `
  <div class="sx-sec">Connection</div>${cards}
  <div class="sx-sec">When the AI works</div>
  <div class="lv"><span class="rd"></span><b>Off</b><span class="gray">Nothing is ever sent.</span></div>
  <div class="lv"><span class="rd"></span><b>When I ask</b><span class="gray">Only when you press Ctrl+K and ask.</span></div>
  <div class="lv"><span class="rd on"></span><b>Also on its own</b><span class="gray">Reads in the background and proposes in Review.</span></div>
  <div class="sub3">${K.cb(true, 'catch up at the start of a session (offered, never silent)')}${K.cb(true, 'after I move scenes')}${K.cb(false, 'while I write, at breaks')}</div>
  <div class="est">With your subscription: part of your plan. With a key: ≈ 2 € / month at your pace</div>
  <div class="sx-sec">Budget, when you use the key</div>
  ${K.row('Each month, up to', `<span class="inp">10.00 €</span><span class="mbar"><i style="width:32%"></i></span><span class="gray">3.20 € spent with the key this month · stops at the limit and says so</span>`)}
  ${K.row('Ask first above', `<span class="inp">0.50 €</span><span class="gray">per request, with the price shown</span>`)}
  <div class="sx-sec">Disclosure and agents</div>
  <div class="live">${L.icons.info}<span>This book: <b>1,204 AI words, 2.2 %</b> · <span class="lk">Report</span></span><span class="gray" style="margin-left:auto">counted live, as you write</span></div>
  ${K.row('Agents may draft new scenes', `${K.dd('Ask each session', 150)}<span class="gray">Claude Code and Claude Desktop; edits always arrive as a review round</span>`)}
`;

const dlg = K.dialog({ x: 40, y: 54, w: 960, h: 780, active: 'AI', main });

const html = css + K.css + K.textWin({
  extra: dlg
    + L.ann(1, 'Two ways to connect. The subscription is the default: no key, and it is clear which book it is connected to', 1020, 118, { w: 380 })
    + L.ann(2, 'The API key is for people who want it: pay per use, with a cheaper model for background reads', 1020, 236, { w: 380 })
    + L.ann(3, 'Three levels, one line each. “Also on its own” opens three checkboxes and an honest monthly estimate', 1020, 420, { w: 380 })
    + L.ann(4, 'Budget, for the key only (the subscription is not billed per request): a monthly stop, and a question before any single expensive request', 1020, 570, { w: 380 })
    + L.ann(5, 'The disclosure is a live line, not a warning box: words the AI wrote in this book, as a share, with the report one click away', 1020, 690, { w: 380 })
    + L.ann(6, 'Agents work through the same connection; new scenes need your yes each session', 1020, 790, { w: 290 }),
});

const below = `<div class="below"><div class="insets">
  <div class="crop" style="width:440px"><div class="lbl">Budget reached</div><div class="ins">${`<div class="nt">${L.icons.info}<span>The AI has stopped for this month: 10.00 € of 10.00 € used. Everything else works as before. <span class="lk">Raise budget…</span></span></div>`}</div></div>
  <div class="crop" style="width:440px"><div class="lbl">Claude Desktop is not running</div><div class="ins">${`<div class="nt">${L.icons.info}<span>Libreto cannot reach Claude Desktop, so Ask is gray. Open it, or switch to a key. <span class="lk">Open Settings</span></span></div>`}</div></div>
  <div class="crop" style="width:440px"><div class="lbl">An answer was cut off</div><div class="ins"><div style="font:15px/1.5 var(--text);color:var(--ink2)">Lena would not say it aloud, so Vega said it for her: that the back room had been open since…</div><div style="display:flex;gap:10px;align-items:center;font-size:12.5px;color:var(--ink3)"><span>Stopped at the length limit</span><span class="btn">Continue</span></div></div></div>
</div></div>`;

module.exports = {
  id: 'S37', file: 's37-ai-settings', title: 'Settings, AI', width: 1440, height: 1190,
  html: `<div class="s37">${html}${below}</div>`,
  caption: L.caption({
    id: 'S37', title: 'Settings, AI',
    scene: 'Tools ▸ Settings… on the AI section, with “All my projects” chosen. The writer connected Claude Desktop once; Libreto now shows which book it works on. The level is “Also on its own” with two of three boxes ticked. Under the window, three failure states.',
    on: 'the Settings window with its scope switch (All my projects · This book), search box and sections; two connection cards (Your Claude subscription, connected to The Blue Lamp, Disconnect; API key with a masked key and model rows for writing and for background reads); levels Off · When I ask · Also on its own with three checkboxes and “part of your plan” for the subscription and “≈ 2 € / month at your pace” with a key; budget for the key, 10.00 € with 3.20 € spent and a per-request threshold; the live disclosure line “This book: 1,204 AI words, 2.2 % · Report”; “Agents may draft new scenes: Ask each session”; the notices for budget reached, Claude Desktop not running, and a cut-off answer',
    off: 'a warning box before the settings, two providers active at once, what the AI may do in this book (it is in the Brief), the AI activity log (Tools ▸ AI activity)',
  }),
};
