// S17: Research. The library (Codex and Research) on the left, a topic as a document in the middle, what it links to on the right.
const L = require('../lib');

// the left column: Inbox, topics in one level of folders, files. No Codex here: it has its own tab.
const lrow = (t, c, o = {}) => `<div class="lrow${o.cur ? ' cur' : ''}${o.in ? ' in' : ''}"><span class="cv">${o.coll ? L.icons['chevron-right'] : o.open ? L.icons.chevron : ''}</span>${o.ic ? `<span class="ic ${o.ic}"></span>` : ''}<span class="t">${t}</span>${c ? `<span class="c">${c}</span>` : ''}</div>`;
const library = `<div class="nav lib"><div class="navtop"><div class="filter">${L.icons.magnifier}<span>Filter topics and files</span></div></div><div class="libbody">`
  + `<div class="nh">Inbox <span class="nc">3</span></div>`
  + lrow('jazz-clubs-harbor.html', 'link', { ic: 'k-lnk' }) + lrow('Photo · station steps, 1951', 'photo', { ic: 'k-img' }) + lrow('“Licensing hours in the port…”', 'pasted', { ic: 'k-txt' })
  + `<div class="nh">Topics</div>`
  + lrow('Bars', '', { open: true }) + lrow('The Blue Lamp', '', { in: true }) + lrow('Bars in the 1950s', '', { in: true, cur: true })
  + lrow('Jazz', '', { open: true }) + lrow('Jazz records', '', { in: true }) + lrow('Clubs on Harbor Street', '', { in: true })
  + lrow('Police procedure') + lrow('Harbor district, 1950')
  + `<div class="nh">Files <span class="nc">6</span></div>`
  + lrow('Bars, 1952.pdf', '14 p.', { ic: 'k-pdf' }) + lrow('counter.jpg', '', { ic: 'k-img' }) + lrow('street.jpg', '', { ic: 'k-img' }) + lrow('3 more', '', { coll: true })
  + `</div><div class="navfoot"><span class="btn q">+ New topic</span></div></div>`;

// the topic document
const chipLk = (t) => `<span class="chip lk">${t}</span>`;
const att = (label, cls) => `<div class="att"><div class="pic sm ${cls}"></div><small>${label}</small></div>`;
const topic = `<div class="topic">`
  + `<h1 class="ttl">Bars in the 1950s</h1>`
  + `<div class="linked"><span class="k">Linked to:</span>${chipLk('the Blue Lamp')}${chipLk('Lena')}${chipLk('ch. 2')}${chipLk('ch. 7')}<span class="chip q">+ Link to…</span></div>`
  + `<div class="atts">${att('Bars, 1952.pdf', 'pdf')}${att('counter.jpg', '')}${att('street.jpg', 'st')}${att('link · jazz clubs', 'lnk')}</div>`
  + `<p class="first">Most of the bars on Harbor Street kept the same hours and the same furniture: a long counter, a brass rail, a jukebox that nobody fed after ten. The back room was for cards, or for whoever the owner owed a favor.</p>`
  + `<h2>Hours and the law</h2>`
  + `<p class="first">The city licensed bars until two. Most bars closed at two; the bottles were locked at half past one. <span class="sel">A bartender who kept pouring after that was the one who lost the license, not the owner.</span></p>`
  + `<figure><div class="pic big"></div><figcaption>Bar counter, harbor district, about 1950 · counter.jpg</figcaption></figure>`
  + `<blockquote>“Nobody closed on time, and nobody was ever open late.” <span class="who">— a retired bartender, interviewed 1978</span></blockquote>`
  + `<p class="first">Lemon was the smell of a bar that had been cleaned; the owner’s bar smelled of beer. Lena would have carried the lemon home on her hands.</p>`
  + `</div>`
  // the selection's small toolbar, and its "Pin as fact of…" submenu
  + `<div class="pop seltb" style="left:150px;top:374px"><span><b>B</b></span><span><i>I</i></span><span class="sep"></span><span>Link to…</span><span class="hov">Pin as fact of… ▸</span><span>Move to a new topic</span><span class="sep"></span><span class="spk">${L.icons.spark}</span></div>`
  + `<div class="menu" style="left:286px;top:410px;min-width:220px"><div class="mh">Codex entries in this topic</div><div class="mi hov">Lena<span class="r">person</span></div><div class="mi">The Blue Lamp<span class="r">place</span></div><div class="msep"></div><div class="mi">Another entry…</div></div>`;

