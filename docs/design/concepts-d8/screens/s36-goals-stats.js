// S36: Statistics, Goals tab (draft 8), and the Shape tab as an inset below.
const L = require('../lib');

const css = `<style>
.s36 .stat{position:absolute;left:50%;transform:translateX(-50%);width:1120px;top:0;padding:16px 0 0}
.s36 .top{display:flex;justify-content:center;margin-bottom:26px}
.s36 .top .seg span{padding:4px 16px;font-size:12.5px}
.s36 .cols{display:flex;gap:28px;align-items:flex-start}
.s36 .card{background:#fff;border:1px solid var(--line);border-radius:11px;padding:20px 22px}
.s36 .big{font:600 34px var(--ui);letter-spacing:-.01em}
.s36 .big small{font-size:18px;font-weight:400;color:var(--ink3)}
.s36 .pbar{height:10px;border-radius:5px;background:var(--line2);margin:14px 0 8px;overflow:hidden}
.s36 .pbar i{display:block;height:100%;width:67.9%;background:#7f9fc4;border-radius:5px}
.s36 .row{display:flex;gap:8px;color:var(--ink2);font-size:13px;padding:5px 0}
.s36 .row b{color:var(--ink);font-weight:600}
.s36 .hr{border-top:1px solid var(--line2);margin:14px 0 10px}
.s36 .quota{font-size:15px;color:var(--ink)}
.s36 .quota small{display:block;color:var(--ink3);font-size:12px;margin-top:3px}
.s36 .cal h3{margin:0 0 12px;font:600 13px var(--ui);display:flex;align-items:baseline;gap:8px}
.s36 .cal h3 small{font-weight:400;color:var(--ink3);margin-left:auto}
.s36 .cal .g{display:grid;grid-template-columns:54px repeat(7,1fr);gap:6px}
.s36 .cal .dh{font:500 11px var(--ui);color:var(--ink3);text-align:center}
.s36 .cal .wk{font-size:11px;color:var(--ink3);display:flex;align-items:center}
.s36 .cal .d{height:50px;border-radius:7px;border:1px solid var(--line2);font-size:11px;color:var(--ink3);padding:4px 6px;display:flex;flex-direction:column;justify-content:space-between}
.s36 .cal .d b{font-weight:500;font-size:10.5px}
.s36 .cal .d.w{background:#dbe6f3;border-color:#bfd0e6;color:var(--ink)}
.s36 .cal .d.w em{font-style:normal;font-size:11.5px;color:var(--ink2)}
.s36 .cal .d.r{background:repeating-linear-gradient(135deg,transparent 0 5px,#e6e6e3 5px 6px);color:var(--ink4)}
.s36 .cal .d.m{background:#fff}
.s36 .cal .d.f{border-style:dashed;color:var(--ink4)}
.s36 .cal .d.t{background:#fff;border:2px solid var(--accent);color:var(--ink)}
.s36 .cal .d.t em{font-style:normal;font-size:11.5px;color:var(--ink2)}
.s36 .leg{display:flex;gap:18px;margin-top:14px;font-size:11.5px;color:var(--ink3);align-items:center}
.s36 .leg span{display:inline-flex;align-items:center;gap:6px}
.s36 .leg i{width:14px;height:14px;border-radius:4px;border:1px solid var(--line);display:inline-block}
.s36 .shp{padding:18px 22px;background:#fff}
.s36 .shp .m{display:grid;grid-template-columns:150px repeat(11,1fr);gap:0 4px;align-items:end;margin-bottom:16px}
.s36 .shp .m .t{align-self:center;font:600 12px var(--ui)}
.s36 .shp .m .t small{display:block;font-weight:400;color:var(--ink3);font-size:11px}
.s36 .shp .bx{height:70px;display:flex;align-items:flex-end;justify-content:center;position:relative}
.s36 .shp .bx i{display:block;width:78%;background:#b4c7de;border-radius:2px 2px 0 0}
.s36 .shp .bx.o i{background:#d2823a}
.s36 .shp .bx .v{position:absolute;top:-2px;left:50%;transform:translateX(-50%);font:600 10.5px var(--ui);color:#a85a14;white-space:nowrap}
.s36 .shp .xl{display:grid;grid-template-columns:150px repeat(11,1fr);gap:0 4px;font-size:10.5px;color:var(--ink3);text-align:center;border-top:1px solid var(--line);padding-top:3px}
.s36 .shp .kit{display:grid;grid-template-columns:150px repeat(11,1fr);gap:0 4px;align-items:center;margin:10px 0 6px;height:22px}
.s36 .shp .kit .t{font:600 12px var(--ui)}
.s36 .shp .kit .dt{height:8px;border-radius:4px;background:#8fb08a;margin:0 -2px}
.s36 .shp .kit .ab{height:8px;border-radius:4px;border:1px dashed var(--ink4);margin:0 -2px}
.s36 .shp .out{display:flex;gap:26px;margin:14px 0 0 154px;font-size:12.5px;color:var(--ink2)}
.s36 .shp .out b{color:#a85a14;font-weight:600}
.s36 .side .ann{position:relative;left:auto;top:auto;margin-bottom:16px}
</style>`;

