// S25: The AI, in Settings. The Settings window with the AI tab selected, over the dimmed page:
// the disclosure first, then provider, model, level, when Libreto reads the book, what is sent, cost.
const L = require('../lib');
const P = L.sample.chapter7Plain;

const col = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>`
  + P.map((p, i) => `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`).join('');

const warnIcon = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b5651d" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><path d="M12 3.5 2.8 19.5h18.4z"/><path d="M12 9.5v5M12 17.2v.3"/></svg>`;

const css = `<style>
.setw .sh{display:flex;align-items:center;gap:12px;padding:12px 16px 12px 20px;border-bottom:1px solid var(--line2)}
.setw .sh b{font:600 15px var(--ui)}
.setw .sh .filter{margin:0 0 0 18px;width:340px;height:30px;padding:0 10px}
.setw .sh .x{color:var(--ink3);font-size:14px}
.setw .tabs2{width:170px;flex:none;background:var(--soft);border-right:1px solid var(--line2);padding:10px 8px;font-size:13px}
.setw .tabs2 div{padding:7px 12px;border-radius:7px;color:var(--ink2)}
.setw .tabs2 div.on{background:#fff;box-shadow:0 0 0 1px var(--line);font-weight:600;color:var(--ink)}
.setw .main2{flex:1;min-width:0;padding:14px 22px 10px}
.aid .warn{display:flex;gap:12px;align-items:flex-start;background:#fdf4e7;border:1px solid #ecc08a;border-radius:9px;padding:10px 14px;color:#5a3b10;font-size:13px;line-height:1.5;margin-bottom:4px}
.aid .warn svg{flex:none;margin-top:1px}
.aid .sec{display:flex;gap:16px;padding:10px 0;border-top:1px solid var(--line2)}
.aid .sec:first-of-type{border-top:0}
.aid .sec>.k{width:132px;flex:none;font-weight:600;font-size:12.5px;padding-top:3px}
.aid .sec>.v{flex:1;min-width:0;font-size:13px;line-height:1.5}
.aid .lv{display:flex;gap:9px;align-items:baseline;padding:2px 0}
.aid .lv .rd{position:relative;top:2px}
.aid .lv b{font-weight:600;width:72px;flex:none}
.aid .lv.w b{width:170px}
.aid .lv span{color:var(--ink2)}
.aid .gray{color:var(--ink3);font-size:12px;margin-top:2px}
.aid .pv{display:flex;gap:9px;align-items:center;padding:3px 0}
.aid .pv .inp{padding:3px 9px;font-size:12.5px;width:210px;color:var(--ink2);font-family:ui-monospace,monospace}
.aid .pv .ok{color:var(--fix);display:inline-flex;align-items:center;gap:4px;font-size:12px}
.aid .ddb{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--line);border-radius:7px;padding:3px 10px;font-size:12.5px;background:#fff;width:130px}
.aid .ddb:after{content:"▾";margin-left:auto;color:var(--ink3);font-size:10px}
</style>`;

