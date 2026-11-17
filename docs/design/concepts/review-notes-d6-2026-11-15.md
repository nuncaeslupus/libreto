# Specification notes

_Exported 2026-11-15 · 80 notes._

> Send this file back to continue the review. Notes are embedded as data at the bottom
> so importing this file restores them in the reader.

## Screens D6

**Libreto in one minute**  `SPEC › Libreto in one minute`
> ¶ _“One Undo, one notice. Everything that changes the text, yours or Libreto's, is one list…”_
>
> When undoing, the right place must be shown, probably at the center of the screen (that can be decided). I've seen applications (Word probably does that) that undo things without showing you what you are undoing, so you never know at which point of the undo stack you are.

**Libreto in one minute**  `SPEC › Libreto in one minute`
> ¶ _“Mode Left Center Right What it is for Write chapters (optional) the text, underlines, y…”_
>
> I asked you to put lanes horizontal in Plan mode. I'll see it later, though, maybe it is correct this way.
> Should Research include some kind of browser to search on the Internet? That way, no copy and paste will be needed and no AI will be needed to ask for something.
> Should Codex be editable? Let's look at it later.
> We could think of adding an importance level to Review items, it could be set by the user or by AI.

**Libreto in one minute**  `SPEC › Libreto in one minute`
> ¶ _“History, Compare, Statistics and Help are not modes: they open over the window as a she…”_
>
> Not sure if Esc must directly close them. If some unsaved work is there, that could be dangerous. Let's store that like something to be manually tested. And adding a warning if something wrong can happen. Even more, what if those windows include open cards that go away with Esc? Someone tapping Esc twice could exit the screen, and some of them can be harder to reopen again. Because I understand "Back" doesn't include reopening these windows.

**Libreto in one minute**  `SPEC › Libreto in one minute`
> As a general note, I've been quickly looking into screenshots and I see we are losing our minimalistic approach. I know text is text, and a book with research, codex, comments, etc. is a lot of stuff to manage, but let's try to keep it simple. I'll be commenting each screenshot if I see it too overloaded.

**S01 · Start**  `SPEC › S01 · Start`
> ¶ _“When Libreto opens with nothing open, it asks for the least it can: a title and where t…”_
>
> I don't like having to enter project settings to change elements names. It should be decided beforehand, although also editable later (but with care, the text structure is not the same for a novel than for a play). A notice saying you can change it later in project settings would be nice.
> I'd do it like a simple choose between Book, Play or Essay (or similar). The list must be the minimum possible. Each choice with a list of possible doc types. We should include essays, papers, thesis, novels, short stories, poems, etc. Let's try the list not to be more than three or four choices, but let's use all needed to have all possibilities covered.

**S01 · Start**  `SPEC › S01 · Start`
> ¶ _“Under the location there is a label, "Will be stored in", and under it the full path on…”_
>
> I'd like to make it even clearer, something like "Choose the place to store your project", something that can make clear that you don't need to write the project name as the folder name. Or "Base path to store your project".

**S01 · Start**  `SPEC › S01 · Start`
> ¶ _“Each project gets a tile: a color you pick from a short row, one of a few plain images …”_
>
> For the tile (no need to call it tile in the UI). I expected a small dialog to choose: a letter with a choosable background color or rather one of a list of predefined images. I expected something more, at least 15 or 20 predefined thematic images that could be used for any book. For example, a hat and a whip for an adventure book, two masks (laughing and sad) for a play, a beach, a ball... I don't know, a list long and representative enough to include any kind of book. Maybe images in two or four colors in a palette. The color must be chosen, so you can choose: a) letter or predefined image, and b) a color as a letter background or to give a version of the chosen simple image in that palette of colors. The style of the drawings must be simple and according to the app design, nothing out of place. Paper, linen, etc could be images that can change color (so, images can include some textures). For now, no AI generated images (except for those that you'll generate now :-). Cover design and setting should be another totally different flow, that we should add later, probably in project settings or similar or in a place that can be understood and easy to find.
> I don't like the message next to "Create", I don't think users must know how the software works in the background. A Pro user will need to learn it somewhere else.

**S01 · Start**  `SPEC › S01 · Start`
> The three lines you put as an icon for hidden menus are right, but I expected something like different size lines. I can't find the image anywhere and I can't add it images here yet, so try to get what I mean.

**S02 · Write, the first minute**  `SPEC › S02 · Write, the first minute`
> ¶ _“The marks are the thing to look at. In Write the page carries underlines only, on the e…”_
>
> I don't like how different height underlines show. Let's go back to show them in precedence. If the most important one is red underline, then blue can only be shown around the red underline. If two fixes (for example, red and green) are in the same exact word, then hovering could show both things or the more important one only.

**S02 · Write, the first minute**  `SPEC › S02 · Write, the first minute`
> ¶ _“Hovering any mark, or resting the cursor inside it and pressing Ctrl+., opens the same …”_
>
> This kind of tips should be shown here and there, not only once. And I understand F8 and Shift+F8 is similar to how it will work in Review mode, one after another.

**S02 · Write, the first minute**  `SPEC › S02 · Write, the first minute`
> I'm not sure if I like tabs more than buttons as before. Tabs look better at that right place. If we could center it (for example, by removing breadcrumbs), they would look better as mode buttons. In later screenshots I've seen underlined tab and text under it are too close. Not sure, maybe we go back to buttons or another style that make it clear they are one or the others, exclusively.
> "12 to review" and "a click opens Review", a click on the menu or a click on one of the items?
> The keyboard button could be a good idea... We'll see it later, I'm not sure. Is there a key to show all keys?
> The dialog with "Unknown - leters" don't show the keys. Also, only "Add to dictionary" and "Make a Codex entry" (why this one?)? Shouldn't buttons next to "Did you mean 'letters'?" also fix or skip it?

**S03 · The marks, up close**  `SPEC › S03 · The marks, up close`
> I don't like the note icon, let's choose another one. Or another color. Maybe a gray note? What's the best option?
> "One line, one badge, with a count", what if they are different badge types?
> Unknown - Harborstreet: It's not clear you can choose a line. Maybe a button or check to show it? Isn't there an option to skip or dismiss? I don't like "Make a Codex entry", is this the right place?
> Should AI notes be shown differently before opening?
> What happens with replies? Will comments be exported to Word? Maybe that should be set in export options.
> Is "Done" the right word? It must make clear the idea "I read the note and I don't want to do anything with it or I already did it!. AI should help fixing things.

**S04 · Coming back**  `SPEC › S04 · Coming back`
> ¶ _“Libreto reopens exactly as you left it: same mode, same chapter, same columns, the curs…”_
>
> It should say "Last session". And how are its buttons chosen? A "Don't show anymore" button would help.

**S04 · Coming back**  `SPEC › S04 · Coming back`
> What is shown in Notices? For example, what do the other two lines in your example mean? When did they appear? Are they notices or fixes? How to delete them from the list? Clear the list? Is that list a taste of history?
> We must make clear what are notices, history items, undo list, comments, notes... Don't mix them.

**S05 · Chapters, on the left**  `SPEC › S05 · Chapters, on the left`
> ¶ _“Every row has a right-click menu for its level. A chapter: New chapter before / after, …”_
>
> Convert a scene into a chapter? Or too complex and options?
> "Remove the X mark". Mark? Title? Separator?
> May someone want a part starting with a scene without a chapter?
> What exactly is Discarded? A list of scenes? A box with any discarded text? If they are stored like scenes, that can make it easier to find, understand and recover them.

**S05 · Chapters, on the left**  `SPEC › S05 · Chapters, on the left`
> ¶ _“Dragging a row moves it. A line shows where it will land, the pointer refuses only the …”_
>
> Undo and Got it? What about Fix it or Add a task.
> Cutting and or pasting text triggers Codex engine (good name for it) to update Codex? We need to determine how Codex is updated.
> I don't like "+ New chapter". Why not new scene or new part too? I'm thinking... What about a "+" that appears at the right between any two items of the list. Clicking on it shows what can be added at that point (part, chapter, scene). That way, we can clean right-click menu and delete the button at the bottom.
> Parts are not needed, so we don't start a book with an automatically added part. But we must allow to add them before the first item and after the last item too.

**S05 · Chapters, on the left**  `SPEC › S05 · Chapters, on the left`
> An X at the chapters search box. And contextual menu must not show some things. Same for the "+" I just proposed. They must not work in filter mode.
> I don't understand the "+ New" button, I think my option improves that. But yes, that can't be done with keyboard only. Or can it? How to move with keyboard between panels? How to drag and drop things with keyboard? I'm not sure we must allow that, but I can imagine a scene selected and being moved up and down, even changing the chapter, with a keyboard combination. In that case, what about the coherence message? Showing at each step?

