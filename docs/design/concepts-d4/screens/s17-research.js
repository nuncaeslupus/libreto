// S17: Research. The library (Codex and Research) on the left, a topic as a document in the middle, what it links to on the right.
const L = require('../lib');

// the left column: Inbox, topics in one level of folders, files; the column's + menu open at its foot.
const lrow = (t, c, o = {}) => `<div class="lrow${o.cur ? ' cur' : ''}${o.in ? ' in' : ''}${o.fold ? ' fold' : ''}"><span class="cv">${o.coll ? L.icons['chevron-right'] : o.open ? L.icons.chevron : ''}</span>${o.ic ? `<span class="ic ${o.ic}"></span>` : ''}<span class="t">${t}</span>${c ? `<span class="c">${c}</span>` : ''}</div>`;
const library = `<div class="nav lib"><div class="navtop"><div class="filter">${L.icons.magnifier}<span>Filter (titles and text)</span></div></div><div class="libbody">`
  + `<div class="nh">Inbox <span class="nc">3</span></div>`
  + lrow('jazz-clubs-harbor.html', 'link', { ic: 'k-lnk' }) + lrow('Photo · station steps, 1951', 'photo', { ic: 'k-img' }) + lrow('“Licensing hours in the port…”', 'pasted', { ic: 'k-txt' })
  + `<div class="nh">Topics</div>`
  + lrow('Bars of the 1950s', '', { open: true, fold: true }) + lrow('Licensing hours', '', { in: true, cur: true }) + lrow('The Blue Lamp’s history', '', { in: true })
  + lrow('Jazz records') + lrow('Police procedure') + lrow('Harbor district, 1950')
  + `<div class="nh">Files <span class="nc">6</span></div>`
  + lrow('Bars, 1952.pdf', '14 p.', { ic: 'k-pdf' }) + lrow('counter.jpg', '', { ic: 'k-img' }) + lrow('street.jpg', '', { ic: 'k-img' }) + lrow('3 more', '', { coll: true })
  + `</div><div class="navfoot lf"><span class="ib plusb">${L.icons.plus}</span></div>`
  + `<div class="menu" style="left:12px;bottom:44px;min-width:170px"><div class="mi hov">New topic</div><div class="mi">New folder</div></div></div>`;

// the topic document
const chipLk = (t) => `<span class="chip lk">${t}</span>`;
const att = (label, cls) => `<div class="att"><div class="pic sm ${cls}"></div><small>${label}</small></div>`;
const topic = `<div class="topic">`
  + `<h1 class="ttl">Licensing hours</h1>`
  + `<div class="linked"><span class="k">Linked to:</span>${chipLk('the Blue Lamp')}${chipLk('Lena')}<span class="chip q">+ Link to a person or place…</span></div>`
  + `<div class="atts">${att('Bars, 1952.pdf', 'pdf')}${att('counter.jpg', '')}${att('street.jpg', 'st')}${att('link · jazz clubs', 'lnk')}</div>`
  + `<p class="first">Most of the bars on Harbor Street kept the same hours and the same furniture: a long counter, a brass rail, a jukebox that nobody fed after ten. The back room was for cards, or for whoever the owner owed a favor.</p>`
  + `<h2>Hours and the law</h2>`
  + `<p class="first">The city licensed bars until two. Most bars closed at two; the bottles were locked at half past one. <span class="sel">A bartender who kept pouring after that was the one who lost the license, not the owner.</span></p>`
  + `<figure><div class="pic big"></div><figcaption>Bar counter, harbor district, about 1950 · counter.jpg</figcaption></figure>`
  + `<blockquote>“Nobody closed on time, and nobody was ever open late.” <span class="who">— a retired bartender, interviewed 1978</span></blockquote>`
  + `<p class="first">Lemon was the smell of a bar that had been cleaned; the owner’s bar smelled of beer. Lena would have carried the lemon home on her hands.</p>`
  + `</div>`;

// the right-click menu on the selection (content coordinates: window y − 92), and its submenu
const mi = (t, o = {}) => `<div class="mi${o.hov ? ' hov' : ''}${o.dis ? ' dis' : ''}">${t}${o.r ? `<span class="r">${o.r}</span>` : ''}</div>`;
const SEP = '<div class="msep"></div>';
const menus = `<div class="menu" style="left:620px;top:356px;min-width:268px">`
  + mi('Emphasis', { r: 'Ctrl+I' }) + mi('Strong', { r: 'Ctrl+B' }) + mi('Style as', { r: '▸' }) + SEP
  + mi('Add to the Codex as a fact of', { r: '▸', hov: true }) + mi('Link to a person or place…') + mi('Send to the Inbox', { dis: true }) + SEP
  + mi(`<span class="spk">${L.icons.spark}</span>Ask the AI about this`) + SEP
  + mi('Cut', { r: 'Ctrl+X' }) + mi('Copy', { r: 'Ctrl+C' }) + mi('Paste', { r: 'Ctrl+V' }) + `</div>`
  + `<div class="menu" style="left:884px;top:452px;min-width:150px">`
  + mi('Lena', { hov: true, r: 'person' }) + mi('Kit', { r: 'person' }) + mi('the Blue Lamp', { r: 'place' }) + `</div>`;

