# PM Craft Interview — Raw Q&A

*Conducted February 2026 during website redesign process*

---

## Question 1: Build to Discover Philosophy

**Q:** You said: "Building quickly is a way to discover a great product, especially if you have taste." Can you give me a specific example where building a working version revealed something about the customer need that you would NOT have discovered through specs, wireframes, or user interviews alone?

**A (Uri):**

Building the ODCV dashboard for Stanford, my initial intuition was that we needed very high fidelity data views to see when data was missing (we expected a lot of missing data), but that the actual programmed sequence (which was very simple) would be implemented correctly. Turns out data was rarely missing, but the SOO was implemented incorrectly. The vendor completely missed the timing delays (15 minutes delay to go from occupied → standby, 5 minutes to go the opposite way). This caused total savings to be about 10-15% lower than they should have been. The customer was surprised to discover this; until that moment they trusted Syserco, their MSI, much more than us. But after that meeting, their trust in us jumped dramatically.

A similar discovery happened with the Qualcomm dashboard I built. I initially thought we should focus only on operating hours (when ODCV is active) but I saw the system behaving oddly before working hours, so I expanded the data aperture and quickly realized that the opportunity for providing insight and improving their HVAC performance was even larger on nights and weekends since it was way off from where it should have been.

In the case of the competition bot, I created very rich competitive profiles, battlecards, comparison matrices, etc. and shared it with sales. They loved it but their biggest feedback was "how can I use this to respond to a prospect's question or objection on a call" which led me to build a chatbot that could answer their questions based on the collected data on dozens of competitors. If I had built that chatbot from the beginning, I might not have built the knowledge corpus behind it and the rich system of data validation that ensures the data (collected by AI) is reliable.

**Summary:**
- **Stanford**: Built to find missing data → discovered incorrect SOO implementation (timing delays) → shifted customer trust from their MSI to R-Zero. 10-15% savings left on table.
- **Qualcomm**: Built for operating hours → expanded data aperture → discovered nights/weekends way off. Bigger opportunity than original scope.
- **Competition Bot**: Built rich profiles → sales feedback ("how do I use this on a call?") → built chatbot on validated corpus. Sequence mattered — corpus before chatbot.

---

## Question 2: Taste and Product Sense

**Q:** When you're building something with Claude, how do you know when the output is "right"? Not functionally correct — aesthetically, experientially right. What's the internal signal? Can you give me an example of pushing Claude past a first draft because your taste said it wasn't good enough?

**A (Uri):**

It starts with research on existing tools that serve the target user and their shortcomings. (Sometimes this is obvious, sometimes not). Understanding how your user does their job is critical. At R-Zero some of our customers sit behind a desk and think in financial models and building P&Ls. Others walk the building with a physical clipboard and a wrench, and come back to a desk with 5 monitors that each are flashing red with 100 non-prioritized fault alarms.

Once you have a view of what your customer needs and how current solutions are failing them, as well as what your solution does, you can create markdown or even agent skills that describe them. Then you can use UX prototyping agents to simultaneously create many mockups. I usually start with 5-10, and ask Claude to be creative, think outside the box. Some or even most of the results might be terrible but you'll get a few really promising ones and some interesting ideas scattered throughout the others. It can also be helpful to have separate UX reviewers evaluate those prototypes against your user information. You can iterate this process a few times to get to a really strong start (in fact that is what we are doing in building this website...).

Within an hour or less you have explored a wide range of potential directions, discovered some really interesting ideas that you think are promising, and can synthesize them into a few really strong options to put in front of actual users, and then iterate from there.

**Summary:**
1. Research users and existing tools deeply (clipboard-and-wrench engineer vs. desk-with-financial-models PM)
2. Codify knowledge into agent-readable context (markdown, agent skills)
3. Divergent exploration (5-10 directions, intentionally creative)
4. Parallel evaluation against user criteria (separate reviewer agents)
5. Pattern recognition across imperfect outputs to find promising kernels
6. Rapid convergence into testable options for real customers

---

## Question 3: Working With Engineers When You Can Also Build

**Q:** How does your ability to build change the dynamic with engineering teams? Did engineering view your building as helpful or threatening? How do you decide "build myself" vs. "goes through engineering"? Is there a story where your prototype changed the conversation?

**A (Uri):**

At R-Zero engineering has largely been focused on foundational technology — data pipelines, tech debt. The customer-facing tools I built were also still very much in the 0-1 stage as I described earlier. They went from prototypes to serving our pilot customers and proving what was really needed. Now that we have those learnings, I've written product requirements that both product and engineering have much more confidence in and evidence for, and engineering is building the MVP of the "engineered solution."

The other important dimension of engineering collaboration is working from a common set of foundational tooling. In my early coding experiments I left it up to Claude Code to choose languages. It wrote a lot of Python. But most of our engineering team is not that familiar with Python, so they didn't really understand what I'd built as well as I might have liked. On the front end, our product is built in React, and my tools used Python/Plotly.js. Charts and graphs use different libraries, etc.

