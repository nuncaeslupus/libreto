// S08: Ask, type and go. The Ask panel open with "lena" typed; five result groups above the box.
const L = require('../lib');
const P = L.sample.chapter7Plain;

const col = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>`
  + P.map((p, i) => `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`).join('');

// the five groups; `noai` grays the Ask group
const results = (noai) => [
  { head: 'Go to', rows: [
    { kind: 'Chapter', text: 'ch. 2 · The bartender', hint: '14 hits' },
    { kind: 'Chapter', text: 'ch. 7 · Lena’s warning', hint: 'here · 9 hits', cur: true },
  ] },
  { head: 'Look up', rows: [
    { kind: 'Person', text: 'Lena', hint: 'bartender at the Blue Lamp' },
    { kind: 'Thing', text: 'Lena’s car', hint: 'a green Fiat' },
    { kind: 'Topic', text: 'Bartenders in the 1950s', hint: 'Research topic' },
  ] },
  { head: 'Do', rows: [
    { kind: 'Command', text: 'Highlight people', hint: 'View ▸ Highlights' },
    { kind: 'Command', text: 'Rename Lena everywhere…', hint: 'Find' },
  ] },
  { head: 'In the text', rows: [
    { kind: 'Find', text: '31 hits in 7 chapters', hint: 'Open Find' },
  ] },
  { head: 'Ask', rows: [
    { kind: 'Question', text: 'lena', hint: noai ? 'Connect an AI to ask' : 'as a question', gray: noai },
    { kind: 'Question', text: 'Is Lena’s lie in ch. 7 contradicted later?', hint: noai ? 'Connect an AI to ask' : 'from the book', gray: noai },
  ] },
];

const extraCss = `<style>
.ask{width:380px}
.ask .ask-b{display:none}
.ask .ask-res{position:relative;left:auto;right:auto;bottom:auto;max-height:none;margin:8px 10px 0;z-index:auto;overflow:visible}
.ask .keys{position:absolute;left:0;right:0;bottom:calc(100% + 8px);font:12px var(--ui);color:var(--ink3);white-space:nowrap;text-align:right;padding-right:4px}
.ask .keys kbd{margin-right:3px}
.ask .keys span+span{margin-left:10px}
</style>`;

const keys = `<div class="keys"><span><kbd>Enter</kbd>opens</span><span><kbd>Tab</kbd>moves down</span><span><kbd>Esc</kbd>closes</span></div>`;
// the hint line sits above the popover: put it inside the popover's box so it follows its top edge
const panel = (noai) => L.askPanel({ input: 'lena', results: results(noai), noai })
  .replace('<div class="ask-h">', `${keys}<div class="ask-h">`);

const html = extraCss + L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  page: L.pageCol(col, { paddingTop: 40 }),
  status: { style: 'Plain', words: '2,418 words', pages: 'book p. ~146/248', fixes: '3 fixes' },
  ask: L.askButton('normal') + panel(false),
  extra: L.ann(1, 'One box for everything: it finds a chapter, looks up a name, runs a command, or asks', 1058, 120, { w: 300 })
    + L.ann(2, 'The best match (ch. 7) is preselected: Enter goes there, Back returns', 40, 300, { w: 290 })
    + L.ann(3, 'DO: commands are the app’s own menu items and actions, found by their words; no slash to learn', 40, 520, { w: 290 }),
})
  + `<div class="below"><div class="crop" style="width:760px;height:700px"><div class="lbl">The same box with no AI connected</div>`
  + L.askButton('off') + panel(true)
  + L.ann(4, 'Without an AI, the Ask group is gray and says so; go to, look up, commands and find still work', 16, 520, { w: 290 })
  + `</div></div>`;

module.exports = {
  id: 'S08',
  file: 's08-ask-type',
  title: 'Ask: type and go',
  width: 1440,
  height: 900,
  html,
  caption: L.caption({
    id: 'S08', title: 'Ask: type and go',
    scene: 'Chapter 7 with both columns closed. The writer pressed Ctrl+K and typed “lena”. Results appear above the box in five groups, the best match preselected; a line above them says what the keys do. Under the window: the same box when no AI is connected.',
    on: 'the Ask panel (title “Ask”, history, new and collapse icons) with “lena” typed, the results popover with GO TO, LOOK UP, DO, IN THE TEXT and ASK groups, the key line (Enter · Tab · Esc), the Ask button, the chapter 7 text, the status bar; below, the same box with the Ask group gray (“Connect an AI to ask”) and the gray slashed button',
    off: 'navigator, Reference panel, a conversation, Search &amp; ask box, a slash menu, provider icon in the status bar',
  }),
};
