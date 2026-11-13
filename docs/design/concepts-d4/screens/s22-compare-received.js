// S22: A reader's copy, compared. The Compare sheet: the manuscript today in one column, Marta's version
// in a box under each paragraph she changed, wavy lines for what is folded, decided rows folded to one line.
const L = require('../lib');

const wave = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='6'%3E%3Cpath d='M0 3 Q3 0 6 3 T12 3' fill='none' stroke='%23b9b9b4' stroke-width='1.2'/%3E%3C/svg%3E")`;

const css = `<style>
.strip .modes{opacity:.35}
.cmp{position:absolute;left:50%;transform:translateX(-50%);width:660px;top:0;bottom:0;padding:14px 20px 0;font:16px/1.55 var(--text);color:var(--ink)}
.fold{display:flex;align-items:center;gap:10px;color:var(--ink3);font:12px var(--ui);margin:10px 0}
.fold:before,.fold:after{content:"";flex:1;height:6px;background:${wave} repeat-x center}
.fold b{font-weight:400;font-size:14px;color:var(--ink4)}
.cmp p{margin:0;text-indent:1.5em}
.cmp .mk{background:rgba(59,110,168,.16);border-radius:2px}
.cmp .gone{text-decoration:line-through;color:var(--ink3)}
.cmp .box{margin:8px 0 6px;border:1px solid var(--line);border-left:3px solid var(--task);border-radius:8px;background:#fff;overflow:hidden}
.cmp .box .lab{font:600 10.5px var(--ui);letter-spacing:.08em;text-transform:uppercase;color:var(--ink3);padding:7px 12px 0}
.cmp .box .tx{padding:2px 12px 8px;font-size:15px;line-height:1.5}
.cmp .box.mine{border-left-color:var(--ink4)}
.cmp .acts{display:flex;gap:8px;align-items:center;margin:0 0 6px;font-family:var(--ui)}
.cmp .acts .btn svg{width:13px;height:13px}
.cmp .acts .e{min-width:28px;justify-content:center;padding:0 8px}
.cmp .acts small{color:var(--ink3);font-size:11.5px;margin-left:4px}
.cmp .decided{display:flex;align-items:center;gap:10px;font:12.5px var(--ui);color:var(--ink2);background:var(--soft);border:1px solid var(--line2);border-radius:7px;padding:6px 12px;margin:6px 0}
.cmp .decided svg{width:14px;height:14px;color:var(--fix)}
.cmp .decided .q{flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font:italic 14px var(--text);color:var(--ink3)}

.hdone{white-space:nowrap;margin-left:10px;display:inline-flex;align-items:center;gap:8px}
.hdone .btn.dis{color:var(--ink4);background:var(--soft);border-color:var(--line2)}
.hdone small{color:var(--ink3);font-size:11.5px}
.sheet-h .od{white-space:nowrap;display:inline-flex;align-items:center;gap:6px;color:var(--ink)}
.sheet-h .ttl b{font-weight:400;color:var(--ink2)}
</style>`;

const body = `<div class="cmp">
  <div class="decided">${L.icons.fix}<span>Took Marta’s</span><span class="q">“You’re early,” Lena said without looking up. “Or late…”</span><span class="lk">Undo</span></div>
  <div class="fold"><b>⌇</b>14 paragraphs unchanged</div>
  <p>“Kit who?” Lena set a glass down hard enough to make it ring. “Half the city’s called Kit.”</p>
  <div class="box"><div class="lab">Marta’s</div><div class="tx">“Kit who?” Lena set a glass down <span class="mk">harder than she meant to</span>. “Half the city’s called Kit.”</div></div>
  <div class="acts"><span class="btn pri">Take Marta’s</span><span class="btn">Keep mine</span><span class="btn e">E</span><small>edit the result first</small></div>
  <div class="fold"><b>⌇</b>2 paragraphs unchanged</div>
  <p>Lena looked at the coin, then at the door behind her, then at nothing at all. “Nobody came in at nine. Nobody’s been in that room since Tuesday.”</p>
  <div class="box mine"><div class="lab">Yours since sending</div><div class="tx">Lena looked at the coin, then at the door behind her, <span class="mk">then at nothing at all</span>. “Nobody came in at nine. Nobody’s been in that room since Tuesday.”</div></div>
  <div class="box"><div class="lab">Marta’s</div><div class="tx">Lena looked at the coin, then at the door behind her. “Nobody came in at nine. Nobody’s been in <span class="mk">there</span> since Tuesday.”</div></div>
  <div class="acts"><span class="btn">Keep mine</span><span class="btn">Take Marta’s</span><span class="btn">Keep both</span><span class="btn">${L.icons.spark}Merge for me</span><span class="btn e">E</span></div>
  <div class="fold"><b>⌇</b>1 paragraph unchanged</div>
  <p>“Lena,” she said quietly, “if he’s in trouble, I’d rather hear it from you.”</p>
  <div class="box"><div class="lab">Marta’s</div><div class="tx">“Lena,” she said <span class="mk">softly</span>, “if he’s in trouble, I’d rather hear it from you.”</div></div>
  <div class="acts"><span class="btn pri">Take Marta’s</span><span class="btn">Keep mine</span><span class="btn e">E</span></div>
  <div class="fold"><b>⌇</b>9 paragraphs unchanged</div>
</div>`;

