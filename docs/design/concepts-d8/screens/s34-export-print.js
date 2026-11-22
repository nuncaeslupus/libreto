// S34: Export dialog (profiles as rows) over Pages, and the small Print dialog below (draft 8).
const L = require('../lib');
const C = require('../pages-common');

const css = `<style>
.s34 .ex{display:flex;min-height:0;flex:1}
.s34 .prof{width:300px;flex:none;border-right:1px solid var(--line2);padding:10px;background:var(--soft)}
.s34 .prof .pr{padding:9px 11px;border-radius:8px;font-size:13px;line-height:1.35}
.s34 .prof .pr small{display:block;color:var(--ink3);font-size:11.5px;margin-top:1px}
.s34 .prof .pr.on{background:#fff;box-shadow:0 0 0 1.5px var(--accent)}
.s34 .prof .pr.on b{color:var(--ink)}
.s34 .prof .pr b{font-weight:600}
.s34 .opt{flex:1;padding:16px 22px;font-size:13px}
.s34 .opt h4{margin:0 0 2px;font:600 14px var(--ui)}
.s34 .opt .sub{color:var(--ink3);font-size:12px;margin-bottom:12px}
.s34 .opt .ck,.s34 .pd .ck{display:flex;align-items:center;gap:9px;padding:5px 0;width:auto;height:auto;border:0;background:none;justify-content:flex-start}
.s34 .opt .ck small{color:var(--ink3);font-size:11.5px}
.s34 .frm{display:grid;grid-template-columns:96px 1fr;gap:8px 10px;align-items:center;margin-top:10px}
.s34 .frm .k{color:var(--ink2)}
.s34 .inp{padding:6px 10px;font-size:13px;display:flex;align-items:center;min-height:30px}
.s34 .inp.dd:after{margin-left:auto}
.s34 .fact{margin:12px 0;padding:8px 11px;border-radius:7px;background:var(--soft);color:var(--ink2);font-size:12px;border:1px solid var(--line2)}
.s34 .pd{padding:14px 20px;font-size:13px}
.s34 .pd .q{font:600 12px var(--ui);color:var(--ink2);margin:6px 0 4px}
.s34 .pd .ch{display:flex;align-items:flex-start;gap:9px;padding:4px 0}
.s34 .pd .ch small{display:block;color:var(--ink3);font-size:11.5px}
.s34 .dlg.in{position:relative;z-index:1}
.s34 .side .ann{position:relative;left:auto;top:auto;margin-bottom:16px}
</style>`;

const prof = (on, name, sub) => `<div class="pr${on ? ' on' : ''}"><b>${name}</b><small>${sub}</small></div>`;
const exportDlg = `<div class="dlg s34" style="left:290px;top:110px;width:860px;height:480px">
 <div class="dlg-h">Export<small>File ▸ Export…</small><span class="x">✕</span></div>
 <div class="ex"><div class="prof">
  ${prof(1, 'Print PDF', 'For KDP and IngramSpark: 6 × 9 in, fonts embedded')}
  ${prof(0, 'Reading PDF', 'For a screen or a printer at home')}
  ${prof(0, 'EPUB', 'For ebook stores and e-readers')}
  ${prof(0, 'Word manuscript', 'Standard manuscript format, for an editor or a contest')}
  ${prof(0, 'Word for a reader', 'Your text with notes; their changes can come back')}
 </div>
 <div class="opt"><h4>Print PDF for KDP and IngramSpark</h4><div class="sub">The book as laid out in Pages: Classic, Trade 6 × 9 in, 248 pages.</div>
  <div class="ck"><span class="cb"></span>Include my notes <small>in the margin of the PDF</small></div>
  <div class="ck"><span class="cb"></span>Include Not printed scenes</div>
  <div class="ck"><span class="cb on"></span>Cover page <small>from Book details</small></div>
  <div class="ck"><span class="cb"></span>Bleed and crop marks <small>only if your printer asks</small></div>
  <div class="fact">Layout issues 3 are still open. The file will print them as they are. <span class="lk">Show them</span></div>
  <div class="frm"><span class="k">File name</span><span class="inp">The Blue Lamp – print.pdf</span><span class="k">Save in</span><span class="inp dd"><span>~/Books/The Blue Lamp/exports</span></span></div>
 </div></div>
 <div class="dlg-f"><span class="snap" style="font-size:12px;color:var(--ink3)">Each export is kept as a version: “Exported Print PDF”</span><span class="sp"></span><span class="btn q">Cancel</span><span class="btn pri">Export</span></div></div>`;

