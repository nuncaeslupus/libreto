// S11: Peek and the Reference panel. Alt+click on "Lena" opened a peek; "Open" put her in the panel:
// two-row head (‹ › PERSON ✕ / the name large), a summary body, and the fixed foot (Open in Codex · Ask the AI).
const L = require('../lib');
const P = L.sample.chapter7Plain.slice(0, 8);

// the clicked name
P[3] = P[3].replace('“Kit who?” Lena', '“Kit who?” <span class="rv-c">Lena</span>');

const col = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>`
  + P.map((p, i) => `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`).join('');

const peek = `<div class="peek" style="left:520px;top:352px;width:330px">`
  + `<div style="display:flex;gap:12px;align-items:center;margin-bottom:8px"><div class="pic" style="width:40px;height:40px;border-radius:8px"></div>`
  + `<div><div class="pk-kind" style="margin:0">Person</div><div class="pk-title pk-link" style="margin:0">Lena</div></div></div>`
  + `<div class="pk-line">Bartender at the Blue Lamp. Covers for Kit.</div>`
  + `<div class="pk-meta">In chapters 2–8 · 31 mentions</div>`
  + `<div class="pk-res"><span class="pk-kind" style="margin:0 0 3px">Research</span><span class="lk">Bars in the 1950s</span><span class="lk">The Blue Lamp’s history</span></div>`
  + `<div class="pk-actions"><span class="btn">Open</span><span class="sp"></span><span class="pk-hint">in the Reference panel</span></div></div>`;

const pointer = `<svg class="cursorptr" style="left:538px;top:324px" viewBox="0 0 14 20"><path d="M1 1v15l4-3.6 2.6 6 2.3-1-2.6-5.9H13z" fill="#111" stroke="#fff" stroke-width="1.2"/></svg>`
  + `<kbd style="position:absolute;left:556px;top:330px;z-index:47;box-shadow:0 1px 3px rgba(0,0,0,.15)">Alt</kbd>`;

// the summary body: picture and line, where she appears and with whom, the five most recent facts, questions, topics
const facts = [
  ['Nobody’s been in that room since Tuesday.', 'ch. 7'],
  ['Locks the back room herself at closing.', 'ch. 8'],
  ['Drives a green Fiat.', 'ch. 6'],
  ['Smells of lemon; dries dry glasses.', 'ch. 7'],
  ['Has known Kit since he was a boy.', 'ch. 5'],
];
const body = L.refCard({ name: '', line: L.sample.lena.line,
  facts: [['Appears', 'ch. 2–8 · 31 mentions'], ['With', '<span class="lk">Kit</span>, <span class="lk">Vega</span> · at <span class="lk">the Blue Lamp</span>']] })
  + `<div class="nh">Facts <span class="sp"></span><span class="tn">five most recent</span></div>`
  + `<div class="f5">${facts.map(([t, w]) => `<div><span>${t}</span><span class="lk">${w}</span></div>`).join('')}</div>`
  + `<div class="all"><span class="lk">All 84 facts in the Codex</span></div>`
  + `<div class="nh">Open questions</div><div class="q">How old is she? “about fifty” in <span class="lk">ch. 2</span>, “not yet forty” in <span class="lk">ch. 8</span></div>`
  + `<div class="nh">Research</div>`
  + `<div class="rrow"><div class="pic sm"></div><div class="t"><span class="lk">Bars in the 1950s</span><small>topic · 6 notes</small></div></div>`
  + `<div class="rrow"><div class="pic sm"></div><div class="t"><span class="lk">The Blue Lamp’s history</span><small>topic · 2 photos</small></div></div>`;

const css = `<style>
.peek .pk-link{color:var(--accent);text-decoration:underline;text-underline-offset:3px;text-decoration-thickness:1px}
.peek .pk-hint{color:var(--ink3);font-size:11.5px}
.peek .pk-res{display:flex;flex-direction:column;gap:2px;margin:0 0 12px;font-size:12.5px}
.refbody .tcard{padding:12px 14px 8px}
.refbody .f5>div{display:flex;gap:8px;justify-content:space-between;padding:3px 0;border-bottom:1px solid var(--line2);font-size:12.5px}
.refbody .f5 .lk{flex:none;font-size:11.5px}
.refbody .all{margin:6px 0 0;font-size:12px}
.refbody .all .lk{text-decoration:underline;text-underline-offset:2px}
.refbody .nh .tn{color:var(--ink4)}
.refbody .rrow{padding:3px 0}
</style>`;

const html = css + L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  right: L.reference({ kind: 'Person', name: 'Lena Marsh', backOn: true, body }),
  page: L.pageCol(col, { paddingTop: 40 }),
  strip: { reviewCount: 12 },
  status: { style: 'Plain', words: '2,418 words', pages: 'p. 146 of 248' },
  ask: 'normal',
  content: peek + pointer,
  extra: L.ann(1, 'Alt+click or right-click ▸ Look up: kind, the name as a link, a line, her chapters, and under Research the topics linked to her; Open puts her in the panel', 40, 400, { w: 300 })
    + L.ann(2, 'The head is two rows: ‹ › · PERSON · ✕, then the name, large, so no name is squeezed beside buttons', 620, 98, { w: 430 })
    + L.ann(3, '‹ › walk the panel’s own history, twenty steps deep. A link to the text moves the page (Back returns); a link to another entry moves the panel (‹ returns)', 620, 150, { w: 430 })
    + L.ann(4, 'A summary, not the whole Codex: the five most recent facts, then “All 84 facts in the Codex”', 862, 436, { w: 196, r: true })
    + L.ann(5, 'Always at the foot: Open in Codex and Ask the AI. No tabs, no search box: click a name or press Ctrl+K', 760, 780, { w: 300, r: true }),
});

module.exports = {
  id: 'S11',
  file: 's11-peek-reference',
  title: 'Peek and the Reference panel',
  width: 1440,
  height: 900,
  html,
  caption: L.caption({
    id: 'S11', title: 'Peek and the Reference panel',
    scene: 'The writer held Alt and clicked “Lena” in the page: a small card says who she is, with her chapters and the Research topics linked to her; its title is a link to the entry. “Open” put her in the Reference panel on the right, as a summary of her Codex entry.',
    on: 'the peek on “Lena” (picture, PERSON, the name as a link, one line, In chapters 2–8 · 31 mentions, Research: Bars in the 1950s and The Blue Lamp’s history, Open), the pointer with the Alt key; the Reference panel with its two-row head (‹ › PERSON ✕, then “Lena Marsh” large), the body: picture and line, Appears and With, five facts with their chapters and “All 84 facts in the Codex”, the open question about her age, two Research topics; the foot Open in Codex · Ask the AI; the Ask button over the panel’s corner; the mode switch with 12 on Review',
    off: 'navigator, tabs or a search box in the panel, a card popping up on hover, every fact of the entry',
  }),
};
