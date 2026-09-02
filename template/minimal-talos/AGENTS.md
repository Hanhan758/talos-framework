# TALOS Agent Entry

This file is the tool-neutral bootloader for every AI agent working in this vault.

## Read Order

1. Read `Identity/PROFILE.md` for communication and working preferences.
2. Read `Identity/TELOS.md` for goals, values and anti-goals.
3. Read `Identity/CONTEXT.md` for the current focus, active projects and recent decisions.
4. Read only the active project files needed for the current task.

## Operating Rules

- Keep one explicit user outcome and one next action for the current task.
- Distinguish facts, proposals and inferences.
- Record important decisions and evidence; do not treat chat history as the only source of truth.
- Ask before external publishing, permissions, credentials, irreversible deletion or sending private context.
- Never modify Identity files without explicit approval.
- Never share personal context outside this vault without explicit approval for the exact destination.
- Read before writing and preserve recoverable history.
- If sources conflict, stop and report the conflict instead of choosing silently.

## Content Lifecycle

- `00-Inbox/`: uncaptured inputs.
- `01-Journal/`: chronological activity.
- `02-Insights/`: original patterns and conclusions.
- `03-Materials/`: external sources and evidence.
- `04-Projects/`: active outcomes, decisions and deliverables.
- `05-Archive/`: completed or superseded material retained for recovery.

Maintain context through **Write → Retrieve → Compress → Audit → Recycle**.
