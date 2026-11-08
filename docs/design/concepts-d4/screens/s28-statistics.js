// S28: Statistics. A sheet: tabs Words · Days · People · Reading; words per chapter, the totals line, the sessions of this week.
const L = require('../lib');

const words = [8120, 7640, 9210, 8460, 6980, 10340, 2418, 8730, 7560, 9120, 7662]; // sums to 86,240
const max = 10340, H = 240;
const fmt = (n) => n.toLocaleString('en-US');

const css = `<style>
.stat{position:absolute;left:50%;transform:translateX(-50%);width:1120px;top:0;padding:16px 0 0}
.stat .tabs{display:flex;justify-content:center;margin-bottom:18px}
.stat .cards{display:flex;gap:16px;align-items:flex-start}
.stat .card{background:#fff;border:1px solid var(--line);border-radius:11px;padding:16px 18px}
.stat .card h3{margin:0 0 14px;font:600 13px var(--ui)}
.stat .card h3 small{font-weight:400;color:var(--ink3);margin-left:6px}
.stat .wbars{display:flex;gap:10px;align-items:flex-end;border-bottom:1px solid var(--line);padding:0 4px}
.stat .wbar{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;height:${H + 22}px;gap:5px}
.stat .wbar i{display:block;width:34px;background:#9fb9d6;border-radius:3px 3px 0 0;font-style:normal}
.stat .wbar b{font:500 11px var(--ui);color:var(--ink3)}
.stat .xl{display:flex;gap:10px;padding:6px 4px 0;font-size:11.5px;color:var(--ink3)}
.stat .xl span{flex:1;text-align:center}
.stat .tot{margin-top:14px;font-size:13.5px;color:var(--ink);display:flex;gap:8px}
.stat .tot span+span:before{content:"·";color:var(--ink4);margin-right:8px}
.stat .sess{width:330px;flex:none}
.stat .sess .r{display:flex;gap:10px;align-items:baseline;padding:7px 0;border-top:1px solid var(--line2);font-size:12.5px}
.stat .sess .r:first-of-type{border-top:0;font:600 10.5px var(--ui);letter-spacing:.08em;text-transform:uppercase;color:var(--ink3)}
.stat .sess .r .d{width:110px;flex:none}.stat .sess .r .t{width:60px;flex:none;color:var(--ink2)}.stat .sess .r .m{width:62px;flex:none;color:var(--ink2)}.stat .sess .r .w{flex:1;text-align:right;color:var(--ink2)}
.stat .sess .r.sum{border-top:1px solid var(--line);color:var(--ink);font-weight:600}
.stat .sess .r.sum .t,.stat .sess .r.sum .w{color:var(--ink)}
</style>`;

const bars = `<div class="wbars">${words.map((w) => `<div class="wbar"><b>${fmt(w)}</b><i style="height:${Math.round(w / max * H)}px"></i></div>`).join('')}</div>`
  + `<div class="xl">${words.map((_, i) => `<span>${i + 1}</span>`).join('')}</div>`;

const sess = [['Mon, Nov 9', '1 h 15', 'Write', '+2,870'], ['Tue, Nov 10', '40 min', 'Research', '0'], ['Wed, Nov 11', '1 h 45', 'Write', '+1,204'], ['Thu, Nov 12', '1 h 25', 'Review', '+120'], ['Today', '12 min', 'Write', '+86']];
const body = `<div class="stat">
  <div class="tabs"><span class="seg"><span class="on">Words</span><span>Days</span><span>People</span><span>Reading</span></span></div>
  <div class="cards">
    <div class="card" style="flex:1;min-width:0"><h3>Words per chapter<small>chapter 7 is in progress</small></h3>${bars}
      <div class="tot"><span>86,240 words</span><span>248 pages</span><span>reading time 5 h 10 min</span></div></div>
    <div class="card sess"><h3>Sessions this week</h3>
      <div class="r"><span class="d">Day</span><span class="t">Time</span><span class="m">Mode</span><span class="w">Words</span></div>
      ${sess.map(([d, t, m, w]) => `<div class="r"><span class="d">${d}</span><span class="t">${t}</span><span class="m">${m}</span><span class="w">${w}</span></div>`).join('')}
      <div class="r sum"><span class="d">5 sessions</span><span class="t">5 h 17</span><span class="m"></span><span class="w">+4,280</span></div>
    </div>
  </div>
</div>`;

const html = L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  page: L.pageCol(``, { paddingTop: 40 }),
  status: { style: 'Plain', words: '2,418 words', pages: 'book p. ~146/248', fixes: '3 fixes' },
  ask: 'normal',
  content: L.sheet({ title: 'Statistics', body }),
  extra: css
    + L.ann(1, 'A sheet over the window, from the word count or View ▸ Statistics; Back to the text or Esc leaves', 160, 592, { w: 320 })
    + L.ann(2, 'Tabs for the detail: words per day, sessions and time, who appears where, reading time', 1020, 136, { w: 280 }),
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
    scene: 'Statistics from the word count in the status bar: a sheet over the window, on the Words tab. Words per chapter in one quiet color, the totals under the bars, and the sessions of this week at the right.',
    on: 'the sheet header with Back to the text, the tabs Words · Days · People · Reading, eleven bars with their counts, “86,240 words · 248 pages · reading time 5 h 10 min”, the small table of this week’s sessions, the Ask button',
    off: 'the other three tabs’ contents, the grid of who appears where, a palette of many colors, tiles',
  }),
};
