# Interview Prep: Spotify — Backend Engineer, Release
**Round:** First round — 30-minute call (talent screen / hiring manager intro)
**Date prep written:** 2026-04-28
**Report:** [015](../reports/015-spotify-2026-04-25.md)

---

## What this call is

A 30-minute first round is a talent/recruiter screen or hiring manager intro. It is **not** a coding round. The goals for them:
- Does this person know what the role is?
- Do they have the right experience signal?
- Are they articulate and engaged?
- Culture/values fit check

Your goals:
- Land the 90-second pitch cleanly
- Get one strong technical story in
- Signal you understand platform/DevEx thinking
- Book the next round

---

## The Company — Fast Context

- **What Spotify does:** Music and podcast streaming, 600M+ users
- **Your team:** Release Squad, Client Platform Studio, Platform Mission — you build the tools, workflows, and systems that let every Spotify engineer ship software safely and fast
- **Squad model:** Autonomous squads (~6-12 people), cross-functional, own their work end-to-end — no hand-offs, no permission structures
- **Platform mission:** "Create the technology that enables Spotify to learn quickly and scale easily." Your work has the highest leverage per engineer — every hour you save on release tooling saves thousands of engineer-hours across the company
- **Stack:** Java primary, Python, GCP, Kubernetes, Terraform, CI/CD at massive scale
- **Layoff context:** 1,500 jobs cut Feb 2026 (~17%). Concentrated in Podcasts/Content. Platform Engineering was not in scope — release tooling is cost-reduction infrastructure. This role was posted after the cuts. Still worth a quick "how has headcount planning affected the Release Squad?" question

---

## Your 90-Second Pitch

Practice this until it's effortless:

> "I'm a software engineer with about four years of experience, split across enterprise and startup environments. Most recently I'm at JP Morgan, where I've been building backend services and infrastructure — I owned our CI/CD pipeline end-to-end using Jenkins, Terraform, and Spring Boot. Before that I was at a fintech startup called FinChirp, where I built an AI-powered data platform from scratch — FastAPI backend, RAG pipelines with LLMs, GitHub Actions delivery, and Grafana monitoring. What draws me to the Release Squad is the platform leverage angle — I've been on both sides: building the release tooling at JP Morgan, and living as a consumer of bad release infrastructure at FinChirp where we had to build everything ourselves. I know exactly what good and bad release experience feels like from an engineer's perspective. That's the kind of work I want to own."

---

## Questions You'll Likely Get

### "Walk me through your background / tell me about yourself"
→ Use the 90-second pitch above. Land the CI/CD ownership and the platform leverage framing.

---

### "Why Spotify? Why this role?"

> "Two reasons. First, Spotify's engineering culture — squads, autonomy, true ownership — that's the environment where I do my best work. I've read your engineering blog and the squad model isn't just words; it's a real operating structure. Second, specifically the Release Squad: release engineering has the highest leverage in any engineering org. The tooling you build gets used by every engineer, every day. That multiplier is what makes it interesting. I want to work on infrastructure that makes other people faster, not just features that serve end users."

---

### "What's your experience with CI/CD and release tooling?"

Lead story: **Jenkins pipeline at JP Morgan**

> "At JP Morgan I was brought in when the team was doing manual releases — no consistency, no gates, deployments were stressful and error-prone. I designed and built a Jenkins pipeline from scratch: JUnit and integration test gates, deploy-only-on-green, automated build and deployment stages. After that, releases became reproducible events rather than high-risk operations. The team stopped manual deploys entirely. One thing I'd do differently: I'd add rollback gates before go-live — we discovered a broken deploy post-launch before that safeguard existed, which was a tense incident."

---

### "Tell me about a production incident you owned"

Story: **FinChirp 2am pipeline degradation**

> "At FinChirp our LLM enrichment pipeline started silently degrading — returning lower-quality results without any alerts firing. By the time we noticed, downstream data quality had already been impacted. I used Grafana to isolate which service was degrading, traced it to upstream API throttling from our LLM provider, and restored service in under 30 minutes. What I did immediately after was write a runbook for this failure class, so any engineer could resolve it independently. The reflection: runbook-first should be a project principle. Writing after the first incident is already too late for the second one."

