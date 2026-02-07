# Website Redesign: Analysis Approach & Design Direction

*Compiled February 2026 — synthesized from interview, UX research, JD analysis, mockup critiques, and project code review*

---

## 1. Target Audience & Positioning

### Who This Website Is For
Applied AI PM hiring managers at companies like:
- **Tier 1 (strong fit):** Ramp (requires Claude Code proficiency), Retool, Sierra, Intercom
- **Tier 2 (good fit):** Glean, Notion, Figma, Canva, Grammarly (accepts personal AI projects as equivalent)
- **Tier 3 (stretch):** Anthropic (CoWork, not Code), Harvey

Also: potential consulting/advisory clients — teams wanting to learn agentic engineering or improve eng/product collaboration as AI shifts roles.

### Positioning Statement
> A 0-1 PM who validates customer needs by building working software before committing engineering time. Not an engineer — a strategist with decades of B2B experience across buyers, sellers, and business models who uses agentic engineering to compress the distance between insight and evidence.

### Key Language Rules
- **USE:** "agentic engineering" — NOT "vibe coding"
- **USE:** "building working software" — NOT "coding" or "programming"
- **CONVEY:** Available for consulting and advisory — NOT "currently seeking employment"
- **PROJECT:** Someone doing the work who can help others do it too — NOT job seeker energy

---

## 2. The Core Differentiator: Zoom Range

The website must demonstrate the ability to zoom between:

**Zoom Out (strategy):**
- Business model analysis and competitive positioning ("their business models prevent them from doing what we do")
- Industry direction ("data layer as moat, interface layer commoditizing")
- Market dynamics and buyer psychology across many persona types

**Zoom In (execution):**
- Working software serving real pilot customers
- Specific data discoveries (Qualcomm nights/weekends, Stanford timing errors)
- Technical architecture decisions driven by customer data models

**The Gap Others Can't Fill:**
- Engineers-turned-PMs zoom in well but struggle with market dynamics and buyer psychology
- Traditional PMs zoom out well but can't build
- Uri does both, with decades of persona empathy across CFOs, AP clerks, facilities engineers, marketers, creative supply chain, and more

---

## 3. Evaluation Rubric (Applied AI PM — 100 points)

### Technical Credibility (25 points, target: 20)
- 30+ apps built with Claude Code (agentic engineering)
- Data fluency: SQL, Python, dashboards, pilot measurement frameworks
- Technical artifacts: working software, not just strategy decks
- Understands AI limitations: hallucination prevention, scope enforcement, eval systems
- ⚠️ No formal engineering background (but "or equivalent" accepted by 10/13 companies)

### Product Judgment & Track Record (25 points, target: 23)
- Multiple 0-to-1 products with measurable outcomes
- AI-native product decisions (eval systems, trust design, human-in-the-loop)
- Deep user research evidence (Stanford, Qualcomm, Brandywine discoveries)
- Adapted prioritization for AI products (build to discover, not waterfall)
- Enterprise and B2B expertise across multiple verticals

### Strategic Thinking & Communication (20 points, target: 18)
- Written communication quality (strategy doc, PRDs, the website itself)
- Accessible technical explanations (operational language, not statistical jargon)
- Vision articulation (data moat thesis, vendor-neutral positioning)
- Safety/ethics integrated into product thinking (three principles)

### Cultural Fit Signals (15 points, target: 13)
- Builder mentality (30+ apps, the site itself is the proof)
- Comfort with ambiguity (thrives in it)
- Collaboration emphasis (engineering partnership, cross-functional trust)
- Mission alignment with responsible AI (demonstrated in practice)
- Intellectual curiosity (new domains, new tools, continuous building)

### Presentation & Polish (15 points, target: 13)
- Design taste visible in site itself
- Information architecture reflects PM thinking
- Differentiated from generic PM portfolios

**Projected score: 87/100** — Strong hire signal range

---

## 4. Design Direction

### Winning Concepts
From 5 mockups created and reviewed, **concepts 1 (Live Session) and 2 (Diff View) are the strongest**. Future iterations should model on one or both.

