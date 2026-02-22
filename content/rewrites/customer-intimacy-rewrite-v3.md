# Customer Intimacy Rewrite (v3)

## Organizing principle

One compounding theme: making technology work in the real world, where the information you're working with is incomplete, contradictory, and confidently wrong. The product response: design the product and process to not assume expertise that isn't there, and to triangulate from multiple sources.

## Site Page

```markdown
# Customer Intimacy

Customer understanding isn't a research phase. It compounds over
time, and the most important things I've learned came from putting
technology in front of real customers in real environments.

## Real buildings, real surprises

I PM'd an on-device ML occupancy sensor through development and
pilot deployment with three major enterprises. The things that
surfaced were invisible from a spec: cross-traffic in busy hallways,
subdividing rooms that break count assumptions, winter sunlight
degrading image processing, solid doors causing missed counts. And
the gap between statistical accuracy (90%+ is sufficient for the use
case) and user perception of accuracy (miss one of ten and it feels
broken). I solved the accuracy-vs-battery tradeoff by reframing
requirements and moving edge cases to cloud post-processing instead
of pushing the on-device model.

Every one of those discoveries required being in the building with
the customer, not reading a requirements doc.

## No one knows how the building works

The deeper I got into building technology, the more I realized that
the people who run buildings each know their piece but not the whole
picture, and they describe what they know with confidence even when
they're wrong. A facility manager knows his overrides but not the
duct layout. A BMS programmer knows his recent changes but not the
full sequence. At one site, I built a plan around a confident
description that turned out to be incorrect.

This is a product problem, not a deployment problem. Our sequences
and processes can't assume the expertise is there. They have to be
designed to take in multiple potentially contradictory sources and
triangulate: mechanical drawings, staff knowledge, contractor notes,
and live sensor data, cross-referenced and confirmed before
committing to a plan.

## Follow the data past the scope

At a top tech company HQ, I built a dashboard scoped to operating
hours but noticed odd behavior before the building opened. I
expanded the data aperture and found the HVAC running 24/7 as if
fully occupied. A bigger opportunity than the original scope, found
because I was paying attention to the customer's environment, not
just the deliverable.

All three of these are the same lesson: the real world doesn't match
your assumptions, and the only way to close that gap is ongoing,
hands-on engagement with customers and their environments.
```

## What's different from v2

The three stories now compound around a single theme instead of illustrating separate principles:

1. **Sensor in real buildings**: technology meets physical reality, surprises everywhere
2. **No one knows the full picture**: the information environment itself is unreliable, and this is a *product design* problem (design the product to triangulate) not a deployment/engineering problem
3. **Expanded data aperture**: even when you have the right scope, curiosity about the customer's full environment reveals more

The closer ties them together: same lesson, real world doesn't match assumptions, only way to close the gap is hands-on engagement.

Starting with hardware is stronger because it's the most tangible and least abstract. The "sources are wrong" story builds on it (you're already in the building, now you realize even the people are unreliable). The curiosity story extends it (even the scope you were given is too narrow).
