// S20: Find and Replace. The strip at the top of the page, the Replace all preview list, hits in the text.
const L = require('../lib');
const P = L.sample.chapter7Plain.slice();

// two hits in chapter 7: "lemon on her hands" (the current one) and a second one in the last paragraph
P[8] = P[8].replace('the lemon on her hands', 'the <span class="hit cur">lemon</span> on her hands');
P[9] = P[9] + ' The pawnshop’s awning, <span class="hit">lemon</span>-colored once, had gone the gray of everything else.';
// the page is scrolled to the middle of the chapter
const col = P.slice(3).map((p) => `<p>${p}</p>`).join('');

const chev = (d) => `<span class="ib" style="width:22px;height:22px">${d === 'l' ? L.icons.back : L.icons.forward}</span>`;
const field = (text, w, o = {}) => `<span class="inp${o.foc ? ' foc' : ''}" style="width:${w}px;min-height:28px;padding:4px 9px;font-size:13px;display:inline-flex;align-items:center">${text}${o.cursor ? '<span class="cursor" style="height:1em;vertical-align:-2px"></span>' : ''}</span>`;

// the strip: two rows of the same width
function stripRows(find, replace, o = {}) {
  const row1 = `<div class="fr"><span class="lab">Find</span>${field(find, 220, { foc: true })}<span class="cnt">${o.count}</span>${chev('l')}${chev('r')}`
    + `<span class="vsep"></span><span class="chip dd">${o.scope || 'Whole book'}</span><span class="opt"><span class="cb"></span>Pattern</span><span class="ib q" title="Pattern tester">?</span></div>`;
  const row2 = o.rename
    ? `<div class="fr"><span class="lab">Replace</span>${field('', 170)}<span class="btn">Replace</span><span class="btn pri">Rename everywhere</span><span class="hint">text, Codex and research</span></div>`
    : `<div class="fr"><span class="lab">Replace</span>${field(replace, 220)}<span class="btn">Replace</span><span class="btn">Replace all…</span></div>`;
  return `<div class="fstrip">${row1}${row2}</div>`;
}

const rows = [
  ['ch. 2', 'She smelled of <b>lemon</b>, the way the bar did after closing.'],
  ['ch. 7', 'Lena leaned close enough that Vega could smell the <b>lemon</b> on her hands.'],
  ['ch. 7', 'The pawnshop’s awning, <b>lemon</b>-colored once, had gone the gray of'],
  ['ch. 8', 'a <b>lemon</b> cut in half on the drainer, drying'],
  ['ch. 8', 'The whole room smelled of <b>lemon</b> and bleach.'],
  ['ch. 8', '“You keep <b>lemon</b> behind the bar?” Vega asked.'],
  ['ch. 9', 'The pawnbroker kept a <b>lemon</b> on the counter against the smell.'],
  ['ch. 9', 'Kit held the <b>lemon</b> and did not know what to do with it.'],
  ['ch. 9', '<b>lemon</b> rind in the ashtray'],
  ['ch. 9', 'the awning the color of a <b>lemon</b> left in the sun'],
  ['ch. 11', 'Her hands smelled of <b>lemon</b> again, and Vega knew.'],
  ['ch. 11', '“Not <b>lemon</b>,” Kit said. “Lime.”'],
];
const preview = `<div class="rpv"><div class="rph"><b>12 hits in 5 chapters</b><span class="sp"></span><span class="hint">Unchecked hits are left alone</span></div>`
  + rows.map(([c, t], i) => `<div class="rpr${i === 1 ? ' cur' : ''}"><span class="cb on"></span><span class="ch">${c}</span><span class="t">${t}</span></div>`).join('')
  + `<div class="rpf"><span class="btn pri">Replace 12</span><span class="btn">Cancel</span></div></div>`;

