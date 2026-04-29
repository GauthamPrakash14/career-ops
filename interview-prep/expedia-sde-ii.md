# Interview Intel: Expedia Group — Software Development Engineer II

**Report:** [001](../reports/001-expedia-2026-04-18.md)
**Researched:** 2026-04-29
**Sources:** Glassdoor (SDE II specific page, 38 reviews), LeetCode Discuss (5 SDE-2 posts), Blind (3 threads), Expedia Careers page, interviewkickstart.com, algo.monster

---

## Process Overview

- **Rounds:** 3 stages — OA → Recruiter Screen → Final Loop (2 technical rounds)
- **Format:** HackerRank OA → Recruiter call → 2×1hr LeetCode-oriented interviews (+ possible LLD round)
- **Timeline:** ~29 days average end-to-end. After recruiter screen, expect 1–2 weeks wait for team availability
- **Difficulty:** Medium LeetCode. No hard problems reported for SDE II
- **Positive experience rate:** Mixed — interviewers generally reported as helpful, but some org/process issues flagged
- **Known quirks:**
  - London process is lighter than India (2 final rounds, not 4)
  - Final rounds are LeetCode-oriented (not whiteboard design-heavy at SDE II)
  - Hiring manager fit matters — HM round is ~60% technical, 40% behavioural
