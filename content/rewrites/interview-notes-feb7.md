# Interview Notes: Feb 7, 2026

## Sensor Product (Customer Intimacy + AI PM evidence)

PM'd the company's first new sensor since acquiring a sensor company years ago. On-device image processing ML for occupancy counting (how many people cross its path; multiple sensors on all entrances give occupant count for the space). Now the hardware foundation for company strategy: makes it possible to economically count occupancy in large spaces to reduce overventilation.

### Discoveries through customer engagement (3 primary customers: top SaaS company, major social network, health insurer)

- Cross-traffic in busy hallways (door in a busy hallway creates noise)
- Multipurpose rooms that subdivide: the sum of all sensor counts isn't constant when room configuration changes
- Physical obstacles: door design blocking the sensor's field
- Lighting: bright direct sunlight in glass exterior doors, especially low sun angles in winter
- Solid doors in certain directions delay sensor "wake up," causing missed counts

### The 90% accuracy insight

Sensor accuracy of 90%+ is sufficient for the use case (reducing overventilation). But users' intuition about accuracy when a sensor is first installed is different: they walk back and forth under it, and if it misses 1 of 10 readings it feels wrong, even though that's 90% accuracy. The perception gap between statistical sufficiency and experiential confidence.

### Key tradeoff: accuracy vs. battery life

Increasing model accuracy = more power hungry = shorter battery life. Resolution: reframed and educated customers on accuracy requirements for the use case, limited certain use cases in v1, and solved accuracy gaps through site tuning and cloud-based post-processing algorithms instead of pushing the on-device model harder. Preserved battery life without increasing model power consumption.

## "No One in the Building Knows How It Really Works" (Customer Intimacy)

### The personas and their knowledge gaps

- **Facilities manager**: knows what's broken, knows some of the bandaids he's applied (overriding setpoints in a cold spot), but doesn't know which air handler serves which floors or the layout of airflow ducts
- **BMS programmer** (typically an outside contractor): knows the latest sequence modifications he's made, but not the whole sequence, and doesn't know how to program conditional logic where none existed
- **Both speak with confidence about topics where they are wrong**
- As-built mechanicals may have the information, but in older buildings many details are missing or no longer correct

### The insight

Forensic investigation is needed to really understand how a building works. The process of having these conversations revealed a lot about the different personas: what they prioritize, how they do their job (contractors have to be paid for every minute and they charge a lot).

### Impact on product approach

1. Can't assume information received is correct. (Brandywine lesson: foreclosed a better option based on the facility manager's erroneous comments about the building.)
2. Need to build a triangulation workflow: gather and synthesize all information, identify inconsistencies, do follow-ups to confirm critical details before committing to a plan.

## Cross-Functional Leadership (Reframed)

Not "I did everyone's job." The right framing: as the PM responsible for the product's success, I collaborated with and supported other teams to achieve it.

What that looked like:
- **Solutions/Operations team**: served as HVAC SME when the team had no HVAC expertise. Presales technical consulting, solution design, and post-sales implementation support.
- **GTM team**: brought expertise and judgment into content creation. Captured objections from customer calls and turned them into tailored content to move prospects further down the pipeline.

The story is about collaboration, not about doing all the jobs.

## Strategy to Shipping Code (Confidentiality constraint)

The Honeywell/vendor-neutral competitive analysis and data moat thesis are strong strategic thinking evidence but confidential. This page needs to demonstrate strategic thinking through the transferable principle (analyze competitive landscape at business model level, identify where incumbents are structurally constrained) without revealing R-Zero's specific strategy.

Architecture contrast (Stanford vs. Qualcomm) is not relevant to this page per Uri's feedback.
