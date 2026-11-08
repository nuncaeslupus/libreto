// S27: Help. A floating Help window over the right side; a tutorial bubble pointing at "+ New chapter" in the open navigator.
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
.fwin .topic h2{margin:0 0 12px;font:600 19px var(--ui)}
.fwin .topic p{margin:0 0 11px;font:15px/1.6 var(--text);color:var(--ink)}
.fwin .topic kbd{font-size:11.5px}
.fwin-h .ib{margin-left:auto}
.coach{width:300px;font-size:13px}
.coach:after{content:"";position:absolute;left:38px;bottom:-9px;border:9px solid transparent;border-bottom:0;border-top-color:#2b2c2f}
.coach .st{color:#c7c8cc;font-size:11.5px;margin-bottom:4px}
.ring{position:absolute;border-radius:8px;box-shadow:0 0 0 2px #fff,0 0 0 4px var(--accent);z-index:44}
</style>`;

const fwin = `<div class="fwin" style="left:650px;top:128px;width:760px;height:560px">
  <div class="fwin-h"><b>Help</b><span class="ib">✕</span></div>
  <div class="hb">
    <div class="toc">
      <div>The page</div>
      <div class="on">Chapters and scenes</div>
      <div class="sub on">Adding chapters and scenes</div>
      <div class="sub">Parts</div>
      <div class="sub">Scene breaks, typed and detected</div>
      <div>Ask</div>
      <div>Notes and Review</div>
      <div>Research and the Codex</div>
      <div>Book</div>
    </div>
    <div class="topic">
      <h2>Adding chapters and scenes</h2>
      <p>A chapter is a heading on the page. Type <b>Chapter 8</b> on its own line and Libreto proposes it as a heading, with a dashed underline: click it to keep it, or ignore it.</p>
      <p>The <b>“+ New chapter”</b> button at the bottom of the chapter list adds one after the current chapter and puts the cursor in its heading. A right click on any row offers <i>New chapter before</i>, <i>New chapter after</i> and <i>New part</i>; the Insert menu has the same. From the keyboard, <kbd>Ctrl+Enter</kbd> splits the text at the cursor: what follows becomes the new chapter’s first paragraph, and Undo puts it back.</p>
      <p>A scene is a part of a chapter. Type <b>***</b> on its own line for a scene break, or let Libreto propose one where the time or place jumps. Scenes appear under their chapter in the list, on a guide line, and in the breadcrumb at the top.</p>
      <p>Parts live only in the chapter list: right-click a chapter and choose <i>New part</i>.</p>
    </div>
  </div>
</div>`;

const coach = `<div class="ring" style="left:12px;top:837px;width:256px;height:26px"></div>
<div class="coach" style="left:18px;top:742px"><div class="st">Step 2 of 4</div>This adds a chapter after the current one. Try it, or Skip (Esc).</div>`;

const html = L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  left: L.navigator({ rows: L.sample.navRows }),
  page: L.pageCol(col, { paddingTop: 40 }),
  status: { style: 'Plain', words: '2,418 words', pages: 'book p. ~146/248', fixes: '3 fixes' },
  ask: 'normal',
  extra: css + fwin + coach
    + L.ann(1, 'Help is a window, not a column: it floats over the page, can be moved, and stays open while you work', 650, 700, { w: 300 })
    + L.ann(2, 'F1 opens it at the topic of what has focus; the Help menu opens the contents; a question in Ask answers from the same pages', 1020, 700, { w: 320 })
    + L.ann(3, 'A tutorial points at the real control, in your own book; Esc leaves it at any step', 300, 780, { w: 280 }),
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
    scene: 'F1 with the chapter list focused opened the Help window at “Adding chapters and scenes”, floating over the right side of the page. The tutorial for chapters is running: its bubble points at the real “+ New chapter” button at the bottom of the open navigator.',
    on: 'the navigator (chapter 7 open), the page, the floating Help window with a short contents list and the topic text, the tutorial bubble “Step 2 of 4” with a ring around “+ New chapter”, the Ask button, the status bar',
    off: 'a Help tab in a column, a Desk, a menu search box, a required tutorial, the Reference panel',
  }),
};
