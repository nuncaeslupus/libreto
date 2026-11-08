// S25: The AI, connected or not. AI ▸ Connect… over the dimmed page: the disclosure first, then connection, level, models, what is sent, cost.
const L = require('../lib');
const P = L.sample.chapter7Plain;

const col = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>`
  + P.map((p, i) => `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`).join('');

const warnIcon = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b5651d" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><path d="M12 3.5 2.8 19.5h18.4z"/><path d="M12 9.5v5M12 17.2v.3"/></svg>`;

const css = `<style>
.aid .warn{display:flex;gap:12px;align-items:flex-start;background:#fdf4e7;border:1px solid #ecc08a;border-radius:9px;padding:12px 14px;color:#5a3b10;font-size:13px;line-height:1.5;margin-bottom:6px}
.aid .warn svg{flex:none;margin-top:1px}
.aid .sec{display:flex;gap:16px;padding:13px 0;border-top:1px solid var(--line2)}
.aid .sec:first-of-type{border-top:0}
.aid .sec>.k{width:118px;flex:none;font-weight:600;font-size:12.5px;padding-top:3px}
.aid .sec>.v{flex:1;min-width:0;font-size:13px;line-height:1.5}
.aid .lv{display:flex;gap:9px;align-items:baseline;padding:3px 0}
.aid .lv .rd{position:relative;top:2px}
.aid .lv b{font-weight:600;width:72px;flex:none}
.aid .lv span{color:var(--ink2)}
.aid .mr{display:flex;gap:10px;align-items:center;padding:3px 0}
.aid .mr .k2{width:230px;flex:none;color:var(--ink2)}
.aid .mr .inp{padding:3px 9px;font-size:12.5px;display:inline-flex;align-items:center;gap:6px;width:150px}
.aid .mr .inp.dd:after{margin-left:auto}
.aid .conn{display:flex;gap:10px;align-items:center}
.aid .conn .logo{width:14px;height:14px}
</style>`;

const dlg = `<div class="dlg aid" style="left:390px;top:184px;width:660px">
  <div class="dlg-h">AI<span class="x" style="margin-left:auto">?</span><span class="x" style="margin-left:0">✕</span></div>
  <div class="dlg-b" style="padding:16px 20px 6px">
    <div class="warn">${warnIcon}<div>AI text may raise copyright, contest and disclosure problems. Use it at your own risk. Libreto records what the AI wrote and can report it (Highlights ▸ AI-written, Statistics).</div></div>
    <div class="sec"><div class="k">Connection</div><div class="v"><div class="conn">${L.icons.logo}<span>Claude · connected with a key</span><span class="btn" style="margin-left:auto">Disconnect</span></div></div></div>
    <div class="sec"><div class="k">Level of help</div><div class="v">
      <div class="lv"><span class="rd"></span><b>Off</b><span>Nothing is sent. Ask still finds, looks up and runs commands.</span></div>
      <div class="lv"><span class="rd"></span><b>Quiet</b><span>Answers only when you ask. No reviews, no proposals.</span></div>
      <div class="lv"><span class="rd on"></span><b>Reviews</b><span>Also reviews a chapter when you ask, and names scenes in the background.</span></div>
      <div class="lv"><span class="rd"></span><b>Proactive</b><span>May add tasks in the margin on its own as you write.</span></div>
    </div></div>
    <div class="sec"><div class="k">Models</div><div class="v">
      <div class="mr"><span class="k2">Big work</span><span class="inp dd"><span style="flex:1">Claude Sonnet</span></span></div>
      <div class="mr"><span class="k2">Small tasks (scene names, aliases, note sorting)</span><span class="inp dd"><span style="flex:1">Claude Haiku</span></span></div>
      <div class="mr"><span class="k2">Local model</span><span style="color:var(--ink3)">later</span></div>
    </div></div>
    <div class="sec"><div class="k">What is sent</div><div class="v">The open scene and the Codex entries it names, never the whole book at once. <span class="lk">Show the log</span></div></div>
    <div class="sec"><div class="k">Cost this month</div><div class="v">$1.42</div></div>
  </div>
</div>`;

const html = L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  page: L.pageCol(col, { paddingTop: 40 }),
  status: { style: 'Plain', words: '2,418 words', pages: 'book p. ~146/248', fixes: '3 fixes' },
  ask: 'normal',
  content: `<div class="scrim"></div>`,
  extra: css + dlg
    + L.ann(1, 'The disclosure is always on this screen, with a warning sign; never behind a link', 1062, 236, { w: 240 })
    + L.ann(2, 'Four levels, one line each on what they mean', 1062, 420, { w: 240 })
    + L.ann(3, 'One model for the big work, a small one for short judgments; finding names in the text is the index’s job, not a model’s', 1062, 540, { w: 240 })
    + L.ann(4, 'What is sent, and a log of it', 130, 640, { w: 220 })
    + L.ann(5, 'Libreto works fully without any of this: Off keeps search, look-up and commands', 130, 420, { w: 220 }),
});

module.exports = {
  id: 'S25',
  file: 's25-ai-connected',
  title: 'The AI, connected or not',
  width: 1440,
  height: 900,
  html,
  caption: L.caption({
    id: 'S25', title: 'The AI, connected or not',
    scene: 'AI ▸ Connect… (or the gray Ask button) over the dimmed page. The disclosure comes first, with a warning sign. Below it: the connection, the level of help with what each level means, which model does the big work and which the small tasks, what is sent, and the cost this month.',
    on: 'the AI dialog: the warning box, Connection (Claude, connected with a key, Disconnect), Level of help (Off · Quiet · Reviews · Proactive), Models (big work, small tasks, local model later), What is sent with Show the log, Cost this month $1.42; the dimmed page and Ask button behind',
    off: 'a provider icon in the status bar, a “Read more” link hiding the disclosure, a key field, Claude Desktop setup',
  }),
};
