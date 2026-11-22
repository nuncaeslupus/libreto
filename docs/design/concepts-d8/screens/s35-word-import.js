// S35: Bring in a Word manuscript (draft 8): the import preview, and the card shown after import.
const L = require('../lib');

const css = `<style>
.s35 .im{display:flex;flex:1;min-height:0}
.s35 .doc{width:420px;flex:none;border-right:1px solid var(--line2);background:var(--soft);padding:14px 16px;overflow:hidden}
.s35 .doc .fh{font:600 11px var(--ui);letter-spacing:.06em;text-transform:uppercase;color:var(--ink3);margin-bottom:8px}
.s35 .doc .fn{font-size:12.5px;color:var(--ink2);margin-bottom:10px}
.s35 .sheet8{background:#fff;border:1px solid var(--line);border-radius:6px;padding:10px 12px;font-size:12.5px}
.s35 .sheet8 .pt{font:600 11px var(--ui);letter-spacing:.07em;text-transform:uppercase;color:var(--ink2);padding:6px 0 3px;display:flex;gap:8px;align-items:center}
.s35 .sheet8 .ch{display:flex;align-items:center;gap:8px;padding:3px 0 3px 12px;color:var(--ink)}
.s35 .sheet8 .ch .n{width:22px;color:var(--ink3);text-align:right}
.s35 .sheet8 .ch .w{margin-left:auto;color:var(--ink3);font-size:11.5px}
.s35 .sheet8 .sb{display:flex;align-items:center;gap:8px;padding:0 0 0 42px;color:var(--ink3);font-size:11px;height:16px}
.s35 .sheet8 .sb:before{content:"";flex:none;width:34px;border-top:1px dashed var(--ink4)}
.s35 .tag{font:500 10.5px var(--ui);border-radius:9px;padding:1px 7px;background:var(--accent-tint);color:var(--accent);flex:none}
.s35 .set{flex:1;padding:14px 20px;font-size:13px;overflow:hidden}
.s35 .set .h{font:600 11px var(--ui);letter-spacing:.06em;text-transform:uppercase;color:var(--ink3);margin:14px 0 6px}
.s35 .set .h:first-child{margin-top:0}
.s35 .set .rw{display:flex;align-items:center;gap:8px;padding:4px 0;min-height:30px}
.s35 .set .rw .k{width:150px;flex:none;color:var(--ink2)}
.s35 .set .rw .inp{padding:3px 9px;font-size:12.5px;display:inline-flex;align-items:center;min-height:26px}
.s35 .set .rw .inp.dd:after{margin-left:auto}
.s35 .set .arrow{color:var(--ink3)}
.s35 .set .ct{display:flex;align-items:baseline;gap:10px;padding:4px 0}
.s35 .set .ct b{font-size:15px;min-width:28px}
.s35 .set .ct span{color:var(--ink2)}
.s35 .set .ct small{margin-left:auto;color:var(--ink3);font-size:11.5px}
.s35 .dlg.in{position:relative;z-index:1}
.s35 .side .ann{position:relative;left:auto;top:auto;margin-bottom:16px}
.s35 .cardx{width:430px;background:#fff;border:1px solid var(--line);border-radius:11px;padding:14px 16px;box-shadow:0 4px 14px rgba(0,0,0,.08);font-size:13px}
.s35 .cardx .t{display:flex;align-items:center;gap:8px;font-weight:600;margin-bottom:8px}
.s35 .cardx .t svg{color:var(--accent);width:14px;height:14px}
.s35 .cardx .r{display:flex;align-items:center;gap:8px;padding:6px 0;border-top:1px solid var(--line2)}
.s35 .cardx .r .b{width:30px;font-weight:600;text-align:right;flex:none}
.s35 .cardx .r .x{flex:1;color:var(--ink2)}
</style>`;

const chs = [['1', 'Rain on the glass', '2,310'], ['2', 'The bartender', '3,890'], ['3', 'A note under the office door', '2,654'], ['4', 'Quarter past three', '4,120'], ['5', 'Kit’s ledger', '3,015'], ['6', 'The back room', '4,480'], ['7', 'Lena’s warning', '3,946']];
const left = `<div class="doc"><div class="fh">What Libreto found</div><div class="fn">The Blue Lamp – draft 3.docx · 54,312 words · 212 pages</div>
 <div class="sheet8"><div class="pt">Part One: Winter<span class="tag">Heading 1</span></div>
 ${chs.map(([n, t, w], i) => `<div class="ch"><span class="n">${n}</span><span>Chapter ${n}: ${t.replace(/’/g, '’')}</span><span class="w">${w} w</span></div>${i === 2 || i === 5 ? '<div class="sb">* * *  scene break</div>' : ''}`).join('')}
 <div class="ch" style="color:var(--ink3)"><span class="n">⋮</span><span>chapters 8 to 9</span></div>
 <div class="pt" style="margin-top:4px">Part Two: Spring<span class="tag">Heading 1</span></div>
 <div class="ch" style="color:var(--ink3)"><span class="n">⋮</span><span>chapters 10 and 11</span></div></div></div>`;

