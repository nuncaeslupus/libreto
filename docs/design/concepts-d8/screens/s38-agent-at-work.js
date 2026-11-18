// S38: an agent at work (new in draft 8). Text view, the agent chip with its popover, two blue draft scenes in the Navigator,
// and (inset) the first-time permission dialog.
const L = require('../lib');
const K = require('../d8-kit-s37');

const css = `<style>
.s38 .agentchip{font-weight:500}
.s38 .agentchip svg{width:13px;height:13px;color:var(--gram)}
.s38 .apop{position:absolute;z-index:40;width:392px;background:var(--paper);border:1px solid #dcdcd8;border-radius:12px;box-shadow:0 18px 50px rgba(0,0,0,.18),0 2px 6px rgba(0,0,0,.06);font-size:12.5px;line-height:1.45}
.s38 .apop:before{content:"";position:absolute;right:92px;top:-6px;width:10px;height:10px;background:var(--paper);border-left:1px solid #dcdcd8;border-top:1px solid #dcdcd8;transform:rotate(45deg)}
.s38 .ap-h{display:flex;align-items:center;gap:8px;padding:11px 14px 9px;border-bottom:1px solid var(--line2)}
.s38 .ap-h b{font-weight:600;font-size:13.5px}
.s38 .ap-h .gray{margin-left:auto}
.s38 .ap-r{display:flex;gap:10px;padding:7px 14px;border-top:1px solid var(--line2)}
.s38 .ap-h+.ap-r{border-top:0}
.s38 .ap-r>.ap-k{width:62px;flex:none;color:var(--ink3);font:600 10.5px var(--ui);letter-spacing:.07em;text-transform:uppercase;padding-top:2px}
.s38 .ap-r>.ap-v{flex:1;min-width:0}
.s38 .gray{color:var(--ink3);font-size:12px}
.s38 .ap-g{display:flex;flex-wrap:wrap;gap:4px 12px}
.s38 .ap-g span{display:inline-flex;gap:5px;align-items:center}
.s38 .ap-g .no{color:var(--ink3)}
.s38 .mbar{display:inline-block;width:120px;height:6px;border-radius:3px;background:var(--line);overflow:hidden;vertical-align:1px}
.s38 .mbar i{display:block;height:100%;background:var(--gram)}
.s38 code{font:11.5px ui-monospace,monospace;color:var(--ink2);display:block}
.s38 .ap-f{display:flex;gap:8px;padding:9px 14px;border-top:1px solid var(--line2);background:var(--soft);border-radius:0 0 12px 12px}
.s38 .ap-f .btn{height:26px}
.s38 .nrow .gc.in{color:var(--gram)}
.s38 .dlg{position:relative}
.s38 .dh{padding:14px 20px 4px;font:600 16px var(--ui)}
.s38 .dsub{padding:0 20px 8px;color:var(--ink2);font-size:12.5px}
.s38 .dl{padding:6px 20px;display:flex;flex-direction:column;gap:7px;font-size:13px}
.s38 .dl .opt2{align-items:flex-start}
.s38 .dl .opt2 .cb{margin-top:2px}
.s38 .dl .opt2 small{display:block;color:var(--ink3);font-size:12px}
.s38 .dl .opt2.off{color:var(--ink3)}
.s38 .dl .opt2.off .cb{background:var(--soft);border-color:var(--line)}
.s38 .dl hr{border:0;border-top:1px solid var(--line2);margin:3px 0;width:100%}
.s38 .dsv{display:flex;align-items:center;gap:8px;color:var(--fix);font-size:12.5px;padding:6px 20px 10px}
.s38 .col p{margin:0}
</style>`;

