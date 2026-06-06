# TALOS: Trusted AI Life Operating System

> **A Personal Context Operating System for the Age of AI Agents**
> 一套面向智能体时代的个人上下文操作系统

[![DOI](https://img.shields.io/badge/DOI-pending-blue.svg)]()
[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)
[![Version](https://img.shields.io/badge/version-0.4-orange.svg)]()

---

## What is TALOS?

TALOS is a **personal context operating system** — a structured framework that makes your accumulated knowledge, preferences, decisions, and workflows machine-readable for any AI agent.

### The Core Thesis

> **Models will commoditize. Context will differentiate.**
> 模型会商品化，上下文会差异化。

Every time you open a new chat, you start from zero. Your AI doesn't know your style, your goals, your past decisions, or your expertise. TALOS solves this by giving any AI a **stable, portable user manual** — not by training a model on your data, but by structuring your context so any model can pick it up instantly.

### What TALOS is NOT

- Not another note-taking app
- Not a custom model fine-tuned on your data
- Not a RAG pipeline for document retrieval
- Not a ChatGPT plugin or browser extension

TALOS is the **architectural layer between you and any AI** — defining what context exists, how it's organized, when it's loaded, and who controls it.

---

## The Eight-Layer Architecture

TALOS structures personal context into eight interconnected layers:

```
┌─────────────────────────────────────────────┐
│  Layer 8: Boundaries & Permissions          │  ← What the AI cannot do
├─────────────────────────────────────────────┤
│  Layer 7: Workflows & Automation            │  ← Recurring patterns
├─────────────────────────────────────────────┤
│  Layer 6: Samples & Templates               │  ← Output exemplars
├─────────────────────────────────────────────┤
│  Layer 5: Active Projects                   │  ← Current work context
├─────────────────────────────────────────────┤
│  Layer 4: Experience & Decisions            │  ← What you've tried & chosen
├─────────────────────────────────────────────┤
│  Layer 3: Preferences & Style               │  ← How you like things done
├─────────────────────────────────────────────┤
│  Layer 2: Goals & Strategy                  │  ← Where you're heading
├─────────────────────────────────────────────┤
│  Layer 1: Identity & Values                 │  ← Who you are
└─────────────────────────────────────────────┘
```

Each layer has a defined lifecycle: **Write → Retrieve → Compress → Audit → Recycle**.

---

## Maturity Model (L0–L6)

| Level | Stage | Description |
|-------|-------|-------------|
| **L0** | No System | Zero persistent context; every conversation starts from scratch |
| **L1** | Raw Notes | Unstructured notes exist, but AI cannot read them |
| **L2** | Structured | Identity files (Profile/Telos/Context) exist; AI can read basic preferences |
| **L3** | Integrated | AI actively reads/writes context; daily workflows automated |
| **L4** | Self-evolving | System auto-detects stale content, suggests updates, manages lifecycle |
| **L5** | Multi-agent | Multiple AI agents share your context; routing and conflict resolution exist |
| **L6** | Sovereign | Full portability across tools; you own and control all context |

---

## Quick Start (30 minutes)

### 1. Create the Identity Trinity

Three files that define who you are to any AI:

**`PROFILE.md`** — Your style, preferences, communication patterns
**`TELOS.md`** — Your goals, values, and strategic direction
**`CONTEXT.md`** — Your current state, active projects, recent changes

### 2. Add the AI Entry Point

Create a `CLAUDE.md` (or equivalent) at the root of your knowledge base. This is the **bootloader** — the first file any AI reads when starting a session.

### 3. Set Up the Fractal Structure

```
your-vault/
├── CLAUDE.md          ← AI entry point
├── Identity/
│   ├── PROFILE.md     ← Who you are
│   ├── TELOS.md       ← Where you're going
│   └── CONTEXT.md     ← What you're doing now
├── 00-Inbox/
├── 01-Journal/
├── 02-Insights/       ← Original thinking
├── 03-Materials/      ← External content
├── 04-Projects/
└── 05-Archive/
```

### 4. Run the Three Maintenance Loops

| Loop | Frequency | Purpose |
|------|-----------|---------|
| `/intake` | Daily | Process inbox → categorize → archive |
| `/digest` | Weekly | Review AI-observed preferences → confirm → promote |
| `/maintain` | Weekly | Health scan → detect stale/broken/redundant content |

---

## Core Concepts

### Context Health: Three Diseases

| Disease | Symptom | Cure |
|---------|---------|------|
| **Scattered (散)** | Information spread across tools, no unified structure | Consolidate into single vault |
| **Dirty (脏)** | Outdated preferences mixed with current ones | Lifecycle management + audit trails |
| **Rotten (腐)** | Decisions from 2 years ago still marked "active" | Status taxonomy + automatic staleness detection |

### The Five Operating Mechanisms

1. **Write** — Capture experience in structured form
2. **Retrieve** — Context-aware loading (only what's needed, when it's needed)
3. **Compress** — Evolve detailed records into refined patterns
4. **Audit** — Human reviews AI-suggested changes before they stick
5. **Recycle** — Outdated content gets archived, not deleted

---

## Comparison with Alternatives

| Feature | ChatGPT Memory | Notion AI | RAG Pipeline | TALOS |
|---------|---------------|-----------|-------------|-------|
| Ownership | Platform-locked | Platform-locked | Self-hosted | **Self-owned, portable** |
| Transparency | Black box | Partial | Configurable | **Fully auditable** |
| Portability | None | Export only | Custom | **Cross-tool by design** |
| Privacy | Platform sees all | Platform sees all | Self-managed | **Permission layers** |
| Lifecycle | None | Manual | Manual | **Built-in maintenance** |

---

## The Myth Behind the Name

TALOS is named after the bronze guardian of ancient Crete — forged by Hephaestus, powered by ichor (divine fluid), patrolling the shores daily.

| Myth Element | TALOS Mapping |
|-------------|---------------|
| **Forging (锻造)** | Your knowledge system is forged, not hoarded |
| **Ichor (灵液)** | Structured Context flowing between modules |
| **Patrol (巡逻)** | Daily maintenance loops (intake/digest/maintain) |
| **Guard (守护)** | Protecting your cognitive sovereignty |
| **Heel Rivet (命门)** | Human judgment remains the ultimate authority |
| **Downfall (陨落)** | Without maintenance, even the best system degrades |

---

## White Paper

The full TALOS white paper (v0.4) is available in Chinese (latest) and English (v0.3):

📄 **[TALOS 白皮书 v0.4（中文·最新）](./whitepaper/TALOS_Manifesto_v0.4.md)**
📄 **[TALOS 白皮书 v0.4 PDF](./whitepaper/TALOS_Manifesto_v0.4.pdf)**
📄 **[TALOS Manifesto v0.3 (English)](./whitepaper/TALOS_Manifesto_v0.3_EN.md)**

---

## Contributing

TALOS is a theoretical framework in active development. Contributions are welcome:

- **Theory**: Propose refinements to the architecture or maturity model
- **Templates**: Share your Identity Trinity or CLAUDE.md templates
- **Translations**: Help translate the white paper to English and other languages
- **Implementations**: Build adapters for different AI tools (Claude, GPT, Gemini, etc.)

Please open an issue first to discuss what you'd like to change.

---

## Citation

If you reference TALOS in your work, please cite:

```bibtex
@misc{talos2026,
  author = {外脑玩家},
  title = {TALOS: A Personal Context Operating System for the Age of AI Agents},
  year = {2026},
  version = {0.4},
  url = {https://github.com/外脑玩家/talos-framework}
}
```

DOI will be added upon Zenodo registration.

---

## License

This work is licensed under the **Creative Commons Attribution-ShareAlike 4.0 International License** (CC BY-SA 4.0).

You are free to share and adapt this material, provided you give appropriate credit and distribute your contributions under the same license.

---

## Author

**外脑玩家** (External Brain Player)
- Building the bridge between personal knowledge management and AI agent collaboration
- [GitHub](https://github.com/外脑玩家) | [X/Twitter](https://x.com/外脑玩家)

> "Your résumé helps companies understand you. Your portfolio helps clients understand you. TALOS helps AI understand you."
