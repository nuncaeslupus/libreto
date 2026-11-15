// S08: Ask, type and go. "led" typed; Go to and Do above the box, three rows each, and the question as the
// bottom row, preselected because an AI is connected. Under the window: the same box with no AI.
const L = require('../lib');
const P = L.sample.chapter7Plain;

const col = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>`
  + P.map((p, i) => `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`).join('');

// kind glyphs in the reveal hues (people violet, places cyan, things brown); never the four mark colors.
// askPanel() escapes the kind label, so the rows carry a token that is swapped for the glyph afterwards.
const g = (inner, color) => `<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="${color}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;
const KIND = {
  chapter: [L.icons.view, 'Chapter'],
  scene: [g('<path d="M3 4h10M3 8h10M3 12h6"/>', '#6b6e73'), 'Scene'],
  person: [g('<circle cx="8" cy="5.6" r="2.8" fill="#6f4fc9" stroke="none"/><path d="M2.8 14a5.2 5.2 0 0 1 10.4 0z" fill="#6f4fc9" stroke="none"/>', '#6f4fc9'), 'Person'],
  place: [g('<path d="M8 14.5s-4.5-4.4-4.5-8a4.5 4.5 0 0 1 9 0c0 3.6-4.5 8-4.5 8z" fill="#1a7f9c" stroke="none"/><circle cx="8" cy="6.4" r="1.6" fill="#fff" stroke="none"/>', '#1a7f9c'), 'Place'],
  thing: [g('<path d="M8 1.8 13.6 8 8 14.2 2.4 8z" fill="#8b5a3c" stroke="none"/>', '#8b5a3c'), 'Thing'],
  topic: [g('<path d="M4 2h8v12.5l-4-3-4 3z" fill="#7d8087" stroke="none"/>', '#7d8087'), 'Topic'],
  cmd: [g('<path d="m4 5 3 3-3 3M8.5 11.5h4"/>', '#6b6e73'), 'Command'],
  ai: [L.icons.spark, 'Ask'],
  link: [g('<path d="M6.5 9.5 9.5 6.5M7 4.5l1.2-1.2a2.6 2.6 0 0 1 3.7 3.7L10.7 8.2M9 11.5l-1.2 1.2a2.6 2.6 0 0 1-3.7-3.7L5.3 7.8"/>', '#9a9ca1'), ''],
};
const tok = (k) => `@@${k}@@`;
const swapKinds = (h) => h.replace(/@@(\w+)@@/g, (_, k) => `<span class="kg">${KIND[k][0]}</span>${KIND[k][1]}`);
const more = (n) => ({ kind: '', text: `<span class="more">${n} more…</span>` });

const goRows = (cur) => [
  { kind: tok('chapter'), text: 'Chapter 5 · Kit’s <b>led</b>ger', hint: 'title' },
  { kind: tok('thing'), text: 'The little green <b>led</b>ger', hint: 'Codex' },
  { kind: tok('topic'), text: '<b>Led</b>gers and pawn tickets', hint: 'Research' },
  more(4),
].map((r, i) => (i === 0 && cur ? { ...r, cur: true } : r));
const doRows = [
  { kind: tok('cmd'), text: 'Find “<b>led</b>” in the text', hint: 'Ctrl+F' },
  { kind: tok('cmd'), text: 'Rename “<b>led</b>ger” everywhere…', hint: '' },
  { kind: tok('cmd'), text: 'Add “<b>led</b>ger” to the dictionary', hint: '' },
  more(4),
];

const mainResults = [
  { head: 'Go to', rows: goRows(false) },
  { head: 'Do', rows: doRows },
  { head: '', rows: [{ kind: tok('ai'), text: 'Ask: <span class="q">led…</span>', hint: 'Enter', cur: true }] },
];
const noaiResults = [
  { head: 'Go to', rows: goRows(true) },
  { head: 'Do', rows: doRows },
  { head: '', rows: [{ kind: tok('link'), text: '<span class="conn">Connect an AI to ask questions</span>', gray: true }] },
];

const extraCss = `<style>
.ask{width:410px}
.ask .ask-b{display:none}
.ask .ask-res{position:relative;left:auto;right:auto;bottom:auto;max-height:none;margin:8px 10px 0;z-index:auto;overflow:visible;box-shadow:none}
.ask-res .gh:empty{display:none}
.ask-res .grp:last-child{border-top:1px solid var(--line);margin-top:4px;padding-top:5px}
.ask-res .r{align-items:center}
.ask-res .r .k{width:84px;display:flex;align-items:center;gap:6px}
.ask-res .r .k .kg{display:inline-flex;width:14px;height:14px;color:var(--ink3)}
.ask-res .r .k .kg svg{width:14px;height:14px}
.ask-res .r .t b{font-weight:600}
.ask-res .r .more{color:var(--accent);font-size:12.5px}
.ask-res .r .q{font-weight:600}
.ask-res .r.cur .k .kg svg{color:var(--accent)}
.ask-res .r.gray .conn{color:var(--accent);opacity:.75;text-decoration:underline;text-underline-offset:2px}
.ask .ask-h{padding:0 6px}
.ask .ask-h b{text-align:center}
.ask .ask-h .x{width:26px;height:26px;display:inline-flex;align-items:center;justify-content:center;font-size:13px;color:var(--ink2)}
.ask .keys{position:absolute;left:0;right:0;bottom:calc(100% + 8px);font:12px var(--ui);color:var(--ink3);white-space:nowrap;text-align:right;padding-right:4px}
.ask .keys kbd{margin-right:3px}
.ask .keys span+span{margin-left:10px}
.below .crop{height:610px}
</style>`;

