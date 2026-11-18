// S30: Changes since (draft 8; new from critique D 23b). Chapter 7 in the page, with a redline since Tuesday, inline:
// strike-through for what went, underline and tint for what came, a paragraph "moved from ch. 6", one "rewritten".
// A bar at the top; Restore appears on hover, per paragraph.
const L = require('../lib');

const del = (t) => `<del>${t}</del>`;
const ins = (t) => `<ins>${t}</ins>`;

const paras = [
  { t: `The Blue Lamp was ${del('half empty by ten')}${ins('empty by half past nine')}, which was how Vega liked it. The jukebox had given up on the evening, and the only sound was Lena drying glasses that were already dry, one after another, as if the cloth could rub the night off them.`, ch: true },
  { t: '“You’re early,” Lena said without looking up. “Or late. I can never tell with you.”' },
  { t: 'Vega took the stool at the end of the bar, the one with a view of the back-room door. “Has Kit been in?”' },
  { t: `“Kit who?” Lena set a glass down ${del('harder than she meant to')}${ins('hard enough to make it ring')}. “Half the city’s called Kit.”`, ch: true, hover: true },
  { t: '“Mine. Thin, nervous, writes everything down in a little green ledger.” Vega slid a coin across the counter and left her hand on it. “He said he’d meet me here at nine.”' },
  { t: `Lena looked at the coin, then at the door behind her${ins(', then at nothing at all')}. “Nobody came in at nine. Nobody’s been in that room since Tuesday.”`, ch: true },
  { t: `${ins('It was a good lie. Vega had heard worse from people who were paid to tell them. But there was a wet ring on the bar by the back-room door, and a second glass upside down on the drainer, still beaded.')}`, tag: 'moved from ch. 6', moved: true, th: true },
  { t: '“Lena,” she said quietly, “if he’s in trouble, I’d rather hear it from you.”' },
  { t: `“Then hear this.” Lena leaned close enough that Vega could smell the lemon on her hands. ${del('“Go home. Don’t come back to the Blue Lamp tomorrow. And don’t ask Kit what he saw.”')}${ins('“Go home. Don’t come back tomorrow, and don’t ask Kit what he saw. Not me. Not anyone.”')}`, tag: 'rewritten', ch: true },
];

const col = paras.map((p, i) => `<div class="para pc${p.ch || p.moved ? ' chg' : ''}${p.hover ? ' hov' : ''}">`
  + (p.tag ? `<span class="ptag${p.moved ? ' mv' : ''}">${p.tag}</span>` : '')
  + `<p${p.th ? ' class="thought"' : ''}${i === 0 ? ' style="text-indent:0"' : ''}>${p.t}</p>`
  + (p.hover ? `<span class="rst"><span class="btn">Restore</span><small>this paragraph, to Tue, Nov 10</small></span>` : '')
  + `</div>`).join('');

const css = `<style>
.s30 .strip .modes.views{opacity:.35}
.s30 .cbar{position:absolute;left:0;right:0;top:0;height:46px;z-index:12;background:#fff;border-bottom:1px solid var(--line);display:flex;align-items:center;gap:14px;padding:0 18px;font:13px var(--ui)}
.s30 .cbar b{font-weight:600}
.s30 .cbar .seg{border-radius:7px}
.s30 .cbar .seg .on{background:var(--ink);color:#fff;font-weight:500}
.s30 .cbar .sp{flex:1}
.s30 .cbar .stp{display:inline-flex;align-items:center;gap:6px;color:var(--ink2)}
.s30 .cbar .stp .ib{border:1px solid var(--line);width:24px;height:24px}
.s30 .pgs{position:absolute;left:0;right:0;top:46px;bottom:0;background:#fff;overflow:hidden}
.s30 .pgs .col{padding-top:34px;font-size:17.5px}
.s30 .pc{position:relative}
.s30 .pc.chg:before{content:"";position:absolute;left:-18px;top:6px;bottom:6px;width:3px;border-radius:2px;background:var(--accent)}
.s30 .pc.hov{background:rgba(59,110,168,.05);margin:0 -10px;padding:0 10px}
.s30 del{text-decoration:line-through;text-decoration-thickness:1.5px;text-decoration-color:#b04848;color:#8a5a5a;background:rgba(194,59,59,.08)}
.s30 ins{text-decoration:underline;text-decoration-thickness:1.5px;text-underline-offset:3px;text-decoration-color:#2e7d57;background:rgba(47,138,102,.13)}
.s30 del+ins{margin-left:.28em}
.s30 .ptag{position:absolute;left:-128px;top:6px;width:104px;text-align:right;font:500 11.5px/1.25 var(--ui);color:var(--ink2)}
.s30 .ptag.mv{color:var(--accent)}
.s30 .rst{position:absolute;right:-200px;top:4px;width:178px;display:flex;flex-direction:column;gap:3px;font-family:var(--ui)}
.s30 .rst .btn{width:max-content}
.s30 .rst small{color:var(--ink3);font-size:11.5px;line-height:1.3}
</style>`;