// calendar: 5 weeks, Mon–Sun. w = words (written), r = rest, m = missed, f = future, t = today
const ML = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const words = [[1040, 980, 0, 1120, 1010], [1060, 1005, 990, 1050, 0], [1100, 970, 0, 1010, 960], [0, 0, 0, 0, 0], [0, 0, 812, null, null]];
const fmt = (n) => n.toLocaleString('en-US');
const dayOf = (wi, di) => new Date(Date.UTC(2026, 9, 19 + wi * 7 + di)).getUTCDate();
const calRows = words.map((vals, wi) => {
  const d0 = new Date(Date.UTC(2026, 9, 19 + wi * 7));
  const lab = ML[d0.getUTCMonth()] + ' ' + d0.getUTCDate();
  const cells = [0, 1, 2, 3, 4].map((di) => {
    const v = vals[di], dn = dayOf(wi, di);
    if (wi === 4 && di === 2) return `<div class="d t"><b>${dn}</b><em>812 words</em></div>`;
    if (v === null) return `<div class="d f"><b>${dn}</b></div>`;
    if (v === 0) return `<div class="d m"><b>${dn}</b></div>`;
    return `<div class="d w"><b>${dn}</b><em>${fmt(v)}</em></div>`;
  }).join('');
  return `<span class="wk">${lab}</span>${cells}` + [5, 6].map((di) => (wi === 2 && di === 6) ? `<div class="d w"><b>${dayOf(wi, di)}</b><em>1,240</em></div>` : `<div class="d r"><b>${dayOf(wi, di)}</b></div>`).join('');
}).join('');

const tabs = (on) => `<div class="top"><span class="seg">${['Goals', 'Words', 'Sessions', 'Who appears where', 'Shape'].map((t) => `<span${t === on ? ' class="on"' : ''}>${t}</span>`).join('')}</span></div>`;

const goals = `<div class="stat s36">${tabs('Goals')}<div class="cols">
 <div class="card" style="width:430px;flex:none">
  <div class="big">54,300 <small>/ 80,000 words</small></div>
  <div class="pbar"><i></i></div>
  <div class="row"><span>68 % of the book · 25,700 words to go</span></div>
  <div class="hr"></div>
  <div class="row"><span>Deadline</span><b>June 30</b><span style="margin-left:auto;color:var(--ink3)">32 weeks from today</span></div>
  <div class="quota">1,000 words a writing day · 5 days a week<small>Your pace. At it, the book is done around Dec 23, well before the deadline. Change the deadline, the target or the days, and this line follows.</small></div>
  <div class="hr"></div>
  <div class="row"><span>This week</span><b>1 of 5 days</b></div>
  <div class="row"><span>Today</span><b>812 of 1,000</b></div>
  <div style="margin-top:14px;display:flex;gap:8px"><span class="btn">Change goal…</span></div>
 </div>
 <div class="card cal" style="flex:1"><h3>Writing days<small>the last five weeks</small></h3>
  <div class="g"><span></span>${['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => `<span class="dh">${d}</span>`).join('')}${calRows}</div>
  <div class="leg"><span><i style="background:#dbe6f3;border-color:#bfd0e6"></i>written</span><span><i style="background:repeating-linear-gradient(135deg,#fff 0 3px,#d8d8d5 3px 4px)"></i>rest day</span><span><i style="border:2px solid var(--accent)"></i>today</span></div>
 </div></div></div>`;

