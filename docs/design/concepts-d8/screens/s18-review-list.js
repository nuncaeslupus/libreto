// S18: the Review margin in List view, widened over the page: 300 imported items as a table, grouped by
// "Flagged by 2 readers" first, three rows selected with "Resolve 3 · Reject 3".
const C = require('../rev-common');
const { L, I, who } = C;

const css = `<style>
.s18 .rvm.wide{width:1120px}
.s18 .wh{vertical-align:middle}
.s18 .hd{display:flex;align-items:center;gap:10px;padding:10px 16px 0}
.s18 .hd b{font:600 14px var(--ui)}.s18 .hd .sp{flex:1}
.s18 .rch{display:flex;gap:6px;padding:8px 16px 0;flex-wrap:wrap}
.s18 .rch>span{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--line);border-radius:14px;padding:2px 10px 2px 3px;background:#fff;font-size:12px}
.s18 .rch>span.on{border-color:var(--ink3);background:#fff;font-weight:600}
.s18 .rch>span.off{color:var(--ink3)}
.s18 .tg{padding:0 16px;margin:8px 0 0}
.s18 .selbar{display:flex;align-items:center;gap:10px;margin:10px 16px 0;padding:6px 10px;background:var(--ink);color:#fff;border-radius:8px;font-size:12.5px}
.s18 .selbar .sp{flex:1}
.s18 .selbar .b{border:1px solid rgba(255,255,255,.5);border-radius:6px;padding:2px 10px;font-weight:600}
.s18 .selbar .q{color:rgba(255,255,255,.75)}
.s18 table{border-collapse:collapse;width:calc(100% - 32px);margin:10px 16px 0;background:#fff;border:1px solid var(--line);border-radius:8px;overflow:hidden;font-size:12.5px}
.s18 th{font:600 10.5px var(--ui);letter-spacing:.07em;text-transform:uppercase;color:var(--ink3);text-align:left;padding:6px 8px;background:#f2f2f0;border-bottom:1px solid var(--line)}
.s18 td{padding:0 8px;height:29px;border-bottom:1px solid var(--line2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.s18 td.q{font:italic 13.5px var(--text);max-width:420px}
.s18 tr.g td{background:#f7f7f5;font:600 11.5px var(--ui);color:var(--ink2);height:27px;letter-spacing:.02em}
.s18 tr.g td small{font-weight:400;color:var(--ink3);margin-left:6px}
.s18 tr.sel td{background:var(--accent-tint)}
.s18 .cb{width:14px;height:14px}
.s18 .dt{display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--accent)}
.s18 .chn{color:var(--ink3)}
.s18 .st-r{color:var(--ink3)}.s18 .st-o{color:var(--ink)}.s18 .st-s{color:#6a7b96}
.s18 .pair{display:inline-flex;gap:3px}
.s18 .foot{display:flex;padding:8px 16px;color:var(--ink3);font-size:12px;gap:12px}
.s18 .foot .sp{flex:1}
</style>`;

const cb = (on) => `<span class="cb${on ? ' on' : ''}"></span>`;
const row = (ch, q, ws, kind, state, unread, sel) => `<tr class="${sel ? 'sel' : ''}"><td style="width:30px">${cb(sel)}</td><td style="width:22px">${unread ? '<span class="dt" title="Unread"></span>' : ''}</td><td style="width:60px" class="chn">ch. ${ch}</td><td class="q">“${q}”</td><td style="width:84px"><span class="pair">${ws.map(who).join('')}</span></td><td style="width:100px">${kind}</td><td style="width:100px" class="${state === 'Open' ? 'st-o' : state === 'Out of date' ? 'st-s' : 'st-r'}">${state}</td></tr>`;
const grp = (t, n) => `<tr class="g"><td colspan="7">▾ ${t}<small>${n}</small></td></tr>`;
const grpc = (t, n) => `<tr class="g"><td colspan="7" style="color:var(--ink3)">▸ ${t}<small>${n}</small></td></tr>`;

