// S04: Coming back (draft 7). Libreto reopened as it was left (Write, chapter 7 mid-scroll, the left column open,
// the cursor where it was). The standing notice “Last session” at the bottom center: when and how much, one button per
// kind of thing that waits, “Don't show this again” and ✕. The bell has its unread dot and its list is open: today's
// notices with their time and Undo where it still applies, and Clear. Review carries 12 on the mode switch.
const L = require('../lib');
const P = L.sample.chapter7Plain;

// scrolled to the middle of chapter 7: the heading is above the top edge; the cursor sits after “since Tuesday.”
const col = P.slice(1).map((p, i) => {
  if (i === 4) p = p.replace('since Tuesday.”', 'since Tuesday.”<span class="cursor"></span>');
  return `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`;
}).join('');

// in Write the list carries no counts
const rows = L.sample.navRows.map((r) => ({ ...r, notes: 0, tasks: 0, fixes: 0 }));

const css = `<style>
.s04 .notice{white-space:normal;align-items:flex-start;padding:11px 12px 11px 14px}
.s04 .notice>svg{margin-top:2px}
.s04 .notice .ntx{display:flex;flex-direction:column;gap:7px}
.s04 .notice .ntx b{font-weight:600}
.s04 .notice .nl{white-space:nowrap;color:var(--ink2)}
.s04 .notice .nbtns{display:flex;gap:8px;align-items:center}
.s04 .notice .nbtns .btn{height:26px;padding:0 10px;font-size:12px}
.s04 .notice .dsa{align-self:flex-end;color:var(--ink3);font-size:12px;white-space:nowrap;margin-left:10px;margin-bottom:5px}
.s04 .notice .nx{margin-top:0}
.s04 .bpanel{position:absolute;right:12px;top:94px;width:380px;z-index:42;background:#fff;border:1px solid var(--line);border-radius:10px;box-shadow:0 10px 30px rgba(0,0,0,.14);padding:6px 0 0;font-size:12.5px}
.s04 .bpanel .bh{display:flex;align-items:center;padding:6px 14px 6px;font:600 10.5px var(--ui);letter-spacing:.08em;text-transform:uppercase;color:var(--ink3)}
.s04 .bpanel .bi{display:flex;gap:9px;align-items:flex-start;padding:7px 14px;border-top:1px solid var(--line2)}
.s04 .bpanel .bi svg{width:14px;height:14px;flex:none;margin-top:2px;color:var(--ink3)}
.s04 .bpanel .bi.fx svg{color:var(--fix)}
.s04 .bpanel .bi .tx{flex:1;line-height:1.4}
.s04 .bpanel .bi .tm{color:var(--ink3);font-size:11.5px;flex:none;width:36px;text-align:right}
.s04 .bpanel .bi .lk{flex:none;font-size:12px;width:36px}
.s04 .bpanel .bf{display:flex;justify-content:flex-end;padding:7px 14px;border-top:1px solid var(--line2);background:var(--soft);border-radius:0 0 10px 10px}
.s04 .bpanel .caret{position:absolute;top:-6px;right:30px;width:10px;height:10px;background:#fff;border-left:1px solid var(--line);border-top:1px solid var(--line);transform:rotate(45deg)}
</style>`;

const noticeText = `<b>Last session</b><span class="nl">Thursday 19:32 · 1,240 words</span>`
  + `<span class="nbtns"><span class="btn">12 to review</span><span class="btn">2 cards unplaced</span><span class="btn">3 clippings in the Inbox</span></span>`;
const notice = L.notice(noticeText, { kind: 'info', standing: true, undo: false, acts: `<span class="dsa">Don’t show this again</span>` });

const bi = (ico, text, time, undo, cls = '') => `<div class="bi ${cls}">${L.icons[ico]}<span class="tx">${text}</span><span class="tm">${time}</span>${undo ? '<span class="lk">Undo</span>' : '<span class="lk"></span>'}</div>`;
const bell = `<div class="bpanel"><span class="caret"></span><div class="bh">Today</div>`
  + bi('fix', 'Typo fixed: “recieved” → “received” in chapter 7', '09:14', true, 'fx')
  + bi('info', 'Scene break removed in chapter 7', '09:11', true)
  + bi('info', 'Moved “Vega leaves without paying” to the end of chapter 7', '09:08', true)
  + bi('info', 'Libreto was updated to 1.4; what is new is in Help', '09:02', false)
  + `<div class="bf"><span class="lk">Clear</span></div></div>`;

const html = css + L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  left: L.navigator({ rows }),
  page: L.pageCol(col, { paddingTop: 22 }),
  strip: { reviewCount: 12, bell: 'dot' },
  status: { style: 'Plain', words: '2,418 words', pages: 'p. 146 of 248', saved: 'Saved 09:15' },
  ask: 'normal',
  content: notice,
  extra: bell
    + L.ann(1, 'Nothing to answer: same mode, chapter and columns, the cursor where it was. Review says 12 on the mode switch', 16, 640, { w: 250 })
    + L.ann(2, '“Last session”: when that was and how much you wrote. It stays until ✕, and ✕ sends it, visibly, into the bell', 60, 776, { w: 300, r: true })
    + L.ann(3, 'One button per kind of thing that waits: Review, Plan, Research', 453, 724, { w: 400 })
    + L.ann(4, '“Don’t show this again” is on the card itself', 1046, 812, { w: 200 })
    + L.ann(5, 'The bell (dot: unread) lists what Libreto told you today, with the time and Undo where it still applies; Clear empties it. It is not History', 1060, 368, { w: 330 }),
});

module.exports = {
  id: 'S04',
  file: 's04-welcome-back',
  title: 'Coming back',
  width: 1440,
  height: 900,
  html: html.replace('<div class="win"', '<div class="win s04"'),
  caption: L.caption({
    id: 'S04', title: 'Coming back',
    scene: 'Libreto reopened the next morning exactly as it was left: Write, chapter 7 scrolled to the middle, the chapter list open on the left, the cursor after “since Tuesday.” The standing notice “Last session” waits at the bottom of the page. The writer opened the bell to see what Libreto said today.',
    on: 'the strip (left toggle on, the mode switch with Write pressed and 12 on Review, Find, the bell with its unread dot), the chapter list without counts, chapter 7 mid-scroll with the cursor, the standing notice (Last session · Thursday 19:32 · 1,240 words · 12 to review · 2 cards unplaced · 3 clippings in the Inbox · Don’t show this again · ✕), the bell list open (four notices of today with their time, Undo on three, Clear), the Ask button, the status bar (Plain, 2,418 words, p. 146 of 248, Saved 09:15)',
    off: 'a “What do you want to do?” dialog, “Got it”, a timer on the notice, any dimming, the Reference panel, History itself',
  }),
};
