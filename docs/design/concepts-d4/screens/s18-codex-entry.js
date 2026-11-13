// S18: the Codex. Its own mode: the navigator on the left, Lena's entry at full size in the middle
// (what you edit at the top, what Libreto computes from the text below), the paragraph a fact points to on the right.
const L = require('../lib');

// the navigator: People, Places, Things, Motifs, each with a count
const lrow = (t, c, o = {}) => `<div class="lrow${o.cur ? ' cur' : ''}${o.sec ? ' sec' : ''}"><span class="cv">${o.coll ? L.icons['chevron-right'] : o.open ? L.icons.chevron : ''}</span><span class="t">${t}</span>${c ? `<span class="c">${c}</span>` : ''}</div>`;
const sub = (t, c, cur) => `<div class="lrow in${cur ? ' cur' : ''}"><span class="cv"></span><span class="t">${t}</span>${c ? `<span class="c">${c}</span>` : ''}</div>`;
const library = `<div class="nav lib"><div class="navtop"><div class="filter">${L.icons.magnifier}<span>Filter the Codex</span></div></div><div class="libbody">`
  + lrow('People', '8', { open: true, sec: true })
  + sub('Vega', '212') + sub('Kit', '148') + sub('Lena', '27', true) + sub('the pawnbroker', '14') + sub('the man in the gray coat', '9') + sub('the landlady', '6') + sub('the boy at the station', '4') + sub('Kit’s mother', '3')
  + lrow('Places', '5', { open: true, sec: true })
  + sub('the Blue Lamp', '46') + sub('Harbor Street', '22') + sub('the pawnshop', '17') + sub('the back room', '15') + sub('the station steps', '8')
  + lrow('Things', '3', { open: true, sec: true })
  + sub('Kit’s green ledger', '19') + sub('Lena’s car', '5') + sub('the coin', '7')
  + lrow('Motifs', '2', { open: true, sec: true })
  + sub('rain', '28') + sub('lemon', '12')
  + `</div><div class="navfoot"><span class="btn q">+ New entry</span></div></div>`;

const pencil = `<span class="pen" title="Edit">${L.icons.pen}</span>`;
const fromText = (t) => `<div class="ft"><span class="nh">${t}</span><span class="tag">from the text</span></div>`;
const ev = (q, where, sel) => `<div class="pk-ev${sel ? ' selq' : ''}">“${q}”<small><span class="lk">${where}</span></small></div>`;

const entry = `<div class="entry">`
  // what you edit
  + `<div class="mine">${pencil}<div class="pic" style="width:92px;height:92px;border-radius:10px"></div><div class="hd">`
  + `<div class="name">Lena <span class="kind">Person ▾</span></div>`
  + `<div class="alias"><span>Lena</span><span>Lena Roig</span><span>the woman in red</span><span class="add">+ alias</span></div>`
  + `<div class="line">Bartender at the Blue Lamp. Covers for Kit; knows more than she says.</div>`
  + `<div class="notes"><b>Notes</b> Older than she looks? Decide before chapter 8.</div>`
  + `</div></div>`
  // what Libreto computes
  + `<div class="grid">`
  + `<div>${fromText('Appears in · 14 scenes')}<div class="scenes">`
  + [['ch. 2', 'Vega meets the bartender'], ['ch. 6', 'A man asks for the back room'], ['ch. 7', 'Vega asks about Kit'], ['ch. 7', 'Lena lies about the back room'], ['ch. 8', 'Lena locks the back room']]
    .map(([c, t]) => `<div><b>${c}</b><span class="lk">${t}</span></div>`).join('')
  + `<div><b></b><span class="lk">9 more</span></div></div></div>`
  + `<div>${fromText('With')}<div class="with"><span class="lk">Kit</span><i>6 scenes</i><span class="lk">Vega</span><i>4 scenes</i><span class="lk">the man in the gray coat</span><i>1</i></div>`
  + `${fromText('Facts from the text')}`
  + ev('Nobody’s been in that room since Tuesday.', 'ch. 7, Lena’s warning', true)
  + ev('the lemon on her hands', 'ch. 2, The bartender')
  + `</div></div>`
  + `${fromText('Open questions')}<div class="oq"><div class="oqh">How old is she? <span class="rule">found by a rule · no AI</span></div>`
  + `<div class="sides"><div>“about fifty” <span class="w">ch. 2</span><span class="lk fx">Fix in the text →</span></div><div>“not yet forty” <span class="w">ch. 8</span><span class="lk fx">Fix in the text →</span></div></div></div>`
  + `<div class="ft"><span class="nh">Pinned from Research</span></div>`
  + `<div class="pin">A bartender who poured after hours lost the license, not the owner<br><span class="src" style="margin-left:0">Bars, 1952 · p. 21</span> <span class="lk">Bars in the 1950s</span></div>`
  + `<div class="ft"><span class="nh">Questions the Codex answers</span><span class="tag">no AI</span></div>`
  + `<div class="qa">`
  + `<div><span class="q">When are Lena and Kit together?</span><span class="lk">4 scenes</span></div>`
  + `<div><span class="q">Who is in the back room in chapter 7?</span><span class="lk">Lena, Kit · 1 scene</span></div>`
  + `<div><span class="q">Which scenes has Lena alone?</span><span class="lk">2 scenes</span></div>`
  + `</div>`
  + `<div class="ai">${L.icons.spark}<span>AI · last read: end of yesterday’s session · nothing written on this entry</span></div>`
  + `</div>`;

