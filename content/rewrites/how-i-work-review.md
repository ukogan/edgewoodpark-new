# How I Work Section: Review

Applying the same lens from the hero rewrite: does it sound like Uri wrote it, is it specific enough to be credible, are claims grounded not asserted, and does it avoid AI anti-patterns?

## 1. The Index Page (skill.md)

### Opening is PM 101

"Product management is about three things: a product customers love, that your team can deliver, that makes your company successful. AI has given us a powerful new tool, but the job hasn't changed."

This is a textbook definition (Cagan's desirability/feasibility/viability) followed by a safe truism any PM could say. The hero now opens with "Product leader who builds to discover" and talks about taste, operating range, and career breadth. The index page opens with a definition the reader already knows. It should match the hero's energy and specificity.

### Pattern descriptions are formulaic

Every entry follows the same structure: **Bold Name** + em-dash + compressed description. That parallel structure is an AI tell. Some use staccato fragments: "Fill gaps. Remove blockers. Translate between worlds." is Version A (LinkedIn slop by the rhythm doc's definition).

"Working software surfaces what planning never could" is the same polished line we already replaced in the hero.

### Recommendation

Rewrite the opener to be about Uri's specific approach, not a generic PM definition. Give each pattern description a different rhythm. Cut the staccato fragments.

## 2. Em-Dashes Everywhere

Almost every sub-page uses `--` as interruptors, often multiple times. The style guide explicitly flags em-dashes as an AI tell. Examples from just the first few pages:

- "timing delays (15min occupied-to-standby, 5min standby-to-occupied) were completely missing" (build-to-discover)
- "Customer understanding isn't something you do once and move on from -- it compounds" (customer-intimacy)
- "Competitive positioning at the business model level. Where are incumbents structurally constrained?" (strategy-to-shipping-code)

Each of these can be restructured as two sentences or use a colon instead.

## 3. Generic Section Headers

"The Method," "The Approach," "The Model," "The Result," "The Lesson," "The Principle," "The Common Thread," "Why This Matters," "The Painful Part."

The anti-patterns doc calls these out as AI scaffolding that announces structure. They're placeholder labels, not content. A page titled "Build to Discover" with a section called "The Method" is saying the same thing twice. Either make headers content-specific or remove them and let the narrative flow.

## 4. Same Evidence Recycled Three Times

The Stanford timing errors and Qualcomm 24/7 HVAC waste appear in:
- build-to-discover.md (the discovery stories)
- customer-intimacy.md (the evidence section)
- strategy-to-shipping-code.md (zooming in section)

A reader clicking through these pages sees the same two examples doing triple duty. Each page should use its own evidence, or if the same story appears, it should be told from a different angle that serves the specific page's argument.

## 5. "Zooming Out / Zooming In" Headers

strategy-to-shipping-code.md uses "Zooming Out" and "Zooming In" as section headers. We decided in the hero discussion that zoom in/out doesn't translate well without the full interview context. Same issue here.

## 6. First-Person Narrative Stripped Out

The interview material is full of Uri telling stories as stories: "I initially thought we should focus only on operating hours but I saw the system behaving oddly before working hours, so I expanded the data aperture and quickly realized that the opportunity for providing insight was even larger on nights and weekends."

The sub-pages strip this into impersonal summaries: "Built a commissioning dashboard scoped to operating hours. Expanded the data aperture and discovered nights/weekends systems running as if occupied 24/7."

The interview version is more engaging because it has a narrator making decisions. The sub-page version reads like a project postmortem written by someone other than the person who did the work.

## 7. Customer Intimacy Now Overlaps With Hero

The hero now covers persona breadth with specific examples ("Built for facilities engineers, sold to CFOs, led marketers, managed suppliers, transformed organizations"). The customer-intimacy page repeats the same point with a bullet list of personas. With the new hero, this page needs a different angle or it's just saying what the landing page already said.

## 8. Pages That Are Actually Strong

**Trust as the Product** is the best page in the section. Clear three-part framework, each principle grounded in a specific project, the closer lands. Main issues are em-dashes and the generic "Three Principles" / "The Common Thread" headers.

**The MVP Trap** is the second strongest. Real story, painful punchline, earned lesson. The main issue is choppy section headers ("What Happened," "Why It Failed," "The Right MVP," "The Painful Part," "The Lesson") breaking up what should flow as a single narrative. This story is powerful enough to be told straight through.

## 9. Should There Be 7 Sub-Pages?

Some pages are thin: customer-intimacy and cross-functional-leadership are both under 200 words and cover ground that's now partly handled by the hero. Others overlap significantly.

Possible consolidation:
- **Customer Intimacy + Build to Discover** could merge. Customer understanding is what you're building to discover. The persona breadth gives you the taste to know what to build, and building surfaces what you didn't know.
- **Engineering Collaboration + Strategy to Shipping Code** could merge. Both are about how building fits into the broader product/engineering dynamic.
- **Cross-Functional Leadership** might be better as evidence within other pages rather than its own page. The 2025 quarter is a strong example, but it's a supporting anecdote, not a standalone philosophy.

That would leave:
1. Build to Discover (with customer intimacy woven in)
2. Strategy to Shipping Code (with engineering collaboration woven in)
3. Trust as the Product
4. The MVP Trap

Four pages instead of seven. Each with enough substance to stand on its own.

## 10. Summary of Suggested Changes

| Issue | Where | Fix |
|-------|-------|-----|
| PM 101 opener | skill.md | Rewrite to match hero energy |
| Formulaic parallel descriptions | skill.md | Give each pattern different rhythm |
| Staccato fragments | skill.md, cross-functional-leadership | Write as complete thoughts |
| Em-dashes as interruptors | All sub-pages | Restructure sentences, use colons |
| Generic section headers | All sub-pages | Content-specific or remove |
| Same evidence x3 | build-to-discover, customer-intimacy, strategy | Each page gets its own angle |
| Zoom in/out framing | strategy-to-shipping-code | Replace, consistent with hero |
| Stripped narrative voice | build-to-discover, customer-intimacy | Restore first-person storytelling |
| Overlap with new hero | customer-intimacy | Needs new angle or consolidation |
| Too many thin pages | Overall | Consider 4 pages instead of 7 |
