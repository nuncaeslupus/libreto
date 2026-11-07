# Specification notes

_Exported 2026-11-06 · 242 notes._

> Send this file back to continue the review. Notes are embedded as data at the bottom
> so importing this file restores them in the reader.

## Writer Needs Ideas

**A. The writing surface**  `SPEC › A. The writing surface`
> ¶ _“A1. Styles named for what text is: Emphasis, Thought, Letter, Sign ★, Epigraph, Song, F…”_
>
> Yes, we need to have a good bunch of them, but sorted in an easy to find them. And creation of new ones should be easy. Maybe we can have a list of "super-types" (Headings, Song-Poem-Letter, Signs, Thoughts, wording...) so the user says: I need something new, it is a sound a ghost does, or it is an ancient language sign in a labyrinth (so there will be more), so I choose "Onomatopoeia" or "Sign" as the basic type, then I give it a name and I can use it in the future. Then, to differentiate from other signs, I can choose a color or some basic text formatting, but not something very complex. Styles must be easy to find and to use, even with keyboard shortcuts or similar, so writing is fluid, not a lot of clicks. The writer wants to read. Since the AI can read the text and interpret that something is a sign, it can create the new style and add it to the text for the user.
> """
> There was a sign on the wall:
> "You can't pass"
> They read it.
> """
> The AI can find this and change or propose to change it.
> Different styles must be identified. What is a style for, actually? Only to print it nice at the end or it can also help understanding the text structure and our index/codex/bible? We must have a balance on that.

**A. The writing surface**  `SPEC › A. The writing surface`
> ¶ _“A2. Each style has a look per output: Sign is centred capitals on screen, small caps in…”_
>
> As I told before, we need to find a real function to styles and a simple way to create and show and identify them.

**A. The writing surface**  `SPEC › A. The writing surface`
> ¶ _“A3. Inline styles (a word) and block styles (paragraphs), nestable: a Foreign word insi…”_
>
> Ok. I'm beginning to think Markdown could not be the appropriate format and we may need some HTML or something similar to existing docs XML formats. We need to talk more about this.

**A. The writing surface**  `SPEC › A. The writing surface`
> ¶ _“A4. A meaning field per style ("words the character reads, not says"), shown on hover a…”_
>
> Good. We need to find a way to make the manuscript not to be a lot of signs and colors. Or to be able to turn on and off styles or some styling parts.

**A. The writing surface**  `SPEC › A. The writing surface`
> ¶ _“A5. Style inheritance: Dream is based on Narration; change the parent and the children …”_
>
> Ok, but it must be clear for the user without overcomplicating it. I never understood Word's "Based on normal text" or how it was modifiable by the user or what it even implies to have a style based on another one: font? bold? margins? spacing? We need something like that but in a very simplified way, not something complex to understand or to store. Our editor may not have all the power Word has in some aspects, but it will be clear how to use them and easy to understand and master. Think that most writers are only worried in writing. They can add spaces instead of a tabulator or a centered line, they don't worry about margins until they need to show that something is a letter, which here can be aided by AI. So writing must be something very natural, they must be able to write "from the heart", all at once, with grammar or spelling errors or typos and AI can help with that later. Of course, we'll need to save tokens, so everything that can be a script, must be a script (for example, first step is a dictionary lookup for strange words, then an LLM can give it a new look).

**A. The writing surface**  `SPEC › A. The writing surface`
> ¶ _“A6. "Make a style from this": format a passage once, name it, and Libreto finds similar…”_
>
> Ok, always the user even knows what a style is. Otherwise, AI can ask it in a gentle, Clippy way: "It looks you are writing a letter" :-)

**A. The writing surface**  `SPEC › A. The writing surface`
> ¶ _“A7. Style gallery with a live count; click a style to select every use. → E9”_
>
> I understand you mean "Find all uses of 'Poem'", for example. Yes, but it's not so important. Don't waste window space for that, it can be more hidden or shown on hover.

**A. The writing surface**  `SPEC › A. The writing surface`
> ¶ _“A8. Style lint: raw italics with no meaning get a quiet "is this Emphasis or Thought?".…”_
>
> We should think if we even allow to add bold and italics or everything must be a style. I'd like that, but I understand users can miss it or they don't even want to use styles, so it could be asked in a review pass. The AI could be reviewing things while the user writes and store them for a review, that could be proposed at the beginning of a session: "We have some things to review, do you want to look at them now?", with a summary of what they are, sorted by relevance, for example. The user decides if fixing some, all or nothing.

**A. The writing surface**  `SPEC › A. The writing surface`
> ¶ _“A9. Paste filter: foreign formatting is stripped, but bold, italic and headings map to …”_
>
> Ok, an LLM can help if enabled. Otherwise, it must be done with caution.

**A. The writing surface**  `SPEC › A. The writing surface`
> ¶ _“A10. Style picker on one key with fuzzy search ("let" finds Letter); repeat last style;…”_
>
> Yes, they must be sorted in a very useful way: most used, recently used, searchable. I'd like that the user learns to attach to the styles over formatting way, but I know it is wishing too much.

**A. The writing surface**  `SPEC › A. The writing surface`
> ¶ _“A11. A Material style for text that never exports and never counts (notes inside the ma…”_
>
> We must think if we need multiple types of notes: doubt, to do, review, show to editor... I don't know, maybe also create yours in a similar way as styles. So click on the "Add note" button next to the paragraph and it has a text and a type selector. Type could be updated by AI once read the content.
> I'm adding AI to everything and I don't know how context will be used: if we use an LLM with a lot of current context only to evaluate if a note is a "to do" note can waste a lot of tokens. We can evaluate to have small models inside the tool that can do some simple tasks or to use an LLM as a new conversation with the minimum context to understand what to do in a very small call. For example:
> "You must evaluate if the note just written is of a known type or if it could need a new type: This is the note text and this is the paragraph and surrounding texts. Here you have the types of notes the user usually uses and here are the existing types of notes and what each mean".
> That can be a single, free of document context prompt, easy to understand and reply.

**A. The writing surface**  `SPEC › A. The writing surface`
> ¶ _“A12. Styles decide export behaviour: italic in EPUB, underline in manuscript format, le…”_
>
> Good idea. But I don't want to overcomplicate this, the mean user won't create a lot of styles with their way of showing in the app and in the final printed PDF or EPUB and we don't want it for techie users but for writers, so we need to find a way to simplify styles creation and use.

**A. The writing surface**  `SPEC › A. The writing surface`
> ¶ _“A13. Project templates bring their own styles (novel, article, paper later). v1 → Q1”_
>
> Good. We need a very thought list of them, though.
> Style changing must be very accessible but not hiding the real work: writing. That's why I also proposed the concentration mode. Styles can be added later and even by an LLM, so the writer only concentrates in the creative thinking.

**A. The writing surface**  `SPEC › A. The writing surface`
> ¶ _“A14. Clean hybrid editing: no markup visible; Markdown shortcuts still work for those w…”_
>
> Hmm... Maybe. But what if someone wants to write exactly a word surrounded by asterisks and the editor insists on converting it to bold? Maybe pressing backspace or delete or undo can return it to simple text. We need to think about it to not bother any of the two types of users.

**A. The writing surface**  `SPEC › A. The writing surface`
> ¶ _“A15. Faint markup mode for pro users: markup shown at low contrast. Off by default.”_
>
> Can be useful. Like the button in Word that shows all spacing, line jumps, etc.

**A. The writing surface**  `SPEC › A. The writing surface`
> ¶ _“A16. Slash menu: / offers styles, a scene break, a link, a note, a comment.”_
>
> I like it, but what if you want to write a "/"? But the idea is good, a place where what you must use or you may need can be added. Something like Ctrl+Shift+P in VS Code (or whatever is the shortcut). Even the less techie users should be encouraged to learn that shortcut, where they can find the most useful things without even asking the AI. It can be a search box at the top, that also can search the text... Well, not sure, that can be confusing. But let's think about how to do it.

**A. The writing surface**  `SPEC › A. The writing surface`
> ¶ _“A17. Selection toolbar with the few styles and actions used most, ranked by use.”_
>
> Haha, just what I told you above.

**A. The writing surface**  `SPEC › A. The writing surface`
> ¶ _“A18. Expand selection step by step: word, sentence, paragraph, scene, chapter.”_
>
> Hmm... What do you mean? Just to select text? It sounds good, but maybe not too useful or not easy to implement in a non intrusive way. For example, when a word is selected, a three dots menu with some options? Increase selection, copy, paste...
> Well, I like about text editors for coding when they allow me to do Ctrl+W to select a word, for example. Clicking it twice or more could increase the selection. Advanced users could have a lot of these tooling with shortcuts.

**A. The writing surface**  `SPEC › A. The writing surface`
> ¶ _“A19. Move paragraph or scene up and down with a key, without cut and paste.”_
>
> Nice for advanced users. Although this is useful for coding, I didn't use it too much. I'm not sure if moving one paragraph above another one should be that easy, because you'll probably need to adapt both paragraphs. This remembers me a Jupyter Notebook, so text is not other thing than blocks. I don't know if I want a lot of buttons when hovering each paragraph. We must think about it to not overload the screen.

**A. The writing surface**  `SPEC › A. The writing surface`
> ¶ _“A20. Sentence commands: next, delete, swap two sentences.”_
>
> The same, not sure if it is so useful. Advanced users could use it, though. Maybe just a keyboard shortcut, something quite hidden.
> If you mean moving from one sentence to the next one, I don't know if it's that useful, it's like a Ctrl+right arrow but not for words but for sentences... Maybe, but for too advanced users. It's usually easier to move the arrow down and Ctrl+arrow to get to the start of a sentence. Too complicated adding that.

**A. The writing surface**  `SPEC › A. The writing surface`
> ¶ _“A21. Multi-cursor and "select next occurrence".”_
>
> Whoa! That is very coding editor with Alt or similar. As a pro users feature, that could be good, although it will only be used by experienced programmers, which won't exist soon. But the kind of writing for text maybe don't need it. If it doesn't hurt and can't be confused with other keyboard shortcuts, OK.

**A. The writing surface**  `SPEC › A. The writing surface`
> ¶ _“A22. Fold a chapter, scene or block; "fold everything except this scene".”_
>
> I see you are porting a lot of coding editors stuff here :-)
> If not interfering too much and moving the cursor around is not an icon party appearing and disappearing, we can add it. But how do we know where a scene starts and ends? Is AI who adds it automatically? Will that be more useful to have an overview of chapters, scenes, etc. to move around?

**A. The writing surface**  `SPEC › A. The writing surface`
> ¶ _“A23. Split and merge scenes in place: split at the cursor, merge with the next, no copy…”_
>
> I don't quite understand you, but that's because I don't understand how a scene will be shown or set up. If you mean, for example, merging two chapters, 17 and 18 by just removing the chapter mark (whatever it is), I'm not sure if "merging" and "split" can be so useful. To split, I just add a chapter mark. If you mean something more complex, we should talk about it.

**A. The writing surface**  `SPEC › A. The writing surface`
> ¶ _“A24. Footnotes and endnotes edited in place, numbered automatically.”_
>
> Yes, automatic numbering is needed. When you say in place, I understand the user won't see the note at the bottom of the page because the concept of "page" may not even exist here, so it needs some Scrivener-like compilation step. I prefer it, to write the text knowing what everything means, not how it is shown at the end. Something like LaTeX, but in a half-visual way. I think that is more or less the idea behind Scrivener, but it is good. Final formatting must be a last step, which will take care of widow and orphan lines, formatting, margins, spacing, etc. Text must be something the author is comfortable moving around, chapters, blocks of text, the whole text at once, an overview box at the left to move quickly. Even if the user doesn't use chapter names, the AI could add them some mini description to make it clear visually: "Mary and Albert have a discussion". This is very important, the author needs very clear and quick ubication in his text, being with AI help or not. How we structure the whole text (a file for chapter or a whole file) is something to make clear, because not all writers will be able to understand or create new chapters if they can't see what came before and what will be next.

**A. The writing surface**  `SPEC › A. The writing surface`
> ¶ _“A25. Undo and redo everywhere, including binder moves, renames and accepted AI changes …”_
>
> Yes, but easy to understand. For example, not character by character. AI will always be there to help if something is lost. What about redo? It's usual to write something, do too many undos, write a letter by mistake and not being able to do redo because everything is lost. Could we manage that somehow? Making that undo is also undoable? Maybe AI should help here, because the process is complex.

**A. The writing surface**  `SPEC › A. The writing surface`
> ¶ _“A26. Undo tree: undo, type something new, and the old branch is still there.”_
>
> Haha, what I just told you.

**A. The writing surface**  `SPEC › A. The writing surface`
> ¶ _“A27. Selective undo: revert one change from 20 minutes ago and keep what came after.”_
>
> Very interesting, but hard to show.

**A. The writing surface**  `SPEC › A. The writing surface`
> ¶ _“A28. Alternative takes in place: three versions of one sentence or paragraph, cycle wit…”_
>
> Nice! The user needs to learn that this exists, though. Maybe AI can help here, too: "I propose to change this paragraph with something like this" and show a split window in that place with two text blocks to choose.

**A. The writing surface**  `SPEC › A. The writing surface`
> ¶ _“A29. Smart quotes per language: “ ” (English), « » (Spanish, French), „ “ (German).”_
>
> Yes, but the user must be aware of this. Many Spanish writers don't even know what Spanish quotes are and even less how to write them, they are not present in Spanish keyboards and going to "Insert symbol" is not viable. This is the kind of thing AI could do right and easy, but maybe enabling "Spanish quotes" so when I write '"' it writes '«' could work. This should be tested, because it is a mind change for writers and even regular users.

**A. The writing surface**  `SPEC › A. The writing surface`
> ¶ _“A30. Dialogue dash mode for Spanish and other languages: — opens dialogue, spacing and …”_
>
> Yes, it's also a headache. But interpreting what is a dialogue could need AI sometimes. Have you been looking at my literary-critic or docx-fixer projects? :-) Maybe you should, I had a lot of these things born from correcting a real non-techie writer.

**A. The writing surface**  `SPEC › A. The writing surface`
> ¶ _“A31. Per-passage language: a French letter inside a Spanish novel gets French quotes an…”_
>
> Good, but how to indicate this?

**A. The writing surface**  `SPEC › A. The writing surface`
> ¶ _“A32. Dashes, ellipses and apostrophes normalised, with a "fix all" report; one backspac…”_
>
> Yes, very good! It must be intuitive and not intrusive, though.
> Also, if an autocorrection is undone multiple times, maybe an AI system can disable or offer to disable it. Or not even AI, just a counter and a message (Clippy again: "It looks you are trying to avoid this correction often..."). Of course, this is creating a settings dialog that grows fast. I'd like to keep the software very simple, but we can end up with a Word clone, with a lot of options, a map of corrections, etc., and I don't want that. We need to find a balance in EVERYTHING we do in this project: Powerful but simple and easy to understand, setup and use.

**A. The writing surface**  `SPEC › A. The writing surface`
> ¶ _“A33. Spell check and grammar check per language, quiet in draft mode. → B21”_
>
> Good. If we can add AI here, much better, not a static, old Word check.

**A. The writing surface**  `SPEC › A. The writing surface`
> ¶ _“A34. Thesaurus and "word on the tip of my tongue" by description.”_
>
> Haha, I like it. But it can be just an AI chat away.

**A. The writing surface**  `SPEC › A. The writing surface`
> ¶ _“A35. Dictionary of the project: invented words, names and spellings never flagged. → D20”_
>
> Perfect, the problem is how to do it without filling the text with a lot of red underlined words. Or that the options are few and clear when hovering: instead of adding to the dictionary, something like "Don't ask again", but making clear what won't be asked again. Is the word? Is a syntactic use? I think Word marks read for words and blue for grammar and similar. I've noticed that Gmail editor has a sophisticated method right now, we could copy some of that for corrections. Do some research.

**A. The writing surface**  `SPEC › A. The writing surface`
> Some writers don't even know how to create a new chapter or adding a page jump. It must be easy for them to do it. An easily findable button or even just writing "Chapter" should be enough for the AI to help. All of this should be added as mini tutorials in the right moment. For example, the author starts with a title: "Surprise in the night". You can offer to write the title and author in the right way (a template or similar) and also explain "Every time you need to add a new chapter, you have the button here. Or you can ask me to create it". It must be clear that the AI is always there to help with everything, from formatting to research to fix errors... It must be in a discreet place but always accessible.
> We can think about notes and "TODO" messages, so the writer or the AI can propose to fix things that are only half-done or that need a look. The user must have a way to "annotate" his own text with notes, visible or collapsible. For example "Peter said no" and very easily add a note to the sentence or the word "no" that says "He could have said 'maybe', check later". Libreto can understand that as a something to add into the To Do list and propose it at some point. If the user starts a session and asks "What do we need to fix?".
> It is important to know that AI is expensive, so the software must be able to be used with and without it. That's why scripts and automated things must work as a simpler help, that can be enhanced with LLMs and different models.

**B. Views, layout and comfort**  `SPEC › B. Views, layout and comfort`
> ¶ _“B1. Chapter view: one document at a time. v1”_
>
> But very easy to read the next one or to change to full view if the writer gets to the end. For example, small links at the end with "Read next chapter" or "Change to full view to see the whole text"

**B. Views, layout and comfort**  `SPEC › B. Views, layout and comfort`
> ¶ _“B2. Full view: the whole book (or a selection of chapters) as one continuous text, edit…”_
>
> If it is a selection of chapters, it must be clear that there are missing chapters in between and it must be easy to show some or all of them. Similar behavior: show previous/next chapter links or show all hidden chapters.

