// S20: Find and Replace. The strip across the top of the page (Find, Replace, the Codex line),
// the pattern tester under it, and the Replace-all list grouped by chapter.
const L = require('../lib');
const P = L.sample.chapter7Plain.slice();

// "Lena" in the text: every hit tinted, the current one (3 of 27) stronger
let k = 0;
// the page is scrolled: the top of chapter 7 shows under the list
const col = P.map((p, i) => `<p${i === 0 ? ' class="first"' : ''}>${p.replace(/Lena(?!’s warning)/g, () => `<span class="hit${++k === 2 ? ' cur' : ''}">Lena</span>`)}</p>`).join('');

const chev = (d) => `<span class="ib nv">${d === 'l' ? L.icons.back : L.icons.forward}</span>`;
const field = (text, w, o = {}) => `<span class="inp${o.foc ? ' foc' : ''}" style="width:${w}px">${text}${o.cursor ? '<span class="cursor"></span>' : ''}</span>`;
const ck = (on, t) => `<span class="opt"><span class="cb${on ? ' on' : ''}"></span>${t}</span>`;

const fstrip = `<div class="fstrip">`
  + `<div class="fr">${field('Lena', 190, { foc: true, cursor: true })}<span class="cnt">3 of 27</span>${chev('l')}${chev('r')}<span class="vsep"></span>`
  + ck(false, 'Aa') + ck(false, 'Whole word') + ck(true, 'Regular expression') + `<span class="sp"></span><span class="seg"><span class="on">Whole book</span><span>This chapter</span></span><span class="x">✕</span></div>`
  + `<div class="fr">${field('Lina', 190)}<span class="btn">Replace</span><span class="btn">Replace all…</span><span class="sp"></span><kbd>Ctrl+H</kbd></div>`
  + `<div class="codex">${L.icons.info}<span><b>Lena</b> is a person in the Codex (27 mentions, 2 aliases)</span><span class="sp"></span><span class="btn pri">Rename everywhere</span></div>`
  + `</div>`;

// the pattern tester: the current paragraph as sample, matches tinted
const tester = `<div class="tester"><div class="th"><b>Pattern tester</b><span class="pat">Lena</span><span class="m">2 matches in this paragraph</span><span class="sp"></span><span class="q">?</span><span class="btn aih">${L.icons.spark}Ask the AI for help</span></div>`
  + `<div class="smp">“Then hear this.” <span class="mt">Lena</span> leaned close enough that Vega could smell the lemon on her hands. “Go home. Don’t come back to the Blue Lamp tomorrow.” <span class="mt">Lena</span>’s hand stayed on the bar.</div></div>`;

// Replace all: every hit in context, grouped by chapter
const grp = (ch, t, n, open) => `<div class="rg${open ? ' open' : ''}"><span class="cv">${open ? L.icons.chevron : L.icons['chevron-right']}</span><span class="cb${open ? ' on' : ' on'}"></span><b>${ch}</b><span class="gt">${t}</span><span class="n">${n}</span></div>`;
const hit = (t, on = true, cur) => `<div class="rpr${cur ? ' cur' : ''}"><span class="cb${on ? ' on' : ''}"></span><span class="t">${t}</span></div>`;
const preview = `<div class="rpv"><div class="rph"><b>Replace all · 27 hits in 5 chapters</b><span class="sp"></span><span class="hint">Every hit in context; unchecked ones are left alone</span></div>`
  + grp('ch. 2', 'The bartender', 6) + grp('ch. 6', 'The back room', 3)
  + grp('ch. 7', 'Lena’s warning', 8, true)
  + hit('the only sound was <b>Lena</b> drying glasses that were already dry')
  + hit('“You’re early,” <b>Lena</b> said without looking up.', true, true)
  + hit('“Kit who?” <b>Lena</b> set a glass down hard enough to make it ring.')
  + hit('<b>Lena</b> looked at the coin, then at the door behind her')
  + hit('“<b>Lena</b>,” she said quietly, “if he’s in trouble…”', false)
  + `<div class="rpr more"><span class="t">3 more in ch. 7</span></div>`
  + grp('ch. 8', 'Closing time', 6) + grp('ch. 11', 'The back room, finally', 4)
  + `<div class="rpf"><span class="btn pri">Replace 27</span><span class="btn">Cancel</span><span class="sp"></span><span class="hint">One step in Undo</span></div></div>`;

