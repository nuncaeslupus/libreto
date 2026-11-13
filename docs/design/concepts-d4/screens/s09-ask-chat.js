// S09: Ask, a conversation. The panel floats over the right column, which dims under it; a long paragraph
// is compared with only its changed sentences and "[…]" for the stretch between them.
const L = require('../lib');
const P = L.sample.chapter7Plain.slice();

const col = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>`
  + P.map((p, i) => {
    const para = `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`;
    if (i === 6) return `<div class="para"><span class="lbar"></span>${para}</div>`;
    return para;
  }).join('');

// the proposal on paragraph 6: the first and the last sentence change, the middle stays
const block = `<div class="cmp">`
  + `<div class="cmp-s"><div class="lab">Yours</div>`
  + `<div><span class="was">It was a good lie.</span></div><div class="gap">[…]</div>`
  + `<div>But there was a wet ring on the bar by the back-room door, and a second glass <span class="was">upside down on the drainer, still beaded</span>.</div></div>`
  + `<div class="cmp-s"><div class="lab">Proposed</div>`
  + `<div><span class="now">It was a good lie, and she had told it before.</span></div><div class="gap">[…]</div>`
  + `<div>But there was a wet ring on the bar by the back-room door, and a second glass <span class="now">on the drainer, still wet</span>.</div></div>`
  + `<div class="cmp-a"><span class="btn pri">Take proposed</span><span class="btn">Keep mine</span><span class="sp"></span><small>nothing changed yet</small></div>`
  + `</div>`;

const messages = [
  { me: true, html: 'Does Lena give herself away in this paragraph?' },
  'Twice. She says “since Tuesday”, but in <span class="lk">ch. 8, “Closing time”</span> she locks that door herself that night; and nine is the hour <span class="lk">Kit</span> named.'
  + '<div class="acts"><span class="btn">Add as a note</span><span class="btn">Show both places</span></div>',
  { me: true, html: 'Tighten the paragraph after the lie.' },
  'Two sentences change; the one between them stays.' + block,
];

const extraCss = `<style>
.ask{width:392px;right:14px;bottom:72px;height:640px;max-height:none}
.ask-h .model{font:12px var(--ui);color:var(--ink3);white-space:nowrap;margin-right:6px;display:inline-flex;align-items:center;gap:5px}
.ask-h .model svg{width:12px;height:12px}
.ask-h b{flex:1}
.ask-b{font-size:13px}
.ask-b .acts .btn{height:26px;padding:0 10px;font-size:12px}
.cmp{margin:8px 0 4px;border:1px solid var(--line);border-radius:9px;overflow:hidden;font:14px/1.5 var(--text);box-shadow:0 0 0 3px var(--accent-tint)}
.cmp-s{padding:7px 11px}
.cmp-s+.cmp-s{border-top:1px solid var(--line2)}
.cmp .lab{font:600 10px var(--ui);letter-spacing:.08em;text-transform:uppercase;color:var(--ink3);margin-bottom:2px}
.cmp .gap{font:12px var(--ui);color:var(--ink4);padding:1px 0 1px 2px;letter-spacing:.05em}
.cmp .was{background:rgba(196,61,61,.10);border-radius:2px}
.cmp .now{background:var(--accent-soft);border-radius:2px}
.cmp-a{display:flex;gap:8px;align-items:center;padding:8px 11px;border-top:1px solid var(--line2);background:var(--soft);font-family:var(--ui)}
.cmp-a .btn{height:26px;padding:0 10px;font-size:12px}
.cmp-a .sp{flex:1}.cmp-a small{color:var(--ink3);font-size:11px}
.ref.dim{opacity:.45}
.page .lbar{position:absolute;left:-14px;top:5px;height:84px;width:2px;background:var(--accent);border-radius:1px}
</style>`;

const panel = L.askPanel({ title: 'Lena and the back room', messages })
  .replace(/(<b class="dd">[^<]*<\/b>)/, `$1<span class="model">${L.icons.spark}Claude · Sonnet</span>`)
  .replace('<span class="ph">Ask, find, or jump…</span>', '<span class="ph">Message</span>');

const right = L.reference({ kind: 'Person', name: 'Lena', backOn: true, body: L.refCard(L.sample.lena) })
  .replace('<div class="ref">', '<div class="ref dim">');

const html = extraCss + L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  right,
  page: L.pageCol(col, { paddingTop: 40 }),
  strip: { reviewCount: 12 },
  status: { style: 'Plain', words: '2,418 words', pages: 'book p. ~146/248', review: '12 to review' },
  ask: L.askButton('normal') + panel,
  extra: L.ann(1, 'The conversation floats over the right column, which dims under it; the page keeps its place. Move it, resize it, or fold it into the button with – or Esc', 40, 130, { w: 300 })
    + L.ann(2, 'The header names the model in use; the clock lists earlier conversations, + starts a new one', 40, 236, { w: 300 })
    + L.ann(3, 'Links: a chapter moves the page (Back returns), a person opens the Reference panel', 40, 360, { w: 300 })
    + L.ann(4, 'A long paragraph is not repeated twice: only the changed sentences, “[…]” for the stretch between them', 40, 560, { w: 300 })
    + L.ann(5, 'Nothing changes until Take proposed; then it is one Undo away', 40, 700, { w: 300 }),
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
    scene: 'The writer asked whether Lena gives herself away, then asked to tighten the paragraph after her lie. The conversation floats over the Reference panel, dimmed under it. The AI answered with links and two buttons, then with a comparison that shows only the two changed sentences of the long paragraph, “[…]” between them, and Take proposed · Keep mine. The paragraph under discussion has a thin bar at its left in the page.',
    on: 'the Ask panel titled “Lena and the back room” with the model “Claude · Sonnet” (history, new, collapse), two exchanges, links to ch. 8 and to Kit, buttons Add as a note and Show both places, the Yours / Proposed block with the gray “[…]” line, Take proposed and Keep mine, the Message input; the dimmed Reference panel with Lena’s card under it; the thin bar in the page; the Review tab with 12; the Ask button; the status bar with 12 to review',
    off: 'an applied change, the whole paragraph repeated twice, the navigator, a provider logo',
  }),
};
