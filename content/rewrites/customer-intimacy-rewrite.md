# Customer Intimacy Rewrite

## Site Page (terse, scannable)

```markdown
# Customer Intimacy

No one in the building knows how the building actually works.

The facilities manager knows what's broken but not which air handler
serves which floor. The BMS programmer knows his latest changes but
not the full sequence. Both speak with confidence, even when they're
wrong. I learned this the hard way when a facility manager's
description led me to foreclose a better option at a customer site.

## What I built from that

A triangulation process: gather from every source (staff, contractors,
mechanical drawings, live sensor data), cross-reference for
inconsistencies, confirm critical details before committing. Not from
a book. From getting it wrong.

## Hardware in the real world

I PM'd an on-device ML occupancy sensor through pilot deployment with
three major enterprises. Discoveries that only come from real
buildings: cross-traffic in busy hallways, subdividing rooms that
break count assumptions, winter sunlight degrading image processing,
solid doors delaying sensor wake-up.

Most useful insight: 90% accuracy is sufficient for reducing
overventilation. But when a user walks under a sensor ten times and
it misses one, it feels broken. I solved the accuracy-vs-battery-life
tradeoff not by pushing the model harder but by reframing
requirements, limiting v1 use cases, and moving edge case handling to
cloud post-processing.

## Curiosity as method

At a top tech company HQ, I built a dashboard scoped to operating
hours but noticed odd behavior before the building opened. Expanded
the data aperture: nights and weekends, HVAC running as if fully
occupied 24/7. A bigger opportunity than the original scope, found
by following something that didn't look right.
```

## Blog Post (linked from the page)

```markdown
# No One in the Building Knows How the Building Actually Works

When I started working in commercial building technology, I assumed
the people who run buildings understand their buildings. They do, but
only their piece of it.

The facilities manager knows what equipment is broken. He knows which
setpoints he's overridden to handle the cold spot on the third floor.
But ask him which air handler serves which floors, or how the airflow
ducts are laid out, and you'll get a confident answer that may or may
not be correct. The BMS programmer, typically an outside contractor
billing by the minute, knows the sequence modifications he made last
month. He doesn't know the full sequence history, and if you need
conditional logic where none existed, he may not know how to add it.

What makes this dangerous is that both parties will tell you what they
know with complete confidence. I learned this at a customer site where
the facility manager described the system in detail, I built a plan
around his description, and it turned out to be wrong. I'd foreclosed
a better option based on information that sounded authoritative but
wasn't.

The as-built mechanical drawings, when we finally tracked them down,
told a different story. In older buildings, even those drawings may be
incomplete or no longer accurate.

## What I built from that failure

I built a triangulation process: gather information from every
available source (facilities staff, BMS programmers, mechanical
drawings, and live sensor data), cross-reference for inconsistencies,
and do follow-ups to confirm the critical details before committing to
a plan. This isn't something I learned from a product management
framework. I built it because getting it wrong costs real money and
real trust.

## What hardware teaches you that software can't

Separately, I PM'd an on-device ML occupancy sensor from development
through pilot deployment with three major enterprise customers: a top
SaaS company, a major social network, and a health insurer. The sensor
uses image processing to count how many people cross its path; when you
mount sensors on all entrances to a space, you get an occupant count
that drives ventilation decisions.

The discoveries were all things you can only learn by putting hardware
in real buildings. Busy hallways create cross-traffic that confuses
entry counts. Multipurpose rooms that subdivide break the assumption
that all sensor counts add up to a constant total. Glass exterior
doors with direct winter sunlight at low angles degrade image
processing. Solid doors in certain directions delay sensor wake-up and
miss counts entirely.

The most useful discovery was about user perception of accuracy. 90%+
accuracy is statistically sufficient for the use case: reducing
overventilation in large spaces doesn't require perfect counts. But
when a facilities engineer walks under a new sensor ten times and it
misses one, it feels broken, even though that's exactly 90% accuracy.

The tradeoff was accuracy (which requires more processing power and
drains battery life) versus the operational reality of battery-powered
sensors in hard-to-reach mounting locations. I solved it not by
pushing the on-device model harder, but by reframing accuracy
requirements for customers, limiting certain use cases in v1, and
handling edge cases through site-specific tuning and cloud-based
post-processing algorithms. Preserved battery life without
compromising the accuracy that mattered for the actual use case.

This sensor is now the hardware foundation for the company's strategy:
it makes it economically feasible to count occupancy in large spaces
and reduce overventilation at scale.

## Curiosity as method

At a top tech company headquarters, I built a commissioning dashboard
scoped to operating hours. But I noticed the system behaving oddly
before the building opened, so I expanded the data aperture to include
nights and weekends. What I found: the HVAC system was running as if
the building were fully occupied around the clock. A configuration
error bleeding money invisibly, and a much bigger opportunity than the
scope I'd been given.

That discovery didn't come from a spec or a user interview. It came
from spending enough time with the customer's data to notice something
that didn't look right, and having the curiosity and the tools to
follow it.

Every customer engagement expands what I know about the next one. The
triangulation process from the first site informed how I approached the
second, which informed the third. Customer intimacy isn't a research
phase. It's a compounding asset.
```
