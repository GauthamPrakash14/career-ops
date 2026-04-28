# Story Bank — Master STAR+R Stories

This file accumulates your best interview stories over time. Each evaluation (Block F) adds new stories here. Instead of memorizing 100 answers, maintain 5-10 deep stories that you can bend to answer almost any behavioral question.

## How it works

1. Every time `/career-ops oferta` generates Block F (Interview Plan), new STAR+R stories get appended here
2. Before your next interview, review this file — your stories are already organized by theme
3. The "Big Three" questions can be answered with stories from this bank:
   - "Tell me about yourself" → combine 2-3 stories into a narrative
   - "Tell me about your most impactful project" → pick your highest-impact story
   - "Tell me about a conflict you resolved" → find a story with a Reflection

## Stories

<!-- Stories will be added here as you evaluate offers -->
<!-- Format:
### [Theme] Story Title
**Source:** Report #NNN — Company — Role
**S (Situation):** ...
**T (Task):** ...
**A (Action):** ...
**R (Result):** ...
**Reflection:** What I learned / what I'd do differently
**Best for questions about:** [list of question types this story answers]
-->

### [CI/CD / Release Tooling] Jenkins Pipeline Build at JP Morgan
**Source:** Report #015 — Spotify — Backend Engineer, Release
**S (Situation):** Joined a team deploying manually with inconsistent, error-prone release processes
**T (Task):** Own the CI/CD pipeline from scratch — design, build, and roll out across the team
**A (Action):** Designed Jenkins pipeline with automated JUnit + integration test gates; deploys only on green status; automated build, test, and deployment stages
**R (Result):** Faster, reproducible releases; fewer production defects; team stopped manual deploys
**Reflection:** Would have added rollback gates earlier — discovered a broken deploy post-launch before that safeguard was in place
**Best for questions about:** CI/CD ownership, release tooling, engineering discipline, platform work, "tell me about a system you built"

---

### [Observability / Incident Response] FinChirp LLM Pipeline Degradation
**Source:** Report #015 — Spotify — Backend Engineer, Release
**S (Situation):** Production LLM enrichment pipeline started returning degraded results silently — no alerts, no visibility
**T (Task):** Identify root cause, restore service quality, prevent recurrence
**A (Action):** Implemented Grafana + Loki alerting on pipeline latency and error rates; traced issue to upstream LLM API throttling; set up automated threshold alerts
**R (Result):** Mean-time-to-detect reduced from hours to minutes; issue class now caught before users notice
**Reflection:** Treat ML pipeline failures the same as distributed system failures — the same observability tooling applies
**Best for questions about:** observability, production debugging, incident response, "tell me about a time you improved reliability"

---

### [IaC / Infrastructure] Terraform Migration at JP Morgan
**Source:** Report #015 — Spotify — Backend Engineer, Release
**S (Situation):** On-prem + hybrid environment with no IaC; infrastructure manually provisioned and drifting between environments
**T (Task):** Migrate team to Terraform-managed infrastructure
**A (Action):** Authored Terraform modules for core services across on-prem and hybrid environments; standardized environment config
**R (Result):** Consistent, auditable infrastructure; environment drift eliminated; new environments provisioned in minutes
**Reflection:** Enforce module versioning from day 1 — had drift before locking versions, which created debugging overhead
**Best for questions about:** IaC, DevOps discipline, "tell me about a process improvement you drove"

---

### [Distributed Systems / Architecture] Kafka Async Processing at KeyValue
**Source:** Report #015 — Spotify — Backend Engineer, Release
**S (Situation):** E-commerce platform with synchronous calls causing latency spikes — order processing blocked API responses under load
**T (Task):** Decouple high-volume order events from downstream processing
**A (Action):** Introduced Kafka; redesigned order event flow as async processing; downstream services consume at their own pace
**R (Result):** Latency spikes eliminated; order processing became horizontally scalable
**Reflection:** Over-engineered first iteration — started with 5 topics, should have started with 1 and evolved
**Best for questions about:** distributed systems, system design decisions, "tell me about a scalability challenge"

