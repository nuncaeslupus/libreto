// S22: A reader's copy, compared. The Compare sheet: the manuscript today in one column, blocks under the paragraphs that differ.
const L = require('../lib');

const css = `<style>
.cmp{position:absolute;left:50%;transform:translateX(-50%);width:660px;top:0;bottom:0;padding:14px 20px 0;font:16px/1.55 var(--text);color:var(--ink)}
.cmpbar{display:flex;align-items:center;gap:10px;background:var(--soft);border:1px solid var(--line);border-radius:8px;padding:6px 8px 6px 12px;font:12.5px var(--ui);color:var(--ink2);margin-bottom:12px}
.cmpbar .sp{flex:1}
.fold{display:flex;align-items:center;gap:10px;color:var(--ink3);font:11.5px var(--ui);margin:8px 0}
.fold:before,.fold:after{content:"";flex:1;border-top:1px dashed var(--line)}
.cmp p{margin:0;text-indent:1.5em;position:relative}
.cmp .card{margin:8px 0 12px;border:1px solid var(--line);border-radius:9px;background:var(--paper);overflow:hidden}
.cmp .card .lab{font:600 10.5px var(--ui);letter-spacing:.08em;text-transform:uppercase;color:var(--ink3);padding:8px 12px 0}
.cmp .card .tx{padding:3px 12px 9px;font-size:15px;line-height:1.5}
.cmp .card .acts{display:flex;gap:8px;padding:7px 12px;border-top:1px solid var(--line2);background:var(--soft);font-family:var(--ui)}
.cmp .two{display:flex;gap:10px;margin:8px 0 8px}
.cmp .two .card{flex:1;margin:0}
.cmp .two .card .tx{font-size:14px}
.cmp .btns{display:flex;gap:8px;margin:0 0 8px;font-family:var(--ui)}
.cmp .choice{margin:0 0 12px;font-size:15px;line-height:1.5}
.cmp .choice .cols>div{padding:8px 12px 10px}
.cmp .choice .acts{padding:7px 12px}
.ins{background:rgba(59,110,168,.16);border-radius:2px}
.del{text-decoration:line-through;color:var(--ink3);text-decoration-color:var(--ink3)}
.from{font:11.5px var(--ui);color:var(--ink3);margin:3px 0 4px 1.5em;display:flex;gap:6px;align-items:center}
.from i{width:7px;height:7px;border-radius:50%;background:var(--ink4);display:inline-block}
.mnote{position:absolute;left:calc(50% + 350px);width:250px;background:var(--paper);border:1px solid var(--line);border-radius:9px;padding:8px 12px;font:12.5px/1.45 var(--ui);box-shadow:0 1px 4px rgba(0,0,0,.04)}
.mnote .nh2{display:flex;gap:6px;align-items:center;margin-bottom:4px;font-size:11px;color:var(--ink3)}
.mnote .nh2 svg{width:13px;height:13px;color:var(--note)}
.mnote:before{content:"";position:absolute;left:-30px;top:16px;width:30px;border-top:1px solid var(--line)}
</style>`;

