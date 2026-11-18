// S05: Coming back (draft 8; from draft 7's S04). The project reopened as it was left; the Last session card sits at
// the bottom of the page: words against the goal, "Where you were", what waits (each a button that goes there) and the
// offered catch-up. Inset: the same card after a 10-day gap.
const L = require('../lib');
const P = L.sample.chapter7Plain;

const css = `<style>
.s05 .lsc{position:absolute;left:50%;bottom:18px;transform:translateX(-50%);width:660px;z-index:26;background:#fff;border:1px solid var(--line);border-left:4px solid var(--accent);border-radius:10px;box-shadow:0 10px 30px rgba(0,0,0,.14);padding:12px 16px 12px;font:13px/1.4 var(--ui);color:var(--ink)}
.s05 .lsc.flat{width:600px;position:relative;left:auto;bottom:auto;transform:none;box-shadow:0 1px 3px rgba(0,0,0,.08);margin:0 auto}
.s05 .lsc .hd{display:flex;align-items:center;gap:8px;margin-bottom:8px}
.s05 .lsc .hd b{font-weight:600;font-size:13.5px}
.s05 .lsc .hd .wh{color:var(--ink3)}
.s05 .lsc .hd .nx{margin-left:auto;border:1px solid var(--line);border-radius:6px;padding:0 7px;color:var(--ink2)}
.s05 .lsc .goal{display:flex;align-items:center;gap:10px;margin-bottom:9px}
.s05 .lsc .bar{flex:1;height:6px;border-radius:3px;background:var(--line2);position:relative;overflow:hidden;max-width:230px}
.s05 .lsc .bar i{position:absolute;left:0;top:0;bottom:0;background:var(--ink2);border-radius:3px}
.s05 .lsc .lb{font:600 10.5px var(--ui);letter-spacing:.08em;text-transform:uppercase;color:var(--ink3);margin:8px 0 3px}
.s05 .lsc .q{font:italic 14.5px/1.45 var(--text);color:var(--ink2);padding-left:10px;border-left:2px solid var(--line)}
.s05 .lsc .q small{display:block;font:normal 11.5px var(--ui);color:var(--ink3);margin-top:1px}
.s05 .lsc .waits{display:flex;gap:8px;flex-wrap:wrap}
.s05 .lsc .waits span{border:1px solid var(--line);border-radius:6px;padding:3px 10px;font:500 12.5px var(--ui);color:var(--ink)}
.s05 .lsc .waits span.hov{background:var(--soft);border-color:var(--ink3)}
.s05 .lsc .catch{margin-top:10px;padding-top:9px;border-top:1px solid var(--line2);display:flex;align-items:center;gap:8px;color:var(--ink2)}
.s05 .lsc .catch svg{width:14px;height:14px;color:var(--accent)}
.s05 .lsc .catch b{font-weight:600;color:var(--ink)}
.s05 .lsc .catch .rn{margin-left:auto;border:1px solid var(--accent);color:var(--accent);border-radius:6px;padding:2px 10px;font-weight:500}
.s05 .lsc .nb{font-size:12px;color:var(--ink3);margin-top:8px;display:flex;justify-content:space-between}
.s05 .lsc .gapnote{margin:4px 0 0;color:var(--ink2);font-size:12.5px}
.s05b{display:block;position:relative;height:496px;background:#e3e3e0;padding:18px 28px}
.s05b .crop{position:absolute;top:18px;left:28px;width:700px;height:456px;background:var(--soft)}
.s05b .crop .in{padding:18px 40px}
.s05b .crop .fade{font:16px/1.6 var(--text);color:var(--ink4);padding:14px 50px 4px;height:100px;overflow:hidden}
</style>`;