**S06 · Scene breaks, typed and detected**  `SPEC › S06 · Scene breaks, typed and detected`
> ¶ _“A scene break is a block like a paragraph: a click selects it with the same selection c…”_
>
> Should scene name be shown after or next to the separator, maybe small and in gray, so it can be renamed right there? Not sure, some writers may just use it as separators.
> Can chapterst,scenes and parts be added via right click?

**S06 · Scene breaks, typed and detected**  `SPEC › S06 · Scene breaks, typed and detected`
> Will Name the scenes rename existing ones? Otherwise, it must be rename unnamed scenes. Show scenes and Fold all chapters do opposed things? I don't get what the first one means.

**S07 · Styles**  `SPEC › S07 · Styles`
> ¶ _“A style says what a piece of text is (a thought, a letter, a sign on a door, a chapter …”_
>
> I think Book doesn't yet have styles configuration.
> I know many people can miss Bold, Italics and  Underline buttons at hand, but I don't want them to be like in a regular word processor. Any idea to make it an easy transition for anyone?
> How does it behave in chapter view if we add a new chapter somewhere?

**S07 · Styles**  `SPEC › S07 · Styles`
> ¶ _“The chip at the bottom left always shows the style at the cursor, written in that style…”_
>
> "What it is based on". Should we rethink it? It can grow uncontrolled. If we already have "Paragraph" and "Text", is that dependency needed? But... How to show texts in bigger fonts, then? Maybe three or four sizes? Biggest, Bigger, Big, Regular, Small? Think of a good way to do it. Background color? Underline? I don't want to make it over complex. It must be simple, but enough to set it up correctly. For example, Chapter heading is serif and Subheading is Sans. Should we have only three types of fonts too? Serif, Sans, Mono? But then we need to only use three font faces in all book.
> So:
> Give it a name
> Choosing  between Paragraph and Text
> Choosing between three font faces
> Choosing between font sizes
> Options: Bold, Italic, Underline (?)
> Options: Indent
> Colors: Font, Background, to choose.
> An example text shown.
> 
> Should we add the option to modify basic existing styles (maybe with a Reset)?

**S07 · Styles**  `SPEC › S07 · Styles`
> Right-click Emphasis and Strong shown styled?
> What is "Material (never prints)"?
> What is "Styles" in Format menu? Are they in Settings or is it just a window to format all of them? I'd prefer in Settings. But for the project or the app? I choose the app, so it's for the user.

**S08 · Ask: type and go**  `SPEC › S08 · Ask: type and go`
> ¶ _“Ctrl+K, or a click on the round button, opens Ask at the bottom right: one box for ever…”_
>
> What does "Show people" do?
> Three words or question mark...? Not sure yet.

**S08 · Ask: type and go**  `SPEC › S08 · Ask: type and go`
> What does it mean "Back returns"?
> I see "Chapter 7: Lena's warning". The text right after it is always a scene, even without a long line? It would be weird a line there, so a chapter always starts with a scene, right? About what I told you of adding a title to a scene separator, how would it be done here?
> Same at the end of a chapter, a scene always ends there, even with no line.
> Is the history button in the dialog a list of previous conversations or questions?
> If the user uses Ask to get answers from AI, it may feel wrong that Ask line is not always the one selected. Maybe it should always be there selected and the rest accessible with keyboard or mouse. Having to always choose can be hard to understand. I think last line must be always selected and the rest can be chosen.
> What about a small notice in the dialog to ask for an AI connection to improve results?
> Is the "+" for a new conversation? Close to minimize button looks weird.

**S09 · Ask: a conversation**  `SPEC › S09 · Ask: a conversation`
> ¶ _“When you choose the Ask the AI row, the same panel becomes the conversation. It opens o…”_
>
> When minimizing, it goes back to the icon. What happens if the icon is clicked again? Is it reset, does it keep the same conversation? Should we minimize it as a row at the bottom right? What then if Ask is clicked again? Then an X to close and reset it? So minimize and close? only at top right? What about "+", then? Where to put it?
> How "Show both places" work?
> The actions, buttons and links or all tools that can be shown in the chat deserve a spec on themselves.

**S09 · Ask: a conversation**  `SPEC › S09 · Ask: a conversation`
> "[...]" looks good, but if it's inside the same chapter, it should not take a line but be inline.
> I'd prefer first one ("Yours") to be the first button ("Keep mine") and second button "Take proposed" for proposed. So buttons keep the order of Yours and Proposed texts. How to move through there with the keyboard?

**S10 · Hold Alt**  `SPEC › S10 · Hold Alt`
> ¶ _“Hold Alt for half a second and the page shows everything Libreto knows about it: people…”_
>
> Do styled passages take place from the left panel?
> Now I see background on texts, let's forget the background color in styles I proposed before. And color should be only for when pressing Alt? I think it's better, don't show colors in text, it's a book and Alt helps with this.
> Also, don't allow taken colors (red, blue, green, orange/gray) for other styles or things. For example, Places green must be different from fixes green. Otherwise, everything will be mixed up with the same colors. Choose other shades of color for everything and don't allow in the color selection widgets colors that are already taken in the app.
> Some option to search by style?
> Which key will then be used in Windows? Can't be Alt anyway?
> I see a couple of check marks at the gutter, but no underlined words. They should also be shown when Alt is pressed, even if they were disabled in "Show". Alt must show everything.
> The count doesn't look like the one shown before.
> What happens with Alt+right click?

**S11 · Peek and the Reference panel**  `SPEC › S11 · Peek and the Reference panel`
> ¶ _“Two rules keep the panel from becoming a maze. A link to the text moves the page (and B…”_
>
> Reference panel title row has many problems: "Person Lena" is short here, but other words won't fit. The sparkle icon is not very visible and its function not clear. "Open in Codex" link should be different, don't know how.
> How are Facts from the text and  Facts from Research chosen? There could be hundreds of them! That panel could be very long.
> We need to make the reference panel really useful or it won't make sense.
> How much history does that panel Back store? Is it kept between sessions?
> Is "12 to review" needed now we show the 12 in Review mode tab?
> I'd like to see what the keyboard button shows, maybe in later screenshots.

**S12 · Everything open, the text in the middle**  `SPEC › S12 · Everything open, the text in the middle`
> ¶ _“The most Write can show on a 1440 px laptop: chapters on the left, Lena's card on the r…”_
>
> You didn't show "It was a good lie" style text at the left gutter.
> Is there an option to make UI font size bigger? Not doc text, it's another thing.
> Floating Ask button is OK, but we need an extra margin at the bottom so panel text is never behind the button.

**S13 · One key back to the page, and Focus**  `SPEC › S13 · One key back to the page, and Focus`
> ¶ _“Ctrl+Shift+H closes both columns and quiets the reveal; the same key brings back what w…”_
>
> Not sure about Esc here, I don't know if Focus allows to open peeks that disappear with Esc. That could be confusing.

**S13 · One key back to the page, and Focus**  `SPEC › S13 · One key back to the page, and Focus`
> If we show keyboards shortcuts in the app, all of them must follow the same style.
> Do we have a Focus button anywhere?

**S14 · A note, without leaving Write**  `SPEC › S14 · A note, without leaving Write`
> When you click the "Add note button" next to a paragraph, the note is for all the paragraph, but if you had some selected text in that paragraph it becomes anchored to that text, right?
> What if right panel is open when you click a note icon? Why Ctrl+Shift+M? Is it usual? Why not use N instead of M?

**S15 · Review**  `SPEC › S15 · Review`
> ¶ _“The gutter shows the four badges at the exact line, one per line with a count when a li…”_
>
> When clicking on an icon or a task on the right panel, do things scroll to the right place?

**S15 · Review**  `SPEC › S15 · Review`
> Do filters stack? Do all need to be clicked? Or you need Ctrl+click? I prefer not to use Ctrl+click. But filters don't look as filters. Let's give them another look. Also, what if there are a lot of reviewers? A lot of rows of people names?
> "A count when a line holds several". What if they are different types? Which icon is shown?
> I don't like the question mark icon. It doesn't look like a question mark. Maybe another font? Or are they SVG files. In that case, try to improve it.
> What if you click on a note (the line appears) and you scroll any of the two blocks (text or right panel)? Does the line become diagonal or angled or whatever?
> What if nothing is selected? It does not make sense (or does it?) to scroll through the right panel and see notes without knowing where they belong for context. I mean, should scrolling the right panel scroll the text along it? Both solutions can be confusing if not thought.
> Importing a reader's note should be more visible or the user must know how to get there from other places.
> Do Review all starts by the selected one or the first one?
> We need to improve this screen: filters must look like filters and what are flows must be differentiated, probably at the right: Review all and import comments from someone/a file. It must be clearly understood what "Import" and "comments" or "notes" mean for a regular user. Also, a hover message. It must be clear that when someone gives you a copy of the document with notes, they can be added through this step. So Review can mean review your own notes and add notes from other places. The diff tool must be powerful here, since things and chapters can have been moved or placed in other places. Paragraphs can have been removed or added. What does a note for a deleted text mean in this context?
> Should in this view things be marked? I mean, underlines for unknown words, for example. If they are visible in Write, why aren't they visible here? This view should be more like "there are a lot of things to fix", here they are. Of course, if the one selected is shown in a more intense way, that is okay.
> The keyboard icon doesn't look vertically centered. I'm not still sure if that's the better place for it, it's like a help button and it is mixed with other non-related things.

**S34 · Review all**  `SPEC › S34 · Review all`
> ¶ _“Review all turns the margin into a walk: one card at a time, level with its line, the t…”_
>
> Esc to stop the walk can be confusing. A button to stop it would be better. But what if you go out of this mode? What if you come back? Is walk disabled?
> "4 of 12 · Pending · Marta" could be too long to fit. Also, this is the text I told you before that is too close to the mode tabs, there is no margin.
> Skip and Skip for now: Maybe Skip should be "Dismiss" or similar. It must be clear the note will disappear.
> In this mode, scrolling the right panel to see the full length of the text should be allowed without scrolling the text central panel.
> Sometimes you use a (non-vertically centered) "E" and sometimes you don't. I don't like that E.

**S16 · Plan**  `SPEC › S16 · Plan`
> ¶ _“Plan shows the book as cards, one per scene, in lanes: one lane per chapter, side by si…”_
>
> Why not horizontal lanes? What do you think can grow more? Chapters or scenes? Keyboard shortcuts to navigate and move things around?
> Can all moves be seen somehow? A stack like: "Lena talks to Kit" moved from after "Kit's thoughts" (chapter 5) to after "Lena jumps" (chapter 7). Hard to show it. And with what will break coherence. "3 moves" and "1 issue" may become the same.
> About "Status: draft", where else is it shown? I like it, how to show the writer gives it as finished or working or draft...? Should it be seen in the Chapters panel?
> Issues must have some button or similar to "Add a new task" or a warning saying it will be created.
> New card button should be at some other place. I'd say above the cards table. Right click should also work to add or delete scenes, etc. Delete when selected too.
> Unplaced and discarded should be separate from the rest, with a line or whatever.
> So Unplaced and discarded are seen at the end in Write mode. With a special chapter or even part, I guess. In that sense, I think you said somewhere that a scene that is deleted moves there automatically. It's Ok, unless the writer doesn't want so. What about deleted text? Maybe a right-click item to "Move to discarded".

**S16 · Plan**  `SPEC › S16 · Plan`
> ¶ _“Drag a card to move it; the lane under the pointer lights up, and before you drop, Libr…”_
>
> Continuity: "Vega reads the ledger before Kit finds it", can that be discovered only with Codex, without AI? Will Codex be so powerful? Again, who updates it?

**S16 · Plan**  `SPEC › S16 · Plan`
> How are storylines tracked? I think we don't have tooling for that.
> What about "My labels"? What are they?

**S17 · Research**  `SPEC › S17 · Research`
> ¶ _“Research is where material lives before it is true. The left column is your material: a…”_
>
> How things get to the Inbox? From where?
> How are Research and Codex related? Who links them, topics and entities?

**S17 · Research**  `SPEC › S17 · Research`
> I don't understand "Pin as a fact of...".
> How are folders created?
> Link to... is not clear

**S18 · The Codex**  `SPEC › S18 · The Codex`
> ¶ _“The Codex is what the book says, and it has its own tab because it is neither writing n…”_
>
> How can "about fifty" in chapter 2, "not yet forty" in chapter 8 be found without AI?

**S18 · The Codex**  `SPEC › S18 · The Codex`
> I'll need to see this live.
> I still don't understand when Codex is updated. At the end of the session with AI is not an option, it's when the user closes the software.

**S19 · Research beside the text**  `SPEC › S19 · Research beside the text`
> ¶ _“While writing, you want one thing: the photo of the bar, two facts. Alt+click "Blue Lam…”_
>
> Shouldn't the peek show Codex and Research links?
> As always, you try to put too many things in the right bar title. Restructure it. Maybe a bigger title, a link to Research mode.
> How does clicking to Research in the Blue Lamp peek opens "Bars in the 1950s"? Why not another related research topic?

**S20 · Find and Replace**  `SPEC › S20 · Find and Replace`
> ¶ _“The magnifier in the strip, or Ctrl+F, opens a strip across the top of the page, the ki…”_
>
> The find box is too small. The whole dialog is too big and has many things. We need to make it smaller. Maybe advanced search for more options. Look at how Google Docs do it.
> Whole book/This chapter should not appear in whole book view.
> I'd like the Find dialog to be at the right, under the magnifying glass.
> We need to make sure text is not covered when searching and/or replacing. It must feel simple. Maybe a Replace all button opens a new dialog, same as advanced search. I don't know, but I don't like how it fills the screen with a lot of stuff.
> How does Ask the AI for help button works? Where that help is open?

**S20 · Find and Replace**  `SPEC › S20 · Find and Replace`
> ¶ _“Replace all never replaces blindly: it opens a list of every hit in context, grouped by…”_
>
> Will Codex be updated if the user directly replaces all items? How and when will Codex detect it?
> Doesn't Codex need AI for the first creation (and later updates)?

**S21 · Sharing with a reader**  `SPEC › S21 · Sharing with a reader`
> No, it should be easier to understand.
> 
> Send a copy:
> - Name of the person to share it with (or "With who?"), being clear it is the name of the person to be shared with (with autocomplete if person already exists, making clear it will be added otherwise). Where to keep track of people who read the project?
> - Format: Libreto, Word (, PDF?)
> - Where to save it (or send through email, which could open another window or open user's email).
> 
> Receive a copy:
> It should not allow to set a directory. Or a file or directly the list of candidate files found in Downloads or similar folders. The system should also keep track somewhere of versions shared with it, which are in the project directory. But it is easy for a Word document, not for a Libreto project inside another Libreto project. We must design a way to read and store versions, comments, etc. Maybe instead of storing the Libreto version, only changes should be imported and stored.
> Also, Receive a copy should make it clear it is to compare with current work. Too much text as "What happens", it should not be there, dialog must be clear about what it does.

**S22 · A reader's copy, compared**  `SPEC › S22 · A reader's copy, compared`
> ¶ _“Receiving a copy, or Review ▸ Compare with Marta's copy, opens Compare as a sheet over …”_
>
> Don't use this character: ⌇
> Should it be a version of Review? Actually, it's the same about notes, so the flow (like Review all) should be the same. About changes and double versions, isn't it also needed in regular Review? And I preferred when they were put one next to the other instead of above and below.
> I don't like the "E" button. Better Edit.
> Also, regular review could take advantage of "x paragraphs unchanged" too.
> I mean, should we rather "Add notes from a review file" instead of "Receive a copy"? So they are added to the Review window?
> I think we should rethink these processes. Add a button to import notes from another document in Review mode and make it more straightforward. But then, how to differentiate this version's notes from the rest? What does "Marta" mean if there are two versions of Marta's comments? When a version is just imported, maybe Review window with just those changes should be shown.
> What happens if "x paragraphs unchanged" is clicked? Are those paragraphs unfolded? How to collapse them again?

**S23 · History**  `SPEC › S23 · History`
> Not quite sure... This software is growing fast and many things will only make sense once tested live. Let's see how it behaves.
> For example, what is shown if I click on any link? The place? The change when it was done? What if it doesn't exist anymore now?
> What are snapshots for? What's their use? Can I compare them?
> Should the compare view (pending if it is moved into Review for comments added or not) show both files one next to the other, probably taking all the screen? What to do with them? Can I take things from one or the other? Can I merge them? Will the diff work as expected? What if a chapter was moved to another place? Will the diff still work? It doesn't quite work in GitHub.

**S24 · Book**  `SPEC › S24 · Book`
> ¶ _“Book shows the book as it will print. The left column has page thumbnails, in pairs as …”_
>
> 1-2 switch is not clear. I'd prefer it on the right panel as "Print in two sides" or similar. Thumbnails will change with this switch.
> Page size boxes are too small here, text almost doesn't fit. You are mixing inches with cm here.
> We need a place, probably here with the preview, where we can map work styles to print styles. I don't know how, maybe it must be in settings (project or app?) or here in a dialog. It should be a preview of things. For example: Chapter mark, a lot of tweaks that make sense (like Start in new page), colors, font, etc. That way, Body font here won't be needed at all, it will be defined in Plain style. Some styles must exist always and can't be deleted. Others could be deleted, so mapping could disappear even after set up.
> Chapter head, the same, not needed here but in its place, defining it correctly. We'll offer a nice standard.
> Start chapters on a right-hand page should only appear when two-page setup is chosen (or being grayed out with a hint explaining why).
> Not sure if EPUB and PDF exports are similar at all. About Export as Word, why here we have so many options and not when sharing it? What about comments and similar? Print comments?
> By the way, I only see export here, but it should be for printing too. So what is shown when clicking on a Print menu? This Book mode or something easier to print the working copy?
> Pictures as figures? Is there another option? Same for Footnotes, where should they go if not at the bottom of a page?
> We need to rethink what we really need to export or print a book, what depends on what and how to make it easy for a one-click users and for users that want to tweak it more. We won't get a Word level, because Word gives too much freedom, but we'll do something nice to read.
> In the future, we can think about adding templates that people can share and install or whatever. We could add some predefined ones after doing some research of how books are usually printed or expected.
> Export [arrow]: Remove the arrow.
> cm · change in Settings... It's ugly. Maybe the 22.86 cm could have a link in "cm" to the settings or just a select box that updates settings.
> How would Ask button help here? Can you ask a way to print in words and it tweaks it?

**S25 · The AI, in Settings**  `SPEC › S25 · The AI, in Settings`
> ¶ _“The AI is a tab in Settings, AI, and the gray Ask button opens it. One provider at a ti…”_
>
> The gray Ask button should show Ask without AI. Something in the dialog could link to AI settings.
> Levels are OK, but it should be clearer what they can do.
> I don't like "At the end of a session". It is AI work, it can't happen when the user closes the program and the computer. Maybe better at the start of a session, but then it will be late for some things. Well, they could appear on the go in Review badges. What about limiting money amount? If you have an AI working on the background, you'll never know how much money you are spending. We need plans in apps NOW, Anthropic!
> Now I see it. Do we have an autosave notice or something? Maybe on the status bar: "Saving..." and "Saved at xx:xx".

**S26 · Settings**  `SPEC › S26 · Settings`
> ¶ _“One window, tabs on the left: General, Editor, Keys, AI, Project (this project only: th…”_
>
> Not sure if Project setting must live with app settings... I don't think so. I could not see the rest of Settings windows, so I can't be sure what it contains. A link to Project settings here and to app settings there could help.
> I don't get the "?" button. It doesn't appear anywhere else, right? In this case, Help should open into the current view help.
> Search and Keyboard layout look pretty well.

**S27 · Help**  `SPEC › S27 · Help`
> LGTM. We'll need to create a good and very useful help and see when tutorials are enabled to the user.

**S28 · Statistics**  `SPEC › S28 · Statistics`
> We'll go improving statistics. Codex is a too powerful tool to just offer a couple of data topics.

**S29 · Everything in the status bar and the menus**  `SPEC › S29 · Everything in the status bar and the menus`
> ¶ _“Not a moment: the status bar menus and the ☰ menu's seven menus opened together, to see…”_
>
> What does "book p. 146/248" show when clicked? Must it be a button?
> Whole book and By chapter are not aligned.
> Maybe Strong and Emphasis should be before in the Styles menu. A lot of people will miss them as buttons. And now menus are stacked at the three lines button, finding Format is harder. We could keep on mind menus could return back...

**S29 · Everything in the status bar and the menus**  `SPEC › S29 · Everything in the status bar and the menus`
> Whole book and By chapter should look exclusive.
> You may need to redo Insert menu if you look at my previous comments.

**S30 · Three window sizes**  `SPEC › S30 · Three window sizes`
> I think the second one is wrong. Text should have moved to the right to let space for the panel, right?
> What about mobile view? Would it be usable?
> What about making UI fonts bigger or smaller?

**S31 · Right-click, everywhere**  `SPEC › S31 · Right-click, everywhere`
> Only the menu bar's menus and [...] filter? Where? I didn't see it, not even in Help menu.
> I didn't look at all menus carefully, but we need them to be well done. Everything expected must be there and nothing more.

**S32 · The whole book, or by chapter**  `SPEC › S32 · The whole book, or by chapter`
> ¶ _“The page holds the whole book by default: every chapter on one long page, each heading …”_
>
> Read my previous comments about possible scene titles shown or lines where they begin/end.

**S33 · Notices, Undo and tips**  `SPEC › S33 · Notices, Undo and tips`
> Is "Show me" a link to a tutorial or Help or similar?
> Restore this version looks like "Delete all the work I've been doing and let's go back to one week before", very dangerous.
> The welcome back card should show "Last session:" somewhere. Or "Previously, on The Blue Lamp..." :-)

**What changed in draft 6, and why**  `SPEC › What changed in draft 6, and why`
> ¶ _“Notices stay until "Got it", one at a time, the rest in the bell; the welcome-back card…”_
>
> Good, but if no one notices the note until two hours later (that should not happen) it may not make sense at that point. An X could look better than Got it. And each note closed could be animated to go to history or the bell or wherever it goes.

**What changed in draft 6, and why**  `SPEC › What changed in draft 6, and why`
> ¶ _“Whole book is the default view; By chapter stays as the option.”_
>
> By chapter must be carefully reviewed, in case some UI or semantic stuff don't make sense there.

**What changed in draft 6, and why**  `SPEC › What changed in draft 6, and why`
> ¶ _“Plan: horizontal lanes, Reference panel for the selected card and "+ New card", "moves …”_
>
> I rather see vertical lanes... Next time show me both to choose, with pros and cons.

**What changed in draft 6, and why**  `SPEC › What changed in draft 6, and why`
> ¶ _“Find from the magnifier in the strip, a browser-like strip with checkboxes, a tester fo…”_
>
> Redo the Find and Replace dialog as explained.

**What changed in draft 6, and why**  `SPEC › What changed in draft 6, and why`
> ¶ _“Share is two commands, Send a copy… and Receive a copy…, with date and time and a plain…”_
>
> Should compare be part of Review? Then, how to compare older versions from history? Think of the best way to manage this, please.

**What changed in draft 6, and why**  `SPEC › What changed in draft 6, and why`
> ¶ _“Status bar: "● 12 to review" instead of the fixes count, a ⌨ button for the keys where …”_
>
> Not sure if I like it or if it is in the right place. Maybe just after the zoom slider?

**To the specification**  `SPEC › To the specification`
> Perfect, I missed some answers. They were here! :-)

**Questions**  `SPEC › Questions`
> ¶ _“Six tabs, Codex its own mode. Right split between Research (what you gather) and Codex …”_
>
> Yes, I think so. Too many modes, but let's do it like this for now.

**Questions**  `SPEC › Questions`
> ¶ _“Write shows only underlines and your notes; everything else waits in Review, counted on…”_
>
> Not sure yet. Like this for now.

**Questions**  `SPEC › Questions`
> ¶ _“Four colors. Readers' changes and AI findings are both blue, told apart by the person f…”_
>
> Person or AI must be visible, maybe an icon with the initial or similar.

**Questions**  `SPEC › Questions`
> ¶ _“Whole book as the default view: yes?”_
>
> Yes.

**Questions**  `SPEC › Questions`
> ¶ _“Part / Chapter / Scene, optional and renameable, instead of kinds of text: fine? Should…”_
>
> I explained it before.

**Questions**  `SPEC › Questions`
> ¶ _“☰ menu on Linux and Windows, the system bar on macOS: fine, or always the bar?”_
>
> I think we'll use the regular bar for now.

**Questions**  `SPEC › Questions`
> ¶ _“Notices stay until Got it, one at a time, queued in the bell. Demanding enough to be no…”_
>
> Good question. Maybe a long enough timeout should be set. Or maybe some notices can just go away while others need to be kept until dismissed.

**Questions**  `SPEC › Questions`
> ¶ _“An old Undo only while nothing later touched the same place, otherwise "Restore this ve…”_
>
> Yes, but read my note about how "Restore this version" could sound.

**Questions**  `SPEC › Questions`
> ¶ _“Plan lanes sideways, one per chapter, with the shelf scrolling horizontally: right, or …”_
>
> I asked for horizontal lanes in the sense of one horizontal row per chapter, but you did it vertical. I'd like to see both with pros and cons.

**Questions**  `SPEC › Questions`
> ¶ _“When Libreto reads the book with the AI: end of a session by default, on request otherw…”_
>
> Explained before.

**Questions**  `SPEC › Questions`
> ¶ _“"Don't bother me" in Review all silences a kind of finding for the project. Per project…”_
>
> Per project.

**Questions**  `SPEC › Questions`
> ¶ _“Anonymous usage statistics, off by default: worth having at all in version 1?”_
>
> If it's cheap, let's add it. It should be asked to the user when installing.

**Questions**  `SPEC › Questions`
> ¶ _“Footnotes, figures and a right-hand page start in Book for version 1: confirmed? Indexe…”_
>
> Yes. We don't have examples of footnotes in the text. They should show right at the place where they are generated, in a smaller font, since we don't have pages.

**Questions**  `SPEC › Questions`
> ¶ _“A project sent as one file to a reader who has Libreto: version 1, or later?”_
>
> Maybe later, I explained some problems. For now no one has Libreto yet :-)

<!-- SPEC-NOTES-DOC libreto-screens-d6-v1 -->
<!-- SPEC-NOTES-DATA
{"s-spec-libreto-in-one-minute~pja1li":"When undoing, the right place must be shown, probably at the center of the screen (that can be decided). I've seen applications (Word probably does that) that undo things without showing you what you are undoing, so you never know at which point of the undo stack you are.","s-spec-libreto-in-one-minute~pja1li~q":"One Undo, one notice. Everything that changes the text, yours or Libreto's, is one list…","s-spec-libreto-in-one-minute~1pai06p":"I asked you to put lanes horizontal in Plan mode. I'll see it later, though, maybe it is correct this way.\nShould Research include some kind of browser to search on the Internet? That way, no copy and paste will be needed and no AI will be needed to ask for something.\nShould Codex be editable? Let's look at it later.\nWe could think of adding an importance level to Review items, it could be set by the user or by AI.","s-spec-libreto-in-one-minute~1pai06p~q":"Mode Left Center Right What it is for Write chapters (optional) the text, underlines, y…","s-spec-libreto-in-one-minute~letis8":"Not sure if Esc must directly close them. If some unsaved work is there, that could be dangerous. Let's store that like something to be manually tested. And adding a warning if something wrong can happen. Even more, what if those windows include open cards that go away with Esc? Someone tapping Esc twice could exit the screen, and some of them can be harder to reopen again. Because I understand \"Back\" doesn't include reopening these windows.","s-spec-libreto-in-one-minute~letis8~q":"History, Compare, Statistics and Help are not modes: they open over the window as a she…","s-spec-libreto-in-one-minute":"As a general note, I've been quickly looking into screenshots and I see we are losing our minimalistic approach. I know text is text, and a book with research, codex, comments, etc. is a lot of stuff to manage, but let's try to keep it simple. I'll be commenting each screenshot if I see it too overloaded.","s-spec-s01-start~1f98on":"I don't like having to enter project settings to change elements names. It should be decided beforehand, although also editable later (but with care, the text structure is not the same for a novel than for a play). A notice saying you can change it later in project settings would be nice.\nI'd do it like a simple choose between Book, Play or Essay (or similar). The list must be the minimum possible. Each choice with a list of possible doc types. We should include essays, papers, thesis, novels, short stories, poems, etc. Let's try the list not to be more than three or four choices, but let's use all needed to have all possibilities covered.","s-spec-s01-start~1f98on~q":"When Libreto opens with nothing open, it asks for the least it can: a title and where t…","s-spec-s01-start~yx15sx":"I'd like to make it even clearer, something like \"Choose the place to store your project\", something that can make clear that you don't need to write the project name as the folder name. Or \"Base path to store your project\".","s-spec-s01-start~yx15sx~q":"Under the location there is a label, \"Will be stored in\", and under it the full path on…","s-spec-s01-start~1p93613":"For the tile (no need to call it tile in the UI). I expected a small dialog to choose: a letter with a choosable background color or rather one of a list of predefined images. I expected something more, at least 15 or 20 predefined thematic images that could be used for any book. For example, a hat and a whip for an adventure book, two masks (laughing and sad) for a play, a beach, a ball... I don't know, a list long and representative enough to include any kind of book. Maybe images in two or four colors in a palette. The color must be chosen, so you can choose: a) letter or predefined image, and b) a color as a letter background or to give a version of the chosen simple image in that palette of colors. The style of the drawings must be simple and according to the app design, nothing out of place. Paper, linen, etc could be images that can change color (so, images can include some textures). For now, no AI generated images (except for those that you'll generate now :-). Cover design and setting should be another totally different flow, that we should add later, probably in project settings or similar or in a place that can be understood and easy to find.\nI don't like the message next to \"Create\", I don't think users must know how the software works in the background. A Pro user will need to learn it somewhere else.","s-spec-s01-start~1p93613~q":"Each project gets a tile: a color you pick from a short row, one of a few plain images …","s-spec-s01-start":"The three lines you put as an icon for hidden menus are right, but I expected something like different size lines. I can't find the image anywhere and I can't add it images here yet, so try to get what I mean.","s-spec-s02-write-the-first-minute~rwxaoh":"I don't like how different height underlines show. Let's go back to show them in precedence. If the most important one is red underline, then blue can only be shown around the red underline. If two fixes (for example, red and green) are in the same exact word, then hovering could show both things or the more important one only.","s-spec-s02-write-the-first-minute~rwxaoh~q":"The marks are the thing to look at. In Write the page carries underlines only, on the e…","s-spec-s02-write-the-first-minute~jpgoql":"This kind of tips should be shown here and there, not only once. And I understand F8 and Shift+F8 is similar to how it will work in Review mode, one after another.","s-spec-s02-write-the-first-minute~jpgoql~q":"Hovering any mark, or resting the cursor inside it and pressing Ctrl+., opens the same …","s-spec-s02-write-the-first-minute":"I'm not sure if I like tabs more than buttons as before. Tabs look better at that right place. If we could center it (for example, by removing breadcrumbs), they would look better as mode buttons. In later screenshots I've seen underlined tab and text under it are too close. Not sure, maybe we go back to buttons or another style that make it clear they are one or the others, exclusively.\n\"12 to review\" and \"a click opens Review\", a click on the menu or a click on one of the items?\nThe keyboard button could be a good idea... We'll see it later, I'm not sure. Is there a key to show all keys?\nThe dialog with \"Unknown - leters\" don't show the keys. Also, only \"Add to dictionary\" and \"Make a Codex entry\" (why this one?)? Shouldn't buttons next to \"Did you mean 'letters'?\" also fix or skip it?","s-spec-s03-the-marks-up-close":"I don't like the note icon, let's choose another one. Or another color. Maybe a gray note? What's the best option?\n\"One line, one badge, with a count\", what if they are different badge types?\nUnknown - Harborstreet: It's not clear you can choose a line. Maybe a button or check to show it? Isn't there an option to skip or dismiss? I don't like \"Make a Codex entry\", is this the right place?\nShould AI notes be shown differently before opening?\nWhat happens with replies? Will comments be exported to Word? Maybe that should be set in export options.\nIs \"Done\" the right word? It must make clear the idea \"I read the note and I don't want to do anything with it or I already did it!. AI should help fixing things.","s-spec-s04-coming-back~12qp6ek":"It should say \"Last session\". And how are its buttons chosen? A \"Don't show anymore\" button would help.","s-spec-s04-coming-back~12qp6ek~q":"Libreto reopens exactly as you left it: same mode, same chapter, same columns, the curs…","s-spec-s04-coming-back":"What is shown in Notices? For example, what do the other two lines in your example mean? When did they appear? Are they notices or fixes? How to delete them from the list? Clear the list? Is that list a taste of history?\nWe must make clear what are notices, history items, undo list, comments, notes... Don't mix them.","s-spec-s05-chapters-on-the-left~ln7bcb":"Convert a scene into a chapter? Or too complex and options?\n\"Remove the X mark\". Mark? Title? Separator?\nMay someone want a part starting with a scene without a chapter?\nWhat exactly is Discarded? A list of scenes? A box with any discarded text? If they are stored like scenes, that can make it easier to find, understand and recover them.","s-spec-s05-chapters-on-the-left~ln7bcb~q":"Every row has a right-click menu for its level. A chapter: New chapter before / after, …","s-spec-s05-chapters-on-the-left~pulwml":"Undo and Got it? What about Fix it or Add a task.\nCutting and or pasting text triggers Codex engine (good name for it) to update Codex? We need to determine how Codex is updated.\nI don't like \"+ New chapter\". Why not new scene or new part too? I'm thinking... What about a \"+\" that appears at the right between any two items of the list. Clicking on it shows what can be added at that point (part, chapter, scene). That way, we can clean right-click menu and delete the button at the bottom.\nParts are not needed, so we don't start a book with an automatically added part. But we must allow to add them before the first item and after the last item too.","s-spec-s05-chapters-on-the-left~pulwml~q":"Dragging a row moves it. A line shows where it will land, the pointer refuses only the …","s-spec-s05-chapters-on-the-left":"An X at the chapters search box. And contextual menu must not show some things. Same for the \"+\" I just proposed. They must not work in filter mode.\nI don't understand the \"+ New\" button, I think my option improves that. But yes, that can't be done with keyboard only. Or can it? How to move with keyboard between panels? How to drag and drop things with keyboard? I'm not sure we must allow that, but I can imagine a scene selected and being moved up and down, even changing the chapter, with a keyboard combination. In that case, what about the coherence message? Showing at each step?","s-spec-s06-scene-breaks-typed-and-detec~ucoe7p":"Should scene name be shown after or next to the separator, maybe small and in gray, so it can be renamed right there? Not sure, some writers may just use it as separators.\nCan chapterst,scenes and parts be added via right click?","s-spec-s06-scene-breaks-typed-and-detec~ucoe7p~q":"A scene break is a block like a paragraph: a click selects it with the same selection c…","s-spec-s06-scene-breaks-typed-and-detec":"Will Name the scenes rename existing ones? Otherwise, it must be rename unnamed scenes. Show scenes and Fold all chapters do opposed things? I don't get what the first one means.","s-spec-s07-styles~1j0b93w":"I think Book doesn't yet have styles configuration.\nI know many people can miss Bold, Italics and  Underline buttons at hand, but I don't want them to be like in a regular word processor. Any idea to make it an easy transition for anyone?\nHow does it behave in chapter view if we add a new chapter somewhere?","s-spec-s07-styles~1j0b93w~q":"A style says what a piece of text is (a thought, a letter, a sign on a door, a chapter …","s-spec-s07-styles~1u7ea42":"\"What it is based on\". Should we rethink it? It can grow uncontrolled. If we already have \"Paragraph\" and \"Text\", is that dependency needed? But... How to show texts in bigger fonts, then? Maybe three or four sizes? Biggest, Bigger, Big, Regular, Small? Think of a good way to do it. Background color? Underline? I don't want to make it over complex. It must be simple, but enough to set it up correctly. For example, Chapter heading is serif and Subheading is Sans. Should we have only three types of fonts too? Serif, Sans, Mono? But then we need to only use three font faces in all book.\nSo:\nGive it a name\nChoosing  between Paragraph and Text\nChoosing between three font faces\nChoosing between font sizes\nOptions: Bold, Italic, Underline (?)\nOptions: Indent\nColors: Font, Background, to choose.\nAn example text shown.\n\nShould we add the option to modify basic existing styles (maybe with a Reset)?","s-spec-s07-styles~1u7ea42~q":"The chip at the bottom left always shows the style at the cursor, written in that style…","s-spec-s07-styles":"Right-click Emphasis and Strong shown styled?\nWhat is \"Material (never prints)\"?\nWhat is \"Styles\" in Format menu? Are they in Settings or is it just a window to format all of them? I'd prefer in Settings. But for the project or the app? I choose the app, so it's for the user.","s-spec-s08-ask-type-and-go~5173ju":"What does \"Show people\" do?\nThree words or question mark...? Not sure yet.","s-spec-s08-ask-type-and-go~5173ju~q":"Ctrl+K, or a click on the round button, opens Ask at the bottom right: one box for ever…","s-spec-s08-ask-type-and-go":"What does it mean \"Back returns\"?\nI see \"Chapter 7: Lena's warning\". The text right after it is always a scene, even without a long line? It would be weird a line there, so a chapter always starts with a scene, right? About what I told you of adding a title to a scene separator, how would it be done here?\nSame at the end of a chapter, a scene always ends there, even with no line.\nIs the history button in the dialog a list of previous conversations or questions?\nIf the user uses Ask to get answers from AI, it may feel wrong that Ask line is not always the one selected. Maybe it should always be there selected and the rest accessible with keyboard or mouse. Having to always choose can be hard to understand. I think last line must be always selected and the rest can be chosen.\nWhat about a small notice in the dialog to ask for an AI connection to improve results?\nIs the \"+\" for a new conversation? Close to minimize button looks weird.","s-spec-s09-ask-a-conversation~74mfm":"When minimizing, it goes back to the icon. What happens if the icon is clicked again? Is it reset, does it keep the same conversation? Should we minimize it as a row at the bottom right? What then if Ask is clicked again? Then an X to close and reset it? So minimize and close? only at top right? What about \"+\", then? Where to put it?\nHow \"Show both places\" work?\nThe actions, buttons and links or all tools that can be shown in the chat deserve a spec on themselves.","s-spec-s09-ask-a-conversation~74mfm~q":"When you choose the Ask the AI row, the same panel becomes the conversation. It opens o…","s-spec-s09-ask-a-conversation":"\"[...]\" looks good, but if it's inside the same chapter, it should not take a line but be inline.\nI'd prefer first one (\"Yours\") to be the first button (\"Keep mine\") and second button \"Take proposed\" for proposed. So buttons keep the order of Yours and Proposed texts. How to move through there with the keyboard?","s-spec-s10-hold-alt~1vrea0z":"Do styled passages take place from the left panel?\nNow I see background on texts, let's forget the background color in styles I proposed before. And color should be only for when pressing Alt? I think it's better, don't show colors in text, it's a book and Alt helps with this.\nAlso, don't allow taken colors (red, blue, green, orange/gray) for other styles or things. For example, Places green must be different from fixes green. Otherwise, everything will be mixed up with the same colors. Choose other shades of color for everything and don't allow in the color selection widgets colors that are already taken in the app.\nSome option to search by style?\nWhich key will then be used in Windows? Can't be Alt anyway?\nI see a couple of check marks at the gutter, but no underlined words. They should also be shown when Alt is pressed, even if they were disabled in \"Show\". Alt must show everything.\nThe count doesn't look like the one shown before.\nWhat happens with Alt+right click?","s-spec-s10-hold-alt~1vrea0z~q":"Hold Alt for half a second and the page shows everything Libreto knows about it: people…","s-spec-s11-peek-and-the-reference-panel~1knclkp":"Reference panel title row has many problems: \"Person Lena\" is short here, but other words won't fit. The sparkle icon is not very visible and its function not clear. \"Open in Codex\" link should be different, don't know how.\nHow are Facts from the text and  Facts from Research chosen? There could be hundreds of them! That panel could be very long.\nWe need to make the reference panel really useful or it won't make sense.\nHow much history does that panel Back store? Is it kept between sessions?\nIs \"12 to review\" needed now we show the 12 in Review mode tab?\nI'd like to see what the keyboard button shows, maybe in later screenshots.","s-spec-s11-peek-and-the-reference-panel~1knclkp~q":"Two rules keep the panel from becoming a maze. A link to the text moves the page (and B…","s-spec-s12-everything-open-the-text-in~1uotzmj":"You didn't show \"It was a good lie\" style text at the left gutter.\nIs there an option to make UI font size bigger? Not doc text, it's another thing.\nFloating Ask button is OK, but we need an extra margin at the bottom so panel text is never behind the button.","s-spec-s12-everything-open-the-text-in~1uotzmj~q":"The most Write can show on a 1440 px laptop: chapters on the left, Lena's card on the r…","s-spec-s13-one-key-back-to-the-page-and~1euvh76":"Not sure about Esc here, I don't know if Focus allows to open peeks that disappear with Esc. That could be confusing.","s-spec-s13-one-key-back-to-the-page-and~1euvh76~q":"Ctrl+Shift+H closes both columns and quiets the reveal; the same key brings back what w…","s-spec-s13-one-key-back-to-the-page-and":"If we show keyboards shortcuts in the app, all of them must follow the same style.\nDo we have a Focus button anywhere?","s-spec-s14-a-note-without-leaving-write":"When you click the \"Add note button\" next to a paragraph, the note is for all the paragraph, but if you had some selected text in that paragraph it becomes anchored to that text, right?\nWhat if right panel is open when you click a note icon? Why Ctrl+Shift+M? Is it usual? Why not use N instead of M?","s-spec-s15-review~ayy1zr":"When clicking on an icon or a task on the right panel, do things scroll to the right place?","s-spec-s15-review~ayy1zr~q":"The gutter shows the four badges at the exact line, one per line with a count when a li…","s-spec-s15-review":"Do filters stack? Do all need to be clicked? Or you need Ctrl+click? I prefer not to use Ctrl+click. But filters don't look as filters. Let's give them another look. Also, what if there are a lot of reviewers? A lot of rows of people names?\n\"A count when a line holds several\". What if they are different types? Which icon is shown?\nI don't like the question mark icon. It doesn't look like a question mark. Maybe another font? Or are they SVG files. In that case, try to improve it.\nWhat if you click on a note (the line appears) and you scroll any of the two blocks (text or right panel)? Does the line become diagonal or angled or whatever?\nWhat if nothing is selected? It does not make sense (or does it?) to scroll through the right panel and see notes without knowing where they belong for context. I mean, should scrolling the right panel scroll the text along it? Both solutions can be confusing if not thought.\nImporting a reader's note should be more visible or the user must know how to get there from other places.\nDo Review all starts by the selected one or the first one?\nWe need to improve this screen: filters must look like filters and what are flows must be differentiated, probably at the right: Review all and import comments from someone/a file. It must be clearly understood what \"Import\" and \"comments\" or \"notes\" mean for a regular user. Also, a hover message. It must be clear that when someone gives you a copy of the document with notes, they can be added through this step. So Review can mean review your own notes and add notes from other places. The diff tool must be powerful here, since things and chapters can have been moved or placed in other places. Paragraphs can have been removed or added. What does a note for a deleted text mean in this context?\nShould in this view things be marked? I mean, underlines for unknown words, for example. If they are visible in Write, why aren't they visible here? This view should be more like \"there are a lot of things to fix\", here they are. Of course, if the one selected is shown in a more intense way, that is okay.\nThe keyboard icon doesn't look vertically centered. I'm not still sure if that's the better place for it, it's like a help button and it is mixed with other non-related things.","s-spec-s34-review-all~1sp0vfg":"Esc to stop the walk can be confusing. A button to stop it would be better. But what if you go out of this mode? What if you come back? Is walk disabled?\n\"4 of 12 · Pending · Marta\" could be too long to fit. Also, this is the text I told you before that is too close to the mode tabs, there is no margin.\nSkip and Skip for now: Maybe Skip should be \"Dismiss\" or similar. It must be clear the note will disappear.\nIn this mode, scrolling the right panel to see the full length of the text should be allowed without scrolling the text central panel.\nSometimes you use a (non-vertically centered) \"E\" and sometimes you don't. I don't like that E.","s-spec-s34-review-all~1sp0vfg~q":"Review all turns the margin into a walk: one card at a time, level with its line, the t…","s-spec-s16-plan~23l762":"Why not horizontal lanes? What do you think can grow more? Chapters or scenes? Keyboard shortcuts to navigate and move things around?\nCan all moves be seen somehow? A stack like: \"Lena talks to Kit\" moved from after \"Kit's thoughts\" (chapter 5) to after \"Lena jumps\" (chapter 7). Hard to show it. And with what will break coherence. \"3 moves\" and \"1 issue\" may become the same.\nAbout \"Status: draft\", where else is it shown? I like it, how to show the writer gives it as finished or working or draft...? Should it be seen in the Chapters panel?\nIssues must have some button or similar to \"Add a new task\" or a warning saying it will be created.\nNew card button should be at some other place. I'd say above the cards table. Right click should also work to add or delete scenes, etc. Delete when selected too.\nUnplaced and discarded should be separate from the rest, with a line or whatever.\nSo Unplaced and discarded are seen at the end in Write mode. With a special chapter or even part, I guess. In that sense, I think you said somewhere that a scene that is deleted moves there automatically. It's Ok, unless the writer doesn't want so. What about deleted text? Maybe a right-click item to \"Move to discarded\".","s-spec-s16-plan~23l762~q":"Plan shows the book as cards, one per scene, in lanes: one lane per chapter, side by si…","s-spec-s16-plan~13bslcj":"Continuity: \"Vega reads the ledger before Kit finds it\", can that be discovered only with Codex, without AI? Will Codex be so powerful? Again, who updates it?","s-spec-s16-plan~13bslcj~q":"Drag a card to move it; the lane under the pointer lights up, and before you drop, Libr…","s-spec-s16-plan":"How are storylines tracked? I think we don't have tooling for that.\nWhat about \"My labels\"? What are they?","s-spec-s17-research~16r835u":"How things get to the Inbox? From where?\nHow are Research and Codex related? Who links them, topics and entities?","s-spec-s17-research~16r835u~q":"Research is where material lives before it is true. The left column is your material: a…","s-spec-s17-research":"I don't understand \"Pin as a fact of...\".\nHow are folders created?\nLink to... is not clear","s-spec-s18-the-codex~14msq8i":"How can \"about fifty\" in chapter 2, \"not yet forty\" in chapter 8 be found without AI?","s-spec-s18-the-codex~14msq8i~q":"The Codex is what the book says, and it has its own tab because it is neither writing n…","s-spec-s18-the-codex":"I'll need to see this live.\nI still don't understand when Codex is updated. At the end of the session with AI is not an option, it's when the user closes the software.","s-spec-s19-research-beside-the-text~1vipaqp":"Shouldn't the peek show Codex and Research links?\nAs always, you try to put too many things in the right bar title. Restructure it. Maybe a bigger title, a link to Research mode.\nHow does clicking to Research in the Blue Lamp peek opens \"Bars in the 1950s\"? Why not another related research topic?","s-spec-s19-research-beside-the-text~1vipaqp~q":"While writing, you want one thing: the photo of the bar, two facts. Alt+click \"Blue Lam…","s-spec-s20-find-and-replace~1lfneax":"The find box is too small. The whole dialog is too big and has many things. We need to make it smaller. Maybe advanced search for more options. Look at how Google Docs do it.\nWhole book/This chapter should not appear in whole book view.\nI'd like the Find dialog to be at the right, under the magnifying glass.\nWe need to make sure text is not covered when searching and/or replacing. It must feel simple. Maybe a Replace all button opens a new dialog, same as advanced search. I don't know, but I don't like how it fills the screen with a lot of stuff.\nHow does Ask the AI for help button works? Where that help is open?","s-spec-s20-find-and-replace~1lfneax~q":"The magnifier in the strip, or Ctrl+F, opens a strip across the top of the page, the ki…","s-spec-s20-find-and-replace~1l5vkw5":"Will Codex be updated if the user directly replaces all items? How and when will Codex detect it?\nDoesn't Codex need AI for the first creation (and later updates)?","s-spec-s20-find-and-replace~1l5vkw5~q":"Replace all never replaces blindly: it opens a list of every hit in context, grouped by…","s-spec-s21-sharing-with-a-reader":"No, it should be easier to understand.\n\nSend a copy:\n- Name of the person to share it with (or \"With who?\"), being clear it is the name of the person to be shared with (with autocomplete if person already exists, making clear it will be added otherwise). Where to keep track of people who read the project?\n- Format: Libreto, Word (, PDF?)\n- Where to save it (or send through email, which could open another window or open user's email).\n\nReceive a copy:\nIt should not allow to set a directory. Or a file or directly the list of candidate files found in Downloads or similar folders. The system should also keep track somewhere of versions shared with it, which are in the project directory. But it is easy for a Word document, not for a Libreto project inside another Libreto project. We must design a way to read and store versions, comments, etc. Maybe instead of storing the Libreto version, only changes should be imported and stored.\nAlso, Receive a copy should make it clear it is to compare with current work. Too much text as \"What happens\", it should not be there, dialog must be clear about what it does.","s-spec-s22-a-reader-s-copy-compared~akn8ja":"Don't use this character: ⌇\nShould it be a version of Review? Actually, it's the same about notes, so the flow (like Review all) should be the same. About changes and double versions, isn't it also needed in regular Review? And I preferred when they were put one next to the other instead of above and below.\nI don't like the \"E\" button. Better Edit.\nAlso, regular review could take advantage of \"x paragraphs unchanged\" too.\nI mean, should we rather \"Add notes from a review file\" instead of \"Receive a copy\"? So they are added to the Review window?\nI think we should rethink these processes. Add a button to import notes from another document in Review mode and make it more straightforward. But then, how to differentiate this version's notes from the rest? What does \"Marta\" mean if there are two versions of Marta's comments? When a version is just imported, maybe Review window with just those changes should be shown.\nWhat happens if \"x paragraphs unchanged\" is clicked? Are those paragraphs unfolded? How to collapse them again?","s-spec-s22-a-reader-s-copy-compared~akn8ja~q":"Receiving a copy, or Review ▸ Compare with Marta's copy, opens Compare as a sheet over …","s-spec-s23-history":"Not quite sure... This software is growing fast and many things will only make sense once tested live. Let's see how it behaves.\nFor example, what is shown if I click on any link? The place? The change when it was done? What if it doesn't exist anymore now?\nWhat are snapshots for? What's their use? Can I compare them?\nShould the compare view (pending if it is moved into Review for comments added or not) show both files one next to the other, probably taking all the screen? What to do with them? Can I take things from one or the other? Can I merge them? Will the diff work as expected? What if a chapter was moved to another place? Will the diff still work? It doesn't quite work in GitHub.","s-spec-s24-book~119hbjc":"1-2 switch is not clear. I'd prefer it on the right panel as \"Print in two sides\" or similar. Thumbnails will change with this switch.\nPage size boxes are too small here, text almost doesn't fit. You are mixing inches with cm here.\nWe need a place, probably here with the preview, where we can map work styles to print styles. I don't know how, maybe it must be in settings (project or app?) or here in a dialog. It should be a preview of things. For example: Chapter mark, a lot of tweaks that make sense (like Start in new page), colors, font, etc. That way, Body font here won't be needed at all, it will be defined in Plain style. Some styles must exist always and can't be deleted. Others could be deleted, so mapping could disappear even after set up.\nChapter head, the same, not needed here but in its place, defining it correctly. We'll offer a nice standard.\nStart chapters on a right-hand page should only appear when two-page setup is chosen (or being grayed out with a hint explaining why).\nNot sure if EPUB and PDF exports are similar at all. About Export as Word, why here we have so many options and not when sharing it? What about comments and similar? Print comments?\nBy the way, I only see export here, but it should be for printing too. So what is shown when clicking on a Print menu? This Book mode or something easier to print the working copy?\nPictures as figures? Is there another option? Same for Footnotes, where should they go if not at the bottom of a page?\nWe need to rethink what we really need to export or print a book, what depends on what and how to make it easy for a one-click users and for users that want to tweak it more. We won't get a Word level, because Word gives too much freedom, but we'll do something nice to read.\nIn the future, we can think about adding templates that people can share and install or whatever. We could add some predefined ones after doing some research of how books are usually printed or expected.\nExport [arrow]: Remove the arrow.\ncm · change in Settings... It's ugly. Maybe the 22.86 cm could have a link in \"cm\" to the settings or just a select box that updates settings.\nHow would Ask button help here? Can you ask a way to print in words and it tweaks it?","s-spec-s24-book~119hbjc~q":"Book shows the book as it will print. The left column has page thumbnails, in pairs as …","s-spec-s25-the-ai-in-settings~7nk3jz":"The gray Ask button should show Ask without AI. Something in the dialog could link to AI settings.\nLevels are OK, but it should be clearer what they can do.\nI don't like \"At the end of a session\". It is AI work, it can't happen when the user closes the program and the computer. Maybe better at the start of a session, but then it will be late for some things. Well, they could appear on the go in Review badges. What about limiting money amount? If you have an AI working on the background, you'll never know how much money you are spending. We need plans in apps NOW, Anthropic!\nNow I see it. Do we have an autosave notice or something? Maybe on the status bar: \"Saving...\" and \"Saved at xx:xx\".","s-spec-s25-the-ai-in-settings~7nk3jz~q":"The AI is a tab in Settings, AI, and the gray Ask button opens it. One provider at a ti…","s-spec-s26-settings~1v3rpfq":"Not sure if Project setting must live with app settings... I don't think so. I could not see the rest of Settings windows, so I can't be sure what it contains. A link to Project settings here and to app settings there could help.\nI don't get the \"?\" button. It doesn't appear anywhere else, right? In this case, Help should open into the current view help.\nSearch and Keyboard layout look pretty well.","s-spec-s26-settings~1v3rpfq~q":"One window, tabs on the left: General, Editor, Keys, AI, Project (this project only: th…","s-spec-s27-help":"LGTM. We'll need to create a good and very useful help and see when tutorials are enabled to the user.","s-spec-s28-statistics":"We'll go improving statistics. Codex is a too powerful tool to just offer a couple of data topics.","s-spec-s29-everything-in-the-status-bar~1lr2u20":"What does \"book p. 146/248\" show when clicked? Must it be a button?\nWhole book and By chapter are not aligned.\nMaybe Strong and Emphasis should be before in the Styles menu. A lot of people will miss them as buttons. And now menus are stacked at the three lines button, finding Format is harder. We could keep on mind menus could return back...","s-spec-s29-everything-in-the-status-bar~1lr2u20~q":"Not a moment: the status bar menus and the ☰ menu's seven menus opened together, to see…","s-spec-s29-everything-in-the-status-bar":"Whole book and By chapter should look exclusive.\nYou may need to redo Insert menu if you look at my previous comments.","s-spec-s30-three-window-sizes":"I think the second one is wrong. Text should have moved to the right to let space for the panel, right?\nWhat about mobile view? Would it be usable?\nWhat about making UI fonts bigger or smaller?","s-spec-s31-right-click-everywhere":"Only the menu bar's menus and [...] filter? Where? I didn't see it, not even in Help menu.\nI didn't look at all menus carefully, but we need them to be well done. Everything expected must be there and nothing more.","s-spec-s32-the-whole-book-or-by-chapter~pqis8g":"Read my previous comments about possible scene titles shown or lines where they begin/end.","s-spec-s32-the-whole-book-or-by-chapter~pqis8g~q":"The page holds the whole book by default: every chapter on one long page, each heading …","s-spec-s33-notices-undo-and-tips":"Is \"Show me\" a link to a tutorial or Help or similar?\nRestore this version looks like \"Delete all the work I've been doing and let's go back to one week before\", very dangerous.\nThe welcome back card should show \"Last session:\" somewhere. Or \"Previously, on The Blue Lamp...\" :-)","s-spec-what-changed-in-draft-6-and-why~54bk23":"Good, but if no one notices the note until two hours later (that should not happen) it may not make sense at that point. An X could look better than Got it. And each note closed could be animated to go to history or the bell or wherever it goes.","s-spec-what-changed-in-draft-6-and-why~54bk23~q":"Notices stay until \"Got it\", one at a time, the rest in the bell; the welcome-back card…","s-spec-what-changed-in-draft-6-and-why~6c8wu1":"By chapter must be carefully reviewed, in case some UI or semantic stuff don't make sense there.","s-spec-what-changed-in-draft-6-and-why~6c8wu1~q":"Whole book is the default view; By chapter stays as the option.","s-spec-what-changed-in-draft-6-and-why~kw3f78":"I rather see vertical lanes... Next time show me both to choose, with pros and cons.","s-spec-what-changed-in-draft-6-and-why~kw3f78~q":"Plan: horizontal lanes, Reference panel for the selected card and \"+ New card\", \"moves …","s-spec-what-changed-in-draft-6-and-why~1960wk1":"Redo the Find and Replace dialog as explained.","s-spec-what-changed-in-draft-6-and-why~1960wk1~q":"Find from the magnifier in the strip, a browser-like strip with checkboxes, a tester fo…","s-spec-what-changed-in-draft-6-and-why~142xcod":"Should compare be part of Review? Then, how to compare older versions from history? Think of the best way to manage this, please.","s-spec-what-changed-in-draft-6-and-why~142xcod~q":"Share is two commands, Send a copy… and Receive a copy…, with date and time and a plain…","s-spec-what-changed-in-draft-6-and-why~ux8wm4":"Not sure if I like it or if it is in the right place. Maybe just after the zoom slider?","s-spec-what-changed-in-draft-6-and-why~ux8wm4~q":"Status bar: \"● 12 to review\" instead of the fixes count, a ⌨ button for the keys where …","s-spec-to-the-specification":"Perfect, I missed some answers. They were here! :-)","s-spec-questions~pupdto":"Yes, I think so. Too many modes, but let's do it like this for now.","s-spec-questions~pupdto~q":"Six tabs, Codex its own mode. Right split between Research (what you gather) and Codex …","s-spec-questions~1esdcr4":"Not sure yet. Like this for now.","s-spec-questions~1esdcr4~q":"Write shows only underlines and your notes; everything else waits in Review, counted on…","s-spec-questions~1vglrvw":"Person or AI must be visible, maybe an icon with the initial or similar.","s-spec-questions~1vglrvw~q":"Four colors. Readers' changes and AI findings are both blue, told apart by the person f…","s-spec-questions~yauka6":"Yes.","s-spec-questions~yauka6~q":"Whole book as the default view: yes?","s-spec-questions~n18o7w":"I explained it before.","s-spec-questions~n18o7w~q":"Part / Chapter / Scene, optional and renameable, instead of kinds of text: fine? Should…","s-spec-questions~1dkgxx7":"I think we'll use the regular bar for now.","s-spec-questions~1dkgxx7~q":"☰ menu on Linux and Windows, the system bar on macOS: fine, or always the bar?","s-spec-questions~1b8xvbx":"Good question. Maybe a long enough timeout should be set. Or maybe some notices can just go away while others need to be kept until dismissed.","s-spec-questions~1b8xvbx~q":"Notices stay until Got it, one at a time, queued in the bell. Demanding enough to be no…","s-spec-questions~vcdfmc":"Yes, but read my note about how \"Restore this version\" could sound.","s-spec-questions~vcdfmc~q":"An old Undo only while nothing later touched the same place, otherwise \"Restore this ve…","s-spec-questions~7ewqds":"I asked for horizontal lanes in the sense of one horizontal row per chapter, but you did it vertical. I'd like to see both with pros and cons.","s-spec-questions~7ewqds~q":"Plan lanes sideways, one per chapter, with the shelf scrolling horizontally: right, or …","s-spec-questions~6475dd":"Explained before.","s-spec-questions~6475dd~q":"When Libreto reads the book with the AI: end of a session by default, on request otherw…","s-spec-questions~q6f1da":"Per project.","s-spec-questions~q6f1da~q":"\"Don't bother me\" in Review all silences a kind of finding for the project. Per project…","s-spec-questions~1k5f8u3":"If it's cheap, let's add it. It should be asked to the user when installing.","s-spec-questions~1k5f8u3~q":"Anonymous usage statistics, off by default: worth having at all in version 1?","s-spec-questions~h0bl8x":"Yes. We don't have examples of footnotes in the text. They should show right at the place where they are generated, in a smaller font, since we don't have pages.","s-spec-questions~h0bl8x~q":"Footnotes, figures and a right-hand page start in Book for version 1: confirmed? Indexe…","s-spec-questions~1uqdhuc":"Maybe later, I explained some problems. For now no one has Libreto yet :-)","s-spec-questions~1uqdhuc~q":"A project sent as one file to a reader who has Libreto: version 1, or later?"}
-->