// the Reference panel: what this topic links to (we are in Research: no "Edit in Research" foot)
const lrefrow = (kind, t, o = {}) => `<div class="lkrow${o.cur ? ' cur' : ''}"><span class="k">${kind}</span><span class="lk">${t}</span>${o.m ? `<span class="m">${o.m}</span>` : ''}</div>`;
const ref = L.reference({
  kind: 'Topic', name: 'Licensing hours', backOn: false, foot: false,
  body: `<div class="nh">Linked to</div>`
    + lrefrow('Person', 'Lena', { m: 'typed in the topic' }) + lrefrow('Place', 'the Blue Lamp', { m: 'typed in the topic' }) + lrefrow('Place', 'Harbor Street', { m: 'linked by hand' })
    + `<div class="nh">Chapters that mention them</div>`
    + `<div class="chs">${[['ch. 1', 'Rain on the glass', 9], ['ch. 2', 'The bartender', 12], ['ch. 6', 'The back room', 7], ['ch. 7', 'Lena’s warning', 11], ['ch. 8', 'Closing time', 6]].map(([c, t, n]) => `<div><span class="lk">${c} · ${t}</span><span class="m">${n}</span></div>`).join('')}</div>`
    + `<div class="nh">Facts sent to the Codex</div>`
    + `<div class="fct">Closes at two; bottles locked at half past one<small>fact of <span class="lk">the Blue Lamp</span></small></div>`
    + `<div class="nh">Files</div><div class="chs"><div><span class="lk">Bars, 1952.pdf</span><span class="m">14 p.</span></div><div><span class="lk">counter.jpg</span></div></div>`,
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
.menu .spk{display:inline-flex;color:var(--accent)}.menu .spk svg{width:14px;height:14px}
.menu .mi.dis{color:var(--ink4)}
.lrow.fold{font-weight:500}
.navfoot.lf{justify-content:flex-start}
.navfoot .plusb{width:28px;height:28px;border:1px solid var(--line);border-radius:7px;background:#e6e6e3;color:var(--ink)}
.lkrow .k{width:48px}
.fct{font-size:12.5px;padding:2px 8px}.fct small{display:block;color:var(--ink3);font-size:11.5px}
.refbody .chs{padding:0 8px}
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
  crumbs: false,
  strip: { reviewCount: 12 },
  left: library,
  right: ref,
  page: L.pageCol(topic, { paddingTop: 36 }),
  status: { style: 'Plain', view: false, words: '1,140 words', left: `<span class="sb">4 files</span>` },
  ask: 'normal',
  content: menus,
  extra: L.ann(1, 'The Inbox, three ways in: drop a file, a picture or a link on the window; Edit ▸ Paste into the Inbox; right-click ▸ Send to the Inbox', 16, 560, { w: 250 })
    + L.ann(2, 'No browser inside Libreto in version 1: a web page comes as a link or a pasted passage', 16, 676, { w: 250 })
    + L.ann(3, 'The column’s +: New topic, New folder (one level of folders)', 196, 800, { w: 200 })
    + L.ann(4, 'A topic is a document like a chapter: title, styles, pictures inline, files attached', 640, 104, { w: 330 })
    + L.ann(5, 'Codex names typed here are linked at once; “Link to a person or place…” adds the rest by hand', 806, 182, { w: 250 })
    + L.ann(6, 'Select, right-click ▸ Add to the Codex as a fact of ▸ Lena: the fact lands on her entry with this topic as its source and a link back', 330, 620, { w: 262 })
    + L.ann(7, 'Send to the Inbox is gray: this is already Research', 884, 664, { w: 180 })
    + L.ann(8, 'What the topic links to: entries, and the chapters that mention them', 1150, 650, { w: 240 }),
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
    scene: 'Research, its position pressed on the mode switch. The left column is the writer’s material: the Inbox, the topics in one level of folders, the files, with the column’s + menu open. The topic “Licensing hours” is open in the middle as a document. The writer has selected a sentence and right-clicked: “Add to the Codex as a fact of ▸” proposes Lena, Kit and the Blue Lamp. On the right, the Reference panel shows what the topic links to.',
    on: 'the left column (filter, INBOX 3: a link, a photo, a pasted passage; TOPICS: the folder Bars of the 1950s ▸ Licensing hours (current), The Blue Lamp’s history; three more topics; FILES with “3 more”; the + at the foot with New topic · New folder), the topic (title, “Linked to” chips and “+ Link to a person or place…”, four attachments, text, a subheading, a picture, a block quote), the selected sentence and its right-click menu (Emphasis, Strong, Style as ▸, Add to the Codex as a fact of ▸ with Lena · Kit · the Blue Lamp, Link to a person or place…, Send to the Inbox in gray, Ask the AI about this, Cut · Copy · Paste), the Reference panel (TOPIC, Licensing hours, linked entries, the chapters that mention them, a fact already sent to the Codex, files; no foot), the Ask button',
    off: 'the Codex in the left column (it has its own position), a browser, the chapter list, a breadcrumb, Edit in Research (we are in it)',
  }),
};
