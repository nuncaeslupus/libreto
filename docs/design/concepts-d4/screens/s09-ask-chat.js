// S09: Ask, a conversation. The panel floats over the right margin; the proposed edit arrives in the page.
const L = require('../lib');
const P = L.sample.chapter7Plain.slice();

// paragraph 6: the second tell, tinted in the text
P[6] = P[6].replace('a wet ring on the bar by the back-room door', '<span class="tint">a wet ring on the bar by the back-room door</span>');

const choice = `<div class="choice"><div class="cols">`
  + `<div><div class="lab">Before</div>${L.sample.chapter7Plain[5]}</div>`
  + `<div><div class="lab">After</div>Lena <span class="chg">glanced at the door behind her.</span> “Nobody came in at nine. Nobody’s been in that room since Tuesday.”</div>`
  + `</div><div class="acts"><span class="btn pri">Apply</span><span class="btn">Skip</span><span class="sp"></span><small>Proposed by the AI · nothing changed yet</small></div></div>`;

const col = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>`
  + P.map((p, i) => {
    const para = `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`;
    if (i === 5) return `<div class="para"><span class="lbar"></span>${para}${choice}</div>`;
    return para;
  }).join('');

const messages = [
  { me: true, html: 'Does Lena give herself away in this paragraph?' },
  'Twice. She looks at the back-room door before she answers, and she says “since Tuesday”, but in <span class="lk">ch. 8, “Closing time”</span> she locks that door on Tuesday night herself. There is a second tell a few lines down: <span class="lk">the wet ring by the door</span>.'
  + '<div class="acts"><span class="btn">Add as a note</span><span class="btn">Show both places</span></div>',
  { me: true, html: 'Keep the date. Make the look shorter.' },
  'Here is a shorter version of the look:',
  '<span style="color:var(--ink2)">Apply it in the page when you are ready.</span>',
];

const extraCss = `<style>
.ask{width:380px}
.page .choice{margin:14px 0}
.page .tint{background:var(--accent-tint);box-shadow:inset 0 -2px 0 var(--accent-soft);border-radius:2px}
.page .lbar{position:absolute;left:-14px;top:5px;height:56px;width:2px;background:var(--accent);border-radius:1px}
.ask-b .acts .btn{height:26px;padding:0 10px;font-size:12px}
</style>`;

const panel = L.askPanel({ title: 'Lena and the back room', messages })
  .replace('<span class="ph">Ask, find, or jump…</span>', '<span class="ph">Message</span>');

const html = extraCss + L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  page: L.pageCol(col, { paddingTop: 40 }),
  status: { style: 'Plain', words: '2,418 words', pages: 'book p. ~146/248', fixes: '3 fixes' },
  ask: L.askButton('dot') + panel,
  extra: L.ann(1, 'Links in the answer move the page (a chapter) or the panel (a person); Back returns', 40, 360, { w: 300 })
    + L.ann(2, 'A change to the text arrives in the page as before and after; nothing is applied until Apply', 40, 600, { w: 300 })
    + L.ann(3, 'The panel floats over the margin, never over the page; – or Esc folds it into the button', 1062, 130, { w: 300 })
    + L.ann(4, 'The clock lists past conversations; + starts a new one', 1062, 202, { w: 300 })
    + L.ann(5, 'The dot on the button: an answer is waiting', 1098, 822, { w: 220 }),
});

module.exports = {
  id: 'S09',
  file: 's09-ask-chat',
  title: 'Ask: a conversation',
  width: 1440,
  height: 900,
  html,
  caption: L.caption({
    id: 'S09', title: 'Ask: a conversation',
    scene: 'The writer asked whether Lena gives herself away. The AI answered with two links and two buttons; asked for a shorter look, it put a before-and-after block under the paragraph in the page, with Apply and Skip. The paragraph under discussion has a thin bar at its left; the second tell is tinted in the text.',
    on: 'the Ask panel titled “Lena and the back room” (history, new, collapse) with two exchanges, links to ch. 8 and to the wet ring, buttons Add as a note and Show both places, the closing line, the Message input; in the page the before/after block with Apply and Skip under the paragraph, the thin left bar, the tinted words; the Ask button with its dot; the status bar',
    off: 'navigator, Reference panel, an applied change, Search &amp; ask box, provider icon in the status bar',
  }),
};
