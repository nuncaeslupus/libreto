// S21: Sharing with a reader. File ▸ Share…: one dialog, Send on the left, Receive on the right, the readers below.
const L = require('../lib');
const P = L.sample.chapter7Plain;

const col = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>`
  + P.map((p, i) => `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`).join('');

const css = `<style>
.sh{font:600 10.5px var(--ui);letter-spacing:.08em;text-transform:uppercase;color:var(--ink3);margin:0 0 12px}
.shdlg .field{margin-bottom:12px}
.shdlg .inp.dd{display:inline-flex;align-items:center;gap:8px;padding:5px 10px;font-size:13px}
.shdlg .inp.dd:after{margin-left:auto}
.shdlg .rrow{display:inline-flex;align-items:center;gap:6px;font-size:13px;margin-right:18px}
.shdlg .hint{font-size:12.5px;color:var(--ink2);line-height:1.5;margin:0 0 12px}
.shdlg .btns{display:flex;gap:8px;align-items:center}
.found{display:flex;gap:12px;align-items:center;background:var(--accent-tint);border:1px solid var(--accent-soft);border-radius:9px;padding:10px 12px;margin-bottom:12px}
.found .doc{width:30px;height:38px;border:1px solid var(--line);border-radius:3px;background:#fff;flex:none;font:600 8px/38px var(--ui);text-align:center;color:var(--ink3)}
.found .n{font-weight:600;font-size:13px}.found .m{font-size:12px;color:var(--ink2);margin-top:2px}
.readers{border-top:1px solid var(--line2);padding:14px 22px 16px}
.readers .r{display:flex;gap:10px;align-items:center;font-size:13px;padding:6px 0}
.readers .r .av{width:26px;height:26px;border-radius:50%;background:#e6e4df;display:inline-flex;align-items:center;justify-content:center;font:600 12px var(--ui);color:var(--ink2);flex:none}
.readers .r .m{color:var(--ink2)}
</style>`;

const dlg = `<div class="dlg shdlg" style="left:280px;top:200px;width:880px">
  <div class="dlg-h">Share<small>The Blue Lamp</small><span class="x" style="margin-left:auto">?</span><span class="x" style="margin-left:0">✕</span></div>
  <div class="dlg-b" style="display:flex;gap:26px;padding:18px 22px 8px">
    <div style="flex:1;min-width:0">
      <div class="sh">Send</div>
      <div class="field"><label>Reader</label><div style="display:flex;gap:8px;align-items:center"><span class="inp dd" style="width:250px">Marta (editor) · marta@…</span><span class="btn">+ New reader</span></div></div>
      <div class="field"><label>Format</label><div><span class="rrow"><span class="rd on"></span>Word file</span><span class="rrow"><span class="rd"></span>Libreto package</span></div></div>
      <div class="hint">A snapshot “Sent to Marta, November 7” will be kept.</div>
      <div class="btns"><span class="btn pri">Export file</span><span class="btn">Draft the email with AI</span></div>
    </div>
    <div style="width:1px;background:var(--line2);flex:none"></div>
    <div style="flex:1;min-width:0">
      <div class="sh">Receive</div>
      <div class="hint" style="margin-bottom:8px">Looking in Downloads…</div>
      <div class="found"><div class="doc">DOCX</div><div style="flex:1;min-width:0"><div class="n">The Blue Lamp – Marta.docx</div><div class="m">sent Nov 7 · 42 comments, 18 changes</div></div></div>
      <div class="btns" style="margin-bottom:12px"><span class="btn pri">Compare…</span><span class="btn">Choose another file…</span></div>
      <div class="hint" style="margin:0">Copies go to the book’s folder, under <b style="font-weight:600">received/</b>, and into History.</div>
    </div>
  </div>
  <div class="readers"><div class="sh" style="margin-bottom:6px">Readers</div>
    <div class="r"><span class="av">M</span><b style="font-weight:600">Marta</b><span class="m">· editor · sent Nov 7, received Nov 12</span></div>
  </div>
</div>`;

const html = L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  page: L.pageCol(col, { paddingTop: 40 }),
  status: { style: 'Plain', words: '2,418 words', pages: 'book p. ~146/248', fixes: '3 fixes' },
  ask: 'normal',
  content: `<div class="scrim"></div>`,
  extra: css + dlg
    + L.ann(1, 'One dialog, two halves: Send on the left, Receive on the right', 280, 150, { w: 300 })
    + L.ann(2, 'Sending keeps a named snapshot, so a returned copy can be told from what you changed since', 12, 400, { w: 230 })
    + L.ann(3, 'Nothing replaces your text: the copy is stored under received/ and opened in Compare', 1172, 470, { w: 240 })
    + L.ann(4, 'Readers appear as the authors of notes in the margin', 1172, 625, { w: 240 }),
});

module.exports = {
  id: 'S21',
  file: 's21-share',
  title: 'Sharing with a reader',
  width: 1440,
  height: 900,
  html,
  caption: L.caption({
    id: 'S21', title: 'Sharing with a reader',
    scene: 'File ▸ Share… over the dimmed page. Send picks the reader and the format and names the snapshot it will keep; Receive has already found Marta’s returned copy in Downloads. Below, the readers of this book.',
    on: 'the Share dialog with Send (reader, format, the snapshot line, Export file, Draft the email with AI), Receive (the found .docx with its date and counts, Compare…, Choose another file…, where copies go), the Readers list, the dimmed page and Ask button behind it',
    off: 'an email client, accounts or sync, any way to open the returned file as the working text, a Search &amp; ask box, a provider icon in the status bar',
  }),
};
