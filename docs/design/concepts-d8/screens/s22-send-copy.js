// S22: Send a copy dialog; it saves a version "Sent to Marta · Nov 7, 18:32".
const C = require('../rev-common');
const { L, I, who } = C;
const P = L.sample.chapter7Plain;
const col = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>` + P.map((p, i) => `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`).join('');

const css = `<style>
.s22 .dlg{left:370px;top:100px;width:700px;font:13px var(--ui)}
.s22 .dlg-b{padding:12px 22px 4px}
.s22 .q{font:600 10.5px var(--ui);letter-spacing:.08em;text-transform:uppercase;color:var(--ink3);margin:0 0 6px}
.s22 .blk{margin-bottom:14px}
.s22 .inp{display:flex;align-items:center;gap:6px;border:1px solid var(--accent);border-radius:7px;padding:4px 8px;box-shadow:0 0 0 3px var(--accent-tint)}
.s22 .chip{display:inline-flex;align-items:center;gap:6px;background:var(--soft);border:1px solid var(--line);border-radius:14px;padding:1px 8px 1px 3px}
.s22 .chip i{font-style:normal;color:var(--ink3)}
.s22 .row{display:flex;gap:20px;align-items:center;flex-wrap:wrap}
.s22 .ch{display:inline-flex;align-items:center;gap:7px}
.s22 .ch small{color:var(--ink3);font-size:12px}
.s22 .sel{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--line);border-radius:6px;padding:2px 9px;background:#fff;margin-left:4px}
.s22 .po{display:flex;align-items:center;gap:8px;margin:7px 0;color:var(--ink)}
.s22 .po small{color:var(--ink3);font-size:12px}
.s22 .po .lb{width:92px;color:var(--ink2)}
.s22 .hint{font-size:12px;color:var(--ink3);margin-top:5px;line-height:1.45}
.s22 .snap{font-size:12px;color:var(--ink2);white-space:nowrap}
.s22 .snap b{font-weight:600;color:var(--ink)}
.s22b{display:flex;gap:24px;padding:20px 28px 24px;background:#e3e3e0;align-items:flex-start}
.s22b .crop{width:680px}
.s22b .hl{padding:6px 0}
.s22b .hr{display:flex;gap:12px;align-items:center;padding:8px 16px;font-size:13px;border-top:1px solid var(--line2)}
.s22b .hr .t{width:110px;color:var(--ink3);font-variant-numeric:tabular-nums}
.s22b .hr .w{flex:1}
.s22b .hr .w small{display:block;color:var(--ink3);font-size:11.5px}
.s22b .hr.new{background:var(--accent-tint)}
.s22b .gh2{font:600 10.5px var(--ui);letter-spacing:.08em;text-transform:uppercase;color:var(--ink3);padding:8px 16px 2px}
.s22b .side{align-self:center;max-width:520px;font:13.5px/1.55 var(--ui);color:var(--ink2);width:auto;background:none;border:0;display:block}
</style>`;

const dlg = `<div class="dlg"><div class="dlg-h">Send a copy<small>File ▸ Share</small><span class="x">✕</span></div><div class="dlg-b">`
  + `<div class="blk"><div class="q">To whom</div><div class="inp"><span class="chip">${who('M')}Marta<i>✕</i></span><span style="color:var(--ink3)">add a reader…</span></div><div class="hint">Readers are kept with the book, so Libreto knows who a returned copy is from.</div></div>`
  + `<div class="blk"><div class="q">Format</div><div class="row"><span class="ch"><span class="rd on"></span>Word <small>(.docx, notes as comments)</small></span><span class="ch"><span class="rd"></span>PDF</span><span class="ch"><span class="rd"></span>Libreto file <small>(for a reader who has Libreto)</small></span></div></div>`
  + `<div class="blk"><div class="q">What goes in</div>`
  + `<div class="po"><span class="lb">Notes</span><span class="sel">Open only ▾</span><small>resolved notes stay out</small></div>`
  + `<div class="po"><span class="lb">AI notes</span><span class="sel">excluded ▾</span><small>the AI’s findings never travel with a copy unless you include them</small></div>`
  + `<div class="po"><span class="cb on"></span>Mark my changes since the last copy to Marta <small>(Oct 20) as tracked changes</small></div>`
  + `<div class="po"><span class="lb">You appear as</span><span style="color:var(--ink)">“The author”</span><small>· <span class="lk">Book details</span></small></div></div>`
  + `<div class="blk"><div class="q">Where</div><div class="row"><span class="ch"><span class="rd"></span>Save to a folder</span><span class="ch"><span class="rd on"></span>Email <small>your email program, the file attached</small></span></div></div>`
  + `</div><div class="dlg-f"><span class="snap">Also saves a version: <b>Sent to Marta · Nov 7, 18:32</b></span><span class="sp"></span><span class="btn">Cancel</span><span class="btn pri">Send</span></div></div>`;

const html = css + C.css + L.win({
  view: 'Text', crumbs: L.sample.crumbs7, strip: { review: 12 },
  page: L.pageCol(col, { paddingTop: 40 }), ask: false,
  status: { style: 'Plain', words: '2,418 words', pages: 'p. 146 of 248' },
  content: '<div class="scrim"></div>',
  extra: dlg
    + L.ann(1, 'To whom, format, what goes in, where: one small dialog', 20, 170, { w: 320 })
    + L.ann(2, 'Notes: open ones only by default; the AI’s notes are excluded by default', 20, 400, { w: 320 })
    + L.ann(3, 'Your own edits since the last copy go out as tracked changes, so Marta sees what is new', 20, 500, { w: 320 })
    + L.ann(4, 'Sending saves a named version, listed in File ▸ Versions & history; the returned copy is compared with it', 1090, 700, { w: 300 }),
}).replace('<div class="win"', '<div class="win s22"')
 + `<div class="s22b"><div class="crop"><div class="lbl">File ▸ Versions & history, a moment later</div><div class="hl"><div class="gh2">Today</div>`
 + `<div class="hr new"><span class="t">18:32</span><span class="w"><b>Sent to Marta · Nov 7</b><small>Word · 2,418 words · notes: open only</small></span><span class="lk">Compare with now</span><span class="lk">Open</span></div>`
 + `<div class="hr"><span class="t">17:04</span><span class="w">Autosaved<small>before your last editing session</small></span><span class="lk">Open</span></div></div></div>`
 + `<div class="side">When Marta’s copy comes back, Libreto compares it with this version: what she changed is what differs from what you sent, not from what you have now (S20, S21).</div></div>`;

module.exports = {
  id: 'S22', file: 's22-send-copy', title: 'Send a copy', width: 1440, height: 900 + 230,
  html,
  caption: L.caption({
    id: 'S22', title: 'Send a copy',
    scene: 'File ▸ Share ▸ Send a copy… over the dimmed text. Marta is the reader, the format is Word, and the copy goes by email. Sending also saves a version, shown below as it appears in File ▸ Versions & history.',
    on: 'the dialog (To whom with the chip Marta; Format Word ● PDF Libreto file; Notes: Open only ▾; AI notes: excluded ▾; ☑ Mark my changes since the last copy to Marta (Oct 20); You appear as; Where Folder / Email ●; the line “Also saves a version: Sent to Marta · Nov 7, 18:32”; Cancel · Send); under it the Versions list with that version',
    off: 'a receive dialog, a Compare sheet, accounts or sync',
  }),
};