const sheetHtml = L.sheet({
  title: 'Compare · Marta’s copy · 4 of 18 decided',
  body,
  actions: `<span class="od"><span class="cb on"></span>Only differences</span><span class="hdone"><small>when all 18 are decided</small><span class="btn dis">Done</span></span>`,
});

// her comment: a blue pending card in the margin, with her name
const comment = L.markCard({
  kind: 'pending', title: 'Pending · comment', sub: 'Marta', x: 1078, y: 368, w: 300,
  text: '<span style="color:var(--ink);font:italic 14px var(--text)">“Lemon again? It was on her hands in ch. 2 too.”</span><br>Goes to Review with her name, whatever you decide about the text.',
  acts: [['↩', 'Reply', ''], ['✓', 'Done', '']],
});

const html = css + L.win({
  mode: 'Review',
  crumbs: L.sample.crumbs7,
  strip: { reviewCount: 12 },
  page: L.pageCol(``, { paddingTop: 40 }),
  status: { style: 'Plain', words: '2,418 words', pages: 'book p. ~146/248', review: '12 to review' },
  ask: 'normal',
  content: sheetHtml,
  extra: comment
    + L.ann(1, '“Done” appears when all 18 are decided and applies them as one step; Back to the text leaves at any time, and the sheet resumes', 1078, 112, { w: 330 })
    + L.ann(2, 'A decided row folds to one line, with its choice and Undo', 40, 124, { w: 300 })
    + L.ann(3, 'A wavy line says what is folded; “Only differences” is on by default', 40, 172, { w: 300 })
    + L.ann(4, 'Only Marta changed it: her version in a box under yours, the changed words marked. E edits the result before taking it', 40, 252, { w: 300 })
    + L.ann(5, 'Both changed it: sides named by person, never “theirs” and “mine”; the version you sent stays underneath. Merge for me is an AI proposal', 40, 470, { w: 300 })
    + L.ann(6, 'Her comments become blue cards in Review, with her name', 1078, 520, { w: 300 }),
});

module.exports = {
  id: 'S22',
  file: 's22-compare-received',
  title: 'A reader’s copy, compared',
  width: 1440,
  height: 900,
  html,
  caption: L.caption({
    id: 'S22', title: 'A reader’s copy, compared',
    scene: 'Marta’s copy came back and Compare opened as a sheet over the window, the mode tabs dimmed behind it. The manuscript as it is today runs down one column; under each paragraph Marta changed, her version sits in a box. One row is already decided and folded; one paragraph only she changed; one both of you changed. Her comment waits in the margin as a blue card.',
    on: 'the sheet header (Back to the text, “Compare · Marta’s copy · 4 of 18 decided”, Only differences checked, a gray Done with “when all 18 are decided”), the folded decided row “Took Marta’s · Undo”, wavy lines “⌇ 14 / 2 / 1 / 9 paragraphs unchanged”, a paragraph with Marta’s box and Take Marta’s · Keep mine · E, a paragraph with “Yours since sending” and “Marta’s” boxes and Keep mine · Take Marta’s · Keep both · Merge for me (spark) · E, another Marta-only paragraph, her comment as a blue Pending card with her name, the dimmed mode tabs, the Ask button',
    off: 'the version as sent, “theirs” and “mine”, a third column, any change to the text before Done',
  }),
};
