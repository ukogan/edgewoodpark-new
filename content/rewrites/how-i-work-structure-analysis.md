# How I Work: Structure vs. Signal Analysis

## The Structure Is Intentional

The current 7-page layout maps to the "Must Signal" list from the JD research (13 companies analyzed). My earlier consolidation recommendation was wrong to treat these as interchangeable. Each page exists to hit a specific hiring signal, and those signals were derived from what 10-13 companies actually require in Applied AI PM roles.

## Page-to-Signal Mapping

| Page | Primary JD Signal | Tier | Frequency |
|------|-------------------|------|-----------|
| Customer Intimacy | Customer obsession with enterprise depth | Tier 1 | 10+ of 13 |
| Cross-Functional Leadership | Cross-functional leadership | Tier 1 | 10+ of 13 |
| Build to Discover | Ambiguity tolerance / 0-1 capability + Rapid prototyping | Tier 1 + Tier 2 | 10+ / 6-9 |
| Strategy to Shipping Code | Product craft at scale + Strategic thinking | Tier 1 | 10+ of 13 |
| Engineering Collaboration | Cross-functional leadership + Technical fluency | Tier 1 + Tier 2 | 10+ / 6-9 |
| Trust as the Product | AI fluency (safety/limitations) | Tier 1 | 10+ of 13 |
| The MVP Trap | Product judgment (learning from failure) | Tier 1 | 10+ of 13 |

Every page maps to a Tier 1 non-negotiable signal. Consolidating pages means weakening specific signals. The structure should stay.

## The Problem Isn't Structure, It's Execution

Each page needs to:
1. Go deeper than the hero (which now covers persona breadth, operating range, and build-to-discover philosophy at headline level)
2. Use different evidence than the other pages (no more Stanford/Qualcomm triple duty)
3. Sound like Uri, not AI
4. Be substantive enough to stand alone

## Evidence Assignment (Solving the Recycling Problem)

Each major story should live on one page as a first-person narrative. Other pages can reference it briefly but not retell it.

| Evidence | Primary Home | Why |
|----------|-------------|-----|
| Stanford timing errors discovery | Build to Discover | The discovery itself is the point |
| Qualcomm nights/weekends discovery | Customer Intimacy | Expanding the data aperture happened because of deep curiosity about the customer's environment, not because a spec told him to |
| Architecture contrast (Stanford homogeneous vs. Qualcomm heterogeneous) | Strategy to Shipping Code | This is strategic product judgment: letting the customer's data model drive architecture |
| Competition bot sequence (profiles → sales feedback → chatbot) | Build to Discover | Build-to-discover in action: the sequence mattered because each build surfaced what the next build needed |
| 2025 quarter (ODCV expert + marketing + tools + strategy) | Cross-Functional Leadership | The range evidence |
| Toolset lesson (Python/Plotly vs. React) | Engineering Collaboration | Directly about eng collaboration |
| IAQ dashboard failure | The MVP Trap | Already there, stays there |
| Retirement advisor PII stripping | Trust as the Product | Already there, stays there |
| Competition bot eval system + scope enforcement | Trust as the Product | Already there, stays there |
| ODCV human-in-the-loop | Trust as the Product | Already there, stays there |
| Claude Workflows (pre-dated CoWork) | Could support Build to Discover or Strategy | Product sense evidence |
| Honeywell/vendor-neutral competitive analysis | Strategy to Shipping Code | Strategic thinking at business model level |
| Marketing content pipeline (objections → blog posts) | Cross-Functional Leadership | Currently unused, shows marketing leadership substance |
| Process (research → codify → diverge → evaluate → converge) | Build to Discover | The "how" behind the philosophy |

## Page-by-Page Direction