const nrow = (n, t, o = {}) => ({ type: 'raw', html: `<div class="nrow${o.cur ? ' cur' : ''}"><span class="cv">${o.cur ? L.icons.chevron : ''}</span><span class="n">${n}</span><span class="t">${t}</span>${o.gc ? `<span class="gc in">${o.gc}</span>` : ''}</div>` });
const rows = [
  { type: 'part', title: 'Part Two: Spring' },
  nrow(10, 'Station steps'),
  nrow(11, 'The back room, finally', { cur: true }),
  { type: 'scene', title: 'Kit opens the door', here: true },
  { type: 'scene', title: 'What the ledger says' },
  nrow(12, 'Vega follows Kit', { gc: 'agent' }),
  { type: 'draft', title: 'Vega follows Kit to the station' },
  { type: 'draft', title: 'The ledger changes hands' },
  nrow(13, 'The pawnshop at night', { gc: 'agent' }),
  nrow(14, 'Teo’s question', { gc: 'agent' }),
  nrow(15, 'Harbor Street, empty'),
  { type: 'front', title: 'Back matter' },
  { type: 'pinned', title: 'Discarded', count: '3' },
];

const P = [
  'The door gave on the second push. Kit stood aside to let her pass, the green ledger held flat against his chest as if the room might ask for it.',
  'It was smaller than the story had made it. A table, two chairs, a lamp with its shade turned to the wall, and on the table a ring of dust where something round had stood for years and was gone.',
  '“Nobody’s been in here since Tuesday,” Vega said, and heard how it sounded in Lena’s voice.',
  'Kit laughed once, without any air in it. “Tuesday,” he said. “That is what she tells everyone.”<span class="cursor"></span>',
];
const col = `<div class="chap"><div class="num">CHAPTER 11</div><h1>The back room, finally</h1></div>`
  + P.map((p, i) => `<div class="para"><p${i === 0 ? ' class="first"' : ''}>${p}</p></div>`).join('');

const chip = `<span class="agentchip">${L.icons.spark}Claude Code · drafting ch. 12 · 7 proposals<span class="stop"></span></span>`;

const pop = `<div class="apop" style="right:56px;top:100px">
  <div class="ap-h"><span class="who" style="background:rgba(58,111,216,.12);color:var(--gram)">${L.icons.spark}</span><b>Claude Code</b><span class="gray">session since 14:02 · 38 min</span></div>
  <div class="ap-r"><span class="ap-k">Goal</span><span class="ap-v">Draft chapters 12–14 from the outline</span></div>
  <div class="ap-r"><span class="ap-k">Scope</span><span class="ap-v">ch. 12–14 <span class="gray">· reads the whole book and the Brief</span></span></div>
  <div class="ap-r"><span class="ap-k">Grants</span><span class="ap-v ap-g"><span>${L.icons.fix}Read</span><span>${L.icons.fix}Propose edits</span><span>${L.icons.fix}Draft new scenes</span><span class="no">✕ Change the text directly</span></span></div>
  <div class="ap-r"><span class="ap-k">Quota</span><span class="ap-v">7 of 50 proposals waiting <span class="mbar"><i style="width:14%"></i></span><br>5,880 of 20,000 words <span class="mbar"><i style="width:29%"></i></span></span></div>
  <div class="ap-r"><span class="ap-k">Last calls</span><span class="ap-v"><code>get_context  scene 12.1</code><code>propose_scene  “Vega follows Kit…”</code><code>check  name, point of view</code></span></div>
  <div class="ap-f"><span class="btn">Pause</span><span class="btn red">■ Stop</span><span class="gray" style="margin-left:auto;align-self:center">Revert the session: AI activity</span></div>
</div>`;

const html = css + K.css + L.win({
  view: 'Text', crumbs: { chapter: 'Chapter 11 · The back room, finally', scene: 'Kit opens the door' },
  left: L.navigator({ rows, placeholder: 'Filter' }),
  strip: { review: 19, agent: chip },
  page: L.pageCol(col, { paddingTop: 40 }),
  status: { style: 'Plain', words: '812 of 1,000 today', goal: 81, pages: 'p. 208 of 248' },
  ask: 'normal',
  extra: pop
    + L.ann(1, 'The agent chip appears only while an agent works. It names the agent, the chapter and what waits; ■ stops it at once', 700, 108, { w: 250 })
    + L.ann(2, 'Scope: the agent writes only in ch. 12–14 and cannot change your text. You keep writing here', 20, 530, { w: 250 })
    + L.ann(3, 'New scenes arrive as blue draft scenes, never in the middle of your text; each is accepted whole or discarded', 20, 640, { w: 270 })
    + L.ann(4, 'Quotas make a runaway session impossible: 50 waiting proposals, 20,000 words', 1030, 470, { w: 280 }),
});