// Shape inset
const dial = [34, 41, 28, 45, 38, 52, 47, 36, 78, 41, 44];
const sent = [14, 12, 15, 13, 12, 11, 12, 14, 9, 13, 12];
const scene = [1100, 900, 1500, 1300, 1200, 1700, 1250, 1050, 800, 1400, 1300];
const mrow = (title, sm, vals, max, unit, hi) => `<div class="m"><div class="t">${title}<small>${sm}</small></div>${vals.map((v, i) => `<div class="bx${i + 1 === hi ? ' o' : ''}"><i style="height:${Math.round(v / max * 62)}px"></i>${i + 1 === hi ? `<span class="v">${v}${unit}</span>` : ''}</div>`).join('')}</div>`;
const shape = `<div class="shp">${tabs('Shape').replace('class="top"', 'class="top" style="margin-bottom:14px"')}
 ${mrow('Dialogue', 'share of each chapter', dial, 80, ' %', 9).replace('78 %', '78 %')}
 ${mrow('Sentence length', 'words, on average', sent, 18, '', 0)}
 ${mrow('Scene length', 'words per scene, on average', scene, 1800, '', 0)}
 <div class="kit"><span class="t">Kit appears</span>${Array.from({ length: 11 }, (_, i) => `<span class="${i < 9 ? 'dt' : 'ab'}"></span>`).join('')}</div>
 <div class="xl"><span></span>${Array.from({ length: 11 }, (_, i) => `<span>${i + 1}</span>`).join('')}</div>
 <div class="out"><span><b>ch. 9: 78 % dialogue</b> · the most in the book</span><span><b>Kit absent ch. 10–11</b> · all of Part Two</span><span style="color:var(--ink3)">A shape, not a score: nothing here says what is wrong.</span></div></div>`;

const html = css + L.win({
  view: 'Text', crumbs: L.sample.crumbs7, strip: { review: 12 }, height: 800,
  page: L.pageCol('', { paddingTop: 40 }),
  status: { style: 'Plain', words: '812 of 1,000 today', goal: 81, pages: 'p. 146 of 248' }, ask: 'normal',
  content: L.sheet({ title: 'Statistics', body: goals }),
  extra: L.ann(1, 'From the word count in the status bar, or View ▸ Statistics. Esc goes back to the text', 20, 705, { w: 330 })
    + L.ann(2, 'Five tabs, Goals first: the book’s target and deadline become a daily quota', 1030, 160, { w: 250 })
    + L.ann(3, 'Target, deadline and pace together: 25,700 words to go at 1,000 a writing day ends around Dec 23', 20, 640, { w: 330 })
    + L.ann(4, 'The calendar: written days filled, rest days hatched, today outlined. A missed day is just empty', 880, 640, { w: 340 })
    + L.ann(5, 'No streaks, no badges, no trophies: ten days away (Nov 9–17) are just empty days', 440, 640, { w: 330 }),
}).replace('<div class="win"', '<div class="win s36"');
const below = `<div class="below s36"><div class="crop" style="width:1360px"><div class="lbl">The Shape tab: one column per chapter</div>${shape}</div></div>`;

module.exports = {
  id: 'S36', file: 's36-goals-stats', title: 'Statistics: goals and shape', width: 1440, height: 900, html: html + below,
  caption: L.caption({
    id: 'S36', title: 'Statistics: goals and shape',
    scene: 'Statistics opened from the word count, on the Goals tab. Below: the Shape tab of the same sheet.',
    on: 'tabs Goals · Words · Sessions · Who appears where · Shape; 54,300 / 80,000 words with a bar; Deadline June 30; “1,000 words a writing day · 5 days a week”; “This week 1 of 5 days”; a five-week calendar from Oct 19 to today, Wed Nov 18 (written days filled with their words, rest days hatched, Nov 9–17 empty, today outlined); the Shape tab with per-chapter bars for dialogue %, sentence length, scene length, Kit’s presence, and two outliers (ch. 9: 78 % dialogue; Kit absent ch. 10–11)',
    off: 'trophies, streak counters, badges, a leaderboard, a verdict on any outlier',
  }),
};