GENERAL FEEDBACK:
* STANFORD QUALCOMM AND OTHER CUSTOMERS SHOULD BE DISGUISED. THIS WILL ALSO ALLOW THEM TO BE REUSED IF NEEDED IN MULTIPLE PLACES.
* FOR THE HIRING MANAGER THAT IS SCANNING, THESE PAGES NEED TO BE TERSE; LONG NARRATIVES WON’T GET READ. BUT I COULD CREATE A BLOG POST FOR EACH AND LINKED IN EACH SECTION TO GIVE A MORE NARRATIVE ACCOUNT.


### 1. Build to Discover

**Signal:** Ambiguity tolerance, 0-1 capability, rapid prototyping with AI
**Hero already says:** "Building quickly is how you discover a great product, if you have taste."
**This page needs to go deeper:** Show the process and two evidence stories.

**Suggested structure:**
- Open with the philosophy in Uri's words (near-verbatim from interview: "I'm a 0-1 PM who wants to validate customer needs as fast as possible by building working software before committing eng time")
- The process: research users deeply, codify into agent-readable context, divergent exploration (5-10 directions), parallel evaluation, pattern recognition, converge into testable options, real customer feedback. This is currently nowhere on the site and it's the most differentiated content Uri has.
- Stanford discovery: told as a first-person narrative ("I built this expecting to find X. Instead I found Y. Here's what happened next.")
- Competition bot sequence: built profiles first, sales said "how do I use this on a call?", built chatbot on validated corpus. If chatbot came first, the knowledge base wouldn't exist. Sequence mattered.
- Connection to the MVP Trap: "Build to discover is the antidote to the failure I describe in The MVP Trap. If we'd built the simplest useful insight first instead of the data dashboard, we'd have caught the mistake in days."



### 2. Customer Intimacy

**Signal:** Customer obsession with enterprise depth
**Hero already says:** "Built for facilities engineers, sold to CFOs...I understand buyer behavior across many contexts, because I've lived in them."
**This page needs to go deeper:** Not "I've talked to many persona types" (hero already covers that) but what deep customer engagement actually produces.

**Suggested structure:**
- Open with what customer intimacy looks like in practice: not one-time research phases but ongoing relationships where trust compounds. The key claim: deep customer engagement produces discoveries that no amount of planning can.
- Qualcomm discovery: told as a first-person narrative. "I initially thought we should focus only on operating hours but I saw the system behaving oddly before working hours." This discovery happened because of curiosity about the customer's full environment, not because it was in the spec.
- The clipboard-and-wrench vs. desk-with-financial-models insight from the interview: understanding that some customers walk buildings with physical tools while others think in financial models changes everything about what you build for them.
- The compounding effect: how each customer engagement expands what you know about the next customer. Stanford insights informed the Qualcomm approach, which informed Brandywine.

* INTERVIEW ME FOR MORE DETAILS ON CLIPBOARD AND WRENCH AND HOW I LEARNED THAT NO ONE IN THE BUILDING KNOWS HOW IT REALLY WORKS
* ANOTHER DATA POINT FOR CUSTOMER INTIMACY THAT ALSO REVEALS A DIFFERENT SIDE OF AI PM IS MY PM'ING OF OUR FIRST NEW SENSOR SINCE ACQUIRING A SENSOR COMPANY YEARS AGO, BASED ON SUPER-POWER EFFICIENT ON-DEVICE IMAGE PROCESSING ML MODELS. THE NEW SENSOR IS NOW THE HARDWARE FOUNDATION FOR OUR COMPANY STRATEGY; IT MAKES IT POSSIBLE TO ECONOMICALLY COUNT OCCUPANCY IN LARGE SPACES TO REDUCE OVERVENTILATION. PLEASE ASK ME QUESTIONS TO TEASE OUT THIS INFO. THE CUSTOMER INTIMACY ASPECT IS HOW I WORKED CLOSELY WITH SEVERAL CUSTOMERS TO UNDERSTAND REQUIREMENTS, USE CASES, AND TEST IN THE REAL WORLD  

### 3. Cross-Functional Leadership

