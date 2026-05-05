---
title: "Number Transfer Redesign: Reducing Customer Friction Across Channels"
slug: "verizon-number-transfer"
client: "Verizon"
role: "Sr. Experience Designer"
duration: "12 months"
year: 2022
tags: ["UX Design", "Service Design", "Omnichannel", "Research"]
coverImage: "/images/case-studies/verizon-port-cover.jpg"
excerpt: "Redesigned the mobile number transfer experience to reduce a 33% fallout rate, resulting in 1.5M fewer failed transfers annually."
featured: true
---

## Overview

When customers transferred their mobile numbers to Verizon, 33% experienced "fallout" - failures that require manual intervention by customer service representatives. This created significant operational costs and often time a poor first service experience for new customers.

---

## Challenge

In addition to the 1/3 of customers who experienced "falllut", a small but significant number didn't have or know the account numbers and PINs required from their old carrier. With no visibility into transfer status and no way to self-correct, customers were forced to troubleshoot on their own, bouncing between retail stores, websites, and customer service.

### Key Metrics

| Metric | Value |
|---|---|
| Annual ports | 9.4M |
| Monthly customer service calls | 314K (4% of all Verizon service calls) |
| Transfers initiated in retail stores | 75% |
| Fallout rate requiring manual resolution | 33% |

---

## Research

We conducted user interviews and collaborated with product managers to create a comprehensive service blueprint mapping the end-to-end porting journey across all touchpoints.

<figure>
  <img src="/images/case-studies/verizon-number-transfer/user-research.jpg" alt="User research findings and interview synthesis from number transfer study" />
  <figcaption>Research synthesis from customer interviews and contextual inquiry sessions</figcaption>
</figure>

<figure>
  <img src="/images/case-studies/verizon-number-transfer/service-blueprint.jpg" alt="Service blueprint mapping the end-to-end number transfer journey across retail, web, and IVR touchpoints" />
  <figcaption>Service blueprint documenting the full porting journey across all customer touchpoints</figcaption>
</figure>

### What We Learned

- **Channel confusion** — Customers bounced between retail, web, and phone with inconsistent messaging at each touchpoint
- **Information opacity** — The transfer process felt like a "black box" with no visibility into status or next steps
- **Messaging chaos** — Dozens of error messages with conflicting language and unclear action items
- **System fragmentation** — Legacy backend systems across retail, IVR, and digital channels didn't communicate effectively

---

## Approach

Rather than rebuild legacy systems, we designed a unified customer experience layer that worked across existing infrastructure, giving customers agency and visibility regardless of where they started.

### Unified Messaging Framework
Audited and streamlined scores of status and error messages down to four core types with clear, actionable language. Added proactive "device waiting to ship" notifications to set expectations.

<figure>
  <img src="/images/case-studies/verizon-number-transfer/port_messaging_matrix.png" alt="Port Status Messaging Matrix mapping the transfer process steps with proactive SMS notifications and status page updates across the customer journey" />
  <figcaption>Port Status Messaging Matrix documenting proposed and updated customer messaging touchpoints</figcaption>
</figure>

### Retail to Digital Handoff
Created an SMS-based bridge for the 75% of customers who started in stores:
- Sent automated text messages to customers who initiated transfers
- Linked to a mobile web form for missing information
- Provided a real-time status tracker for completed transfers

<figure>
  <img src="/images/case-studies/verizon-number-transfer/use_case_flow.png" alt="Use case flow diagram showing the handoff from Store POS to Digital Self Serve via SMS and online form, with Care Assisted fallback channel" />
  <figcaption>Retail to digital handoff flow enabling customers to complete transfers via SMS-triggered self-service</figcaption>
</figure>

<figure>
  <img src="/images/case-studies/verizon-number-transfer/text_to_signup.png" alt="Mobile screens showing the SMS-initiated number transfer flow: initial text message, transfer checklist, information entry, account verification, and final review screens" />
  <figcaption>SMS-to-web self-service flow allowing customers to complete their number transfer from their mobile device</figcaption>
</figure>

### Self-Service Status and Updates
Built responsive interfaces allowing customers to:
- Check transfer status across web, app, and IVR
- Submit missing account information on their own schedule
- Receive clear, jargon-free guidance on next steps

<figure>
  <img src="/images/case-studies/verizon-number-transfer/submitted_tracker.png" alt="SMS notifications and status tracker screens showing transfer progress from initial message through completion with SIM installation instructions" />
  <figcaption>Proactive SMS updates paired with real-time status tracking through the transfer journey</figcaption>
</figure>

<figure>
  <img src="/images/case-studies/verizon-number-transfer/tracker_fallout.png" alt="SMS notifications and status tracker screens showing fallout scenario with missing account info alert, PIN/password entry form, and confirmation of updated details" />
  <figcaption>Self-service fallout recovery allowing customers to update missing account information directly from the tracker</figcaption>
</figure>

### Cross-Channel Integration
Coordinated with technical teams to sync data across retail systems, IVR platforms, and digital channels—ensuring consistent information regardless of touchpoint.

---

## Results

**2.5% reduction in fallouts** in the year following launch (2022).

<!-- | Impact | Value |
|---|---|
| Fewer failed transfers annually | ~1.5M |
| Monthly support call reduction | Significant decrease from 314K baseline |
| Operational cost savings | Multi-million dollar |
| Customer experience | Improved first impressions for new Verizon customers | -->

---

## Lessons Learned

**Working Within Constraints** — This project taught me how to drive customer experience improvements within the reality of legacy systems. Rather than waiting for a perfect technical solution, I focused on the experience layer—unified messaging, proactive communication, and smart channel handoffs.

**Cross-Functional Orchestration** — Success required aligning retail, digital, IVR, and technical teams around a shared vision. I used the service blueprint as a collaboration tool to build consensus and identify integration points across siloed systems.

**Incremental Impact** — By starting with the highest-volume channel (retail-to-digital) and the clearest pain point (messaging), we could deliver value quickly while building toward a more comprehensive omnichannel solution.
