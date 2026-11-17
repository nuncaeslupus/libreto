# Libreto walkthrough (draft 3): review notes

_Exported 2026-11-08 00:31_

## Libreto in one minute

I understand each mode should also have AI. Any time is a good time to ask a question or look for help.
I'm at the beginning of this document, so I don't know what comes, but for the moment, I think research must be able to point to a point of the book or more and the other side.
I'd like to see examples with some zoom in.
Design must adapt to size the correct way, which we must decide what means.

## 1. Start (S00)

The directory should make clear a new directory or workspace will be created into that directory, so no need to create one with the title of the book. Or we should understand if the user already added it and do not create one inside the other one. Or "Documents/ (Recommended)". It's like git clone, I never know if the folder will be created or not. Some software that has got it the right way?
Should top menus be contextual for each mode?

## 2. What are you doing now? (S32)

Does "Always open in Write" changes if another one is selected? "Always open in Plan"? Or this is a default because it is logical? It's not clear if clicking with mouse will start immediately or if you have to pres Intro or what. If you need to hit Intro, then a button "Start" should be shown in case someone uses the mouse. Otherwise, it can be confusing. Don't put the Intro/Es message. Another option would be "Don't show it again", but then what's default? Or simply start where it was closed and the user will know if they want to switch modes.
In your current view, if another mode is selected, the dimmed background changes too?
When this dialog is open, toolbar should be greyed off as the text behind, right?
Es would let you at currently selected mode? Is that mode the last one used?

## 3. Write, the first minute (S01)