// the Reference panel: what this topic links to
const lrefrow = (kind, t, o = {}) => `<div class="lkrow${o.cur ? ' cur' : ''}"><span class="k">${kind}</span><span class="lk">${t}</span>${o.m ? `<span class="m">${o.m}</span>` : ''}</div>`;
const ref = L.reference({
  kind: 'Place', name: 'The Blue Lamp', backOn: false, open: 'Open in Codex ↗',
  body: `<div class="nh">This topic links to</div>`
    + lrefrow('Place', 'The Blue Lamp', { cur: true, m: 'Codex' }) + lrefrow('Person', 'Lena', { m: 'Codex' }) + lrefrow('Chapter', 'ch. 2 · The bartender') + lrefrow('Chapter', 'ch. 7 · Lena’s warning')
    + `<div class="tcard" style="margin-top:12px"><div style="display:flex;gap:12px;align-items:center;margin-bottom:8px"><div class="pic" style="width:48px;height:48px"></div><div><div class="pk-kind" style="margin:0">Place</div><div class="pk-title" style="margin:0;font-size:15px">The Blue Lamp</div></div></div>`
    + `<div style="color:var(--ink2)">Bar on Harbor Street; Lena’s bar. The back-room door is behind the till.</div>`
    + `<div class="nh">Chapters that mention it</div>`
    + `<div class="chs">${[['ch. 1', 'Rain on the glass', 9], ['ch. 2', 'The bartender', 12], ['ch. 5', 'Kit’s ledger', 3], ['ch. 6', 'The back room', 7], ['ch. 7', 'Lena’s warning', 11]].map(([c, t, n]) => `<div><span class="lk">${c} · ${t}</span><span class="m">${n}</span></div>`).join('')}</div>`
    + `<div class="nh">Other topics linked to it</div><div><span class="lk">The Blue Lamp</span> <span style="color:var(--ink3)">· in Bars</span></div>`
    + `</div>`,
});

const css = `<style>
.lib .libbody{flex:1;min-height:0;overflow:hidden;padding:0 10px 0 8px}
.lib .nh .nc{margin-left:6px;font-weight:500;color:var(--ink3);letter-spacing:0}
.lrow.in{padding-left:22px}
.lrow .ic{width:14px;height:14px;flex:none;border-radius:3px;border:1px solid var(--line);background:#fff}
.lrow .ic.k-img{background:radial-gradient(ellipse at 40% 30%,#e3cfa8 0,#9b7f62 50%,#4b3d31 100%);border:0}
.lrow .ic.k-pdf{border-color:#e0b4a8;background:#fbefeb}
.lrow .ic.k-lnk{border-color:#b9cbe2;background:#eef3fa}
.lrow .ic.k-txt{background:repeating-linear-gradient(#fff 0 3px,#cfcfcb 3px 4px)}
.seltb{align-items:center}
.seltb .sep{width:1px;height:16px;background:var(--line);padding:0;margin:0 2px}
.seltb .spk{display:inline-flex;color:var(--ink2);padding:4px 6px}
.seltb .spk svg{width:14px;height:14px}
.page .menu{font-family:var(--ui)}
.refhead{padding:0 8px 0 4px}
.refhead .ib{width:19px}
.refhead{gap:1px}
.refhead .kind{font-size:10px;margin-left:2px;white-space:nowrap}
.refhead .name{font-size:12.5px}
.refhead .lk{font-size:11.5px}
.menu .mh{font:600 10px var(--ui);letter-spacing:.08em;text-transform:uppercase;color:var(--ink3);padding:4px 10px 3px}
.menu .msep{height:1px;background:var(--line2);margin:4px 2px}
.topic .sel{background:rgba(59,110,168,.22);border-radius:2px}
.lkrow{display:flex;align-items:baseline;gap:10px;padding:4px 8px;border-radius:6px}
.lkrow .k{width:56px;flex:none;color:var(--ink3);font-size:11.5px}
.lkrow .m{margin-left:auto;color:var(--ink3);font-size:11px}
.lkrow.cur{background:var(--accent-tint)}
.refbody .tcard .nh{margin:12px 0 4px}
.chs>div{display:flex;padding:2px 0}.chs .m{margin-left:auto;color:var(--ink3);font-size:11.5px}
.lib .nh{margin:8px 6px 6px}
.lib .nh:first-child{margin-top:4px}
.lrow{display:flex;align-items:center;gap:6px;padding:5px 6px 5px 4px;border-radius:6px;line-height:1.3}
.lrow .cv{width:14px;flex:none;color:var(--ink3);display:inline-flex;justify-content:center}
.lrow .cv svg{width:10px;height:10px}
.lrow .t{flex:1;min-width:0}
.lrow .c{color:var(--ink3);font-size:11.5px}
.lrow.cur{background:#e6e6e3;font-weight:600}
.topic{font:16px/1.62 var(--text);color:var(--ink)}
.topic .ttl{font:400 30px/1.2 var(--text);margin:0 0 10px}
.topic .linked{display:flex;align-items:center;gap:6px;font:12.5px var(--ui);margin-bottom:12px}
.topic .linked .k{color:var(--ink3);margin-right:2px}
.topic .chip{font-size:12px;padding:2px 9px;background:#fff}
.topic .chip.lk{color:var(--accent);border-color:var(--line)}
.topic .chip.q{color:var(--ink3);border-style:dashed}
.topic .atts{display:flex;gap:14px;margin-bottom:18px;font:11px var(--ui);color:var(--ink2)}
.topic .att{display:flex;flex-direction:column;align-items:center;gap:4px}
.topic .att .pic.sm{width:72px;height:50px;border-radius:6px}
.topic .att .pic.st{background:radial-gradient(ellipse at 60% 20%,#d9d2c3 0,#9a9388 30%,#4e4a44 70%,#262320 100%)}
.topic .att .pic.lnk{background:#fff;border:1px solid var(--line)}
.topic .att .pic.lnk:after{content:"link";position:absolute;inset:0;height:auto;background:none;display:flex;align-items:center;justify-content:center;font:12px var(--ui);color:var(--accent)}
.topic p{margin:0 0 12px;text-indent:0}
.topic h2{font:600 13px var(--ui);letter-spacing:.02em;margin:16px 0 6px}
.topic figure{margin:6px 0 14px}
.topic .pic.big{width:620px;height:190px;border-radius:6px}
.topic figcaption{font:11.5px var(--ui);color:var(--ink3);margin-top:5px}
.topic blockquote{margin:0 0 12px 24px;padding-left:12px;border-left:2px solid var(--line);font-style:italic;color:var(--ink2)}
.topic blockquote .who{font-style:normal;font:12px var(--ui);color:var(--ink3)}
.page .pop{z-index:22}
</style>`;