const css = `<style>
.strip .ib.fnd{background:var(--accent-tint);color:var(--accent)}
.page .col .hit{background:rgba(232,190,60,.28);border-radius:2px}
.page .col .hit.cur{background:rgba(232,170,40,.65)}
.fstrip{position:absolute;left:-30px;top:0;width:720px;z-index:12;background:#fff;border:1px solid var(--line);border-top:0;border-radius:0 0 10px 10px;box-shadow:0 6px 20px rgba(0,0,0,.08);padding:4px 10px 8px;font:13px var(--ui)}
.fr{display:flex;align-items:center;gap:6px;height:36px}
.fr .inp{min-height:28px;padding:4px 9px;font-size:13px;display:inline-flex;align-items:center}
.fr .cursor{height:1em;vertical-align:-2px}
.fr .cnt{color:var(--ink2);font-size:12px;width:52px;text-align:center;flex:none}
.fr .ib.nv{width:22px;height:22px}
.fr .vsep{width:1px;height:16px;background:var(--line);margin:0 4px}
.fr .sp,.codex .sp,.th .sp,.rph .sp,.rpf .sp{flex:1}
.fr .opt{display:inline-flex;align-items:center;gap:5px;padding:3px 4px;font-size:12px;color:var(--ink2);white-space:nowrap}
.fr .seg span{padding:3px 9px}
.fr .x{color:var(--ink3);padding:0 4px}
.codex{display:flex;align-items:center;gap:8px;margin-top:4px;padding:6px 6px 6px 10px;border-radius:7px;background:var(--accent-tint);color:var(--ink)}
.codex svg{width:15px;height:15px;color:var(--accent);flex:none}
.codex b{font-weight:600}
.tester{position:absolute;left:-30px;top:132px;width:720px;z-index:11;background:#fff;border:1px solid var(--line);border-radius:10px;box-shadow:0 8px 24px rgba(0,0,0,.10);font:13px var(--ui);overflow:hidden}
.th{display:flex;align-items:center;gap:10px;padding:6px 8px 6px 12px;border-bottom:1px solid var(--line2);background:var(--soft)}
.th .pat{font:12px ui-monospace,monospace;background:#fff;border:1px solid var(--line);border-radius:4px;padding:0 6px}
.th .m{color:var(--ink3);font-size:12px}
.th .q{width:22px;height:22px;border:1px solid var(--line);border-radius:11px;display:inline-flex;align-items:center;justify-content:center;font:600 12px var(--ui);color:var(--ink2);background:#fff}
.th .aih{height:24px}.th .aih svg{width:13px;height:13px}
.smp{padding:9px 12px 11px;font:15px/1.55 var(--text);color:var(--ink2)}
.smp .mt{background:rgba(59,110,168,.20);border-radius:2px;color:var(--ink);box-shadow:0 0 0 1px rgba(59,110,168,.35)}
.rpv{position:absolute;left:-30px;top:238px;width:720px;z-index:11;background:#fff;border:1px solid var(--line);border-radius:10px;box-shadow:0 14px 40px rgba(0,0,0,.14);font:13px var(--ui);overflow:hidden}
.rph{display:flex;align-items:center;gap:8px;padding:9px 14px;border-bottom:1px solid var(--line2)}
.rph .hint,.rpf .hint{color:var(--ink3);font-size:12px}
.rg{display:flex;align-items:center;gap:9px;padding:0 14px;height:30px;border-top:1px solid var(--line2);background:#fafaf9}
.rg:first-of-type{border-top:0}
.rg .cv{width:12px;display:inline-flex;color:var(--ink3)}.rg .cv svg{width:10px;height:10px}
.rg b{font-weight:600;width:40px}
.rg .gt{flex:1;color:var(--ink2)}
.rg .n{color:var(--ink2);font-size:12px;background:#eeeeeb;border-radius:8px;padding:0 7px}
.rpr{display:flex;align-items:center;gap:10px;padding:0 14px 0 49px;height:28px;border-top:1px solid var(--line2)}
.rpr .t{flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font:14px var(--text)}
.rpr .t b{font-weight:400;background:rgba(232,190,60,.28);border-radius:2px;padding:0 1px}
.rpr.cur{background:var(--accent-tint)}
.rpr.cur .t b{background:rgba(232,170,40,.6)}
.rpr.more .t{font:12px var(--ui);color:var(--accent)}
.rpf{display:flex;align-items:center;gap:8px;padding:10px 14px;border-top:1px solid var(--line2);background:var(--soft)}
</style>`;

const html = css + L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  strip: { reviewCount: 12 },
  page: L.pageCol(col, { paddingTop: 642 }).replace('<div class="page">', '<div class="page">' + fstrip + tester + preview),
  status: { style: 'Plain', words: '2,418 words', pages: 'book p. ~146/248', review: '12 to review' },
  ask: 'normal',
  extra: L.ann(1, 'The magnifier or Ctrl+F opens the strip; Ctrl+H adds the Replace row, the same width', 40, 80, { w: 300 })
    + L.ann(2, 'Three checkboxes, and Whole book or This chapter, nothing finer. Hits walk across chapters; Back returns to the cursor', 1088, 80, { w: 296 })
    + L.ann(3, 'A Codex name: Rename everywhere changes the text, the Codex and the topics together; aliases are renamed from the entry', 1088, 150, { w: 296 })
    + L.ann(4, 'Regular expression opens a tester on the current paragraph; “?” reopens it; the AI can help with the pattern', 40, 210, { w: 300 })
    + L.ann(5, 'Replace all never replaces blindly: every hit in context, grouped by chapter, folded with counts, each with a checkbox', 1088, 360, { w: 296 }),
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
    scene: 'The writer searches the whole book for “Lena”, with Regular expression checked, and has pressed Replace all. The strip across the top of the page says Lena is a person in the Codex and offers Rename everywhere instead; under it, the pattern tester shows the current paragraph with its matches; then the Replace-all list, grouped by chapter, with chapter 7 open. In the text behind, the hits are tinted and the current one is stronger.',
    on: 'the magnifier active in the strip, the Find row (“Lena”, 3 of 27, ‹ ›, Aa · Whole word · Regular expression checked, Whole book | This chapter, ✕), the Replace row (“Lina”, Replace, Replace all…, Ctrl+H), the Codex line with Rename everywhere, the tester (pattern, 2 matches, ?, Ask the AI for help), the Replace-all list (27 hits in 5 chapters; ch. 2, 6, 8, 11 folded with counts; ch. 7 open with checkboxes, one unchecked; Replace 27 · Cancel), the hits in chapter 7, the Ask button',
    off: 'the chapter list, the Reference panel, a finer scope than chapter, a replace without the list',
  }),
};
