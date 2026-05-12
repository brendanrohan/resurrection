---
title: "Intent-First: Rebuilding the AT&T Shopping Experience Around What Customers Actually Came to Do"
slug: "att-personalized-shopping"
client: "AT&T"
role: "Senior Design Strategist"
duration: "6 months"
year: 2025
tags: ["Experience Design", "Personalization", "Generative AI", "E-commerce"]
coverImage: "/images/att_ShoppersProfile.png"
excerpt: "A redesign of the AT&T.com shopping flow — replacing a device-first funnel with a generative, intent-driven experience built on first-party customer data."
featured: true
---

## The Problem

### Customers knew what they wanted. The site didn't.

The AT&T shopping experience was built around the company's product catalog, not around customers' intent. To choose a plan, you had to pick a device first — either a new one or one you'd bring. That was true even if you'd come to the site specifically to compare plans, with no interest in upgrading your phone.

About half of visitors arrived with that exact goal. The site ignored it.

User research surfaced the same complaints across sessions: the site felt "too broad," required "too many clicks," and consistently failed to deliver what people came for. Three issues kept coming up:

- **The path forced a device-first decision** — even for the ~50% of visitors who came to pick a plan
- **Pricing was generic** — customers saw rates that didn't account for their credit tier, existing discounts, or eligibility
- **Discovery required navigation fluency** — customers who didn't already know the site's structure struggled to find what they needed

The result: customers dropped off. The ones who stayed often reached checkout only to find the price had changed once their data was factored in.

---

## The Reframe

### From catalog browsing to intent matching

The core shift was simple. Instead of asking customers to navigate to what they wanted, we asked them what they came for — then built the experience around their answer.

| Customer's goal | Old experience | Redesigned experience |
|---|---|---|
| Pick a mobile plan | Choose device first, then find plans | State intent → see matched plans immediately |
| Understand actual pricing | Browse generic rates | Enter mobile number → see credit-eligible pricing |
| Add home internet | Navigate from mobile section | Intent quiz surfaces internet alongside mobile |
| Get a bundled offer | Discover via navigation or ads | Data match surfaces eligible bundle automatically |

The redesigned flow had three steps:

1. **Capture intent** — a short quiz (services wanted, number of lines, home internet speed needs)
2. **Match data** — use the customer's mobile number to pull credit tier, existing discounts, and eligibility
3. **Generate the offer** — a single, personalized page showing exactly what they qualified for

What came out the other side wasn't a filtered version of the catalog. It was a one-page offer built around that customer's specific situation.

---

## The Data Question

### We already had most of it

The personalization didn't require building a new data infrastructure. AT&T already held the data that determined accurate pricing — credit history, existing account status, discount eligibility. The problem was timing: that data only entered the experience at checkout, after customers had invested significant time.

Moving it earlier was a design decision as much as a technical one.

We asked for a mobile number at the start of the personalized flow. That identifier let us match the customer to their profile and price accordingly. Usability testing confirmed customers would share it — as long as the value was immediate and the use was transparent. We told them exactly what we'd use it for. They gave it readily.

There was a secondary benefit: anything we collected upfront we didn't have to collect at checkout. The personalized flow streamlined the back end of the experience too.

---

## The Voice

### What "personalized" actually feels like

Personalization is easy to say and hard to make feel real. A few principles held the experience together:

- **Lead with what they asked for.** If a customer said they wanted a mobile plan with three lines, that's what appears at the top — not a featured device promotion.
- **Show actual numbers.** Generic "starting at" pricing erodes trust. If we know a customer qualifies for a loyalty discount, show the discounted rate. Don't make them find it at checkout.
- **Explain the match.** A brief line — "Based on your account, you qualify for..." — made the personalization feel deliberate rather than coincidental. Customers noticed. It helped.

---

## The Hard Decisions

### Four things this design had to get right

<div class="decisions">
  <div class="decision">
    <div class="decision-q">Q1 · Timing</div>
    <h4>What do we ask for, and when?</h4>
    <p>Asking for personal data too early, before customers see value, tanks trust. We tested the quiz timing carefully. The right moment was after customers had expressed intent — once they'd told us what they wanted, asking for a mobile number to sharpen the results felt like a logical next step, not a gate.</p>
  </div>
  <div class="decision">
    <div class="decision-q">Q2 · Unknown users</div>
    <h4>What do we do with customers we can't identify?</h4>
    <p>Not every visitor had an existing AT&T relationship. The experience needed a graceful path for new customers — one that used stated intent without requiring personal data, then introduced identification at the moment it added value (plan pricing).</p>
  </div>
  <div class="decision">
    <div class="decision-q">Q3 · Transparency</div>
    <h4>How transparent do we need to be about data use?</h4>
    <p>Fully. Testing was clear: customers who understood what their data was being used for converted better than those who didn't. Opacity wasn't protecting us — it was costing conversions and eroding trust simultaneously.</p>
  </div>
  <div class="decision">
    <div class="decision-q">Q4 · Definition</div>
    <h4>What does "generative" mean in a 2022 context?</h4>
    <p>In 2022, the word "generative" meant rules-based personalization — a content engine that assembled the right offer from components based on customer data, rather than a static page shown to everyone. The output felt bespoke even though the building blocks were templated.</p>
  </div>
</div>

---

## Results

### Small percentage, real scale

Early testing showed customers preferred the streamlined, intent-matched experience — qualitative feedback described the "train tracks" feeling of a path built around their actual goals. The conversion lift was nearly 1 percentage point.

At AT&T's transaction volume, 1% is not a rounding error. Hundreds of additional conversions per day. Meaningful annual run-rate impact.

The subtler result: customers who entered the personalized flow reached checkout with accurate pricing already visible. Surprise pricing changes at checkout are a documented conversion killer. Removing that moment helped the back half of the funnel as much as the personalized front half did.

---

## Honest Scope

### What this was, and what came next

This was a shopping redesign, not a full site overhaul. The personalized flow ran alongside the existing experience during testing — customers could enter it through targeted entry points. Full rollout planning was underway when my contract concluded.

The design questions that would have come next: how does this experience behave for customers in mid-contract, not actively shopping? What's the right re-engagement model when the personalized offer expires? How does the intent quiz evolve as the product catalog does?

Those are good problems to have. They emerge only once the core experience is working.
