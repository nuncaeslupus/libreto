// S01: Start (draft 8; from draft 7's S01). No project open: New project (title, Book chosen with Play and Paper shown
// as "later", language of the book, where to keep it, the look, an optional goal), Recent, Explore a sample book,
// Bring in a Word manuscript. Under the window: a very long title cleaned into a folder name.
const L = require('../lib');

const titlebar = `<div class="titlebar"><span class="appic"></span><div class="wtitle">Libreto</div><div class="wctl"><span>–</span><span>▢</span><span>✕</span></div></div>`
  + `<div class="menubar"><span>File</span><span>Edit</span><span>View</span><span>Tools</span><span>Help</span></div>`;

const css = `<style>
.s01 .content{background:var(--soft)}
.s01 .start{position:absolute;left:226px;top:0;width:1100px;padding-top:34px;display:flex;gap:36px;align-items:flex-start}
.s01 .card{width:700px;background:#fff;border:1px solid var(--line);border-radius:13px;padding:18px 24px 16px}
.s01 .card h2{margin:0 0 12px;font:600 17px var(--ui)}
.s01 .card .field{margin-bottom:13px}
.s01 .sec{font:600 13px var(--ui);color:var(--ink);margin:0 0 7px}
.s01 .sec small{font-weight:400;color:var(--ink3);font-size:12px;margin-left:6px}
.s01 .hint{font:12px/1.4 var(--ui);color:var(--ink3);margin-top:6px}
.s01 .kinds{display:flex;gap:10px}
.s01 .kd{flex:1;border:1px solid var(--line);border-radius:10px;padding:9px 12px 10px;background:#fff}
.s01 .kd b{display:flex;align-items:center;font:600 14.5px var(--ui);margin-bottom:3px}
.s01 .kd span{display:block;font:12px/1.35 var(--ui);color:var(--ink3)}
.s01 .kd .lt{margin-left:auto;font:500 10.5px var(--ui);letter-spacing:.04em;text-transform:uppercase;color:var(--ink3);border:1px solid var(--line);border-radius:9px;padding:0 7px}
.s01 .kd.on{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-tint);background:rgba(59,110,168,.03)}
.s01 .kd.on b{color:var(--accent)}
.s01 .kd.later{background:var(--soft);border-style:dashed}
.s01 .kd.later b{color:var(--ink3)}
.s01 .two{display:flex;gap:14px}
.s01 .two>.field{flex:1}
.s01 .inp.dd2{display:flex;justify-content:space-between;align-items:center}
.s01 .inp.dd2:after{content:"▾";font-size:10px;color:var(--ink3)}
.s01 .loc{display:flex;gap:10px;align-items:center}
.s01 .loc .inp{flex:1}
.s01 .res{font:12.5px/1.4 var(--ui);color:var(--ink3);margin-top:6px}
.s01 .look{display:flex;gap:16px;align-items:center}
.s01 .prev{flex:none;width:64px;height:64px;border-radius:11px;background:#3b6ea8;color:#fff;display:flex;align-items:center;justify-content:center;font:600 30px var(--serif,Georgia),serif}
.s01 .lopts{display:flex;flex-direction:column;gap:9px}
.s01 .tiles{display:flex;gap:7px}
.s01 .tl{width:34px;height:34px;border-radius:7px;border:1px solid var(--line);display:flex;align-items:center;justify-content:center;color:#6b6e74;background:#fff}
.s01 .tl.let{background:#3b6ea8;border-color:#3b6ea8;color:#fff;font:400 18px/1 var(--text);box-shadow:0 0 0 2px #fff,0 0 0 4px #3b6ea8}
.s01 .tl.more{border-style:dashed;color:var(--ink3);font:12px var(--ui)}
.s01 .dots{display:flex;gap:8px;align-items:center}
.s01 .dot{width:18px;height:18px;border-radius:50%;display:inline-block}
.s01 .dot.on{box-shadow:0 0 0 2px #fff,0 0 0 4px #555}
.s01 .goal{display:flex;align-items:center;gap:9px;font:13px var(--ui);color:var(--ink2)}
.s01 .goal .inp{padding:5px 10px}
.s01 .cardf{display:flex;justify-content:flex-end;border-top:1px solid var(--line2);padding-top:12px;margin-top:2px}
.s01 .recent{width:364px;padding-top:2px}
.s01 .recent .nh{margin:0 0 10px}
.s01 .rlist{background:#fff;border:1px solid var(--line);border-radius:12px;overflow:hidden;margin-bottom:16px}
.s01 .rr{display:flex;gap:12px;align-items:center;padding:10px 14px;border-top:1px solid var(--line2)}
.s01 .rr:first-child{border-top:0}
.s01 .rr .rt{width:34px;height:34px;border-radius:7px;color:#fff;display:flex;align-items:center;justify-content:center;font:400 18px/1 var(--text);flex:none}
.s01 .rr .b{flex:1;min-width:0}
.s01 .rr .b div:first-child{font-weight:600;font-size:13.5px}
.s01 .rr .b div+div{color:var(--ink3);font-size:12px}
.s01 .rr .when{color:var(--ink3);font-size:12px;flex:none}
.s01 .door{background:#fff;border:1px solid var(--line);border-radius:12px;padding:12px 14px;margin-bottom:10px}
.s01 .door b{display:block;font:600 13.5px var(--ui);margin-bottom:2px}
.s01 .door span{font:12px/1.4 var(--ui);color:var(--ink3)}
.below.s01b{display:block;position:relative;height:250px}
.s01b .crop{position:absolute;top:18px;padding-bottom:14px}
.s01b .zc{padding:14px 20px 4px}
.s01b .folder{font:12.5px/1.4 var(--ui);color:var(--ink3);margin-top:6px}
.s01b .folder b{color:var(--ink2);font-weight:600}
.s01b .rules{font:12px/1.5 var(--ui);color:var(--ink2);margin-top:10px;padding-top:8px;border-top:1px solid var(--line2)}
.s01b .inp.long{font-size:14px;line-height:1.4}
</style>`;

