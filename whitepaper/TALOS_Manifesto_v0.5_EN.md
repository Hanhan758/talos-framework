# TALOS Manifesto v0.5

**Status:** Final framework text

**Version:** 0.5

**Date:** 2026-09-06

**Author:** External Brain Player (外脑玩家)

**License:** CC BY-SA 4.0

## Abstract

TALOS focuses on data management and practical language-model use for individuals and businesses. It provides context organization, collaboration rules, learning paths and scenario solutions that help users turn information and goals into useful results. Users choose their models, tools and level of AI involvement, while retaining key decisions.

This framework explains who owns data and facts, how work advances, how evidence is verified, and how applications and agents share rules while retaining data ownership. Finalizing the framework does not establish that the complete first software release or all applications have passed acceptance.

The v0.4 eight-layer context model remains the conceptual foundation. v0.5 adds an operational architecture: TALOS is the parent system, TALOS System is the control plane, lili is the daily portfolio hub, specialized applications own domain facts and execution, and shared capabilities provide state, evidence, guards, adapters and visual runtimes.

## 1. Three Complementary Levels

### Context theory

Identity and values, goals and strategy, preferences and style, experience and decisions, active projects, samples and templates, workflows and automation, and boundaries and permissions form the eight context layers. They answer what an agent should understand.

### Product data

Product data separates user-owned content, a managed system surface and a local private machine layer. Existing deployment packages and plugins provide implementation references for the first release. Upgrades may change the managed surface only. They must be previewable, verifiable and reversible, and must never silently overwrite user content.

### Operational control

Every managed project has a goal, one active outcome, one mainline, decisions, evidence, blockers, a checkpoint, authorization boundaries and one next action. State changes bind an expected revision and fail closed on conflict, missing evidence or unclear authority.

## 2. System and Application Ownership

- **TALOS** is the single system identity and parent product.
- **TALOS System** owns portfolio state, revisions, evidence and integration contracts.
- **lili** reads, explains, compares and routes; it does not create a second project truth.
- **Specialized applications** own their domain data, workflows, executors, receipts and recovery.
- **Shared capabilities** provide stable schemas, guards, adapters or visual runtimes without owning business facts.

An active project is not automatically a separate product line. A hub may display a project without owning its state.

## 3. One Truth, Traceable Projections

Authoritative facts, derived indexes, caches and UI projections must remain separate. Every cross-application projection should carry its source, revision, observation time, freshness, evidence status and failure reason. A cache may be rebuilt; it may not overwrite the authority.

Unknown must remain unknown. A process starting is not proof of business health. Passing automation is not proof of a validated user result. A successful build is not a release.

## 4. Controlled Actions

Cross-application actions follow:

`Action Intent → Impact Preview → Approval → Owning App Execution → Receipt → Reconciliation`

The intent binds the target, parameter digest, expected revision, expiry and idempotency identity. Approval applies only to that intent. The owning application executes. The receipt records before and after revisions, outcome, evidence and recovery. Missing or uncertain receipts must block automatic retry and enter reconciliation.

## 5. Local First and Least Authority

Local first does not mean never networked. It means every network operation is visible, bounded and revocable. External reads identify the destination, transmitted data classes, credential use and confirmation mode. Private content, identity, memory and credentials do not enter the portfolio hub or public evidence.

Publishing, permissions, credentials, production data and irreversible deletion remain separate authority boundaries.

## 6. Multi-Agent Collaboration

Multiple agents must not become multiple writers competing for the same truth. The default pattern is one canonical writer with multiple read-only researchers or reviewers. Model output begins as a proposal; only the authoritative writer for the relevant facts may commit it after evidence, revision and authorization checks. The control plane owns project state; user content and domain data retain their respective authorities.

Model voting cannot replace tests or reproducible evidence. Budgets, retries and repair rounds require hard limits. Lost ownership or uncertain remote delivery must stop safely.

## 7. Context Lifecycle

TALOS continues to use:

**Write → Retrieve → Compress → Audit → Recycle**

- Write facts, decisions and sources to their proper authority.
- Retrieve the minimum sufficient context for the current task.
- Compress repeated records into stable patterns.
- Audit proposals, permissions and important conclusions with human judgment.
- Recycle stale content into recoverable archives instead of deleting without evidence.

## 8. A Minimal Implementation

A minimal TALOS does not require a database or a complex application. Start with a portable directory, `AGENTS.md`, three Identity files, six content areas, and explicit read, write and authorization rules.

Introduce portfolio state, evidence, checkpoints, manifests, projections and receipts only when project count, application count and automated execution justify the complexity.

## 9. From v0.4 to v0.5

v0.5 preserves the eight-layer theory and adds operational discipline:

- a tool-neutral `AGENTS.md` instead of one agent-specific bootloader;
- authoritative facts separated from derived projections;
- controlled execution with intent, approval, receipt and recovery;
- a control plane, portfolio hub, specialized applications and shared capabilities;
- revisions, evidence, checkpoints and fail-closed conflict handling.

## 10. From Real Experience to the First Product Release

The first release adopts a shared foundation. Early work prioritizes Superbrain data and practices validated by the user, extracting reusable rules. Existing deployment packages and plugins serve as implementation references; reuse and adaptation require validation against the new product requirements.

The first release combines a methods, templates, learning and scenario package with an Obsidian plugin. It starts with one user on one macOS device, using an existing Obsidian vault and local folders. Analysis of selected data drives configuration proposals, supplemented by conversation and confirmed by the user. Existing directories may be preserved or reorganized after confirmation.

Three complete workflows are in scope: source material to a report, plan or content; a goal to a checkable deliverable; and repeatable work with human review. In-task guidance is paired with tutorials, examples and exercises. Users choose AI involvement, and inferred content remains distinct from confirmed facts.

Existing engineering and usage evidence supports only its recorded scope. Existing-vault adaptation, data-driven configuration, office documents and image OCR, and the three real-model workflows still require complete validation. Evaluate whether results meet their intended use before comparing total time and manual revisions.

Single-user use by individuals and enterprise employees comes first. Team and organizational collaboration, model subscription access and the TALOS World virtual environment are later stages. A shared foundation does not require every application to ship together or all user data to be centrally hosted.

## 11. Open Materials, Commercial Products and Version Boundaries

The complete product uses version licensing and supporting services. Basic specifications and selected implementations are open; advanced implementations and professional services are commercial. Specific open-source scope, pricing, entitlements and launch conditions will be announced separately. Existing repositories and papers retain their respective licenses.

This document and its Chinese counterpart are the final TALOS Framework v0.5 texts under CC BY-SA 4.0. They define methods and operating rules. The first-release scope and later stages retain their stated development status; they do not claim all software capabilities are available.

The published v0.4 text, PDF, tag and DOI remain unchanged. v0.5 does not reuse the old DOI as its own version identifier, and no new DOI has been registered. Cite version 0.5, the date 2026-09-06 and the corresponding GitHub version entry.
