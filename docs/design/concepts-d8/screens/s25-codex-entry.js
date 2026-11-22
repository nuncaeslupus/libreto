// S25: A Codex entry in the center (draft 8; from draft 7's S18). Lena's entry; Navigator on Codex; no view switch,
// breadcrumb "Codex › People › Lena". What you edit at the top; what Libreto computes from the text below, labeled
// "from the text"; an open question; Threads; the "For the AI" line and a private note that is never sent.
const L = require('../lib');

const lrow = (t, c, o = {}) => `<div class="lrow${o.cur ? ' cur' : ''}${o.sec ? ' sec' : ''}${o.in ? ' in' : ''}"><span class="cv">${o.coll ? L.icons['chevron-right'] : o.open ? L.icons.chevron : ''}</span><span class="t">${t}</span>${c ? `<span class="c">${c}</span>` : ''}</div>`;
const raw = (html) => ({ type: 'raw', html });
const navRows = [
  raw(lrow('Brief', 'the book’s intent', { sec: true })),
  raw(lrow('Threads', '3 open', { sec: true })),
  raw(lrow('People', '8', { open: true, sec: true })),
  ...[['Vega', 212], ['Kit', 148], ['Lena', 31], ['the pawnbroker', 14], ['the man in the gray coat', 9], ['the landlady', 6], ['the boy at the station', 4], ['Kit’s mother', 3]]
    .map(([t, c]) => raw(lrow(t, c, { in: true, cur: t === 'Lena' }))),
  raw(lrow('Places', '5', { coll: true, sec: true })),
  raw(lrow('Things', '3', { coll: true, sec: true })),
  raw(lrow('Motifs', '2', { coll: true, sec: true })),
];

const crumbs = `<span class="crumbs"><span class="dd ch">Codex</span><span class="sep">›</span><span class="dd">People</span><span class="sep">›</span><span class="dd">Lena</span></span>`;

const pencil = `<span class="pen">${L.icons.pen}</span>`;
const eye = `<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 8c1.6-3 3.8-4.5 6.5-4.5S12.900 5 14.500 8c-1.600 3-3.800 4.500-6.500 4.500S3.100 11 1.500 8z"/><circle cx="8" cy="8" r="2"/><path d="m2.500 13.500 11-11"/></svg>`;
const fromText = (t, extra = '') => `<div class="ft"><span class="nh">${t}</span><span class="tag">from the text</span>${extra}</div>`;

const entry = `<div class="entry">`
  + `<div class="mine">${pencil}<div class="pic" style="width:88px;height:88px;border-radius:10px"></div><div class="hd">`
  + `<div class="name">Lena <span class="kind">Person ▾</span></div>`
  + `<div class="alias"><span>Lena</span><span>Lena Roig</span><span>the woman in red</span><span class="add">+ alias</span></div>`
  + `<div class="line">Bartender at the Blue Lamp. Covers for Kit; knows more than she says.</div>`
  + `<div class="forai"><span class="fspk">${L.icons.spark}</span><b>For the AI</b> Bartender at the Blue Lamp, covers for Kit, lies by omission. <span class="meta">48 words · ≈70 tokens · sent when she is mentioned</span></div>`
  + `</div></div>`
  + `<div class="notes2">`
  + `<div class="note2"><b>Note</b> Older than she looks? Decide before chapter 8.</div>`
  + `<div class="note2 priv"><b>Private note</b> Based on my aunt Rosa; keep her real name out of everything.<span class="nev"><span class="switch"></span>${eye}Never send to the AI</span></div>`
  + `</div>`
  + `<div class="grid">`
  + `<div>${fromText('Appears in · 14 scenes')}<div class="scenes">`
  + [['ch. 2', 'Vega meets the bartender'], ['ch. 6', 'A man asks for the back room'], ['ch. 7', 'Lena lies about the back room'], ['ch. 8', 'Lena locks the back room']].map(([c, t]) => `<div><b>${c}</b><span class="lk">${t}</span></div>`).join('')
  + `<div><b></b><span class="lk">10 more</span></div></div></div>`
  + `<div>${fromText('Facts')}`
  + `<div class="pk-ev selq">“Nobody’s been in that room since Tuesday.”<small><span class="lk">ch. 7, Lena’s warning</span><span class="fa">Not a fact · Pin</span></small></div>`
  + `<div class="pk-ev">“the lemon on her hands”<small><span class="lk">ch. 2, The bartender</span></small></div></div></div>`
  + fromText('Open question')
  + `<div class="oq"><div class="oqh">How old is she? <span class="rule">two facts disagree</span></div>`
  + `<div class="sides"><div>“about fifty” <span class="w">ch. 2</span><span class="lk fx">Fix in the text →</span></div><div>“not yet forty” <span class="w">ch. 8</span><span class="lk fx">Fix in the text →</span></div></div></div>`
  + fromText('Threads she is part of')
  + `<div class="thr">`
  + `<div><span class="lk">Who unlocked the back room?</span><i>opened ch. 7 · answered ch. 11</i></div>`
  + `<div><span class="lk">Kit’s ledger</span><i>opened ch. 5 · last touched ch. 9 · open</i></div>`
  + `<div><span class="lk">The coin</span><i class="wn">opened ch. 7 · never mentioned again</i></div>`
  + `</div>`
  + `</div>`;