**Concept 1 — Live Session (Terminal aesthetic):**
- Strengths: Clear positioning in 2 seconds, differentiated, self-demonstrating
- Weaknesses: "Wannabe engineer" risk, hides best work in collapsed cards, mobile degrades
- Review verdict: 70% there

**Concept 2 — Diff View (GitHub aesthetic):**
- Strengths: Hero diff is perfectly executed, CHANGELOG.md for experience is inspired, cohesive
- Weaknesses: Red/green text unreadable, colorblind-inaccessible, mobile breaks split-pane metaphor
- Review verdict: 80% there

**Rejected concepts and why:**
- Concept 3 (Annotated Transcript): Academic aesthetic signals "researcher" not "builder"
- Concept 4 (Workbench/IDE): Too complex, no guided entry point, fragments narrative
- Concept 5 (Collaboration Log): Over-credits AI, simulated heatmap is deceptive

### Cross-Cutting Fixes (Apply to All)
1. **PM craft and product sense in pole position** — not buried or absent
2. **Accessibility:** WCAG AA contrast ratios, colorblind-safe, keyboard navigable, ARIA labels
3. **"Agentic engineering" language** throughout — never "vibe coding"
4. **Quantified outcomes** on every project — not vague statements
5. **Mobile-first:** Core value proposition must survive on 375px
6. **Consulting/advisory CTA** — not job-seeker language
7. **Visual hierarchy by impact** — real customer work above internal tools above unreleased projects

---

## 5. Project Selection & Hierarchy

### Tier 1: Real Customer Tools (Lead Examples)
These two projects carried the most weight because they served REAL CUSTOMERS and generated actual evidence. They should be featured prominently, and their architectural contrast should be highlighted as evidence of customer-specific product thinking.

**Stanford ODCV Data Validation**
- *The Discovery:* Built to find missing data → discovered incorrect SOO implementation. Vendor (Syserco) missed timing delays (15min occupied→standby, 5min standby→occupied). 10-15% savings left on table. Customer trust shifted from their MSI to R-Zero.
- *Architecture:* Narrow validation at scale — same occupancy compliance rule applied across 100+ VAV zones. TimescaleDB for time-series, automated Slack reports, HTML timeline viewer.
- *PM Craft Signal:* Built to discover philosophy validated. Working software surfaced what specs and interviews could not.

**Qualcomm Commissioning Dashboard**
- *The Discovery:* Built for operating hours → expanded data aperture → discovered nights/weekends systems running as if occupied 24/7. A configuration error bleeding money invisibly. Bigger opportunity than the original scope.
- *Architecture:* Comprehensive validation of complexity — 103 heterogeneous BACnet metrics across 7 groups, 3 independent detectors (flatlining, gap, range), composite health scoring system, configurable thresholds per metric type.
- *PM Craft Signal:* Customer data model drove completely different architecture. Not a template — each tool was built for the specific customer's reality.

**Why the contrast matters:** Same PM, same building domain, same "HVAC data validation" goal — but radically different architectures because the customers' data models demanded it. Stanford had homogeneous zones (same rule × 100); Qualcomm had heterogeneous equipment (103 different metrics needing different validation logic). This is product judgment: letting the problem shape the solution rather than forcing a template.

### Tier 2: Internal Tools (Used by Real Teams)
- **Competition Bot** — Multi-agent competitive intelligence. Built profiles → sales feedback ("how do I use this on a call?") → chatbot on validated corpus. Eval system caught agent answering beyond scope. Sequence mattered: corpus before chatbot.
- **GongGPT** — Flask + Gong API + Google Sheets. Sales call intelligence pipeline. 11 config sheet types, 5-stage ETL, speaker classification.

### Tier 3: Building Aptitude (Development / Unreleased)
- **Claude Workflows App** — Pre-dated Anthropic's CoWork. React + Hono + TypeScript. Permission dialogs with risk stratification, sandboxed execution. Evidence of product sense: seeing the same opportunity as Anthropic's product team.
- **FindCPA** — CPA matching service (live at findcpa.vercel.app). Integrity-first marketplace design, Guide>List pivot, multi-Claude team workflow.

---

