# Uri Kogan — PM Craft Profile (Synthesized)

*Compiled from interview, source material review, and project analysis — February 2026*

---

## The Positioning

A 0-1 PM who validates customer needs by building working software before committing engineering time. Not an engineer — a strategist with decades of B2B experience across buyers, sellers, and business models who uses agentic engineering to compress the distance between insight and evidence. Building quickly is a way to discover a great product, especially if you have taste.

---

## The Core Differentiator: Zoom Range

- **Zoom out:** Business model analysis, competitive positioning at the strategy level ("their business models prevent them from doing what we do"), industry direction (data layer as moat, interface layer commoditizing)
- **Zoom in:** Working software serving real pilot customers, specific data discoveries (Qualcomm nights/weekends, Stanford timing errors, Brandywine heat pump setpoints)
- **The gap others can't fill:** Engineers-turned-PMs zoom in but struggle with market dynamics and buyer psychology. Traditional PMs zoom out but can't build. Uri does both, with decades of persona empathy across CFOs, AP clerks, facilities engineers, marketers, creative supply chain, and more.

---

## The Process: Build to Discover

1. Research users and existing tools deeply (clipboard-and-wrench engineer vs. desk-with-financial-models PM)
2. Codify knowledge into agent-readable context (markdown, agent skills)
3. Divergent exploration (5-10 directions, intentionally creative)
4. Parallel evaluation against user criteria (separate reviewer agents)
5. Pattern recognition across imperfect outputs to find promising kernels
6. Converge into testable options for real customers
7. Real customer feedback reveals what planning never could

---

## Evidence: Build to Discover in Action

### Stanford ODCV Dashboard
Built to find missing data → discovered incorrect SOO implementation (vendor missed timing delays: 15min occupied→standby, 5min standby→occupied) → 10-15% savings being left on table → customer trust shifted from their MSI (Syserco) to R-Zero.

### Qualcomm Dashboard
Built for operating hours → expanded data aperture → discovered nights/weekends systems running as if occupied 24/7. A configuration error bleeding money invisibly. Bigger opportunity than the original scope.

### Competition Bot
Built rich competitive profiles, battlecards, comparison matrices → shared with sales → feedback: "how can I use this to respond to a prospect on a call?" → built chatbot on the validated knowledge corpus. If chatbot came first, the knowledge corpus and data validation system wouldn't exist. Sequence mattered.

### Claude Workflows App
Independently conceived and built a product conceptually similar to Anthropic's Claude CoWork — before CoWork existed. Designed for non-technical users to create skills, delegate to agents, with trust-building permission dialogs and sandboxed execution. Evidence of product sense: seeing the same opportunity as Anthropic's product team.

---

## Engineering Collaboration

1. **Fill the gap, don't compete**: Engineering focused on foundational work (data pipelines, tech debt); PM builds customer-facing 0-1 tools that serve pilot customers
2. **Prototypes → proven requirements**: Tools generate real customer evidence, then engineering builds the "engineered solution" with high-confidence requirements backed by data
3. **Match the toolset**: Learned to impose team's tech stack on Claude so output is legible to engineers. Early experiments in Python/Plotly when team uses React created comprehension gap. Now configures Claude with team's language, libraries, and structures.

---

## Safety & Trust: Three Principles

1. **Don't collect what you don't need** (Retirement Advisor) — PII stripping as trust design, not just security. What's important is context of situation, not identity. Especially critical for older users who are wary of uploading private information.

2. **Verify AI output systematically** (Competition Bot) — Source verification (agents check facts against sources), eval system (systematic testing of chatbot answers), scope enforcement (discovered agent answering beyond knowledge base, tightened instructions). The instinct to constrain AI to be reliably useful rather than impressively wrong.

3. **Keep humans in control** (HVAC/ODCV) — Not making AI recommendations. Implementing customer-approved sequences based on recognized national/international standards. Customer always has kill switch. AI informs, humans decide.

**Common thread: Trust is the product.** Whether it's a senior managing finances, a sales rep using competitive data, or a facility manager controlling HVAC — if the user doesn't trust the system, the system doesn't matter.

---

## Strategic Thinking: Business-Model-Level Competitive Analysis

The general principle: **I analyze competitive dynamics at the business model level to derive product strategy.** The specific strategy depends on the competitive landscape, not a universal formula.

**Example — R-Zero (building data):**

"The moat is data. The wedge is outcomes." — but this is the right strategy *because of the specific competitive landscape*, not because "data is always the answer":

- Every major BMS vendor (Honeywell Forge, JCI OpenBlue, Siemens, Schneider) claims to build "the intelligence layer for buildings." But their business models prevent neutrality — Honeywell will never tell a customer to replace Honeywell equipment.
- 90% of commercial buildings are equipment zoos that will never be cloud-native. Vendor platforms require expensive retrofits or ecosystem lock-in.
- The opportunity: vendor-neutral intelligence on existing infrastructure, earned through delivering immediate outcomes (energy savings), not promises.

