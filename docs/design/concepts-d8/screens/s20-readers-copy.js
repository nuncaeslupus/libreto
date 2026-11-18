// S20: the import dialog after choosing "The Blue Lamp – for Marta.docx", and how one finds it:
// dropping the .docx on the window.
const C = require('../rev-common');
const { L, I, who } = C;
const P = L.sample.chapter7Plain;

const col = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>`
  + P.map((p, i) => `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`).join('');

const css = `<style>
.s20 .dlg{left:380px;top:110px;width:680px;font:13px var(--ui)}
.s20 .dlg-b{padding:14px 20px 8px}
.s20 .file{display:flex;gap:12px;align-items:center;padding:10px 12px;border:1px solid var(--line);border-radius:9px;background:var(--soft)}
.s20 .doc{width:30px;height:38px;border:1px solid var(--line);border-radius:3px;background:#fff;flex:none;font:600 8px/38px var(--ui);text-align:center;color:#3b6ea8}
.s20 .file .t b{font-weight:600;font-size:13.5px}.s20 .file .t small{display:block;color:var(--ink3);font-size:12px;margin-top:1px}
.s20 .file .lk{margin-left:auto}
.s20 .found{margin:12px 0 4px;font-size:13.5px}
.s20 .found b{font-weight:600}
.s20 .nums{display:flex;gap:10px;margin:8px 0 14px}
.s20 .nums div{flex:1;border:1px solid var(--line);border-radius:8px;padding:8px 10px}
.s20 .nums b{display:block;font:600 20px var(--ui)}
.s20 .nums small{color:var(--ink3);font-size:11.5px;line-height:1.3;display:block}
.s20 h5{margin:0 0 6px;font:600 10.5px var(--ui);letter-spacing:.08em;text-transform:uppercase;color:var(--ink3)}
.s20 .map{border:1px solid var(--line);border-radius:8px;margin-bottom:12px}
.s20 .map .r{display:flex;align-items:center;gap:10px;padding:7px 12px;border-top:1px solid var(--line2)}
.s20 .map .r:first-child{border-top:0}
.s20 .map .a{width:150px;color:var(--ink2)}
.s20 .map .sel{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--line);border-radius:6px;padding:2px 8px;background:#fff;min-width:130px}
.s20 .map .m{margin-left:auto;color:var(--ink3);font-size:12px}
.s20 .sum{display:flex;gap:8px;align-items:center;font-size:13.5px;margin:0 0 10px}
.s20 .sum b{font-weight:600}
.s20 .warn{display:flex;gap:10px;background:#fbf3e1;border:1px solid #e6cf9a;border-radius:8px;padding:9px 12px;color:#5a4410;font-size:12.5px;line-height:1.45;margin-bottom:8px}
.s20 .warn svg{width:15px;height:15px;flex:none;margin-top:2px;color:#a9741a}
.s20 .nb{color:var(--ink3);font-size:12px;margin:2px 0 6px}
.s20 .scrimx{position:absolute;inset:0;background:rgba(238,238,235,.55);z-index:30}
.s20b{display:flex;gap:20px;padding:20px 28px 24px;align-items:flex-start;background:#e3e3e0}
.s20b .crop{width:700px}
.s20b .fw{position:relative;height:250px;background:#fff;overflow:hidden}
.s20b .fw .ln{height:9px;border-radius:5px;background:#ececea;margin:0 0 14px}
.s20b .fw .lines{position:absolute;left:90px;right:90px;top:26px}
.s20b .fw .drop{position:absolute;inset:10px;border:2px dashed var(--accent);border-radius:12px;background:rgba(59,110,168,.07);display:flex;align-items:center;justify-content:center}
.s20b .fw .drop .c{background:#fff;border:1px solid var(--line);border-radius:10px;box-shadow:0 8px 24px rgba(0,0,0,.14);padding:12px 16px;width:430px;font:13.5px/1.45 var(--ui)}
.s20b .fw .drop .c .row{display:flex;gap:8px;margin-top:10px;align-items:center}
.s20b .doc{width:26px;height:32px;border:1px solid var(--line);border-radius:3px;background:#fff;font:600 7px/32px var(--ui);text-align:center;color:#3b6ea8;display:inline-block}
.s20b .doors{width:560px;align-self:center;font:13.5px/1.6 var(--ui);color:var(--ink)}
.s20b .doors li{margin:0 0 8px}
.s20b .doors kbd{margin:0 2px}
</style>`;

const dlg = `<div class="dlg"><div class="dlg-h">Add notes from a reader’s copy<span class="x">✕</span></div><div class="dlg-b">`
  + `<div class="file"><span class="doc">DOCX</span><span class="t"><b>The Blue Lamp – for Marta.docx</b><small>Downloads · Nov 12</small></span><span class="lk">Choose another…</span></div>`
  + `<div class="found">This is the copy you sent <b>on Nov 7, 18:32</b>. Libreto knows what was in it, so it can tell what Marta changed.</div>`
  + `<div class="nums"><div><b>212</b><small>comments</small></div><div><b>63</b><small>tracked changes</small></div><div><b>9</b><small>untracked edits<br>found by comparing with what you sent</small></div></div>`
  + `<h5>Who is who</h5><div class="map"><div class="r"><span class="a">Usuario <small>(name in the file)</small></span><span>→</span><span class="sel">${who('M')}Marta ▾</span><span class="m">212 comments · 63 changes</span></div>`
  + `<div class="r"><span class="a">(no name) </span><span>→</span><span class="sel">${who('M')}Marta ▾</span><span class="m">9 untracked edits</span></div></div>`
  + `<div class="sum">Comments: <b>198 already imported</b> · <b>14 new</b><span style="color:var(--ink3);font-size:12px;margin-left:6px">Adding the same copy twice is safe: nothing is added twice.</span></div>`
  + `<div class="warn">${I.info}<span><b>38 % of paragraphs changed since you sent it.</b> Libreto compares three ways, what you sent, what you have now and what Marta did, so your own edits stay. Where you both changed the same words, you decide (S21).</span></div>`
  + `<div class="nb">Nothing is applied to your text: her changes wait in Review, under her own round.</div>`
  + `</div><div class="dlg-f"><span class="sp"></span><span class="btn">Cancel</span><span class="btn pri">Add 14 notes and 72 changes</span></div></div>`;

const html = css + C.css + L.win({
  view: 'Text', crumbs: L.sample.crumbs7, strip: { review: 12 },
  page: L.pageCol(col, { paddingTop: 40 }), ask: false,
  status: { style: 'Plain', words: '2,418 words', pages: 'p. 146 of 248' },
  content: '<div class="scrimx"></div>',
  extra: dlg
    + L.ann(1, 'Libreto recognizes its own copy: it says when you sent it and compares against that', 20, 190, { w: 320 })
    + L.ann(2, 'Word’s author name is mapped to a reader once; next time it is remembered', 20, 470, { w: 320 })
    + L.ann(3, 'Importing twice adds only what is new', 1080, 500, { w: 290 })
    + L.ann(4, 'A warning, not a block: three-way comparison keeps your edits', 1080, 600, { w: 290 }),
}).replace('<div class="win"', '<div class="win s20"')
 + `<div class="s20b"><div class="crop"><div class="lbl">How one finds it: drop the .docx on the window</div><div class="fw"><div class="lines">${'<div class="ln"></div>'.repeat(14)}</div>`
 + `<div class="drop"><div class="c"><div style="display:flex;gap:10px;align-items:center"><span class="doc">DOCX</span><span><b>This is the copy you sent to Marta on Nov 7</b><br><span style="color:var(--ink3)">The Blue Lamp – for Marta.docx</span></span></div><div class="row"><span class="btn pri">Add her notes</span><span class="btn">Open as a new project</span></div></div></div></div></div>`
 + `<ul class="doors"><b>Three doors, the same dialog</b><li>Drop the file on the window (left).</li><li>Review margin ▸ <b>Add notes from a reader’s copy…</b></li><li>File ▸ <b>Add notes from a reader’s copy…</b></li></ul></div>`;

module.exports = {
  id: 'S20', file: 's20-readers-copy', title: 'A reader’s copy comes back', width: 1440, height: 900 + 340,
  html,
  caption: L.caption({
    id: 'S20', title: 'A reader’s copy comes back',
    scene: 'Marta returned her Word copy. The writer chose “The Blue Lamp – for Marta.docx” and the import dialog opened over the dimmed text. Below the window: dropping the file on Libreto offers the same thing in one line.',
    on: 'the dialog (file row; “the copy you sent on Nov 7, 18:32”; 212 comments · 63 tracked changes · 9 untracked edits; Who is who with Usuario → Marta ▾; “198 already imported · 14 new”; the 38 % warning; Cancel · Add 14 notes and 72 changes); under it the drop frame (“This is the copy you sent to Marta on Nov 7 · Add her notes”) and the three doors',
    off: 'the walk (S19), the conflict card (S21), a Compare sheet, any change already applied to the text',
  }),
};
