// S32: Pages, an element clicked (draft 8). The chapter heading is outlined; the panel shows "Chapter opener".
// Inset: the Layout issues list and the Headers group with the long-title warning.
const L = require('../lib');
const C = require('../pages-common');
const { fr, dd } = C;

const ck = (t, on = true, sm = '') => `<div class="ck"><span class="cb${on ? ' on' : ''}"></span>${t}${sm ? `<small style="color:var(--ink3);margin-left:6px">${sm}</small>` : ''}</div>`;
const panel = `<div class="lay8"><div class="lh"><span style="color:var(--ink3);display:inline-flex">${L.icons.back}</span>Chapter opener<span class="iss" style="color:var(--ink2);border-color:var(--line);background:#fff">all chapters</span></div>
  <div class="lb" style="padding-top:4px">
  <div style="color:var(--ink3);font-size:11.5px;padding:0 0 6px">Part of the theme Classic. The spread updates as you change it.</div>
  ${fr('Label', dd('Chapter', 170))}${fr('Number', dd('in words', 170))}
  ${ck('Title on its own line')}
  ${fr('Sink', dd('One third of the page', 170))}
  ${ck('Drop cap')}${ck('First line in small caps')}
  ${fr('Ornament', dd('none', 170))}
  ${ck('Chapters start on a right-hand page')}
  <div style="padding:10px 0 0;color:var(--ink3);font-size:11.5px">Prologue, Interlude and Epilogue can go unnumbered: right-click them in the outline.</div>
  </div><div class="lf" style="justify-content:space-between"><span class="btn q">Reset to Classic</span><span class="btn pri">Export…</span></div></div>`;

const issue = (pg, t, act) => `<div class="isr"><span class="pgn">p. ${pg}</span><span class="it">${t}</span><span class="lk">${act}</span></div>`;
const css = `<style>
.s32b .isr{display:flex;align-items:center;gap:12px;padding:9px 14px;border-top:1px solid var(--line2);font-size:13px}
.s32b .isr .pgn{width:52px;color:var(--ink2);font-variant-numeric:tabular-nums;flex:none}
.s32b .isr .it{flex:1}
.s32b .isr .lk{flex:none;font-size:12px}
.s32b .hdr{padding:12px 16px;font-size:12.5px}
.s32b .hdr .fr{display:flex;align-items:center;gap:8px;min-height:30px}
.s32b .hdr .fr .k{width:104px;color:var(--ink2);flex:none}
.s32b .hdr .inp{padding:4px 9px;font-size:12.5px;display:inline-flex;align-items:center;height:26px}
.s32b .hdr .inp.dd:after{margin-left:auto}
.s32b .hdr .warnrow{margin-top:8px;border:1px solid #e6c49c;background:#fdf3e6;border-radius:8px;padding:8px 10px;color:#6b4a1c}
.s32b .hdr .ck{display:flex;gap:8px;align-items:center;padding:4px 0 !important;justify-content:flex-start;width:auto;height:auto;border:0;background:none}
</style>`;
const below = css + `<div class="below s32b">
 <div class="crop" style="width:640px"><div class="lbl">Layout issues 3 (from the Book layout panel)</div>
  ${issue(173, 'A single line at the top of the page', 'Go to page')}
  ${issue(188, 'Chapter 10 ends with one line', 'Go to page')}
  ${issue(201, 'Picture “Blue Lamp, 1952” is 140 dpi (print needs 300)', 'Go to page')}
  <div style="padding:10px 14px;font-size:12px;color:var(--ink3);border-top:1px solid var(--line2)">Each row jumps to its page and says why. “Ignore” hides one.</div></div>
 <div class="crop" style="width:560px"><div class="lbl">Headers &amp; page numbers, opened</div><div class="hdr">
  <div class="fr"><span class="k">Left page</span><span class="inp dd" style="width:170px"><span>Author</span></span></div>
  <div class="fr"><span class="k">Right page</span><span class="inp dd" style="width:170px"><span>Chapter title</span></span></div>
  <div class="fr"><span class="k">Page numbers</span><span class="inp dd" style="width:170px"><span>Footer, center</span></span></div>
  <div class="ck"><span class="cb on"></span>No header on openers and blank pages</div>
  <div class="warnrow">Chapter 3’s title is too long for the running head · <span class="lk">Set a short title…</span></div>
 </div></div></div>`;

const html = C.pagesWin({
  sel: true, panel, height: 940,
  extra: L.ann(1, 'Click any element in the preview to edit it there: the heading is outlined and the panel turns into its settings', 336, 664, { w: 320 })
    + L.ann(2, 'Changes show at once on every chapter opener, because they belong to the theme, not to this chapter', 700, 664, { w: 330 })
    + L.ann(3, 'Back to Book layout with the arrow; Esc clears the selection', 1110, 640, { w: 200 })
    + L.ann(4, '“Layout issues 3” is on the Book layout panel this arrow returns to; its list and one group are opened below', 1110, 730, { w: 210 }),
}).replace('Layout issues 3', 'Layout issues 3').replace('The pawnshop and the man who never came back', 'The pawnshop').replace(/Vega Marín/g, 'Nora Quiles');

module.exports = {
  id: 'S32', file: 's32-pages-point', title: 'Pages, an element clicked', width: 1440, height: 940,
  html: html + below,
  caption: L.caption({
    id: 'S32', title: 'Pages, an element clicked',
    scene: 'The writer clicked the chapter heading on the spread. It is outlined and the panel shows Chapter opener. Under the window: the Layout issues list and the Headers & page numbers group with its warning.',
    on: 'the outlined “CHAPTER SEVEN / Lena’s warning” block; the panel Chapter opener (Label Chapter, Number in words, Title on its own line, Sink one third, Drop cap, First line in small caps, Ornament none, Chapters start on a right-hand page, Reset); in the crops, three layout issues each with a page and Go to page, and Headers & page numbers with “Chapter 3’s title is too long for the running head · Set a short title…”',
    off: 'a separate dialog for the opener, a style editor (a paragraph style is clicked the same way and shows its Style card), the Ebook look',
  }),
};