const html = css + L.win({
  mode: 'Research',
  crumbs: { chapter: 'Bars', scene: 'Bars in the 1950s' },
  left: library,
  right: ref,
  page: L.pageCol(topic, { paddingTop: 36 }),
  status: { style: 'Plain', view: false, words: '1,140 words', left: `<span class="sb">4 files</span>` },
  ask: 'normal',
  extra: L.ann(1, 'Anything dropped or pasted in, sorted later', 86, 108)
    + L.ann(2, 'Topics, in one level of folders', 96, 210)
    + L.ann(3, 'No Codex in this column: it has its own tab', 20, 640, { w: 260 })
    + L.ann(4, 'A topic is a document like a chapter: title, styles, pictures inline, files attached', 640, 104, { w: 330 })
    + L.ann(5, 'Codex names typed here are recognized; “Link to…” adds the rest', 772, 182, { w: 250 })
    + L.ann(6, 'Select a passage, “Pin as fact of…”: the fact lands on the entry with its source and a link back', 410, 500, { w: 222 })
    + L.ann(7, 'What the topic links to: Codex entries, and the chapters that mention them', 1136, 640, { w: 250 }),
});

module.exports = {
  id: 'S17',
  file: 's17-research',
  title: 'Research',
  width: 1440,
  height: 900,
  html,
  caption: L.caption({
    id: 'S17', title: 'Research',
    scene: 'Research mode. The left column is the writer’s material: the Inbox, the topics in one level of folders, the files. The topic “Bars in the 1950s” is open in the middle as a document. The writer has selected a sentence; its small toolbar offers “Pin as fact of…”, and the submenu proposes the Codex entries the topic mentions, Lena first. On the right, the Reference panel shows what the topic links to, with the Blue Lamp open.',
    on: 'the left column (filter, INBOX 3: a link, a photo, a pasted paragraph; TOPICS: Bars ▸ The Blue Lamp, Bars in the 1950s (current); Jazz ▸ Jazz records, Clubs on Harbor Street; two more topics; FILES with “3 more”; “+ New topic”), the topic (title, “Linked to” chips and “+ Link to…”, four attachments, text, a subheading, a picture, a block quote), the selected sentence with its toolbar (B, I, Link to…, Pin as fact of… ▸, Move to a new topic, spark) and the submenu (Lena hovered, The Blue Lamp, Another entry…), the Reference panel (PLACE · The Blue Lamp, Open in Codex ↗, “This topic links to” with two Codex entries and two chapters, the Blue Lamp card with the chapters that mention it), the Ask button',
    off: 'the Codex in the left column, the chapter list, a Search &amp; ask box, a provider icon in the status bar',
  }),
};
