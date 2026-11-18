// S40: Tools ▸ AI activity (new sheet in draft 8): Requests · In the book · Sessions. Tokens and cost, AI words still in the book, revert a session.
const L = require('../lib');
const K = require('../d8-kit-s37');

const css = `<style>
.s40 .aa{padding:0 40px;max-width:1200px;margin:0 auto}
.s40 .tabs{display:flex;gap:2px;border-bottom:1px solid var(--line);margin:14px 0 0;align-items:flex-end}
.s40 .tabs span{padding:8px 16px;font-size:13px;color:var(--ink2);border-bottom:2px solid transparent;margin-bottom:-1px}
.s40 .tabs span.on{color:var(--ink);font-weight:600;border-bottom-color:var(--ink)}
.s40 .tabs .rt{margin-left:auto;display:flex;gap:10px;align-items:center;padding-bottom:6px;border:0;color:var(--ink3);font-size:12.5px}
.s40 .sum{display:flex;gap:28px;padding:14px 0 10px;font-size:12.5px;color:var(--ink2)}
.s40 .sum b{display:block;font:600 19px var(--ui);color:var(--ink)}
.s40 table{width:100%;border-collapse:collapse;font-size:12.5px}
.s40 th{font:600 10.5px var(--ui);letter-spacing:.07em;text-transform:uppercase;color:var(--ink3);text-align:left;padding:6px 8px;border-bottom:1px solid var(--line)}
.s40 td{padding:8px 8px;border-bottom:1px solid var(--line2);vertical-align:top;color:var(--ink)}
.s40 td.n,.s40 th.n{text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap}
.s40 td .s{display:block;color:var(--ink3);font-size:11.5px;margin-top:1px}
.s40 tr.day td{background:var(--soft);font:600 11px var(--ui);color:var(--ink3);letter-spacing:.06em;text-transform:uppercase;padding:5px 8px}
.s40 .gray{color:var(--ink3)}
.s40 .via{display:inline-block;border:1px solid var(--line);border-radius:9px;padding:0 7px;font-size:11px;color:var(--ink2)}
.s40 .crow{display:flex;align-items:center;gap:12px;padding:7px 0;border-bottom:1px solid var(--line2);font-size:12.5px}
.s40 .crow .c{width:200px}
.s40 .crow .bw{flex:none;height:10px;margin-right:auto;background:var(--soft);border-radius:5px;overflow:hidden;display:flex}
.s40 .crow .bw i{display:block;height:100%}
.s40 .crow .nn{width:120px;text-align:right;color:var(--ink2);font-variant-numeric:tabular-nums}
.s40 .tot{display:flex;align-items:baseline;gap:12px;padding:12px 0 6px}
.s40 .tot b{font:600 22px var(--ui)}
.s40 .lg{display:flex;gap:16px;font-size:11.5px;color:var(--ink2);margin:6px 0 4px}
.s40 .lg i{display:inline-block;width:10px;height:10px;border-radius:2px;margin-right:5px;vertical-align:-1px}
.s40 .ses{border:1px solid var(--line);border-radius:10px;padding:11px 14px;margin:12px 0 0;display:flex;gap:14px;align-items:flex-start}
.s40 .ses .m{flex:1;font-size:12.5px;line-height:1.5;color:var(--ink2)}
.s40 .ses .m b{color:var(--ink);font-weight:600;font-size:13.5px}
.s40 .ses .btn{white-space:nowrap}
.s40 .ses.done{opacity:.72}
.s40 .insets{display:flex;gap:16px}
.s40 .crop .aa{padding:0 18px 16px}
.s40 .sheet-b{overflow:hidden}
</style>`;

const tabs = (a, rt = '') => `<div class="tabs">${['Requests', 'In the book', 'Sessions'].map((t) => `<span${t === a ? ' class="on"' : ''}>${t}</span>`).join('')}<span class="rt">${rt}</span></div>`;
const tr = (t, what, sub, via, i, o, cost, res) => `<tr><td class="gray" style="white-space:nowrap">${t}</td><td>${what}<span class="s">${sub}</span></td><td><span class="via">${via}</span></td><td class="n">${i} / ${o}</td><td class="n">${cost}</td><td>${res}</td></tr>`;

const requests = `<div class="aa">${tabs('Requests', `${K.dd('This month', 110)}`)}
  <div class="sum"><div><b>41</b>requests this month</div><div><b>118k / 21k</b>tokens sent / received</div><div><b>3.20 €</b>of 10.00 € · API key only</div><div><b>1 session</b>through the subscription today</div></div>
  <table><tr><th>Time</th><th>What</th><th>Via</th><th class="n">Tokens in / out</th><th class="n">Cost</th><th>Result</th></tr>
  <tr class="day"><td colspan="6">Today, Nov 18</td></tr>
  ${tr('14:02–now', 'Claude Code session · “Draft chapters 12–14”', '7 edits proposed, 2 drafts, 5,880 words', 'Subscription', '48.2k', '9.6k', '<span class="gray">plan</span>', 'Round in Review · 2 drafts')}
  ${tr('11:15', 'Ask: “what if Lena already told Kit”', 'ch. 7 scene 2 · Brief + Lena + Kit', 'API key', '3.1k', '0.6k', '0.02 €', '3 options, 1 used')}
  ${tr('09:02', 'Catch-up pass', '3 scenes changed since Thursday · Haiku-class', 'API key', '2.1k', '0.4k', '0.03 €', '4 findings')}
  <tr class="day"><td colspan="6">Yesterday</td></tr>
  ${tr('21:40', 'Merge for me ✦ · Marta’s change in ch. 7', 'asked on a conflict', 'API key', '1.8k', '0.3k', '0.02 €', 'Accepted')}
  ${tr('18:12', 'Check ch. 9 against the Brief', 'voice and world rules', 'API key', '6.0k', '1.1k', '0.05 €', '2 findings')}
  ${tr('17:30', 'Suggest: tighten the opening of ch. 10', 'Sonnet', 'API key', '2.4k', '0.5k', '0.02 €', '5 suggestions')}
  </table></div>`;

