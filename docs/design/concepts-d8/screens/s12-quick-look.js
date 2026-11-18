// S12: Quick look and the side panel (draft 8; from draft 7's S11 and S19). Ctrl+click a name: a card; "Open" puts it in the
// side panel. Insets: a research topic beside the text; split reading (a chapter, read-only, beside the text).
const L = require('../lib');
const B = require('../b2-parts');
const P = L.sample.chapter7Plain.slice(0, 8);
P[3] = P[3].replace('“Kit who?” Lena', '“Kit who?” <span class="picked">Lena</span>');
const col = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>`
  + P.map((p, i) => `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`).join('');

const css = B.lenaCss + `<style>
.s12 .picked{background:rgba(0,0,0,.07);box-shadow:0 0 0 2px rgba(0,0,0,.07);border-radius:2px}
.s12 .peek .pk-link{color:var(--accent);text-decoration:underline;text-underline-offset:3px;text-decoration-thickness:1px}
.s12 .peek .pk-hint{color:var(--ink3);font-size:11.5px}
.s12 .peek .pk-res{display:flex;flex-direction:column;gap:2px;margin:0 0 12px;font-size:12.5px}
.below.s12 .crop{height:500px;background:#fff}
.mini{display:flex;height:450px}
.mini .mp{width:326px;flex:none;padding:20px 22px 0;box-sizing:border-box;height:441px;align-self:flex-start;font:15px/1.65 var(--text);color:var(--ink);overflow:hidden}
.mini .mp p{margin:0;text-indent:1.4em}.mini .mp p.first{text-indent:0}
.mini .ref{position:relative;right:auto;top:auto;bottom:auto;width:350px;flex:none;height:auto}
.mini .refbody{padding:0}
.rtopic{padding:12px 16px 0 14px}
.rtopic .cap{font:11px var(--ui);color:var(--ink3);margin:5px 0 10px}
.rtopic .rt{font:14px/1.5 var(--text);margin-bottom:10px}
.rdoc{padding:10px 16px 0;font:14px/1.55 var(--text);color:var(--ink)}
.rdoc .ro{font:11.5px var(--ui);color:var(--ink3);background:var(--paper);border:1px solid var(--line);border-radius:6px;padding:4px 9px;margin-bottom:10px;display:flex;gap:6px;align-items:center}
.rdoc p{margin:0 0 9px;text-indent:1.4em}.rdoc p.first{text-indent:0}
.s12 .refhead .kind:after{content:""}
</style>`;

const peek = `<div class="peek" style="left:520px;top:352px;width:330px">`
  + `<div style="display:flex;gap:12px;align-items:center;margin-bottom:8px"><div class="pic" style="width:40px;height:40px;border-radius:8px"></div>`
  + `<div><div class="pk-kind" style="margin:0">Person</div><div class="pk-title pk-link" style="margin:0">Lena</div></div></div>`
  + `<div class="pk-line">Bartender at the Blue Lamp. Covers for Kit.</div>`
  + `<div class="pk-meta">In chapters 2–8 · 31 mentions</div>`
  + `<div class="pk-res"><span class="pk-kind" style="margin:0 0 3px">Research</span><span class="lk">Bars in the 1950s</span><span class="lk">The Blue Lamp’s history</span></div>`
  + `<div class="pk-actions"><span class="btn">Open</span><span class="sp"></span><span class="pk-hint">in the side panel</span></div></div>`;
const pointer = B.pointer(538, 324) + `<kbd style="position:absolute;left:556px;top:330px;z-index:47;box-shadow:0 1px 3px rgba(0,0,0,.15)">Ctrl</kbd>`;

// inset 1: a research topic beside the text
const topic = `<div class="rtopic"><div class="pic" style="width:100%;height:170px;border-radius:6px"></div>`
  + `<div class="cap">The Blue Lamp, Harbor Street, about 1949 · lamp-front.jpg</div>`
  + `<div class="rt">The Blue Lamp opened in 1931 as a sailors’ bar, in a ground floor that had been a ship chandler’s. The lamp over the door was a ship’s lantern with blue glass.</div>`
  + `<div class="rt">The back room behind the till was a store room until 1946, then a room for cards.</div></div>`;
const miniText = L.sample.chapter7Plain.slice(0, 5).map((p, i) => `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`).join('');
const inset1 = `<div class="mini"><div class="mp">${miniText}</div>`
  + L.reference({ kind: 'Topic', name: 'The Blue Lamp’s history', backOn: true, body: topic, open: 'Edit in Research' }) + `</div>`;

// inset 2: split reading, chapter 2 read-only
const ch2 = `<div class="rdoc"><div class="ro">${L.icons.view}Read-only here. Your cursor stays in chapter 7.</div>`
  + `<p class="first">Lena was the kind of bartender who learned your name by the second drink and your trouble by the third. She worked the long counter with a cloth over her shoulder and the smell of lemon on her hands.</p>`
  + `<p>“Rain,” she said, and put a glass in front of Vega before Vega had asked for one. “It brings in the ones who have somewhere to hide.”</p>`
  + `<p>Vega looked at the back-room door behind the till, then at the clock above it, which had been stopped at ten past four for as long as anyone could remember.</p></div>`;
const ref2 = L.reference({ kind: 'Text · ch. 2', name: 'The bartender', backOn: true, body: ch2, open: 'Open' })
  .replace(/<span class="rb ai">.*?Ask the AI<\/span>/, '<span class="rb">Show in text</span>');
const inset2 = `<div class="mini"><div class="mp">${miniText}</div>${ref2}</div>`;

const html = css + L.win({
  view: 'Text', crumbs: L.sample.crumbs7, strip: { review: 12 },
  right: L.reference({ kind: 'Person', name: 'Lena', backOn: true, body: B.lenaBody() }),
  page: L.pageCol(col, { paddingTop: 40 }),
  status: { style: 'Plain', words: '812 of 1,000 today', goal: 81, pages: 'p. 146 of 248' },
  ask: 'normal',
  content: peek + pointer,
  extra: L.ann(2, 'Ctrl+click a name, or right-click ▸ Look up: a quick look. Hovering does nothing by itself', 24, 400, { w: 300 })
    + L.ann(1, 'The head is two rows, so no name is squeezed beside buttons: ‹ › · PERSON · ✕, then the name, large', 24, 130, { w: 300 })
    + L.ann(3, 'Open puts her in the side panel: a summary, then Research topics linked to her. A link to the text moves the page (Back returns); a link to another entry moves the panel (‹ returns)', 24, 520, { w: 300 })
    + L.ann(4, 'Always at the foot: Open in Codex, Ask the AI', 1100, 760, { w: 230 }),
})
  + `<div class="below s12"><div class="crop" style="width:676px"><div class="lbl">A topic from Research beside the text</div>${inset1}</div>`
  + `<div class="crop" style="width:676px"><div class="lbl">Split reading: chapter 2 beside chapter 7</div>${inset2}</div></div>`;

module.exports = {
  id: 'S12', file: 's12-quick-look', title: 'Quick look and the side panel', width: 1440, height: 1450,
  html: html.replace('<div class="win"', '<div class="win s12"').replace('<div class="below s12">', '<div class="below s12">'),
  caption: L.caption({
    id: 'S12', title: 'Quick look and the side panel',
    scene: 'Chapter 7. The writer Ctrl+clicked “Lena”: a quick look says who she is, with her chapters and the Research topics linked to her. Open put her in the side panel as a summary of her Codex entry. Below, the same panel holding other things beside the text: a Research topic with its photo of the bar, and chapter 2, read-only, for reading one part of the book while writing another.',
    on: 'the quick look (picture, PERSON, Lena as a link, a line, In chapters 2–8 · 31 mentions, Research topics, Open); the side panel with a two-row head (‹ › PERSON ✕, then Lena), a summary, five facts, All 84 facts in the Codex, an open question, Research topics, and the foot; inset 1: the topic “The Blue Lamp’s history” with its photo, foot “Edit in Research”; inset 2: TEXT · ch. 2 · The bartender, read-only, with Open and Show in text',
    off: 'a quick look opened by hovering, tabs or a search box in the panel, a second place to edit chapter 2',
  }),
};