## 6. PM Craft Narrative (Front and Center)

The website must prominently feature these PM craft dimensions, not just project descriptions:

### Build to Discover
Building working software is the fastest path TO customer understanding. Even with the right principle (know your customer) and the right leadership (Cagan school), you can still get it wrong through planning alone. Working software surfaces the gap between what you assumed and what's real.

### The Process
1. Research users and existing tools deeply (clipboard-and-wrench engineer vs. desk-with-financial-models PM)
2. Codify knowledge into agent-readable context (markdown, agent skills)
3. Divergent exploration (5-10 directions, intentionally creative)
4. Parallel evaluation against user criteria (separate reviewer agents)
5. Pattern recognition across imperfect outputs to find promising kernels
6. Converge into testable options for real customers
7. Real customer feedback reveals what planning never could

### Engineering Collaboration
1. Fill the gap, don't compete — engineering does foundational work; PM builds customer-facing 0-1 tools
2. Prototypes → proven requirements — tools generate customer evidence; engineering builds "engineered solution" with high-confidence requirements
3. Match the toolset — impose team's tech stack on Claude so output is legible to engineers

### Safety & Trust: Three Principles
1. Don't collect what you don't need (Retirement Advisor — PII stripping as trust design)
2. Verify AI output systematically (Competition Bot — source verification + eval system + scope enforcement)
3. Keep humans in control (HVAC/ODCV — AI informs, humans decide, kill switch always available)

### Strategic Thinking
The transferable skill is NOT "always bet on data." It's: analyze the competitive landscape at the business model level, identify where incumbents are structurally constrained, and build strategy around what they *can't* do — not what they *haven't* done.

### The Failure That Shaped the Philosophy
Built IAQ data dashboard as "logical first step" toward insights. Knew insights were the endgame. The mistake: assuming "show the data first, derive insights later" was the natural MVP. It was neither easy (substantial engineering work) nor useful (customers didn't engage). Right MVP: the simplest useful insight. Even a Cagan-school product leader fell into this trap. The lesson: every yes has to be high-conviction. You have to feel the cost, not just know the principle.

---

## 7. Consulting/Advisory CTA

The website should include a clear but soft consulting CTA:
- **Teach teams agentic engineering** — move faster, be more customer-centric
- **Help eng/product teams collaborate better** — as AI shifts traditional role boundaries
- **Applied AI product strategy** — helping companies figure out how to use AI to solve their specific business problems

Framing: someone doing the work who can help others do it too.

---

## 8. What the "Must Signal" List Looks Like (from JD Research)

Based on analysis of 13 companies' applied-AI PM roles, the site must signal:

| Signal | Evidence |
|--------|----------|
| AI tools in daily PM work | 30+ apps, this website itself |
| Customer-centric discovery | Stanford/Qualcomm discoveries, build-to-discover process |
| 0-to-1 product experience | Multiple products from concept to real users |
| B2B and enterprise depth | 15+ years across multiple verticals |
| Cross-functional leadership | Engineering collaboration model, stakeholder management |
| Strategic product thinking | Data moat thesis, competitive analysis at business model level |
| AI safety/ethics awareness | Three principles with concrete examples |
| Written communication quality | PRDs, strategy docs, the website itself |
| Comfort with ambiguity | Thrives in it — happiest when problem isn't well-defined |
| Technical credibility without engineering degree | Agentic engineering as "or equivalent" for CS requirement |

---

## 9. Next Steps

1. **Create v2 mockup(s)** synthesizing best elements of concepts 1 and 2 with PM craft in pole position
2. **Use the applied-AI PM rubric** (Section 3) as evaluation criteria for new mockups
3. **Feature the 6 selected projects** in proper hierarchy (Section 5)
4. **Highlight Stanford vs Qualcomm architectural contrast** as evidence of customer-specific product thinking
5. **Include consulting/advisory CTA** (Section 7)
6. **Apply all cross-cutting fixes** — accessibility, language, quantified outcomes, mobile-first
7. **Run UX review agents** with the rubric as scoring criteria (not generic UX review)
8. **Get user feedback** on v2 before proceeding to production code