const css = `<style>
.fstrip{position:absolute;left:0;top:0;width:660px;z-index:12;background:#fff;border:1px solid var(--line);border-top:0;border-radius:0 0 10px 10px;box-shadow:0 6px 20px rgba(0,0,0,.08);padding:6px 10px 8px;font:13px var(--ui)}
.fr{display:flex;align-items:center;gap:6px;height:36px}
.fr .lab{width:58px;color:var(--ink2);flex:none}
.fr .cnt{color:var(--ink2);font-size:12px;width:52px;text-align:center;flex:none}
.fr .vsep{width:1px;height:16px;background:var(--line);margin:0 4px}
.fr .chip{font-size:12px;padding:3px 9px;background:#fff}
.fr .opt{display:inline-flex;align-items:center;gap:6px;padding:3px 8px;font-size:12px;color:var(--ink2)}
.fr .ib.q{width:22px;height:22px;border:1px solid var(--line);border-radius:11px;font:600 12px var(--ui);color:var(--ink2)}
.fr .hint{color:var(--ink3);font-size:12px;margin-left:2px;white-space:nowrap}
.rpv{position:absolute;left:0;top:90px;width:660px;z-index:11;background:#fff;border:1px solid var(--line);border-radius:10px;box-shadow:0 14px 40px rgba(0,0,0,.14);font:13px var(--ui);overflow:hidden}
.rph{display:flex;align-items:center;gap:8px;padding:9px 14px;border-bottom:1px solid var(--line2)}
.rph .sp{flex:1}.rph .hint{color:var(--ink3);font-size:12px}
.rpr{display:flex;align-items:center;gap:10px;padding:0 14px;height:28px;border-top:1px solid var(--line2)}
.rpr:first-of-type{border-top:0}
.rpr .ch{width:44px;flex:none;color:var(--ink3);font-size:12px}
.rpr .t{flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font:14px var(--text)}
.rpr .t b{font-weight:400;background:rgba(232,190,60,.28);border-radius:2px;padding:0 1px}
.rpr.cur{background:var(--accent-tint)}
.rpr.cur .t b{background:rgba(232,170,40,.6)}
.rpf{display:flex;gap:8px;padding:10px 14px;border-top:1px solid var(--line2);background:var(--soft)}
.crop .fstrip{position:static;border:0;border-radius:0;box-shadow:none;width:660px}
</style>`;

const crop = `<div class="below"><div class="crop" style="width:680px"><div class="lbl">The strip when the found text is a Codex name</div>`
  + stripRows('Lena', '', { count: '1 of 31', rename: true })
  + L.ann(5, 'A Codex name gets Rename everywhere instead of a blind replace: text, Codex and topics together', 90, 118, { w: 400 })
  + `<div style="height:60px"></div></div></div>`;

const html = css + L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  page: L.pageCol(col, { paddingTop: 196 }) .replace('<div class="page">', '<div class="page">' + stripRows('lemon', 'lime', { count: '2 of 12' }) + preview),
  status: { style: 'Plain', words: '2,418 words', pages: 'book p. ~146/248', fixes: '3 fixes' },
  ask: 'normal',
  extra: L.ann(1, 'Ctrl+F opens the first row; Ctrl+H adds Replace, the same width', 60, 120, { w: 300 })
    + L.ann(2, '“Whole book” or “This chapter”, nothing finer; hits walk across chapters and Back returns', 1072, 120, { w: 300 })
    + L.ann(4, 'Replace all never replaces blindly: every hit in context, each with a checkbox, then “Replace 12”', 1072, 300, { w: 330 })
    + L.ann(3, '“?” opens a tester with the current paragraph as sample; “Ask for help” hands the pattern to the AI', 1072, 210, { w: 330 }),
}) + crop;

module.exports = {
  id: 'S20',
  file: 's20-find-replace',
  title: 'Find and Replace',
  width: 1440,
  height: 900,
  html,
  caption: L.caption({
    id: 'S20', title: 'Find and Replace',
    scene: 'The writer finds “lemon” in the whole book and wants “lime”. The strip sits at the top of the page, two rows of the same width; Replace all has opened the preview list of all twelve hits in context, each with a checkbox, before anything changes. In the text, the hits are highlighted and the current one is stronger. Under the window: the same strip when the found text is a Codex name.',
    on: 'the strip (Find “lemon”, 2 of 12, ‹ ›, Whole book ▾, Pattern ☐, ?; Replace “lime”, Replace, Replace all…), the preview list (12 hits in 5 chapters, rows with checkbox, chapter and context, Replace 12 · Cancel), two hits in chapter 7 with the current one stronger, the Ask button, the status bar; under the window, Find “Lena” with Rename everywhere and its hint',
    off: 'the chapter list, the Reference panel, a Search &amp; ask box, the pattern tester, a provider icon in the status bar',
  }),
};