const dlg = `<div class="dlg sx" style="width:640px">
  <div class="dh">Claude Code wants to work on The Blue Lamp</div>
  <div class="dsub">It connected through Libreto’s connector on this computer. Choose what it may do in this session.</div>
  <div class="dl">
    <span class="opt2"><span class="cb on"></span><span>Read the book, the Codex and the Brief</span></span>
    <span class="opt2"><span class="cb on"></span><span>Propose edits<small>They arrive in Review as one round; nothing changes until you accept.</small></span></span>
    <span class="opt2"><span class="cb on"></span><span>Draft new scenes<small>They arrive as blue draft scenes in the Navigator.</small></span></span>
    <span class="opt2 off"><span class="cb"></span><span>Change the text directly <small>Never offered: your text only changes when you accept.</small></span></span>
    <hr>
    <div class="sx-row" style="padding:2px 0;border:0"><span class="k" style="width:70px;font-weight:600">Scope</span><span class="v">${K.dd('Chapters 12–14', 170)}<span class="gray">writes here, reads everywhere</span></span></div>
    <div class="sx-row" style="padding:2px 0;border:0"><span class="k" style="width:70px;font-weight:600">Quotas</span><span class="v"><span class="inp">50</span><span class="gray">proposals waiting ·</span><span class="inp">20,000</span><span class="gray">words</span></span></div>
  </div>
  <div class="dsv">${L.icons.fix}A version is saved first (always): “Before Claude Code, 14:02”.</div>
  <div class="dlg-f"><span class="btn q">Deny</span><span class="sp"></span><span class="btn">Always allow these</span><span class="btn pri">Allow for this session</span></div>
</div>`;
const below = `<div class="below" style="position:relative;height:500px"><div class="crop" style="width:690px"><div class="lbl">First time: the dialog the agent’s request opens</div><div style="padding:16px 24px 20px;background:var(--soft)">${dlg}</div></div>`
  + L.ann(5, 'Grants are per session. “Always allow these” remembers the same grants for this agent, and Settings ▸ AI can undo that', 760, 150, { w: 330 })
  + L.ann(6, 'A version is saved before the agent touches anything, so the whole session can be reverted from AI activity', 760, 270, { w: 330 })
  + `</div>`;

module.exports = {
  id: 'S38', file: 's38-agent-at-work', title: 'An agent at work', width: 1440, height: 1330,
  html: `<div class="s38">${html}${below}</div>`,
  caption: L.caption({
    id: 'S38', title: 'An agent at work',
    scene: 'The writer is in chapter 11 while Claude Code drafts chapters 12–14 from the outline. The chip in the strip says so; its popover shows the goal, scope, grants, quotas and last calls. Two blue draft scenes already wait under chapter 12. Below: the dialog the agent’s first request opened.',
    on: 'the Text view of chapter 11; the Navigator with chapters 12–14 marked “agent” and two blue italic draft scenes (“draft” tag) under chapter 12; the strip chip “✦ Claude Code · drafting ch. 12 · 7 proposals · ■” and Review 19 (the usual 12 plus the agent’s 7); the popover (Goal, Scope, Grants read ✓ propose ✓ draft scenes ✓ change the text directly ✕, Quota 7 of 50 waiting · 5,880 of 20,000 words, Last calls, Pause · Stop); the dialog “Claude Code wants to work on The Blue Lamp” with its checklist, scope, quotas, “A version is saved first (always)” and Allow for this session · Always allow these · Deny',
    off: 'an agent writing into the manuscript text, a bell, the agent’s own window, a setting that lets agents change the text without you',
  }),
};
