---
title: "xFi, Reimagined: What WiFi Management Looks Like When the Network Can Talk Back"
slug: "xfi-reimagined"
client: "Comcast (Speculative)"
role: "Solo · Concept"
duration: "Speculative Redesign"
year: 2026
tags: ["Conversational AI", "Agentic Systems", "Voice UI", "Mobile"]
coverImage: "/images/xfi_ConversationalDesign.png"
excerpt: "A speculative redesign of Comcast's xFi platform — exploring how a conversational interface and an agentic layer underneath would change the product I helped ship in 2017."
featured: true
---

<div class="disclosure">
  <strong>Disclosure</strong>
  I was a designer on the original xFi launch (2016–2018). This case study is a personal speculative exercise built in 2026 — a reframe of that product if I were starting it today, when conversational AI and agentic systems are viable in ways they weren't a decade ago. Nothing here represents Comcast's current roadmap or my work for them.
</div>

---

## Premise

The 2017 xFi team got one thing fundamentally correct: **most people don't want to become network administrators.** User testing kept showing the same pattern — early prototypes exposed too much technical detail (signal strength, bandwidth per device, channel utilization) and users bounced. The product that shipped hid complexity behind simple controls: pause a device, set up a guest network, give the kids a bedtime.

That instinct held up. The product won awards and adoption. But the assumption underneath it — that the way to protect users from complexity is to *hide it behind buttons* — is the part that's now worth revisiting.

<div class="thesis">
  <div class="thesis-label">Thesis</div>
  <p>Users still don't want to be network administrators. <em>So the network should administrate itself</em> — and explain what it's doing in plain language when asked.</p>
</div>

That single move reframes the whole product. The interface stops being a control panel and becomes a conversation with a system that's already handling the work. The buttons don't disappear — they recede, available when wanted but rarely necessary.

---

## The Reframe

The clearest way to see the shift is to put the original product and the speculative version side by side. The user's underlying job hasn't changed. What changes is who's doing the work.

<div class="compare">
  <div class="compare-header">
    <div>User's job</div>
    <div>2017 xFi</div>
    <div class="compare-new">2026 xFi (speculative)</div>
  </div>
  <div class="compare-row">
    <div class="compare-label">"The kids' internet is slow"</div>
    <div>Open app → find device → check signal → guess at fix</div>
    <div class="compare-new">"Why is Maya's iPad slow?" → app explains, offers one-tap fix</div>
  </div>
  <div class="compare-row">
    <div class="compare-label">Bedtime cutoff</div>
    <div>Set up profile → assign devices → configure schedule</div>
    <div class="compare-new">"Pause Maya's devices at 9pm on school nights" → done; show me</div>
  </div>
  <div class="compare-row">
    <div class="compare-label">Unknown device on network</div>
    <div>List of MAC addresses, user identifies manually</div>
    <div class="compare-new">Agent flags it, suggests likely identity, asks one yes/no</div>
  </div>
  <div class="compare-row">
    <div class="compare-label">Network feels broken</div>
    <div>Run speed test → restart router → call support</div>
    <div class="compare-new">Agent has already noticed, attempted fix, can explain what it tried</div>
  </div>
</div>

---

## Architecture

The product splits into a **conversational layer** the user interacts with and an **agentic layer** doing the actual work. They're separate concerns. Designing them separately is the move.

<div class="diagram">
  <div class="diagram-title">— Speculative System Architecture —</div>
  <div class="layer layer-user">
    <div class="layer-header">
      <span class="layer-name">User</span>
      <span class="layer-tag">human</span>
    </div>
    <div class="layer-desc">Asks questions, sets intent ("keep the kids off at dinner"), reviews what the agent did.</div>
  </div>
  <div class="layer-arrow">↓</div>
  <div class="layer layer-conversational">
    <div class="layer-header">
      <span class="layer-name">Conversational Layer</span>
      <span class="layer-tag">model · UX surface</span>
    </div>
    <div class="layer-desc">Translates plain language into network operations and explains technical state in plain language. Owns the product's voice. Always available; never autonomous.</div>
  </div>
  <div class="layer-arrow">↓</div>
  <div class="layer layer-agent">
    <div class="layer-header">
      <span class="layer-name">Agentic Layer</span>
      <span class="layer-tag">background · policy-bounded</span>
    </div>
    <div class="layer-desc">Continuously monitors network health, performs known-safe fixes (channel switching, device re-prioritization, parental schedule enforcement), surfaces anything that needs human judgment.</div>
  </div>
  <div class="layer-arrow">↓</div>
  <div class="layer layer-network">
    <div class="layer-header">
      <span class="layer-name">Network & Devices</span>
      <span class="layer-tag">gateway · IoT · sensors</span>
    </div>
    <div class="layer-desc">The actual hardware: router, connected devices, signal data. Largely unchanged from 2017 — the intelligence shifted up the stack.</div>
  </div>
