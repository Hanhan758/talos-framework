# Minimal TALOS Template

A ready-to-use personal context operating system for AI collaboration.

## Quick Start

1. Copy this `minimal-talos/` folder to your preferred location
2. Edit the three Identity files:
   - `Identity/PROFILE.md` — Your preferences and style
   - `Identity/TELOS.md` — Your goals and values
   - `Identity/CONTEXT.md` — Your current state
3. Edit `CLAUDE.md` to customize the AI entry point
4. Point your AI tool (Claude Code, Cursor, etc.) to read `CLAUDE.md` as the system prompt

## Directory Structure

```
minimal-talos/
├── CLAUDE.md              ← AI reads this first (bootloader)
├── Identity/
│   ├── PROFILE.md         ← Who you are & how you work
│   ├── TELOS.md           ← Where you're heading
│   └── CONTEXT.md         ← What you're doing now
├── 00-Inbox/              ← Uncaptured inputs
├── 01-Journal/            ← Daily notes
├── 02-Insights/           ← Original thinking
├── 03-Materials/          ← External content
├── 04-Projects/           ← Active projects
└── 05-Archive/            ← Completed content
```

## The Three Maintenance Loops

Run these regularly to keep your TALOS healthy:

| Loop | When | What |
|------|------|------|
| **Intake** | Daily | Process your inbox — categorize and archive |
| **Digest** | Weekly | Review what the AI learned about you — confirm or correct |
| **Maintain** | Weekly | Health check — fix stale content, broken links, redundancies |

## Context Health: Watch for These

- **Scattered (散)**: Info spread across tools → consolidate here
- **Dirty (脏)**: Outdated preferences → update regularly
- **Rotten (腐)**: Old decisions still marked "active" → archive them

## Learn More

Read the [TALOS White Paper](../whitepaper/) for the full theory.

---

Built with [TALOS Framework](https://github.com/外脑玩家/talos-framework)
