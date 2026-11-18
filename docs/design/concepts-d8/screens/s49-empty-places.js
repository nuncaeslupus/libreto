// S49: empty places. Five small frames: what an empty Board, Inbox, Codex, Review and Pages say.
const L = require('../lib');
const I = L.icons;

const css = `<style>
.s49{background:#d9d9d6;padding:22px 28px 26px}
.s49 .rw{display:flex;gap:16px;margin-bottom:16px;align-items:flex-start}
.s49 .fr{background:#fff;border:1px solid #c9c9c5;border-radius:10px;overflow:hidden;flex:none;display:flex;flex-direction:column}
.s49 .fr>.lbl{font:600 11px var(--ui);letter-spacing:.06em;text-transform:uppercase;color:#55585e;padding:9px 14px 8px;background:#f2f2f0;border-bottom:1px solid #e2e2df}
.s49 .bd{height:300px;position:relative;display:flex;flex-direction:column}
.s49 .nt{padding:10px 14px 12px;font-size:12.5px;line-height:1.45;color:var(--ink2);border-top:1px solid #e2e2df;background:#fbfbfa}
.s49 .vs{display:flex;background:var(--soft);border:1px solid var(--line);border-radius:8px;padding:2px;gap:2px;font-size:12.5px;width:max-content}
.s49 .vs span{padding:3px 14px;border-radius:6px;color:var(--ink2)}
.s49 .vs span.on{background:#fff;color:var(--ink);font-weight:600;box-shadow:0 1px 2px rgba(0,0,0,.1)}
.s49 .hd{display:flex;justify-content:center;padding:12px 0 0}
.s49 .ct{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:0 34px 18px;gap:8px}
.s49 .ct h4{margin:0;font:600 16px var(--ui);color:var(--ink)}
.s49 .ct p{margin:0;font-size:13px;color:var(--ink2);line-height:1.5;max-width:330px}
.s49 .card{width:250px;text-align:left;border:1px solid var(--line);border-radius:9px;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.07);padding:9px 12px;font-size:13px}
.s49 .card small{display:block;color:var(--ink3);font-size:12px;margin-top:2px}
.s49 .card .tt{font-weight:600}
.s49 .drop{border:1.5px dashed var(--ink4);border-radius:10px;padding:26px 24px;color:var(--ink2);font-size:13px;line-height:1.5;max-width:340px}
.s49 .sw3{display:flex;background:var(--chrome);border:1px solid var(--line);border-radius:8px;padding:2px;gap:2px;margin:12px 14px 0;font-size:12.5px}
.s49 .sw3 span{flex:1;text-align:center;padding:3px 0;border-radius:6px;color:var(--ink2)}
.s49 .sw3 span.on{background:#fff;color:var(--ink);font-weight:600;box-shadow:0 1px 2px rgba(0,0,0,.1)}
.s49 .rwn{padding:8px 14px 0;font-size:13px;color:var(--ink2);display:flex;justify-content:space-between}
.s49 .btn{height:28px;font-size:12.5px}
.s49 .spread{display:flex;gap:6px;justify-content:center;padding:14px 0 0}
.s49 .pg{width:190px;height:196px;background:#fff;border:1px solid var(--line);box-shadow:0 2px 8px rgba(0,0,0,.1);padding:16px 18px;position:relative}
.s49 .pg i{display:block;height:5px;background:#d7d7d3;border-radius:3px;margin:0 0 7px}
.s49 .pg h6{margin:0 0 14px;font:400 15px var(--text);text-align:center;color:var(--ink2)}
.s49 .pg.bl{background:#fcfcfb}
.s49 .pg .nm{position:absolute;bottom:8px;left:0;right:0;text-align:center;font-size:10px;color:var(--ink3)}
.s49 .sp1{color:var(--accent)}
</style>`;

const frame = (w, label, body, note) => `<div class="fr" style="width:${w}px"><div class="lbl">${label}</div><div class="bd">${body}</div><div class="nt">${note}</div></div>`;

const board = `<div class="hd"><div class="vs"><span>Text</span><span class="on">Board</span><span>Pages</span></div></div>
  <div class="ct"><div class="card"><div class="tt">Vega waits at the window</div><small>Chapter 1 · 164 words · no summary yet</small></div>
  <p>Each scene is a card. Drag a card to move the scene; drop it on a chapter in the Navigator to send it there.</p>
  <span class="btn">Outline from the Brief <span class="sp1">${I.spark}</span></span></div>`;
const inbox = `<div class="sw3"><span>Book</span><span>Codex</span><span class="on">Research</span></div><div class="rwn"><b style="color:var(--ink)">Inbox</b><span>0</span></div>
  <div class="ct"><div class="drop"><b style="color:var(--ink)">Drop things here</b><br>A PDF, a picture, a web address or a piece of text. Or paste with Ctrl+V. Sort them into topics when you have time.</div></div>`;
const codex = `<div class="sw3"><span>Book</span><span class="on">Codex</span><span>Research</span></div><div class="rwn"><b style="color:var(--ink)">The Brief</b><span style="color:var(--accent)">Write it ›</span></div>
  <div class="ct"><h4>Names appear here as you write</h4><p>Vega, a bar, a ledger: when a name comes back a few times, Libreto offers it as an entry. You can also add one yourself.</p><span class="btn">+ New entry</span></div>`;
const review = `<div class="hd" style="justify-content:flex-end;padding-right:14px"><span class="revbtn on">Review<i class="n">0</i></span></div>
  <div class="ct"><h4>Nothing waits for you</h4><p>Notes, suggestions and a reader’s changes will appear here, beside the text, with who made them.</p><span class="btn">Add notes from a reader’s file…</span></div>`;
const lines = (n, w = 100) => Array.from({ length: n }, (_, i) => `<i style="width:${i === n - 1 ? 55 : w}%"></i>`).join('');
const pages = `<div class="spread"><div class="pg"><h6>Chapter 1</h6>${lines(6)}<div class="nm">1</div></div><div class="pg bl"><div class="nm">2</div></div></div>
  <div class="ct" style="flex:none;padding:12px 24px 0"><h4 style="font-size:15px">Go on writing</h4><p>The book fills in as you write: 164 words so far, half of page 1.</p></div>`;

const html = css + `<div class="s49">
 <div class="rw">
  ${frame(450, 'Board · one card', board, 'Says what a card is and how to use it, and offers the one useful start.')}
  ${frame(450, 'Research · Inbox is empty', inbox, 'The drop area is the whole empty state: it says what goes in and how.')}
  ${frame(450, 'Codex · nothing yet', codex, 'Entries are suggested from the text; none is invented.')}
 </div>
 <div class="rw">
  ${frame(683, 'The Review margin, opened with Review 0 · nothing waits', review, 'Said in a sentence, not as an empty list; the way to bring in a reader’s notes is one click away.')}
  ${frame(683, 'Pages · half a page', pages, 'The spread shows exactly what exists; the second page stays blank, with no placeholder text.')}
 </div>
</div>`;

module.exports = {
  id: 'S49', file: 's49-empty-places', title: 'Empty places', width: 1440, height: 800, html,
  caption: L.caption({
    id: 'S49', title: 'Empty places',
    scene: 'Five places in a new book, each before it has anything to show. Each says what belongs there and how to fill it.',
    on: 'a Board with one card, one line of explanation and “Outline from the Brief”; an empty Research Inbox with its drop area; “Names appear here as you write”; “Nothing waits for you” in the Review margin; a spread with half a page and “Go on writing”',
    off: 'tutorials, tours, illustrations, a count of zero without a sentence, placeholder text on the blank page',
  }),
};