</div>

The seam between conversational and agentic layers is where most of the interesting design questions live. **What is the agent allowed to do without asking?** What requires a human "yes"? How does the conversation reference work the agent did silently? These are not UI questions — they're product questions a designer needs to be in the room for.

---

## Conversation Design

The hardest part of designing a conversational product is the tone. The original xFi had a brand voice on copy and microcopy. A conversational xFi needs a voice on *responses to questions you can't anticipate* — which is a different kind of design problem.

### Voice Principles

- **Plain over precise.** "Your network's been a little slow tonight" before "2.4 GHz utilization at 78%." Technical detail is available on request, never the default.
- **Show its work without performing it.** When the agent did something, say what and why in one sentence. Don't narrate every step. Most users will read the summary and trust it; the few who want detail can ask.
- **Comfortable with uncertainty.** "Probably a Roku — your downstairs TV" reads better than confidently misidentifying a device. The product gains trust by being honest about what it doesn't know.

<div class="convo">
  <div class="convo-header">
    <div class="convo-dot"></div>
    <div class="convo-title">xFi · concept</div>
  </div>
  <div class="msg msg-user">
    <div class="bubble">why is maya's ipad so slow tonight</div>
  </div>
  <div class="msg msg-assistant">
    <div class="bubble">Looks like it's on the 2.4 GHz band, and there's a lot of traffic on that channel right now — probably your neighbors' networks. I can move it to 5 GHz, which should help. Want me to?</div>
    <div class="meta">↳ diagnosis · 1 suggested action · awaiting confirmation</div>
  </div>
  <div class="msg msg-user">
    <div class="bubble">yes</div>
  </div>
  <div class="msg msg-assistant">
    <div class="bubble">Done. Give it a minute. If it's still slow, the router might just need a restart — I can do that too, but it'll knock everyone off for about 30 seconds.</div>
    <div class="meta">↳ action complete · contingency offered with cost surfaced</div>
  </div>
</div>

The annotations under each response aren't user-facing — they're a way of being explicit, as a designer, about what each turn is doing structurally. Every assistant turn is doing some combination of: diagnosing, suggesting, acting, asking, or warning. Naming those moves makes them designable.

---

## The Hard Decisions

This is the strategic work. None of it shows up in a Figma file, all of it determines whether the product is trustworthy.

<div class="decisions">
  <div class="decision">
    <div class="decision-q">Q1 · Autonomy</div>
    <h4>What can the agent do silently?</h4>
    <p>My take: reversible, low-cost optimizations (channel switching, QoS adjustment) happen silently with a passive log. Anything that affects another household member's experience (pausing a device, changing a schedule) requires confirmation.</p>
  </div>
  <div class="decision">
    <div class="decision-q">Q2 · Failure cost</div>
    <h4>What does a wrong action cost?</h4>
    <p>A bad channel switch costs 30 seconds of poor signal. A wrongly paused work laptop during a video call costs trust. The autonomy boundary should be drawn around that asymmetry, not around technical complexity.</p>
  </div>
  <div class="decision">
    <div class="decision-q">Q3 · Memory</div>
    <h4>How much should it remember?</h4>
    <p>Schedules and named devices, yes. Conversation history, lightly — enough to handle "do that again" without becoming a surveillance archive. Default retention should be short and visible.</p>
  </div>
  <div class="decision">
    <div class="decision-q">Q4 · Escalation</div>
    <h4>When does it stop trying and call a human?</h4>
    <p>Three failed self-repair attempts on the same issue → agent stops and offers human support. The product's credibility depends on knowing when it's out of its depth.</p>
  </div>
</div>

---

## What I'd Want to Test

The interesting research questions for this kind of product are not about discoverability or task success. They're about **trust over time**. A few I'd want to run:

- **Does the voice stay credible after a wrong call?** If the agent misdiagnoses once, do users continue to engage conversationally, or do they retreat to manual controls? Measured over weeks, not sessions.
- **Does silent action become invisible — or distrusted?** If the agent fixes things quietly, do users stop believing it's doing anything? Some amount of visible work may be necessary even when it's not technically needed.
- **What's the "I just want a button" threshold?** Identify the tasks where conversation is friction, not feature. Bedtime mode might be one. Guest network setup might not be.

---

## Honest Scope

This is a thinking document, not a finished design. I haven't built screens for every state, run usability tests, or validated the agent's autonomy boundaries with real users. What's here is the part I find most worth working through: the architectural and product decisions that come before the screens.

If I were doing this for real, the next phase would be exactly that — pressure-testing the autonomy model with five to ten households over a month, watching where trust forms and where it breaks, then designing the screens around what survives.
