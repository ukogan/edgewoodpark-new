# Customer Intimacy Rewrite (v5)

## Site Page

```markdown
# Customer Intimacy

Customer understanding isn't a research phase. It compounds over
time, and the most important things I've learned came from putting
technology in front of real customers in real environments.

## Real buildings, real surprises

### Situation
PM'd an on-device ML occupancy sensor through pilot deployment
with three major enterprises.

### Complication
Discoveries invisible from a spec: cross-traffic in busy hallways,
subdividing rooms that break count assumptions, winter sunlight
degrading image processing. And 90% accuracy is sufficient for the
use case, but miss one of ten and it feels broken to the user.

### Resolution
Solved the accuracy-vs-battery tradeoff by reframing requirements
and moving edge cases to cloud post-processing instead of pushing
the on-device model.

## No one knows how the building works

### Situation
Every persona knows their piece of the system and describes it with
confidence: facility manager knows his overrides but not the duct
layout, BMS programmer knows his recent changes but not the full
sequence.

### Complication
They're often wrong. At one site, I built a plan around a confident
description that turned out to be incorrect.

### Resolution
This is a product problem, not a deployment problem. Our process has
to take in multiple contradictory sources and triangulate before
committing to a plan.

## Follow the data past the scope

### Situation
At a top tech company HQ, I built a dashboard scoped to operating
hours.

### Complication
Noticed odd behavior before the building opened. Expanded the data
aperture: HVAC running 24/7 as if fully occupied.

### Resolution
A bigger opportunity than the original scope, found because I was
paying attention to the customer's environment, not just the
deliverable.

The real world doesn't match your assumptions. The only way to close
that gap is ongoing, hands-on engagement with customers and their
environments.
```
