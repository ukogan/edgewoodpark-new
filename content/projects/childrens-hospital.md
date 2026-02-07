---
id: project-stanford
filename: childrens-hospital.md
tier: featured
---

# Premier West Coast Children's Hospital -- ODCV Data Validation

Narrow validation at scale: the same occupancy compliance rule applied across 100+ VAV zones. Built automated Slack reports, HTML timeline viewer, and the core savings calculation engine. TimescaleDB for time-series data handling.

**Architecture driven by data model:** The hospital's zones were homogeneous -- same rule applied 100 times. This meant a narrow, deep validation engine that could catch deviations reliably at scale.

## Before

Expected missing data. Assumed the programmed sequence of operations (a very simple timing rule) was implemented correctly by the controls vendor. Trusted that the MSI had done their job.

## After

Data was rarely missing. But the SOO was implemented incorrectly. Vendor completely missed the timing delays (15 min occupied to standby, 5 min standby to occupied). Savings being left on the table. Customer trust shifted from their MSI to us.

## Outcome

23-30% energy savings demonstrated. Led to a public case study. Expansion discussions now underway across the children's, adult, medical school, and university campuses. Internal reaction to the dashboard: "THIS IS FUCKING AWESOME."