So the other important dimension I learned from this is to set up Claude to use the toolset your team already uses (unless you have a really good reason not to). The more of your engineering team's structures you impose on Claude, the more the output will make sense to them.

**Summary:**
1. **Fill the gap, don't compete**: Engineering focused on foundational work; PM builds customer-facing 0-1 tools
2. **Prototypes → proven requirements**: Tools serve real pilot customers, generate evidence, then engineering builds the "engineered solution" with high-confidence requirements
3. **Match the toolset**: Learned to impose team's tech stack on Claude so output is legible to engineers

---

## Question 4: The "Not an Engineer" Positioning

**Q:** How would you explain to a hiring manager why a PM who builds with agentic engineering is MORE valuable than either (a) a traditional PM who only writes specs, or (b) an engineer who became a PM?

**A (Uri):**

My special sauce is my decades-long background as a product marketer and executive. In B2B settings I've sold in many product categories and so I have strong intuition on how many different persona types think — marketers, creative supply chain, enterprise content management, accountants, CFOs, AP clerks, and commercial real estate folks. And I've worked in supply chain, business transformation consulting, technical consulting, and many startups.

Unlike an engineer who's become a PM, I've spent decades working with customers of all shapes and sizes. Unlike a traditional PM writing specs, I am a strategist who can think about where the industry is going, where our customer is going, where they are now, AND how do we help them do their job better tomorrow (the specs). I can zoom way out and way in.

**Summary: The Zoom Range**
- Engineers-turned-PMs zoom in well but struggle to zoom out to market dynamics and buyer psychology
- Traditional PMs zoom out well but can't zoom in to working software
- Uri does both, with decades of persona empathy across wildly different buyer types

---

## Question 5: Safety and Ethics

**Q:** Have you encountered situations where you had to think about responsible use of AI in something you built?

**A (Uri):**

**Retirement Advisor (PII stripping):** I wanted to strip out PII because what's important is not your specific information but the context of your situation to be able to advise you on what you should do. I also thought that customers would be concerned about uploading private information to a website, especially older people. This was an important aspect of building trust with them and also not having to be responsible for data that isn't actually necessary to service the customer. For this particular product, I was building something on my own, not thinking about how I would do it in the context of a company that has sophisticated security, DevOps, and all of the rest.

**Competition Bot (hallucination prevention):** I specifically built in a mechanism to both generate sources and then have other agents check the factual data against the sources to make sure that there were no hallucinations. [Additional detail:] I also generated an eval system to ensure that the agent I wrote for the chatbot was generating good answers, and in building and testing it I noticed that it was sometimes answering questions with information that was beyond the scope of the underlying information that it should have been referencing, and so I tightened up the instructions for the agent to remedy that.

**HVAC/Building tools (human control):** We are not making AI recommendations. We are implementing a sequence of operations that the customer approves and implements. We are explicitly telling the customer that we are not trying to run their building for them in a black-box, them-losing-control sort of way. They are in control. They are approving what we're doing in advance, and of course they also have a kill switch anytime they need it. We want to make sure that they feel comfortable and that we are assuring the quality of what we are telling them because it is based on recognized national and international standards and also factoring in their specific risk mitigation around comfort with IAQ data that we also provide.

**Summary — Three Principles:**
1. **Don't collect what you don't need** — Trust design, not just security
2. **Verify AI output systematically** — Source verification + eval system + scope enforcement
3. **Keep humans in control** — AI informs, humans decide. Kill switch always available.

---

## Question 6: Where Applied AI Is Going (Zoom Way Out)

**Q:** What's your view on where applied AI is going for B2B over the next 2-3 years? What's the non-obvious insight?

**A (Uri):**

At R-Zero we are actively discussing strategy as it relates to where AI is going. My view in that discussion is that it's not really a question of whether we should continue to focus on our dashboard as the customer-facing expression of the product or build an AI agent, but that we actually need to focus on the data layer as our core strategic strength.

Our strategy should be to use our energy savings offering to get into buildings where we can then trend BMS points and that becomes the gold. Whether the front end is a dashboard or an agent or a customer's agent that can come and get data from us via an MCP server or an API or some as-yet-to-be-invented way of their agents interacting with our data is hard to predict because the industry is moving very quickly.

But if our data is useful and additive to various use cases, we should be successful. The implication is that we should really be focusing on ensuring that our data engineering is rock-solid. If our dashboard needs to be slapped together or we need to put together an agent, that's fine, but those experiences are not the core of our product where we should be investing the bulk of engineering resources.

[Uri also shared a full strategic document "R-Zero AI Strategy: The Neutral Intelligence Layer for Commercial Buildings" covering competitive positioning, three strategic pillars, and specific examples. Key thesis: "The moat is data. The wedge is outcomes." — see separate reference, content is confidential]

