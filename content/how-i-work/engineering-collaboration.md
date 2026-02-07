# Engineering Collaboration

## The Model

Engineering does foundational work -- data pipelines, infrastructure,
tech debt. PM builds 0-1 customer-facing tools that serve real pilots.
Those tools generate evidence: what customers actually need, which
features matter, where the data model is wrong. Then engineering
builds the "engineered solution" with high-confidence, data-backed
requirements.

## The Toolset Lesson

Early experiments: I let Claude choose languages. It wrote Python.
Built charts with Plotly. The engineering team uses React. They
couldn't easily read what I'd built.

The fix: configure your AI tools with the team's stack. Impose their
language, their libraries, their structures. The more your output
looks like what engineering already works with, the more useful it
is to them.

## The Result

Prototypes become proven requirements. Engineering doesn't build on
speculation -- they build on evidence from tools that already serve
real customers.
