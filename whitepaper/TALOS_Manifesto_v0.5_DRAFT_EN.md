# TALOS Manifesto v0.5 Draft

**Status:** Draft, not a formal release  
**Date:** 2026-09-02  
**License:** CC BY-SA 4.0

## Abstract

TALOS is a personal context operating system for the age of AI agents. It organizes not only what an agent should know, but also who owns each fact, how work advances, how evidence is verified, how authority is bounded, and how multiple applications and agents cooperate without competing sources of truth.

The v0.4 eight-layer context model remains the conceptual foundation. v0.5 adds an operational architecture: TALOS is the parent system, TALOS System is the control plane, lili is the daily portfolio hub, specialized applications own domain facts and execution, and shared capabilities provide state, evidence, guards, adapters and visual runtimes.

## 1. Three Complementary Levels

### Context theory

Identity and values, goals and strategy, preferences and style, experience and decisions, active projects, samples and templates, workflows and automation, and boundaries and permissions form the eight context layers. They answer what an agent should understand.

### Product data

A deployable TALOS product separates user-owned content, a managed system surface and a local private machine layer. Upgrades may change the managed surface only. They must be previewable, verifiable and reversible, and must never silently overwrite user content.

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

Multiple agents must not become multiple writers competing for the same truth. The default pattern is one canonical writer with multiple read-only researchers or reviewers. Model output begins as a proposal; only the control plane may commit it after evidence, revision and authorization checks.

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

This document is a draft. The published v0.4 text, PDF, tag and DOI remain unchanged.
