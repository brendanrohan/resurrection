---
title: "Quiet Signals: Designing a Caregiver Companion That Doesn't Feel Like Surveillance"
slug: "quiet-signals"
client: "Personal Project"
role: "Solo Designer & Builder"
duration: "Personal Project"
year: 2025
tags: ["Personal Project", "AI-First Design", "Conversational UX", "v0 + Lovable"]
coverImage: "/images/quiet-signals-cover.png"
excerpt: "An AI-assisted app that helps adult children sense — gently — whether an aging parent is okay today, without check-ins that strain the relationship."
featured: true
---

<div class="honest-note">
  <strong>A note up front</strong>
  This is a working personal prototype, not a shipped product. I built it during a career break while caring for my own mother. I'm sharing it because the design questions it raised — about trust, dignity, and how AI should communicate uncertainty — are the questions I find most interesting to work on right now.
</div>

---

## The Problem

### The question that doesn't have a good answer

When you live a few hours away from an aging parent, you ask yourself a quiet question every day: **is she okay today?**

The existing answers are bad. Calling every day is loving but eventually intrusive; both sides start performing. Medical-alert devices are designed for emergencies, not for the long, slow texture of a normal day. And the smart-home dashboards on the market read like security systems — built for the watcher, not the watched.

<div class="pullquote">I wanted something that gave me reassurance without making my mother feel monitored.</div>

---

## The Reframe

### From tracking to interpretation

The wrong product makes the caregiver into a watcher. The right product is a quiet interpreter — something that takes the small, ambient signals of an ordinary day (movement, room transitions, time-of-day patterns) and surfaces them as **a short, plain-language summary**, not a feed of raw data.

The shift from *tracking* to *interpretation* changed the whole product. It moved the design problem upstream — away from dashboards and toward the harder questions: what should the AI say, when should it stay quiet, and how does it talk about uncertainty without alarming anyone?

---

## The Hardest Decision

### What does a false alert cost?

The single most important design choice was about **thresholds** — when does the app speak up, and when does it stay quiet?

I mapped this as an explicit tradeoff, because in AI-first products it's the kind of decision that determines whether people trust the thing or uninstall it:

<div class="tradeoff">
  <div class="tradeoff-card tradeoff-positive">
    <h4>False positive</h4>
    <p>"Something seems off" when she's actually fine. Cost: anxiety, a phone call she didn't need, eroded trust in the app's judgment.</p>
  </div>
  <div class="tradeoff-card tradeoff-negative">
    <h4>False negative</h4>
    <p>"All quiet" when something is actually wrong. Cost: catastrophic — the one thing the product exists to catch.</p>
  </div>
</div>

The asymmetry is obvious, but the design implication is subtle: the app shouldn't try to be confident. It should be allowed to say *"a bit unusual today — probably nothing"* as its default voice, and reserve direct concern for genuinely sharp signals. The summary tone became the product.

---

## Process

### How it actually got built

<ol class="process-list">
  <li>
    <span class="step">i.</span>
    <span class="text"><strong>Use-case interviews</strong> Six conversations with other adult-child caregivers. The recurring word was <em>"intrusive."</em> Nobody wanted a dashboard.</span>
  </li>
  <li>
    <span class="step">ii.</span>
    <span class="text"><strong>Sensor & data scoping</strong> Decided what the app would and wouldn't see. Movement, room transitions, sleep windows — yes. Audio, video, location outside the home — no. The exclusions mattered as much as the inclusions.</span>
  </li>
  <li>
    <span class="step">iii.</span>
    <span class="text"><strong>Tone prototyping</strong> Wrote a dozen versions of the daily summary by hand before generating any in code. Calibrating the voice — calm, plain, comfortable with uncertainty — was the actual design work.</span>
  </li>
  <li>
    <span class="step">iv.</span>
    <span class="text"><strong>Working prototype</strong> Built the front-end in v0 and the conversational summary flow in Lovable. The data layer is simulated; the interaction model is real.</span>
  </li>
  <li>
    <span class="step">v.</span>
    <span class="text"><strong>Use with my mother</strong> Talked her through it. Her feedback shaped the summary tone more than anything else. She said the early versions <em>"sounded like a nurse."</em> The current version sounds, she says, <em>"more like a person."</em></span>
  </li>
</ol>

---

## What I Learned

### Notes from a personal project

**The UI matters less than I expected.** The screens are simple — a daily summary, a week view, a small set of preferences. The product lives in the language model's voice, not in the visual design.

**Evaluation is the design work now.** Most of my time was spent on questions like: when should it speak? What counts as a signal worth surfacing? How does it acknowledge what it doesn't know? These are not UI questions. They're product questions a designer needs to be in the room for.

**The person at the other end of the data has a name.** Building this for my actual mother — not a persona — kept me honest in a way that no research artifact ever has.

---

## Where It Goes

### What I'd build next

If this became a real product, the next phase isn't more features — it's a longer, slower research study with five to ten caregiver-parent pairs, focused entirely on the trust question: does the app's voice stay credible over months, or does it slowly become noise people learn to ignore? That's the question I'd want to answer before adding anything else.
