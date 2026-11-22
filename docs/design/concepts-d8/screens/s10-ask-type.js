// S10: Ask while typing (draft 8; from draft 7's S08). Results come from the index, no AI while you type.
// Window: "led" (A). Below: "what if Lena" (B, AI actions, the question row preselected) and no AI connected (C).
const L = require('../lib');
const B = require('../b2-parts');
const P = L.sample.chapter7Plain;

const col = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>`
  + P.map((p, i) => `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`).join('');

const css = `<style>
.pal{position:absolute;z-index:30;background:#fff;border:1px solid #dcdcd8;border-radius:12px;box-shadow:0 18px 50px rgba(0,0,0,.18),0 2px 6px rgba(0,0,0,.06);font-size:13px;overflow:hidden}
.pal-in{display:flex;align-items:center;gap:9px;height:44px;padding:0 14px;border-bottom:1px solid var(--line2)}
.pal-in .typed{flex:1;font-size:14.5px;color:var(--ink)}
.pal-in .typed:after{content:"";display:inline-block;width:1px;height:17px;background:var(--ink);vertical-align:-3px;margin-left:1px}
.pal-in kbd{font-size:10.5px}
.pal .grp{padding:4px 6px 2px}
.pal .grp+.grp{border-top:1px solid var(--line2);margin-top:2px}
.pal .gh{font:600 10.5px var(--ui);letter-spacing:.08em;text-transform:uppercase;color:var(--ink3);padding:5px 8px 3px;display:flex;gap:8px}
.pal .gh i{font:400 11px var(--ui);letter-spacing:0;text-transform:none;color:var(--ink3)}
.pal .r{display:flex;align-items:center;gap:10px;padding:5px 8px;border-radius:6px}
.pal .r .k{width:84px;flex:none;display:flex;align-items:center;gap:6px;color:var(--ink3);font-size:11.5px}
.pal .r .k .kg{display:inline-flex;width:14px;height:14px}
.pal .r .k .kg svg{width:14px;height:14px}
.pal .r .t{flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.pal .r .t b{font-weight:600}
.pal .r .h{flex:none;color:var(--ink3);font-size:11.5px;white-space:nowrap}
.pal .r.cur{background:var(--accent-tint)}
.pal .r.cur .h{color:var(--accent)}
.pal .r .more{color:var(--accent);font-size:12.5px}
.pal .r.gray .t{color:var(--ink3)}
.pal .r.gray .conn{color:var(--accent);opacity:.8;text-decoration:underline;text-underline-offset:2px}
.pal .r .cost{color:var(--ink2)}
.pal-f{display:flex;gap:14px;padding:7px 14px;border-top:1px solid var(--line2);background:var(--soft);font-size:11.5px;color:var(--ink3);white-space:nowrap}
.pal-f kbd{margin-right:3px}
.below.s10 .crop{height:500px;background:#f4f4f2}
.below.s10 .crop .pal{left:40px;top:44px;width:460px}
</style>`;

const kg = (k) => `<span class="kg">${B.KIND[k][0]}</span>${B.KIND[k][1]}`;
const row = (k, text, hint, o = {}) => `<div class="r${o.cur ? ' cur' : ''}${o.gray ? ' gray' : ''}"><span class="k">${k ? kg(k) : ''}</span><span class="t">${text}</span>${hint ? `<span class="h">${hint}</span>` : ''}</div>`;
const more = (n) => `<div class="r"><span class="k"></span><span class="t"><span class="more">${n} more…</span></span></div>`;
const grp = (head, rows, note) => `<div class="grp">${head ? `<div class="gh">${head}${note ? `<i>${note}</i>` : ''}</div>` : ''}${rows.join('')}</div>`;
const foot = (items) => `<div class="pal-f">${items.map(([k, t]) => `<span><kbd>${k}</kbd>${t}</span>`).join('')}</div>`;
const pal = (typed, groups, f, style) => `<div class="pal" style="${style}"><div class="pal-in">${L.icons.logo}<span class="typed">${typed}</span><kbd>Esc</kbd></div>${groups.join('')}${foot(f)}</div>`;

// A: "led", an AI is connected. A word or two does not look like a question: Go to wins.
const A = pal('led', [
  grp('Go to', [
    row('chapter', 'Chapter 5 · Kit’s <b>led</b>ger', 'Enter: go', { cur: true }),
    row('thing', 'The little green <b>led</b>ger', 'Codex'),
    row('topic', '<b>Led</b>gers and pawn tickets', 'Research'),
    more(4)]),
  grp('Do', [
    row('cmd', 'Find “<b>led</b>” in the text', 'Ctrl+F'),
    row('cmd', 'Rename “<b>led</b>ger” everywhere…', ''),
    more(3)]),
  grp('', [row('ask', 'Ask: <b>led</b>…', 'Ctrl+Enter')]),
], [['Enter', 'goes'], ['↑ ↓', 'pick'], ['Ctrl+Enter', 'asks the AI'], ['Esc', 'back to the text']], 'left:440px;top:88px;width:560px');

// B: "what if Lena", three words: the question row is preselected, actions show their cost
const Bp = pal('what if Lena', [
  grp('Go to', [
    row('person', '<b>Lena</b>', 'Codex'),
    row('scene', '<b>Lena</b> lies about the back room', 'ch. 7'),
    more(5)]),
  grp('AI actions', [
    row('ai', 'What if… for this scene', '<span class="cost">≈ 0.01 €</span>'),
    row('ai', 'Brainstorm about Lena', '<span class="cost">≈ 0.01 €</span>')], 'asks the AI; the cost is an estimate'),
  grp('', [row('ask', 'Ask: <b>what if Lena</b>…', 'Enter asks', { cur: true })]),
], [['Enter', 'asks'], ['↑ ↓', 'pick'], ['Ctrl+Enter', 'always asks'], ['Esc', 'back']], '');

// C: the same words, no AI connected: no AI group, the last row offers to connect one
const C = pal('what if Lena', [
  grp('Go to', [
    row('person', '<b>Lena</b>', 'Enter: go', { cur: true }),
    row('scene', '<b>Lena</b> lies about the back room', 'ch. 7'),
    more(5)]),
  grp('', [row('link', '<span class="conn">Connect an AI to ask questions</span>', '', { gray: true })]),
], [['Enter', 'goes'], ['↑ ↓', 'pick'], ['Esc', 'back']], '');

const html = css + L.win({
  view: 'Text', crumbs: L.sample.crumbs7, strip: { review: 12 },
  page: L.pageCol(col, { paddingTop: 40 }),
  status: { style: 'Plain', words: '812 of 1,000 today', goal: 81, pages: 'p. 146 of 248' },
  ask: 'normal',
  content: '',
  extra: A
    + L.ann(1, 'Ctrl+K opens one box over the text. While you type, results come from Libreto’s index; no AI is asked and nothing costs anything', 24, 150, { w: 330 })
    + L.ann(2, 'Two or fewer words and no “?”: it is not a question, so the first Go to row is preselected and the hint says Enter: go', 24, 290, { w: 330 })
    + L.ann(3, 'Exact name before prefix before part of a word; the current chapter and recent things first. Nothing spins', 1030, 200, { w: 300 })
    + L.ann(4, 'Ctrl+Enter asks the AI from any state; the last row is the same question', 1030, 330, { w: 300 })
    + L.ann(5, 'Hits inside the text are Find (Ctrl+F), one key away', 24, 440, { w: 330 }),
})
  + `<div class="below s10"><div class="crop" style="width:700px"><div class="lbl">B · Three words that look like a question, an AI connected</div>${Bp.replace('<div class="pal" style="">', '<div class="pal">')}`
  + L.ann(6, 'The question row is preselected only when the box looks like a question (three words or more, or a “?”). AI actions say what they cost before they run', 40, 410, { w: 420 })
  + `</div><div class="crop" style="width:672px"><div class="lbl">C · The same words, no AI connected</div>${C.replace('<div class="pal" style="">', '<div class="pal">')}`
  + L.ann(7, 'No AI: no AI actions, and the last row says how to get one (Settings ▸ AI). Everything else works', 40, 330, { w: 420 })
  + `</div></div>`;

module.exports = {
  id: 'S10', file: 's10-ask-type', title: 'Ask while typing', width: 1440, height: 1110,
  html,
  caption: L.caption({
    id: 'S10', title: 'Ask while typing',
    scene: 'Chapter 7 with the Ask box open over the text (Ctrl+K). A: the writer typed “led”; results come from the index, and the first Go to row is preselected because three letters are no question. B (below): “what if Lena”, three words, with an AI connected: Go to Lena, an AI actions group with a cost on each row, and the question row preselected. C: the same words with no AI connected.',
    on: 'the box with its input and Esc, the groups Go to (Chapter 5 · Kit’s ledger preselected with “Enter: go”, The little green ledger · Codex, Ledgers and pawn tickets · Research, 4 more…), Do (Find, Rename…), the row “Ask: led…” with Ctrl+Enter, the keys line; B: Go to Lena and Lena lies about the back room, AI actions (What if… for this scene · ≈ 0.01 €, Brainstorm about Lena · ≈ 0.01 €), “Ask: what if Lena…” preselected; C: no AI group, the gray row “Connect an AI to ask questions”; the strip with Text pressed and Review 12; the status bar with the goal ring (812 of 1,000 today); the Ask button',
    off: 'a spinner, an In the text group, the navigator, the side panel, a conversation, a provider logo',
  }),
};