// the Reference panel: the paragraph the selected fact points to
const ref = L.reference({
  kind: 'Text', name: 'Chapter 7', backOn: false, open: 'Go to the text ↗',
  body: `<div class="ctx">“Mine. Thin, nervous, writes everything down in a little green ledger.” Vega slid a coin across the counter and left her hand on it. “He said he’d meet me here at nine.”</div>`
    + `<div class="ctx here">Lena looked at the coin, then at the door behind her, then at nothing at all. “Nobody came in at nine. <mark>Nobody’s been in that room since Tuesday.</mark>”</div>`
    + `<div class="ctx">It was a good lie. Vega had heard worse from people who were paid to tell them. But there was a wet ring on the bar by the back-room door, and a second glass upside down on the drainer, still beaded.</div>`
    + `<div class="refmeta">Paragraph 6 of 10 · scene “Lena lies about the back room”</div>`,
});

const css = `<style>
.lib .libbody{flex:1;min-height:0;overflow:hidden;padding:0 10px 0 8px}
.lrow{display:flex;align-items:center;gap:6px;padding:4px 6px 4px 4px;border-radius:6px;line-height:1.3}
.lrow .cv{width:14px;flex:none;color:var(--ink3);display:inline-flex;justify-content:center}
.lrow .cv svg{width:10px;height:10px}
.lrow .t{flex:1;min-width:0}
.lrow .c{color:var(--ink3);font-size:11.5px}
.lrow.sec{font:600 10.5px var(--ui);letter-spacing:.08em;text-transform:uppercase;color:var(--ink3);margin-top:6px}
.lrow.sec .c{letter-spacing:0;font-weight:500}
.lrow.in{padding-left:22px}
.lrow.cur{background:#e6e6e3;font-weight:600}
.entry{font:13px/1.45 var(--ui);color:var(--ink)}
.entry .mine{position:relative;display:flex;gap:18px;align-items:flex-start;border:1px solid var(--line);border-radius:10px;padding:14px 16px;background:#fff;margin-bottom:6px}
.entry .mine .pen{position:absolute;right:10px;top:10px;color:var(--ink3);display:inline-flex}
.entry .hd{flex:1;min-width:0}
.entry .name{font:400 28px/1.15 var(--text);margin-bottom:5px;display:flex;align-items:baseline;gap:12px}
.entry .name .kind{font:500 11.5px var(--ui);color:var(--ink2);border:1px solid var(--line);border-radius:5px;padding:1px 7px}
.entry .alias{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:6px}
.entry .alias span{font-size:12px;border:1px solid var(--line);border-radius:9px;padding:0 8px;color:var(--ink2);background:var(--soft)}
.entry .alias .add{border-style:dashed;background:#fff;color:var(--ink3)}
.entry .line{font-size:13.5px;margin-bottom:4px}
.entry .notes{font-size:12.5px;color:var(--ink2)}
.entry .notes b{font-weight:600;color:var(--ink3);margin-right:4px}
.entry .ft{display:flex;align-items:center;gap:8px;margin:12px 0 5px}
.entry .ft .nh{margin:0}
.entry .tag{font:500 10.5px var(--ui);color:var(--ink3);background:#eeeeeb;border-radius:8px;padding:0 7px}
.entry .grid{display:grid;grid-template-columns:1fr 1fr;gap:0 26px}
.entry .scenes>div{display:flex;gap:8px;padding:1px 0}
.entry .scenes b{width:34px;flex:none;font-weight:500;color:var(--ink3);font-size:12px}
.entry .with{display:grid;grid-template-columns:auto 1fr;gap:1px 10px}
.entry .with i{font-style:normal;color:var(--ink3);font-size:12px}
.entry .pk-ev{font-size:13.5px;margin-bottom:5px;line-height:1.4}
.entry .pk-ev small{margin-top:1px}
.entry .pk-ev.selq{background:var(--accent-tint);border-left-color:var(--accent);border-radius:0 4px 4px 0}
.entry .oq{border:1px solid var(--line);border-radius:8px;padding:7px 12px;background:#fff}
.entry .oqh{font-weight:600;margin-bottom:4px}.entry .oqh .rule{font-weight:400;color:var(--ink3);font-size:11.5px;margin-left:6px}
.entry .sides{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.entry .sides>div{font:italic 14px var(--text);display:flex;align-items:baseline;gap:8px;flex-wrap:wrap}
.entry .sides .w{font:12px var(--ui);color:var(--ink3)}
.entry .sides .fx{font:500 12px var(--ui)}
.entry .pin{font-size:13px}
.entry .pin .src{margin:0 4px}.entry .pin .lk{white-space:nowrap}
.entry .qa>div{display:flex;gap:10px;padding:3px 0;border-bottom:1px solid var(--line2)}
.entry .qa .q{flex:1}
.entry .ai{display:flex;gap:7px;align-items:center;margin-top:10px;color:var(--ink3);font-size:12px}
.entry .ai svg{width:13px;height:13px}
.refbody .ctx{font:14px/1.55 var(--text);color:var(--ink3);margin-bottom:10px}
.refbody .ctx.here{color:var(--ink)}
.refbody .ctx mark{background:var(--accent-soft);color:inherit;border-radius:2px}
.refbody .refmeta{font-size:11.5px;color:var(--ink3)}
.refhead{padding:0 8px 0 4px;gap:1px}
.refhead .ib{width:19px}
.refhead .kind{font-size:10px;margin-left:2px;white-space:nowrap}
.refhead .name{font-size:12.5px}
.refhead .lk{font-size:11.5px}
</style>`;

