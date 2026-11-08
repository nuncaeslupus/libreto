// S01: Start. No book open: Recent on the left, the New book card on the right, the folder sentence under the location.
const L = require('../lib');

const titlebar = `<div class="titlebar"><span class="appic"></span><div class="wtitle">Libreto</div><div class="wctl"><span>–</span><span>▢</span><span>✕</span></div></div>`
  + `<div class="menubar"><span>File</span><span>Edit</span><span>View</span><span>Insert</span><span>Format</span><span>AI</span><span>Help</span></div>`;

const css = `<style>
.s01 .strip .ib,.s01 .strip .ib.off{color:var(--ink4)}
.s01 .modes span{color:var(--ink4)}
.s01 .content{background:var(--soft)}
.s01 .start{position:absolute;left:50%;top:0;transform:translateX(-50%);width:1000px;padding-top:88px;display:flex;gap:70px;align-items:flex-start}
.s01 .recent{width:410px}
.s01 .recent .nh{margin:0 0 10px}
.s01 .rlist{background:#fff;border:1px solid var(--line);border-radius:12px;overflow:hidden;margin-bottom:18px}
.s01 .rr{display:flex;gap:14px;align-items:center;padding:12px 16px;border-top:1px solid var(--line2)}
.s01 .rr:first-child{border-top:0}
.s01 .rr .doc{width:28px;height:36px;border:1px solid var(--line);border-radius:3px;background:var(--soft);flex:none}
.s01 .rr .b{flex:1;min-width:0}
.s01 .rr .b div:first-child{font-weight:600;font-size:13.5px}
.s01 .rr .b div+div{color:var(--ink3);font-size:12px}
.s01 .rr .when{color:var(--ink3);font-size:12px;flex:none}
.s01 .card{width:520px;background:#fff;border:1px solid var(--line);border-radius:13px;padding:22px 24px 20px}
.s01 .card h2{margin:0 0 16px;font:600 16px var(--ui)}
.s01 .inp.dd{display:flex;align-items:center;gap:8px;width:220px}
.s01 .inp.dd:after{margin-left:auto;content:"▾";font-size:10px;color:var(--ink3)}
.s01 .loc{display:flex;gap:10px;align-items:center}
.s01 .loc .inp{flex:1}
.s01 .loc .inp small{color:var(--ink3);font-size:12px;margin-left:6px}
.s01 .sentence{font-size:13.5px;line-height:1.5;color:var(--ink);margin:6px 0 18px;padding:12px 14px;background:var(--soft);border-radius:8px}
.s01 .sentence b{font-weight:600}
.s01 .cardf{display:flex;align-items:center}
</style>`;

const recent = `<div class="recent"><div class="nh">Recent</div><div class="rlist">`
  + `<div class="rr"><div class="doc"></div><div class="b"><div>The Blue Lamp</div><div>Documents/Libreto</div></div><div class="when">yesterday</div></div>`
  + `<div class="rr"><div class="doc"></div><div class="b"><div>Harbor stories</div><div>Documents/Libreto</div></div><div class="when">Oct 12</div></div>`
  + `<div class="rr"><div class="doc"></div><div class="b"><div>Field notes</div><div>Documents/Libreto</div></div><div class="when">Sep 3</div></div>`
  + `</div><div style="display:flex;gap:10px"><span class="btn">Open another…</span><span class="btn">Import a Word file…</span></div></div>`;

const card = `<div class="card"><h2>New book</h2>`
  + `<div class="field"><label>Title</label><div class="inp foc">The Blue Lamp<span class="cursor" style="height:15px;vertical-align:-2px"></span></div></div>`
  + `<div class="field"><label>Kind</label><div class="inp dd">Novel</div></div>`
  + `<div class="field"><label>Location</label><div class="loc"><div class="inp">Documents/Libreto<small>(recommended)</small></div><span class="btn">Change…</span></div></div>`
  + `<div class="sentence">Libreto will create the folder <b>/home/ana/Documents/Libreto/The Blue Lamp/</b> and keep everything about this book inside it: text, notes, research and history.</div>`
  + `<div class="cardf"><span style="flex:1"></span><span class="btn pri">Create</span></div>`
  + `</div>`;

const html = css + `<div class="win s01" style="width:1440px;height:900px">${titlebar}`
  + L.strip({ mode: 'none', back: false, forward: false, undo: false, redo: false })
  + `<div class="content"><div class="start">${recent}${card}</div></div>`
  + `<div class="status"></div>`
  + L.ann(1, 'The sentence names the exact folder that will be created, under the location you chose', 920, 618, { w: 300 })
  + L.ann(2, 'One folder per book, always, named after the title; text, notes, research and history live in it', 920, 684, { w: 300 })
  + L.ann(3, 'Nothing else is asked: no template, no account, no author or language field', 150, 500, { w: 300 })
  + L.ann(4, 'Recent books open with one click; “Import a Word file” turns a manuscript’s headings into chapters', 150, 566, { w: 300 })
  + L.ann(5, 'No book open: the strip and the status bar are empty, and there is no Ask button', 560, 826, { w: 300 })
  + `</div>`;

module.exports = {
  id: 'S01',
  file: 's01-start',
  title: 'Start',
  width: 1440,
  height: 900,
  html,
  caption: L.caption({
    id: 'S01', title: 'Start',
    scene: 'Libreto opened with no book. The writer typed “The Blue Lamp” as the title and left the kind (Novel) and the recommended location as they are; under the location, the sentence names the folder Libreto is about to create. Three recent books wait on the left.',
    on: 'the empty strip and status bar, Recent with three books (title, folder, date), “Open another…” and “Import a Word file…”, the New book card (Title, Kind as a dropdown reading Novel, Location with “(recommended)” and “Change…”, the folder sentence with the exact path, Create)',
    off: 'templates, sync, accounts, an author or language field, the Ask button (no book is open), the Kind dropdown’s other choices (Short stories, Nonfiction, Other)',
  }),
};