const tabs = ['General', 'Editor', 'Keys', 'AI', 'Project', 'Privacy', 'Tips'];
const main = `<div class="aid">
    <div class="warn">${warnIcon}<div>AI text may raise copyright, contest and disclosure problems. Use it at your own risk. Libreto records what the AI wrote and can report it (Reports ▸ What the AI wrote).</div></div>
    <div class="sec"><div class="k">Provider</div><div class="v">
      <div class="pv"><span class="rd on"></span><b style="width:120px">Claude, with a key</b><span class="inp">sk-ant-••••••••••••3f9a</span><span class="ok">${L.icons.fix}connected</span></div>
      <div class="pv"><span class="rd"></span><span>or through Claude Desktop, where that is allowed</span></div>
      <div class="gray">One provider at a time; more to come.</div>
    </div></div>
    <div class="sec"><div class="k">Model</div><div class="v" style="display:flex;align-items:center;gap:12px"><span class="ddb">Sonnet</span><span class="gray" style="margin:0">also shown in the header of every conversation</span></div></div>
    <div class="sec"><div class="k">Level of help</div><div class="v">
      <div class="lv"><span class="rd"></span><b>Off</b><span>Nothing is sent. Ask still finds, looks up and runs commands.</span></div>
      <div class="lv"><span class="rd"></span><b>Quiet</b><span>Answers only when you ask. No reviews, no proposals.</span></div>
      <div class="lv"><span class="rd on"></span><b>Reviews</b><span>Also reviews a chapter when you ask, and names scenes in the background.</span></div>
      <div class="lv"><span class="rd"></span><b>Proactive</b><span>May propose changes in the margin on its own as you write.</span></div>
    </div></div>
    <div class="sec"><div class="k">When Libreto reads the book</div><div class="v">
      <div class="lv w"><span class="rd"></span><b>Only when asked</b></div>
      <div class="lv w"><span class="rd on"></span><b>At the end of a session</b><span>default</span></div>
      <div class="lv w"><span class="rd"></span><b>Every 30 minutes</b></div>
      <div class="gray">Reading costs tokens; the index answers most things.</div>
    </div></div>
    <div class="sec"><div class="k">What is sent</div><div class="v">The open scene and the Codex entries it names, never the whole book at once. <span class="lk">Open the AI log</span></div></div>
    <div class="sec"><div class="k">This month</div><div class="v">1.2 M tokens · 3.40 €</div></div>
  </div>`;

const dlg = `<div class="dlg setw" style="left:270px;top:84px;width:900px;height:730px">
  <div class="sh"><b>Settings</b><div class="filter">${L.icons.magnifier}<span>Search all settings</span></div><span class="x" style="margin-left:auto">?</span><span class="x">✕</span></div>
  <div style="display:flex;flex:1;min-height:0">
    <div class="tabs2">${tabs.map((t) => `<div${t === 'AI' ? ' class="on"' : ''}>${t}</div>`).join('')}</div>
    <div class="main2">${main}</div>
  </div>
</div>`;

const html = L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  strip: { reviewCount: 12 },
  page: L.pageCol(col, { paddingTop: 40 }),
  status: { style: 'Plain', words: '2,418 words', pages: 'book p. ~146/248', review: '12 to review' },
  ask: 'normal',
  content: `<div class="scrim"></div>`,
  extra: css + dlg
    + L.ann(1, 'The disclosure is always on this screen, with a warning sign; never behind a link', 1182, 160, { w: 230 })
    + L.ann(2, 'One provider at a time: Claude with a key, or through Claude Desktop where allowed', 1182, 262, { w: 230 })
    + L.ann(3, 'The model is shown here and in the header of every conversation', 1182, 352, { w: 230 })
    + L.ann(4, 'Four levels, one line each on what they mean', 1182, 450, { w: 230 })
    + L.ann(5, 'Reading the book costs tokens, so by default it happens once, at the end of a session', 1182, 530, { w: 230 })
    + L.ann(6, 'Reports menu (☰): What the AI wrote · AI log · Statistics', 20, 700, { w: 230 }),
});

module.exports = {
  id: 'S25',
  file: 's25-ai-connected',
  title: 'The AI, in Settings',
  width: 1440,
  height: 900,
  html,
  caption: L.caption({
    id: 'S25', title: 'The AI, in Settings',
    scene: 'Settings, AI tab, over the dimmed page (the gray Ask button opens it when no AI is connected; here Claude is). The disclosure comes first, with a warning sign. Below it: the provider, the model, the level of help with what each level means, when Libreto reads the book, what is sent, and this month’s use. Libreto works fully without any of it.',
    on: 'the Settings window (search box, tabs General · Editor · Keys · AI · Project · Privacy · Tips, AI selected): the warning box, Provider (Claude with a key, connected; or through Claude Desktop), Model Sonnet, Level of help (Off · Quiet · Reviews · Proactive), When Libreto reads the book (Only when asked · At the end of a session · Every 30 minutes) with “reading costs tokens; the index answers most things”, What is sent with Open the AI log, This month 1.2 M tokens · 3.40 €; the dimmed page and the Ask button behind',
    off: 'a provider icon in the status bar, a “Read more” link hiding the disclosure, two providers at once, a separate AI menu (its reports live in Reports)',
  }),
};