const D = (inner, s = 22) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;
const draw = {
  lighthouse: '<path d="M10 21 10.8 9h2.4L14 21"/><path d="M9.5 9h5M10.4 6h3.2v3h-3.2zM12 4.2V6"/><path d="M14.5 7.5 20 6M9.5 7.5 4 6"/><path d="M6 21h12"/><path d="M10.5 14h3"/>',
  hat: '<path d="M3 15c3 1.6 15 1.6 18 0"/><path d="M6.5 15.4 8 8.5c.3-1.3 7.7-1.3 8 0l1.5 6.9"/><path d="M7.4 11.5c3 .9 6.2.9 9.2 0"/>',
  bicycle: '<circle cx="6" cy="16" r="3.6"/><circle cx="18" cy="16" r="3.6"/><path d="M6 16 10 9h6l2 7M10 9l3 7h-7M15 6.5h2.5"/>',
  teacup: '<path d="M4 9h12v4a6 6 0 0 1-12 0z"/><path d="M16 10.5h1.8a2 2 0 0 1 0 4H15.6"/><path d="M3 20h14"/>',
  train: '<rect x="6" y="3.5" width="12" height="13" rx="3"/><path d="M6 10h12M9 13.5h.2M15 13.5h.2"/><path d="M8.5 16.5 6.5 20.5M15.5 16.5l2 4M7.5 18.5h9"/>',
  key: '<circle cx="7.5" cy="12" r="3.6"/><path d="M11.1 12H21M17 12v3.2M19.6 12v2.2"/>',
  quill: '<path d="M19.5 3.5C11 5 6.8 11 5.5 19.5"/><path d="M19.5 3.5c.4 6-3.6 10.2-10.4 10.6"/><path d="M4.5 21l2-2"/>',
  moon: '<path d="M16.5 4.2A8 8 0 1 0 19.8 15 6.4 6.4 0 0 1 16.5 4.2z"/>',
};
const tiles = `<span class="tl let">B</span>` + ['lighthouse', 'hat', 'bicycle', 'teacup', 'train', 'key', 'quill', 'moon'].map((k) => `<span class="tl">${D(draw[k], 20)}</span>`).join('') + `<span class="tl more">+12</span>`;
const dots = ['#3b6ea8', '#6f7f4f', '#a0763a', '#8c5c6e', '#4f8580', '#5d5f66', '#2f3a4f']
  .map((c, i) => `<span class="dot${i === 0 ? ' on' : ''}" style="background:${c}"></span>`).join('');

const card = `<div class="card"><h2>New project</h2>`
  + `<div class="field"><label>Title</label><div class="inp foc">The Blue Lamp<span class="cursor" style="height:15px;vertical-align:-2px"></span></div></div>`
  + `<div class="field"><div class="sec">What are you writing?</div><div class="kinds">`
  + `<div class="kd on"><b>Book</b><span>A novel, stories, a memoir or nonfiction: parts, chapters and scenes</span></div>`
  + `<div class="kd later"><b>Play<i class="lt">later</i></b><span>Acts, cues and a script layout</span></div>`
  + `<div class="kd later"><b>Paper<i class="lt">later</i></b><span>Sections, citations and a reference list</span></div>`
  + `</div></div>`
  + `<div class="two"><div class="field"><div class="sec">Language of the book</div><div class="inp dd2">English (UK)</div></div>`
  + `<div class="field"><div class="sec">Where to keep it</div><div class="loc"><div class="inp">Documents/Libreto</div><span class="btn">Choose…</span></div></div></div>`
  + `<div class="res" style="margin:-8px 0 13px 0;text-align:right">Folder: Documents/Libreto/The Blue Lamp</div>`
  + `<div class="field"><div class="sec">The look</div><div class="look"><div class="prev">B</div>`
  + `<div class="lopts"><div class="tiles">${tiles}</div><div class="dots">${dots}</div></div></div></div>`
  + `<div class="field"><div class="sec">A goal<small>optional, you can set it later</small></div><div class="goal">about <span class="inp" style="width:84px">80,000</span> words by <span class="inp" style="width:110px">June 30</span></div></div>`
  + `<div class="cardf"><span class="btn pri">Create</span></div>`
  + `</div>`;

