// S23: History. A sheet: each session (one run of the app) is one line, grouped by day, with the day's
// snapshots under it; one session open in place with its changes as links.
const L = require('../lib');

const css = `<style>
.strip .modes{opacity:.35}
.hist{position:absolute;left:50%;transform:translateX(-50%);width:900px;top:0;padding:14px 0 0;font-size:13px}
.hist .top{display:flex;align-items:center;gap:8px;color:var(--ink3);font-size:12px;margin:0 2px 10px}
.hist .top svg{width:13px;height:13px}
.hist .top .sp{flex:1}
.hist .lst{background:#fff;border:1px solid var(--line);border-radius:10px;overflow:hidden}
.hist .gh{font:600 10.5px var(--ui);letter-spacing:.08em;text-transform:uppercase;color:var(--ink3);padding:9px 16px 3px;border-top:1px solid var(--line2);background:#fafaf9}
.hist .gh:first-child{border-top:0}
.hist .row{display:flex;gap:14px;align-items:center;padding:5px 16px;position:relative}
.hist .row .cv{width:10px;flex:none;color:var(--ink3);display:inline-flex}.hist .row .cv svg{width:10px;height:10px}
.hist .row .h{width:96px;flex:none;color:var(--ink);font-variant-numeric:tabular-nums}
.hist .row .ic{width:62px;flex:none;display:flex;gap:6px;color:var(--ink2);font-size:13px}
.hist .row .ic span{width:16px;text-align:center}
.hist .row .w{width:92px;flex:none;font-variant-numeric:tabular-nums}
.hist .row .w .p{color:var(--fix)}.hist .row .w .m{color:var(--spell);margin-left:6px}
.hist .row .s{flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--ink)}
.hist .row.open{background:var(--accent-tint)}
.hist .row.open .s{font-weight:600}
.hist .det{background:var(--accent-tint);padding:0 16px 10px 50px}
.hist .det .ln{padding:2px 0;display:flex;gap:10px}
.hist .det .ln .where{width:260px;flex:none}
.hist .det .ln .what{color:var(--ink2)}
.hist .det .acts{display:flex;gap:8px;margin-top:8px}
.hist .snh{font:500 11px var(--ui);color:var(--ink3);padding:4px 16px 1px 50px}
.hist .snap{display:flex;gap:10px;align-items:center;padding:3px 16px 3px 50px;color:var(--ink2);font-size:12.5px}
.hist .snap .dot{width:8px;height:8px;border-radius:2px;transform:rotate(45deg);background:var(--ink4);flex:none}
.hist .snap.named .dot{background:var(--accent)}
.hist .snap.named b{font-weight:600;color:var(--ink)}
.hist .snap .t{width:44px;flex:none;color:var(--ink3);font-variant-numeric:tabular-nums}
.hist .snap .sp{flex:1}
.hist .snap.hov{background:#f4f6f9}
.hist .snap .lk{font-size:12px}
.hist .snap.more{color:var(--ink3)}
</style>`;

const ICON = { w: ['✎', 'wrote'], p: ['⇅', 'planned'], r: ['✓', 'reviewed'] };
const row = (h, ic, plus, minus, s, o = {}) => `<div class="row${o.open ? ' open' : ''}"><span class="cv">${o.open ? L.icons.chevron : L.icons['chevron-right']}</span><span class="h">${h}</span>`
  + `<span class="ic">${ic.split('').map((k) => `<span title="${ICON[k][1]}">${ICON[k][0]}</span>`).join('')}</span>`
  + `<span class="w"><span class="p">+${plus}</span><span class="m">−${minus}</span></span><span class="s">${s}</span></div>`;
const snap = (t, label, o = {}) => `<div class="snap${o.named ? ' named' : ''}${o.hov ? ' hov' : ''}${o.more ? ' more' : ''}">${o.more ? '<span class="t"></span>' : `<span class="dot"></span><span class="t">${t}</span>`}<span>${label}</span><span class="sp"></span>${o.hov ? '<span class="lk">View as it was</span><span class="lk">Compare with today</span>' : ''}</div>`;