const set = `<div class="set">
 <div class="h">Structure</div>
 <div class="rw"><span class="k">Chapters start at</span><span class="inp dd" style="width:250px"><span>lines like “Chapter 1”</span></span><span class="tag">11 found</span></div>
 <div class="rw"><span class="k">Parts</span><span class="inp dd" style="width:250px"><span>Heading 1</span></span><span class="tag">2 found</span></div>
 <div class="rw"><span class="k">Scene breaks</span><span class="inp dd" style="width:250px"><span>lines of “* * *”</span></span><span class="tag">57 found</span></div>
 <div class="h">Styles found in the file</div>
 <div class="rw"><span class="k">‘Letter body’</span><span class="arrow">→</span><span class="inp dd" style="width:210px"><span>Create style Letter</span></span></div>
 <div class="rw"><span class="k">‘Inner voice’</span><span class="arrow">→</span><span class="inp dd" style="width:210px"><span>Thought</span></span></div>
 <div class="rw"><span class="k">Direct italics</span><span class="arrow">→</span><span class="inp dd" style="width:210px"><span>Italic</span></span></div>
 <div class="h">What comes with it</div>
 <div class="ct"><b>23</b><span>comments by M. → notes</span><small>kept with their authors</small></div>
 <div class="ct"><b>34</b><span>tracked changes → suggestions in Review</span><small>nothing is applied</small></div>
 <div class="ct"><b>41</b><span>names found → Codex?</span><small>you choose after</small></div>
</div>`;

const dlg = `<div class="dlg s35" style="left:50px;top:70px;width:1020px;height:620px">
 <div class="dlg-h">Bring in a Word manuscript<small>a preview; nothing is imported yet</small><span class="x">✕</span></div>
 <div class="im">${left}${set}</div>
 <div class="dlg-f"><span style="font-size:12px;color:var(--ink3)">Your Word file is not changed. It stays where it is.</span><span class="sp"></span><span class="btn q">Cancel</span><span class="btn pri">Import</span></div></div>`;

const html = css + L.win({
  view: false, crumbs: false, strip: { review: false, back: false, find: false }, height: 740,
  page: '', status: { style: false, saved: false, keys: false }, ask: false,
  extra: `<div class="scrim"></div>` + dlg
    + L.ann(1, 'Start ▸ Bring in a Word manuscript…, or File ▸ Import. The file is read here first; nothing changes until Import', 1100, 90, { w: 230 })
    + L.ann(2, 'Libreto reads the chapters from lines like “Chapter 1”, parts from Heading 1, scene breaks from “* * *”. Change a rule and the list updates', 1100, 250, { w: 230 })
    + L.ann(3, 'Your own Word styles map to Libreto styles; direct italics become Italic', 1100, 450, { w: 230 })
    + L.ann(4, 'Comments become notes, tracked changes become suggestions in Review, names go to the Codex only if you say so', 1100, 590, { w: 230 }),
}).replace('<div class="win"', '<div class="win s35"');
const below = `<div class="below s35"><div class="crop" style="width:520px"><div class="lbl">After Import: the card on top of the Navigator</div><div style="padding:16px 20px">
 <div class="cardx"><div class="t">${L.icons.spark}Libreto read your book</div>
  <div class="r"><span class="b">41</span><span class="x">names</span><span class="btn">Add all to the Codex</span></div>
  <div class="r"><span class="b">6</span><span class="x">words you spell your way</span></div>
  <div class="r"><span class="b">212</span><span class="x">possible typos</span><span class="btn">Review</span></div>
  <div class="r"><span class="b">23</span><span class="x">notes</span><span class="btn">Review</span></div></div></div></div>
 <div class="side" style="width:560px;padding-top:6px">${L.ann(5, 'One card, four counts, no wizard. It stays until you close it, and each number leads to where it is handled', 0, 0, { w: 380 })}${L.ann(6, '“Words you spell your way” are kept as they are and added to the book’s dictionary, not flagged one by one', 0, 0, { w: 380 })}${L.ann(7, 'Review opens the margin on the same text: typos and notes as cards, already sorted', 0, 0, { w: 380 })}</div></div>`;

module.exports = {
  id: 'S35', file: 's35-word-import', title: 'Bring in a Word manuscript', width: 1440, height: 820, html: html + below,
  caption: L.caption({
    id: 'S35', title: 'Bring in a Word manuscript',
    scene: 'The writer chose Bring in a Word manuscript…, and Libreto shows what it found in the file before it imports anything. Under it: the card the writer sees once the book is in.',
    on: 'the preview: the file name and size, the detected parts and chapters with scene breaks (left); Chapters start at “lines like Chapter 1” (11), Parts from Heading 1 (2), Scene breaks “* * *”; style mapping (‘Letter body’ → Create style Letter, ‘Inner voice’ → Thought, direct italics → Italic); 23 comments by M. → notes, 34 tracked changes → suggestions in Review, 41 names found → Codex?; Cancel and Import; the after-import card (41 names · Add all to the Codex, 6 words you spell your way, 212 possible typos · Review, 23 notes · Review)',
    off: 'a step-by-step wizard, a changed Word file, names added to the Codex without asking, any suggestion applied',
  }),
};
