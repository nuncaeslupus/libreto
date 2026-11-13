// S27: Help. The Help window (search box, contents, a topic with a small drawing); a small tutorial bubble on "+ New chapter".
const L = require('../lib');
const P = L.sample.chapter7Plain;

const col = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>`
  + P.map((p, i) => `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`).join('');

const css = `<style>
.fwin .hb{display:flex;flex:1;min-height:0}
.fwin .toc{width:210px;flex:none;background:var(--soft);border-right:1px solid var(--line2);padding:12px 8px;font-size:13px}
.fwin .toc div{padding:6px 12px;border-radius:7px;color:var(--ink2)}
.fwin .toc div.on{background:#fff;box-shadow:0 0 0 1px var(--line);font-weight:600;color:var(--ink)}
.fwin .toc .sub{padding:4px 12px 4px 26px;font-size:12.5px}
.fwin .toc .sub.on{background:var(--accent-tint);box-shadow:none;font-weight:600}
.fwin .topic{flex:1;min-width:0;padding:22px 30px;overflow:hidden}
.fwin .topic .fig{margin:4px 0 16px}
.fwin .topic .rel{font:12.5px var(--ui);color:var(--ink3);margin-top:16px}
.fwin .toc .tips{margin-top:8px;border-top:1px solid var(--line2);border-radius:0;padding-top:10px}
.fwin-h .hs{margin:0 0 0 18px;width:320px;height:28px;padding:0 9px;background:#fff}
.fwin .topic h2{margin:0 0 12px;font:600 19px var(--ui)}
.fwin .topic p{margin:0 0 11px;font:15px/1.6 var(--text);color:var(--ink)}
.fwin .topic kbd{font-size:11.5px}
.fwin-h .ib{margin-left:auto}
.coach{width:236px;font-size:12.5px;padding:9px 12px}
.coach:after{content:"";position:absolute;left:120px;bottom:-9px;border:9px solid transparent;border-bottom:0;border-top-color:#2b2c2f}
.coach .st{color:#c7c8cc;font-size:11.5px;margin-bottom:4px}
.ring{position:absolute;border-radius:8px;box-shadow:0 0 0 2px #fff,0 0 0 4px var(--accent);z-index:44}
</style>`;

// a small line drawing of the control the topic talks about: the chapter list with “+ New chapter”
const sketch = `<svg width="250" height="176" viewBox="0 0 250 176" fill="none" stroke="#8a8c90" stroke-width="1.3" stroke-linecap="round">
  <rect x="1" y="1" width="248" height="174" rx="7"/>
  <rect x="12" y="11" width="226" height="20" rx="5"/><circle cx="23" cy="21" r="4"/><path d="m26 24 3 3"/><path d="M36 21h80" stroke="#c2c3c6"/>
  <path d="M14 46h10M32 46h110" /><path d="M14 64h10M32 64h96"/>
  <rect x="8" y="73" width="234" height="20" rx="4" fill="#eef3fa" stroke="none"/><path d="M14 83h10M32 83h120" stroke="#3a3c40" stroke-width="2"/>
  <path d="M40 101v34" stroke="#c2c3c6"/><path d="M48 104h88M48 119h104M48 133h70" stroke="#b0b2b6"/>
  <path d="M1 146h248" stroke="#d6d7d9"/>
  <rect x="62" y="152" width="126" height="18" rx="5" stroke="#2f6fb3" stroke-width="1.6"/>
  <text x="125" y="165" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#2f6fb3" stroke="none">+ New chapter</text>
</svg>`;

const toc = [
  ['The page'], ['Chapters and scenes'], ['Add a chapter', 'sub on'], ['Parts', 'sub'], ['Scene breaks', 'sub'],
  ['Ask'], ['Notes and Review'], ['Research and the Codex'], ['Book'], ['Settings and keys'], ['Tutorials'], ['Tips', 'tips'],
];
const fwin = `<div class="fwin" style="left:560px;top:96px;width:850px;height:590px">
  <div class="fwin-h"><b>Help</b><div class="filter hs">${L.icons.magnifier}<span>Search help</span></div><span class="ib">✕</span></div>
  <div class="hb">
    <div class="toc">${toc.map(([t, c]) => `<div${c ? ` class="${c}"` : ''}>${t}</div>`).join('')}</div>
    <div class="topic">
      <h2>Add a chapter</h2>
      <p>Click <b>+ New chapter</b> at the bottom of the chapter list: the new chapter comes after the current one, with the cursor in its heading.</p>
      <div class="fig">${sketch}</div>
      <p>Or type <b>Chapter 8</b> on its own line, and accept the heading Libreto proposes. <kbd>Ctrl+Enter</kbd> starts a new chapter at the cursor; Undo puts it back.</p>
      <p class="rel">Related: <span class="lk">Parts</span> · <span class="lk">Scene breaks</span> · <span class="lk">Tutorial: chapters</span></p>
    </div>
  </div>
</div>`;

const coach = `<div class="ring" style="left:10px;top:830px;width:300px;height:32px"></div>
<div class="coach" style="left:22px;top:748px"><div class="st">Tutorial · step 2 of 4</div>This adds a chapter after the current one. <span style="color:#c7c8cc">Esc leaves</span></div>`;

const html = L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  left: L.navigator({ rows: L.sample.navRows }),
  page: L.pageCol(col, { paddingTop: 40 }),
  strip: { reviewCount: 12 },
  status: { style: 'Plain', words: '2,418 words', pages: 'book p. ~146/248', review: '12 to review' },
  ask: 'normal',
  extra: css + fwin + coach
    + L.ann(1, 'F1 opens Help at the topic of what has focus; the search box finds the rest', 640, 69)
    + L.ann(2, 'Each topic is a short text with a small drawing of the control it talks about', 1100, 300, { w: 230 })
    + L.ann(3, 'Help ▸ Tips lists the tips Libreto can give', 566, 528, { w: 160 })
    + L.ann(4, 'A tutorial runs in your own project, its bubble on the real control; Esc leaves it at any step; never required', 14, 640, { w: 260 })
    + L.ann(5, '“How do I add a chapter?” typed in Ask answers from the same help, with a link', 1040, 806, { w: 230, r: true }),
});

module.exports = {
  id: 'S27',
  file: 's27-help',
  title: 'Help',
  width: 1440,
  height: 900,
  html,
  caption: L.caption({
    id: 'S27', title: 'Help',
    scene: 'F1 with the chapter list focused opened the Help window at “Add a chapter”, floating over the page. The chapters tutorial is running: its small bubble points at the real “+ New chapter” button at the bottom of the open chapter list.',
    on: 'the chapter list (chapter 7 open), the page, the Help window with its search box, the contents at the left (with Tutorials and Tips), the topic text with a line drawing of the chapter list and its + New chapter button, the tutorial bubble “step 2 of 4” with a ring around “+ New chapter”, the Ask button, the status bar',
    off: 'a Help column, a required tutorial, the Reference panel',
  }),
};
