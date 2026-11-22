// S33: File ▸ Book details (draft 8). Dialog with two tabs; the second tab ("Language & typography") is the inset.
const L = require('../lib');

const css = `<style>
.s33 .tabs{display:flex;gap:22px;padding:0 20px;border-bottom:1px solid var(--line2)}
.s33 .tabs span{padding:10px 0 9px;font-size:13px;color:var(--ink3);border-bottom:2px solid transparent}
.s33 .tabs span.on{color:var(--ink);font-weight:600;border-bottom-color:var(--accent)}
.s33 .frm{display:grid;grid-template-columns:130px 1fr;gap:9px 12px;align-items:center;font-size:13px}
.s33 .frm .k{color:var(--ink2)}
.s33 .frm .inp{padding:6px 10px;font-size:13px;display:flex;align-items:center;min-height:30px}
.s33 .frm .inp.dd:after{margin-left:auto}
.s33 .frm .hint{grid-column:2;color:var(--ink3);font-size:11.5px;margin-top:-4px}
.s33 .frm .two{display:flex;gap:10px;align-items:center}
.s33 .cover{display:flex;gap:14px;align-items:center}
.s33 .cover .th{width:60px;height:90px;background:linear-gradient(160deg,#27425f,#14243a);border-radius:2px;box-shadow:0 1px 4px rgba(0,0,0,.25);color:#dfe8f2;font:italic 10px/1.2 var(--text);padding:10px 6px;text-align:center}
.s33 .cb-row{display:flex;align-items:center;gap:8px}
.s33 .sample{font:italic 16px var(--text);color:var(--ink);background:var(--soft);border:1px solid var(--line2);border-radius:7px;padding:9px 12px}
.s33 .words{display:grid;grid-template-columns:110px 150px 1fr;gap:6px 12px;align-items:center;font-size:13px}
.s33 .words .h{font:600 10.5px var(--ui);letter-spacing:.06em;text-transform:uppercase;color:var(--ink3)}
.s33 .sec{font:600 10.5px var(--ui);letter-spacing:.08em;text-transform:uppercase;color:var(--ink3);margin:14px 0 6px;grid-column:1/-1}
.s33 .side .ann{position:relative;left:auto;top:auto;margin-bottom:16px}
.s33 .dlg.in{position:relative;z-index:1}
</style>`;

const inp = (t, o = '') => `<span class="inp${o ? ' ' + o : ''}">${t}</span>`;
const ddn = (t, w) => `<span class="inp dd" style="${w ? `width:${w}px` : ''}"><span>${t}</span></span>`;
const dlgFoot = '<div class="dlg-f"><span class="sp"></span><span class="btn q">Cancel</span><span class="btn pri">Done</span></div>';

const details = (pos) => `<div class="dlg s33 ${pos ? '' : 'in'}" style="${pos || 'width:760px'}">
 <div class="dlg-h">Book details<small>File ▸ Book details…</small><span class="x">✕</span></div>
 <div class="tabs"><span class="on">Details</span><span>Language &amp; typography</span></div>
 <div class="dlg-b"><div class="frm">
  <span class="k">Title</span>${inp('The Blue Lamp')}
  <span class="k">Subtitle</span>${inp('<span style="color:var(--ink3)">None</span>')}
  <span class="k">Author</span><span class="two">${inp('Nora Quiles', '')}<span style="color:var(--ink2)">shown as</span>${ddn('Author name', 140)}</span>
  <span class="hint">Use “Pen name” to print another name on the cover and title page; the file keeps your own.</span>
  <span class="k">Publisher</span>${inp('<span style="color:var(--ink3)">Self-published</span>')}
  <span class="k">Year</span>${inp('2026')}
  <span class="k">Rights line</span>${inp('© 2026 Nora Quiles. All rights reserved.')}
  <span class="k">ISBN, print</span>${inp('978-1-23456-789-7')}
  <span class="k">ISBN, ebook</span>${inp('<span style="color:var(--ink3)">Not set</span>')}
  <span class="hint">Both go on the copyright page and into the files they belong to. Leave empty if you have none.</span>
  <span class="k">Cover image</span><span class="cover"><span class="th">THE BLUE LAMP<br><br>Nora Quiles</span><span><span class="btn">Choose image…</span><div style="color:var(--ink3);font-size:11.5px;margin-top:6px">Used in the ebook and as the Word cover page.<br>1,600 × 2,560 px · JPEG</div></span></span>
 </div></div>${dlgFoot}</div>`;

