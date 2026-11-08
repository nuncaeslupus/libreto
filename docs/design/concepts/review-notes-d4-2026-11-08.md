# Libreto walkthrough (draft 4): review notes

_Exported 2026-11-08 19:53_

## Libreto in one minute

I see you stay with Codex = Research. Let's see how you did it.
Plan may not need left and right panels. Maybe all room must be for cards.

## 1. Start (S01)

Let's make it even clearer. Just under the chosen directory it must show something like "Final directory" or "It will be stored in:". And the final directory in one line, growing when the user types. It must remove or replace invalid characters. The note about where everything is stored, below it, always present.
What about creating an image for each project? Maybe created by AI (just a small icon) or at least a placeholder image or letter or a color. I think that could be motivating when the writer starts working on something.

## 2. Write, the first minute (S02)

Good. I'd like to see what happens when hovering. I'd expect a small block with what was, what is and a check mark or an x. Just easy to understand and quick to solve. Maybe with the title "Changed" or "Fixed"... In a review work (we'll see later) they should be present too.
Why it replaces "the" and not "received"? What's the difference about what's sure and what is not?
Some light animation should be shown when fixing something.
In your image there are more than one green underline but only one green check next to the line, I think it's only as an example.
About top bar, I like modes centered, bu I also know breadcrumbs won't usually fit. What about moving modes to the right, now there isn't search box? I don't like it, but the other option is using two lines, and I want to save vertical space for very horizontal laptop screens with bigger fonts.
About items in bottom bar, maybe they should look more like buttons or something that will show more info. They look like simple text now, but most of them will show things when clicked. A hint is good, but not enough.
How will grammar be managed? A long blue line under all the affected text? I've recently seen in Gmail two underlined elements to fix the same error (for example, rewording a sentence. It's nice, but maybe one only line covering all is clearer and can be fixed similarly to what I explained about hovering and accept or reject. How to show the hovering hint when you only use keyboard?
What if grammar and fix or typo are in the same word? Two underlined? Is it possible?

## 3. The marks, up close (S03)

In the proposed chapter line, does it mean a new file has been created or not until the user accepts it?
I talked before about writing by chapters or do it in a continuous all-book view. You didn't get me a solution for that yet. Should it exist? It must be another view (maybe something similar to the classic full text, one page, two pages view in PDF viewers, but for continuous or chapter views), it could be centered in the bottom bar, for example. The left panel titles should be there anyway and move to the place when double clicked.
It can be useful for some people to work kike this or for a moment in which the writer wants to see how a chapter ends and the next begins.
A way to go to the next one in chapter view? Shortcuts. I mean, how to go from one end of a chapter to the other end of the closest one. Down arrow? Next page? Or next page moves down as expected and another next page when at the end moves to the next chapter? Maybe even a preview? "Next: Chapter 7: Lena's warning" greyed at the end? And clicking it or moving the cursor and intro. Think if a solution, because the same method should be used at the top of a chapter to go to the previous one (go to the end of it?).
Back to the screenshot, what happens when clicking on 2+ or 99+?
Should red underlines have their own icon too? And appear in review?
About Editor, it should be more generic, we don't have a way to identify implied people. Maybe AI could do some magic: "Martha", "Jules", given the origin of the source.

## 4. Coming back (S04)

Good, but I don't like things that show for some seconds and that you can't recover if you see them late. Maybe make it last longer? Maybe an option into Ask for "Summary from last session"? Blinking it at the beginning? An animation moving into Ask so that you learn about it? In that case, it should be in a visible way, maybe a black line at the bottom is not enough.

## 5. Chapters, on the left (S05)

When filtering, the word Lena in the title "Lena's warning" should be highlighted.
Would it be useful an ad danced search or not at this place?
Is the word counter also capped at 99+?
Chapter before and after is ok. What about part before and after? Or new scenes before and after? Is there a warning when deleting something? "You are deleting this scene. It contains 1300 words (about x pages). Are you sure?". What about deleting the part, chapter or scene MARK? So not deleting content but making it more continuous? What if I add a part between 2 scenes? A new part and new chapter are automatically added? Can a writer just ignore chapters and scenes and just write? For example, a short story or simply the way he works.
If I click New chapter  button at the bottom, where is it added? Can we move chapters around in the panel? Or a message tells you to go to plan mode? I'd prefer that, it detects you trying to move something but it shows a prohibition sign and a message or something pointing to Plan mode (maybe by aggressively dim everything else so that Plan button is the only visible). "Use Plan mode to move things around". What if someone cuts a text from one chapter (maybe including the scene mark, that should be selectable) and pastes it into another chapter? That's licit, but should notices like "This break coherence" be shown? Or just a small icon and task are created discreetly?
What if someone doesn't want to work with parts or chapters but with acts and scenes? Or it is another type of document with its own left panel items and plan cards and lanes? I just wouldn't like making everyone use our style, although fixing some rules for document types can be good for all. But are really parts for everyone? Someone could use chapters only. Then, is a part one automatically added? How will it behave when printing? Can we set "don't print parts, don't print chapters", etc.? Or it begins by not adding them?
How a new book is started? Auto chapter 1? What about quotes or dedicatory? How and where are they set up?

## 6. Scene breaks, typed and detected (S06)

Ok about detected scenes and chapters in the list. That answers one of my previous questions.
We should accept other characters. For example, "*****" (or any length), "---", "*", "-"... With an undo in case the author just wanted that character in a single line there.
What if you click Insert scene break in the middle of a sentence?
Just clicking on the ruler deletes the scene break? Maybe double click, or click and show a very small menu or button to delete it. Not so easy.
Can scene break lines be selected? For copy, cut and paste, I mean. Are they selectable with the same selection background as for text? We need to define them. I still don't know the language under our texts (MD, XML...?).
I understand auto detected scenes shown in the list have an auto text unless no AI enabled, where it should just say "Scene" or similar.
It is an auto addition, but it doesn't look like other notes or additions, just the two visible buttons. Is this what we want? I like it, but for coherence, shouldn't it have an icon to the right of the line, like for green auto-fixed things? Or the are only blocks (chapter, scene break and few more) and can be treated this other way?
Ok about the scene deleted notice. Where does it appear? At its previous place? At the bottom as you proposed for Last session summary?
These "Undo" things should be equal through all the app, don't start adding exceptions, so they must be well-thought. Think about all possible cases and let's find a clear, intuitive way to do it for all.
We must expect the user knows at least how to undo things or show them the undo button if it looks he doesn't use or find it. I don't want to be intrusive, but what about some tips here and there? How to learn from user's needs?

## 7. Styles (S07)

Hmm... Ok  so a Chapter is not the same as a chapter heading... We need to make things clear. How does a chapter looks without Chapter heading, for example in what I call full view or continuous view (all the book at all, in contrast with the chapter view).
What about the button to add a  ew style?
You say Scene break lives in Insert, but the right click shows it. That's ok, but why only scenes and not chapters or parts?
We need to think very well all right-click menus, everywhere in the app. The most used things should be present. Others, through menus.
What about applying a style before writing text, instead of only selecting it? Be careful with blocks. For example, cursor in any point of a text and you click on Chapter title and all line (or paragraph) is converted into a title. That is expected. Undo, otherwise, or AI can detect it.
How does AI to do a book pass to detect things like this one? How does it add a list of issues?
Of course, moving through .menus must be very intuitive, with cursor and intro or just start typing to search where there is that option. Also, maybe icons could be added if not too intrusive or confusing.
The menu with so different fonts can be confusing. Some of them could look like subtitles that separate menu parts. Some way to make them look a varied list? Maybe dots like an item list or the name in regular font and an example with its expected font? Not sure, font size won't help making it coherent.

## 8. Ask: type and go (S08)

Who selects the best match while typing? How things like "Rename Lena" or "Highlight names" are inferred? How can it work without AI? Do we have a small model for these things? How fast can it be? What if there are more results of one type?
By the way, who fills and keeps updated the codex? I wonder what of all the tooling we are adding can be done without an AI and what actually needs it.
About questions in the bottom of the list, I guess they will be selected if typed text is long. What about related questions? Can they be precomputed?
Will a small model help with that? How efficiently? How much disk space it can take? And computing power? How reliable it is? If it needs to start using tools, filling the list may become very slow.

## 9. Ask: a conversation (S09)

_(no notes)_

## 10. Hold Alt (S10)

_(no notes)_

## 11. Peek and the Reference panel (S11)

_(no notes)_

## 12. Everything open, the text in the middle (S12)

_(no notes)_

## 13. One key back to the page, and Focus (S13)

_(no notes)_

## 14. A note, without leaving Write (S14)

_(no notes)_

## 15. Review (S15)

_(no notes)_

## 16. Plan (S16)

_(no notes)_

## 17. Research (S17)

_(no notes)_

## 18. A Codex entry at full size (S18)

_(no notes)_

## 19. Research beside the text (S19)

_(no notes)_

## 20. Find and Replace (S20)

_(no notes)_

## 21. Sharing with a reader (S21)

_(no notes)_

## 22. A reader's copy, compared (S22)

_(no notes)_

## 23. History (S23)

_(no notes)_

## 24. Book (S24)

_(no notes)_

## 25. The AI, connected or not (S25)

_(no notes)_

## 26. Settings (S26)

_(no notes)_

## 27. Help (S27)

_(no notes)_

## 28. Statistics (S28)

_(no notes)_

## 29. Everything in the status bar and the menus (S29)

_(no notes)_

## 30. Three window sizes (S30)

_(no notes)_

## What changed in draft 4, and why

_(no notes)_

## Questions

_(no notes)_