const body = `<div class="cmp">
  <div class="cmpbar"><span>Take all of Marta’s changes in paragraphs you did not touch (9)</span><span class="sp"></span><span class="btn" style="height:24px;padding:0 10px">Take all 9</span></div>
  <div class="fold">2 paragraphs unchanged</div>
  <p>“Kit who?” Lena set a glass down hard enough to make it ring. “Half the city’s called Kit.”</p>
  <div class="card"><div class="lab">Marta’s</div><div class="tx">“Kit who?” Lena set a glass down <span class="del">hard enough to make it ring</span> <span class="ins">harder than she needed to</span>. “Half the city’s called Kit.”</div><div class="acts"><span class="btn pri">Take</span><span class="btn">Keep mine</span></div></div>
  <div class="fold">1 paragraph unchanged</div>
  <p>Lena looked at the coin, then at the door behind her, then at nothing at all. “Nobody came in at nine. Nobody’s been in that room since Tuesday.”</p>
  <div class="two">
    <div class="card"><div class="lab">Yours since sending</div><div class="tx">Lena looked at the coin, then at the door behind her, <span class="ins">then at nothing at all</span>. “Nobody came in at nine. Nobody’s been in that room since Tuesday.”</div></div>
    <div class="card"><div class="lab">Marta’s</div><div class="tx">Lena looked at the coin, then at the door behind her. “Nobody came in at nine. Nobody’s been in <span class="del">that room</span> <span class="ins">there</span> since Tuesday.”</div></div>
  </div>
  <div class="btns"><span class="btn">Keep mine</span><span class="btn">Take Marta’s</span><span class="btn">Keep both</span><span class="btn">Merge for me</span></div>
  <div class="choice"><div class="cols"><div><div class="lab">Merged by the AI</div>Lena looked at the coin, then at the door behind her, then at nothing at all. “Nobody came in at nine. Nobody’s been in <span class="chg">there</span> since Tuesday.”</div></div><div class="acts"><span class="btn pri">Use this</span><small>A proposal; the paragraph changes only if you take it</small></div></div>
  <div class="fold">1 paragraph unchanged</div>
  <p>“Then hear this.” Lena leaned close enough that Vega could smell the lemon on her hands. “Go home. Don’t come back to the Blue Lamp tomorrow. And don’t ask Kit what he saw.”</p>
  <div class="from"><i></i>from Marta’s copy</div>
</div>
<div class="mnote" style="top:614px"><div class="nh2">${L.icons.note}<span style="color:var(--ink2);font-weight:500">Note</span><span>· Marta</span></div>Lemon again?</div>`;

const sheetHtml = L.sheet({
  title: 'Compare: Marta’s copy (Nov 12)',
  body,
  actions: `<span style="color:var(--ink2)">4 of 18 decided</span><span style="display:inline-flex;align-items:center;gap:6px;margin-left:8px"><span class="cb on"></span>Only differences</span><span class="btn pri" style="margin-left:6px">Done</span>`,
});

const html = L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  page: L.pageCol(``, { paddingTop: 40 }),
  status: { style: 'Plain', words: '2,418 words', pages: 'book p. ~146/248', fixes: '3 fixes' },
  ask: 'normal',
  content: sheetHtml,
  extra: css
    + L.ann(1, 'Sides are named by person: Marta’s, and yours since sending. The version you sent is used underneath and never shown', 24, 240, { w: 250 })
    + L.ann(2, 'Only differences: the unchanged paragraphs fold away', 24, 150, { w: 250 })
    + L.ann(3, 'Changed by both: two compact cards and four buttons, never more', 24, 450, { w: 250 })
    + L.ann(4, 'Merge for me is a proposal from the AI; it enters only with Use this', 1072, 560, { w: 250 })
    + L.ann(5, 'Nothing enters the text before Done; Back to the text leaves at any time', 1072, 130, { w: 250 })
    + L.ann(6, 'Her comments skip the merge and become notes with her name', 1072, 680, { w: 250 }),
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
    scene: 'Receiving Marta’s copy opened Compare as a sheet over the window. The manuscript as it is today runs down one column; only the paragraphs that differ carry a block: one Marta alone changed, one changed by both (with the AI’s merge proposed), one already decided. Her note sits in the margin.',
    on: 'the sheet header (Back to the text, the title, 4 of 18 decided, Only differences, Done), the Take-all bar, folded unchanged paragraphs, Marta’s card with Take and Keep mine, two cards side by side with four buttons and the merged proposal, a decided paragraph marked “from Marta’s copy”, Marta’s margin note, the Ask button',
    off: 'the version as sent, “theirs” and “mine”, a third column, red banners, any change in the text before Done',
  }),
};
