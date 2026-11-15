// S10: Hold Alt. Chapter 7 with everything revealed: people violet, places cyan, things brown, motifs magenta
// (never the four mark colors), styled passages labeled in the left margin, every underline and every badge.
const L = require('../lib');
const P = L.sample.chapter7Paragraphs.slice(0, 8);

// motif: glasses (dry glasses, the second glass); one underline of each mark color on untinted words
P[0] = P[0].replace('jukebox', '<span class="u-spell">jukebox</span>').replace('drying glasses', 'drying <span class="rv-m">glasses</span>');
P[3] = P[3].replace('set a glass', 'set a <span class="rv-m">glass</span>');
P[5] = P[5].replace('since Tuesday', 'since <span class="u-gram">tuesday</span>');
P[6] = P[6].replace('a second glass', 'a second <span class="rv-m">glass</span>').replace('<span class="thought rv-s">', '<span class="thought">');
P[7] = P[7].replace('quietly', '<span class="u-fix">quietly</span>');
// a Letter-styled paragraph: Kit's slip under the coin
P.push('<span class="rv-c">V.</span> — Not at nine. The <span class="rv-p">back room</span>, after closing. Bring the <span class="rv-t">coin</span>. — <span class="rv-c">K.</span>');

const lab = (t, top) => `<span class="mlabel" style="top:${top}px">${t}</span>`;
const marks = {
  0: L.gm('unknown', L.lineTop(0)),
  2: L.gm('note', L.lineTop(0)),
  5: L.gm('pending', L.lineTop(1)),
  6: lab('Thought', L.lineTop(0) - 1),
  7: L.gm('done', L.lineTop(0)),
  4: L.gutter(['note', 'pending', 'done'], L.lineTop(0)),
  8: lab('Letter', 7),
};
const col = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>`
  + P.map((p, i) => {
    const cls = i === 0 ? ' class="first"' : i === 8 ? ' class="letter"' : '';
    const para = `<p${cls}>${p}</p>`;
    return marks[i] ? `<div class="para">${para}${marks[i]}</div>` : para;
  }).join('');

const css = `<style>
.s10 .mlabel{color:var(--ink3);font:500 11px var(--ui);letter-spacing:.03em;border-right:2px solid var(--ink4);padding-right:7px}
.s10 .page p.letter{text-indent:0;margin:14px 0 0 40px;font-family:var(--ui);font-size:15px;line-height:1.6;color:var(--ink2)}
.s10 .keyhint{position:absolute;left:50%;bottom:18px;transform:translateX(-50%);z-index:26;display:inline-flex;align-items:center;gap:8px;background:#fff;border:1px solid var(--line);border-radius:16px;padding:5px 14px;font:12.5px var(--ui);color:var(--ink2);box-shadow:0 4px 14px rgba(0,0,0,.08);white-space:nowrap}
.s10 .keyhint kbd{margin:0}
.s10 .ann .hue{font-style:normal;padding:0 4px;margin:0 1px;border-radius:2px}
</style>`;

const hint = `<div class="keyhint"><kbd>Alt</kbd> held · release to clear · <kbd>Ctrl+Shift+A</kbd> keeps it</div>`;
const sw = (cls, t) => `<em class="hue ${cls}">${t}</em>`;

const html = css + L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  page: L.pageCol(col, { paddingTop: 40 }),
  strip: { reviewCount: 12 },
  status: { style: 'Plain', words: '2,418 words', pages: 'p. 146 of 248' },
  ask: 'normal',
  content: hint,
  extra: L.ann(1, `Four hues of their own: ${sw('rv-c', 'people')} violet, ${sw('rv-p', 'places')} cyan, ${sw('rv-t', 'things')} brown, ${sw('rv-m', 'motifs')} magenta; never the four mark colors (red, blue, green, amber)`, 40, 130, { w: 320 })
    + L.ann(2, 'Styled passages are labeled in the left margin, at their paragraphs: Thought, Letter', 40, 645, { w: 240 })
    + L.ann(3, 'Every underline, even the ones Show has hidden (red, blue, green: one per word), and every badge: ? … ✓, your note, a gray stack with its count', 1062, 210, { w: 310 })
    + L.ann(4, 'Hold Alt half a second; release it and the page is clean. Ctrl+Shift+A toggles the same reveal and keeps it, on every system', 40, 250, { w: 320 })
    + L.ann(5, 'Alt+click a name opens its peek; Alt+right-click is the ordinary right-click; hovering does nothing by itself', 1062, 690, { w: 300 }),
});

module.exports = {
  id: 'S10',
  file: 's10-hold-alt',
  title: 'Hold Alt',
  width: 1440,
  height: 900,
  html: html.replace('<div class="win"', '<div class="win s10"'),
  caption: L.caption({
    id: 'S10', title: 'Hold Alt',
    scene: 'The writer holds Alt on chapter 7. For as long as the key is down, the page shows everything Libreto knows about it: people, places, things and motifs tinted in their own hues, the styled passages named in the left margin, every underline and every badge. A small line at the bottom says how to keep or clear it.',
    on: 'chapter 7 with Vega, Lena and Kit in violet, the Blue Lamp, the back-room door and the station steps in cyan, the little green ledger and the coin in brown, the glasses motif in magenta; the margin labels Thought and Letter; a red, a blue and a green underline; gutter badges ? (unknown), note bubble, … (pending), ✓ (done) and a gray stack “3”; the key hint “Alt held · release to clear · Ctrl+Shift+A keeps it”; the mode switch with 12 on Review; the Ask button',
    off: 'a peek card or any hover card, navigator, Reference panel, any hue in red, blue, green or amber outside the marks',
  }),
};
