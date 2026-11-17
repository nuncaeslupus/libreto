// S21: Sending a copy. File ▸ Share ▸ Send a copy… is one small dialog with three questions: to whom, format, where.
// Behind it, Write. There is no receive dialog: a copy that comes back is "Add notes from a file…" in Review (S22).
const L = require('../lib');
const P = L.sample.chapter7Plain;

const col = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>`
  + P.map((p, i) => `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`).join('');

const css = `<style>
.shdlg{font:13px var(--ui)}
.shdlg .dlg-b{padding:14px 20px 6px}
.shdlg .q{font:600 10.5px var(--ui);letter-spacing:.08em;text-transform:uppercase;color:var(--ink3);margin:0 0 7px}
.shdlg .blk{margin-bottom:16px}
.shdlg .inp{display:flex;align-items:center;padding:6px 10px;font-size:13.5px;position:relative}
.shdlg .inp .cmp{background:var(--accent-soft);border-radius:2px}
.shdlg .sugg{margin-top:4px;border:1px solid var(--line);border-radius:8px;padding:4px;box-shadow:0 6px 18px rgba(0,0,0,.08)}
.shdlg .sugg div{display:flex;gap:8px;align-items:center;padding:4px 8px;border-radius:5px}
.shdlg .sugg .on{background:var(--accent-tint)}
.shdlg .sugg .m{color:var(--ink3);font-size:12px;margin-left:auto}
.shdlg .hint{font-size:12px;color:var(--ink3);margin-top:6px;line-height:1.45}
.shdlg .row{display:flex;gap:18px;align-items:center;flex-wrap:wrap}
.shdlg .ch{display:inline-flex;align-items:center;gap:7px;color:var(--ink)}
.shdlg .ch small{color:var(--ink3);font-size:12px}
.shdlg .sub{margin:8px 0 0 0;display:flex;gap:7px;align-items:center}
.shdlg .dlg-f .snap{font-size:12px;color:var(--ink3);white-space:nowrap}
.shdlg .dlg-f .snap b{font-weight:600;color:var(--ink2)}
.shdlg .sp{flex:1}
</style>`;

const dlg = `<div class="dlg shdlg" style="left:450px;top:150px;width:530px">
  <div class="dlg-h">Send a copy<small>File ▸ Share</small><span class="x">✕</span></div>
  <div class="dlg-b">
    <div class="blk"><div class="q">To whom</div>
      <div class="inp foc">Mar<span class="cmp">ta</span><span class="cursor"></span></div>
      <div class="sugg"><div class="on">${L.who('M')}Marta<span class="m">editor</span></div><div style="color:var(--ink3)">+ Add “Mar” as a new reader</div></div>
      <div class="hint">Completed from this project’s readers, listed in Project settings ▸ People; a new name is simply added.</div></div>
    <div class="blk"><div class="q">Format</div>
      <div class="row"><span class="ch"><span class="rd on"></span>Word</span><span class="ch"><span class="rd"></span>PDF</span><span class="ch"><span class="rd"></span>Libreto file <small>(a reader who has Libreto)</small></span></div>
      <div class="sub"><span class="cb on"></span>Include notes</div></div>
    <div class="blk" style="margin-bottom:10px"><div class="q">Where</div>
      <div class="row"><span class="ch"><span class="rd"></span>A folder</span><span class="ch"><span class="rd on"></span>Email <small>your email program, the file attached</small></span></div>
      <div class="hint">${L.icons.spark.replace('<svg ', '<svg style="width:12px;height:12px;vertical-align:-2px;color:var(--accent)" ')} With an email tool connected, the AI can draft the message.</div></div>
  </div>
  <div class="dlg-f"><span class="snap">Keeps a snapshot: <b>Sent to Marta · November 7, 18:32</b></span><span class="sp"></span><span class="btn">Cancel</span><span class="btn pri">Send</span></div>
</div>`;

const html = L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  strip: { reviewCount: 12 },
  page: L.pageCol(col, { paddingTop: 40 }),
  status: { style: 'Plain', words: '2,418 words', pages: 'p. 146 of 248' },
  ask: 'normal',
  content: `<div class="scrim"></div>`,
  extra: css + dlg
    + L.ann(1, 'One small dialog, three questions: to whom, format, where', 1000, 160, { w: 260 })
    + L.ann(2, 'A name, completed from the readers in Project settings ▸ People; a new name is simply added', 1000, 232, { w: 260 })
    + L.ann(3, 'Word, PDF, or a Libreto file; “Include notes” where it applies. The Word file carries a hidden id on every paragraph: that is what lets the copy come back', 1000, 380, { w: 280 })
    + L.ann(4, 'A folder, or your email program with the file attached', 1000, 500, { w: 260 })
    + L.ann(5, 'Sending makes a named snapshot, kept in History (S23)', 1000, 590, { w: 260 })
    + L.ann(6, 'No “receive” dialog: a copy that comes back is Add notes from a file… in Review (S22)', 120, 640, { w: 300 }),
});

module.exports = {
  id: 'S21',
  file: 's21-share',
  title: 'Sending a copy',
  width: 1440,
  height: 900,
  html,
  caption: L.caption({
    id: 'S21', title: 'Sending a copy',
    scene: 'File ▸ Share ▸ Send a copy… over the dimmed page in Write. The writer typed “Mar” and the name was completed from the project’s readers; Word and Email are chosen. Sending will keep a snapshot named “Sent to Marta · November 7, 18:32”.',
    on: 'the dialog: To whom (the field “Marta” completed, the suggestion row with her initial, “+ Add as a new reader”, the hint about Project settings ▸ People), Format (Word ● · PDF · Libreto file, ☑ Include notes), Where (A folder ○ · Email ●, the gray line about the AI drafting the message when an email tool is connected), the footer line with the snapshot name, Cancel · Send; Write dimmed behind it; the Ask button',
    off: 'a receive dialog, a Compare sheet, accounts or sync',
  }),
};