- **You are here:** Recruiter screen just scheduled ✓ (OA already passed)
- **Sources:** [Glassdoor SDE II](https://www.glassdoor.com/Interview/Expedia-Group-Software-Development-Engineer-II-Interview-Questions-EI_IE9876.0,13_KO14,46.htm) · [LeetCode: SDE-2 Bangalore](https://leetcode.com/discuss/post/7289927/) · [LeetCode: SDE-2 Aug 2024 Offer](https://leetcode.com/discuss/interview-experience/5669703/) · [Expedia Careers Interview Guide](https://careers.expediagroup.com/interview-guide/)

---

## Round-by-Round Breakdown

### Round 1 (CURRENT): Recruiter Screen
- **Duration:** 20–30 min
- **Conducted by:** Talent Acquisition / Recruiter
- **What they evaluate:** Communication, motivation, basic role fit, salary alignment, visa/availability
- **Reported questions:**
  - "Tell me about yourself" — [source: Glassdoor 2025–2026]
  - "Why Expedia?" — [source: Glassdoor 2025–2026]
  - "Walk me through your background" — [source: Glassdoor 2025–2026]
  - "Where do you see yourself in 5 years?" — [source: Glassdoor 2025–2026]
  - Current role/notice period/availability — [source: Glassdoor 2025–2026]
- **How to prepare:**
  1. Nail the "Why Expedia" answer (see Company Signals below — reference the AI-native strategy)
  2. Have your 60-second career narrative tight: JP Morgan → FinChirp → why this role now

---

### Round 2: Technical Interview #1 (Coding)
- **Duration:** 60 min
- **Conducted by:** Engineer (peer/senior)
- **What they evaluate:** DSA problem-solving, code quality, communication while coding
- **Reported questions:**
  - Merge Intervals — [source: Glassdoor London 2026]
  - Trapping Rain Water — [source: LeetCode Discuss]
  - Find Pivot Index — [source: LeetCode Discuss]
  - Minimum Absolute Difference — [source: LeetCode Discuss]
  - Array manipulation, sliding window patterns — [source: LeetCode Discuss, multiple reports]
- **How to prepare:**
  1. LeetCode medium grind: arrays, sliding window, hashing, intervals — see checklist below
  2. Talk through your thought process out loud; interviewers flag silent coders

---

### Round 3: Technical Interview #2 (Coding + Behavioural or LLD)
- **Duration:** 60 min
- **Conducted by:** Hiring Manager or Senior Engineer
- **What they evaluate:** ~60% technical (system/LLD or second coding), ~40% behavioural/SDLC
- **Reported questions:**
  - Scenario questions based on resume — [source: LeetCode Discuss]
  - Low-Level Design: class design, design patterns, inter-class communication — [source: LeetCode SDE-2 Aug 2024]
  - "Tell me about a time you had to make a technical decision under pressure" — [inferred from JD + Glassdoor behavioural patterns]
  - SDLC ownership — [source: LeetCode Discuss]
- **How to prepare:**
  1. Prepare 1 LLD scenario (see checklist)
  2. Have 3 strong STAR stories mapped to the role (see Story Bank Mapping below)

---

## Likely Questions

### Technical

| Question | Source | Your best angle |
|----------|--------|-----------------|
| Merge Intervals / interval-based array problems | Glassdoor London 2026 | Standard — practice on LeetCode #56 |
| Trapping Rain Water | LeetCode Discuss | Two-pointer solution; know the O(n) approach |
| Sliding window / subarray problems | LeetCode Discuss (multiple) | Common at SDE II — know the template cold |
| Design a microservice for high-throughput events | [inferred from JD: pricing pillar, Kafka, low-latency] | JP Morgan Spring Boot + KeyValue Kafka story |
| How would you design a caching layer to reduce DB load? | [inferred from JD: Redis caching requirement] | Reference Redis + MS SQL optimisation at JP Morgan |
| What's your approach to idempotency in event-driven systems? | [inferred from JD: Kafka Streams, distributed] | Kafka dead-letter queues story at KeyValue |

### Behavioural

| Question | Source | Best story from story-bank.md |
|----------|--------|-------------------------------|
| Tell me about yourself | Glassdoor (consistent across all reviews) | Career narrative: JP Morgan backend → FinChirp AI → Expedia pricing scale |
| Walk me through a system you built end-to-end | Glassdoor 2025–2026 | [JP Morgan Spring Boot at Enterprise Scale] |
| Tell me about a time you improved a process | Glassdoor 2025–2026 | [Jenkins Pipeline Build at JP Morgan] or [Terraform Migration] |
| Tell me about a production incident you handled | [inferred — operational excellence is in JD] | [FinChirp 2am Pipeline Incident] |
| Tell me about a time you worked across teams | [inferred from JD: cross-functional] | [FinChirp RAG Feature Delivery] |

### Role-Specific

| Question | Why they ask it | Your angle |
|----------|----------------|------------|
| "How have you handled high-throughput backend services?" | Core JD requirement — pricing at millions of searches | JP Morgan: "high-throughput and low-latency backend services" — exact language match |
| "Tell me about your Kafka experience" | Explicitly in JD (Kafka Streams) | KeyValue Kafka async event processing — be honest about Streams gap, frame around streaming architecture understanding |
| "How do you approach caching strategy?" | Redis + DynamoDB in JD | Evaluated caching strategies for DB-heavy endpoints at JP Morgan; Redis in skills |
| "What's your AI/ML integration experience?" | Preferred qualification in JD | FinChirp: RAG pipelines, OpenAI/Anthropic into backend — this is your differentiator |
| "Why pricing systems specifically?" | They want someone who understands the domain | "Financial data APIs at JP Morgan also require precision and high-throughput — same engineering constraints" |

### Background Red Flags

| Likely question | Why it comes up | Recommended framing |
|----------------|----------------|---------------------|
| "You've been at JP Morgan less than 6 months — why are you looking?" | Short tenure at current role is visible | "JP Morgan gave me strong enterprise-scale backend exposure quickly. Expedia is a natural step up — consumer-scale distributed systems with direct user impact is a different engineering challenge at a scale I want to solve." |
| "No Scala/Kotlin experience?" | JD lists it as preferred | "Strong JVM foundation in Java — Kotlin/Scala are natural extensions. I've read the ecosystems, the transition is well-understood, and I'd be productive within weeks." |
| "Your Kafka experience is at KeyValue (2021–22) — is it current?" | Gap between Kafka use and now | "Kafka principles don't change. I've maintained that knowledge and applied messaging/event patterns conceptually at JP Morgan, even where Kafka wasn't in the stack." |
| "What's the gap between Aug 2022 and May 2025?" | MSc + INRIX period, might look non-technical | "I completed my MSc in Advanced Computer Science at Leicester during 2022–2023, then joined FinChirp to apply it directly in a product environment." |

---

## Story Bank Mapping

| # | Topic | Best story | Fit |
|---|-------|-----------|-----|
| 1 | High-throughput backend at scale | [JP Morgan Spring Boot at Enterprise Scale] | Strong |
| 2 | Event-driven / Kafka / async | [Kafka Async Processing at KeyValue] | Strong |
| 3 | CI/CD / engineering discipline | [Jenkins Pipeline Build at JP Morgan] | Strong |
| 4 | Production incident / reliability | [FinChirp 2am Pipeline Incident] | Strong |
| 5 | IaC / infra ownership | [Terraform Migration at JP Morgan] | Strong |
| 6 | Cross-functional delivery | [FinChirp RAG Feature Delivery] | Strong |
| 7 | AI/ML integration (differentiator) | [FinChirp AI Feature Adoption] | Strong — use this when they ask about preferred quals |
| 8 | Observability | [FinChirp LLM Pipeline Degradation] | Strong |

**No gaps** — story bank covers all likely question types for this role.

---

## Technical Prep Checklist

Based on reported questions, not generic advice:

- [ ] **Merge Intervals (LeetCode #56)** — directly reported by London 2026 Glassdoor reviewer
- [ ] **Trapping Rain Water (LeetCode #42)** — reported in LeetCode Discuss for SDE-2
- [ ] **Sliding Window template** (max subarray, longest substring) — multiple reports cite this pattern
- [ ] **Find Pivot Index / Prefix Sum** — reported in LeetCode Discuss
- [ ] **Hashing patterns** (two-sum family, frequency counting) — reported across multiple reviews
- [ ] **Binary Search variants** — cited in LeetCode Discuss as common pattern
- [ ] **LLD: Design a Rate Limiter or Notification System** — [inferred from LLD round reports at SDE-2] — focus on class structure, interfaces, design patterns (Strategy/Observer)
- [ ] **System design talking point: Pricing at scale** — [inferred from JD] — be able to discuss caching tiers, event-driven updates, low-latency reads
- [ ] **Kafka idempotency + dead-letter queues** — [inferred from JD: Kafka Streams] — know the pattern even if not Streams-specific
- [ ] **Redis caching patterns** (cache-aside, write-through) — [inferred from JD: Redis caching requirement]

---

## Company Signals

### Values they screen for
Expedia Group's five core principles (from careers page): **Choose Fearlessly**, **Force Simplicity**, **Include a Diverse World**, **Go Get What's Next**, **Trust Each Other**.

- "Force Simplicity" → don't over-engineer answers; show you've simplified complex systems
- "Go Get What's Next" → tie to their AI-native strategy (2025 completion of tech migration, now accelerating AI features)
- "Trust Each Other" → collaborative work stories land well

### Vocabulary to use
- **"Pricing pillar"** — the specific team context from the JD; shows you read it
- **"AI-native"** — Expedia completed their tech unification in 2025 and is now in AI acceleration phase; relevant to your FinChirp background
- **"Consumer-scale"** — differentiates this from JP Morgan's internal tooling scale
- **"Event-driven architecture"** — directly in JD; use naturally
- **"Operational excellence"** — explicitly in JD; echoed in their engineering blog

### Things to avoid
- Don't claim deep Kafka Streams expertise — they'll probe it; be honest about core Kafka vs Streams
- Don't badmouth JP Morgan or imply it's a stepping stone; frame it as "the right foundation, now ready for the next challenge"
- Don't be vague about the pricing domain — research it, you have the relevant background

### Questions to ask them
1. "Expedia completed its tech platform unification in 2025 and is now in the AI acceleration phase — what does that look like in practice for the pricing pillar specifically?"
2. "How does the pricing team balance low-latency reads for millions of searches with keeping pricing data fresh — is that primarily event-driven or polling-based today?"
3. "What does the on-call rotation look like for the team, and how mature is the runbook culture?"