const keys = (noai) => `<div class="keys">${noai
  ? '<span><kbd>Enter</kbd>first result</span><span><kbd>↑</kbd><kbd>↓</kbd>pick</span><span><kbd>Esc</kbd>back to the text</span>'
  : '<span><kbd>Enter</kbd>asks</span><span><kbd>↑</kbd>picks a result</span><span><kbd>Esc</kbd>back to the text</span>'}</div>`;
// header: + and the clock at the left, the title, – and ✕ at the right
const head = `<div class="ask-h">${L.ib('plus', '', 'New conversation')}${L.ib('history-list', '', 'Earlier conversations')}<b>Ask</b>${L.ib('collapse', '', 'Minimize into the button')}<span class="x" title="Close">✕</span></div>`;
const panel = (input, results, noai) => swapKinds(L.askPanel({ input, results, noai }))
  .replace(/<div class="ask-h">.*?<\/div>/, keys(noai) + head);

const html = extraCss + L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  page: L.pageCol(col, { paddingTop: 40 }),
  strip: { reviewCount: 12 },
  status: { style: 'Plain', words: '2,418 words', pages: 'p. 146 of 248' },
  ask: L.askButton('normal') + panel('led', mainResults, false),
  extra: L.ann(1, 'Header: + starts a new conversation, the clock lists earlier ones; – folds the panel into the button and keeps the conversation, ✕ closes it (it stays in the clock’s list)', 1050, 230, { w: 300 })
    + L.ann(2, 'Two short groups from Libreto’s index, no AI while you type: Go to (chapters, scenes, people, places, things, topics, each with its kind icon) and Do (commands); three rows each, then “4 more…”', 40, 420, { w: 320 })
    + L.ann(4, 'The bottom row is the question, preselected because an AI is connected: Enter asks, ↑ picks a result, a click picks any row', 40, 700, { w: 320 })
    + L.ann(3, 'Nothing spins: a fixed order, exact name before prefix before part of a word, the current chapter and recent things first', 40, 560, { w: 320 }),
})
  + `<div class="below">`
  + `<div class="crop" style="width:680px"><div class="lbl">The same box with no AI connected</div>`
  + L.askButton('off') + panel('led', noaiResults, true)
  + L.ann(5, 'No AI: the bottom row reads “Connect an AI to ask questions”, a link to Settings ▸ AI; Enter takes the first result', 16, 420, { w: 220 })
  + `</div>`
  + `<div style="flex:1;padding:24px 8px;font:13.5px/1.55 var(--ui);color:var(--ink2)">Hits inside the text are not a group here: that is Find, one key away (<kbd>Ctrl+F</kbd>), and “Find “led” in the text” hands the word over. <kbd>Esc</kbd> closes the box and puts the cursor back in the text; <kbd>Alt+←</kbd> returns from wherever a result took you. Opened from a Research topic or on a selection, Ask knows what “this” means.</div>`
  + `</div>`;

module.exports = {
  id: 'S08',
  file: 's08-ask-type',
  title: 'Ask: type and go',
  width: 1440,
  height: 900,
  html,
  caption: L.caption({
    id: 'S08', title: 'Ask: type and go',
    scene: 'Chapter 7 with both columns closed. The writer pressed Ctrl+K and typed “led”. Above the box, Go to and Do, three rows each and “4 more…”; under them the question itself, preselected, since an AI is connected. Under the window: the same box with no AI connected, where the bottom row offers to connect one and the first result is preselected.',
    on: 'the Ask panel (+ and clock at the left, “Ask”, – and ✕ at the right) with “led” typed; GO TO (Chapter 5 · Kit’s ledger, The little green ledger · Thing, Ledgers and pawn tickets · Topic, 4 more…), DO (Find “led” in the text, Rename “ledger” everywhere…, Add “ledger” to the dictionary, 4 more…), the preselected bottom row “Ask: led…”; the key line (Enter asks · ↑ picks a result · Esc back to the text); the Ask button, the chapter 7 text, the mode switch with 12 on Review; below, the gray slashed button and the box whose last row reads “Connect an AI to ask questions”',
    off: 'a spinner, an In the text group, the navigator, the Reference panel, a conversation, a provider logo',
  }),
};
