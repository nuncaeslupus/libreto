// S08: Ask, type and go. The Ask panel open with "lena at the blue lamp" typed; three result groups above the box.
const L = require('../lib');
const P = L.sample.chapter7Plain;

const col = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>`
  + P.map((p, i) => `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`).join('');

// kind glyphs: chapter and scene use the page icon; person, place, thing and topic a small colored glyph.
// askPanel() escapes the kind label, so the rows carry a token that is swapped for the glyph afterwards.
const g = (inner, color) => `<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="${color}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;
const KIND = {
  chapter: [L.icons.view, 'Chapter'],
  person: [g('<circle cx="8" cy="5.6" r="2.8" fill="#3b6ea8" stroke="none"/><path d="M2.8 14a5.2 5.2 0 0 1 10.4 0z" fill="#3b6ea8" stroke="none"/>', '#3b6ea8'), 'Person'],
  place: [g('<path d="M8 14.5s-4.5-4.4-4.5-8a4.5 4.5 0 0 1 9 0c0 3.6-4.5 8-4.5 8z" fill="#3d8a6a" stroke="none"/><circle cx="8" cy="6.4" r="1.6" fill="#fff" stroke="none"/>', '#3d8a6a'), 'Place'],
  thing: [g('<path d="M8 1.8 13.6 8 8 14.2 2.4 8z" fill="#8a5fb0" stroke="none"/>', '#8a5fb0'), 'Thing'],
  topic: [g('<path d="M4 2h8v12.5l-4-3-4 3z" fill="#a0703a" stroke="none"/>', '#a0703a'), 'Topic'],
  cmd: [g('<path d="m4 5 3 3-3 3M8.5 11.5h4"/>', '#6b6e73'), 'Command'],
  ai: [L.icons.spark, 'Ask'],
};
const tok = (k) => `@@${k}@@`;
const swapKinds = (h) => h.replace(/@@(\w+)@@/g, (_, k) => `<span class="kg">${KIND[k][0]}</span>${KIND[k][1]}`);

const more = (n) => ({ kind: '', text: `<span class="more">${n} more…</span>` });

const mainResults = [
  { head: 'Go to', rows: [
    { kind: tok('person'), text: 'Lena', hint: 'exact name', cur: true },
    { kind: tok('place'), text: 'Blue Lamp', hint: 'exact name' },
    { kind: tok('chapter'), text: 'Chapter 7 · Lena’s warning', hint: 'here' },
    more(2),
  ] },
  { head: 'Do', rows: [
    { kind: tok('cmd'), text: 'Show people…', hint: 'tints Lena and the cast' },
    { kind: tok('cmd'), text: 'Rename Lena everywhere…', hint: 'rename' },
  ] },
  { head: 'Ask the AI', rows: [
    { kind: tok('ai'), text: '“lena at the blue lamp”', hint: 'as a question' },
  ] },
];

// no AI connected: "bars in the 1950s" has four words, yet the Ask the AI group is absent
const noaiResults = [
  { head: 'Go to', rows: [
    { kind: tok('topic'), text: 'Bars in the 1950s', hint: 'exact title', cur: true },
    { kind: tok('chapter'), text: 'Chapter 2 · The bartender', hint: 'partial' },
  ] },
  { head: 'Do', rows: [
    { kind: tok('cmd'), text: 'Export PDF…', hint: 'export' },
  ] },
];

const extraCss = `<style>
.ask{width:384px}
.ask .ask-b{display:none}
.ask .ask-res{position:relative;left:auto;right:auto;bottom:auto;max-height:none;margin:8px 10px 0;z-index:auto;overflow:visible}
.ask-res .r{align-items:center}
.ask-res .r .k{width:84px;display:flex;align-items:center;gap:6px}
.ask-res .r .k .kg{display:inline-flex;width:14px;height:14px;color:var(--ink3)}
.ask-res .r .k .kg svg{width:14px;height:14px}
.ask-res .r .more{color:var(--accent);font-size:12.5px}
.ask .keys{position:absolute;left:0;right:0;bottom:calc(100% + 8px);font:12px var(--ui);color:var(--ink3);white-space:nowrap;text-align:right;padding-right:4px}
.ask .keys kbd{margin-right:3px}
.ask .keys span+span{margin-left:10px}
.below .crop{height:420px}
</style>`;

const keys = `<div class="keys"><span><kbd>Enter</kbd>acts</span><span><kbd>Tab</kbd>moves down</span><span><kbd>Esc</kbd>closes</span></div>`;
const panel = (input, results, noai) => swapKinds(L.askPanel({ input, results, noai }))
  .replace('<div class="ask-h">', `${keys}<div class="ask-h">`);

const html = extraCss + L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  page: L.pageCol(col, { paddingTop: 40 }),
  strip: { reviewCount: 12 },
  status: { style: 'Plain', words: '2,418 words', pages: 'book p. ~146/248', review: '12 to review' },
  ask: L.askButton('normal') + panel('lena at the blue lamp', mainResults, false),
  extra: L.ann(1, 'One box for everything: go to a chapter, a person, a place or a topic, run a command, or ask', 1038, 104, { w: 300 })
    + L.ann(2, 'The exact name comes first and is preselected: Enter goes to Lena, Back returns', 40, 330, { w: 300 })
    + L.ann(3, 'Each row carries the icon of its kind, so a place and a chapter are told apart at a glance; three rows, then “2 more…”', 40, 400, { w: 300 })
    + L.ann(4, 'Nothing spins: the index answers as you type. The AI row appears only after three words or a ?', 40, 590, { w: 320 }),
})
  + `<div class="below">`
  + `<div class="crop" style="width:680px"><div class="lbl">The same box with no AI connected</div>`
  + L.askButton('off') + panel('bars in the 1950s', noaiResults, true)
  + L.ann(5, 'Without an AI there is no Ask the AI row, even after three words; Go to and Do still work', 16, 250, { w: 200 })
  + `</div>`
  + `<div style="flex:1;padding:24px 8px;font:13.5px/1.55 var(--ui);color:var(--ink2)">Hits inside the text are not a group here: that is Find, one key away (<kbd>Ctrl+F</kbd>). The order is fixed and plain: an exact name before a prefix before a part of a word, the current chapter first, what you used recently first.</div>`
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
    scene: 'Chapter 7 with both columns closed. The writer pressed Ctrl+K and typed “lena at the blue lamp”. Results appear above the box in three groups, the exact name preselected; a line above them says what the keys do. Five words, so the Ask the AI row is there. Under the window: the same box when no AI is connected.',
    on: 'the Ask panel (title “Ask”, history, new and collapse icons) with “lena at the blue lamp” typed; GO TO with kind icons (Lena · Person, Blue Lamp · Place, Chapter 7 · Lena’s warning, “2 more…”), DO (Show people…, Rename Lena everywhere…), ASK THE AI with the spark icon and the typed text; the key line (Enter · Tab · Esc), the Ask button, the chapter 7 text, the Review tab with 12, the status bar with 12 to review; below, the box with “bars in the 1950s” (Bars in the 1950s · Topic, Chapter 2 · The bartender, Export PDF…), no Ask the AI row, the gray slashed button',
    off: 'a spinner, a Look up or In the text group, the navigator, the Reference panel, a conversation, a provider logo',
  }),
};