---

### [Cross-functional Collaboration] FinChirp RAG Feature Delivery
**Source:** Report #015 — Spotify — Backend Engineer, Release
**S (Situation):** Product wanted GenAI features in 6 weeks; infra team needed stability; timelines and priorities misaligned
**T (Task):** Bridge engineering and product to ship on schedule without sacrificing quality
**A (Action):** Ran weekly alignment syncs; phased delivery — retrieval layer first, enrichment second; created shared "done" definition across roles
**R (Result):** Shipped on schedule; product team had working demo for investor presentations
**Reflection:** "Done" definitions differ by role — align on this at kickoff, not retrospectively
**Best for questions about:** stakeholder management, cross-functional delivery, "tell me about a conflict between teams"

---

### [On-Call / Production Ownership] FinChirp 2am Pipeline Incident
**Source:** Report #015 — Spotify — Backend Engineer, Release
**S (Situation):** LLM enrichment pipeline silently degraded at 2am — downstream data quality impacted before detection
**T (Task):** Diagnose and restore service; prevent recurrence
**A (Action):** Used Grafana dashboards to isolate degraded service; traced to upstream API throttling; wrote runbook for this failure class afterward
**R (Result):** Service restored in under 30 minutes; runbook enables any engineer to resolve independently
**Reflection:** Runbook-first culture should be a project principle — writing after the first incident is already too late for the second
**Best for questions about:** on-call, production ownership, documentation, "tell me about a time you improved a process"

---

### [Frontend / Full Stack] KeyValue E-commerce React Work
**Source:** Report #018 — Stripe — Full Stack Engineer, Expansion
**S (Situation):** Retail and e-commerce platform with complex product/cart/checkout state needed consistent UX across web and mobile
**T (Task):** Build user-facing product pages and checkout flows; integrate with backend order APIs
**A (Action):** Built React components for product display and cart interactions; integrated REST API calls to backend microservices for order processing
**R (Result):** Consistent, functional UX across retail and mobile clients; features shipped on Agile sprint schedule
**Reflection:** Should have pushed for a shared component library earlier — duplicated logic across screens created maintenance overhead later
**Best for questions about:** React, frontend work, full stack ownership, "tell me about user-facing work you've built"

---

### [Feature Adoption / Growth] FinChirp AI Feature Adoption
**Source:** Report #018 — Stripe — Full Stack Engineer, Expansion
**S (Situation):** New GenAI enrichment features were built and deployed but user adoption was passive — users weren't discovering or using them
**T (Task):** Drive active adoption of AI features through the main product flow
**A (Action):** Collaborated with product to integrate features into core user workflows; added in-product feedback capture hooks to measure engagement and iterate
**R (Result):** Feature adoption increased; GenAI enrichment became the default workflow for active users
**Reflection:** Build the feedback loop into the feature at design time — adding it afterward forces a second deployment cycle and you lose early signal
**Best for questions about:** growth hacking, feature adoption, product-engineering collaboration, "tell me about a time you drove user engagement"

---

### [Distributed Systems / Reliability] JP Morgan Spring Boot at Enterprise Scale
**Source:** Report #019 — Wise — Backend Engineer (Hold Team)
**S (Situation):** Enterprise backend serving high-volume financial transactions with strict SLA requirements
**T (Task):** Deliver new REST API services with low-latency, high-throughput guarantees across a distributed system
**A (Action):** Designed Spring Boot microservices with optimised SQL stored procedures; implemented JUnit + integration test coverage as a first-class requirement before shipping to production
**R (Result):** Services met SLA targets; zero critical defects post-launch in first month
**Reflection:** SLA-critical systems require test coverage as a first-class concern — not a post-build add-on. I now write test scaffolding before implementation on any production-critical path.
**Best for questions about:** building at scale, ensuring reliability, engineering process, "tell me about a production system you built"