const lang = () => `<div class="dlg s33 in" style="width:760px">
 <div class="dlg-h">Book details<small>Language &amp; typography</small><span class="x">✕</span></div>
 <div class="tabs"><span>Details</span><span class="on">Language &amp; typography</span></div>
 <div class="dlg-b"><div class="frm">
  <span class="k">Book language</span>${ddn('Español (España)', 240)}
  <span class="hint">Spell checking, hyphenation and the words Libreto generates follow it. The interface stays in English.</span>
  <span class="k">Quotation marks</span><span class="two">${ddn('« »  with  “ ”  inside', 240)}<span style="color:var(--ink3)">for a spoken line without a dash</span></span>
  <span class="k">Dialogue</span><span class="cb-row"><span class="cb on"></span>Dialogue with raya (—)</span>
  <span class="k"></span><span class="sample">—Hola —dijo Lena—. Nadie ha entrado en esa sala desde el martes.</span>
  <span class="k">Hyphenation</span><span class="cb-row"><span class="cb on"></span>Hyphenate words at line ends in print</span>
  <span class="sec">Generated words</span>
 </div>
 <div class="words" style="margin-top:2px"><span class="h">Used for</span><span class="h">Libreto writes</span><span class="h">Your own wording</span>
  <span>Chapter heading</span><span>Capítulo</span>${inp('<span style="color:var(--ink3)">Same</span>')}
  <span>Contents page</span><span>Índice</span>${inp('<span style="color:var(--ink3)">Same</span>')}
  <span>Part heading</span><span>Parte</span>${inp('Libro')}</div>
 </div>${dlgFoot}</div>`;

const col = L.sample.chapter7Plain.slice(0, 3).map((p, i) => `<div class="para"><p${i === 0 ? ' class="first"' : ''}>${p}</p></div>`).join('');
const html = css + L.win({
  view: 'Text', crumbs: L.sample.crumbs7, strip: { review: 12 }, height: 780,
  page: L.pageCol(`<div class="chap"><h1>Chapter 7</h1></div>` + col, { paddingTop: 44 }),
  status: { style: 'Plain', words: '812 of 1,000 today', goal: 70, pages: 'p. 146 of 248' }, ask: 'normal',
  extra: `<div class="scrim"></div>` + details('left:300px;top:60px;width:760px')
    + L.ann(1, 'File ▸ Book details…: one place for what describes the book, kept in the project', 1080, 90, { w: 300 })
    + L.ann(2, 'Author or pen name: the pen name prints on cover and title page; your own name stays in the file', 1080, 240, { w: 300 })
    + L.ann(3, 'ISBNs and rights line land on the copyright page', 1080, 440, { w: 300 })
    + L.ann(4, 'The cover feeds the ebook and the Word cover; the printed cover is made elsewhere', 1080, 600, { w: 300 }),
}).replace('<div class="win"', '<div class="win s33"');
const below = `<div class="below s33"><div class="crop" style="width:790px"><div class="lbl">The second tab: Language &amp; typography</div><div style="padding:14px">${lang()}</div></div>
 <div class="side" style="width:520px;padding-top:6px">${L.ann(5, 'The language drives the words Libreto writes itself: “Capítulo”, “Índice”, “Parte”. Override any one', 0, 0, { w: 360 })}${L.ann(6, 'Dialogue with raya: the dash and its closing rule follow Spanish usage; the sample shows what will print', 0, 0, { w: 360 })}${L.ann(7, 'Quotes « » with “ ” inside change for the whole book at once, in the text and in print', 0, 0, { w: 360 })}</div></div>`;

module.exports = {
  id: 'S33', file: 's33-book-details', title: 'Book details', width: 1440, height: 900, html: html + below,
  caption: L.caption({
    id: 'S33', title: 'Book details',
    scene: 'File ▸ Book details… over the dimmed text, on the Details tab. Under it, the same dialog on the Language & typography tab for a book written in Spanish.',
    on: 'Details: Title, Subtitle, Author (shown as Author name or Pen name), Publisher, Year, Rights line, ISBN print and ebook, Cover image with a thumbnail; Language & typography: Book language “Español (España)”, quotation marks « » with “ ”, ☑ Dialogue with raya and the sample “—Hola —dijo Lena—.”, ☑ Hyphenation, Generated words (Capítulo, Índice, Parte) with an override column',
    off: 'a theme or trim (those are in Pages), a Save button per field (Done closes; changes are kept as you make them), a contest motto field',
  }),
};
