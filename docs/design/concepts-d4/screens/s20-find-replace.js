// S20: Find and Replace. The small box under the magnifier, over the margin, with Replace and Options open;
// the hits across the end of chapter 6 and the start of chapter 7 (whole-book view); the Replace all… dialog;
// and, in a second small box, what the box says when the field reads a Codex name.
const L = require('../lib');
const P = L.sample.chapter7Plain.slice(0, 8);

// the whole book: the end of chapter 6, then chapter 7; "ledger" tinted, the current hit (3 of 27) stronger
const hit = (cur) => `<span class="hit${cur ? ' cur' : ''}">ledger</span>`;
const col = `<p>Kit had left the ${hit()} on the card table, open at a page of numbers that did not add up. Vega read it twice and put it back exactly as it had been.</p>`
  + `<p>Nobody in the back room had touched the ${hit()}, or everybody had. She could not tell which was worse.</p>`
  + `<div class="chap" style="margin-top:34px"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>`
  + P.map((p, i) => `<p${i === 0 ? ' class="first"' : ''}>${p.replace('little green ledger', `little green ${hit(true)}`)}</p>`).join('');

const ck = (on, t) => `<span class="opt"><span class="cb${on ? ' on' : ''}"></span>${t}</span>`;
const nav = `<span class="ib nv">${L.icons.back}</span><span class="ib nv">${L.icons.forward}</span><span class="x">✕</span>`;

// the find box (window coordinates), right under the magnifier
const box = `<div class="fbox" style="right:40px;top:96px;width:360px">`
  + `<div class="fr"><span class="inp foc">ledger<span class="cursor"></span></span><span class="cnt">3 of 27</span>${nav}</div>`
  + `<div class="fw"><span class="w on">Replace ▴</span><span class="w on">Options ▴</span></div>`
  + `<div class="fr"><span class="inp">notebook</span><span class="btn">Replace</span><span class="btn">Replace all…</span></div>`
  + `<div class="fo">${ck(false, 'Match case')}${ck(true, 'Whole word')}${ck(false, 'Regular expression')}<span class="opt"><span class="cb"></span>Style <span class="dd">Any</span></span></div>`
  + `</div>`;

// the same box when the field reads a Codex name
const box2 = `<div class="fbox" style="right:40px;top:428px;width:360px">`
  + `<div class="fr"><span class="inp foc">Lena<span class="cursor"></span></span><span class="cnt">1 of 24</span>${nav}</div>`
  + `<div class="fw"><span class="w">Replace ▾</span><span class="w">Options ▾</span></div>`
  + `<div class="codex">${L.icons.info}<span><b>Lena</b> is a person in the Codex · <span class="lk">Rename everywhere instead</span></span></div>`
  + `</div>`;

// Replace all…: every hit in context, grouped by chapter, folded with counts, checkboxes
const grp = (ch, t, n, open) => `<div class="rg${open ? ' open' : ''}"><span class="cv">${open ? L.icons.chevron : L.icons['chevron-right']}</span><span class="cb on"></span><b>${ch}</b><span class="gt">${t}</span><span class="n">${n}</span></div>`;
const row = (t) => `<div class="rpr"><span class="cb on"></span><span class="t">${t}</span></div>`;
const dlg = `<div class="dlg rpv" style="left:22px;top:184px;width:350px">`
  + `<div class="dlg-h">Replace all<small>ledger → notebook</small><span class="x">✕</span></div>`
  + grp('ch. 4', 'Quarter past three', 3) + grp('ch. 5', 'Kit’s ledger', 14)
  + grp('ch. 6', 'The back room', 4, true)
  + row('wrote it down in the <b>ledger</b> before he') + row('Kit had left the <b>ledger</b> on the card table') + row('had touched the <b>ledger</b>, or everybody had') + row('closed the <b>ledger</b> with one finger')
  + grp('ch. 7', 'Lena’s warning', 1) + grp('ch. 9', 'The pawnshop', 5)
  + `<div class="dlg-f"><span class="hint">27 of 27 checked · one step in Undo</span><span class="sp"></span><span class="btn">Cancel</span><span class="btn pri">Replace 27</span></div></div>`;

