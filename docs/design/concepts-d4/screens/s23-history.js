// S23: History. A sheet: each session (one run of the app) is one line, grouped by day, with the day's
// snapshots under it; one session open in place with its changes as links.
const L = require('../lib');

const css = `<style>
.strip .modes{opacity:.35}
.hist{position:absolute;left:30px;width:740px;top:0;padding:12px 0 0;font-size:13px}
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
.hist .det .ln .where{width:250px;flex:none}
.hist .det .ln.gone .what{color:var(--ink3)}
.hist .det .ln.gone .lk.g{color:var(--ink3);text-decoration:line-through}
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
const snap = (t, label, o = {}) => `<div class="snap${o.named ? ' named' : ''}${o.hov ? ' hov' : ''}${o.more ? ' more' : ''}">${o.more ? '<span class="t"></span>' : `<span class="dot"></span><span class="t">${t}</span>`}<span>${label}</span><span class="sp"></span>${o.hov ? '<span class="lk">Open</span><span class="lk">Compare with today</span>' : ''}</div>`;

const body = `<div class="hist">
  <div class="top"><span>Sessions, newest first · a session is one run of the app</span><span class="sp"></span>${L.icons.spark}<span>Questions in words go to Ask</span></div>
  <div class="lst">
    <div class="gh">Today · Fri, Nov 13</div>
    ${row('09:05–now', 'w', 212, 30, 'Lena’s warning, scene 3')}
    ${snap('', '… 6 automatic (every 10 min)', { more: true })}
    <div class="gh">Yesterday · Thu, Nov 12</div>
    ${row('20:40–22:10', 'r', 40, 96, 'Notes from Marta (Nov 7) added; 4 of 11 decided')}
    <div class="snh">Snapshots</div>
    ${snap('20:41', 'Before Rename everywhere (Lena)')}${snap('22:10', 'End of session')}${snap('', '… 9 automatic', { more: true })}
    <div class="gh">Wed, Nov 11</div>
    ${row('19:10–21:40', 'wpr', 86, 12, 'Lena’s warning, scenes 2–3', { open: true })}
    <div class="det">
      <div class="ln"><span class="where"><span class="lk">ch. 7 · Lena lies about the back room</span></span><span class="what">2 paragraphs rewritten, 1 added</span></div>
      <div class="ln"><span class="where"><span class="lk">ch. 7 · Vega asks about Kit</span></span><span class="what">scene break kept</span></div>
      <div class="ln gone"><span class="where"><span class="lk g">ch. 8 · “The till drawer stuck…”</span></span><span class="what">This text is no longer in the book · <span class="lk">Show it in the snapshot</span></span></div>
      <div class="ln"><span class="where"><span class="lk">Plan · Part One</span></span><span class="what">“Vega leaves without paying” moved after “Lena lies…”</span></div>
    </div>
    <div class="snh">Snapshots</div>
    ${snap('20:14', 'Before Apply in Plan')}${snap('21:40', 'End of session')}${snap('', '… 14 automatic', { more: true })}
    <div class="gh">Sat, Nov 7</div>
    ${row('16:50–18:40', 'w', 310, 22, 'Closing time, first pass')}
    <div class="snh">Snapshots</div>
    ${snap('18:32', '<b>Sent to Marta</b> · named', { named: true, hov: true })}${snap('18:40', 'End of session')}${snap('', '… 11 automatic', { more: true })}
    <div class="gh">Earlier</div>
    ${row('Thu, Nov 5', 'wp', 1204, 160, 'Kit’s ledger: timeline fixes in ch. 4 and 5')}
  </div>
