// S23: History. A sheet: every writing session on one line, grouped by day; yesterday's session expanded in place.
const L = require('../lib');

const css = `<style>
.hist{position:absolute;left:50%;transform:translateX(-50%);width:920px;top:0;padding:18px 0 0}
.hist .askin{display:flex;align-items:center;gap:10px;border:1px solid var(--line);border-radius:9px;padding:8px 12px;font-size:13.5px;color:var(--ink3);background:#fff}
.hist .askin .logo{width:14px;height:14px}
.hist .lst{margin-top:14px;background:#fff;border:1px solid var(--line);border-radius:10px;overflow:hidden}
.hist .gh{font:600 10.5px var(--ui);letter-spacing:.08em;text-transform:uppercase;color:var(--ink3);padding:10px 16px 4px;border-top:1px solid var(--line2)}
.hist .gh:first-child{border-top:0}
.hist .row{display:flex;gap:14px;align-items:baseline;padding:8px 16px;font-size:13px;position:relative}
.hist .row .d{width:200px;flex:none;color:var(--ink);font-weight:500}
.hist .row .mo{width:70px;flex:none;color:var(--ink2)}
.hist .row .s{flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.hist .row .w{width:92px;flex:none;text-align:right;color:var(--ink2)}
.hist .row.hov{background:#f4f6f9}
.hist .row.open{background:var(--accent-tint);font-weight:600}
.hist .row.open .mo,.hist .row.open .w{color:var(--ink)}
.hist .det{background:var(--accent-tint);padding:2px 16px 12px 230px}
.hist .det .ln{font-size:13px;padding:3px 0}
.hist .det .acts{display:flex;gap:8px;margin-top:8px}
</style>`;

const row = (d, mo, s, w, cls = '') => `<div class="row${cls ? ' ' + cls : ''}"><span class="d">${d}</span><span class="mo">${mo}</span><span class="s">${s}</span><span class="w">${w}</span></div>`;

const body = `<div class="hist">
  <div class="askin">${L.icons.logo}<span>Ask about the history… (when did I write about Lena’s car?)</span></div>
  <div class="lst">
    <div class="gh">Today</div>
    ${row('Today · 09:05–now', 'Write', 'ch. 7, Lena’s warning: this scene', '+86 words')}
    <div class="gh">Yesterday</div>
    ${row('Yesterday · 21:05–22:30', 'Review', '14 tasks closed', '+120 words', 'open')}
    <div class="det">
      <div class="ln"><span class="lk">ch. 7</span>: Lena’s lie rewritten (2 paragraphs)</div>
      <div class="ln"><span class="lk">ch. 9</span>: 1 note resolved</div>
      <div class="acts"><span class="btn">View as it was</span><span class="btn">Compare with today</span></div>
    </div>
    <div class="gh">This week</div>
    ${row('Wed, Nov 11 · 10:20–12:05', 'Write', 'Kit’s ledger: timeline fixes in ch. 4 and 5', '+1,204 words')}
    ${row('Tue, Nov 10 · 21:00–21:40', 'Research', 'Bars in the 1950s: a PDF and two photos', '0 words')}
    ${row('Mon, Nov 9 · 20:15–21:30', 'Write', 'Chapter 6, “The back room”, finished', '+2,870 words')}
    <div class="gh">October</div>
    ${row('Wed, Oct 28 · 16:00–18:40', 'Write', 'Lena’s first scene rewritten', '+340 words')}
    ${row('Sat, Oct 24 · 09:30–11:10', 'Plan', 'Part Two laid out as cards; 2 scenes unplaced', '0 words')}
    ${row('Wed, Oct 21 · 20:00–22:15', 'Write', 'The pawnshop, first draft', '+2,120 words')}
    ${row('Mon, Oct 19 · 19:10–19:50', 'Write', 'Station steps: Kit’s walk home', '+610 words')}
  </div>
</div>`;

const html = L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  page: L.pageCol(``, { paddingTop: 40 }),
  status: { style: 'Plain', words: '2,418 words', pages: 'book p. ~146/248', fixes: '3 fixes' },
  ask: 'normal',
  content: L.sheet({ title: 'History', body }),
  extra: css
    + L.ann(1, 'One line per session: when, how long, which mode, what changed, how many words', 24, 262, { w: 220 })
    + L.ann(2, 'Click a line: it opens in place, each change a link to its place in the text', 24, 352, { w: 220 })
    + L.ann(3, '“View as it was” reads that version without differences; “Compare with today” puts old and new side by side, with Restore', 1160, 400, { w: 226 })
    + L.ann(4, 'Questions in words go to Ask', 1160, 140, { w: 220 }),
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
    scene: 'History from the status bar: a sheet over the window. Every session is one line, grouped by day. Yesterday’s Review session was clicked and opened in place: what changed, where, and two buttons.',
    on: 'the sheet header with Back to the text, the Ask field about the history, sessions grouped Today / Yesterday / This week / October, the expanded row with two linked changes and “View as it was” · “Compare with today”, the Ask button',
    off: 'a briefing dialog, an old version on screen, Restore, differences',
  }),
};
