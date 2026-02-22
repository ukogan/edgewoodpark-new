# Customer Intimacy Rewrite (v4)

## Site Page

```markdown
# Customer Intimacy

Customer understanding isn't a research phase. It compounds over
time, and the most important things I've learned came from putting
technology in front of real customers in real environments.

## Real buildings, real surprises

I PM'd an on-device ML occupancy sensor through pilot deployment
with three major enterprises. Discoveries that were invisible from
a spec:

- Cross-traffic in busy hallways, subdividing rooms that break
  count assumptions, winter sunlight degrading image processing
- 90% accuracy is sufficient for the use case, but miss one of ten
  and it feels broken to the user
- Solved the accuracy-vs-battery tradeoff by reframing requirements
  and moving edge cases to cloud post-processing

## No one knows how the building works

Every persona knows their piece of the system and describes it
with confidence, even when they're wrong.

- Facility manager knows his overrides but not the duct layout;
  BMS programmer knows his recent changes but not the full sequence
- At one site, I built a plan around a confident description that
  turned out to be incorrect
- This is a product problem: our process has to take in multiple
  contradictory sources and triangulate before committing

## Follow the data past the scope

At a top tech company HQ, I built a dashboard scoped to operating
hours but noticed odd behavior before the building opened.

- Expanded the data aperture: HVAC running 24/7 as if fully occupied
- A bigger opportunity than the original scope, found because I was
  paying attention to the customer's environment, not just the
  deliverable

The real world doesn't match your assumptions. The only way to close
that gap is ongoing, hands-on engagement with customers and their
environments.
```

## Blog Post (v3 prose, keep developing separately)

The v3 prose version works as the blog post foundation. It has the
right narrative arc (hardware → unreliable sources → expanded scope)
and the right framing (product problem, not deployment problem). Needs
a stronger opening and a closing that connects customer intimacy to
the build-to-discover philosophy.