const card = (o) => `<div class="lsc${o.flat ? ' flat' : ''}">`
  + `<div class="hd"><b>Last session</b><span class="wh">${o.when}</span><span class="nx">✕</span></div>`
  + `<div class="goal"><span><b>${o.words}</b> words, goal ${o.goal}</span><span class="bar"><i style="width:${o.pct}%"></i></span></div>`
  + (o.gap ? `<div class="gapnote">${o.gap}</div>` : '')
  + `<div class="lb">Where you were</div><div class="q">“…and a second glass upside down on the drainer, still beaded.”<small>Chapter 7 · Lena lies about the back room</small></div>`
  + `<div class="lb">What waits</div><div class="waits"><span class="hov">12 to review</span><span>2 cards unplaced</span><span>3 clippings in the Inbox</span></div>`
  + `<div class="catch">${L.icons.spark}<span><b>Catch up:</b> 3 scenes changed · ≈0.03 €</span><span class="rn">Read now</span></div>`
  + `<div class="nb"><span>Next on the Board: “Vega leaves without paying”</span><span>Don’t show this again</span></div>`
  + `</div>`;

const col = P.slice(1).map((p, i) => {
  if (i === 5) p = p.replace('still beaded.', 'still beaded.<span class="cursor"></span>');
  return `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`;
}).join('');

const html = css + '<div class="s05">' + L.win({
  view: 'Text',
  crumbs: L.sample.crumbs7,
  strip: { review: 12 },
  page: L.pageCol(col, { paddingTop: 22 }),
  status: { style: 'Plain', words: '0 of 1,000 today', goal: 0, pages: 'p. 146 of 248', saved: 'Saved 09:15' },
  ask: 'normal',
  content: card({ when: 'Thursday 19:32', words: '1,240', goal: '1,000', pct: 100 }),
  extra: L.ann(1, 'Reopened exactly as left: the same chapter, the same scroll, the cursor where you stopped. Nothing asks what you want to do', 20, 140, { w: 330 })
    + L.ann(2, 'Words against the goal, where you were, then what waits: each is a button that goes there', 20, 560, { w: 320 })
    + L.ann(3, '“12 to review” opens the Review margin beside this text; the cards unplaced go to the Board, the clippings to the Inbox', 1062, 560, { w: 340 })
    + L.ann(4, 'The catch-up is offered, with its cost, and runs only if you press Read now', 1062, 690, { w: 340 })
    + L.ann(5, 'It stays until ✕ or until you type on; then it goes to History ▸ Today', 1062, 780, { w: 340 }),
}) + `<div class="below s05b"><div class="crop"><div class="lbl">Ten days later: the same card, with a quiet note about the goal</div>`
  + `<div class="fade">She did not look at the back-room door on the way out, which took more effort than the walk home would.</div>`
  + `<div class="in">${card({ flat: true, when: 'Sunday Nov 8 · 10 days ago', words: '1,240', goal: '1,000', pct: 100,
    gap: 'To still finish by June 30 the daily goal is now 1,150 words. <span style="color:var(--accent)">Stay at 1,000</span>' })}</div></div>`
  + L.ann(6, 'After a long gap the card says how long it has been and what the goal would need, never “you missed 10 days”; “Stay at 1,000” changes nothing', 760, 150, { w: 380 })
  + L.ann(7, 'Where you were is the quickest way back into the voice; the goal note sits above it and asks nothing', 760, 290, { w: 380 })
  + `</div></div>`;

module.exports = {
  id: 'S05',
  file: 's05-coming-back',
  title: 'Coming back',
  width: 1440,
  height: 1360,
  html,
  caption: L.caption({
    id: 'S05', title: 'Coming back',
    scene: 'Libreto reopened the next morning exactly as it was left: chapter 7, the cursor after “still beaded.” The Last session card waits at the bottom of the page. Under the window: the same card after a ten-day gap.',
    on: 'the strip with the view switch and Review 12; chapter 7 mid-scroll with the cursor; the card (Last session · Thursday 19:32; 1,240 words against a goal of 1,000; Where you were, a quote from the paragraph you were in; What waits: 12 to review, 2 cards unplaced, 3 clippings in the Inbox; “✦ Catch up: 3 scenes changed · ≈0.03 € · Read now”; the next Board card; Don’t show this again; ✕); the status bar “0 of 1,000 today”; the Ask button; the inset with “10 days ago” and the adjusted daily goal',
    off: 'a “What do you want to do?” dialog, a bell, a timer on the card, the AI catching up by itself, trophies or streaks, the Navigator',
  }),
};