**Signal:** Cross-functional leadership (alignment across eng, design, data science, GTM, marketing, success)
**Hero already says:** "Consulting, product marketing, marketing leadership, product management."
**This page needs to go deeper:** Not "I've held these jobs" (hero covers that) but what cross-functional fluency looks like in a specific high-stakes quarter.

**Suggested structure:**
- Open with the principle in Uri's voice: something closer to "My approach throughout was simple: fearlessly do whatever it takes to make the product successful" (from the 2025 summary).
- The 2025 quarter told as a connected narrative, not a bullet list. This was one quarter where he simultaneously became the ODCV domain expert, led marketing through a leadership gap (with specifics: built an AI content pipeline turning customer objections from sales calls into targeted blog posts, 6 posts in 4 weeks), built customer-facing tools, and took the company's most important initiative from theory to proof of value.
- The marketing content pipeline is currently unused evidence and it's strong: it shows both marketing leadership and applied AI (using AI to turn call objections into content).
- CEO visibility, GTM partnership, engineering collaboration all in the same period. The point isn't that he was busy. The point is that product management at this level means operating wherever the business needs you, and having the skills to actually contribute in each context.

THE BETTER FRAMING HERE IS LESS THAT I TOOK OVER THE JOBS OF OTHER DEPARTMENTS, WHICH IS NOT REALLY CROSS-FUNCTIONAL. BUT THAT AS THE PRODUCT MANAGER WHO IS ULTIMATELY RESPONSIBLE FOR THE SUCCESS OF THE PRODUCT, I SUPPORTED OTHER TEAMS EXTENSIVELY AND COLLABORATED WITH THEM TO ACHIEVE SUCCESS.

WHAT THAT LOOKS LIKE WITH ENGINEERING IS MOST NOTABLY BUILDING THE PROTOTYPES AND WORKING WITH CUSTOMERS ON EARLY PRODUCT TO DISCOVER EXACTLY WHAT THE RIGHT REQUIREMENTS WERE BEFORE ASKING ENGINEERING TO BUILD IN A MORE ENGINEERING-HARDENED, SCALABLE WAY. [ACTUALLY THERE IS AN ENG COLLAB SECTION BELOW ALREADY SO IGNORE THIS]

SECOND, WORKING WITH OUR SOLUTIONS AND OPERATIONS TEAM WHICH DID NOT HAVE ANY HVAC EXPERTISE AT THE TIME TO SERVE AS THE SME FOR BOTH FOR PRESALES AND TECHNICAL CONSULTING, FOR SOLUTION DESIGN AND FOR POST-SALES IMPLEMENTATION SUPPORT. IT MEANT WORKING WITH OUR GTM TEAM TO BRING EXPERTISE AND JUDGEMENT INTO OUR CONTENT CREATION PROCESS BY CAPTURING OBJECTIONS FROM CUSTOMER CALLS AND TURNING THEM INTO TAILORED CONTENT TO HELP MOVE THOSE PROSPECTS FURTHER DOWN INTO OUR PIPELINE QUICKLY.

SO REALLY IT’S REFRAMING THESE STORIES THROUGH MY WORK AS A PRODUCT MANAGER IN COLLABORATION WITH OTHER TEAMS RATHER THAN THE IDEA THAT I WAS JUST DOING ALL OF THE JOBS. 

### 4. From Business Strategy to Shipping Code

**Signal:** Product craft at scale, strategic product thinking
**Hero already says:** "Operating range to think about where the industry is going, where the customer is headed, where they are now, and build the software that gets them there."
**This page needs to go deeper:** Show the strategic thinking in action and prove the architecture-level product judgment.