In this context, the interface layer (dashboards, agents, MCP servers) will change rapidly and is relatively easy to build if the data core is strong. The same principle plays out across AI: the model capability is the foundation, the interface expressions multiply from there (Opus → Claude Code → Claude CoWork). So invest engineering in the hard part (data quality); prototype the interface layer quickly. That's where a PM who builds comes in.

**The transferable skill is not "always bet on data."** It's: analyze the competitive landscape at the business model level, identify where incumbents are structurally constrained, and build strategy around what they *can't* do — not what they *haven't* done.

---

## The Failure That Shaped the Philosophy

**What happened:** Built an IAQ data dashboard as "logical first step" toward delivering insights. Team already knew from customers and sales that insights were the endgame. The mistake: assuming "show the data first, derive insights later" was the natural MVP sequence.

**Why it failed:** Customers don't want minute-by-minute VOC readings on the 14th floor. They want: "Is my building comfortable? Where are the problem spots? Are complaints warranted?" The dashboard was neither easy (substantial work) nor useful (customers didn't engage).

**The right MVP:** What is the simplest insight we can deliver that would actually be useful? Build THAT to validate the premise, then extend.

**The painful irony:** Head of product was a Marty Cagan school disciple who preached exactly this — validate before building. They both knew the principle. They fell into the trap anyway.

**The lesson:** Every yes has to be high-conviction. Knowing the principle isn't enough — you have to feel the cost of violating it.

**Connection to build-to-discover:** This failure doesn't explain why you *start* with customer understanding (you always should). It explains why building working software quickly is the fastest path *to* customer understanding. Even with the right principle (know your customer) and the right leadership (Cagan school), you can still get it wrong through planning alone. Build to discover gets you to the truth faster — because working software surfaces the gap between what you assumed and what's real. The IAQ dashboard failure would have been caught in days, not months, if the first build had been "the simplest useful insight" instead of "replicate the existing dashboard."

---

## Persona Breadth (Decades of B2B Buyer Empathy)

Not abstract "user empathy" — specific understanding of how each persona evaluates, buys, and uses:
- Marketers and creative supply chain professionals
- Enterprise content management buyers
- Accountants, CFOs, and AP clerks
- Commercial real estate portfolio managers and facility engineers
- Business transformation and technical consultants
- Startup founders and VCs

---

## What the Website Should Convey

- **Available for consulting and advisory** — Not advertising full-time job search, but actively seeking side engagements in advisory/consulting capacity. This is a soft, acceptable signal that also positions as an expert practitioner.
- **Consulting offerings:**
  - Teach teams to use agentic engineering to move faster and be more customer-centric
  - Help eng/product teams collaborate better as AI shifts traditional role boundaries
  - Applied AI product strategy — helping companies figure out how to use AI to solve their specific business problems
- **Project energy, not job search** — Someone doing the work who can help others do it too
- **Thrives in ambiguity** — Happiest when problem isn't well-defined, working closely with leadership, doing exploratory work with prototyping and customer interaction
- **Goes deep on domains** — Currently HVAC/buildings, previously finance, marketing, operations
- **Thinks sharply about problem space AND solution space** — Novel ways of delivering value

---

## Mapping to Applied AI PM Rubric

### Technical Credibility (target: 20/25)
- ✅ 30+ apps built with Claude Code (agentic engineering)
- ✅ Data fluency: SQL, Python, dashboards, pilot measurement frameworks
- ✅ Technical artifacts: working software, not just strategy decks
- ✅ Understands AI limitations: hallucination prevention, scope enforcement, eval systems
- ⚠️ No formal engineering background (but "or equivalent" accepted by 10/13 companies)

### Product Judgment & Track Record (target: 23/25)
- ✅ Multiple 0-to-1 products with measurable outcomes
- ✅ AI-native product decisions (eval systems, trust design, human-in-the-loop)
- ✅ Deep user research evidence (Stanford, Qualcomm, Brandywine discoveries)
- ✅ Adapted prioritization for AI products (build to discover, not waterfall)
- ✅ Enterprise and B2B expertise across multiple verticals

### Strategic Thinking & Communication (target: 18/20)
- ✅ Written communication quality (strategy doc, PRDs, the website itself)
- ✅ Accessible technical explanations (operational language, not statistical jargon)
- ✅ Vision articulation (data moat thesis, vendor-neutral positioning)
- ✅ Safety/ethics integrated into product thinking (three principles)

### Cultural Fit Signals (target: 13/15)
- ✅ Builder mentality (30+ apps, the site itself is the proof)
- ✅ Comfort with ambiguity (thrives in it)
- ✅ Collaboration emphasis (engineering partnership, cross-functional trust)
- ⚠️ Mission alignment with responsible AI (demonstrated in practice, could articulate more explicitly)
- ✅ Intellectual curiosity (new domains, new tools, continuous building)

### Presentation & Polish (target: 13/15)
- ✅ Design taste visible in site itself
- ✅ Information architecture reflects PM thinking
- ✅ Differentiated from generic PM portfolios

**Projected score: 87/100** — Strong hire signal range
