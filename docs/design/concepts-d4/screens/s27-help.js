// S27: Help. The Help window (search box, contents, a topic with a small drawing); a small tutorial bubble on the + between two rows of the chapter list.
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
.coach.up:after{bottom:auto;top:-9px;left:226px;border:9px solid transparent;border-top:0;border-bottom-color:#2b2c2f}
.plusr{position:absolute;z-index:43;width:18px;height:18px;border-radius:50%;border:1.5px solid var(--accent);background:#fff;color:var(--accent);font:600 14px/15px var(--ui);text-align:center;box-sizing:border-box}
.insl{position:absolute;z-index:42;height:2px;background:var(--accent);border-radius:1px}
.ring{position:absolute;border-radius:8px;box-shadow:0 0 0 2px #fff,0 0 0 4px var(--accent);z-index:44}
</style>`;

// a small line drawing of the control the topic talks about: the chapter list with the + between two rows and its menu
const sketch = `<svg width="250" height="140" viewBox="0 0 250 140" fill="none" stroke="#8a8c90" stroke-width="1.3" stroke-linecap="round">
  <rect x="1" y="1" width="248" height="138" rx="7"/>
  <rect x="12" y="11" width="226" height="20" rx="5"/><circle cx="23" cy="21" r="4"/><path d="m26 24 3 3"/><path d="M36 21h80" stroke="#c2c3c6"/>
  <path d="M14 46h10M32 46h110"/>
  <path d="M14 58h196" stroke="#2f6fb3" stroke-width="1.6"/><circle cx="224" cy="58" r="8" stroke="#2f6fb3" stroke-width="1.6" fill="#fff"/><path d="M224 54v8M220 58h8" stroke="#2f6fb3" stroke-width="1.6"/>
  <path d="M14 70h10M32 70h96"/>
  <rect x="8" y="80" width="150" height="20" rx="4" fill="#eef3fa" stroke="none"/><path d="M14 90h10M32 90h100" stroke="#3a3c40" stroke-width="2"/>
  <path d="M40 108v24" stroke="#c2c3c6"/><path d="M48 112h70M48 126h84" stroke="#b0b2b6"/>
  <rect x="166" y="70" width="74" height="62" rx="5" fill="#fff" stroke="#b0b2b6"/>
  <g font-family="Inter, sans-serif" font-size="10.5" fill="#3a3c40" stroke="none"><text x="176" y="88">Scene</text><text x="176" y="106" fill="#2f6fb3" font-weight="600">Chapter</text><text x="176" y="124">Part</text></g>
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
      <p>In the chapter list, hover between two rows and click the <b>+</b> that appears at the right; choose <b>Chapter</b>. The new chapter starts there, with the cursor in its heading.</p>
      <div class="fig">${sketch}</div>
      <p>Or type <b>Chapter 8</b> on its own line, and accept the heading Libreto proposes. <kbd>Ctrl+Enter</kbd> starts a new chapter at the cursor; Undo puts it back.</p>
      <p class="rel">Related: <span class="lk">Parts</span> · <span class="lk">Scene breaks</span> · <span class="lk">Tutorial: chapters</span></p>
    </div>
  </div>
</div>`;

const coach = `<div class="ring" style="left:274px;top:500px;width:22px;height:22px;border-radius:50%"></div>
<span class="plusr" style="left:276px;top:502px">+</span><div class="insl" style="left:14px;top:510px;width:256px"></div>
<div class="coach up" style="left:40px;top:540px"><div class="st">Tutorial · step 2 of 4</div>Click the + to add a chapter between 8 and 9. <span style="color:#c7c8cc">Esc leaves</span></div>`;

const html = L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  left: L.navigator({ rows: L.sample.navRows.map((r) => ({ ...r, notes: 0, tasks: 0, fixes: 0 })) }),
  page: L.pageCol(col, { paddingTop: 40 }),
  strip: { reviewCount: 12 },
  status: { style: 'Plain', words: '2,418 words', pages: 'p. 146 of 248' },
  ask: 'normal',
  extra: css + fwin + coach
    + L.ann(1, 'F1 opens Help at the topic of what has focus; the search box finds the rest', 960, 100, { w: 330 })
    + L.ann(2, 'Each topic is a short text with a small drawing of the control it talks about', 1100, 300, { w: 230 })
    + L.ann(3, 'Help ▸ Tips lists the tips Libreto can give', 566, 528, { w: 160 })
    + L.ann(4, 'A tutorial runs in your own project, its bubble on the real control; Esc leaves it at any step; never required', 14, 640, { w: 270 })
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
    scene: 'F1 with the chapter list focused opened the Help window at “Add a chapter”, floating over the page. The chapters tutorial is running: its small bubble points at the real + between chapters 8 and 9 of the open chapter list.',
    on: 'the chapter list (chapter 7 open), the page, the Help window with its search box, the contents at the left (with Tutorials and Tips), the topic text with a line drawing of the chapter list, the + between two rows and its Scene · Chapter · Part menu, the tutorial bubble “step 2 of 4” with a ring around the + between chapters 8 and 9, the Ask button, the status bar',
    off: 'a Help column, a required tutorial, the Reference panel',
  }),
};