[Additional point:] The PM can stand up customer-facing tools quickly; if the data core is strong, the agent part is relatively easy. Look at the difference between Opus and Claude Code, or Claude Code and Claude CoWork — the model capability is the foundation, the interface expressions multiply from there.

**Summary:**
- "Data layer is the moat" is the right strategy for R-Zero *specifically* because of the competitive landscape (vendor-locked incumbents, 90% non-cloud-native buildings, wedge = outcomes that earn data access) — NOT a universal B2B AI principle
- Interface expressions (dashboards, agents, MCP servers) will change rapidly and are relatively easy to build if the core is strong (same model powers Opus, Claude Code, and CoWork)
- Invest engineering in the hard part (data quality); prototype the interface layer quickly — that's where a PM who builds comes in
- The transferable skill: analyze competitive dynamics at the business model level, identify where incumbents are structurally constrained, build strategy around what they *can't* do
- Be vendor-neutral in a market of vendor-locked incumbents

---

## Question 7: Failure and Learning

**Q:** Can you tell me about a product decision that turned out to be wrong?

**A (Uri):**

My very first product management focus area was building an indoor air quality dashboard. It seemed like such an obvious thing to do. We had been talking with customers, and many wanted us to add air quality to our occupancy data. Our background in air quality and disinfection aligned to that.

We decided our MVP would be to replicate a dashboard that existed from our hardware supplier. We built something very similar, and it completely did not land. Our customers don't want to log in and see minute-by-minute or hour-by-hour data on volatile organic compounds on the 14th floor. They want to know: "Is my building comfortable? Where are the problem spots? If I'm getting complaints, are they warranted or not?" What they want are very targeted insights, not data dashboards.

[Revised/extended answer:] We already understood from customers and our sales team that insights were actually the endgame. Our mistake was thinking that the first step on the path to insights was to build a data dashboard. That was actually just a giant distraction and waste of time. What we should have done is focus on: what is the simplest insight we can deliver that would actually be useful? Build THAT as an MVP to validate the premise that insights are useful, then extend from there. Instead, we took what seemed like the easy/lazy route of building something to show the data streaming in. It turned out to be neither easy nor useful.

The real irony: my head of product was a very strong proponent of the Marty Cagan school — really making sure you know your customer, having them bought into what you're doing. Nevertheless, we fell into the trap again.

I do think it's useful for every product manager to have had a failure like this because it hurts, it's painful to recall, and it reminds you that every yes that you approve or let the engineering team go down has to be a high conviction one because it can be very costly when it's wrong.

**Summary:**
- Knew insights were the goal but took a shortcut (data dashboard as "logical first step")
- It wasn't easy (substantial engineering work) and it wasn't useful (customers didn't engage)
- Right MVP: the single simplest insight, not raw telemetry
- Even with a Cagan-school product leader, they fell into the trap — knowing the principle isn't enough
- The lesson: every yes has to be high-conviction. You have to feel the cost of violating the principle, not just know it.

---

## Question 8: What You Want / Ideal Role

**Q:** What does your ideal next role look like?

**A (Uri):**

I don't want to advertise that I'm currently seeking full-time employment, but I do want to advertise that I am available for consulting and advisor positions. This is a soft, more acceptable signal, and also correct — I would love to get some more side gigs doing this kind of work part-time. In particular: teach teams to use agentic engineering to move faster / to be more customer-centric; teach eng/product teams to collaborate better as the roles shift.

But where I'm most happy is in a setting that is highly ambiguous, where I'm working closely with leadership to shape the direction that we take, and where we are doing highly exploratory work with a lot of prototyping, a lot of customer conversation and interaction, learning a lot, going deep on a particular domain (at the moment HVAC, but in the past finance, marketing, operations, and many others). Really thinking sharply about the problem space, the solution space, and coming up with novel ways of delivering value to customers.

**Summary:**
- No "currently seeking" language on the website
- Site should project: someone doing the work, not looking for work
- Thrives in ambiguity, works at strategy/execution intersection, goes deep on domains
- Happiest when the problem isn't yet well-defined

---

## Pre-Interview Context: Positioning Statements

**On "vibe coding" language:** Use "agentic engineering" instead. Freely admits not an engineer and doesn't pretend to be. Is a 0-1 PM who wants to validate customer needs and preferences as fast as possible by building not just prototypes but working software for customers before committing eng time. Believes building quickly is a way to discover a great product, especially if you have taste.

**On target roles:** Not targeting deeply technical AI infrastructure PM roles (PM for LLM, model architecture). Better fit for roles applying AI to business problems/use cases — e.g., Claude CoWork not Claude Code. Built a Claude Workflows app conceptually similar to CoWork before it existed. Competition Bot runs agents, has an agent chatbot, and an eval system.

**On mockup concepts:** Agrees concepts 1 (Live Session) and 2 (Diff View) are strongest. Future iterations should model on one or both. PM craft and product sense should be in pole position.
