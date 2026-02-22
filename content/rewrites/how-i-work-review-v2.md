# How I Work Section: Review (v2, with writing-as-uri skill applied)

## Anti-Pattern Audit (Systematic)

### Em-Dashes as Interruptors

Every single sub-page uses `--` as an interruptor. This is the most pervasive AI tell across the section. Count:

- **skill.md**: 7 instances (one per pattern description + antipattern)
- **build-to-discover.md**: 2 ("timing delays...were completely missing", "the gap between assumption and reality...")
- **customer-intimacy.md**: 2 ("it compounds over time", "these weren't discovered through surveys")
- **cross-functional-leadership.md**: 1 ("all in the same quarter")
- **strategy-to-shipping-code.md**: 4 ("not what they *haven't* done", "Honeywell will never tell", "not a template", "radically different architectures")
- **engineering-collaboration.md**: 2 ("data pipelines, infrastructure, tech debt", "they build on evidence")
- **trust-as-the-product.md**: 4 (one per principle + closer)
- **antipattern-mvp-trap.md**: 2 ("validate before you build", "you have to *feel* the cost")

Total: ~24 em-dashes across 8 files. Per the rhythm doc: "Avoid. Uri likes them but they're now an AI tell. Restructure the sentence instead." Every one needs to become either a colon, a period and new sentence, or a restructured clause.

### Staccato Fragments (Version A / LinkedIn Slop)

**skill.md** is the worst offender:
- "Fill gaps. Remove blockers. Translate between worlds." (three consecutive fragments)
- "Analyze the market AND build the product. No handoff required." (fragment + tagline)

**cross-functional-leadership.md**:
- "Product management isn't a lane. It's a commitment..." (fragment setup)
- "Sometimes that means writing a PRD. Sometimes it means building a prototype. Sometimes it means running marketing..." (triple parallel "Sometimes" construction)

**engineering-collaboration.md**:
- "Early experiments: I let Claude choose languages. It wrote Python. Built charts with Plotly." (four staccato beats)

**antipattern-mvp-trap.md**:
- "Not raw telemetry. Not a replica of what the hardware vendor already provides." (parallel "Not" fragments)

**build-to-discover.md**:
- "A configuration error bleeding money invisibly. A bigger opportunity than the original scope." (back-to-back fragments)

Per the rhythm doc: Version A "compressed fragments that look punchy on the page but don't sound like a human talking." Target is Version B: "complete thoughts that flow as speech."

### Parallel Structure / Formulaic Patterns

**skill.md** pattern descriptions all follow identical structure: `**Bold Name** -- compressed one-liner.` Seven entries, same format. This is the "parallel labeling" AI tell from the anti-patterns doc. Each description should have a different shape.