const bar = (n, tot, c) => `<i style="width:${(n / tot * 100).toFixed(1)}%;background:${c}"></i>`;
const chap = (c, a, d, w) => `<div class="crow"><span class="c">${c}</span><span class="bw" style="width:${Math.round((a + d) / 480 * 300)}px">${bar(a, a + d, 'var(--ink2)')}${bar(d, a + d, 'var(--gram)')}</span><span class="nn">${(a + d).toLocaleString('en-US')} <span class="gray">· ${((a + d) / w * 100).toFixed(1)} %</span></span></div>`;
const inbook = `<div class="aa">${tabs('In the book')}
  <div class="tot"><b>1,204 words</b><span>of 54,300 are still the AI’s: <b style="font-size:22px">2.2 %</b></span><span class="btn" style="margin-left:auto">Export report…</span></div>
  <div class="lg"><span><i style="background:var(--ink2)"></i>suggestions you accepted</span><span><i style="background:var(--gram)"></i>draft scenes accepted whole</span><span class="gray">edited by you after: counted as yours</span></div>
  ${chap('4 · Quarter past three', 96, 0, 3900)}${chap('2 · The bartender', 38, 0, 4200)}${chap('7 · Lena’s warning', 310, 0, 5400)}${chap('9 · The pawnshop', 468, 0, 5100)}${chap('10 · Station steps', 0, 292, 4800)}
  <div class="gray" style="padding:8px 0 0;font-size:12px">Chapters without AI words are not listed. Words are counted from what was accepted, minus what you changed since.</div></div>`;

const sessions = `<div class="aa">${tabs('Sessions')}
  <div class="ses"><div class="m"><b>Claude Code · today since 14:02</b> <span class="via">running</span><br>Goal “Draft chapters 12–14” · 7 edits in one Review round, all waiting · 2 draft scenes waiting · 5,880 words<br><span class="gray">Reverting inverts only what this session did and says what it could not, such as text you changed afterwards.</span></div><span class="btn red">Revert this whole session</span></div>
  <div class="ses done"><div class="m"><b>Claude Code · Nov 12, 10:20–11:05</b><br>Goal “Draft chapter 10” · 1 draft scene accepted (ch. 10, 2,120 words) · 4 edits accepted</div><span class="btn">Revert this whole session</span></div>
  <div class="ses done"><div class="m"><b>Claude Desktop · Nov 9, 16:40</b> <span class="via">reverted Nov 10</span><br>Goal “Look for continuity problems in Part One” · 7 notes added, 0 edits</div><span class="gray" style="white-space:nowrap">Nothing left to revert</span></div></div>`;

const sheet = L.sheet({ title: 'AI activity', actions: '<span class="btn">Export report…</span>', body: requests });

const html = css + L.win({
  view: 'Text', crumbs: L.sample.crumbs7, strip: { review: 12 },
  page: L.pageCol(`<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>`, { paddingTop: 40 }),
  status: { style: 'Plain', words: '812 of 1,000 today', goal: 81, pages: 'p. 146 of 248' },
  ask: false, width: 1440, height: 800, content: sheet,
  extra: L.ann(1, 'Opens over the text; Esc goes back', 250, 112, { w: 230 })
    + L.ann(2, 'Every request with its tokens and cost. The subscription shows “plan”, not euros', 260, 690, { w: 330 })
    + L.ann(3, 'What came back, and whether you used it', 700, 690, { w: 330 }),
});

const below = `<div class="below"><div class="insets">
  <div class="crop" style="width:690px"><div class="lbl">In the book</div>${inbook}</div>
  <div class="crop" style="width:690px"><div class="lbl">Sessions</div>${sessions}</div>
</div></div>`;

module.exports = {
  id: 'S40', file: 's40-ai-activity', title: 'AI activity', width: 1440, height: 1380,
  html: `<div class="s40">${html}${below}</div>`,
  caption: L.caption({
    id: 'S40', title: 'AI activity',
    scene: 'Tools ▸ AI activity, a sheet over the text, on its first tab. Every request is a row with tokens and cost; the subscription’s session shows “plan” instead of a price. Under the sheet, the other two tabs: how many of the book’s words are still the AI’s, chapter by chapter (2.2 % in total), and the agent sessions, each with “Revert this whole session”.',
    on: 'the sheet header (Back to the text · Esc, title, Export report…); tabs Requests · In the book · Sessions; the month summary; request rows (time, what, via, tokens in / out, cost, result); the In the book tab (1,204 words, 2.2 %, per-chapter bars split by suggestions and draft scenes); the Sessions tab (a running Claude Code session with Revert this whole session, two older sessions, one already reverted)',
    off: 'a log of what you typed, the text of any request (the Brief and context are listed by name only), prices for the subscription, the Ask button (hidden behind a full sheet)',
  }),
};
