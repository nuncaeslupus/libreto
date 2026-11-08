// S17: Research. The library (Codex and Research) on the left, a topic as a document in the middle, what it links to on the right.
const L = require('../lib');

// the library: two sections, one list
const lrow = (t, c, o = {}) => `<div class="lrow${o.cur ? ' cur' : ''}"><span class="cv">${o.coll ? L.icons['chevron-right'] : ''}</span><span class="t">${t}</span>${c ? `<span class="c">${c}</span>` : ''}</div>`;
const library = `<div class="nav lib"><div class="libbody">`
  + `<div class="nh">Codex</div>`
  + lrow('People', '3', { coll: true }) + lrow('Places', '4', { coll: true }) + lrow('Things', '2', { coll: true }) + lrow('Motifs', '1', { coll: true })
  + `<div class="nh">Research</div>`
  + lrow('Inbox', '2 new') + lrow('Bars in the 1950s', '', { cur: true }) + lrow('Jazz records') + lrow('Police procedure') + lrow('Harbor district, 1950')
  + `</div><div class="navfoot"><span class="btn q">+ New topic</span></div></div>`;

// the topic document
const chipLk = (t) => `<span class="chip lk">${t}</span>`;
const att = (label, cls) => `<div class="att"><div class="pic sm ${cls}"></div><small>${label}</small></div>`;
const topic = `<div class="topic">`
  + `<h1 class="ttl">Bars in the 1950s</h1>`
  + `<div class="linked"><span class="k">Linked to:</span>${chipLk('the Blue Lamp')}${chipLk('Lena')}${chipLk('ch. 2')}<span class="chip q">+ Link to…</span></div>`
  + `<div class="atts">${att('Bars, 1952.pdf', 'pdf')}${att('counter.jpg', '')}${att('street.jpg', 'st')}${att('link · jazz clubs', 'lnk')}</div>`
  + `<p class="first">Most of the bars on Harbor Street kept the same hours and the same furniture: a long counter, a brass rail, a jukebox that nobody fed after ten. The back room was for cards, or for whoever the owner owed a favor.</p>`
  + `<h2>Hours and the law</h2>`
  + `<p class="first">The city licensed bars until two. <span class="sel">Most bars closed at two; the bottles were locked at half past one.</span> A bartender who kept pouring after that was the one who lost the license, not the owner.</p>`
  + `<figure><div class="pic big"></div><figcaption>Bar counter, harbor district, about 1950 · counter.jpg</figcaption></figure>`
  + `<blockquote>“Nobody closed on time, and nobody was ever open late.” <span class="who">— a retired bartender, interviewed 1978</span></blockquote>`
  + `<p class="first">Lemon was the smell of a bar that had been cleaned; the owner’s bar smelled of beer. Lena would have carried the lemon home on her hands.</p>`
  + `</div>`
  // the Pin popover, under the selection
  + `<div class="pop" style="left:20px;top:372px"><span class="hov">Pin as fact of</span><span class="dd" style="font-weight:600">the Blue Lamp</span></div>`;

// the Reference panel: what this topic links to
const ref = `<div class="ref"><div class="refhead">${L.ib('back')}${L.ib('forward', 'off')}`
  + `<span class="kind">Topic</span><span class="name">Bars in the 1950s</span><span class="sp"></span>${L.ib('magnifier', '', 'Ask about this')}</div>`
  + `<div class="refbody"><div class="nh">Linked to</div>`
  + `<div class="tcard"><div style="display:flex;gap:12px;align-items:center;margin-bottom:8px"><div class="pic" style="width:48px;height:48px"></div><div><div class="pk-kind" style="margin:0">Place</div><div class="pk-title" style="margin:0;font-size:15px"><span class="lk">The Blue Lamp</span></div></div></div>`
  + `<div style="color:var(--ink2)">Bar on Harbor Street; Lena’s bar. The back-room door is behind the till.</div>`
  + `<div style="margin-top:8px;color:var(--ink3);font-size:12px">Mentioned in <span class="lk">ch. 1</span>, <span class="lk">2</span>, <span class="lk">5</span>, <span class="lk">6</span>, <span class="lk">7</span></div></div>`
  + `<div class="tcard"><div style="display:flex;gap:12px;align-items:center"><div class="avatar" style="width:36px;height:36px;font-size:15px">L</div><div><div class="pk-kind" style="margin:0">Person</div><div class="pk-title" style="margin:0;font-size:15px"><span class="lk">Lena</span></div></div></div>`
  + `<div style="margin-top:8px;color:var(--ink3);font-size:12px">Mentioned in <span class="lk">ch. 2–8</span></div></div>`
  + `<div class="tcard"><div class="pk-kind" style="margin:0">Chapter</div><div class="pk-title" style="margin:0;font-size:15px"><span class="lk">ch. 2 · The bartender</span></div></div>`
  + `</div></div>`;

const css = `<style>
.lib .libbody{flex:1;min-height:0;overflow:hidden;padding:10px 10px 0 8px}
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
  crumbs: { chapter: 'Bars in the 1950s' },
  left: library,
  right: ref,
  page: L.pageCol(topic, { paddingTop: 36 }),
  status: { style: 'Plain', words: '1,140 words', left: `<span class="sb">4 files</span>` },
  ask: 'normal',
  extra: L.ann(1, 'The Inbox takes anything dropped in, sorted later', 20, 400, { w: 240 })
    + L.ann(2, 'Two sections, two things: the Codex is what the book says, Research is what you gather', 20, 470, { w: 240 })
    + L.ann(3, 'Select a passage, “Pin as fact of…”: the fact lands on the Codex entry with its source', 1100, 470, { w: 250 })
    + L.ann(4, 'A topic is a document like a chapter: title, styles, pictures inline, files attached', 1100, 560, { w: 250 })
    + L.ann(5, 'Names typed here are recognized as in the manuscript; the rest is linked with “Link to…”', 1100, 640, { w: 250 }),
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
    scene: 'The topic “Bars in the 1950s” open as a document in the middle. The library on the left has the Codex above and the research topics below. The writer has selected one sentence and the popover offers to pin it as a fact of the Blue Lamp; on the right, the Reference panel lists what the topic links to.',
    on: 'the library (Codex: People, Places, Things, Motifs collapsed; Research: Inbox with 2 new, four topics with the current one marked, “+ New topic”), the topic with its title, the “Linked to” row with “+ Link to…”, four attachments, text with a subheading, a picture with a caption and a block quote, the selected sentence with the “Pin as fact of ▾ the Blue Lamp” popover, the Reference panel with the Blue Lamp card (“Mentioned in ch. 1, 2, 5, 6, 7”), Lena and chapter 2, the Ask button',
    off: 'the chapter list, tabs or a search box in the Reference panel, a Search &amp; ask box, a provider icon in the status bar',
  }),
};