const css = `<style>
.s25 .lrow{display:flex;align-items:center;gap:6px;padding:4px 6px 4px 4px;border-radius:6px;line-height:1.3}
.s25 .lrow .cv{width:14px;flex:none;color:var(--ink3);display:inline-flex;justify-content:center}
.s25 .lrow .cv svg{width:10px;height:10px}
.s25 .lrow .t{flex:1;min-width:0}
.s25 .lrow .c{color:var(--ink3);font-size:11.5px}
.s25 .lrow.sec{font:600 10.5px var(--ui);letter-spacing:.08em;text-transform:uppercase;color:var(--ink3);margin-top:6px}
.s25 .lrow.sec .c{letter-spacing:0;font-weight:500;text-transform:none}
.s25 .lrow.in{padding-left:22px}
.s25 .lrow.cur{background:#e6e6e3;font-weight:600}
.pg25{flex:1;min-width:0;overflow:hidden;background:#fff}
.s25 .entry{width:740px;margin:26px auto 0;font:13px/1.45 var(--ui);color:var(--ink)}
.entry .mine{position:relative;display:flex;gap:18px;align-items:flex-start;border:1px solid var(--line);border-radius:10px;padding:14px 16px;background:#fff;margin-bottom:8px}
.entry .mine .pen{position:absolute;right:10px;top:10px;color:var(--ink3);display:inline-flex}
.entry .hd{flex:1;min-width:0}
.entry .name{font:400 28px/1.15 var(--text);margin-bottom:5px;display:flex;align-items:baseline;gap:12px}
.entry .name .kind{font:500 11.5px var(--ui);color:var(--ink2);border:1px solid var(--line);border-radius:5px;padding:1px 7px}
.entry .alias{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:6px}
.entry .alias span{font-size:12px;border:1px solid var(--line);border-radius:9px;padding:0 8px;color:var(--ink2);background:var(--soft)}
.entry .alias .add{border-style:dashed;background:#fff;color:var(--ink3)}
.entry .line{font-size:13.5px;margin-bottom:6px}
.entry .forai{display:flex;align-items:baseline;gap:6px;flex-wrap:wrap;font-size:12.5px;color:var(--ink2);border-top:1px solid var(--line2);padding-top:7px}
.entry .forai b{font-weight:600;color:var(--ink)}
.entry .forai .meta{color:var(--ink3);font-size:11.5px;margin-left:2px}
.entry .fspk{display:inline-flex;color:var(--accent);align-self:center}.entry .fspk svg{width:12px;height:12px}
.entry .notes2{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:2px}
.entry .note2{font-size:12.5px;color:var(--ink2);background:#fff;border:1px solid var(--line);border-radius:8px;padding:8px 11px}
.entry .note2 b{font-weight:600;color:var(--ink3);margin-right:4px}
.entry .note2.priv{background:#fafaf9}
.entry .nev{display:flex;align-items:center;gap:7px;margin-top:7px;padding-top:6px;border-top:1px solid var(--line2);color:var(--ink);font-weight:500}
.entry .nev .switch{width:26px;height:15px}
.entry .ft{display:flex;align-items:center;gap:8px;margin:14px 0 5px}
.entry .ft .nh{margin:0}
.entry .tag{font:500 10.5px var(--ui);color:var(--ink3);background:#eeeeeb;border-radius:8px;padding:0 7px}
.entry .grid{display:grid;grid-template-columns:1fr 1.1fr;gap:0 26px}
.entry .scenes>div{display:flex;gap:8px;padding:1px 0}
.entry .scenes b{width:34px;flex:none;font-weight:500;color:var(--ink3);font-size:12px}
.entry .pk-ev{font-size:13.5px;margin-bottom:6px;line-height:1.4}
.entry .pk-ev small{margin-top:1px;display:flex;gap:10px}
.entry .pk-ev small .fa{margin-left:auto;color:var(--ink3)}
.entry .pk-ev.selq{background:var(--accent-tint);border-left-color:var(--accent);border-radius:0 4px 4px 0}
.entry .oq{border:1px solid var(--line);border-radius:8px;padding:7px 12px;background:#fff}
.entry .oqh{font-weight:600;margin-bottom:4px}.entry .oqh .rule{font-weight:400;color:var(--ink3);font-size:11.5px;margin-left:6px}
.entry .sides{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.entry .sides>div{font:italic 14px var(--text);display:flex;align-items:baseline;gap:8px;flex-wrap:wrap}
.entry .sides .w{font:12px var(--ui);color:var(--ink3)}
.entry .sides .fx{font:500 12px var(--ui)}
.entry .thr>div{display:flex;gap:12px;padding:3px 0;border-bottom:1px solid var(--line2)}
.entry .thr i{font-style:normal;color:var(--ink3);margin-left:auto;font-size:12px}
.entry .thr i.wn{color:var(--warn)}
.s25 .navfoot .btn{justify-content:flex-start}
.s25 .status .rnow{color:var(--accent)}
</style>`;