const table = `<table><thead><tr><th></th><th></th><th>Chapter</th><th>Quoted words</th><th>Reader</th><th>Kind</th><th>State</th></tr></thead><tbody>`
  + grp('Flagged by 2 readers', '6 items · Marta and Teo marked the same words')
  + row(7, 'the lemon on her hands', ['M', 'T'], 'Note', 'Open', 1)
  + row(3, 'a note under the office door', ['M', 'T'], 'Note', 'Open', 1)
  + row(9, 'half past nine', ['M', 'T'], 'Change', 'Open', 0)
  + row(4, 'Quarter past three', ['M', 'T'], 'Note', 'Open', 0)
  + row(11, 'the back room, finally', ['T', 'M'], 'Suggestion', 'Open', 1)
  + row(8, 'not yet forty', ['M', 'T'], 'Note', 'Open', 0)
  + grp('Marta · Nov 7', '150 open of 300')
  + row(1, 'the gutters on Harbor Street had given up', ['M'], 'Note', 'Open', 1, 1)
  + row(1, 'the way other people watch a kettle', ['M'], 'Change', 'Open', 1, 1)
  + row(2, 'drying glasses that were already dry', ['M'], 'Note', 'Open', 0)
  + row(2, 'Half the city’s called Kit', ['M'], 'Change', 'Open', 1, 1)
  + row(3, 'the spare key', ['M'], 'Note', 'Open', 0)
  + row(3, 'hard enough to make it ring', ['M'], 'Change', 'Open', 0)
  + row(4, 'the ledger', ['M'], 'Note', 'Resolved', 0)
  + row(5, 'wet hair', ['M'], 'Change', 'Accepted', 0)
  + row(6, 'since Tuesday', ['M'], 'Note', 'Open', 1)
  + grpc('Teo · Nov 9', '41 open')
  + grpc('AI pass · Nov 12', '68 open · 12 out of 80 decided')
  + `</tbody></table>`;

const panel = `<div class="rvm wide" data-m="rvm">`
  + `<div class="hd"><b>Review</b><span class="sp"></span><span class="pg2"><span>Page</span><span class="on">List</span></span><span class="btn pri">Review all ▶</span></div>`
  + `<div class="rch"><span class="on">${who('M')}Marta · Nov 7 · 150 / 300</span><span class="off">${who('T')}Teo · Nov 9 · 0 / 41</span><span class="off">${who('ai')}AI pass · Nov 12 · 12 / 80</span><span class="off">${who('L')}Libreto rules</span></div>`
  + C.toggles({ Notes: true, Suggestions: true, Fixed: false, Spelling: false, Unread: false, Resolved: false })
  + `<div class="selbar"><b>3 selected</b><span class="q">of 300</span><span class="sp"></span><span class="b">Resolve 3</span><span class="b">Reject 3</span><span class="q">Clear</span></div>`
  + table
  + `<div class="foot"><span>300 items · 6 flagged by 2 readers · 14 new since the last import</span><span class="sp"></span><span>Click a row to jump to its line · Shift+click selects a range</span></div></div>`;

const html = css + C.css + L.win({
  view: 'Text', crumbs: { chapter: 'Chapter 7 · Lena’s warning', scene: 'Lena lies about the back room' },
  strip: { review: 12, reviewOn: true },
  left: L.navigator({ rows: L.sample.navRows.slice(0, 13).map((r) => (r.type === 'front' ? { type: 'group', title: 'Front', open: false } : r)) }),
  page: L.pageCol('', {}),
  right: panel,
  ask: false,
  status: { style: 'Plain', words: '2,418 words', pages: 'p. 146 of 248' },
  extra: L.ann(1, 'List view: the margin widens over the page. Page returns to the text, with the margin beside it', 20, 640, { w: 290 })
    + L.ann(2, 'Where two readers marked the same words, those items come first: the most useful ones to read', 20, 706, { w: 290 })
    + L.ann(3, 'Tick rows (or Shift+click a range): bulk Resolve or Reject, for what you have dealt with', 20, 772, { w: 290 }),
}).replace('<div class="win"', '<div class="win s18"');

module.exports = {
  id: 'S18', file: 's18-review-list', title: 'Review, List view', width: 1440, height: 900,
  html,
  caption: L.caption({
    id: 'S18', title: 'Review, List view',
    scene: 'Marta’s Word copy brought 300 items. The writer switched the margin to List: it widens over the page and shows the items as a table, the ones two readers flagged first. Three Marta items are ticked and the bar offers Resolve 3 · Reject 3.',
    on: 'the margin widened (Review, Page | List with List on, round chips with Marta chosen, six on/off filters, Review all ▶); the selection bar “3 selected of 300 · Resolve 3 · Reject 3 · Clear”; the table (tick, unread dot, chapter, quoted words, reader initial, kind, state); the group “Flagged by 2 readers” first, then Marta · Nov 7, then collapsed Teo and AI pass groups; the footer; the navigator',
    off: 'the text of the chapter (hidden behind the widened margin), the Ask button, a Revert button (it sits on the round, S19)',
  }),
};