const bar = `<div class="cbar"><span>Changes in <b>Chapter 7</b> since <b>Tue, Nov 10</b></span>`
  + `<span class="seg"><span class="on">Inline</span><span>Side by side</span><span>Only changed</span></span>`
  + `<span class="stp"><span class="ib">${L.icons.back}</span>4 of 9<span class="ib">${L.icons.forward}</span></span>`
  + `<span class="sp"></span><span class="btn pri">Done</span></div>`;

const html = css + L.win({
  view: 'Text',
  crumbs: 'Chapter 7 · Lena’s warning',
  strip: { review: 12 },
  page: '',
  content: `<div style="position:absolute;inset:0">${bar}<div class="pgs"><div class="col" style="width:620px;margin:0 auto;position:relative;font:17.5px/1.7 var(--text);padding-top:34px">${col}</div></div></div>`,
  status: { style: 'Plain', words: '2,418 words', goal: 60, pages: 'p. 146 of 248' },
  ask: 'normal',
  extra: L.ann(1, 'Which chapter, since when; Inline, Side by side or Only changed; ‹ › step through the 9 changes; Done leaves with nothing changed', 1060, 192, { w: 320 })
    + L.ann(2, 'Struck through = taken out; underlined and tinted = put in. Shape first, color second. A bar at the left marks a paragraph that changed', 1060, 282, { w: 320 })
    + L.ann(3, 'Hover a paragraph: Restore puts it back as it was on Tuesday, as one new step', 1060, 452, { w: 320 })
    + L.ann(4, 'A paragraph that came from another chapter says where from', 14, 482, { w: 190 })
    + L.ann(5, 'A paragraph changed beyond a few words is labeled rewritten', 14, 664, { w: 190 })
    + L.ann(6, 'Nothing here is typed over: the text is read-only until Done', 14, 150, { w: 190 }),
});

module.exports = {
  id: 'S30',
  file: 's30-changes-since',
  title: 'Changes since',
  width: 1440,
  height: 900,
  html: html.replace('<div class="win"', '<div class="win s30"'),
  caption: L.caption({
    id: 'S30', title: 'Changes since',
    scene: 'From History, the writer chose Show changes on the work since Tuesday. Chapter 7 stays in the page, read-only, with its changes drawn inline: words struck through and put in, one paragraph labeled “moved from ch. 6” and one “rewritten”. The pointer rests on a changed paragraph, and its Restore button has appeared.',
    on: 'the strip with the view switch dimmed; the bar (Changes in Chapter 7 since Tue, Nov 10 · Inline | Side by side | Only changed · ‹ 4 of 9 › · Done); the page with struck-through and underlined, tinted words; a blue bar at the left of each changed paragraph; the labels “moved from ch. 6” and “rewritten”; the hovered paragraph with Restore and its line; the status bar; the Ask button',
    off: 'a sheet over the page (the text is in the page), the cursor, a list of versions, Review marks',
  }),
};