I'd like dots to be at the right. And in the correct line if possible, not just the paragraph.   And if a comma was added, a minimum color or underline or whatever should be shown at the right place. If there are more than one comma, you can't know what was added.
Maybe we could have three underline colors: red for orthography, blue for grammar/semantics and green for AI/Libreto corrections. Well  corrections are a whole category by themselves, which is good. Just show them similar to other corrections or warnings (Word's up and down underline).

## 4. Scene breaks (S02)

I like it. I can see "The next morning" is already a scene, when it is not yet confirmed. Is this auto-addition coherent with other fixes, like detected chapters? I mean, all auto-corrections should be shown the same to be a celtes or not, being it a bigger don't for a chapter or a line that just appeared, user should identify they are the same pattern. Here I see a message with two buttons. I don't remember, but I think a new detected chapter was shown as a dot or soft underline.
What about deleting a scene separator? Is it as easy as hitting backspace or delete? Can it be done with the mouse? Will there be a way to undo it (apart from undo) if done by accident? Or a note saying how to add a separator for chapters. Does it have a place in Insert menu? How is the title created when auto-added? What happens to the left panel when deleted? A blink and a "Scene deleted" message for some seconds or simply it disappears?

About both panels hiding and showing buttons, they are the same. It is coherent, but maybe they could be more clear about what they do or what they are. Maybe an icon of a list for the left and something else for the right? But they must show they are for opening and close something. I like how they are now, but they are so close to next icons that they look just like some other tool.

## 5. Styles (S11)

Good! But how is scene separator a style?
Is highlight color always shown or it is only when styles are enabled? I mean, a book title is not even shown in italics if styles are not turned on as highlights? Or it is in italics but not in color? We must make style VERY clear, that the user doesn't need to think to understand them, it must be absolutely natural to select and use.
Is the style palette shown the same in right click menu than in status bar palette?
Should we even call them styles like in Word or something that shows that they give texts a function?

## 6. Hold Alt (S07)

What is exactly what Libreto knows? I mean, it also knows things like "Lena threw a coin twice, ch. 2 and ch. 8". Should we talk only about entities?
What if many notes are in the same line? They show one next to the other? What's the maximum? Are they then folded somehow?
Good peak for persons,. I don't get the Change" button in style. Clicking the style name should open the styles panel.
I like the Alt key for this, but it is also used in Windows for menus. And we also thought about possible features like multiple selections, which usually use Alt (we won't probably add that one, but...).

## 7. Chapters, on the left (S03)

I don't like scenes are shown with a dot like a bullet list. Dots are confused with notes and fixes dots just to the right.
Can't scenes have notes? Are all of them shown in chapters only? What if numbers grow? "1247 [red dot]"? Or we use 99+ or 10+?
The "+" menu is not as clear as expected. Let's imagine someone that only uses write mode. Adding new chapters, parts or sections should be easier. Is a chapter added with Ctrl+Intro? What happens then? A new blank page, with or without "Chapter X"? How can a user how to add a scene if not told? A brief tutorial? How to add a chapter or a part before or after another one?
I would not like buttons to create new paragraphs, chapters or scenes after each paragraph as a Jupiter Notebook, it would be dirty. But some easier way apart from the shortcuts would help. Maybe right click? And "Insert...". Or the Insert menu.
Filter is only by chapter or scene titles, right? What about an extended search that looks into text? For example, "Lena" shows every chapter where she is mentioned.
Are notes and tasks dot colors consistent in all the app? Could we try replacing them by icons? Maybe colored I ones to differentiate better, but a paper for notes, a tool or similar for tasks...
I see breadcrumbs don't include part here. They will never have enough room. Maybe we must find another way...

## 8. Search & ask (S08)

I like it. But we need to be careful about spacing, it gets too close to the modes. And in your small screenshots it overlaps with them.
One question: Which commands do exist? How to know them all? Are they useful at all? Or are they just an API for the AI? Can commands be called like something like "/", like with Claude? Will they be actual Class commands? Will users use them?
Another thing: should selected style be shown in the bottom bar as styled text? I mean, the current "A" in italics, for example.

## 9. Find and Replace (S23)

Replace all should open something interesting like a list of all with a "Just replace all" button or similar. What if what is being replaced is an entity or part of an entity from Codex? How is it handled internally?
Could we have Claude to help with regular expressions?
How do you choose the Test text example?
Do search and replace panels have the same width? Here Find looks shorter and replace longer, which is weird if you click on the expanding arrow.
What are the rest of the options of "While book"? "This chapter" and "This scene"? A way to check individual chapters? Too complex, no one will use that and will be confusing. But what if you are in the chapter view? Search will go jumping through chapters? How to come back to the initial place then? With the back arrow, I guess. How sensitive are back and forward arrows to cursor moving? Where even is the whole book view? I don't mean the book mode, I mean a way to read the whole book just like you can read a single chapter now, just by scrolling down. And how Chapter titles spacing is shown then?

## 10. Peek and the Codex (S05)

How sensitive is hovering? Most if the words will be known entities, and that can make moving the mouse around a hell.
Good to have peek and card, but card is still short in info. I guess when I arrive the Research part I'll see it. I'm not yet sure Codex and research must be the same thing. For me they are very different things. Let's see.
Also, first appearance of Chat. I think chat should be EVERYWHERE, always at hand, but I'll see it in next screenshot.
Not sure what "Filter the codex" dies or if I tro in that field is the same as "Open in research" or how Back button (why not forward too) works here. Is it a simple codex explorer and you can click elements? What if I click on "ch. 2"? Does this panel disappears and it takes me to the place in text panel? Or something opens in that right panel?
What's the question mark and how does it work? Is it help? I guess I'll see it later.

## 11. Chat (S09)

Chat must be omnipresent, it is THE TOOL in this app. It must help everywhere, from asking about a character to finding a menu item to help with reflexes in the Find box. We need a place for it that can be hidden or collapsed but that allows for other elements to be seen. Maybe like a floating circle with a chat icon, as if it was a website technical help chat? Not sure, because Claude is much more complex than that and it needs some room. Here it also can show buttons to make a tions or links to websites or text parts (All it's abilities must be defined. I got Claude to show buttons that open Word at a given place in literary-critic, which is an extension of Claude Desktop, I hope we'll be able to do something similar here, where we control all the UI).
I don't like two tabs while they are stacked, that does not make sense. I prefer chat floating over everything if needed, but it should be able to modify chapters (and the left panel), things in the right panel, text in the text panel, cards in the board... It must have a lot of power over the app through our API or whatever.
I don't get what the title me u history is. Chat should show old chats when the user wants (similar to AI chats apps, that show them when clicking a list button.
About models, is it possible to use small, local models for small tasks? What is a small task? Use Claude Opus to create the codex and then use local models from that moment on except for explicit chat? I don't think so.
Another thing: I see that central text is moved to left or right depending on the panels open. That should not be like that. Text should always be in the middle of the screen and space taken from panels must be empty if not used.

## 12. Write with everything open (S25)

Good. As I just told you, text must always be centered.
Search & ask and Chat are still confusing. Why using "ask" if you can directly chat? We need to make that clear. As I said, AI must be accessible from everywhere. Right now we have Chat, Search & ask and Find that overlap. We need to rethink that. Maybe Search & ask and chat should be the same, just Ctrl+K or similar and something is open at the right place. Let's think it more. And the Claude icon at the bottom bar can look redundant too. Maybe a floating Claude big button at the bottom right, equivalent to Ctrl+K, is the only chat help. It can be greyed out when there is no connection.
As always, SIMPLIFYING.

## 13. One key back to the page (S26)

Yes, good. Just how many time are hidden panels remembered? I mean, what if you clise them with the keyboard shortcut and then you open right panel again and navigate, search, etc. What happens. Then you hide the panel with the side button. Then you click the restore button. What does it show?
By the way, a backslash is hard to get in a Spanish keyboard. I'd prefer shortcuts are the same in all languages, so let's try to find some that always work. Ctrl+backspace to hide e everything? For example.
Highlight button was highlighted in last screenshot and regular state in this one. How is it shown if only some highlights are enabled?

## 14. Focus (S17)

Perfect. Is there a key to go back, in case there is no mouse or it stops working? Oh, ok, I see which.
Another question: How does tabulation, first line indented and all that will work here? I want something standard for everyone, but I don't want to limit some formatting from the user.

## 15. Plan (S24)

How and when and where do AI reads the text to extract scenes if the writer didn't add them? In general, when does it do this kind of things? In the background? And when does it communicate to the user? Does it generate tasks when not asked? Should this behavior be enabled or disabled?
What if someone changes a card to a new place and doesn't confirm it and tries to move away? A warning should be shown.
Can groups be moved? What if you delete a group that has scenes? Can scenes be out of a chapter/act? How are they shown in the chapters list in writer mode?
I had seen in another screenshot something like a notice "Don't worry, you can still move it, things will be fixed later" or "tasks will be created to fix inconsistencies", similar to GitHub when creating a PR and branch is not updated or similar.
Should some more info be shown (when hovering or clicking or something) to have a better idea of what happens in the scene? Or an item list with the most important facts. I mean, small cards are okay, it's the best way, but maybe we need something more.
Also, I think in Save the cat there were colors as something important. Can it be? Look for how people uses them to take more ideas. But don't for e them, simple is better.

## 16. Research (S29)

How to link things or ideas? Are those links from Codex or from research ideas?
I don't see that codex and research are the same, although of course they are related. But maybe a time is being researched (e.g. s.XIX), and this is not an element in codex. And other things in codex (a character) may not have a linked research. We need to rethink this part too.
Linking is the hard part here.
How is research done? Something similar to text mode? With styles, titles, etc. and images. By the way, a book should also be able to include images (or links, etc.).
How info is structured in the main screen and in right panel? I see notes in the right panel, but the text should have been written by the author. Then there are attached files (PDF...). Who and how are they attached or added to the research.
AI Chats must be here too. For example, the user gets some pictures and AI generates the definitive one from them.
About Codex, it would be nice to add pictures to the element (character photo or drawing, place picture...).
AI should be able to help organize info here, although anything AI can do, the user must be able to do it too (through what I call our API, that can be used through AI actions or UI buttons, menus or links). For example, improving the research or the research documents (they should be very similar to chapters), linking things, etc. And, of course, AI must be able to generate questions, issues, comments, etc. that help with research and that questions the Codex.
The right panel I see here has notes about chapters. I understand they are linked after the book chapter is written, although research can also take things from the book so that research can be completed. And both get feedback from each other.
What are the numbers on the left panel? The number of resources?
We need to define what a research topic is structured or how it looks like. I don't say that we should not allow unstructured info there, that is good too, but it must be able to be organized (AI can help there).
I expected to see in the left panel something similar to a folder and file box, but I like to create topics, give them a title (how to edit it in the screenshot) and contents, edit, split, merge and delete them.
Let's rethink codex and research and how they are linked.

## 17. Research beside the text (S30)

I don't still get your "pinned" thing. What is the codex view if there's nothing pinned? I think of the codex as something complex that maybe can't be shown to the user )too much info and too many links), but of it could be shown, it should be in the main screen, while the right panel in Write mode should be a way to query it and show things, so a search box is needed. But again, we have many search boxes. Should we use AI in this one or not? We need to rethink codex. And research. And how to show them and how to query them and how to link their info to text and who does that link.
I don't understand what you mean by second monitor. We can't expect the user to have more than one monitor.
I see it this way: what may the user need at some point? He is writing and he wants to di some research about something unrelated: he opens research mode. He wants to read the research he did about a topic (Blue Lamp): he clicks somehow Blue Lamp in the text and selects Research and he sees it in the right panel. If he wants to continue with it, he opens the research mode from there.
I agree that codex is info about book elements, but codex is what is already built (a connected database) and research is not necessarily accepted material. Moving info between them must be worked to be easy, but they are not the same.

## 18. Review (S31)

Quite good flow. Difference between note, task, fox...?
How to know Marta is editor? Is there a list of collaborators?
Do some types of comment have buttons? Accept, reject, mark as resolved, delete... Why not all, with AI help? Others show both versions, one current and the other one fixed. If I change the comment type, what happens to buttons?
I'd like to see lines for all comments, from their icon to the right bubble. With angle, probably. And the double scroll. And icons not only in the correct paragraph but in the right line. And the affected text marked when possible if the comment is selected.
It's weird to have a list of items to the left and the items also to the right. I know left are from the whole book.

## 19. Notes in the margin (S04)

Ok, now I see lines. Maybe better, only selected one has the line. Would it be a good idea to move the active one next to the actual text line? It's that or adding the double scroll with lines between all them.
About dots in writer mode, what happens when clicking, it moves to review mode or it just shows the note? Maybe we need to rethink modes, sometimes when writing the writer wants to fix a small issue. It's not just writing or just fixing, it's usually both.

## 20. An editor's copy (S21)

Good! This is a complex flow  so it must be done easy to use and understand. Should each version be copied from Downloads to the project directory, inside versions/ or reviews) or similar? Will that be added to history?
Three way compare is also a very complex diff thing. It must be done easy, with buttons to keep a version or another or to just edit that part. Maybe AI proposed solutions. One or two options mixing two versions, that take into account editor and writer's changes. This must take all the screen, so it could be a mode by itself. We need to think a lot about it. I don't like too many modes.

## 21. Compare an old version (S15)

Diff can be hard to implement.
Does showing only an older version without diff make sense?
How to keep, restore or edit a text fragment? If it can be done with buttons or showing how it would look, that would be great!
In which mode are we supposed to be? How to manage sent and received versions? How can AI help here by reading or sending emails, moving files from Downloads and email to the project dir?
What if the whole project is shared? We need to compare Libreto's projects or import a copy to compare. Only text and comments or also changes to codex, research...

## 22. History (S14)

What is seen when clicking on one line? Last screenshot showed how a single change was added to the history. Is compared dual view linked from here?
Should it be a new mode?
Again, how to include AI here? Only search or also chat?

## 23. Book (S16)

Accept cm too.
What if the author doesn't want chapter titles or neither "Chapter X"? Maybe he wrote a title for convenience when working, but he only wants a new page and space.
We need usual templates.
How fast can compiling be?
Also, are we limited to MD elements? Or which kind of format we finally decided?
Keyboard shortcuts to move through the book (arrows, etc.).

## 24. The AI, connected or not (S22)

Disclosure should be always shown at that screen. And more visible, with some warning sign.
The rest must be tested, but looks good.
All icons in the app must follow the same style!

## 25. Settings (S18)

Nice!

## 26. Help (S19)

This looks very good. Again, I'm not sure about showing another tab in the right panel. How many tabs can it hold? Can they be closed? When do they appear?
We must design all tutorials and which buttons do they have. Are they needed to be followed all the steps? Must they be finished?

## 27. Statistics (S20)

Nice! To be refined and thought.
An X to close this view? Sub views with more details?

## 28. Everything in the status bar (S27)

Can styles be filtered in the list?
Objects in highlights?
Fit in zoom is also on the slider?
History rows can be clicked?

## 29. Everything in the menus (S28)

Send to an editor ..? Or just send?
Ctrl+0 for plain... It could be reset zoom.

## What changed in draft 3, and why

Some of those shortcuts are hard to do in a Spanish keyboard.
A place to tweak keyboard shortcuts?

## Questions

Everything is mostly answered. About researching the web, of course!
