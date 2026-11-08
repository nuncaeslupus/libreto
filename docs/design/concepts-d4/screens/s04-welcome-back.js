// S04: Coming back. Libreto reopened as it was left; a line at the bottom says what is waiting. No dialog.
const L = require('../lib');
const P = L.sample.chapter7Plain;

// scrolled to the middle of chapter 7: the heading is above the top edge; the cursor sits after “since Tuesday.”
const col = P.slice(1).map((p, i) => {
  if (i === 4) p = p.replace('since Tuesday.”', 'since Tuesday.”<span class="cursor"></span>');
  return `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`;
}).join('');

const html = L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  page: L.pageCol(col, { paddingTop: 22 }),
  status: { style: 'Plain', words: '2,418 words', pages: 'book p. ~146/248', fixes: '3 fixes' },
  ask: 'normal',
  content: L.toast('Welcome back · last time Review, 14 tasks closed · 3 things waiting<span class="lk">▸</span>'),
  extra: L.ann(1, 'Nothing to answer: same mode, same chapter, same columns, the cursor where it was. The page is ready', 60, 150, { w: 300 })
    + L.ann(2, 'The line says where things stand and disappears by itself; ignoring it costs nothing', 60, 800, { w: 300 })
    + L.ann(3, 'Clicking ▸ opens Ask with the same summary and a button for each waiting item', 1000, 800, { w: 300 })
    + L.ann(4, 'Nothing is dimmed and no dialog asks what you want to do', 1060, 150, { w: 300 }),
});

module.exports = {
  id: 'S04',
  file: 's04-welcome-back',
  title: 'Coming back',
  width: 1440,
  height: 900,
  html,
  caption: L.caption({
    id: 'S04', title: 'Coming back',
    scene: 'Libreto reopened the next day, exactly as it was left: Write, chapter 7 scrolled to the middle, both columns closed, the cursor after “since Tuesday.” A line at the bottom says what happened last time and what is waiting; it goes away on its own.',
    on: 'the strip with both toggles off, chapter 7 mid-scroll with the cursor, the status bar (Plain, 2,418 words, book p. ~146/248, ✓ 3 fixes), the Ask button, the toast “Welcome back · last time Review, 14 tasks closed · 3 things waiting ▸”',
    off: 'the old “What are you doing now?” dialog, any dimming, navigator, Reference panel, Search &amp; ask box, provider icon in the status bar',
  }),
};