</div>`;

// Compare with today, as a small inset: the same two-column view as a reader's copy, Restore on a paragraph
const cmp = `<div class="cmpi"><div class="lbl">Compare with today · Sent to Marta</div><div class="cbox">`
  + `<div class="ch">Chapter 7 · Lena’s warning<span class="sp"></span><span class="lk">Restore this chapter</span></div>`
  + `<div class="cols"><div><div class="lab">Nov 7, 18:32</div>“Kit who?” Lena set a glass down <span class="chg">harder than she meant to</span>. “Half the city’s called Kit.”</div>`
  + `<div><div class="lab">Today</div>“Kit who?” Lena set a glass down <span class="chg">hard enough to make it ring</span>. “Half the city’s called Kit.”</div></div>`
  + `<div class="ra"><span class="btn">Restore</span><small>this paragraph</small></div>`
  + `<div class="fold"><span>›</span>6 paragraphs unchanged</div>`
  + `<div class="cols"><div><div class="lab">Nov 7, 18:32</div>Lena looked at the coin, then at the door behind her. “Nobody came in at nine.”</div>`
  + `<div><div class="lab">Today</div>Lena looked at the coin, then at the door behind her, <span class="chg">then at nothing at all</span>. “Nobody came in at nine.”</div></div>`
  + `<div class="ra"><span class="btn">Restore</span></div>`
  + `<div class="bb"><span class="btn pri">Bring back this version</span><small>The whole book as it was on Nov 7, 18:32. Today’s text is kept as a snapshot first.</small></div>`
  + `</div></div>`;

const css2 = `<style>
.cmpi{position:absolute;left:800px;top:12px;width:610px}
.cmpi .lbl{display:inline-block;font:600 10.5px var(--ui);letter-spacing:.08em;text-transform:uppercase;color:var(--ink2);background:#d9d9d6;border-radius:5px;padding:2px 8px;margin-bottom:6px}
.cbox{background:#fff;border:1px solid var(--line);border-radius:10px;box-shadow:0 6px 20px rgba(0,0,0,.07);overflow:hidden;font:14px/1.5 var(--text)}
.cbox .ch{display:flex;align-items:center;font:600 12px var(--ui);padding:8px 12px;border-bottom:1px solid var(--line2);background:var(--soft)}
.cbox .ch .sp{flex:1}.cbox .ch .lk{font-weight:500}
.cbox .cols{display:flex}
.cbox .cols>div{flex:1;padding:8px 12px}
.cbox .cols>div+div{border-left:1px solid var(--line)}
.cbox .lab{font:600 10.5px var(--ui);letter-spacing:.06em;text-transform:uppercase;color:var(--ink3);margin-bottom:3px}
.cbox .chg{background:var(--accent-soft);border-radius:2px}
.cbox .ra{display:flex;gap:8px;align-items:center;padding:0 12px 8px;font-family:var(--ui)}
.cbox .ra small{color:var(--ink3);font-size:11.5px}
.cbox .fold{font:12px var(--ui);color:var(--ink3);padding:4px 12px;border-top:1px dashed var(--line);border-bottom:1px dashed var(--line);display:flex;gap:8px}
.cbox .bb{display:flex;gap:10px;align-items:center;padding:10px 12px;border-top:1px solid var(--line2);background:var(--soft);font-family:var(--ui)}
.cbox .bb small{color:var(--ink2);font-size:12px;line-height:1.35}
.cbox .bb .btn{white-space:nowrap}
</style>`;

const html = css + css2 + L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  strip: { reviewCount: 12 },
  page: L.pageCol(``, { paddingTop: 40 }),
  status: { style: 'Plain', words: '2,418 words', pages: 'p. 146 of 248' },
  ask: 'normal',
  content: L.sheet({ title: 'History', body: body + cmp }),
  extra: L.ann(1, 'A session is one run of the app: the hours, what you did (✎ wrote, ⇅ planned, ✓ reviewed), +86 −12 words, a one-line summary', 820, 545, { w: 280 })
    + L.ann(2, 'Click a session: its changes open in place, each a link to that place as it is today', 820, 640, { w: 280 })
    + L.ann(3, 'A change whose text is gone says so, and shows it in the snapshot', 820, 700, { w: 280 })
    + L.ann(4, 'Snapshots under their day: named, end of a session, before a big action; the ten-minute ones fold under “…”. Open reads one as it was', 1120, 545, { w: 280 })
    + L.ann(5, '“Compare with today”: the same two columns as a reader’s copy, Restore on a paragraph or a chapter', 1120, 640, { w: 280 })
    + L.ann(6, 'Bring back this version restores the whole book, and says first that today’s text is kept as a snapshot', 1120, 712, { w: 280 }),
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
    scene: 'History opened from the status bar, as a sheet over the window with the mode switch dimmed. Each session, one run of the app, is one line grouped by day, with the day’s snapshots under it. Wednesday evening’s session is open in place. The writer chose Compare with today on the snapshot “Sent to Marta”, shown at the right as an inset.',
    on: 'the sheet header with Back to the text, the line about Ask, sessions by day (hours, ✎ ⇅ ✓ icons, +86 −12 words, a summary), Wednesday’s session open with four changes as links, one of them “This text is no longer in the book · Show it in the snapshot”, snapshots under each day (Before Rename everywhere, Before Apply in Plan, End of session, “Sent to Marta” named and hovered with Open · Compare with today, the automatic ones folded under “…”), the Compare inset (Nov 7, 18:32 | Today, changed words marked, Restore on each paragraph, Restore this chapter, a folded stretch, Bring back this version with its line), the dimmed mode switch, the Ask button',
    off: '“Restore this version”, a search box',
  }),
};