**trust-as-the-product.md** uses `*Project Name* -- description` identically three times. The numbered framework format is appropriate here (per the structure doc's "Framework Pieces" section), but the em-dash-after-project-name construction is repetitive.

### Generic Scaffolding Headers

Headers that announce structure instead of carrying content:

| File | Headers |
|------|---------|
| build-to-discover.md | "The Method", "Why This Matters" |
| customer-intimacy.md | "The Approach", "Why GTM Background Matters", "Evidence" |
| cross-functional-leadership.md | "In Practice (2025)", "The Principle" |
| strategy-to-shipping-code.md | "Zooming Out", "Zooming In" |
| engineering-collaboration.md | "The Model", "The Toolset Lesson", "The Result" |
| trust-as-the-product.md | "Three Principles", "The Common Thread" |
| antipattern-mvp-trap.md | "What Happened", "Why It Failed", "The Right MVP", "The Painful Part", "The Lesson" |

Per the structure doc: "Let the argument drive the organization. No 'What's different?' headers." Most of these are the argument announcing itself rather than making itself. "The Method" says nothing the page title didn't already say. "Why This Matters" is AI doing summary work the content should do on its own. "The Lesson" is a conclusion header that tells you a lesson is coming before you've read it.

The MVP Trap is the most extreme case: five headers for a page that's maybe 150 words of actual content. That's a header every 30 words. The story would be stronger told straight through as prose.

### Transitional Phrases / "The Result:" Pattern

- "The Result" as a section header (engineering-collaboration.md) is literally the clickbait transition example from the anti-patterns doc.
- "The Common Thread" (trust-as-the-product.md) is AI doing the summary that a good closing should do implicitly.
- "Why This Matters" (build-to-discover.md) announces the takeaway instead of landing it.

## Voice and Rhythm Issues

### First-Person Narrative Stripped to Impersonal Summaries

The interview material is full of Uri narrating decisions in real time:

> "I initially thought we should focus only on operating hours but I saw the system behaving oddly before working hours, so I expanded the data aperture and quickly realized that the opportunity for providing insight was even larger on nights and weekends."

The sub-page version:

> "Built a commissioning dashboard scoped to operating hours. Expanded the data aperture and discovered nights/weekends systems running as if occupied 24/7."

The interview version has a narrator who sees something odd, makes a judgment call, and discovers something bigger. The sub-page version reads like a project postmortem written by someone who wasn't there. This is a pattern across every sub-page: the stories are told in compressed third-person-ish summaries rather than as someone recounting what happened to them.

The engineering-collaboration toolset story has the same issue. The interview version: "In my early coding experiments I left it up to Claude Code to choose languages. It wrote a lot of Python. But most of our engineering team is not that familiar with Python, so they didn't really understand what I'd built as well as I might have liked." The sub-page version strips this into staccato fragments: "I let Claude choose languages. It wrote Python. Built charts with Plotly."

### Claims Asserted but Not Grounded

- **customer-intimacy.md**: "15+ persona types across 20 years" is a stat without substance. Which 15+ types? (The hero now names some, making this even more redundant.)
- **skill.md** opener: "Product management is about three things" is a Cagan-school definition presented as Uri's own framing. It's a borrowed idea without attribution, which is fine, but it's also generic. Any PM portfolio site could open with this.
- **cross-functional-leadership.md**: "Do whatever the business needs" is an assertion. The 2025 quarter bullet list is good evidence, but the closer ("Product management isn't a lane") is a platitude.
- **build-to-discover.md**: "The Method" section ("Agentic engineering: validate hypotheses with working tools, not throwaway prototypes") is definitional rather than experiential. It tells you what agentic engineering is rather than showing how Uri uses it.

## Structural Issues

### Same Evidence Recycled

The Stanford and Qualcomm stories appear in three different pages:

1. **build-to-discover.md**: as the primary discovery narratives
2. **customer-intimacy.md**: as the "Evidence" section
3. **strategy-to-shipping-code.md**: as the "Zooming In" example (architecture contrast)

A reader clicking through sees the same two stories retold three times. Each retelling is slightly different, but the specifics (timing delays, nights/weekends, 10-15% savings) repeat nearly verbatim. This is a significant credibility risk: a hiring manager skimming three pages and seeing the same examples might conclude the portfolio is thinner than it appears.

Each page should use different evidence, or if the same project appears, the retelling needs to serve that page's specific argument so clearly that the reader gets new information.

### Hero Overlap

The new hero covers:
- Persona breadth (line 1: "Built for facilities engineers, sold to CFOs...")
- Career arc and operating range (line 2: "Consulting, product marketing...")
- Build-to-discover philosophy and taste (line 3)

**customer-intimacy.md** now directly overlaps with hero line 1 (persona list) and line 3 (understanding buyer behavior). The persona bullet list in customer-intimacy is less specific than the hero version.

**build-to-discover.md** overlaps with the hero subtitle ("builds to discover") and line 3 ("Building quickly is how you discover a great product").

**cross-functional-leadership.md** overlaps with hero line 2 (operating range across functions).

These pages need to go deeper than the hero, not re-state what the hero already established.

### "Zooming Out / Zooming In"

Already flagged during the hero rewrite: this framing doesn't translate without the full interview context. The hero replaced it with concrete operating range language. strategy-to-shipping-code.md still uses it as section headers.

### Page Thickness

Some pages are too thin to stand alone:

- **customer-intimacy.md**: ~120 words of actual content. The persona list is now in the hero. The evidence section recycles Stanford/Qualcomm. What's left?
- **cross-functional-leadership.md**: ~100 words of content. One bullet list from 2025 and a platitude closer.
- **engineering-collaboration.md**: ~130 words. The toolset anecdote is good but could live inside a broader page.

Meanwhile, the interview material has rich, untapped content that could give these pages substance: the competition bot sequence story (build profiles first, chatbot second), the IAQ failure's connection to build-to-discover, the retirement advisor trust design, the Claude Workflows product-sense story.

## Section-Level Recommendation

### Consolidation: 7 Pages to 4

The current seven pages overlap too much and are individually too thin. Four pages, each with enough substance to stand alone:

**1. Build to Discover** (absorbs customer-intimacy)
The philosophy is already in the hero. This page goes deeper: the process (from the interview: research users, codify into agent context, divergent exploration, parallel evaluation, converge into testable options), then the evidence. Customer intimacy is the *input* to build-to-discover, not a separate topic. Use the competition bot sequence story here (it's currently unused), plus Stanford/Qualcomm told as first-person narratives.

**2. Operating Range** (absorbs cross-functional-leadership, replaces strategy-to-shipping-code)
New title that matches the hero language. This is the "I think about where the industry is going, where the customer is headed, where they are now, and build the software that gets them there" page. The competitive positioning analysis (Honeywell can't be neutral) is the strategic end. The architecture contrast (Stanford vs Qualcomm) is the execution end. The 2025 quarter is the evidence of range. Engineering collaboration (fill the gap, match the toolset) lives here too, because it's about how building fits into the broader org.

**3. Trust as the Product** (stays standalone)
The strongest page. Three principles, each grounded in a project. Needs em-dash cleanup, header revision, and the narrative should breathe more (first-person), but the structure and content work.

**4. The MVP Trap** (stays standalone)
The second strongest page. Should be told as a flowing narrative without five section headers. This story earns its standalone status because it's the failure story, and the connection to build-to-discover is the punchline: if they'd built the simplest useful insight first (build to discover) instead of the data dashboard (build what seems logical), they'd have caught the mistake in days, not months.

### Index Page (skill.md)

Rewrite the opener to match the hero's energy. Drop the PM 101 definition. The reader just saw "Product leader who builds to discover" and three lines of specifics. The index page should extend that, not retreat to a textbook.

Four pattern descriptions instead of six, each with a different rhythm. Not parallel bold-name-plus-em-dash format. One could be a question. One could be a short narrative setup. One could lead with the evidence and let the reader infer the principle.
