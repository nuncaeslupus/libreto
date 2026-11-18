// S13: Show names and styles (Ctrl+Shift+A). Draft 8; from draft 7's S10. Background tints, no underlines; style labels in the margin;
// provenance of an AI-written, then edited, sentence as a thin hatched bar.
const L = require('../lib');
const P = L.sample.chapter7Paragraphs.slice(0, 10);
// a motif (glasses) and a thing; marks are not shown here, only names and styles
P[0] = P[0].replace('drying glasses', 'drying <span class="rv-m">glasses</span>');
P[3] = P[3].replace('set a glass', 'set a <span class="rv-m">glass</span>');
P[6] = P[6].replace('a second glass', 'a second <span class="rv-m">glass</span>').replace('<span class="thought rv-s">', '<span class="thought">');
P.push('<span class="rv-c">V.</span> — Not at nine. The <span class="rv-p">back room</span>, after closing. Bring the <span class="rv-t">coin</span>. — <span class="rv-c">K.</span>');
const lab = (t, top) => `<span class="mlabel" style="top:${top}px">${t}</span>`;
const aiBar = (h) => `<span class="aibar" style="height:${h}px"></span>`;
const items = [
  { p: P[0], cls: 'first' }, { p: P[3] }, { p: P[5] }, { p: P[6], m: lab('Thought', L.lineTop(0) - 1) },
  { p: P[8] }, { p: P[9], m: aiBar(62) }, { p: P[10], cls: 'letter', m: lab('Letter', 7) },
];
const col = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>`
  + items.map((it) => {
    const para = `<p${it.cls ? ` class="${it.cls}"` : ''}>${it.p}</p>`;
    return it.m ? `<div class="para">${para}${it.m}</div>` : para;
  }).join('');

const css = `<style>
.s13 .rv-c,.s13 .rv-p,.s13 .rv-t,.s13 .rv-m{box-shadow:none;border-radius:3px}
.s13 .mlabel{color:var(--ink3);font:500 11px var(--ui);letter-spacing:.03em;border-right:2px solid var(--ink4);padding-right:7px;right:calc(100% + 12px)}
.s13 .page p.letter{text-indent:0;margin:14px 0 0 40px;font-family:var(--ui);font-size:15px;line-height:1.6;color:var(--ink2)}
.s13 .aibar{position:absolute;left:-14px;top:3px;width:5px;border-radius:2px;background:repeating-linear-gradient(135deg,#8a8d93 0 2px,#fff 2px 4px);border:1px solid #c9cbcf}
.s13 .keyhint{position:absolute;left:50%;bottom:18px;transform:translateX(-50%);z-index:26;display:inline-flex;align-items:center;gap:8px;background:#fff;border:1px solid var(--line);border-radius:16px;padding:5px 14px;font:12.5px var(--ui);color:var(--ink2);box-shadow:0 4px 14px rgba(0,0,0,.08);white-space:nowrap}
.s13 .ann .hue{font-style:normal;padding:0 4px;margin:0 1px;border-radius:2px}
.s13 .tipx{position:absolute;z-index:40;background:#222326;color:#fff;border-radius:7px;padding:6px 10px;font:12px/1.4 var(--ui);box-shadow:0 4px 12px rgba(0,0,0,.2)}
</style>`;
const sw = (cls, t) => `<em class="hue ${cls}">${t}</em>`;
const hint = `<div class="keyhint">Showing names and styles · <kbd>Ctrl+Shift+A</kbd> turns it off · marks are hidden meanwhile</div>`;

const html = css + L.win({
  view: 'Text', crumbs: L.sample.crumbs7, strip: { review: 12 },
  page: L.pageCol(col, { paddingTop: 40 }),
  status: { style: 'Plain', words: '812 of 1,000 today', goal: 81, pages: 'p. 146 of 248', highlightsOn: true, show: 'Show' },
  ask: 'normal',
  content: '',
  extra: `<div class="tipx" style="left:150px;top:606px">AI, accepted Nov 9, edited by you<br>40 % of its words remain</div>`
    + L.ann(1, `Four tints of their own, no underlines: ${sw('rv-c', 'people')} violet, ${sw('rv-p', 'places')} cyan, ${sw('rv-t', 'things')} brown, ${sw('rv-m', 'motifs')} magenta. Underlines belong to marks only, so the two never mix`, 24, 130, { w: 330 })
    + L.ann(2, 'Styles are named in the left margin, at their paragraphs: Thought, Letter', 24, 470, { w: 280 })
    + L.ann(3, 'A thin hatched bar: this sentence was written by the AI, accepted, then edited. Hover for the history', 24, 700, { w: 280 })
    + L.ann(4, 'Ctrl+Shift+A, or Show ▸ Show names and styles, in the status bar. A toggle that stays until you turn it off. Hold Alt is an opt-in in Settings ▸ Keys', 1070, 190, { w: 330 })
    + L.ann(5, 'Ctrl+click a tinted name for its quick look; nothing opens by hovering', 1070, 330, { w: 330 }),
});

module.exports = {
  id: 'S13', file: 's13-show-names', title: 'Show names and styles', width: 1440, height: 900,
  html: html.replace('<div class="win"', '<div class="win s13"'),
  caption: L.caption({
    id: 'S13', title: 'Show names and styles',
    scene: 'The writer pressed Ctrl+Shift+A on chapter 7. People, places, things and the glasses motif are tinted behind their words, the styled passages are named in the left margin, and one sentence that the AI wrote and the writer then edited carries a thin hatched bar; the mouse rests on it and says where it came from.',
    on: 'chapter 7 with Vega, Lena and Kit in violet, the Blue Lamp, the back-room door and the station steps in cyan, the coin in brown, the glasses in magenta (all tints, no underlines); the margin labels Thought and Letter; the hatched bar beside the first sentence of the last paragraph and its hover “AI, accepted Nov 9, edited by you · 40 % of its words remain”; the status bar with Show pressed',
    off: 'any underline or mark, a quick look card, the navigator, the side panel',
  }),
};
