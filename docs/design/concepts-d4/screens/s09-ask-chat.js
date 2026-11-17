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
  + `<div><span class="was">It was a good lie.</span> <span class="gap">[…]</span> But there was a wet ring on the bar by the back-room door, and a second glass <span class="was">upside down on the drainer, still beaded</span>.</div></div>`
  + `<div class="cmp-s"><div class="lab">Proposed</div>`
  + `<div><span class="now">It was a good lie, and she had told it before.</span> <span class="gap">[…]</span> But there was a wet ring on the bar by the back-room door, and a second glass <span class="now">on the drainer, still wet</span>.</div></div>`
  + `<div class="cmp-a"><span class="btn">Keep mine</span><span class="btn pri">Take proposed</span><span class="sp"></span><small><kbd>Tab</kbd> <kbd>Enter</kbd></small></div>`
  + `</div>`;

const messages = [
  { me: true, html: 'Does Lena give herself away in this paragraph?' },
  'Twice. She says nobody has been in the back room “since Tuesday”, yet in chapter 12 she tells <span class="lk">Kit</span> she unlocked it for him that Wednesday; and nine is the hour he named.'
  + '<div class="links"><span class="lk">Go to chapter 7</span><span class="lk">Go to chapter 12</span></div>'
  + '<div class="acts"><span class="btn">Add as a note</span></div>',
  { me: true, html: 'Tighten the paragraph after the lie.' },
  'Two sentences change; the one between them stays.' + block,
];

const extraCss = `<style>
.ask{width:392px;right:14px;bottom:72px;height:640px;max-height:none}
.ask-h .model{font:12px var(--ui);color:var(--ink3);white-space:nowrap;margin-right:6px;display:inline-flex;align-items:center;gap:5px}
.ask-h .model svg{width:12px;height:12px}
.ask-b{font-size:13px}
.ask-b .acts .btn{height:26px;padding:0 10px;font-size:12px}
.cmp{margin:8px 0 4px;border:1px solid var(--line);border-radius:9px;overflow:hidden;font:14px/1.5 var(--text);box-shadow:0 0 0 3px var(--accent-tint)}
.cmp-s{padding:7px 11px}
.cmp-s+.cmp-s{border-top:1px solid var(--line2)}
.cmp .lab{font:600 10px var(--ui);letter-spacing:.08em;text-transform:uppercase;color:var(--ink3);margin-bottom:2px}
.cmp .gap{font:12px var(--ui);color:var(--ink3);background:var(--soft);border-radius:3px;padding:0 3px;letter-spacing:.05em;white-space:nowrap}
.ask-b .links{display:flex;gap:16px;margin:6px 0 2px}.ask-b .links .lk{text-decoration:underline;text-underline-offset:2px}
.cmp-a small{white-space:nowrap}.cmp-a small kbd{font-size:10px;padding:0 4px}
.ask .ask-h{padding:0 6px}.ask .ask-h b{flex:0 1 auto;min-width:0;margin-left:6px}.ask .ask-h .model{flex:none}.ask .ask-h .sp{flex:1}
.ask .ask-h .x{width:26px;height:26px;display:inline-flex;align-items:center;justify-content:center;font-size:13px;color:var(--ink2)}
.cmp .was{background:rgba(196,61,61,.10);border-radius:2px}
.cmp .now{background:var(--accent-soft);border-radius:2px}
.cmp-a{display:flex;gap:8px;align-items:center;padding:8px 11px;border-top:1px solid var(--line2);background:var(--soft);font-family:var(--ui)}
.cmp-a .btn{height:26px;padding:0 10px;font-size:12px}
.cmp-a .sp{flex:1}.cmp-a small{color:var(--ink3);font-size:11px}
.ref.dim{opacity:.45}
.page .lbar{position:absolute;left:-14px;top:5px;height:84px;width:2px;background:var(--accent);border-radius:1px}
</style>`;

// header: + and the clock at the left, the conversation and the model, – and ✕ at the right
const head = `<div class="ask-h">${L.ib('plus', '', 'New conversation')}${L.ib('history-list', '', 'Earlier conversations')}`
  + `<b class="dd">Lena’s lie</b><span class="model">· ${L.icons.spark}Claude · Sonnet</span><span class="sp"></span>`
  + `${L.ib('collapse', '', 'Fold into the button')}<span class="x" title="Close">✕</span></div>`;
const panel = L.askPanel({ title: 'Lena’s lie', messages })
  .replace(/<div class="ask-h">.*?<\/div>/, head)
  .replace('<span class="ph">Ask, find, or jump…</span>', '<span class="ph">Message</span>');

const right = L.reference({ kind: 'Person', name: 'Lena', backOn: true, body: L.refCard(L.sample.lena) })
  .replace('<div class="ref">', '<div class="ref dim">');

const html = extraCss + L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  right,
  page: L.pageCol(col, { paddingTop: 40 }),
  strip: { reviewCount: 12 },
  status: { style: 'Plain', words: '2,418 words', pages: 'p. 146 of 248' },
  ask: L.askButton('normal') + panel,
  extra: L.ann(1, 'The conversation floats over the right column, which dims under it; the page keeps its place. It can be moved and resized; – folds it into the button with its conversation, and a dot on the button says an answer is waiting', 40, 130, { w: 300 })
    + L.ann(2, 'The header names the model in use; + and the clock at the left, – and ✕ at the right, as in S08', 40, 250, { w: 300 })
    + L.ann(3, 'An answer about two places offers two links, nothing cleverer: a chapter moves the page (Back returns), a person opens the Reference panel', 40, 340, { w: 300 })
    + L.ann(4, 'Only the changed sentences, with “[…]” inline for the unchanged stretch between them', 40, 540, { w: 300 })
    + L.ann(5, 'Keep mine, then Take proposed, in the order of the two texts; Tab moves, Enter presses. Nothing changes until a button is clicked, and then it is one Undo away', 40, 650, { w: 300 }),
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
    scene: 'The writer asked whether Lena gives herself away, then asked to tighten the paragraph after her lie. The conversation floats over the Reference panel, dimmed under it. The AI answered with the two places as two links, Go to chapter 7 and Go to chapter 12, and an Add as a note button; then with a comparison that shows only the two changed sentences of the long paragraph, “[…]” inline for the stretch between them, and Keep mine · Take proposed. The paragraph under discussion has a thin bar at its left in the page.',
    on: 'the Ask panel titled “Lena’s lie” with the model “Claude · Sonnet” (+ and clock at the left, – and ✕ at the right), two exchanges, a link to Kit, the links Go to chapter 7 and Go to chapter 12, the button Add as a note, the Yours / Proposed block with “[…]” inline, Keep mine and Take proposed with the small Tab · Enter hint, the Message input; the dimmed Reference panel with Lena under it; the thin bar in the page; the mode switch with 12 on Review; the Ask button',
    off: 'an applied change, the whole paragraph repeated twice, the navigator, a provider logo',
  }),
};