const body = `<div class="hist">
  <div class="top"><span>Sessions, newest first · a session is one run of the app</span><span class="sp"></span>${L.icons.spark}<span>Questions in words (“when did I write about Lena’s car?”) go to Ask</span></div>
  <div class="lst">
    <div class="gh">Today · Fri, Nov 13</div>
    ${row('09:05–now', 'w', 212, 30, 'Lena’s warning, scene 3')}
    ${snap('', '… 6 automatic (every 10 min)', { more: true })}
    <div class="gh">Yesterday · Thu, Nov 12</div>
    ${row('20:40–22:10', 'r', 40, 96, 'Marta’s copy received; 4 of 18 decided')}
    <div class="snh">Snapshots</div>
    ${snap('20:41', 'Received from Marta')}${snap('22:10', 'End of session')}${snap('', '… 9 automatic (every 10 min)', { more: true })}
    <div class="gh">Wed, Nov 11</div>
    ${row('19:10–21:40', 'wpr', 86, 12, 'Lena’s warning, scenes 2–3', { open: true })}
    <div class="det">
      <div class="ln"><span class="where"><span class="lk">ch. 7 · Lena lies about the back room</span></span><span class="what">2 paragraphs rewritten, 1 added</span></div>
      <div class="ln"><span class="where"><span class="lk">ch. 7 · Vega asks about Kit</span></span><span class="what">scene break kept</span></div>
      <div class="ln"><span class="where"><span class="lk">Plan · Part One</span></span><span class="what">“Vega leaves without paying” moved after “Lena lies…”</span></div>
      <div class="ln"><span class="where"><span class="lk">ch. 9 · The pawnshop</span></span><span class="what">1 note done, 3 pending applied</span></div>
      <div class="acts"><span class="btn">View as it was</span><span class="btn">Compare with today</span></div>
    </div>
    <div class="snh">Snapshots</div>
    ${snap('20:14', 'Before Apply in Plan')}${snap('21:40', 'End of session')}${snap('', '… 14 automatic (every 10 min)', { more: true })}
    <div class="gh">Sat, Nov 7</div>
    ${row('16:50–18:40', 'w', 310, 22, 'Closing time, first pass')}
    <div class="snh">Snapshots</div>
    ${snap('18:32', '<b>Sent to Marta</b> · named', { named: true, hov: true })}${snap('18:40', 'End of session')}${snap('', '… 11 automatic (every 10 min)', { more: true })}
    <div class="gh">Earlier</div>
    ${row('Thu, Nov 5', 'wp', 1204, 160, 'Kit’s ledger: timeline fixes in ch. 4 and 5')}
  </div>
</div>`;

const html = css + L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  strip: { reviewCount: 12 },
  page: L.pageCol(``, { paddingTop: 40 }),
  status: { style: 'Plain', words: '2,418 words', pages: 'book p. ~146/248', review: '12 to review' },
  ask: 'normal',
  content: L.sheet({ title: 'History', body }),
  extra: css
    + L.ann(1, 'A session is one run of the app: the hours, what you did (✎ wrote, ⇅ planned, ✓ reviewed), words added and removed, a one-line summary', 14, 150, { w: 230 })
    + L.ann(2, 'Click a line: it opens in place, each change a link to where it happened', 14, 380, { w: 230 })
    + L.ann(3, 'Snapshots sit under their day: end of a session, before a big action; the ten-minute ones fold under “…”', 1180, 300, { w: 206 })
    + L.ann(4, '“View as it was” reads the snapshot without differences; “Compare with today” opens Compare, with Restore on a paragraph or the whole chapter', 1180, 470, { w: 206 })
    + L.ann(5, 'A named snapshot, made when the copy was sent', 1180, 706, { w: 206 })
    + L.ann(6, 'Questions in words go to Ask, and need an AI', 1180, 82, { w: 206 }),
});

module.exports = {
  id: 'S23',
  file: 's23-history',
  title: 'History',
  width: 1440,
  height: 900,
  html,
  caption: L.caption({
    id: 'S23', title: 'History',
    scene: 'History opened from the status bar, as a sheet over the window with the mode tabs dimmed. Each session, one run of the app, is one line grouped by day, with the day’s snapshots under it. The writer has opened Wednesday evening’s session in place and is pointing at the snapshot “Sent to Marta”.',
    on: 'the sheet header with Back to the text, the line about Ask, sessions by day (hours, ✎ ⇅ ✓ icons, +86 −12 words, a summary), Wednesday’s session open with four changes as links and “View as it was” · “Compare with today”, snapshots under each day (Received from Marta, Before Apply in Plan, End of session, “Sent to Marta” named and hovered with its two links, the automatic ones folded under “… 14 automatic (every 10 min)”), the dimmed mode tabs, the Ask button',
    off: 'an old version on screen, differences, Restore (it lives in Compare), a search box',
  }),
};
