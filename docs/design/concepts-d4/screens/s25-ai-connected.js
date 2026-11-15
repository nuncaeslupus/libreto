// S25: The AI, in Settings. The Settings window with the AI tab selected, over the dimmed page:
// the disclosure first, then provider, model, level, budget, what is sent; an inset with the gray Ask button.
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
.aid .sec>.k{width:110px;flex:none;font-weight:600;font-size:12.5px;padding-top:3px}
.aid .sec>.v{flex:1;min-width:0;font-size:13px;line-height:1.5}
.aid .lv{display:flex;gap:9px;align-items:baseline;padding:2px 0}
.aid .lv .rd{position:relative;top:2px}
.aid .lv b{font-weight:600;width:72px;flex:none}
.aid .bud{display:flex;align-items:center;gap:10px;margin:7px 0 2px;color:var(--ink2);font-size:12.5px}
.aid .bud .bbar{width:200px;height:7px;border-radius:4px;background:#ecebe7;overflow:hidden;display:inline-block}
.aid .bud .bbar i{display:block;height:100%;background:var(--accent)}
.aid ul.sent{margin:0;padding-left:16px;color:var(--ink)}
.aid ul.sent li{margin:1px 0}
.aid .lv.w b{width:170px}
.aid .lv span{color:var(--ink2)}
.aid .gray{color:var(--ink3);font-size:12px;margin-top:2px}
.aid .pv{display:flex;gap:9px;align-items:center;padding:3px 0}
.aid .pv .inp{padding:3px 9px;font-size:12.5px;width:210px;color:var(--ink2);font-family:ui-monospace,monospace}
.aid .pv .ok{color:var(--fix);display:inline-flex;align-items:center;gap:4px;font-size:12px}
.aid .ddb{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--line);border-radius:7px;padding:3px 10px;font-size:12.5px;background:#fff;width:130px}
.aid .ddb:after{content:"▾";margin-left:auto;color:var(--ink3);font-size:10px}
</style>`;

const tabs = ['General', 'Editor', 'Styles', 'Keys', 'AI', 'Privacy', 'Tips'];
const main = `<div class="aid">
    <div class="warn">${warnIcon}<div><b>Before you use it:</b> AI text may raise copyright, contest and disclosure problems. Libreto records what the AI wrote and can report it: Reports ▸ <span class="lk">What the AI wrote</span>, <span class="lk">AI log</span>.</div></div>
    <div class="sec"><div class="k">Provider</div><div class="v">
      <div class="pv"><span class="rd on"></span><b style="width:120px">Claude, with a key</b><span class="inp">sk-ant-••••••••••••3f9a</span><span class="ok">${L.icons.fix}connected</span></div>
      <div class="pv"><span class="rd"></span><span>Claude, through Claude Desktop, where that is allowed</span></div>
      <div class="gray">One provider at a time; more to come.</div>
    </div></div>
    <div class="sec"><div class="k">Model</div><div class="v" style="display:flex;align-items:center;gap:12px"><span class="ddb">Sonnet</span><span class="gray" style="margin:0">also shown in the header of every conversation</span></div></div>
    <div class="sec"><div class="k">Level</div><div class="v">
      <div class="lv"><span class="rd"></span><b>Off</b><span>Nothing is ever sent.</span></div>
      <div class="lv"><span class="rd"></span><b>Quiet</b><span>Answers when you ask, nothing on its own.</span></div>
      <div class="lv"><span class="rd on"></span><b>Reviews</b><span>Also reads a chapter when you ask it to, names scenes, checks continuity when you ask.</span></div>
      <div class="lv"><span class="rd"></span><b>Proactive</b><span>Also reads what changed at the start of every session and, after a pause, while you write; proposes in Review.</span></div>
    </div></div>
    <div class="sec"><div class="k">Budget</div><div class="v">
      <div style="display:flex;align-items:center;gap:10px"><span>Each month, up to</span><span class="inp" style="padding:3px 9px;width:70px;font-size:12.5px">10.00 €</span></div>
      <div class="bud"><span class="bbar"><i style="width:32%"></i></span><span>3.20 € spent so far, of 10 €</span></div>
      <div class="gray">The AI stops at the limit and says so.</div>
    </div></div>
    <div class="sec"><div class="k">What is sent</div><div class="v"><ul class="sent">
      <li>The chapter or the passage you ask about, and the Codex entries it names.</li>
      <li>At Reviews and above: the chapter it is asked to read.</li>
      <li>At Proactive: what changed since the last session.</li>
      <li>Never the whole book at once. Every request is in the <span class="lk">AI log</span>.</li>
    </ul></div></div>
    <div class="gray" style="padding:6px 0 0 148px">Libreto works fully without any of it.</div>
  </div>`;

const dlg = `<div class="dlg setw" style="left:300px;top:108px;width:870px;height:740px">
  <div class="sh"><b>Settings</b><div class="filter">${L.icons.magnifier}<span>Search all settings</span></div><span class="x" style="margin-left:auto">✕</span></div>
  <div style="display:flex;flex:1;min-height:0">
    <div class="tabs2">${tabs.map((t) => `<div${t === 'AI' ? ' class="on"' : ''}>${t}</div>`).join('')}</div>
    <div class="main2">${main}</div>
  </div>
</div>`;

// inset: with no AI, the gray Ask button still works and its bottom row opens this tab
const inset = `<div class="crop" style="position:absolute;left:16px;top:560px;width:270px;z-index:32">
  <div class="lbl">No AI connected</div>
  <div style="position:relative;height:214px;background:var(--paper)">
    <div class="ask noai" style="position:absolute;left:10px;right:10px;bottom:62px;width:auto;max-height:none">
      <div class="ask-res" style="position:static;box-shadow:none;border:0">
        <div class="grp"><div class="gh">Go to</div><div class="r"><span class="k">Chapter</span><span class="t">7 Lena’s warning</span></div></div>
        <div class="grp"><div class="gh">Ask</div><div class="r cur gray"><span class="t"><span class="lk">Connect an AI to ask questions</span></span></div></div>
      </div>
    </div>
    <span class="askbtn off" style="right:12px;bottom:10px">${L.icons.logo}</span>
  </div>
</div>`;

const html = L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  strip: { reviewCount: 12 },
  page: L.pageCol(col, { paddingTop: 40 }),
  status: { style: 'Plain', words: '2,418 words', pages: 'p. 146 of 248' },
  ask: 'normal',
  content: `<div class="scrim"></div>`,
  extra: css + dlg + inset
    + L.ann(1, 'The disclosure is always on this screen, with a warning sign', 1182, 172, { w: 230 })
    + L.ann(2, 'One provider at a time: Claude with a key, or through Claude Desktop where that is allowed; the model is shown here and in every conversation', 1182, 254, { w: 230 })
    + L.ann(3, 'The level, one line each: Off · Quiet · Reviews · Proactive', 1182, 420, { w: 230 })
    + L.ann(4, 'A budget keeps it honest: a monthly amount, what is spent so far, and a stop at the limit', 1182, 560, { w: 230 })
    + L.ann(5, 'What is sent, in plain words', 1182, 680, { w: 230 })
    + L.ann(6, 'With no AI the Ask button is gray but works; its bottom row opens this tab', 16, 500, { w: 250 }),
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
    scene: 'Settings, AI tab, over the dimmed page. The disclosure first, with a warning sign; then the provider and the model, the level with one line each, the budget, and what is sent. An inset shows the case with no AI: the gray Ask button still finds, looks up and runs commands, and its bottom row opens this tab. Libreto works fully without any of it.',
    on: 'the Settings window (search box, tabs General · Editor · Styles · Keys · AI · Privacy · Tips, AI selected, ✕): the warning box with Reports ▸ What the AI wrote, AI log; Provider (Claude with a key, connected; or through Claude Desktop); Model Sonnet; Level (Off · Quiet · Reviews · Proactive, Reviews selected); Budget (10.00 € a month, 3.20 € spent so far, “the AI stops at the limit and says so”); What is sent, as a list; the inset with the gray Ask button and its “Connect an AI to ask questions” row',
    off: 'a “?” button, a provider icon in the status bar, a “Read more” link hiding the disclosure, two providers at once, an AI menu (its reports live in Reports)',
  }),
};
