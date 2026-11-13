// S21: Sharing with a reader. File ▸ Share has two commands, two moments: Send a copy… and Receive a copy…, shown side by side.
const L = require('../lib');
const P = L.sample.chapter7Plain;

const col = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>`
  + P.map((p, i) => `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`).join('');

const css = `<style>
.sh{font:600 10.5px var(--ui);letter-spacing:.08em;text-transform:uppercase;color:var(--ink3);margin:0 0 6px}
.shdlg{font-size:13px}
.shdlg .dlg-h small{margin-left:4px}
.shdlg .dlg-b{padding:16px 20px 12px}
.shdlg .field{margin-bottom:14px}
.shdlg .inp{display:flex;align-items:center;gap:8px;padding:6px 10px;font-size:13px}
.shdlg .hint{font-size:12px;color:var(--ink3);line-height:1.45;margin-top:5px}
.shdlg .exp{display:flex;gap:12px;align-items:center;border:1px solid var(--line);border-radius:8px;padding:8px 10px}
.shdlg .doc{width:28px;height:34px;border:1px solid var(--line);border-radius:3px;background:#fff;flex:none;font:600 7.5px/34px var(--ui);text-align:center;color:#3b6ea8}
.shdlg .exp .n{font-weight:600}.shdlg .exp .m{font-size:12px;color:var(--ink2)}
.shdlg .rd-r{display:flex;gap:10px;align-items:center;padding:5px 0;border-bottom:1px solid var(--line2)}
.shdlg .rd-r .av{width:24px;height:24px;border-radius:50%;background:#e6e4df;display:inline-flex;align-items:center;justify-content:center;font:600 11px var(--ui);color:var(--ink2);flex:none}
.shdlg .rd-r .m{color:var(--ink3)}
.shdlg .rd-r .sp{flex:1}
.shdlg .rd-r .inp{padding:2px 8px;width:150px}
.shdlg .gray{display:flex;gap:8px;align-items:center;color:var(--ink3);font-size:12.5px;margin-top:12px}
.shdlg .dlg-f .btn svg{width:13px;height:13px}
.shdlg .none{display:flex;gap:10px;background:var(--soft);border:1px solid var(--line);border-radius:9px;padding:12px 14px;line-height:1.5;color:var(--ink)}
.shdlg .none svg{width:16px;height:16px;color:var(--ink2);flex:none;margin-top:2px}
.shdlg ol{margin:6px 0 0 18px;padding:0;color:var(--ink2);font-size:12.5px;line-height:1.6}
</style>`;

const send = `<div class="dlg shdlg" style="left:96px;top:120px;width:600px">
  <div class="dlg-h">Send a copy<small>File ▸ Share ▸ Send a copy…</small><span class="x">✕</span></div>
  <div class="dlg-b">
    <div class="field"><div class="sh">Snapshot</div><div class="inp foc">Sent to Marta · November 7, 18:32<span class="cursor"></span></div><div class="hint">Kept in History under this name, so the copy that comes back can be told from what you change meanwhile.</div></div>
    <div class="field"><div class="sh">Export</div><div class="exp"><div class="doc">DOCX</div><div style="flex:1;min-width:0"><div class="n">The Blue Lamp – for Marta.docx</div><div class="m">Word file · every paragraph carries its id · saved to Documents</div></div><span class="btn">Change…</span></div></div>
    <div class="field" style="margin-bottom:4px"><div class="sh">Readers of this project</div>
      <div class="rd-r"><span class="av">M</span><b style="font-weight:600">Marta</b><span class="m">· editor</span><span class="sp"></span><span class="m">this copy</span></div>
      <div class="rd-r"><span class="av">R</span><span class="inp foc" style="width:160px">A reader<span class="cursor"></span></span><span class="m">rename · Enter</span><span class="sp"></span><span class="m">never sent</span></div>
      <div style="padding-top:6px"><span class="lk">+ Add a reader</span></div>
    </div>
    <div class="gray"><span class="cb"></span>Send the whole project as one file, for a reader who has Libreto</div>
  </div>
  <div class="dlg-f"><span class="btn">${L.icons.spark}Draft the message</span><span class="sp"></span><span class="btn">Cancel</span><span class="btn pri">Export and keep snapshot</span></div>
</div>`;

const receive = `<div class="dlg shdlg" style="left:744px;top:120px;width:600px">
  <div class="dlg-h">Receive a copy<small>File ▸ Share ▸ Receive a copy…</small><span class="x">✕</span></div>
  <div class="dlg-b">
    <div class="field"><div class="sh">Look for the copy in</div><div style="display:flex;gap:8px"><div class="inp" style="flex:1">${L.icons.magnifier}<span style="color:var(--ink2)">~/Downloads</span><span style="margin-left:auto;color:var(--ink3);font-size:12px">or any file you point to</span></div><span class="btn">Choose a file…</span></div></div>
    <div class="none">${L.icons.info}<div>No copy of this project has been sent yet. A received file is compared with the text as it is today.</div></div>
    <div class="field" style="margin-top:14px;margin-bottom:0"><div class="sh">What happens</div>
      <ol><li>The file is copied into the project’s folder; it is never opened as the working text.</li><li>It is recorded in History.</li><li>Compare opens over Review: you decide paragraph by paragraph.</li></ol>
    </div>
  </div>
  <div class="dlg-f"><span class="sp"></span><span class="btn">Cancel</span><span class="btn pri">Compare in Review</span></div>
</div>`;

const html = L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  strip: { reviewCount: 12 },
  page: L.pageCol(col, { paddingTop: 40 }),
  status: { style: 'Plain', words: '2,418 words', pages: 'book p. ~146/248', review: '12 to review' },
  ask: 'normal',
  content: `<div class="scrim"></div>`,
  extra: css + send + receive
    + L.ann(1, 'Two commands, because they are two moments: sending a copy, and getting one back', 520, 82)
    + L.ann(2, 'A named snapshot, kept in History', 300, 182)
    + L.ann(3, 'Paragraphs carry their ids, for Compare later', 300, 292)
    + L.ann(4, '“Draft the message” asks the AI to write the email, when an email tool is connected', 96, 632)
    + L.ann(5, 'It says so instead of pretending', 1040, 330)
    + L.ann(6, 'The copy never replaces your text: it goes into the project’s folder and History, then Compare opens', 744, 510, { w: 420 }),
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
    scene: 'File ▸ Share has two commands, shown here side by side over the dimmed page. Send a copy… names the snapshot it keeps, exports a Word file for Marta and lists the readers of this project, one of them being renamed. Receive a copy… is shown as it looks before anything was ever sent: it says so plainly.',
    on: 'Send a copy (snapshot “Sent to Marta · November 7, 18:32”, the .docx export line with paragraph ids, readers: Marta · editor and “A reader” being renamed, “+ Add a reader”, the gray option to send the whole project as one file, Draft the message with the spark, Cancel, Export and keep snapshot), Receive a copy (where it looks, Choose a file…, “No copy of this project has been sent yet. A received file is compared with the text as it is today.”, what happens to the file, Compare in Review), the dimmed page, the Ask button',
    off: 'an email client, accounts or sync, any way to open a returned file as the working text, a provider icon',
  }),
};