**Suggested structure:**
- Open with the transferable skill (from interview): analyze the competitive landscape at the business model level, identify where incumbents are structurally constrained, build strategy around what they can't do.
- The Honeywell/vendor-neutral analysis: every major BMS vendor claims to build the intelligence layer, but their business models prevent neutrality. This is specific, credible strategic thinking.
- The data moat thesis: invest engineering in the hard part (data quality), prototype the interface layer quickly. The interface (dashboard, agent, MCP server) will change rapidly. The data core won't. This is a real strategic argument, not a platitude.
- Architecture contrast as product judgment: Stanford and Qualcomm had the same goal (HVAC data validation) but demanded radically different architectures because the customer's data model was different. This is not about "I built two things." It's about recognizing that the customer's reality should drive the architecture, not a reusable framework.
- Replace "Zooming Out / Zooming In" headers with something content-specific.

THE ARCHITECTURE POINT IS NOT REALLY RELEVANT HERE. THE REST OF THE CONTENT IS GOOD BUT ALSO CONFIDENTIAL, SO I’M NOT SURE HOW TO REPRESENT IT ON THIS PAGE. 

### 5. Engineering Collaboration

**Signal:** Cross-functional leadership (specifically with engineering), technical fluency
**This page needs to go deeper:** The model for how a PM who builds works alongside engineering without competing.

**Suggested structure:**
- Open with the model: engineering does foundational work (data pipelines, infrastructure), PM builds 0-1 customer-facing tools. These tools generate evidence. Engineering then builds the "engineered solution" with requirements backed by real data, not speculation.
- The toolset lesson told as a first-person narrative (from interview: "In my early coding experiments I left it up to Claude Code to choose languages. It wrote a lot of Python. But most of our engineering team is not that familiar with Python, so they didn't really understand what I'd built as well as I might have liked."). The lesson: impose the team's stack on Claude so the output is legible to engineers. This is specific, practical, and differentiating.
- The outcome: prototypes become proven requirements. Engineering builds with high confidence because the PM already validated with real customers. This isn't a theoretical model; he can point to the fact that engineering is now building the "engineered solution" for ODCV based on requirements that came from tools he built and tested with Stanford and Qualcomm.

### 6. Trust as the Product

**Signal:** AI safety/ethics awareness, AI fluency
**This page is the strongest.** Three principles, each grounded in a project. Keep the framework structure (per the structure doc's "Framework Pieces" guidance: numbered elements, colons after terms).

**Fixes needed:**
- Strip all em-dashes, restructure as colons or separate sentences
- Replace "Three Principles" header with something more specific, or just let the numbered principles speak for themselves
- Replace "The Common Thread" with a closer that doesn't announce itself as a summary
- Add slightly more first-person narrative to each principle (how did he arrive at the decision, not just what the decision was)
- "The instinct to constrain AI to be reliably useful rather than impressively wrong" is a strong line. Keep it.

### 7. The MVP Trap

**Signal:** Product judgment, learning from failure
**This page is the second strongest.** Real story, painful punchline, earned lesson.

**Fixes needed:**
- Tell it as a flowing narrative instead of five choppy sections. This story is maybe 200 words of content with 5 headers. That's a header every 40 words. Let it breathe as prose.
- Use more of the interview language: "Our customers don't want to log in and see minute-by-minute or hour-by-hour data on volatile organic compounds on the 14th floor. They want to know: Is my building comfortable? Where are the problem spots?"
- The connection to build-to-discover: "This failure is why I build to discover now. If we'd built the simplest useful insight first, we'd have caught the mistake in days, not months."
- "Every yes has to be high-conviction. Knowing the principle isn't enough; you have to feel the cost of violating it." This line is already strong. Keep it, but fix the em-dash.

### Index Page (skill.md)

**Rewrite the opener.** Drop the PM 101 definition. The reader just saw the hero. They don't need "Product management is about three things." They need to understand what makes Uri's approach different.

**Give each pattern description a different shape.** Not seven parallel bold-name-plus-em-dash entries. Examples of varied rhythm:
- One could be a one-sentence claim followed by a question
- One could lead with the evidence and let the reader infer the principle
- One could be a brief narrative setup
- One could be a direct, confident assertion

The descriptions should make a reader want to click through, not just scan past.