const rt = (color, inner) => `<div class="rt" style="background:${color}">${inner}</div>`;
const recentRow = (tile, title, where, when) => `<div class="rr">${tile}<div class="b"><div>${title}</div><div>${where}</div></div><div class="when">${when}</div></div>`;
const recent = `<div class="recent"><div class="nh">Recent</div><div class="rlist">`
  + recentRow(rt('#6f7f4f', D(draw.train, 20)), 'Harbor stories', 'Documents/Libreto', 'Oct 12')
  + recentRow(rt('#a0763a', 'F'), 'Field notes', 'Documents/Libreto', 'Sep 3')
  + recentRow(rt('#8c5c6e', D(draw.teacup, 20)), 'A long winter', 'Documents/Libreto', 'Jun 20')
  + `</div>`
  + `<div class="door"><b>Explore a sample book</b><span>Open “The Blue Lamp”, a short finished book with notes, marks and a Codex, to look around. Nothing in it is yours to lose.</span></div>`
  + `<div class="door"><b>Bring in a Word manuscript…</b><span>Shows what Libreto found (chapters, scenes, styles) before anything is created.</span></div>`
  + `<div style="margin-top:8px"><span class="btn q">Open another project…</span></div></div>`;

const win = css + `<div class="win s01" style="width:1440px;height:690px">${titlebar}`
  + `<div class="content"><div class="start">${card}${recent}</div></div>`
  + L.ann(1, 'Book is chosen. Play and Paper are shown as “later”, each with one line on what it will add, so nobody wonders where they are', 10, 214, { w: 190, r: true })
  + L.ann(2, 'The language of the book sets quotes, hyphenation and spell check; it is not the language of the app', 10, 318, { w: 190, r: true })
  + L.ann(3, 'Gray, the folder the project gets inside it; nobody types the title twice', 10, 404, { w: 190, r: true })
  + L.ann(4, 'The look: a letter on a color, or a simple line drawing in one tone', 10, 508, { w: 190, r: true })
  + L.ann(5, 'A goal is optional: it becomes a daily quota, and nothing happens if you skip it', 10, 590, { w: 190, r: true })
  + L.ann(6, 'Explore a sample book and Bring in a Word manuscript sit beside Recent, so a first visit has somewhere to go', 1010, 566, { w: 330 })
  + `</div>`;

const longTitle = 'The Blue Lamp: A Novel of Harbor Street, Rain, Debts and the Green Ledger Nobody Was Supposed to Find';
const html = win + `<div class="below s01b">`
  + `<div class="crop" style="left:28px;width:760px"><div class="lbl">A very long title, cleaned into the folder name</div><div class="zc">`
  + `<div class="field" style="margin-bottom:0"><label>Title</label><div class="inp foc long">${longTitle}<span class="cursor" style="height:15px;vertical-align:-2px"></span></div></div>`
  + `<div class="folder">Folder: Documents/Libreto/<b>The Blue Lamp A Novel of Harbor Street, Rain, Debts and</b></div>`
  + `<div class="rules">The title keeps every word. Only the folder name is cleaned: no <b>: / \\ ? * “ ”</b>, at most 60 characters, cut at a word.</div>`
  + `</div></div>`
  + `<div class="crop" style="left:812px;width:600px"><div class="lbl">The same title again in the same folder</div><div class="zc">`
  + `<div class="field" style="margin-bottom:0"><label>Title</label><div class="inp foc">The Blue Lamp<span class="cursor" style="height:15px;vertical-align:-2px"></span></div></div>`
  + `<div class="folder">Folder: Documents/Libreto/<b>The Blue Lamp 2</b></div>`
  + `<div class="rules">A folder is never overwritten and never merged; the next free number is added.</div>`
  + `</div></div>`
  + `</div>`;

module.exports = {
  id: 'S01',
  file: 's01-start',
  title: 'Start',
  width: 1440,
  height: 990,
  html,
  caption: L.caption({
    id: 'S01', title: 'Start',
    scene: 'Libreto opened with no project. The writer typed “The Blue Lamp”, kept Book, chose English (UK), kept the default folder and the letter B on blue, and typed a goal of about 80,000 words by June 30. Recent projects, a sample book and the Word import wait on the right. Under the window: a very long title and the folder name made from it.',
    on: 'the menu bar (File, Edit, View, Tools, Help); New project: Title; Book selected, Play and Paper dashed and marked “later” with one line each; Language of the book “English (UK) ▾”; Where to keep it with Choose… and the gray folder; The look (preview, letter tile, line drawings, colors); an optional goal; Create; Recent with three projects; “Explore a sample book”; “Bring in a Word manuscript…”; “Open another project…”. Insets: a long title with its cleaned folder name and the rules, and a repeated title getting “The Blue Lamp 2”',
    off: 'the strip, the status bar and the Ask button (no project is open), how files are stored, templates, accounts, an AI cover, the interface language (Settings)',
  }),
};
