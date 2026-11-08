// S01: Start. No book open: the New book card on the left (title with its cover tile, the kind of text as
// named structure levels, the location and the full path it will be stored in), Recent on the right.
const L = require('../lib');

const titlebar = `<div class="titlebar"><span class="appic"></span><div class="wtitle">Libreto</div><div class="wctl"><span>–</span><span>▢</span><span>✕</span></div></div>`
  + `<div class="menubar"><span>File</span><span>Edit</span><span>View</span><span>Insert</span><span>Format</span><span>AI</span><span>Help</span></div>`;

const css = `<style>
.s01 .strip .ib,.s01 .strip .ib.off{color:var(--ink4)}
.s01 .modes span{color:var(--ink4)}
.s01 .content{background:var(--soft)}
.s01 .start{position:absolute;left:260px;top:0;width:1040px;padding-top:84px;display:flex;gap:40px;align-items:flex-start}
.s01 .card{width:680px;background:#fff;border:1px solid var(--line);border-radius:13px;padding:22px 24px 20px}
.s01 .card h2{margin:0 0 16px;font:600 16px var(--ui)}
.s01 .trow{display:flex;gap:14px;align-items:flex-start;margin-bottom:12px}
.s01 .tilecol{flex:none;width:56px}
.s01 .tile{width:56px;height:56px;border-radius:8px;background:#4f6d9a;color:#fff;display:flex;align-items:center;justify-content:center;font:400 30px/1 var(--text)}
.s01 .tilecap{margin-top:5px;white-space:nowrap;font:11.5px/1.35 var(--ui);color:var(--ink3)}
.s01 .tilecap small{display:block;font-size:10.5px;color:var(--ink4)}
.s01 .trow .field{flex:1;margin:0}
.s01 .kinds{display:flex;justify-content:space-between;gap:6px}
.s01 .kd{padding:6px 8px 5px;border-radius:7px;border:1px solid transparent;white-space:nowrap}
.s01 .kd b{display:block;font:500 12.5px/1.3 var(--ui);color:var(--ink)}
.s01 .kd small{display:block;font:10.5px/1.3 var(--ui);color:var(--ink3);margin-top:2px}
.s01 .kd.on{border-color:var(--accent);background:var(--accent-tint);box-shadow:inset 0 0 0 1px var(--accent)}
.s01 .kd.on b{font-weight:600}
.s01 .loc{display:flex;gap:10px;align-items:center}
.s01 .loc .inp{flex:1}
.s01 .loc .inp small{color:var(--ink3);font-size:12px;margin-left:6px}
.s01 .stored{margin:-4px 0 10px}
.s01 .stored .lb{font:600 10.5px var(--ui);letter-spacing:.08em;text-transform:uppercase;color:var(--ink3);margin-bottom:4px}
.s01 .path{font:13px/1.4 var(--ui);color:var(--ink2);white-space:nowrap}
.s01 .path .der{color:var(--ink);background:var(--accent-tint);border-radius:3px;padding:1px 3px;margin:0 -1px}
.s01 .cardf{display:flex;align-items:flex-end;gap:16px;border-top:1px solid var(--line2);padding-top:12px}
.s01 .disk{flex:1;font:12px/1.45 var(--ui);color:var(--ink3)}
.s01 .recent{width:320px;padding-top:2px}
.s01 .recent .nh{margin:0 0 10px}
.s01 .rlist{background:#fff;border:1px solid var(--line);border-radius:12px;overflow:hidden;margin-bottom:14px}
.s01 .rr{display:flex;gap:12px;align-items:center;padding:11px 14px;border-top:1px solid var(--line2)}
.s01 .rr:first-child{border-top:0}
.s01 .rr .tl{width:32px;height:32px;border-radius:6px;color:#fff;display:flex;align-items:center;justify-content:center;font:400 17px/1 var(--text);flex:none}
.s01 .rr .b{flex:1;min-width:0}
.s01 .rr .b div:first-child{font-weight:600;font-size:13.5px}
.s01 .rr .b div+div{color:var(--ink3);font-size:12px}
.s01 .rr .when{color:var(--ink3);font-size:12px;flex:none}
.s01 .rbtns{display:flex;flex-direction:column;gap:8px;align-items:flex-start}
</style>`;