**B. Views, layout and comfort**  `SPEC › B. Views, layout and comfort`
> ¶ _“B3. Selection view: any set of documents (search results, one character's scenes) shown…”_
>
> Ok, but clearly separated and told where each one belongs to, even with text references: "Jack has already talked to Ellie".

**B. Views, layout and comfort**  `SPEC › B. Views, layout and comfort`
> ¶ _“B4. Split view: the same document twice, or two side by side; a locked reference pane t…”_
>
> Yes, this can help. Even a diff view could help too. So you can see a scene in one and another scene in the other one or you can use it to compare versions or changes done last night, for example.

**B. Views, layout and comfort**  `SPEC › B. Views, layout and comfort`
> ¶ _“B5. Reading view: book-like page, justified, hyphenated, no editing chrome, to read the…”_
>
> Perfect! A "compiled" version.

**B. Views, layout and comfort**  `SPEC › B. Views, layout and comfort`
> ¶ _“B6. Outline view: headings and synopses only; drag to reorder. → F10”_
>
> Would it be useful? Or having them in a left-side box could be enough? But we must also be careful with accidental chapter moving. AI can help here: "Warning! You are moving this and it won't make sense!"

**B. Views, layout and comfort**  `SPEC › B. Views, layout and comfort`
> ¶ _“B7. Dialogue view: only what characters say, filtered by speaker, to check each voice. …”_
>
> Interesting.

**B. Views, layout and comfort**  `SPEC › B. Views, layout and comfort`
> ¶ _“B8. Annotation view: text dimmed, comments and notes listed beside it (revision mode).”_
>
> Yes, but I want it well done. It's hard to know where notes are if they are too long or there are many of them and they don't fit in the page. Maybe double scrolling (main text and comments) may help. With lines to join the text and the comment.

**B. Views, layout and comfort**  `SPEC › B. Views, layout and comfort`
> ¶ _“B9. Sticky headers: current chapter and scene pinned at the top while scrolling.”_
>
> I like it. But it should be disabled by the user. Or shown just as a breadcrumbs, like something smaller when the title is not on screen.

**B. Views, layout and comfort**  `SPEC › B. Views, layout and comfort`
> ¶ _“B10. Page widths: narrow, book page, full width (as in nacho-viewer) ★, plus a draggabl…”_
>
> Good. We need to see if all these options fit. Also, page number is important, even if we work in a write-only (not formatted) mode, so an approximate page number shown somewhere (or in statistics) is needed. Also, "compiling" the text should be easy and quick, so passing from write mode to presentation mode should be easy. Some people need to know the page they are in, although Libreto will discourage that view. Page numbering, headers and footers are another thing that can be complex in Word. We need to understand all typologies (no page number in cover, no page number in first pages, even when they count, how to make them visible or not, what is the front matter part...). Our software is more like LaTeX, you tell what each thing is, not how it looks, so saying "this is the initial quote page" and knowing how to treat it about headers, footers, page numbers is more important than "I want numbers in this page but not in this one". The system must be able to show them in the right place and give the user some control but not too much to not overload it. Later feedback can help us improve. Oh, and now we talk about page numbering and headers, double-page printing with different headers is also important. I see it more like a LaTeX fancy headers package and knowing if the book is to be printed at double-side than something to be set up at the beginning. I see it more like a last step compilation time, like Scrivener, but those options are stored per project so changing to page view already know how to do it.

**B. Views, layout and comfort**  `SPEC › B. Views, layout and comfort`
> ¶ _“B11. Zoom of the text separate from the zoom of the interface ★.”_
>
> Yes, something similar to nacho-viewer. We there have two widths and zoom means increasing font size like in HTML, but maybe some other views (final print-ready view) may mean another thing, just make zoom to the page, which should be shown slightly different, as they are different things. Anyway, text zoom in md view must not imply how it will be printed.

**B. Views, layout and comfort**  `SPEC › B. Views, layout and comfort`
> ¶ _“B12. Themes: light, dark, sepia, time of day; fonts per mode (draft in one, revise in a…”_
>
> Good, but maybe light and dark to start, we don't want to overload. Maybe we can later add a plugin creator to add functionality to the editor and themes would be one of the things. A theme chooser is OK, but not a dirty screen full of options and buttons, so it should be kind of hidden. You change it once, not all day. If you want a time of day theme, that will work too. I can think of typewriter mode, too, for example. Easy to find, easy to understand: this is only to work, printing has nothing to do with a dark view (non techies could think that).

**B. Views, layout and comfort**  `SPEC › B. Views, layout and comfort`
> ¶ _“B13. Right panel with tabs ★: Comments, Notes, Character, Place, Research, Outline, AI.…”_
>
> We need to think the best way to do it, we can't put 10 tabs there. Opening panels with different tools could help. Photoshop has been working with panels a lot of time, we could learn something from them, but the idea is not to overload the screen and make it intuitive, so maybe work modes could change what is seen in the respective panels and the author can learn to change mode to have the right tooling. Even some "Change mode to..." in some tools that could appear when hovering are useful too.

**B. Views, layout and comfort**  `SPEC › B. Views, layout and comfort`
> ¶ _“B14. What a click does ★: click a character name → its card opens in the right panel; c…”_
>
> Yes, but I don't want the user to lose what he had in the panel before. I mean, let's suppose I'm reading and fixing comments, which can be in the right panel. Now I click a character and the right panel becomes a character panel. How do I go back to comments? I don't want the experience to be frustrating and that everything changes when I just want to check something. Floating windows are another option. Right click or double click on some element could open them. AI chat must be context aware, so if the user has a character card open and asks a question, AI must be aware of what is open at that moment, in case it could be useful to the question.
> Another option is back and forward buttons in the panel, but navigation could add more complexity. We need to think it more.

**B. Views, layout and comfort**  `SPEC › B. Views, layout and comfort`
> ¶ _“B15. Workspaces (v1 app type): Write, Plan, Review presets; each remembers its panels, …”_
>
> Yes, but with all we said: moving from one to another must be easy and very intuitive. Last open panels and windows must be remembered.
> And we need a place to put the chat. I'm thinking of right panel at the bottom, but a narrow chat is hard to read. Floating window? A keyboard shortcut that makes a text box appear on top of the text, like Command+Space in macOS?

**B. Views, layout and comfort**  `SPEC › B. Views, layout and comfort`
> ¶ _“B16. Hide everything on one key; the same key brings back the exact layout.”_
>
> Yes, that should be Concentration mode (we can choose another name). It's just the writer and the text. The writer should be comfortable by writing at his own style and then an AI pass can fix everything (double spaces, extra tabs, em dashes, creating chapters when "Chapter" word is found in a line, for example...).

**B. Views, layout and comfort**  `SPEC › B. Views, layout and comfort`
> ¶ _“B17. Panels can be docked, floated or tabbed; any view can go in any panel.”_
>
> Ok, but let's not give too much freedom. It's good that anyone can work the best way, but let's keep some things at their right place so that the software has a style and way of working.
> But yes, we'll need panels, tabs and sections elements implemented that allow for certain things (move, dock, scroll...). We need a system that allows for some freedom.

**B. Views, layout and comfort**  `SPEC › B. Views, layout and comfort`
> ¶ _“B18. Focus mode (as in Opos) ★: everything but the current sentence or paragraph dimmed…”_
>
> Yes, I thought you were talking about this in B16. I think it's only text without any extras or with only visual extras (a comment sign, a character to be clicked...) but no panels or formatting. Keyboard shortcuts will work anyway (bold, titles...).

**B. Views, layout and comfort**  `SPEC › B. Views, layout and comfort`
> ¶ _“B19. Typewriter scrolling: the current line stays at a chosen height.”_
>
> Maybe as optional. All these extras look good and may be useful for some people, but we need a way to enable and disable them that are not a button in a toolbar with lots of buttons or be too hidden in Settings. The balance between simplicity and power again.

**B. Views, layout and comfort**  `SPEC › B. Views, layout and comfort`
> ¶ _“B20. Composition mode: full screen, chosen background and paper width.”_
>
> Is this what I called final printing mode? Like a Word regular mode?

**B. Views, layout and comfort**  `SPEC › B. Views, layout and comfort`
> ¶ _“B21. Draft mode: spell check, grammar and AI hints hidden, so the inner editor stays qu…”_
>
> Ok, maybe.

**B. Views, layout and comfort**  `SPEC › B. Views, layout and comfort`
> ¶ _“B22. Quiet mode: no notifications, no sync badges, no toasts.”_
>
> Not sure about that. Are those notifications from OS or from the app?

**B. Views, layout and comfort**  `SPEC › B. Views, layout and comfort`
> ¶ _“B23. Ambient sound (rain, café, keys). Optional.”_
>
> Weird. Optional.

**B. Views, layout and comfort**  `SPEC › B. Views, layout and comfort`
> ¶ _“Comfort and accessibility”_
>
> Yes, accessibility is very important. Options must be together and findable. AI can help when it sees the user is trying to change zoom or similar and offer to add more options, given the user needs. Same as before, we should be able to use LLMs in low-context mode, just to answer easy questions.

**B. Views, layout and comfort**  `SPEC › B. Views, layout and comfort`
> ¶ _“B24. Dyslexia-friendly fonts and spacing, cream background, line focus (1, 3 or 5 lines…”_
>
> We need to know real needs and not fill it with things that no one will use. But fonts and spacing sounds good.

**B. Views, layout and comfort**  `SPEC › B. Views, layout and comfort`
> ¶ _“B25. Read aloud with word highlighting, from the cursor; "read back my last paragraph" …”_
>
> Yes, with AI, all these things should be easier. I never used those options, so let's stick to the usual ones that have proven they are used.

**B. Views, layout and comfort**  `SPEC › B. Views, layout and comfort`
> ¶ _“B26. Dictation with punctuation commands, and a "clean up dictation" pass.”_
>
> I don't know, if this is useful, perfect. Does it mean even a blind person should be able to write a novel just with accessibility and AI tools?

**B. Views, layout and comfort**  `SPEC › B. Views, layout and comfort`
> ¶ _“B27. Full keyboard use; screen-reader support; high-contrast theme.”_
>
> Ok. As always, how to show that without overloading.

**C. Navigation**  `SPEC › C. Navigation`
> ¶ _“C1. Back and forward across documents, like a browser ★. Always a way back to where the…”_
>
> Yes, but where are those navigation arrows? Does it works also for panels and visible stuff in the screen?

**C. Navigation**  `SPEC › C. Navigation`
> ¶ _“C2. "Back to my text" button whenever a non-text view is open ★.”_
>
> Yes, in a simple way. Maybe a key combination or just a "Text" button always visible. How does it match with modes, workbench tooling, etc.?

**C. Navigation**  `SPEC › C. Navigation`
> ¶ _“C3. Breadcrumbs: Book › Part 2 › Chapter 7 › "The ferry"; each step a menu of its sibli…”_
>
> Sounds good, see my notes about title shown when scrolling. Yes, all breadcrumbs clickable and menus.

**C. Navigation**  `SPEC › C. Navigation`
> ¶ _“C4. Recent places, with a snippet of text around each.”_
>
> That's perfect.

**C. Navigation**  `SPEC › C. Navigation`
> ¶ _“C5. Last edit location on one key.”_
>
> I discovered late VS Code had that option to go to the last edit points. This must be done in a very intuitive way, related to C4.

**C. Navigation**  `SPEC › C. Navigation`
> ¶ _“C6. Open where I left off: same document, same cursor, plus a one-line "where was I". →…”_
>
> Ok.

**C. Navigation**  `SPEC › C. Navigation`
> ¶ _“C7. Command palette: every action by name, fuzzy, with its shortcut shown; also finds d…”_
>
> Yes, I talked about VS Code Ctrl+Shift+P. That would be very useful. It could also be a clickable search box or similar, because not everybody can remember shortcuts.

**C. Navigation**  `SPEC › C. Navigation`
> ¶ _“C8. Quick switcher by title, synopsis or alias.”_
>
> Not sure what you mean, but a summarized version of the text could be a very good addition. For example:
> Chapter 1 [linked]
> Lisa meets her friend. [linked]
> Lisa is informed about her friend's uncle death. [linked]
> Lisa calls his brother. [linked[
> Chapter 2 [linked]
> 
> Just like scenes or similar. I think this is the best way to find something for a writer with a very long text. A search box for this panel could help even more.

**C. Navigation**  `SPEC › C. Navigation`
> ¶ _“C9. Bookmarks for places in the text, searches and documents; numbered bookmarks on keys.”_
>
> Is the user who marks them or is an AI summary as I explained in C8?

**C. Navigation**  `SPEC › C. Navigation`
> ¶ _“C10. Minimap of the book coloured by chapter, point of view, status or comment density.”_
>
> Nice, but we must do it very well if added or it will be more confusing.

**C. Navigation**  `SPEC › C. Navigation`
> ¶ _“C11. Scroll bar marks: search hits, comments, to-dos, mentions of the selected character.”_
>
> I like it. But we must understand if we are in a chapter view or full text view.

**C. Navigation**  `SPEC › C. Navigation`
> ¶ _“C12. Peek: open a linked scene inline without leaving the current place.”_
>
> Very good! A search box with results could allow to go there or add a button to just peek it. The overlapped box (with scroll bar) can be closed by Esc or an X, for example.

**C. Navigation**  `SPEC › C. Navigation`
> ¶ _“C13. Go to first appearance, last appearance, next mention of an entity. → D8”_
>
> Yes, this is our best "codex" tool, knowing where everything is. The AI must use this index to find things with scripts without spending tokens.

**C. Navigation**  `SPEC › C. Navigation`
> ¶ _“C14. Chapter title ↔ its card: click to jump either way ★. → F4”_
>
> Well, we must find a common way to see info about any entity or element by clicking the same kind of link or button. So clicking on a character can show its card (like the peek you just told). Maybe a double click behaves different: instead of showing a peek of the chapter it goes there. The back button can get the writer back to its place.
> Tools like navigation, selection, moving parts, view info associated to something... must be very worked on. They must be 100% intuitive, clear for a new user and also the user must think "how could I live without this before?". We are somehow inventing new tooling that other software could copy one day. Don't just conform with what already exists, let's create new ways to move through complex texts in an easy way, even creating new widgets or elements. For example, this same HTML document I'm editing has a note editor next to each paragraph. I think this is a very useful way to communicate with LLMs, because I can't read a very long text like this and having ideas while I read and then having to remember all of them at the end to write a prompt. This edit box is very useful to me. It could be improved, but I can't leave with these specification documents anymore. This is the feeling writers must have. Everything where they expect it or even where they don't expect but finding it in the right place to make them think: "Wow! This is just what I need now!".

**D. Characters, places and things (the story bible)**  `SPEC › D. Characters, places and things (the story bible)`
> ¶ _“D1. Character card ★: name, aliases, image, description, notes, mentions. v1 (simple card)”_
>
> Yes, and some situations or links to important scenes (ampliable to all scenes or references from that same card).

**D. Characters, places and things (the story bible)**  `SPEC › D. Characters, places and things (the story bible)`
> ¶ _“D2. Optional fields ★: birth date, age, look, job, voice, wants and needs, secrets, rel…”_
>
> Ok, hidden but accessible. Some of them can be AI filled or even having a button to "Fill all fields with actual info from the text" after the writer seeing and approving it. This text is not writer's text, so it can be safely generated. And the other way, if the writer adds something ("she gets angry easily") that is not yet in the text, the AI could suggest at some point "you thought of this character as getting angry easily, but it doesn't happen or only in one place" or add a note or similar for things to review.

**D. Characters, places and things (the story bible)**  `SPEC › D. Characters, places and things (the story bible)`
> ¶ _“D3. Click a name in the text → its card in the right panel ★. v1”_
>
> Or floating, as we talked about. We need to fix this kind of things.

**D. Characters, places and things (the story bible)**  `SPEC › D. Characters, places and things (the story bible)`
> ¶ _“D4. Card sections filled by AI or the writer ★, each AI line marked "inferred, please c…”_
>
> Good, similar to what I said in D2. AI appearances must be at the right moment, never bothering the user Clippy-style.

**D. Characters, places and things (the story bible)**  `SPEC › D. Characters, places and things (the story bible)`
> ¶ _“D5. The card's timeline ★: what the character does and when, key moments, with a short …”_
>
> Yes, the exact contents of each card is something to go iterating. We'll use real novels or texts to be analyzed and then see what is useful, what is too much...

**D. Characters, places and things (the story bible)**  `SPEC › D. Characters, places and things (the story bible)`
> ¶ _“D6. Chapters where they appear ★, with how big the part is (speaks, acts, mentioned).”_
>
> Yes, AI summaries or even script-based info must be everywhere. The writer must know at one sight what he needs to know. Not more, not less. Or short extracts around the mention, for example. But not every line of dialog said by the character. Rather a scene or part with "Dialog with Daisy". We need to know what are scenes in a non-scene text, like a novel, where everything flows. An LLM is needed for that.

**D. Characters, places and things (the story bible)**  `SPEC › D. Characters, places and things (the story bible)`
> ¶ _“D7. Place card ★: description, image from research, the scenes set there, a map pin later.”_
>
> Yep.

**D. Characters, places and things (the story bible)**  `SPEC › D. Characters, places and things (the story bible)`
> ¶ _“D8. Hover card ★: hover a name or place for a short card: image, one-line definition, f…”_
>
> This is what we need to balance. A card at the right or all floating cards? We need to decide what is a query to know something about a character, for example, that can be in a summary, or something that needs a long reading.

**D. Characters, places and things (the story bible)**  `SPEC › D. Characters, places and things (the story bible)`
> ¶ _“D9. Hover only while holding a key, as an option, so reading is never interrupted.”_
>
> Good idea, but most writers won't know that if they are not remembered they can do that.

**D. Characters, places and things (the story bible)**  `SPEC › D. Characters, places and things (the story bible)`
> ¶ _“D10. Items and objects: the ring, the letter, who has it when. → J9”_
>
> Good. And who knows it exists or where it is, when a main character discovers it... It can have advices like "The main character should know about the existence of the crown much before than the third act", for example, although it is opinable.

**D. Characters, places and things (the story bible)**  `SPEC › D. Characters, places and things (the story bible)`
> ¶ _“D11. Groups and organisations (the police, the family).”_
>
> Yes. A first AI pass should decide which entities are needed to be considered. Even it could be the husband family and the wife family.

**D. Characters, places and things (the story bible)**  `SPEC › D. Characters, places and things (the story bible)`
> ¶ _“D12. Terms and glossary entries for invented words; a term links to its definition, as …”_
>
> It could be useful if there is actually a definition in the text.

**D. Characters, places and things (the story bible)**  `SPEC › D. Characters, places and things (the story bible)`
> ¶ _“D13. Card templates per project type; custom fields.”_
>
> Yes, each writer must be able to create new fields and AI has to be able to read and fill them. Even not all characters may need the same fields. For example "Knowledge of family history" can be important for some family members, but not the guy who sells a soda in the store. A way to add a same field to multiple characters/entities? Or just AI decides by looking at other characters fields if other characters need them. Every AI added fields or text must be marked somehow. One thing is what the writer decides and another thing is what AI inferes or adds.

**D. Characters, places and things (the story bible)**  `SPEC › D. Characters, places and things (the story bible)`
> ¶ _“D14. Names detected while writing, without @ ★; known ones linked, new ones offered as …”_
>
> I'm not sure if names must have "@" at all. Maybe they must be autodetected, same as objects, places, etc.

**D. Characters, places and things (the story bible)**  `SPEC › D. Characters, places and things (the story bible)`
> ¶ _“D15. Aliases and nicknames ("the detective", "V.") count as mentions after the writer c…”_
>
> Yes. How and when to ask the writer about this is what we need to decide to not bother the writer too much.
> Oh, another thing. AI must be able, after reading the index/codex/bible/whatever, to tell the writer things that are wrong, writing a full report or adding them to a list of things to check that the writer can go fixing/accepting/refusing one by one or by group. Those reviews could be done regularly, when the user asks or proposed by the AI (or done in the background with some cron task). I imagine the AI right bottom box with a message at the beginning of a session: "I'm here for anything you need. We have tasks to review when you want". I mean, offering but not bothering. With buttons like "Review tasks" or similar. Like Claude Code does with some things, asking questions, etc.

**D. Characters, places and things (the story bible)**  `SPEC › D. Characters, places and things (the story bible)`
> ¶ _“D16. Unlinked mentions: occurrences not yet linked, linked in one click.”_
>
> I don't know what you mean. Links should be done mainly by AI, but of course the user must be able to link them. Maybe with the split screen we mentioned before by dragging an arrow from one section to the other.

**D. Characters, places and things (the story bible)**  `SPEC › D. Characters, places and things (the story bible)`
> ¶ _“D17. Per-character extract: every line of one character in a row, to check voice. → B7”_
>
> Good. AI can give advice if something is out of place. Without bothering, again, maybe user-triggered.

**D. Characters, places and things (the story bible)**  `SPEC › D. Characters, places and things (the story bible)`
> ¶ _“D18. Rename everywhere as one command, with preview, including possessives and plurals. v1”_
>
> Perfect.

**D. Characters, places and things (the story bible)**  `SPEC › D. Characters, places and things (the story bible)`
> ¶ _“D19. Progressions: facts that change over the story (age, injuries, allegiance, what th…”_
>
> Very interesting.

**D. Characters, places and things (the story bible)**  `SPEC › D. Characters, places and things (the story bible)`
> ¶ _“D20. Name checker: names that look or sound alike (Kit/Kat), same initials, overused na…”_
>
> Good. Don't know where or when they'll be shown, but the idea is good. Again, we must dose where AI appears in the tool. 

**D. Characters, places and things (the story bible)**  `SPEC › D. Characters, places and things (the story bible)`
> ¶ _“D21. Name suggestions fitting the period, region and language, avoiding names already u…”_
>
> Very good!

**D. Characters, places and things (the story bible)**  `SPEC › D. Characters, places and things (the story bible)`
> ¶ _“D22. Relationship map: characters as nodes, relationships as labelled links; how they c…”_
>
> Hard to show, I want to see what you propose.

**D. Characters, places and things (the story bible)**  `SPEC › D. Characters, places and things (the story bible)`
> ¶ _“D23. Family tree.”_
>
> Perfect!

**D. Characters, places and things (the story bible)**  `SPEC › D. Characters, places and things (the story bible)`
> ¶ _“D24. Co-occurrence: which characters share scenes, and who has not met whom.”_
>
> That's great. All of this can be used for one of those reports I say. Everything is taken into account and stored and then make a report should be really easy.
> That means that minimum changes to the text may trigger a lot of changes to our database. We need to decide if this is done at the moment it is written, every few minutes, when the user asks something or just session by session.

**D. Characters, places and things (the story bible)**  `SPEC › D. Characters, places and things (the story bible)`
> ¶ _“D25. Show or hide entity highlights ★: all at once, by kind (characters, places, items,…”_
>
> Good to have, hard to do?

**D. Characters, places and things (the story bible)**  `SPEC › D. Characters, places and things (the story bible)`
> ¶ _“D26. Colour per character, used in the text, cards, timeline and corkboard alike.”_
>
> Yes. Don't overload the text with colors, buttons, etc. unless they can be disabled, but yes, a visual way for characters can help a lot. Or I'm thinking even generating character pictures from their descriptions and showing them at some places. For example: "Scene in the restaurant" and a picture of Helen and Tom in that card (and even a bartender).

**D. Characters, places and things (the story bible)**  `SPEC › D. Characters, places and things (the story bible)`
> ¶ _“D27. Part-of-speech highlights for revision: adjectives, adverbs, filler words (as in i…”_
>
> Yes, it's important. We don't want an AI-style final text, but things that are wrong or are repeated a lot, must be fixed.
> A statistics page or some graphics can help the user understand he is abusing of some word, joke or something that can get the reader tired. Or otherwise, where an seeded item or joke must come back. This kind of things are in our literary-critic project.

**D. Characters, places and things (the story bible)**  `SPEC › D. Characters, places and things (the story bible)`
> I'd like to use "Life: use instructions" as an example of novel to see what you can find! :-)
> Characters, timelines, places, knowledge, where they lived... It must be a lot of fun.

**E. Search ★**  `SPEC › E. Search ★`
> ¶ _“E1. Search everything: text, notes, comments, research, cards; results grouped by kind.”_
>
> Yes, but it must be useful. We can't fill the results with things the user doesn't want to see.

**E. Search ★**  `SPEC › E. Search ★`
> ¶ _“E2. Scope chips: this scene, this chapter, the book, notes, research.”_
>
> We need to think of a way to give relevant results to the part of the book that is being worked, even with other parts that reference it.

**E. Search ★**  `SPEC › E. Search ★`
> ¶ _“E3. Smart search on a name ★: first appearance, key moments with AI summary and fragmen…”_
>
> Again, it is very interesting, but maybe we need to give the right dose of everything. For example, you search for "paul" and you get a result "Character: Paul Wilson", that you can click and see its card. Then, just word results in the text. Maybe "... and Paul said he was his father..." with a note like "Chapter 7" and a short summary like "Paul and Emma talk sincerely", which can be a scene description or similar. But, of course, you also need to be able to look just for all "Paul" occurrences and go from one to another with intro.. So maybe two search modes: word and concept? Word like a regular text editor and concept as for characters, scenes... NEeds thinking. 

**E. Search ★**  `SPEC › E. Search ★`
> ¶ _“E4. Search by meaning: "the scene where they argue about money" (AI). → K19”_
>
> Very needed. But it would be like a simple AI chat. But without chat, only a search result. Can be useful.

**E. Search ★**  `SPEC › E. Search ★`
> ¶ _“E5. Search by metadata: point of view is Vega, status is draft, contains "ferry".”_
>
> Complex, this I think AI will do it better, no one will be filling multiple form fields and which fields to choose?

**E. Search ★**  `SPEC › E. Search ★`
> ¶ _“E6. Saved searches that update themselves (collections).”_
>
> Hmm... Maybe. This suggest something greater, like themes or concepts that can be saved and checked.

**E. Search ★**  `SPEC › E. Search ★`
> ¶ _“E7. Find and replace with a preview of every hit and a checkbox per hit.”_
>
> Do you mean a regular Find and replace like any text processor? Or a list of results with yes or no? That looks tedious for the user. I prefer some well-thought buttons like "Replace and continue to next", "Skip and continue to next". This is usually a pain in Word. You have a floating window that always covers the text it found, then you want to edit a text by yourself, then you must move focus again to the dialog, but the button is not selected... It must be intuitive and easy to navigate. I prefer the search/replace box at the top, for example, and an intuitive and easy way to move focus between search box and text. If we can solve that, we have a good win. For example, another button with those two "Edit text" and a key for each one. Then we need a way to go back to the search box.

**E. Search ★**  `SPEC › E. Search ★`
> ¶ _“E8. Search results as one editable text. → B3”_
>
> I don't get it, do you mean as a text box over the text as the temporary focus that then can be closed?

**E. Search ★**  `SPEC › E. Search ★`
> ¶ _“E9. Search by style: every Letter, every Sign. → A7”_
>
> Yes, I think we talked about this.

**E. Search ★**  `SPEC › E. Search ★`
> ¶ _“E10. Ask the book ★: "When did Vega last see Kit?" → answer with links to the scenes. →…”_
>
> Yes, that is the powerful feature of AI or of our bible/codex/whatever.

**E. Search ★**  `SPEC › E. Search ★`
> ¶ _“E11. Restore a deleted paragraph by searching its text in history. → I5”_
>
> This can be hard to implement and make clear. Here AI can help a lot, but there should be a manual way to do all things that AI can do.

**F. Planning and structure ★**  `SPEC › F. Planning and structure ★`
> ¶ _“F1. Binder: parts, chapters, scenes, drag to reorder. v1”_
>
> We need definitions of parts, chapters, scenes. And moving around should return an AI response about if that is possible.

**F. Planning and structure ★**  `SPEC › F. Planning and structure ★`
> ¶ _“F2. Status per document: idea, draft, revised, final. v1”_
>
> Ok, I'm not expert on this, if it is the regular way, it's good. But then we must show it? When to change it? AI helps the transition? A writer must be able to work without them, though, just writing.

**F. Planning and structure ★**  `SPEC › F. Planning and structure ★`
> ¶ _“F3. Synopsis per document, from one line to a page, written by the writer or summarised…”_
>
> Good, it helps searching or understanding structure. If the writer can see all chapters at a glance with their short description, it can help understanding the whole text and finding possible flaws. Even those flaws could be identified and shown in that view or toggle them.

**F. Planning and structure ★**  `SPEC › F. Planning and structure ★`
> ¶ _“F4. Chapter title ↔ its card ★: one object, two views. → C14”_
>
> We talked about that.

**F. Planning and structure ★**  `SPEC › F. Planning and structure ★`
> ¶ _“Corkboard ★”_
>
> I don't know if many people uses them, so it is an optional feature. It can be autogenerated with real text content, similar to what we said at F3.

**F. Planning and structure ★**  `SPEC › F. Planning and structure ★`
> ¶ _“F5. Cards are scenes or ideas ★; an idea card has no text yet and can become a scene la…”_
>
> Yes, it's a way to start for some people. There will be writers that write up-to-down and others that write down-to-up.

**F. Planning and structure ★**  `SPEC › F. Planning and structure ★`
> ¶ _“F6. Card content ★: title, synopsis, colour, image, status stamp, characters and place …”_
>
> Final fields to be reviewed, but yes, that's the idea.

**F. Planning and structure ★**  `SPEC › F. Planning and structure ★`
> ¶ _“F7. Easy add ★: double click or one key adds a card; type and press Enter for the next.”_
>
> Not sure, but similar to that. Intuitive and easy to do.

**F. Planning and structure ★**  `SPEC › F. Planning and structure ★`
> ¶ _“F8. Move, sort and snap ★: grid with snap, or free placement; sort by order, status, po…”_
>
> Yes, but without overloading the UI. As always, intuitive and clear.

**F. Planning and structure ★**  `SPEC › F. Planning and structure ★`
> ¶ _“F9. Freeform shuffle, then "apply order" ★: the book changes only when the writer commits.”_
>
> Good idea, a Save button with an "Are you sure?" message and a warning if the user wants to go out of the page. The implications of moving things must be known, because almost any act of the user to the text, cards, etc. must be reviewed by our system and alerts triggered.

**F. Planning and structure ★**  `SPEC › F. Planning and structure ★`
> ¶ _“F10. Links between cards ★ with labels: "sets up", "pays off", "because of", "mirrors".…”_
>
> Yes, probably good idea. But I think the original corkboard is just an ordered set of cards that mean scenes. We could tweak it to make it more useful, but we should find the way to do it and only if it is better than the original one.

**F. Planning and structure ★**  `SPEC › F. Planning and structure ★`
> ¶ _“F11. Stacks: several cards in one, fanned out on hover.”_
>
> Not bad. Actually, they are usually distributed in Acts I, II and III, but you should be able to create lanes and stack them.

**F. Planning and structure ★**  `SPEC › F. Planning and structure ★`
> ¶ _“F12. Swimlanes by plotline, character or point of view; drag between lanes to change it.”_
>
> Interesting but hard to implement. Surprise me!

**F. Planning and structure ★**  `SPEC › F. Planning and structure ★`
> ¶ _“F13. Zoom levels: far shows titles, middle synopses, close the text itself.”_
>
> Good.

**F. Planning and structure ★**  `SPEC › F. Planning and structure ★`
> ¶ _“F14. Several boards per project (ideas board, act 2 board), and nested boards.”_
>
> Could be if that does not over-complicate things and is harder to understand.

**F. Planning and structure ★**  `SPEC › F. Planning and structure ★`
> ¶ _“F15. Moodboard: images, colours, quotes and links on one board.”_
>
> Not sure, let's keep the idea.

**F. Planning and structure ★**  `SPEC › F. Planning and structure ★`
> ¶ _“F16. Outline with columns: point of view, place, story date, words, target, status; sor…”_
>
> Good. Again, KISS. I don't quite get it.

**F. Planning and structure ★**  `SPEC › F. Planning and structure ★`
> ¶ _“F17. Structure templates as overlays, not cages: three acts, Save the Cat, Hero's Journ…”_
>
> I read Save the Cat, that's why I know the corkboard. If you mean there are multiple ways, OK. Maybe not in a first version, but it's a good idea.

**F. Planning and structure ★**  `SPEC › F. Planning and structure ★`
> ¶ _“F18. Beat ruler: where beats fall on the word count ("midpoint at 50%, yours at 62%").”_
>
> Good!

**F. Planning and structure ★**  `SPEC › F. Planning and structure ★`
> ¶ _“F19. Plot grid: plotlines × chapters, gaps where a thread goes silent.”_
>
> Yes, everything that can help see visually how it works will be good.

**F. Planning and structure ★**  `SPEC › F. Planning and structure ★`
> ¶ _“F20. Reverse outline from the draft: AI summarises each scene into a card. For improvis…”_
>
> Exactly!

**F. Planning and structure ★**  `SPEC › F. Planning and structure ★`
> ¶ _“F21. Outline ↔ draft diff: cards with no scene, scenes with no card, cards that no long…”_
>
> If you mean a review to help see what is missing, OK.

**F. Planning and structure ★**  `SPEC › F. Planning and structure ★`
> ¶ _“F22. Outline branches: "version B, the bartender lies", kept beside the main plan.”_
>
> Is it for decisions as in our video games or just as alternative endings to be decided?

**F. Planning and structure ★**  `SPEC › F. Planning and structure ★`
> ¶ _“F23. Scene fields (optional): goal, conflict, outcome; value shift; purpose.”_
>
> Yes, that was in part the sense of the corkboard.

**F. Planning and structure ★**  `SPEC › F. Planning and structure ★`
> ¶ _“F24. Arc tracker: want and need, lie and truth, a "what changed" line per scene.”_
>
> Good, writing techniques. We'll need a way to show all of these things you propose in an easy to understand way.

**F. Planning and structure ★**  `SPEC › F. Planning and structure ★`
> ¶ _“F25. Story timeline: scenes on story time instead of book order; flashbacks show the ga…”_
>
> Nice!

**F. Planning and structure ★**  `SPEC › F. Planning and structure ★`
> ¶ _“F26. Reading order and story order side by side; drag on either.”_
>
> Perfect! Hard to implement and make it clear?

**F. Planning and structure ★**  `SPEC › F. Planning and structure ★`
> Let's also think about writers who write all at once. How structure and corkboards can help them once they have already written all or most.

**G. Capture, notes and research**  `SPEC › G. Capture, notes and research`
> ¶ _“G1. Capture inbox: one key (and later phone) drops a thought into the project or an "un…”_
>
> Brainstorming must be a good place to start something. It must be treated as a part of the process (if the writer wants it). AI chats can be done inside the app, instead of on their respective websites. That can help organizing information.

**G. Capture, notes and research**  `SPEC › G. Capture, notes and research`
> ¶ _“G2. Each capture keeps its context: date, what was open, source link.”_
>
> Good!

**G. Capture, notes and research**  `SPEC › G. Capture, notes and research`
> ¶ _“G3. "Sort the inbox" now and then: each item to a card, a note, research or the bin.”_
>
> Perfect! Who proposes to not forget paused things.

**G. Capture, notes and research**  `SPEC › G. Capture, notes and research`
> ¶ _“G4. Scraps bin: loose lines and dialogue, searchable, draggable into scenes. Never expo…”_
>
> Yesss!

**G. Capture, notes and research**  `SPEC › G. Capture, notes and research`
> ¶ _“G5. Ideas garden: idea cards with a status (seed, growing, ready) and links to fragments.”_
>
> Not sure. Is this a usual tool? At the end, people wants to write things and ideas and put them "in production", so these status can be too much.

**G. Capture, notes and research**  `SPEC › G. Capture, notes and research`
> ¶ _“G6. Notes as full documents, linkable from anywhere. v1”_
>
> Ok. Now you talk about links, which shape will links have in the app?

**G. Capture, notes and research**  `SPEC › G. Capture, notes and research`
> ¶ _“G7. Research folder: images, PDFs, web clips, audio. v1”_
>
> Yes, and links.

**G. Capture, notes and research**  `SPEC › G. Capture, notes and research`
> ¶ _“G8. Web clipper: page, quote or image into research, with the source.”_
>
> Nice.

**G. Capture, notes and research**  `SPEC › G. Capture, notes and research`
> ¶ _“G9. Facts with sources: hover a fact in the text to see where it came from.”_
>
> Very interesting, opos-like.

**G. Capture, notes and research**  `SPEC › G. Capture, notes and research`
> ¶ _“G10. Placeholders: [CHECK: train speed 1920] or TK while drafting; collected as a to-do…”_
>
> Yes. Types must be known or easily selectable.

**G. Capture, notes and research**  `SPEC › G. Capture, notes and research`
> ¶ _“G11. Research visible while writing: pinned in the side panel or split view. → B4”_
>
> We need a way to make it intuitive and not bothering.

**G. Capture, notes and research**  `SPEC › G. Capture, notes and research`
> ¶ _“G12. Period profile: prices, slang, technology for the story's time; optional anachroni…”_
>
> Yes, research must be part of the process. Everything in the app must follow the same goal. Just like integral-job-search repo. Look at how it is conceived, a list of steps, just here there are no ordered steps, everything is iterative (there it is too).

**G. Capture, notes and research**  `SPEC › G. Capture, notes and research`
> ¶ _“G13. Images with pins (a floor plan of the Blue Lamp) linked to places and scenes.”_
>
> Good, I could improve drawspec to draw simple architectural plans.

**G. Capture, notes and research**  `SPEC › G. Capture, notes and research`
> ¶ _“G14. Voice memos with transcription.”_
>
> Positive for some people.

**H. Comments and annotations**  `SPEC › H. Comments and annotations`
> ¶ _“H1. Comments on a paragraph or words, with threads and resolve. v1”_
>
> Good, but simple.

**H. Comments and annotations**  `SPEC › H. Comments and annotations`
> ¶ _“H2. Comment types: To do, Check fact, Continuity, Cut?, Idea. Filterable and counted.”_
>
> Yes, already talked.

**H. Comments and annotations**  `SPEC › H. Comments and annotations`
> ¶ _“H3. Comments from people and from AI, clearly told apart. v1”_
>
> Ok.

**H. Comments and annotations**  `SPEC › H. Comments and annotations`
> ¶ _“H4. Inline notes to self, hidden on export, listed as to-dos.”_
>
> Yes.

**H. Comments and annotations**  `SPEC › H. Comments and annotations`
> ¶ _“H5. Material text inside the manuscript that never exports. → A11”_
>
> What exactly?

**H. Comments and annotations**  `SPEC › H. Comments and annotations`
> ¶ _“H6. Comment ↔ note ↔ card links: a comment can grow into a note. v1”_
>
> What's the difference between comments and notes? I was treating them as the same in my previous notes.

**H. Comments and annotations**  `SPEC › H. Comments and annotations`
> ¶ _“H7. Comment heatmap: where comments cluster, by reader.”_
>
> Nice, a statistics module?

**H. Comments and annotations**  `SPEC › H. Comments and annotations`
> ¶ _“H8. Reaction marks from readers: laughed, cried, confused, bored.”_
>
> Good idea, simple comments or even emojis.

**H. Comments and annotations**  `SPEC › H. Comments and annotations`
> ¶ _“H9. Revision task list: every open comment and to-do of the book in one list, linked to…”_
>
> Yes, talked about this before.

**H. Comments and annotations**  `SPEC › H. Comments and annotations`
> ¶ _“H10. Comments survive Word round trips. v1 → O3”_
>
> Perfect! Importing from Word and a passing a process to convert.

**I. Revision and history**  `SPEC › I. Revision and history`
> ¶ _“I1. Snapshots per document or book, with a name and reason; automatic before risky oper…”_
>
> Automatic and manual.

**I. Revision and history**  `SPEC › I. Revision and history`
> ¶ _“I2. Compare any two versions side by side, at word level. v1”_
>
> Good, but what's the use of this? It's not a doc but a project. Good for versions in the sense of  old and new versions of a text inside the project.

**I. Revision and history**  `SPEC › I. Revision and history`
> ¶ _“I3. Named versions: "Sent to the editor, 3 March".”_
>
> Good, but easy to do for non-techies. Some writers don't even know how to create or save files with new names. Export and send by email should be fully integrated. Names created at export or hare time.

**I. Revision and history**  `SPEC › I. Revision and history`
> ¶ _“I4. "What changed since I sent it": diff against the last export.”_
>
> Yesss! Very important. Or with exported docx versions sent to another person which come back annotated. How to import  a docx with comments without the processing step, just to compare notes and possible editions. They must be added as comments if the user wants it.

**I. Revision and history**  `SPEC › I. Revision and history`
> ¶ _“I5. History timeline per document with a slider.”_
>
> Perf! With some comments about what changed.

**I. Revision and history**  `SPEC › I. Revision and history`
> ¶ _“I6. Cut file: every large deletion saved with its origin, searchable.”_
>
> Yes.

**I. Revision and history**  `SPEC › I. Revision and history`
> ¶ _“I7. Branches for a big rewrite ("first person"): keep or drop it, like a copy that know…”_
>
> Ok, but well done and easy to understand.

**I. Revision and history**  `SPEC › I. Revision and history`
> ¶ _“I8. Scene variants: two versions of a scene kept, one chosen for the book. → A28”_
>
> Yes, two versions, as two different endings.

**I. Revision and history**  `SPEC › I. Revision and history`
> ¶ _“I9. Revision passes with colours: first pass, second pass.”_
>
> Ok. Revisions by the author, editor, reviewer...?

**I. Revision and history**  `SPEC › I. Revision and history`
> ¶ _“I10. Revision progress: scenes revised in this pass, a bar for the pass.”_
>
> It can add discipline for the author, who could be reviewing forever s passage.

**I. Revision and history**  `SPEC › I. Revision and history`
> ¶ _“I11. Revision plan: "target outline" against the current one, turned into a task list (…”_
>
> Yes, the discipline in clear tasks.

**I. Revision and history**  `SPEC › I. Revision and history`
> ¶ _“I12. Guided revision path: big picture → scenes → lines → polish, one step at a time.”_
>
> Yess! Very good idea.

**I. Revision and history**  `SPEC › I. Revision and history`
> ¶ _“I13. Editorial letter → linked checklist: paste the editor's notes, each point becomes …”_
>
> Yes! Yes! Full integration! Everything to help the same goal. It must be easy to export, send, receive and import, even Gmail integration or Claude checking it.

**I. Revision and history**  `SPEC › I. Revision and history`
> ¶ _“I14. "Good enough, move on": a gentle note after the tenth revision of the same chapter…”_
>
> Yep.

**J. Continuity and analysis**  `SPEC › J. Continuity and analysis`
> ¶ _“J1. Continuity check that runs like a spell checker, quietly: eye colour, ages, names, …”_
>
> Yes, we talked about that.

**J. Continuity and analysis**  `SPEC › J. Continuity and analysis`
> ¶ _“J2. Contradictions can be marked "on purpose" (a lie, a rumour, an unreliable narrator)…”_
>
> Yes, but how?

**J. Continuity and analysis**  `SPEC › J. Continuity and analysis`
> ¶ _“J3. Story calendar: dates and weekdays, seasons, moon phases; travel times that make se…”_
>
> Perfect-

**J. Continuity and analysis**  `SPEC › J. Continuity and analysis`
> ¶ _“J4. Ages computed from birth dates and scene dates, shown everywhere.”_
>
> Good, everything that can be checked must be.

**J. Continuity and analysis**  `SPEC › J. Continuity and analysis`
> ¶ _“J5. Who knows what, and when: warns when a character uses something they cannot know yet.”_
>
> Good.

**J. Continuity and analysis**  `SPEC › J. Continuity and analysis`
> ¶ _“J6. Where everyone is: a character × time grid.”_
>
> Yes.

**J. Continuity and analysis**  `SPEC › J. Continuity and analysis`
> ¶ _“J7. Dead or absent characters who reappear.”_
>
> Ok. Or name changes.

**J. Continuity and analysis**  `SPEC › J. Continuity and analysis`
> ¶ _“J8. Setups and payoffs: planted and fired, linked both ways; unfired setups flagged. → F10”_
>
> Yes.

**J. Continuity and analysis**  `SPEC › J. Continuity and analysis`
> ¶ _“J9. Objects: who has the ring when; dropped and suddenly held again.”_
>
> Ok.

**J. Continuity and analysis**  `SPEC › J. Continuity and analysis`
> ¶ _“J10. Open questions the text raises (who took the letter?) and where they close.”_
>
> Yes.

**J. Continuity and analysis**  `SPEC › J. Continuity and analysis`
> ¶ _“J11. Forgotten characters: absent for 80 pages; forgotten threads: silent for 6 chapters.”_
>
> Ok.

**J. Continuity and analysis**  `SPEC › J. Continuity and analysis`
> ¶ _“J12. Moving a chapter checks what it breaks: a fact used before it is introduced, timel…”_
>
> Exactly.

**J. Continuity and analysis**  `SPEC › J. Continuity and analysis`
> ¶ _“J13. Point of view and tense consistency.”_
>
> Good.

**J. Continuity and analysis**  `SPEC › J. Continuity and analysis`
> ¶ _“J14. Style sheet built automatically for the copy editor: spellings, hyphenation, chara…”_
>
> Good.

**J. Continuity and analysis**  `SPEC › J. Continuity and analysis`
> ¶ _“J22. Custom checks: the writer writes a rule ("flag 'suddenly'") and it becomes a highl…”_
>
> Good, but how?

**J. Continuity and analysis**  `SPEC › J. Continuity and analysis`
> All good. The analysis can generate a full report and/or add it to the tool as individual notes or checks. It can be after reading and commenting the report or automatically.

**K. AI help**  `SPEC › K. AI help`
> ¶ _“K1. A chat that knows the open scene, in a right-panel tab, closable. ★ → B13”_
>
> Good, discreet but easily findable for users that use it like a pro.

**K. AI help**  `SPEC › K. AI help`
> ¶ _“K2. Through Claude Desktop ★ (v1): "Connect Claude" registers Libreto's MCP server; the…”_
>
> Try to use it inside.

**K. AI help**  `SPEC › K. AI help`
> ¶ _“K3. Link Claude Desktop to a project ★: the app writes the MCP config for the open proj…”_
>
> Good if nothing better.

**K. AI help**  `SPEC › K. AI help`
> ¶ _“K4. "Open this in Claude": a button that copies a ready prompt plus a link to the chapt…”_
>
> Similar to literary-critic.

**K. AI help**  `SPEC › K. AI help`
> ¶ _“K5. Optional in-app chat with an API key, for those who want everything in one window.”_
>
> That is the objective.

**K. AI help**  `SPEC › K. AI help`
> ¶ _“K6. Margin dot: a tiny mark where the AI has something; nothing more until hovered.”_
>
> Not a bad idea.

**K. AI help**  `SPEC › K. AI help`
> ¶ _“K7. Editor's inbox: findings batched and delivered at natural breaks (end of session, a…”_
>
> Do you mean AI as an editor? Should we give AI a name?

**K. AI help**  `SPEC › K. AI help`
> ¶ _“K8. Command palette and right-click "Ask about this" for every AI action. → C7”_
>
> It's an option.

**K. AI help**  `SPEC › K. AI help`
> ¶ _“K9. Status bar: what the AI can see (chapters 1–12, cards, style guide), and a privacy …”_
>
> Curious...

**K. AI help**  `SPEC › K. AI help`
> ¶ _“K10. Snooze AI for 25 or 60 minutes.”_
>
> Really needed?

**K. AI help**  `SPEC › K. AI help`
> ¶ _“K11. A "no prose" switch: every feature that writes prose disappears from the interface.”_
>
> You mean written by AI?

**K. AI help**  `SPEC › K. AI help`
> ¶ _“K14. Add text ★, only on request, as a proposal: describe, expand, fill a placeholder.”_
>
> The writer can set up an AI working level.

**K. AI help**  `SPEC › K. AI help`
> ¶ _“K19. Search by meaning (E4).”_
>
> What exactly?

**K. AI help**  `SPEC › K. AI help`
> ¶ _“K21. Summaries: scene, chapter, "story so far".”_
>
> And "What did we do last session?".

**K. AI help**  `SPEC › K. AI help`
> ¶ _“K28. Voice check: does this line sound like Lena?”_
>
> Or do all characters sound the same?

**K. AI help**  `SPEC › K. AI help`
> ¶ _“K29. Rename, restyle, retag as commands (the AI uses the same commands as the writer). v1”_
>
> Could the refactor or extract function VS Code concepts be ported here somehow?

**K. AI help**  `SPEC › K. AI help`
> ¶ _“K31. "Previously on…" after a long break.”_
>
> How to identify what a session is? Netflix style, only shows brief after some time (two days, last day, a week?)-

**K. AI help**  `SPEC › K. AI help`
> ¶ _“K33. Context files the writer edits: style guide, tone, rules. v1 (context/)”_
>
> Very important! The author style must be respected, although some decisions or style traits can be questioned. AI can help writing that context, but warning the writer how it will be used, so it is important to ask him to improve and complete it.

**K. AI help**  `SPEC › K. AI help`
> ¶ _“K38. Dismiss with a reason: on purpose, not now, never. Three dismissals in a category …”_
>
> Dismiss what? Better a switch? Even when not talking, the AI can be working and spending tokens.

**K. AI help**  `SPEC › K. AI help`
> ¶ _“K39. Quiet while typing fast; only during pauses or in Review.”_
>
> Showing when it is working. We'll need something similar to Claude desktop without so many details: Analyzing, syncing, checking facts...

**K. AI help**  `SPEC › K. AI help`
> ¶ _“K41. No mascot, no exclamation marks, no flattery.”_
>
> Serious, but style will depend on the user talking style.

**K. AI help**  `SPEC › K. AI help`
> Everything else in K is OK.

**L. Learning and help ("Clippy done right") ★**  `SPEC › L. Learning and help ("Clippy done right") ★`
> ¶ _“L1. Help by detected intent ★, offered once: a blank project → "plan first or just writ…”_
>
> Start can be importing a word doc or a blank page or a template...

**L. Learning and help ("Clippy done right") ★**  `SPEC › L. Learning and help ("Clippy done right") ★`
> ¶ _“L4. Sample project to explore, with the neutral cast.”_
>
> Or tutorials, repeated when needed.

**L. Learning and help ("Clippy done right") ★**  `SPEC › L. Learning and help ("Clippy done right") ★`
> ¶ _“L6. Writer type at the start (planner, improviser, revising only, no AI): sets which to…”_
>
> Good!

**L. Learning and help ("Clippy done right") ★**  `SPEC › L. Learning and help ("Clippy done right") ★`
> OK to everything.

**M. Goals, habits and wellbeing**  `SPEC › M. Goals, habits and wellbeing`
> ¶ _“M2. Goals per session, day, project; also in minutes or scenes revised, not only words.”_
>
> Not everyone wants or needs this.

**M. Goals, habits and wellbeing**  `SPEC › M. Goals, habits and wellbeing`
> ¶ _“M5. Sprint timer with words gained and a calm chime.”_
>
> How to know when the user is active? What about inspirational words? "Good! Today you worked a 46% more than yesterday!".

**M. Goals, habits and wellbeing**  `SPEC › M. Goals, habits and wellbeing`
> Not everyone works like this, it should be totally optional, but OK for everything in M.

**N. Files, menus and safety ★**  `SPEC › N. Files, menus and safety ★`
> ¶ _“N3. Open recent projects; open several projects side by side.”_
>
> Several projects, why?

**N. Files, menus and safety ★**  `SPEC › N. Files, menus and safety ★`
> ¶ _“N9. Print a chapter or the book directly.”_
>
> Printing after compiling into PDF or similar?

**N. Files, menus and safety ★**  `SPEC › N. Files, menus and safety ★`
> Ok to all N.

**O. Feedback and working with others**  `SPEC › O. Feedback and working with others`
> ¶ _“O1. Share a read-only copy (file or link later) with inline comments that come back int…”_
>
> Or Word export to come back with comments.  And send by email. What about sharing the whole project? Dangerous.

**O. Feedback and working with others**  `SPEC › O. Feedback and working with others`
> ¶ _“O7. "Clean document" check before sending: no open comments, no placeholders, no Materi…”_
>
> And private info if not wanted.

**O. Feedback and working with others**  `SPEC › O. Feedback and working with others`
> The rest OK.

**P. Export and publishing**  `SPEC › P. Export and publishing`
> ¶ _“P6. Front and back matter as reusable blocks (dedication, copyright, "also by").”_
>
> Title and author set as elements, not written as text in the book. Or it as styles. Actually, better if not writing it, a project setup.

**P. Export and publishing**  `SPEC › P. Export and publishing`
> ¶ _“P11. Submission tracker: where each manuscript went, when, the answer, reminders.”_
>
> Even contests and prizes, editors...

**P. Export and publishing**  `SPEC › P. Export and publishing`
> Rest of P OK.

**Q. Projects and kinds of text**  `SPEC › Q. Projects and kinds of text`
> OK all. Setup at the beginning of a project: title, author, type...

**R. Spaceship ideas (big, odd, maybe one day)**  `SPEC › R. Spaceship ideas (big, odd, maybe one day)`
> ¶ _“R3. Living bible: the bible updates itself as the writer writes, and every change is a …”_
>
> So diffs are not only to the text but also to the bible status.

**R. Spaceship ideas (big, odd, maybe one day)**  `SPEC › R. Spaceship ideas (big, odd, maybe one day)`
> ¶ _“R10. Writer's journal inside the project: why decisions were made, linked to the text t…”_
>
> Good!

**R. Spaceship ideas (big, odd, maybe one day)**  `SPEC › R. Spaceship ideas (big, odd, maybe one day)`
> Very nice ideas. What about cover design?

**§3 How the ideas relate**  `SPEC §3`
> Also, paste with format, bible as a whole engineering project that can need its own specification to make it working and efficient. AI use also context-efficient, not using text context for silly questions or things that the bible can answer easily.

<!-- SPEC-NOTES-DATA
{"s-spec-a-the-writing-surface~1mvvjfl":"Yes, we need to have a good bunch of them, but sorted in an easy to find them. And creation of new ones should be easy. Maybe we can have a list of \"super-types\" (Headings, Song-Poem-Letter, Signs, Thoughts, wording...) so the user says: I need something new, it is a sound a ghost does, or it is an ancient language sign in a labyrinth (so there will be more), so I choose \"Onomatopoeia\" or \"Sign\" as the basic type, then I give it a name and I can use it in the future. Then, to differentiate from other signs, I can choose a color or some basic text formatting, but not something very complex. Styles must be easy to find and to use, even with keyboard shortcuts or similar, so writing is fluid, not a lot of clicks. The writer wants to read. Since the AI can read the text and interpret that something is a sign, it can create the new style and add it to the text for the user.\n\"\"\"\nThere was a sign on the wall:\n\"You can't pass\"\nThey read it.\n\"\"\"\nThe AI can find this and change or propose to change it.\nDifferent styles must be identified. What is a style for, actually? Only to print it nice at the end or it can also help understanding the text structure and our index/codex/bible? We must have a balance on that.","s-spec-a-the-writing-surface~1mvvjfl~q":"A1. Styles named for what text is: Emphasis, Thought, Letter, Sign ★, Epigraph, Song, F…","s-spec-a-the-writing-surface~1jxhcz4":"As I told before, we need to find a real function to styles and a simple way to create and show and identify them.","s-spec-a-the-writing-surface~1jxhcz4~q":"A2. Each style has a look per output: Sign is centred capitals on screen, small caps in…","s-spec-a-the-writing-surface~1852s8a":"Ok. I'm beginning to think Markdown could not be the appropriate format and we may need some HTML or something similar to existing docs XML formats. We need to talk more about this.","s-spec-a-the-writing-surface~1852s8a~q":"A3. Inline styles (a word) and block styles (paragraphs), nestable: a Foreign word insi…","s-spec-a-the-writing-surface~7kympm":"Good. We need to find a way to make the manuscript not to be a lot of signs and colors. Or to be able to turn on and off styles or some styling parts.","s-spec-a-the-writing-surface~7kympm~q":"A4. A meaning field per style (\"words the character reads, not says\"), shown on hover a…","s-spec-a-the-writing-surface~1o5igbb":"Ok, but it must be clear for the user without overcomplicating it. I never understood Word's \"Based on normal text\" or how it was modifiable by the user or what it even implies to have a style based on another one: font? bold? margins? spacing? We need something like that but in a very simplified way, not something complex to understand or to store. Our editor may not have all the power Word has in some aspects, but it will be clear how to use them and easy to understand and master. Think that most writers are only worried in writing. They can add spaces instead of a tabulator or a centered line, they don't worry about margins until they need to show that something is a letter, which here can be aided by AI. So writing must be something very natural, they must be able to write \"from the heart\", all at once, with grammar or spelling errors or typos and AI can help with that later. Of course, we'll need to save tokens, so everything that can be a script, must be a script (for example, first step is a dictionary lookup for strange words, then an LLM can give it a new look).","s-spec-a-the-writing-surface~1o5igbb~q":"A5. Style inheritance: Dream is based on Narration; change the parent and the children …","s-spec-a-the-writing-surface~q1i21x":"Ok, always the user even knows what a style is. Otherwise, AI can ask it in a gentle, Clippy way: \"It looks you are writing a letter\" :-)","s-spec-a-the-writing-surface~q1i21x~q":"A6. \"Make a style from this\": format a passage once, name it, and Libreto finds similar…","s-spec-a-the-writing-surface~10t82we":"I understand you mean \"Find all uses of 'Poem'\", for example. Yes, but it's not so important. Don't waste window space for that, it can be more hidden or shown on hover.","s-spec-a-the-writing-surface~10t82we~q":"A7. Style gallery with a live count; click a style to select every use. → E9","s-spec-a-the-writing-surface~1ua5y0e":"We should think if we even allow to add bold and italics or everything must be a style. I'd like that, but I understand users can miss it or they don't even want to use styles, so it could be asked in a review pass. The AI could be reviewing things while the user writes and store them for a review, that could be proposed at the beginning of a session: \"We have some things to review, do you want to look at them now?\", with a summary of what they are, sorted by relevance, for example. The user decides if fixing some, all or nothing.","s-spec-a-the-writing-surface~1ua5y0e~q":"A8. Style lint: raw italics with no meaning get a quiet \"is this Emphasis or Thought?\".…","s-spec-a-the-writing-surface~c5pekt":"Ok, an LLM can help if enabled. Otherwise, it must be done with caution.","s-spec-a-the-writing-surface~c5pekt~q":"A9. Paste filter: foreign formatting is stripped, but bold, italic and headings map to …","s-spec-a-the-writing-surface~1nar7cr":"Yes, they must be sorted in a very useful way: most used, recently used, searchable. I'd like that the user learns to attach to the styles over formatting way, but I know it is wishing too much.","s-spec-a-the-writing-surface~1nar7cr~q":"A10. Style picker on one key with fuzzy search (\"let\" finds Letter); repeat last style;…","s-spec-a-the-writing-surface~kemtpu":"We must think if we need multiple types of notes: doubt, to do, review, show to editor... I don't know, maybe also create yours in a similar way as styles. So click on the \"Add note\" button next to the paragraph and it has a text and a type selector. Type could be updated by AI once read the content.\nI'm adding AI to everything and I don't know how context will be used: if we use an LLM with a lot of current context only to evaluate if a note is a \"to do\" note can waste a lot of tokens. We can evaluate to have small models inside the tool that can do some simple tasks or to use an LLM as a new conversation with the minimum context to understand what to do in a very small call. For example:\n\"You must evaluate if the note just written is of a known type or if it could need a new type: This is the note text and this is the paragraph and surrounding texts. Here you have the types of notes the user usually uses and here are the existing types of notes and what each mean\".\nThat can be a single, free of document context prompt, easy to understand and reply.","s-spec-a-the-writing-surface~kemtpu~q":"A11. A Material style for text that never exports and never counts (notes inside the ma…","s-spec-a-the-writing-surface~1eplo0l":"Good idea. But I don't want to overcomplicate this, the mean user won't create a lot of styles with their way of showing in the app and in the final printed PDF or EPUB and we don't want it for techie users but for writers, so we need to find a way to simplify styles creation and use.","s-spec-a-the-writing-surface~1eplo0l~q":"A12. Styles decide export behaviour: italic in EPUB, underline in manuscript format, le…","s-spec-a-the-writing-surface~ck3l4e":"Good. We need a very thought list of them, though.\nStyle changing must be very accessible but not hiding the real work: writing. That's why I also proposed the concentration mode. Styles can be added later and even by an LLM, so the writer only concentrates in the creative thinking.","s-spec-a-the-writing-surface~ck3l4e~q":"A13. Project templates bring their own styles (novel, article, paper later). v1 → Q1","s-spec-a-the-writing-surface~1px1xx2":"Hmm... Maybe. But what if someone wants to write exactly a word surrounded by asterisks and the editor insists on converting it to bold? Maybe pressing backspace or delete or undo can return it to simple text. We need to think about it to not bother any of the two types of users.","s-spec-a-the-writing-surface~1px1xx2~q":"A14. Clean hybrid editing: no markup visible; Markdown shortcuts still work for those w…","s-spec-a-the-writing-surface~4wut68":"Can be useful. Like the button in Word that shows all spacing, line jumps, etc.","s-spec-a-the-writing-surface~4wut68~q":"A15. Faint markup mode for pro users: markup shown at low contrast. Off by default.","s-spec-a-the-writing-surface~1hlj84p":"I like it, but what if you want to write a \"/\"? But the idea is good, a place where what you must use or you may need can be added. Something like Ctrl+Shift+P in VS Code (or whatever is the shortcut). Even the less techie users should be encouraged to learn that shortcut, where they can find the most useful things without even asking the AI. It can be a search box at the top, that also can search the text... Well, not sure, that can be confusing. But let's think about how to do it.","s-spec-a-the-writing-surface~1hlj84p~q":"A16. Slash menu: / offers styles, a scene break, a link, a note, a comment.","s-spec-a-the-writing-surface~1lpvs5j":"Haha, just what I told you above.","s-spec-a-the-writing-surface~1lpvs5j~q":"A17. Selection toolbar with the few styles and actions used most, ranked by use.","s-spec-a-the-writing-surface~1p7czey":"Hmm... What do you mean? Just to select text? It sounds good, but maybe not too useful or not easy to implement in a non intrusive way. For example, when a word is selected, a three dots menu with some options? Increase selection, copy, paste...\nWell, I like about text editors for coding when they allow me to do Ctrl+W to select a word, for example. Clicking it twice or more could increase the selection. Advanced users could have a lot of these tooling with shortcuts.","s-spec-a-the-writing-surface~1p7czey~q":"A18. Expand selection step by step: word, sentence, paragraph, scene, chapter.","s-spec-a-the-writing-surface~4jx3iy":"Nice for advanced users. Although this is useful for coding, I didn't use it too much. I'm not sure if moving one paragraph above another one should be that easy, because you'll probably need to adapt both paragraphs. This remembers me a Jupyter Notebook, so text is not other thing than blocks. I don't know if I want a lot of buttons when hovering each paragraph. We must think about it to not overload the screen.","s-spec-a-the-writing-surface~4jx3iy~q":"A19. Move paragraph or scene up and down with a key, without cut and paste.","s-spec-a-the-writing-surface~msfk30":"The same, not sure if it is so useful. Advanced users could use it, though. Maybe just a keyboard shortcut, something quite hidden.\nIf you mean moving from one sentence to the next one, I don't know if it's that useful, it's like a Ctrl+right arrow but not for words but for sentences... Maybe, but for too advanced users. It's usually easier to move the arrow down and Ctrl+arrow to get to the start of a sentence. Too complicated adding that.","s-spec-a-the-writing-surface~msfk30~q":"A20. Sentence commands: next, delete, swap two sentences.","s-spec-a-the-writing-surface~8blzoa":"Whoa! That is very coding editor with Alt or similar. As a pro users feature, that could be good, although it will only be used by experienced programmers, which won't exist soon. But the kind of writing for text maybe don't need it. If it doesn't hurt and can't be confused with other keyboard shortcuts, OK.","s-spec-a-the-writing-surface~8blzoa~q":"A21. Multi-cursor and \"select next occurrence\".","s-spec-a-the-writing-surface~5jdkz5":"I see you are porting a lot of coding editors stuff here :-)\nIf not interfering too much and moving the cursor around is not an icon party appearing and disappearing, we can add it. But how do we know where a scene starts and ends? Is AI who adds it automatically? Will that be more useful to have an overview of chapters, scenes, etc. to move around?","s-spec-a-the-writing-surface~5jdkz5~q":"A22. Fold a chapter, scene or block; \"fold everything except this scene\".","s-spec-a-the-writing-surface~taakcz":"I don't quite understand you, but that's because I don't understand how a scene will be shown or set up. If you mean, for example, merging two chapters, 17 and 18 by just removing the chapter mark (whatever it is), I'm not sure if \"merging\" and \"split\" can be so useful. To split, I just add a chapter mark. If you mean something more complex, we should talk about it.","s-spec-a-the-writing-surface~taakcz~q":"A23. Split and merge scenes in place: split at the cursor, merge with the next, no copy…","s-spec-a-the-writing-surface~1xtng72":"Yes, automatic numbering is needed. When you say in place, I understand the user won't see the note at the bottom of the page because the concept of \"page\" may not even exist here, so it needs some Scrivener-like compilation step. I prefer it, to write the text knowing what everything means, not how it is shown at the end. Something like LaTeX, but in a half-visual way. I think that is more or less the idea behind Scrivener, but it is good. Final formatting must be a last step, which will take care of widow and orphan lines, formatting, margins, spacing, etc. Text must be something the author is comfortable moving around, chapters, blocks of text, the whole text at once, an overview box at the left to move quickly. Even if the user doesn't use chapter names, the AI could add them some mini description to make it clear visually: \"Mary and Albert have a discussion\". This is very important, the author needs very clear and quick ubication in his text, being with AI help or not. How we structure the whole text (a file for chapter or a whole file) is something to make clear, because not all writers will be able to understand or create new chapters if they can't see what came before and what will be next.","s-spec-a-the-writing-surface~1xtng72~q":"A24. Footnotes and endnotes edited in place, numbered automatically.","s-spec-a-the-writing-surface~nqj5bv":"Yes, but easy to understand. For example, not character by character. AI will always be there to help if something is lost. What about redo? It's usual to write something, do too many undos, write a letter by mistake and not being able to do redo because everything is lost. Could we manage that somehow? Making that undo is also undoable? Maybe AI should help here, because the process is complex.","s-spec-a-the-writing-surface~nqj5bv~q":"A25. Undo and redo everywhere, including binder moves, renames and accepted AI changes …","s-spec-a-the-writing-surface~a3vucv":"Haha, what I just told you.","s-spec-a-the-writing-surface~a3vucv~q":"A26. Undo tree: undo, type something new, and the old branch is still there.","s-spec-a-the-writing-surface~f5ajt1":"Very interesting, but hard to show.","s-spec-a-the-writing-surface~f5ajt1~q":"A27. Selective undo: revert one change from 20 minutes ago and keep what came after.","s-spec-a-the-writing-surface~oz4bkl":"Nice! The user needs to learn that this exists, though. Maybe AI can help here, too: \"I propose to change this paragraph with something like this\" and show a split window in that place with two text blocks to choose.","s-spec-a-the-writing-surface~oz4bkl~q":"A28. Alternative takes in place: three versions of one sentence or paragraph, cycle wit…","s-spec-a-the-writing-surface~fdcc56":"Yes, but the user must be aware of this. Many Spanish writers don't even know what Spanish quotes are and even less how to write them, they are not present in Spanish keyboards and going to \"Insert symbol\" is not viable. This is the kind of thing AI could do right and easy, but maybe enabling \"Spanish quotes\" so when I write '\"' it writes '«' could work. This should be tested, because it is a mind change for writers and even regular users.","s-spec-a-the-writing-surface~fdcc56~q":"A29. Smart quotes per language: “ ” (English), « » (Spanish, French), „ “ (German).","s-spec-a-the-writing-surface~1b43r00":"Yes, it's also a headache. But interpreting what is a dialogue could need AI sometimes. Have you been looking at my literary-critic or docx-fixer projects? :-) Maybe you should, I had a lot of these things born from correcting a real non-techie writer.","s-spec-a-the-writing-surface~1b43r00~q":"A30. Dialogue dash mode for Spanish and other languages: — opens dialogue, spacing and …","s-spec-a-the-writing-surface~rxx5o5":"Good, but how to indicate this?","s-spec-a-the-writing-surface~rxx5o5~q":"A31. Per-passage language: a French letter inside a Spanish novel gets French quotes an…","s-spec-a-the-writing-surface~igmcly":"Yes, very good! It must be intuitive and not intrusive, though.\nAlso, if an autocorrection is undone multiple times, maybe an AI system can disable or offer to disable it. Or not even AI, just a counter and a message (Clippy again: \"It looks you are trying to avoid this correction often...\"). Of course, this is creating a settings dialog that grows fast. I'd like to keep the software very simple, but we can end up with a Word clone, with a lot of options, a map of corrections, etc., and I don't want that. We need to find a balance in EVERYTHING we do in this project: Powerful but simple and easy to understand, setup and use.","s-spec-a-the-writing-surface~igmcly~q":"A32. Dashes, ellipses and apostrophes normalised, with a \"fix all\" report; one backspac…","s-spec-a-the-writing-surface~9qcq0x":"Good. If we can add AI here, much better, not a static, old Word check.","s-spec-a-the-writing-surface~9qcq0x~q":"A33. Spell check and grammar check per language, quiet in draft mode. → B21","s-spec-a-the-writing-surface~1vz3yzb":"Haha, I like it. But it can be just an AI chat away.","s-spec-a-the-writing-surface~1vz3yzb~q":"A34. Thesaurus and \"word on the tip of my tongue\" by description.","s-spec-a-the-writing-surface~18hxdqx":"Perfect, the problem is how to do it without filling the text with a lot of red underlined words. Or that the options are few and clear when hovering: instead of adding to the dictionary, something like \"Don't ask again\", but making clear what won't be asked again. Is the word? Is a syntactic use? I think Word marks read for words and blue for grammar and similar. I've noticed that Gmail editor has a sophisticated method right now, we could copy some of that for corrections. Do some research.","s-spec-a-the-writing-surface~18hxdqx~q":"A35. Dictionary of the project: invented words, names and spellings never flagged. → D20","s-spec-a-the-writing-surface":"Some writers don't even know how to create a new chapter or adding a page jump. It must be easy for them to do it. An easily findable button or even just writing \"Chapter\" should be enough for the AI to help. All of this should be added as mini tutorials in the right moment. For example, the author starts with a title: \"Surprise in the night\". You can offer to write the title and author in the right way (a template or similar) and also explain \"Every time you need to add a new chapter, you have the button here. Or you can ask me to create it\". It must be clear that the AI is always there to help with everything, from formatting to research to fix errors... It must be in a discreet place but always accessible.\nWe can think about notes and \"TODO\" messages, so the writer or the AI can propose to fix things that are only half-done or that need a look. The user must have a way to \"annotate\" his own text with notes, visible or collapsible. For example \"Peter said no\" and very easily add a note to the sentence or the word \"no\" that says \"He could have said 'maybe', check later\". Libreto can understand that as a something to add into the To Do list and propose it at some point. If the user starts a session and asks \"What do we need to fix?\".\nIt is important to know that AI is expensive, so the software must be able to be used with and without it. That's why scripts and automated things must work as a simpler help, that can be enhanced with LLMs and different models.","s-spec-b-views-layout-and-comfort~2enu3h":"But very easy to read the next one or to change to full view if the writer gets to the end. For example, small links at the end with \"Read next chapter\" or \"Change to full view to see the whole text\"","s-spec-b-views-layout-and-comfort~2enu3h~q":"B1. Chapter view: one document at a time. v1","s-spec-b-views-layout-and-comfort~1hiw9pr":"If it is a selection of chapters, it must be clear that there are missing chapters in between and it must be easy to show some or all of them. Similar behavior: show previous/next chapter links or show all hidden chapters.","s-spec-b-views-layout-and-comfort~1hiw9pr~q":"B2. Full view: the whole book (or a selection of chapters) as one continuous text, edit…","s-spec-b-views-layout-and-comfort~6z1h9w":"Ok, but clearly separated and told where each one belongs to, even with text references: \"Jack has already talked to Ellie\".","s-spec-b-views-layout-and-comfort~6z1h9w~q":"B3. Selection view: any set of documents (search results, one character's scenes) shown…","s-spec-b-views-layout-and-comfort~ypu73g":"Yes, this can help. Even a diff view could help too. So you can see a scene in one and another scene in the other one or you can use it to compare versions or changes done last night, for example.","s-spec-b-views-layout-and-comfort~ypu73g~q":"B4. Split view: the same document twice, or two side by side; a locked reference pane t…","s-spec-b-views-layout-and-comfort~lw6yv8":"Perfect! A \"compiled\" version.","s-spec-b-views-layout-and-comfort~lw6yv8~q":"B5. Reading view: book-like page, justified, hyphenated, no editing chrome, to read the…","s-spec-b-views-layout-and-comfort~yi6l3m":"Would it be useful? Or having them in a left-side box could be enough? But we must also be careful with accidental chapter moving. AI can help here: \"Warning! You are moving this and it won't make sense!\"","s-spec-b-views-layout-and-comfort~yi6l3m~q":"B6. Outline view: headings and synopses only; drag to reorder. → F10","s-spec-b-views-layout-and-comfort~otxx8v":"Interesting.","s-spec-b-views-layout-and-comfort~otxx8v~q":"B7. Dialogue view: only what characters say, filtered by speaker, to check each voice. …","s-spec-b-views-layout-and-comfort~jz1ztt":"Yes, but I want it well done. It's hard to know where notes are if they are too long or there are many of them and they don't fit in the page. Maybe double scrolling (main text and comments) may help. With lines to join the text and the comment.","s-spec-b-views-layout-and-comfort~jz1ztt~q":"B8. Annotation view: text dimmed, comments and notes listed beside it (revision mode).","s-spec-b-views-layout-and-comfort~vfy4pt":"I like it. But it should be disabled by the user. Or shown just as a breadcrumbs, like something smaller when the title is not on screen.","s-spec-b-views-layout-and-comfort~vfy4pt~q":"B9. Sticky headers: current chapter and scene pinned at the top while scrolling.","s-spec-b-views-layout-and-comfort~1jsqgnr":"Good. We need to see if all these options fit. Also, page number is important, even if we work in a write-only (not formatted) mode, so an approximate page number shown somewhere (or in statistics) is needed. Also, \"compiling\" the text should be easy and quick, so passing from write mode to presentation mode should be easy. Some people need to know the page they are in, although Libreto will discourage that view. Page numbering, headers and footers are another thing that can be complex in Word. We need to understand all typologies (no page number in cover, no page number in first pages, even when they count, how to make them visible or not, what is the front matter part...). Our software is more like LaTeX, you tell what each thing is, not how it looks, so saying \"this is the initial quote page\" and knowing how to treat it about headers, footers, page numbers is more important than \"I want numbers in this page but not in this one\". The system must be able to show them in the right place and give the user some control but not too much to not overload it. Later feedback can help us improve. Oh, and now we talk about page numbering and headers, double-page printing with different headers is also important. I see it more like a LaTeX fancy headers package and knowing if the book is to be printed at double-side than something to be set up at the beginning. I see it more like a last step compilation time, like Scrivener, but those options are stored per project so changing to page view already know how to do it.","s-spec-b-views-layout-and-comfort~1jsqgnr~q":"B10. Page widths: narrow, book page, full width (as in nacho-viewer) ★, plus a draggabl…","s-spec-b-views-layout-and-comfort~j3ko2o":"Yes, something similar to nacho-viewer. We there have two widths and zoom means increasing font size like in HTML, but maybe some other views (final print-ready view) may mean another thing, just make zoom to the page, which should be shown slightly different, as they are different things. Anyway, text zoom in md view must not imply how it will be printed.","s-spec-b-views-layout-and-comfort~j3ko2o~q":"B11. Zoom of the text separate from the zoom of the interface ★.","s-spec-b-views-layout-and-comfort~1iib606":"Good, but maybe light and dark to start, we don't want to overload. Maybe we can later add a plugin creator to add functionality to the editor and themes would be one of the things. A theme chooser is OK, but not a dirty screen full of options and buttons, so it should be kind of hidden. You change it once, not all day. If you want a time of day theme, that will work too. I can think of typewriter mode, too, for example. Easy to find, easy to understand: this is only to work, printing has nothing to do with a dark view (non techies could think that).","s-spec-b-views-layout-and-comfort~1iib606~q":"B12. Themes: light, dark, sepia, time of day; fonts per mode (draft in one, revise in a…","s-spec-b-views-layout-and-comfort~u041zo":"We need to think the best way to do it, we can't put 10 tabs there. Opening panels with different tools could help. Photoshop has been working with panels a lot of time, we could learn something from them, but the idea is not to overload the screen and make it intuitive, so maybe work modes could change what is seen in the respective panels and the author can learn to change mode to have the right tooling. Even some \"Change mode to...\" in some tools that could appear when hovering are useful too.","s-spec-b-views-layout-and-comfort~u041zo~q":"B13. Right panel with tabs ★: Comments, Notes, Character, Place, Research, Outline, AI.…","s-spec-b-views-layout-and-comfort~12z34hc":"Yes, but I don't want the user to lose what he had in the panel before. I mean, let's suppose I'm reading and fixing comments, which can be in the right panel. Now I click a character and the right panel becomes a character panel. How do I go back to comments? I don't want the experience to be frustrating and that everything changes when I just want to check something. Floating windows are another option. Right click or double click on some element could open them. AI chat must be context aware, so if the user has a character card open and asks a question, AI must be aware of what is open at that moment, in case it could be useful to the question.\nAnother option is back and forward buttons in the panel, but navigation could add more complexity. We need to think it more.","s-spec-b-views-layout-and-comfort~12z34hc~q":"B14. What a click does ★: click a character name → its card opens in the right panel; c…","s-spec-b-views-layout-and-comfort~u0n3ai":"Yes, but with all we said: moving from one to another must be easy and very intuitive. Last open panels and windows must be remembered.\nAnd we need a place to put the chat. I'm thinking of right panel at the bottom, but a narrow chat is hard to read. Floating window? A keyboard shortcut that makes a text box appear on top of the text, like Command+Space in macOS?","s-spec-b-views-layout-and-comfort~u0n3ai~q":"B15. Workspaces (v1 app type): Write, Plan, Review presets; each remembers its panels, …","s-spec-b-views-layout-and-comfort~ce33pi":"Yes, that should be Concentration mode (we can choose another name). It's just the writer and the text. The writer should be comfortable by writing at his own style and then an AI pass can fix everything (double spaces, extra tabs, em dashes, creating chapters when \"Chapter\" word is found in a line, for example...).","s-spec-b-views-layout-and-comfort~ce33pi~q":"B16. Hide everything on one key; the same key brings back the exact layout.","s-spec-b-views-layout-and-comfort~1b1z8vo":"Ok, but let's not give too much freedom. It's good that anyone can work the best way, but let's keep some things at their right place so that the software has a style and way of working.\nBut yes, we'll need panels, tabs and sections elements implemented that allow for certain things (move, dock, scroll...). We need a system that allows for some freedom.","s-spec-b-views-layout-and-comfort~1b1z8vo~q":"B17. Panels can be docked, floated or tabbed; any view can go in any panel.","s-spec-b-views-layout-and-comfort~1pgjzqp":"Yes, I thought you were talking about this in B16. I think it's only text without any extras or with only visual extras (a comment sign, a character to be clicked...) but no panels or formatting. Keyboard shortcuts will work anyway (bold, titles...).","s-spec-b-views-layout-and-comfort~1pgjzqp~q":"B18. Focus mode (as in Opos) ★: everything but the current sentence or paragraph dimmed…","s-spec-b-views-layout-and-comfort~6o2xqa":"Maybe as optional. All these extras look good and may be useful for some people, but we need a way to enable and disable them that are not a button in a toolbar with lots of buttons or be too hidden in Settings. The balance between simplicity and power again.","s-spec-b-views-layout-and-comfort~6o2xqa~q":"B19. Typewriter scrolling: the current line stays at a chosen height.","s-spec-b-views-layout-and-comfort~7oehaa":"Is this what I called final printing mode? Like a Word regular mode?","s-spec-b-views-layout-and-comfort~7oehaa~q":"B20. Composition mode: full screen, chosen background and paper width.","s-spec-b-views-layout-and-comfort~1qhdd38":"Ok, maybe.","s-spec-b-views-layout-and-comfort~1qhdd38~q":"B21. Draft mode: spell check, grammar and AI hints hidden, so the inner editor stays qu…","s-spec-b-views-layout-and-comfort~13oemc8":"Not sure about that. Are those notifications from OS or from the app?","s-spec-b-views-layout-and-comfort~13oemc8~q":"B22. Quiet mode: no notifications, no sync badges, no toasts.","s-spec-b-views-layout-and-comfort~10xvl6v":"Weird. Optional.","s-spec-b-views-layout-and-comfort~10xvl6v~q":"B23. Ambient sound (rain, café, keys). Optional.","s-spec-b-views-layout-and-comfort~17l43bu":"Yes, accessibility is very important. Options must be together and findable. AI can help when it sees the user is trying to change zoom or similar and offer to add more options, given the user needs. Same as before, we should be able to use LLMs in low-context mode, just to answer easy questions.","s-spec-b-views-layout-and-comfort~17l43bu~q":"Comfort and accessibility","s-spec-b-views-layout-and-comfort~1afzh5s":"We need to know real needs and not fill it with things that no one will use. But fonts and spacing sounds good.","s-spec-b-views-layout-and-comfort~1afzh5s~q":"B24. Dyslexia-friendly fonts and spacing, cream background, line focus (1, 3 or 5 lines…","s-spec-b-views-layout-and-comfort~y6vu0k":"Yes, with AI, all these things should be easier. I never used those options, so let's stick to the usual ones that have proven they are used.","s-spec-b-views-layout-and-comfort~y6vu0k~q":"B25. Read aloud with word highlighting, from the cursor; \"read back my last paragraph\" …","s-spec-b-views-layout-and-comfort~vg8gt0":"I don't know, if this is useful, perfect. Does it mean even a blind person should be able to write a novel just with accessibility and AI tools?","s-spec-b-views-layout-and-comfort~vg8gt0~q":"B26. Dictation with punctuation commands, and a \"clean up dictation\" pass.","s-spec-b-views-layout-and-comfort~n1ddj2":"Ok. As always, how to show that without overloading.","s-spec-b-views-layout-and-comfort~n1ddj2~q":"B27. Full keyboard use; screen-reader support; high-contrast theme.","s-spec-c-navigation~l17itr":"Yes, but where are those navigation arrows? Does it works also for panels and visible stuff in the screen?","s-spec-c-navigation~l17itr~q":"C1. Back and forward across documents, like a browser ★. Always a way back to where the…","s-spec-c-navigation~bmgrph":"Yes, in a simple way. Maybe a key combination or just a \"Text\" button always visible. How does it match with modes, workbench tooling, etc.?","s-spec-c-navigation~bmgrph~q":"C2. \"Back to my text\" button whenever a non-text view is open ★.","s-spec-c-navigation~izcbt2":"Sounds good, see my notes about title shown when scrolling. Yes, all breadcrumbs clickable and menus.","s-spec-c-navigation~izcbt2~q":"C3. Breadcrumbs: Book › Part 2 › Chapter 7 › \"The ferry\"; each step a menu of its sibli…","s-spec-c-navigation~gff9ip":"That's perfect.","s-spec-c-navigation~gff9ip~q":"C4. Recent places, with a snippet of text around each.","s-spec-c-navigation~107ilas":"I discovered late VS Code had that option to go to the last edit points. This must be done in a very intuitive way, related to C4.","s-spec-c-navigation~107ilas~q":"C5. Last edit location on one key.","s-spec-c-navigation~1rzyba8":"Ok.","s-spec-c-navigation~1rzyba8~q":"C6. Open where I left off: same document, same cursor, plus a one-line \"where was I\". →…","s-spec-c-navigation~480z2e":"Yes, I talked about VS Code Ctrl+Shift+P. That would be very useful. It could also be a clickable search box or similar, because not everybody can remember shortcuts.","s-spec-c-navigation~480z2e~q":"C7. Command palette: every action by name, fuzzy, with its shortcut shown; also finds d…","s-spec-c-navigation~jacqwu":"Not sure what you mean, but a summarized version of the text could be a very good addition. For example:\nChapter 1 [linked]\nLisa meets her friend. [linked]\nLisa is informed about her friend's uncle death. [linked]\nLisa calls his brother. [linked[\nChapter 2 [linked]\n\nJust like scenes or similar. I think this is the best way to find something for a writer with a very long text. A search box for this panel could help even more.","s-spec-c-navigation~jacqwu~q":"C8. Quick switcher by title, synopsis or alias.","s-spec-c-navigation~ygemuo":"Is the user who marks them or is an AI summary as I explained in C8?","s-spec-c-navigation~ygemuo~q":"C9. Bookmarks for places in the text, searches and documents; numbered bookmarks on keys.","s-spec-c-navigation~19v4bkq":"Nice, but we must do it very well if added or it will be more confusing.","s-spec-c-navigation~19v4bkq~q":"C10. Minimap of the book coloured by chapter, point of view, status or comment density.","s-spec-c-navigation~4d74jt":"I like it. But we must understand if we are in a chapter view or full text view.","s-spec-c-navigation~4d74jt~q":"C11. Scroll bar marks: search hits, comments, to-dos, mentions of the selected character.","s-spec-c-navigation~1gam134":"Very good! A search box with results could allow to go there or add a button to just peek it. The overlapped box (with scroll bar) can be closed by Esc or an X, for example.","s-spec-c-navigation~1gam134~q":"C12. Peek: open a linked scene inline without leaving the current place.","s-spec-c-navigation~ipx17h":"Yes, this is our best \"codex\" tool, knowing where everything is. The AI must use this index to find things with scripts without spending tokens.","s-spec-c-navigation~ipx17h~q":"C13. Go to first appearance, last appearance, next mention of an entity. → D8","s-spec-c-navigation~6v16a":"Well, we must find a common way to see info about any entity or element by clicking the same kind of link or button. So clicking on a character can show its card (like the peek you just told). Maybe a double click behaves different: instead of showing a peek of the chapter it goes there. The back button can get the writer back to its place.\nTools like navigation, selection, moving parts, view info associated to something... must be very worked on. They must be 100% intuitive, clear for a new user and also the user must think \"how could I live without this before?\". We are somehow inventing new tooling that other software could copy one day. Don't just conform with what already exists, let's create new ways to move through complex texts in an easy way, even creating new widgets or elements. For example, this same HTML document I'm editing has a note editor next to each paragraph. I think this is a very useful way to communicate with LLMs, because I can't read a very long text like this and having ideas while I read and then having to remember all of them at the end to write a prompt. This edit box is very useful to me. It could be improved, but I can't leave with these specification documents anymore. This is the feeling writers must have. Everything where they expect it or even where they don't expect but finding it in the right place to make them think: \"Wow! This is just what I need now!\".","s-spec-c-navigation~6v16a~q":"C14. Chapter title ↔ its card: click to jump either way ★. → F4","s-spec-d-characters-places-and-things-t~iggxro":"Yes, and some situations or links to important scenes (ampliable to all scenes or references from that same card).","s-spec-d-characters-places-and-things-t~iggxro~q":"D1. Character card ★: name, aliases, image, description, notes, mentions. v1 (simple card)","s-spec-d-characters-places-and-things-t~18bhq7r":"Ok, hidden but accessible. Some of them can be AI filled or even having a button to \"Fill all fields with actual info from the text\" after the writer seeing and approving it. This text is not writer's text, so it can be safely generated. And the other way, if the writer adds something (\"she gets angry easily\") that is not yet in the text, the AI could suggest at some point \"you thought of this character as getting angry easily, but it doesn't happen or only in one place\" or add a note or similar for things to review.","s-spec-d-characters-places-and-things-t~18bhq7r~q":"D2. Optional fields ★: birth date, age, look, job, voice, wants and needs, secrets, rel…","s-spec-d-characters-places-and-things-t~1ker5cb":"Or floating, as we talked about. We need to fix this kind of things.","s-spec-d-characters-places-and-things-t~1ker5cb~q":"D3. Click a name in the text → its card in the right panel ★. v1","s-spec-d-characters-places-and-things-t~1yu1ltr":"Good, similar to what I said in D2. AI appearances must be at the right moment, never bothering the user Clippy-style.","s-spec-d-characters-places-and-things-t~1yu1ltr~q":"D4. Card sections filled by AI or the writer ★, each AI line marked \"inferred, please c…","s-spec-d-characters-places-and-things-t~p53uwd":"Yes, the exact contents of each card is something to go iterating. We'll use real novels or texts to be analyzed and then see what is useful, what is too much...","s-spec-d-characters-places-and-things-t~p53uwd~q":"D5. The card's timeline ★: what the character does and when, key moments, with a short …","s-spec-d-characters-places-and-things-t~c4mywy":"Yes, AI summaries or even script-based info must be everywhere. The writer must know at one sight what he needs to know. Not more, not less. Or short extracts around the mention, for example. But not every line of dialog said by the character. Rather a scene or part with \"Dialog with Daisy\". We need to know what are scenes in a non-scene text, like a novel, where everything flows. An LLM is needed for that.","s-spec-d-characters-places-and-things-t~c4mywy~q":"D6. Chapters where they appear ★, with how big the part is (speaks, acts, mentioned).","s-spec-d-characters-places-and-things-t~i5k1e2":"Yep.","s-spec-d-characters-places-and-things-t~i5k1e2~q":"D7. Place card ★: description, image from research, the scenes set there, a map pin later.","s-spec-d-characters-places-and-things-t~5cohmz":"This is what we need to balance. A card at the right or all floating cards? We need to decide what is a query to know something about a character, for example, that can be in a summary, or something that needs a long reading.","s-spec-d-characters-places-and-things-t~5cohmz~q":"D8. Hover card ★: hover a name or place for a short card: image, one-line definition, f…","s-spec-d-characters-places-and-things-t~zogqy6":"Good idea, but most writers won't know that if they are not remembered they can do that.","s-spec-d-characters-places-and-things-t~zogqy6~q":"D9. Hover only while holding a key, as an option, so reading is never interrupted.","s-spec-d-characters-places-and-things-t~1t8qh2f":"Good. And who knows it exists or where it is, when a main character discovers it... It can have advices like \"The main character should know about the existence of the crown much before than the third act\", for example, although it is opinable.","s-spec-d-characters-places-and-things-t~1t8qh2f~q":"D10. Items and objects: the ring, the letter, who has it when. → J9","s-spec-d-characters-places-and-things-t~wnf5k":"Yes. A first AI pass should decide which entities are needed to be considered. Even it could be the husband family and the wife family.","s-spec-d-characters-places-and-things-t~wnf5k~q":"D11. Groups and organisations (the police, the family).","s-spec-d-characters-places-and-things-t~rpts4":"It could be useful if there is actually a definition in the text.","s-spec-d-characters-places-and-things-t~rpts4~q":"D12. Terms and glossary entries for invented words; a term links to its definition, as …","s-spec-d-characters-places-and-things-t~1q76iwv":"Yes, each writer must be able to create new fields and AI has to be able to read and fill them. Even not all characters may need the same fields. For example \"Knowledge of family history\" can be important for some family members, but not the guy who sells a soda in the store. A way to add a same field to multiple characters/entities? Or just AI decides by looking at other characters fields if other characters need them. Every AI added fields or text must be marked somehow. One thing is what the writer decides and another thing is what AI inferes or adds.","s-spec-d-characters-places-and-things-t~1q76iwv~q":"D13. Card templates per project type; custom fields.","s-spec-d-characters-places-and-things-t~xxaw1a":"I'm not sure if names must have \"@\" at all. Maybe they must be autodetected, same as objects, places, etc.","s-spec-d-characters-places-and-things-t~xxaw1a~q":"D14. Names detected while writing, without @ ★; known ones linked, new ones offered as …","s-spec-d-characters-places-and-things-t~1e1bdd5":"Yes. How and when to ask the writer about this is what we need to decide to not bother the writer too much.\nOh, another thing. AI must be able, after reading the index/codex/bible/whatever, to tell the writer things that are wrong, writing a full report or adding them to a list of things to check that the writer can go fixing/accepting/refusing one by one or by group. Those reviews could be done regularly, when the user asks or proposed by the AI (or done in the background with some cron task). I imagine the AI right bottom box with a message at the beginning of a session: \"I'm here for anything you need. We have tasks to review when you want\". I mean, offering but not bothering. With buttons like \"Review tasks\" or similar. Like Claude Code does with some things, asking questions, etc.","s-spec-d-characters-places-and-things-t~1e1bdd5~q":"D15. Aliases and nicknames (\"the detective\", \"V.\") count as mentions after the writer c…","s-spec-d-characters-places-and-things-t~1sg1umd":"I don't know what you mean. Links should be done mainly by AI, but of course the user must be able to link them. Maybe with the split screen we mentioned before by dragging an arrow from one section to the other.","s-spec-d-characters-places-and-things-t~1sg1umd~q":"D16. Unlinked mentions: occurrences not yet linked, linked in one click.","s-spec-d-characters-places-and-things-t~1lnox08":"Good. AI can give advice if something is out of place. Without bothering, again, maybe user-triggered.","s-spec-d-characters-places-and-things-t~1lnox08~q":"D17. Per-character extract: every line of one character in a row, to check voice. → B7","s-spec-d-characters-places-and-things-t~1ell9vc":"Perfect.","s-spec-d-characters-places-and-things-t~1ell9vc~q":"D18. Rename everywhere as one command, with preview, including possessives and plurals. v1","s-spec-d-characters-places-and-things-t~5ox0ow":"Very interesting.","s-spec-d-characters-places-and-things-t~5ox0ow~q":"D19. Progressions: facts that change over the story (age, injuries, allegiance, what th…","s-spec-d-characters-places-and-things-t~r29uhc":"Good. Don't know where or when they'll be shown, but the idea is good. Again, we must dose where AI appears in the tool. ","s-spec-d-characters-places-and-things-t~r29uhc~q":"D20. Name checker: names that look or sound alike (Kit/Kat), same initials, overused na…","s-spec-d-characters-places-and-things-t~1nlzjk8":"Very good!","s-spec-d-characters-places-and-things-t~1nlzjk8~q":"D21. Name suggestions fitting the period, region and language, avoiding names already u…","s-spec-d-characters-places-and-things-t~1gjqn2e":"Hard to show, I want to see what you propose.","s-spec-d-characters-places-and-things-t~1gjqn2e~q":"D22. Relationship map: characters as nodes, relationships as labelled links; how they c…","s-spec-d-characters-places-and-things-t~1h4s5oc":"Perfect!","s-spec-d-characters-places-and-things-t~1h4s5oc~q":"D23. Family tree.","s-spec-d-characters-places-and-things-t~b7rpnz":"That's great. All of this can be used for one of those reports I say. Everything is taken into account and stored and then make a report should be really easy.\nThat means that minimum changes to the text may trigger a lot of changes to our database. We need to decide if this is done at the moment it is written, every few minutes, when the user asks something or just session by session.","s-spec-d-characters-places-and-things-t~b7rpnz~q":"D24. Co-occurrence: which characters share scenes, and who has not met whom.","s-spec-d-characters-places-and-things-t~24rggl":"Good to have, hard to do?","s-spec-d-characters-places-and-things-t~24rggl~q":"D25. Show or hide entity highlights ★: all at once, by kind (characters, places, items,…","s-spec-d-characters-places-and-things-t~zlyewr":"Yes. Don't overload the text with colors, buttons, etc. unless they can be disabled, but yes, a visual way for characters can help a lot. Or I'm thinking even generating character pictures from their descriptions and showing them at some places. For example: \"Scene in the restaurant\" and a picture of Helen and Tom in that card (and even a bartender).","s-spec-d-characters-places-and-things-t~zlyewr~q":"D26. Colour per character, used in the text, cards, timeline and corkboard alike.","s-spec-d-characters-places-and-things-t~e2mly0":"Yes, it's important. We don't want an AI-style final text, but things that are wrong or are repeated a lot, must be fixed.\nA statistics page or some graphics can help the user understand he is abusing of some word, joke or something that can get the reader tired. Or otherwise, where an seeded item or joke must come back. This kind of things are in our literary-critic project.","s-spec-d-characters-places-and-things-t~e2mly0~q":"D27. Part-of-speech highlights for revision: adjectives, adverbs, filler words (as in i…","s-spec-d-characters-places-and-things-t":"I'd like to use \"Life: use instructions\" as an example of novel to see what you can find! :-)\nCharacters, timelines, places, knowledge, where they lived... It must be a lot of fun.","s-spec-e-search~s5gdla":"Yes, but it must be useful. We can't fill the results with things the user doesn't want to see.","s-spec-e-search~s5gdla~q":"E1. Search everything: text, notes, comments, research, cards; results grouped by kind.","s-spec-e-search~12a3qey":"We need to think of a way to give relevant results to the part of the book that is being worked, even with other parts that reference it.","s-spec-e-search~12a3qey~q":"E2. Scope chips: this scene, this chapter, the book, notes, research.","s-spec-e-search~55d1e3":"Again, it is very interesting, but maybe we need to give the right dose of everything. For example, you search for \"paul\" and you get a result \"Character: Paul Wilson\", that you can click and see its card. Then, just word results in the text. Maybe \"... and Paul said he was his father...\" with a note like \"Chapter 7\" and a short summary like \"Paul and Emma talk sincerely\", which can be a scene description or similar. But, of course, you also need to be able to look just for all \"Paul\" occurrences and go from one to another with intro.. So maybe two search modes: word and concept? Word like a regular text editor and concept as for characters, scenes... NEeds thinking. ","s-spec-e-search~55d1e3~q":"E3. Smart search on a name ★: first appearance, key moments with AI summary and fragmen…","s-spec-e-search~zvew3p":"Very needed. But it would be like a simple AI chat. But without chat, only a search result. Can be useful.","s-spec-e-search~zvew3p~q":"E4. Search by meaning: \"the scene where they argue about money\" (AI). → K19","s-spec-e-search~15n3ewk":"Complex, this I think AI will do it better, no one will be filling multiple form fields and which fields to choose?","s-spec-e-search~15n3ewk~q":"E5. Search by metadata: point of view is Vega, status is draft, contains \"ferry\".","s-spec-e-search~1a3esap":"Hmm... Maybe. This suggest something greater, like themes or concepts that can be saved and checked.","s-spec-e-search~1a3esap~q":"E6. Saved searches that update themselves (collections).","s-spec-e-search~1lxfafs":"Do you mean a regular Find and replace like any text processor? Or a list of results with yes or no? That looks tedious for the user. I prefer some well-thought buttons like \"Replace and continue to next\", \"Skip and continue to next\". This is usually a pain in Word. You have a floating window that always covers the text it found, then you want to edit a text by yourself, then you must move focus again to the dialog, but the button is not selected... It must be intuitive and easy to navigate. I prefer the search/replace box at the top, for example, and an intuitive and easy way to move focus between search box and text. If we can solve that, we have a good win. For example, another button with those two \"Edit text\" and a key for each one. Then we need a way to go back to the search box.","s-spec-e-search~1lxfafs~q":"E7. Find and replace with a preview of every hit and a checkbox per hit.","s-spec-e-search~oe5n6q":"I don't get it, do you mean as a text box over the text as the temporary focus that then can be closed?","s-spec-e-search~oe5n6q~q":"E8. Search results as one editable text. → B3","s-spec-e-search~1b94ah4":"Yes, I think we talked about this.","s-spec-e-search~1b94ah4~q":"E9. Search by style: every Letter, every Sign. → A7","s-spec-e-search~lkn42l":"Yes, that is the powerful feature of AI or of our bible/codex/whatever.","s-spec-e-search~lkn42l~q":"E10. Ask the book ★: \"When did Vega last see Kit?\" → answer with links to the scenes. →…","s-spec-e-search~dpdpef":"This can be hard to implement and make clear. Here AI can help a lot, but there should be a manual way to do all things that AI can do.","s-spec-e-search~dpdpef~q":"E11. Restore a deleted paragraph by searching its text in history. → I5","s-spec-f-planning-and-structure~129131m":"We need definitions of parts, chapters, scenes. And moving around should return an AI response about if that is possible.","s-spec-f-planning-and-structure~129131m~q":"F1. Binder: parts, chapters, scenes, drag to reorder. v1","s-spec-f-planning-and-structure~1rj6ch4":"Ok, I'm not expert on this, if it is the regular way, it's good. But then we must show it? When to change it? AI helps the transition? A writer must be able to work without them, though, just writing.","s-spec-f-planning-and-structure~1rj6ch4~q":"F2. Status per document: idea, draft, revised, final. v1","s-spec-f-planning-and-structure~1jb1zb9":"Good, it helps searching or understanding structure. If the writer can see all chapters at a glance with their short description, it can help understanding the whole text and finding possible flaws. Even those flaws could be identified and shown in that view or toggle them.","s-spec-f-planning-and-structure~1jb1zb9~q":"F3. Synopsis per document, from one line to a page, written by the writer or summarised…","s-spec-f-planning-and-structure~1vyktt4":"We talked about that.","s-spec-f-planning-and-structure~1vyktt4~q":"F4. Chapter title ↔ its card ★: one object, two views. → C14","s-spec-f-planning-and-structure~1dy4g75":"I don't know if many people uses them, so it is an optional feature. It can be autogenerated with real text content, similar to what we said at F3.","s-spec-f-planning-and-structure~1dy4g75~q":"Corkboard ★","s-spec-f-planning-and-structure~13tlyh8":"Yes, it's a way to start for some people. There will be writers that write up-to-down and others that write down-to-up.","s-spec-f-planning-and-structure~13tlyh8~q":"F5. Cards are scenes or ideas ★; an idea card has no text yet and can become a scene la…","s-spec-f-planning-and-structure~r2ixtu":"Final fields to be reviewed, but yes, that's the idea.","s-spec-f-planning-and-structure~r2ixtu~q":"F6. Card content ★: title, synopsis, colour, image, status stamp, characters and place …","s-spec-f-planning-and-structure~xd636m":"Not sure, but similar to that. Intuitive and easy to do.","s-spec-f-planning-and-structure~xd636m~q":"F7. Easy add ★: double click or one key adds a card; type and press Enter for the next.","s-spec-f-planning-and-structure~vfd0dg":"Yes, but without overloading the UI. As always, intuitive and clear.","s-spec-f-planning-and-structure~vfd0dg~q":"F8. Move, sort and snap ★: grid with snap, or free placement; sort by order, status, po…","s-spec-f-planning-and-structure~1rvexzq":"Good idea, a Save button with an \"Are you sure?\" message and a warning if the user wants to go out of the page. The implications of moving things must be known, because almost any act of the user to the text, cards, etc. must be reviewed by our system and alerts triggered.","s-spec-f-planning-and-structure~1rvexzq~q":"F9. Freeform shuffle, then \"apply order\" ★: the book changes only when the writer commits.","s-spec-f-planning-and-structure~gfpcnh":"Yes, probably good idea. But I think the original corkboard is just an ordered set of cards that mean scenes. We could tweak it to make it more useful, but we should find the way to do it and only if it is better than the original one.","s-spec-f-planning-and-structure~gfpcnh~q":"F10. Links between cards ★ with labels: \"sets up\", \"pays off\", \"because of\", \"mirrors\".…","s-spec-f-planning-and-structure~1i0xaut":"Not bad. Actually, they are usually distributed in Acts I, II and III, but you should be able to create lanes and stack them.","s-spec-f-planning-and-structure~1i0xaut~q":"F11. Stacks: several cards in one, fanned out on hover.","s-spec-f-planning-and-structure~tx64zz":"Interesting but hard to implement. Surprise me!","s-spec-f-planning-and-structure~tx64zz~q":"F12. Swimlanes by plotline, character or point of view; drag between lanes to change it.","s-spec-f-planning-and-structure~1exzgdh":"Good.","s-spec-f-planning-and-structure~1exzgdh~q":"F13. Zoom levels: far shows titles, middle synopses, close the text itself.","s-spec-f-planning-and-structure~1kljfsh":"Could be if that does not over-complicate things and is harder to understand.","s-spec-f-planning-and-structure~1kljfsh~q":"F14. Several boards per project (ideas board, act 2 board), and nested boards.","s-spec-f-planning-and-structure~1j7blrj":"Not sure, let's keep the idea.","s-spec-f-planning-and-structure~1j7blrj~q":"F15. Moodboard: images, colours, quotes and links on one board.","s-spec-f-planning-and-structure~1bnk7q5":"Good. Again, KISS. I don't quite get it.","s-spec-f-planning-and-structure~1bnk7q5~q":"F16. Outline with columns: point of view, place, story date, words, target, status; sor…","s-spec-f-planning-and-structure~1ms7tbc":"I read Save the Cat, that's why I know the corkboard. If you mean there are multiple ways, OK. Maybe not in a first version, but it's a good idea.","s-spec-f-planning-and-structure~1ms7tbc~q":"F17. Structure templates as overlays, not cages: three acts, Save the Cat, Hero's Journ…","s-spec-f-planning-and-structure~bmnb2c":"Good!","s-spec-f-planning-and-structure~bmnb2c~q":"F18. Beat ruler: where beats fall on the word count (\"midpoint at 50%, yours at 62%\").","s-spec-f-planning-and-structure~ydqlqb":"Yes, everything that can help see visually how it works will be good.","s-spec-f-planning-and-structure~ydqlqb~q":"F19. Plot grid: plotlines × chapters, gaps where a thread goes silent.","s-spec-f-planning-and-structure~jhgwf8":"Exactly!","s-spec-f-planning-and-structure~jhgwf8~q":"F20. Reverse outline from the draft: AI summarises each scene into a card. For improvis…","s-spec-f-planning-and-structure~1hkcafl":"If you mean a review to help see what is missing, OK.","s-spec-f-planning-and-structure~1hkcafl~q":"F21. Outline ↔ draft diff: cards with no scene, scenes with no card, cards that no long…","s-spec-f-planning-and-structure~4i7pet":"Is it for decisions as in our video games or just as alternative endings to be decided?","s-spec-f-planning-and-structure~4i7pet~q":"F22. Outline branches: \"version B, the bartender lies\", kept beside the main plan.","s-spec-f-planning-and-structure~1w60yui":"Yes, that was in part the sense of the corkboard.","s-spec-f-planning-and-structure~1w60yui~q":"F23. Scene fields (optional): goal, conflict, outcome; value shift; purpose.","s-spec-f-planning-and-structure~1ifl97y":"Good, writing techniques. We'll need a way to show all of these things you propose in an easy to understand way.","s-spec-f-planning-and-structure~1ifl97y~q":"F24. Arc tracker: want and need, lie and truth, a \"what changed\" line per scene.","s-spec-f-planning-and-structure~t7ljrc":"Nice!","s-spec-f-planning-and-structure~t7ljrc~q":"F25. Story timeline: scenes on story time instead of book order; flashbacks show the ga…","s-spec-f-planning-and-structure~1hxvdo1":"Perfect! Hard to implement and make it clear?","s-spec-f-planning-and-structure~1hxvdo1~q":"F26. Reading order and story order side by side; drag on either.","s-spec-f-planning-and-structure":"Let's also think about writers who write all at once. How structure and corkboards can help them once they have already written all or most.","s-spec-g-capture-notes-and-research~1j6o0ko":"Brainstorming must be a good place to start something. It must be treated as a part of the process (if the writer wants it). AI chats can be done inside the app, instead of on their respective websites. That can help organizing information.","s-spec-g-capture-notes-and-research~1j6o0ko~q":"G1. Capture inbox: one key (and later phone) drops a thought into the project or an \"un…","s-spec-g-capture-notes-and-research~1d77mmk":"Good!","s-spec-g-capture-notes-and-research~1d77mmk~q":"G2. Each capture keeps its context: date, what was open, source link.","s-spec-g-capture-notes-and-research~89olf1":"Perfect! Who proposes to not forget paused things.","s-spec-g-capture-notes-and-research~89olf1~q":"G3. \"Sort the inbox\" now and then: each item to a card, a note, research or the bin.","s-spec-g-capture-notes-and-research~do0omc":"Yesss!","s-spec-g-capture-notes-and-research~do0omc~q":"G4. Scraps bin: loose lines and dialogue, searchable, draggable into scenes. Never expo…","s-spec-g-capture-notes-and-research~di8gw9":"Not sure. Is this a usual tool? At the end, people wants to write things and ideas and put them \"in production\", so these status can be too much.","s-spec-g-capture-notes-and-research~di8gw9~q":"G5. Ideas garden: idea cards with a status (seed, growing, ready) and links to fragments.","s-spec-g-capture-notes-and-research~1jf3imk":"Ok. Now you talk about links, which shape will links have in the app?","s-spec-g-capture-notes-and-research~1jf3imk~q":"G6. Notes as full documents, linkable from anywhere. v1","s-spec-g-capture-notes-and-research~1q6tdwb":"Yes, and links.","s-spec-g-capture-notes-and-research~1q6tdwb~q":"G7. Research folder: images, PDFs, web clips, audio. v1","s-spec-g-capture-notes-and-research~c123pf":"Nice.","s-spec-g-capture-notes-and-research~c123pf~q":"G8. Web clipper: page, quote or image into research, with the source.","s-spec-g-capture-notes-and-research~8p3qr2":"Very interesting, opos-like.","s-spec-g-capture-notes-and-research~8p3qr2~q":"G9. Facts with sources: hover a fact in the text to see where it came from.","s-spec-g-capture-notes-and-research~14q0639":"Yes. Types must be known or easily selectable.","s-spec-g-capture-notes-and-research~14q0639~q":"G10. Placeholders: [CHECK: train speed 1920] or TK while drafting; collected as a to-do…","s-spec-g-capture-notes-and-research~13lfjx3":"We need a way to make it intuitive and not bothering.","s-spec-g-capture-notes-and-research~13lfjx3~q":"G11. Research visible while writing: pinned in the side panel or split view. → B4","s-spec-g-capture-notes-and-research~1j9otag":"Yes, research must be part of the process. Everything in the app must follow the same goal. Just like integral-job-search repo. Look at how it is conceived, a list of steps, just here there are no ordered steps, everything is iterative (there it is too).","s-spec-g-capture-notes-and-research~1j9otag~q":"G12. Period profile: prices, slang, technology for the story's time; optional anachroni…","s-spec-g-capture-notes-and-research~uquepx":"Good, I could improve drawspec to draw simple architectural plans.","s-spec-g-capture-notes-and-research~uquepx~q":"G13. Images with pins (a floor plan of the Blue Lamp) linked to places and scenes.","s-spec-g-capture-notes-and-research~5awiog":"Positive for some people.","s-spec-g-capture-notes-and-research~5awiog~q":"G14. Voice memos with transcription.","s-spec-h-comments-and-annotations~w4kh9t":"Good, but simple.","s-spec-h-comments-and-annotations~w4kh9t~q":"H1. Comments on a paragraph or words, with threads and resolve. v1","s-spec-h-comments-and-annotations~fv4w2o":"Yes, already talked.","s-spec-h-comments-and-annotations~fv4w2o~q":"H2. Comment types: To do, Check fact, Continuity, Cut?, Idea. Filterable and counted.","s-spec-h-comments-and-annotations~oturh2":"Ok.","s-spec-h-comments-and-annotations~oturh2~q":"H3. Comments from people and from AI, clearly told apart. v1","s-spec-h-comments-and-annotations~1xif5b8":"Yes.","s-spec-h-comments-and-annotations~1xif5b8~q":"H4. Inline notes to self, hidden on export, listed as to-dos.","s-spec-h-comments-and-annotations~1fnaq6o":"What exactly?","s-spec-h-comments-and-annotations~1fnaq6o~q":"H5. Material text inside the manuscript that never exports. → A11","s-spec-h-comments-and-annotations~1185g0y":"What's the difference between comments and notes? I was treating them as the same in my previous notes.","s-spec-h-comments-and-annotations~1185g0y~q":"H6. Comment ↔ note ↔ card links: a comment can grow into a note. v1","s-spec-h-comments-and-annotations~v4nhvu":"Nice, a statistics module?","s-spec-h-comments-and-annotations~v4nhvu~q":"H7. Comment heatmap: where comments cluster, by reader.","s-spec-h-comments-and-annotations~1izno1c":"Good idea, simple comments or even emojis.","s-spec-h-comments-and-annotations~1izno1c~q":"H8. Reaction marks from readers: laughed, cried, confused, bored.","s-spec-h-comments-and-annotations~pvcn3l":"Yes, talked about this before.","s-spec-h-comments-and-annotations~pvcn3l~q":"H9. Revision task list: every open comment and to-do of the book in one list, linked to…","s-spec-h-comments-and-annotations~1oeu0lx":"Perfect! Importing from Word and a passing a process to convert.","s-spec-h-comments-and-annotations~1oeu0lx~q":"H10. Comments survive Word round trips. v1 → O3","s-spec-i-revision-and-history~18lww93":"Automatic and manual.","s-spec-i-revision-and-history~18lww93~q":"I1. Snapshots per document or book, with a name and reason; automatic before risky oper…","s-spec-i-revision-and-history~ehiyv3":"Good, but what's the use of this? It's not a doc but a project. Good for versions in the sense of  old and new versions of a text inside the project.","s-spec-i-revision-and-history~ehiyv3~q":"I2. Compare any two versions side by side, at word level. v1","s-spec-i-revision-and-history~11xembs":"Good, but easy to do for non-techies. Some writers don't even know how to create or save files with new names. Export and send by email should be fully integrated. Names created at export or hare time.","s-spec-i-revision-and-history~11xembs~q":"I3. Named versions: \"Sent to the editor, 3 March\".","s-spec-i-revision-and-history~153onhf":"Yesss! Very important. Or with exported docx versions sent to another person which come back annotated. How to import  a docx with comments without the processing step, just to compare notes and possible editions. They must be added as comments if the user wants it.","s-spec-i-revision-and-history~153onhf~q":"I4. \"What changed since I sent it\": diff against the last export.","s-spec-i-revision-and-history~ccgij2":"Perf! With some comments about what changed.","s-spec-i-revision-and-history~ccgij2~q":"I5. History timeline per document with a slider.","s-spec-i-revision-and-history~1fahn7x":"Yes.","s-spec-i-revision-and-history~1fahn7x~q":"I6. Cut file: every large deletion saved with its origin, searchable.","s-spec-i-revision-and-history~8ugekb":"Ok, but well done and easy to understand.","s-spec-i-revision-and-history~8ugekb~q":"I7. Branches for a big rewrite (\"first person\"): keep or drop it, like a copy that know…","s-spec-i-revision-and-history~eri1ff":"Yes, two versions, as two different endings.","s-spec-i-revision-and-history~eri1ff~q":"I8. Scene variants: two versions of a scene kept, one chosen for the book. → A28","s-spec-i-revision-and-history~1w4s0n0":"Ok. Revisions by the author, editor, reviewer...?","s-spec-i-revision-and-history~1w4s0n0~q":"I9. Revision passes with colours: first pass, second pass.","s-spec-i-revision-and-history~zab7z7":"It can add discipline for the author, who could be reviewing forever s passage.","s-spec-i-revision-and-history~zab7z7~q":"I10. Revision progress: scenes revised in this pass, a bar for the pass.","s-spec-i-revision-and-history~1x0x283":"Yes, the discipline in clear tasks.","s-spec-i-revision-and-history~1x0x283~q":"I11. Revision plan: \"target outline\" against the current one, turned into a task list (…","s-spec-i-revision-and-history~1914vv7":"Yess! Very good idea.","s-spec-i-revision-and-history~1914vv7~q":"I12. Guided revision path: big picture → scenes → lines → polish, one step at a time.","s-spec-i-revision-and-history~73h0wp":"Yes! Yes! Full integration! Everything to help the same goal. It must be easy to export, send, receive and import, even Gmail integration or Claude checking it.","s-spec-i-revision-and-history~73h0wp~q":"I13. Editorial letter → linked checklist: paste the editor's notes, each point becomes …","s-spec-i-revision-and-history~mngt9q":"Yep.","s-spec-i-revision-and-history~mngt9q~q":"I14. \"Good enough, move on\": a gentle note after the tenth revision of the same chapter…","s-spec-j-continuity-and-analysis~565cqf":"Yes, we talked about that.","s-spec-j-continuity-and-analysis~565cqf~q":"J1. Continuity check that runs like a spell checker, quietly: eye colour, ages, names, …","s-spec-j-continuity-and-analysis~i850o4":"Yes, but how?","s-spec-j-continuity-and-analysis~i850o4~q":"J2. Contradictions can be marked \"on purpose\" (a lie, a rumour, an unreliable narrator)…","s-spec-j-continuity-and-analysis~ds6r5p":"Perfect-","s-spec-j-continuity-and-analysis~ds6r5p~q":"J3. Story calendar: dates and weekdays, seasons, moon phases; travel times that make se…","s-spec-j-continuity-and-analysis~1832ftd":"Good, everything that can be checked must be.","s-spec-j-continuity-and-analysis~1832ftd~q":"J4. Ages computed from birth dates and scene dates, shown everywhere.","s-spec-j-continuity-and-analysis~g0np1i":"Good.","s-spec-j-continuity-and-analysis~g0np1i~q":"J5. Who knows what, and when: warns when a character uses something they cannot know yet.","s-spec-j-continuity-and-analysis~1n5h7bt":"Yes.","s-spec-j-continuity-and-analysis~1n5h7bt~q":"J6. Where everyone is: a character × time grid.","s-spec-j-continuity-and-analysis~yj6yr0":"Ok. Or name changes.","s-spec-j-continuity-and-analysis~yj6yr0~q":"J7. Dead or absent characters who reappear.","s-spec-j-continuity-and-analysis~pd5xf8":"Yes.","s-spec-j-continuity-and-analysis~pd5xf8~q":"J8. Setups and payoffs: planted and fired, linked both ways; unfired setups flagged. → F10","s-spec-j-continuity-and-analysis~1v5hl06":"Ok.","s-spec-j-continuity-and-analysis~1v5hl06~q":"J9. Objects: who has the ring when; dropped and suddenly held again.","s-spec-j-continuity-and-analysis~1q470bk":"Yes.","s-spec-j-continuity-and-analysis~1q470bk~q":"J10. Open questions the text raises (who took the letter?) and where they close.","s-spec-j-continuity-and-analysis~mek0pl":"Ok.","s-spec-j-continuity-and-analysis~mek0pl~q":"J11. Forgotten characters: absent for 80 pages; forgotten threads: silent for 6 chapters.","s-spec-j-continuity-and-analysis~aiil1w":"Exactly.","s-spec-j-continuity-and-analysis~aiil1w~q":"J12. Moving a chapter checks what it breaks: a fact used before it is introduced, timel…","s-spec-j-continuity-and-analysis~fmr91p":"Good.","s-spec-j-continuity-and-analysis~fmr91p~q":"J13. Point of view and tense consistency.","s-spec-j-continuity-and-analysis~1rt84o8":"Good.","s-spec-j-continuity-and-analysis~1rt84o8~q":"J14. Style sheet built automatically for the copy editor: spellings, hyphenation, chara…","s-spec-j-continuity-and-analysis~7r5gml":"Good, but how?","s-spec-j-continuity-and-analysis~7r5gml~q":"J22. Custom checks: the writer writes a rule (\"flag 'suddenly'\") and it becomes a highl…","s-spec-j-continuity-and-analysis":"All good. The analysis can generate a full report and/or add it to the tool as individual notes or checks. It can be after reading and commenting the report or automatically.","s-spec-k-ai-help~1t71l2e":"Good, discreet but easily findable for users that use it like a pro.","s-spec-k-ai-help~1t71l2e~q":"K1. A chat that knows the open scene, in a right-panel tab, closable. ★ → B13","s-spec-k-ai-help~1wcll27":"Try to use it inside.","s-spec-k-ai-help~1wcll27~q":"K2. Through Claude Desktop ★ (v1): \"Connect Claude\" registers Libreto's MCP server; the…","s-spec-k-ai-help~1ipp915":"Good if nothing better.","s-spec-k-ai-help~1ipp915~q":"K3. Link Claude Desktop to a project ★: the app writes the MCP config for the open proj…","s-spec-k-ai-help~5h9693":"Similar to literary-critic.","s-spec-k-ai-help~5h9693~q":"K4. \"Open this in Claude\": a button that copies a ready prompt plus a link to the chapt…","s-spec-k-ai-help~g527u6":"That is the objective.","s-spec-k-ai-help~g527u6~q":"K5. Optional in-app chat with an API key, for those who want everything in one window.","s-spec-k-ai-help~4jm7en":"Not a bad idea.","s-spec-k-ai-help~4jm7en~q":"K6. Margin dot: a tiny mark where the AI has something; nothing more until hovered.","s-spec-k-ai-help~a4kq8t":"Do you mean AI as an editor? Should we give AI a name?","s-spec-k-ai-help~a4kq8t~q":"K7. Editor's inbox: findings batched and delivered at natural breaks (end of session, a…","s-spec-k-ai-help~kwlik2":"It's an option.","s-spec-k-ai-help~kwlik2~q":"K8. Command palette and right-click \"Ask about this\" for every AI action. → C7","s-spec-k-ai-help~hnz6mp":"Curious...","s-spec-k-ai-help~hnz6mp~q":"K9. Status bar: what the AI can see (chapters 1–12, cards, style guide), and a privacy …","s-spec-k-ai-help~18v7pu7":"Really needed?","s-spec-k-ai-help~18v7pu7~q":"K10. Snooze AI for 25 or 60 minutes.","s-spec-k-ai-help~15dqgau":"You mean written by AI?","s-spec-k-ai-help~15dqgau~q":"K11. A \"no prose\" switch: every feature that writes prose disappears from the interface.","s-spec-k-ai-help~8g2vc7":"The writer can set up an AI working level.","s-spec-k-ai-help~8g2vc7~q":"K14. Add text ★, only on request, as a proposal: describe, expand, fill a placeholder.","s-spec-k-ai-help~doy1bk":"What exactly?","s-spec-k-ai-help~doy1bk~q":"K19. Search by meaning (E4).","s-spec-k-ai-help~1t7uvho":"And \"What did we do last session?\".","s-spec-k-ai-help~1t7uvho~q":"K21. Summaries: scene, chapter, \"story so far\".","s-spec-k-ai-help~9wirla":"Or do all characters sound the same?","s-spec-k-ai-help~9wirla~q":"K28. Voice check: does this line sound like Lena?","s-spec-k-ai-help~1n9yeqe":"Could the refactor or extract function VS Code concepts be ported here somehow?","s-spec-k-ai-help~1n9yeqe~q":"K29. Rename, restyle, retag as commands (the AI uses the same commands as the writer). v1","s-spec-k-ai-help~1ruhc69":"How to identify what a session is? Netflix style, only shows brief after some time (two days, last day, a week?)-","s-spec-k-ai-help~1ruhc69~q":"K31. \"Previously on…\" after a long break.","s-spec-k-ai-help~151dllr":"Very important! The author style must be respected, although some decisions or style traits can be questioned. AI can help writing that context, but warning the writer how it will be used, so it is important to ask him to improve and complete it.","s-spec-k-ai-help~151dllr~q":"K33. Context files the writer edits: style guide, tone, rules. v1 (context/)","s-spec-k-ai-help~1hb4pg1":"Dismiss what? Better a switch? Even when not talking, the AI can be working and spending tokens.","s-spec-k-ai-help~1hb4pg1~q":"K38. Dismiss with a reason: on purpose, not now, never. Three dismissals in a category …","s-spec-k-ai-help~1kl9orn":"Showing when it is working. We'll need something similar to Claude desktop without so many details: Analyzing, syncing, checking facts...","s-spec-k-ai-help~1kl9orn~q":"K39. Quiet while typing fast; only during pauses or in Review.","s-spec-k-ai-help~s6s7l1":"Serious, but style will depend on the user talking style.","s-spec-k-ai-help~s6s7l1~q":"K41. No mascot, no exclamation marks, no flattery.","s-spec-k-ai-help":"Everything else in K is OK.","s-spec-l-learning-and-help-clippy-done~unwbrt":"Start can be importing a word doc or a blank page or a template...","s-spec-l-learning-and-help-clippy-done~unwbrt~q":"L1. Help by detected intent ★, offered once: a blank project → \"plan first or just writ…","s-spec-l-learning-and-help-clippy-done~kbacln":"Or tutorials, repeated when needed.","s-spec-l-learning-and-help-clippy-done~kbacln~q":"L4. Sample project to explore, with the neutral cast.","s-spec-l-learning-and-help-clippy-done~ty100e":"Good!","s-spec-l-learning-and-help-clippy-done~ty100e~q":"L6. Writer type at the start (planner, improviser, revising only, no AI): sets which to…","s-spec-l-learning-and-help-clippy-done":"OK to everything.","s-spec-m-goals-habits-and-wellbeing~qao55i":"Not everyone wants or needs this.","s-spec-m-goals-habits-and-wellbeing~qao55i~q":"M2. Goals per session, day, project; also in minutes or scenes revised, not only words.","s-spec-m-goals-habits-and-wellbeing~s47oem":"How to know when the user is active? What about inspirational words? \"Good! Today you worked a 46% more than yesterday!\".","s-spec-m-goals-habits-and-wellbeing~s47oem~q":"M5. Sprint timer with words gained and a calm chime.","s-spec-m-goals-habits-and-wellbeing":"Not everyone works like this, it should be totally optional, but OK for everything in M.","s-spec-n-files-menus-and-safety~7rz299":"Several projects, why?","s-spec-n-files-menus-and-safety~7rz299~q":"N3. Open recent projects; open several projects side by side.","s-spec-n-files-menus-and-safety~1hiq7uy":"Printing after compiling into PDF or similar?","s-spec-n-files-menus-and-safety~1hiq7uy~q":"N9. Print a chapter or the book directly.","s-spec-n-files-menus-and-safety":"Ok to all N.","s-spec-o-feedback-and-working-with-othe~1ws36ek":"Or Word export to come back with comments.  And send by email. What about sharing the whole project? Dangerous.","s-spec-o-feedback-and-working-with-othe~1ws36ek~q":"O1. Share a read-only copy (file or link later) with inline comments that come back int…","s-spec-o-feedback-and-working-with-othe~2u7wup":"And private info if not wanted.","s-spec-o-feedback-and-working-with-othe~2u7wup~q":"O7. \"Clean document\" check before sending: no open comments, no placeholders, no Materi…","s-spec-o-feedback-and-working-with-othe":"The rest OK.","s-spec-p-export-and-publishing~16tmove":"Title and author set as elements, not written as text in the book. Or it as styles. Actually, better if not writing it, a project setup.","s-spec-p-export-and-publishing~16tmove~q":"P6. Front and back matter as reusable blocks (dedication, copyright, \"also by\").","s-spec-p-export-and-publishing~9o2q4l":"Even contests and prizes, editors...","s-spec-p-export-and-publishing~9o2q4l~q":"P11. Submission tracker: where each manuscript went, when, the answer, reminders.","s-spec-p-export-and-publishing":"Rest of P OK.","s-spec-q-projects-and-kinds-of-text":"OK all. Setup at the beginning of a project: title, author, type...","s-spec-r-spaceship-ideas-big-odd-maybe~rn0y28":"So diffs are not only to the text but also to the bible status.","s-spec-r-spaceship-ideas-big-odd-maybe~rn0y28~q":"R3. Living bible: the bible updates itself as the writer writes, and every change is a …","s-spec-r-spaceship-ideas-big-odd-maybe~1jcdbvr":"Good!","s-spec-r-spaceship-ideas-big-odd-maybe~1jcdbvr~q":"R10. Writer's journal inside the project: why decisions were made, linked to the text t…","s-spec-r-spaceship-ideas-big-odd-maybe":"Very nice ideas. What about cover design?","s-spec-3":"Also, paste with format, bible as a whole engineering project that can need its own specification to make it working and efficient. AI use also context-efficient, not using text context for silly questions or things that the bible can answer easily."}
-->