const printDlg = `<div class="dlg s34 in" style="width:520px">
 <div class="dlg-h">Print<small>File ▸ Print…</small><span class="x">✕</span></div>
 <div class="pd"><div class="q">What</div>
  <div class="ch"><span class="rd on"></span><span>Working copy<small>A4, double spaced, my notes in the margin ☑</small></span></div>
  <div class="ch"><span class="rd"></span><span>Book pages<small>6 × 9 in on A4, centered · crop marks ☐</small></span></div>
  <div class="q" style="margin-top:12px">Range</div>
  <div class="ch" style="gap:22px"><span style="display:flex;gap:8px;align-items:center"><span class="rd"></span>Whole book</span><span style="display:flex;gap:8px;align-items:center"><span class="rd on"></span>Chapter 7</span><span style="display:flex;gap:8px;align-items:center"><span class="rd"></span>Pages <span class="inp" style="min-height:26px;padding:2px 8px;width:80px;color:var(--ink3)">147–158</span></span></div>
 </div>
 <div class="dlg-f"><span class="snap" style="font-size:12px;color:var(--ink3)">12 sheets</span><span class="sp"></span><span class="btn q">Cancel</span><span class="btn pri">Print…</span></div></div>`;

const html = css + C.pagesWin({
  extra: `<div class="scrim"></div>` + exportDlg
    + L.ann(1, 'Profiles are rows: pick what the file is for, and its few options appear on the right', 1160, 130, { w: 250 })
    + L.ann(2, 'Only the options that matter for this profile: notes, Not printed scenes, cover page, bleed', 1160, 270, { w: 250 })
    + L.ann(3, 'Open layout issues are mentioned, never a blocker', 1160, 420, { w: 250 })
    + L.ann(4, 'One Export button; the result is kept as a version', 1160, 530, { w: 250 }),
}).replace('<div class="win pg8"', '<div class="win pg8 s34"').replace('The pawnshop and the man who never came back', 'The pawnshop').replace(/Vega Marín/g, 'Nora Quiles');
const below = `<div class="below s34"><div class="crop" style="width:560px"><div class="lbl">File ▸ Print… is its own small dialog</div><div style="padding:14px">${printDlg}</div></div>
 <div class="side" style="width:560px;padding-top:6px">${L.ann(5, 'Working copy: your text on A4, double spaced, with your notes in the margin. For a proofreader or a red pen', 0, 0, { w: 380 })}${L.ann(6, 'Book pages: the pages as in Pages, centered on A4', 0, 0, { w: 380 })}${L.ann(7, 'The range: the whole book, this chapter, or pages. Print… then opens the system’s own dialog', 0, 0, { w: 380 })}</div></div>`;

module.exports = {
  id: 'S34', file: 's34-export-print', title: 'Export and Print', width: 1440, height: 940, html: html + below,
  caption: L.caption({
    id: 'S34', title: 'Export and Print',
    scene: 'The Export dialog opened from the Export… button in Pages, with the profile Print PDF selected. Under the window: the separate Print dialog.',
    on: 'Export: profiles as rows (Print PDF for KDP and IngramSpark, Reading PDF, EPUB, Word manuscript, Word for a reader) with one line each; the selected profile’s options (Include my notes, Include Not printed scenes, Cover page, Bleed and crop marks), a note on the open layout issues, File name, Save in, Export; Print: What (Working copy, A4, double spaced, notes in margin / Book pages, 6 × 9 on A4), Range (Whole book, Chapter 7, Pages), Print…',
    off: 'one dialog per format, a progress bar, a preview inside the dialog (Pages is the preview)',
  }),
};
