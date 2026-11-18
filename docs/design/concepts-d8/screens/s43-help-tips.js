// S43: F1 Help on the topic of what has focus, a tip card, and a tutorial bubble on the Review button (replaces d7 S27).
const L = require('../lib');
const K = require('../d8-kit-s37');

const css = `<style>
.s43 .hb{display:flex;flex:1;min-height:0}
.s43 .toc{width:200px;flex:none;background:var(--soft);border-right:1px solid var(--line2);padding:12px 8px;font-size:13px}
.s43 .toc div{padding:6px 12px;border-radius:7px;color:var(--ink2)}
.s43 .toc div.on{background:#fff;box-shadow:0 0 0 1px var(--line);font-weight:600;color:var(--ink)}
.s43 .toc .sub{padding:4px 12px 4px 24px;font-size:12.5px}
.s43 .toc .sub.on{background:var(--accent-tint);box-shadow:none;font-weight:600}
.s43 .toc .tips{margin-top:8px;border-top:1px solid var(--line2);border-radius:0;padding-top:10px}
.s43 .topic{flex:1;min-width:0;padding:20px 28px;overflow:hidden}
.s43 .topic h2{margin:0 0 4px;font:600 19px var(--ui)}
.s43 .topic .for{font:12px var(--ui);color:var(--ink3);margin-bottom:12px}
.s43 .topic p{margin:0 0 10px;font:14.5px/1.6 var(--text);color:var(--ink)}
.s43 .topic .fig{margin:6px 0 12px}
.s43 .topic .rel{font:12.5px var(--ui);color:var(--ink3);margin-top:14px}
.s43 .fwin-h .hs{margin:0 0 0 18px;width:290px;height:28px;padding:0 9px;background:#fff}
.s43 .fwin-h .ib{margin-left:auto}
.s43 .focusring{position:absolute;z-index:44;border-radius:7px;box-shadow:0 0 0 2px #fff,0 0 0 4px var(--accent)}
.s43 .tipc{position:absolute;z-index:42;width:400px;background:var(--paper);border:1px solid #dcdcd8;border-radius:12px;box-shadow:0 14px 40px rgba(0,0,0,.16),0 2px 6px rgba(0,0,0,.06);padding:12px 14px 12px;font-size:13px;line-height:1.5}
.s43 .tipc .th{display:flex;align-items:center;gap:8px;font:600 10.5px var(--ui);letter-spacing:.08em;text-transform:uppercase;color:var(--ink3);margin-bottom:5px}
.s43 .tipc .th svg{color:var(--accent)}
.s43 .tipc .th .x{margin-left:auto;font-size:13px;letter-spacing:0}
.s43 .tipc .bt{display:flex;gap:8px;margin-top:10px}
.s43 .tipc .btn{height:26px}
.s43 .name{outline:0;border-radius:3px;box-shadow:0 0 0 2px #fff,0 0 0 4px var(--accent);background:var(--accent-tint)}
.s43 .coach{position:absolute;z-index:46;width:290px;background:#2b2c2f;color:#f1f1ef;border-radius:10px;padding:10px 13px 10px;font-size:12.5px;line-height:1.5;box-shadow:0 10px 30px rgba(0,0,0,.3)}
.s43 .coach:before{content:"";position:absolute;right:46px;top:-8px;border:8px solid transparent;border-top:0;border-bottom-color:#2b2c2f}
.s43 .coach .st{display:flex;align-items:center;color:#c7c8cc;font-size:11.5px;margin-top:8px;gap:8px}
.s43 .coach .st b{font-weight:500}
.s43 .coach .st span.lv{margin-left:auto;color:#fff;border:1px solid #6a6b6f;border-radius:6px;padding:1px 9px}
.s43 .coach .dots{display:flex;gap:4px}
.s43 .coach .dots i{width:6px;height:6px;border-radius:50%;background:#6a6b6f}
.s43 .coach .dots i.on{background:#fff}
.s43 .cur2{position:absolute;z-index:45}
</style>`;

// small drawing of the Show menu in the status bar
const sketch = `<svg width="330" height="150" viewBox="0 0 330 150" fill="none" stroke="#8a8c90" stroke-width="1.3" stroke-linecap="round">
  <rect x="1" y="1" width="328" height="148" rx="7"/>
  <rect x="12" y="120" width="306" height="20" rx="4" stroke="#c2c3c6"/><path d="M20 130h44M76 130h60" stroke="#c2c3c6"/>
  <rect x="226" y="122" width="48" height="16" rx="4" stroke="#2f6fb3" stroke-width="1.8" fill="#fff"/><path d="M233 130h26" stroke="#2f6fb3" stroke-width="1.6"/>
  <rect x="170" y="14" width="146" height="100" rx="6" fill="#fff" stroke="#b0b2b6"/>
  <g font-family="Inter, sans-serif" font-size="10.5" fill="#3a3c40" stroke="none"><text x="180" y="32">Marks</text><text x="180" y="48">Notes: mine · all · none</text><text x="180" y="64">Scene names</text><text x="180" y="80">Whole book · one chapter</text><text x="180" y="100" fill="#2f6fb3" font-weight="600">Show names and styles</text></g>
  <path d="M250 114v6" stroke="#2f6fb3"/>
  <g font-family="Inter, sans-serif" font-size="10" fill="#8a8c90" stroke="none"><text x="14" y="30">Show decides what the</text><text x="14" y="44">text wears while you</text><text x="14" y="58">write, never what is</text><text x="14" y="72">in the book.</text></g>
</svg>`;