const html = css + L.win({
  mode: 'Codex',
  crumbs: { chapter: 'People', scene: 'Lena' },
  left: library,
  right: ref,
  page: L.pageCol(entry, { paddingTop: 50 }),
  status: { style: false, view: false, left: `<span class="sb">27 mentions · 14 scenes</span><span class="sb">indexed as you type</span>` },
  ask: 'normal',
  extra: L.ann(1, 'People, Places, Things, Motifs, each with a count; filtered as you type', 20, 700, { w: 260 })
    + L.ann(2, 'Yours to edit: name, aliases, kind, picture, a line, notes. Renaming here renames everywhere', 404, 72)
    + L.ann(3, 'Marked “from the text”: computed from the book as you type, read-only; the scenes are links', 404, 784)
    + L.ann(4, 'Found by a rule, no AI; “Fix in the text →” on each side of the contradiction', 1040, 508, { w: 260 })
    + L.ann(5, 'Answered from the index, without an AI: each answer is a list of scenes', 1040, 664, { w: 260 })
    + L.ann(6, 'The paragraph the selected fact comes from', 1104, 456),
});

module.exports = {
  id: 'S18',
  file: 's18-codex-entry',
  title: 'The Codex',
  width: 1440,
  height: 900,
  html,
  caption: L.caption({
    id: 'S18', title: 'The Codex',
    scene: 'The Codex tab, with Lena chosen in the navigator. Her entry fills the middle: at the top what the writer edits, below it what Libreto computes from the text, read-only. The fact “Nobody’s been in that room since Tuesday” is selected, and the Reference panel shows the paragraph it comes from.',
    on: 'the navigator (filter, PEOPLE 8 with Lena current, PLACES 5, THINGS 3, MOTIFS 2, counts of mentions, “+ New entry”), the editable zone with a pencil (picture, Lena, kind “Person ▾”, aliases “Lena · Lena Roig · the woman in red · + alias”, the line, notes), the computed blocks marked “from the text” (Appears in · 14 scenes as links, With: Kit 6 · Vega 4, Facts from the text with chapters, the open question “How old is she?” with “about fifty · ch. 2” and “not yet forty · ch. 8”, each with “Fix in the text →”), Pinned from Research with its source and topic, Questions the Codex answers marked “no AI” with three rows, the gray “AI · last read” line, the Reference panel with the paragraph in chapter 7, the Ask button',
    off: 'Research topics in the left column, any editing of the computed blocks, an AI summary (none was asked for), a Search &amp; ask box',
  }),
};