const css = `<style>
.strip .ib.fnd{background:var(--accent-tint);color:var(--accent)}
.page .col .hit{background:rgba(232,190,60,.28);border-radius:2px}
.page .col .hit.cur{background:rgba(232,170,40,.65)}
.fbox{position:absolute;z-index:30;background:#fff;border:1px solid var(--line);border-radius:10px;box-shadow:0 8px 24px rgba(0,0,0,.12);padding:8px 10px 9px;font:13px var(--ui)}
.fbox .fr{display:flex;align-items:center;gap:6px;height:32px}
.fbox .inp{flex:1;min-width:0;min-height:28px;padding:4px 9px;font-size:13px;display:inline-flex;align-items:center}
.fbox .cursor{height:1em;vertical-align:-2px}
.fbox .cnt{color:var(--ink2);font-size:12px;white-space:nowrap;padding:0 2px}
.fbox .ib.nv{width:22px;height:22px}
.fbox .x{color:var(--ink3);padding:0 2px 0 4px}
.fbox .fw{display:flex;gap:14px;padding:3px 2px 2px;font-size:12px}
.fbox .fw .w{color:var(--ink3)}.fbox .fw .w.on{color:var(--accent)}
.fbox .btn{white-space:nowrap}
.fbox .fo{display:flex;flex-wrap:wrap;gap:2px 10px;padding:6px 2px 0;border-top:1px solid var(--line2);margin-top:6px}
.fbox .opt{display:inline-flex;align-items:center;gap:5px;font-size:12px;color:var(--ink2);white-space:nowrap;padding:2px 0;border:0;background:none}
.fbox .opt .dd{border:1px solid var(--line);border-radius:5px;padding:0 6px;color:var(--ink)}
.codex{display:flex;align-items:flex-start;gap:8px;margin-top:6px;padding:7px 9px;border-radius:7px;background:var(--accent-tint);color:var(--ink);line-height:1.4}
.codex svg{width:15px;height:15px;color:var(--accent);flex:none;margin-top:1px}
.codex b{font-weight:600}
.rpv{font:13px var(--ui)}
.rpv .dlg-h{padding:11px 14px 10px 16px;font-size:14px}
.rg{display:flex;align-items:center;gap:8px;padding:0 14px;height:30px;border-top:1px solid var(--line2);background:#fafaf9}
.rpv .dlg-h+.rg{border-top:0}
.rg .cv{width:12px;display:inline-flex;color:var(--ink3)}.rg .cv svg{width:10px;height:10px}
.rg b{font-weight:600;width:36px;flex:none}
.rg .gt{flex:1;color:var(--ink2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.rg .n{color:var(--ink2);font-size:12px;background:#eeeeeb;border-radius:8px;padding:0 7px}
.rpr{display:flex;align-items:center;gap:9px;padding:0 14px 0 34px;height:27px;border-top:1px solid var(--line2)}
.rpr .t{flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font:14px var(--text)}
.rpr .t b{font-weight:400;background:rgba(232,190,60,.32);border-radius:2px;padding:0 1px}
.rpv .dlg-f{padding:9px 12px}.rpv .hint{color:var(--ink3);font-size:11.5px}
</style>`;

const html = css + L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  strip: { reviewCount: 12 },
  page: L.pageCol(col, { paddingTop: 30 }),
  status: { style: 'Plain', words: '2,418 words', pages: 'p. 146 of 248' },
  ask: 'normal',
  extra: box + box2 + dlg
    + L.ann(1, 'The magnifier or Ctrl+F: a small box under it, over the margin, never over the text. Hits walk across chapters; Back returns to the cursor', 1050, 290, { w: 340 })
    + L.ann(2, 'Options: Match case, Whole word, Regular expression, and Style (every Thought, every Letter). Whole-book view: no “This chapter” to choose', 1050, 352, { w: 340 })
    + L.ann(3, 'When the field reads a Codex name, the box says so in one line: Rename everywhere changes the text, the Codex and the topics together', 1050, 562, { w: 340 })
    + L.ann(4, 'Replace all… never replaces blindly: a dialog with every hit in context, grouped by chapter, folded with counts, a checkbox each', 22, 112, { w: 340 }),
});

module.exports = {
  id: 'S20',
  file: 's20-find-replace',
  title: 'Find and Replace',
  width: 1440,
  height: 900,
  html,
  caption: L.caption({
    id: 'S20', title: 'Find and Replace',
    scene: 'The writer searches the whole book for “ledger”, to replace it with “notebook”. The small box under the magnifier has Replace and Options open; the hits are tinted across the end of chapter 6 and the start of chapter 7, the current one stronger. Replace all… opened its dialog (shown at the left). Under the box, the same box as it looks when the field reads “Lena”, a Codex name.',
    on: 'the magnifier active in the strip; the box (“ledger”, 3 of 27, ‹ › ✕, the words Replace and Options both open, the Replace field “notebook” with Replace and Replace all…, the row Match case · Whole word (checked) · Regular expression · Style Any ▾); the hits in the text across the chapter break; the second box (“Lena”, 1 of 24, the line “Lena is a person in the Codex · Rename everywhere instead”); the Replace all dialog (ledger → notebook, ch. 4 · 3, ch. 5 · 14 folded, ch. 6 open with four hits and checkboxes, ch. 7 · 1, ch. 9 · 5, Cancel · Replace 27); the Ask button',
    off: 'a strip across the page, “This chapter / Whole book” (whole-book view), a pattern tester, the chapter list, the Reference panel',
  }),
};