const toc = [['The page'], ['The strip and the status bar'], ['Show', 'sub on'], ['Words and goals', 'sub'], ['Marks and cards'], ['Notes and Review'], ['Ask'], ['The Brief and the Codex'], ['Pages and export'], ['Settings and keys'], ['Tutorials'], ['Tips', 'tips']];
const fwin = `<div class="fwin" style="left:610px;top:196px;width:810px;height:620px">
  <div class="fwin-h"><b>Help</b><div class="filter hs">${L.icons.magnifier}<span>Search help</span></div><span class="ib">✕</span></div>
  <div class="hb"><div class="toc">${toc.map(([t, c]) => `<div${c ? ` class="${c}"` : ''}>${t}</div>`).join('')}</div>
    <div class="topic"><h2>Show: what the text wears</h2><div class="for">You pressed F1 with “Show” focused in the status bar</div>
      <p>Open <b>Show ▾</b> at the right of the status bar to choose what you see while you write: the marks, whose notes (<b>mine</b>, <b>all</b> or <b>none</b>), scene names, and whether the text is the whole book or one chapter.</p>
      <div class="fig">${sketch}</div>
      <p><b>Show names and styles</b> (<kbd>Ctrl+Shift+A</kbd>) tints people, places and things and marks styled words. It changes only what you see, never the book.</p>
      <p class="rel">Related: <span class="lk">Marks and cards</span> · <span class="lk">Notes and Review</span> · <span class="lk">Tutorial: Review</span></p></div></div></div>`;

const P = [
  '<span class="name" id="nm">Lena</span> set a glass down hard enough to make it ring. “Half the city’s called Kit,” she said, and went on drying.',
  'Vega took the stool at the end of the bar, the one with a view of the back-room door. “Has Kit been in?”',
  '“Nobody came in at nine,” Lena said. “Nobody’s been in that room since Tuesday.”',
  'It was a good lie. Vega had heard worse from people who were paid to tell them.',
];
const col = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>` + P.map((p, i) => `<div class="para"><p${i === 0 ? ' class="first"' : ''}>${p}</p></div>`).join('');

const tip = `<div class="tipc" style="left:24px;top:496px"><div class="th">${L.icons.info}Tip<span class="x">✕</span></div>
  <div><b style="font-weight:600">Look at a name without leaving the page.</b> Hold <kbd>Ctrl</kbd> and click a name, or right-click ▸ Look up, to see its card beside the text.</div>
  <div class="bt"><span class="btn pri">Show me</span><span class="btn q">Not this one again</span></div></div>`;

const coach = `<div class="focusring" style="left:1262px;top:59px;width:92px;height:30px;border-radius:8px"></div>
<div class="coach" style="left:1066px;top:104px"><div>Press <b>Review</b>. It opens the margin beside your text; press it again to close.</div>
 <div class="st"><span class="dots"><i></i><i class="on"></i><i></i><i></i></span><b>Step 2 of 4</b><span class="lv">Leave</span></div></div>`;

const html = css + K.css + L.win({
  view: 'Text', crumbs: L.sample.crumbs7, strip: { review: 12 },
  page: L.pageCol(col, { paddingTop: 36 }),
  status: { style: 'Plain', words: '812 of 1,000 today', goal: 81, pages: 'p. 146 of 248' },
  ask: 'normal',
  extra: fwin + tip + coach
    + `<div class="focusring" style="left:1058px;top:874px;width:76px;height:24px"></div>`
    + L.ann(1, 'F1 opens Help at the topic of what has focus here, the Show button; the drawing shows that control. The search box finds anything else', 620, 100, { w: 320 })
    + L.ann(2, '“Show me” plays the tip on your own text: it rings the name and opens the card, once', 24, 400, { w: 330 })
    + L.ann(3, 'A tip appears once, never over typing. “Not this one again” keeps it away; Help ▸ Tips lists all of them', 24, 650, { w: 330 })
    + L.ann(4, 'A tutorial points at the real control in your own project; “Leave” ends it at any step and it is never required', 24, 760, { w: 330 })
    + L.ann(5, 'The focus ring shows what F1 was asked about', 760, 826, { w: 250 }),
});

module.exports = {
  id: 'S43', file: 's43-help-tips', title: 'Help, tips and tutorials', width: 1440, height: 900,
  html: `<div class="s43">${html}</div>`,
  caption: L.caption({
    id: 'S43', title: 'Help, tips and tutorials',
    scene: 'Three kinds of help at once, for the picture: the writer pressed F1 with Show focused, so Help opened on that topic; a tip card offers to demonstrate a quick look on the writer’s own text; and the Review tutorial’s bubble points at the Review button. In real use the tip and the tutorial would not meet this way.',
    on: 'the Text view of chapter 7 with the name “Lena” ringed; the Help window (search box, contents with Tutorials and Tips, the topic “Show: what the text wears” with a drawing of the Show menu); the tip card (Show me · Not this one again · ✕); the tutorial bubble “Step 2 of 4 · Leave” with a ring on Review; a focus ring on Show in the status bar',
    off: 'a “?” button, a required tutorial, a tip that interrupts typing, the Help window docked in the side panel',
  }),
};