const html = css + L.win({
  view: false,
  crumbs,
  left: L.navigator({ rows: navRows, section: 'Codex', placeholder: 'Filter the Codex', footer: '<span class="btn q">+ New entry</span>' }),
  page: `<div class="pg25">${entry}</div>`,
  strip: { review: 12 },
  status: { style: false, view: false, saved: 'Saved 19:32', left: `<span class="sb">✦ AI read up to 09:02 · 2 scenes changed · <span class="rnow">Read now</span> ≈0.01 €</span>` },
  ask: 'normal',
  extra: L.tip('Back to ch. 7 · Lena’s warning', { x: 50, y: 30 })
    + L.ann(1, 'Back returns to the paragraph you came from. No view switch: the center holds an entry, not the manuscript', 1100, 112, { w: 300 })
    + L.ann(2, 'Yours to edit: name, aliases, kind, picture, a line, notes. Renaming here renames everywhere', 1100, 190, { w: 300 })
    + L.ann(3, '“For the AI”: the only text about her that is sent, and what it costs in tokens', 1100, 258, { w: 300 })
    + L.ann(4, 'A private note is never sent to the AI: one switch', 1100, 322, { w: 300 })
    + L.ann(5, 'Marked “from the text”: computed as you type, no AI, read-only; a fact can be pinned or marked Not a fact', 1100, 400, { w: 300 })
    + L.ann(6, 'Two facts that disagree; “Fix in the text →” jumps to each place', 1100, 540, { w: 300 })
    + L.ann(7, 'Threads (setups and payoffs) she is part of, computed; one never paid off is flagged', 1100, 622, { w: 300 })
    + L.ann(8, 'Catch up is offered, never run silently: what changed, the cost, Read now', 560, 745, { w: 300 }),
});

module.exports = {
  id: 'S25',
  file: 's25-codex-entry',
  title: 'A Codex entry',
  width: 1440,
  height: 900,
  html: html.replace('<div class="win"', '<div class="win s25"'),
  caption: L.caption({
    id: 'S25', title: 'A Codex entry',
    scene: 'The writer followed Lena’s name from chapter 7 into the Codex. The center holds her entry, so the view switch is hidden and the breadcrumb reads Codex › People › Lena; the Navigator is on Codex. At the top is what the writer edits and, in one line, what the AI is sent about her; below it what Libreto computes from the text. Back shows its tooltip, which says where it returns to.',
    on: 'the Navigator (Book · Codex · Research with Codex pressed, Brief, Threads 3 open, People 8 with Lena current, Places, Things, Motifs folded, + New entry); the strip with Back’s tooltip “Back to ch. 7 · Lena’s warning”, the breadcrumb and Review 12 but no view switch; the entry (picture, name, kind, aliases, line, the “For the AI” line with words and tokens, a note, a private note with the “Never send to the AI” switch on); blocks marked “from the text” (Appears in, Facts with Not a fact · Pin, Open question “How old is she?” with “Fix in the text →” on both sides, Threads she is part of); the status bar line “AI read up to 09:02 · 2 scenes changed · Read now ≈0.01 €”; the Ask button',
    off: 'the view switch, a side panel, an AI summary nobody asked for, editing of the computed blocks, a Research list',
  }),
};
