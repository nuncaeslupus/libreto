// S28: Statistics. A sheet with tabs Words · Sessions · Who appears where and a range (This week ·
// This month · All); the Words tab: words per chapter and per day for the range; the mode tabs dimmed behind.
const L = require('../lib');

// written this month, per chapter (sums to 14,860) and per day, Nov 1–13 (same sum)
const perCh = [0, 0, 320, 1210, 0, 2140, 2418, 3980, 2110, 1850, 832];
const perDay = [0, 1420, 980, 0, 1650, 2210, 0, 1380, 2870, 0, 1204, 2900, 246];
const H = 230;
const fmt = (n) => n.toLocaleString('en-US');

const css = `<style>
.strip .modes{opacity:.32}
.stat{position:absolute;left:50%;transform:translateX(-50%);width:1140px;top:0;padding:16px 0 0}
.stat .top{display:flex;align-items:center;justify-content:center;position:relative;margin-bottom:40px;height:30px}
.stat .top .rng{position:absolute;right:0;top:3px;display:flex;gap:6px;align-items:center;font-size:12px;color:var(--ink3)}
.stat .top .rng .chip{font-size:12px;padding:2px 10px;border-radius:12px}
.stat .top .seg span{padding:4px 14px;font-size:12.5px}
.stat .cards{display:flex;gap:16px;align-items:flex-start}
.stat .card{background:#fff;border:1px solid var(--line);border-radius:11px;padding:16px 18px}
.stat .card h3{margin:0 0 14px;font:600 13px var(--ui)}
.stat .card h3 small{font-weight:400;color:var(--ink3);margin-left:6px}
.stat .wbars{display:flex;gap:8px;align-items:flex-end;border-bottom:1px solid var(--line);padding:0 4px}
.stat .wbar{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;height:${H + 22}px;gap:5px}
.stat .wbar i{display:block;width:70%;max-width:34px;background:#9fb9d6;border-radius:3px 3px 0 0;font-style:normal;min-height:1px}
.stat .wbar b{font:500 10.5px var(--ui);color:var(--ink3)}
.stat .xl{display:flex;gap:8px;padding:6px 4px 0;font-size:11px;color:var(--ink3)}
.stat .xl span{flex:1;text-align:center}
.stat .tot{margin-top:14px;font-size:13.5px;color:var(--ink);display:flex;gap:8px}
.stat .tot span+span:before{content:"·";color:var(--ink4);margin-right:8px}
</style>`;

const chart = (vals, labels) => `<div class="wbars">${vals.map((w) => `<div class="wbar"><b>${w ? fmt(w) : ''}</b><i style="height:${Math.round(w / 3980 * H)}px"></i></div>`).join('')}</div>`
  + `<div class="xl">${labels.map((l) => `<span>${l}</span>`).join('')}</div>`;

const body = `<div class="stat">
  <div class="top"><span class="seg"><span class="on">Words</span><span>Sessions</span><span>Who appears where</span></span>
    <span class="rng">Range<span class="chip">This week</span><span class="chip acc">This month</span><span class="chip">All</span></span></div>
  <div class="cards">
    <div class="card" style="flex:1;min-width:0"><h3>Per chapter<small>words written this month</small></h3>${chart(perCh, perCh.map((_, i) => i + 1))}
      <div class="tot"><span>+14,860 words this month</span><span>86,240 in the book</span></div></div>
    <div class="card" style="width:540px;flex:none"><h3>Per day<small>November</small></h3>${chart(perDay, perDay.map((_, i) => i + 1))}
      <div class="tot"><span>9 writing days</span><span>best: Nov 9, 2,870</span></div></div>
  </div>
</div>`;

const html = L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  strip: { reviewCount: 12 },
  page: L.pageCol(``, { paddingTop: 40 }),
  status: { style: 'Plain', words: '2,418 words', pages: 'book p. ~146/248', review: '12 to review' },
  ask: 'normal',
  content: L.sheet({ title: 'Statistics', body }),
  extra: css
    + L.ann(1, 'A sheet, from the word count or Reports ▸ Statistics; Back to the text (Esc) leaves', 100, 822, { w: 300 })
    + L.ann(2, 'Words · Sessions (time and words) · Who appears where (people by chapter)', 50, 128, { r: true })
    + L.ann(3, 'The range: this week, this month, all', 1040, 160)
    + L.ann(4, 'The mode tabs stay, dimmed behind the sheet', 966, 72),
});

module.exports = {
  id: 'S28',
  file: 's28-statistics',
  title: 'Statistics',
  width: 1440,
  height: 900,
  html,
  caption: L.caption({
    id: 'S28', title: 'Statistics',
    scene: 'Statistics from the word count in the status bar: a sheet over the window, on the Words tab, range This month. Words written per chapter and per day, in one quiet color; the mode tabs dimmed behind.',
    on: 'the sheet header with Back to the text, the tabs Words · Sessions · Who appears where, the range This week · This month · All, words per chapter and per day with their totals, the dimmed mode tabs, the Ask button',
    off: 'the other two tabs’ contents (the sessions table, the grid of people by chapter), a palette of many colors, tiles',
  }),
};