const kinds = [
  ['Novel', 'parts · chapters · scenes', true],
  ['Novel without parts', 'chapters · scenes'],
  ['Short story', 'scenes'],
  ['Play', 'acts · scenes'],
  ['Essay', 'sections'],
  ['Plain text', 'no structure'],
].map(([n, lv, on]) => `<div class="kd${on ? ' on' : ''}"><b>${n}</b><small>${lv}</small></div>`).join('');

const card = `<div class="card"><h2>New book</h2>`
  + `<div class="trow"><div class="tilecol"><div class="tile">B</div><div class="tilecap">Sketch a cover<small>needs an AI</small></div></div>`
  + `<div class="field"><label>Title</label><div class="inp foc">The Blue Lamp?<span class="cursor" style="height:15px;vertical-align:-2px"></span></div></div></div>`
  + `<div class="field"><label>Kind of text</label><div class="kinds">${kinds}</div></div>`
  + `<div class="field"><label>Location</label><div class="loc"><div class="inp">Documents/Libreto<small>(recommended)</small></div><span class="btn">Change…</span></div></div>`
  + `<div class="stored"><div class="lb">Will be stored in</div><div class="path">/home/vega/Documents/Libreto/<span class="der">The Blue Lamp</span>/</div></div>`
  + `<div class="cardf"><div class="disk">One folder per book: the text as Markdown files, one per chapter, readable anywhere; notes, research and history in their own subfolders.</div><span class="btn pri">Create</span></div>`
  + `</div>`;

const recentRow = (color, initial, title, when) => `<div class="rr"><div class="tl" style="background:${color}">${initial}</div><div class="b"><div>${title}</div><div>Documents/Libreto</div></div><div class="when">${when}</div></div>`;
const recent = `<div class="recent"><div class="nh">Recent</div><div class="rlist">`
  + recentRow('#7b8a5a', 'H', 'Harbor stories', 'Oct 12')
  + recentRow('#b08a3c', 'F', 'Field notes', 'Sep 3')
  + recentRow('#8c5c6e', 'A', 'A long winter', 'Jun 20')
  + `</div><div class="rbtns"><span class="btn">Open another…</span><span class="btn">Import a Word file…</span></div></div>`;

const html = css + `<div class="win s01" style="width:1440px;height:900px">${titlebar}`
  + L.strip({ mode: 'none', back: false, forward: false, undo: false, redo: false })
  + `<div class="content"><div class="start">${card}${recent}</div></div>`
  + `<div class="status"></div>`
  + L.ann(1, 'A label and the full path on one line, growing as you type the title; nothing to parse. “Change…” picks another place and the path updates', 262, 622, { w: 300 })
  + L.ann(2, 'The folder name is derived from the title as you type: a character a folder cannot hold (the “?”) is dropped from the folder, the title keeps it', 610, 622, { w: 300 })
  + L.ann(3, 'The kind of text is only the names of up to three structure levels, used everywhere afterwards; a book can gain or lose a level later from the Insert menu', 4, 330, { w: 200, r: true })
  + L.ann(4, 'Cover tile: the title’s initial on a color by default, a picture if you drop one, a sketch from the AI when one is connected', 262, 104, { w: 320 })
  + L.ann(5, 'Recent books open with one click, each with its tile; “Import a Word file” turns a manuscript’s headings into chapters', 982, 486, { w: 300 })
  + L.ann(6, 'No book open: the strip is inactive, the status bar is empty, and there is no Ask button', 560, 818, { w: 320 })
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
    scene: 'Libreto opened with no book. The writer typed “The Blue Lamp?” as the title, left the kind of text on Novel and the recommended location as it is; under the location, “Will be stored in” shows the full path with the folder name derived from the title, without the “?”. Three recent books wait on the right.',
    on: 'the empty strip and status bar, the New book card (the cover tile “B” with “Sketch a cover · needs an AI”, Title, Kind of text as six choices with their levels under them and Novel selected, Location with “(recommended)” and “Change…”, WILL BE STORED IN with the path /home/vega/Documents/Libreto/The Blue Lamp/, the storage line about one folder per book and Markdown files, Create), Recent with three books (tile, title, folder, date), “Open another…” and “Import a Word file…”',
    off: 'templates, sync, accounts, an author or language field, the Ask button (no book is open), a dropdown for the kind, a picture or an AI sketch in the tile, the Spanish “Documentos/Libreto” default',
  }),
};