---

### "How do you think about observability in release pipelines?"

> "Observability isn't just about knowing something broke — it's about knowing it broke before the user does, and understanding why without a two-hour investigation. At FinChirp I implemented Grafana, Loki, and Prometheus across our pipeline. The shift wasn't just technical — it changed how the team thought about shipping. You don't ship if you can't see. I'd bring the same philosophy to release infrastructure: every deploy should emit signals that tell you immediately whether it succeeded, degraded, or needs a rollback."

---

### "We're a GCP shop — you have AWS on your CV"

> "All my production work has been AWS, so I can't claim GCP experience I don't have. What I can say is that the patterns are transferable — Terraform is cloud-agnostic, Kubernetes is Kubernetes, and CI/CD pipeline design doesn't change between cloud providers. GCP has better documentation than most, and coming from AWS I find the mental model maps cleanly. I'd expect to be productive within a few weeks, not months."

---

### "No Kubernetes in your skills — is that a gap?"

> "Kubernetes appears in my work at KeyValue where we deployed on AWS with K8s, but I haven't run production clusters independently. I'm comfortable with container-based deployments, understand pod scheduling and deployment manifests, and the progression from Docker to K8s is well-paved. It's actively on my learning list — I want to own that gap rather than paper over it."

---

### Behavioural / Values questions

**"Tell me about a time you had to work across teams to deliver something"**
→ FinChirp RAG cross-team delivery (story bank): Product/infra misalignment, phased delivery, shared "done" definition, shipped on schedule.

**"Tell me about infrastructure work you've owned end-to-end"**
→ Terraform at JP Morgan (story bank): No IaC, manually provisioned infra drifting, migrated to Terraform modules, consistent environments.

**"Tell me about a time you improved a process"**
→ Jenkins CI/CD at JP Morgan: Manual releases → automated pipeline with test gates. Or FinChirp runbook after incident.

---

## Questions to Ask Them

These signal you've done your homework and you're evaluating them too:

1. **"The Release Squad's scope — does that include owning the pipeline infrastructure itself, or are you consuming a shared platform and building tooling on top of it?"** *(Shows you understand the difference between building vs. operating)*

2. **"How has the February restructure affected headcount and priorities in the Platform Mission?"** *(Addresses the elephant in the room; shows maturity)*

3. **"What does a good first 90 days look like for someone joining the Release Squad — is there a specific system they'd own, or is it more of a gradual ramp?"** *(Shows you're thinking about impact, not just getting through the process)*

4. **"What's the biggest unsolved problem in your release workflow right now?"** *(Great for hiring managers — gets them talking, shows you want to contribute)*

---

## Your Strongest Signals for This Role

| What they want | Your proof point |
|----------------|-----------------|
| CI/CD ownership | Jenkins pipeline at JP Morgan — designed, built, owned |
| IaC discipline | Terraform across on-prem + hybrid at JP Morgan |
| Production observability | Grafana/Loki/Prometheus at FinChirp, incident reduced to <30 min |
| Backend engineering (Java) | JP Morgan Spring Boot microservices |
| Delivery discipline | FinChirp: shipped GenAI features on schedule despite misalignment |

---

## Watch Outs

- **Don't get dragged into GCP specifics** — acknowledge the gap cleanly and pivot to cloud-agnostic competence
- **Don't oversell Kubernetes** — you don't have deep K8s experience; be honest and frame it as an active gap you're closing
- **Don't undersell the JP Morgan CI/CD work** — this is your strongest story for this role; don't bury it
- **The hiring freeze question** — if they raise it, don't panic. Just say "I noticed the Feb restructure in the news — it sounds like Platform Engineering wasn't in scope, but I'd love to understand how that's affected the team's priorities."

---

## Day-of Checklist

- [ ] Know the JD cold: Release Squad, Client Platform Studio, Platform Mission
- [ ] 90-second pitch rehearsed out loud (not just in your head)
- [ ] Jenkins CI/CD story ready in 2 minutes
- [ ] FinChirp incident story ready in 2 minutes
- [ ] 3-4 questions ready for them
- [ ] LinkedIn: find the interviewer's profile beforehand if name is shared
- [ ] Quiet room, camera on, stable connection
