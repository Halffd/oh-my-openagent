# oh-my-openagent

Batteries-included OpenCode plugin: 11 agents, 52 lifecycle hooks, 26 tools, 3-tier MCP system, Hashline LINE#ID editing, IntentGate classification, Claude Code compatibility.

Fork of [oh-my-opencode](https://github.com/code-yeongyu/oh-my-openagent) by [@code-yeongyu](https://github.com/code-yeongyu).

## Features

- **11 Agents** - Sisyphus (primary coder), Hephaestus, Oracle, Librarian, Explore, Atlas, Prometheus, Metis, Momus, Multimodal-Looker, Sisyphus-Junior - each with model fallback chains
- **26 Tools** - skill loading, slash commands, interactive bash, LSP integration, AST grep, glob/grep, hashline edit (LINE#ID content hashing for safe edits), look-at, background tasks, delegate-task, session manager, and more
- **52 Lifecycle Hooks** in 5 tiers - Session (24), Tool-Guard (14), Transform (5), Continuation (7), Skill (2)
- **3-Tier MCP System** - Built-in remote MCPs (websearch, context7, grep_app), Claude Code `.mcp.json` loader, Skill-embedded MCPs (stdio + HTTP, per-session)
- **Hashline Edit** - Every Read output tagged with LINE#ID content hashes; edits reject on hash mismatch
- **IntentGate** - Classifies user intent (research/implementation/investigation/evaluation/fix) before routing
- **Multi-level Config** - Project (`.opencode/oh-my-opencode.jsonc`) overrides User (`~/.config/opencode/oh-my-opencode.jsonc`) overrides defaults
- **Background Agent Manager** - Up to 5 concurrent tasks per model/provider, circuit breaker support
- **OpenClaw Integration** - Bidirectional external notifications via Discord, Telegram, webhooks
- **Team Mode** - Multi-agent worktree coordination via tmux layouts
- **CLI** - `install`, `doctor`, `run` commands

## Installation

In `opencode.json`:

**From GitHub:**

```json
{
  "plugin": [
    "github:Halffd/oh-my-openagent"
  ]
}
```

**From local path:**

```json
{
  "plugin": [
    "file:///absolute/path/to/oh-my-openagent-fork"
  ]
}
```

**From npm (upstream):**

```json
{
  "plugin": [
    "oh-my-openagent@latest"
  ]
}
```

## Configuration

Create `.opencode/oh-my-opencode.jsonc` in your project or `~/.config/opencode/oh-my-opencode.jsonc` for user-level config:

- `agents` - 14 overridable agents with 21 fields each (model, fallback chain, system prompt, etc.)
- `categories` - 8 built-in + custom task categories with model requirements
- `disabled_hooks`, `disabled_agents`, `disabled_tools`, `disabled_mcps`, `disabled_skills`, `disabled_commands` - arrays for selective feature disabling
- `openclaw` - Discord/Telegram/webhook integration settings
- `experimental.safe_hook_creation` - wraps hooks in try/catch
- `claude_code` - Claude Code compatibility settings
- 19 additional feature-specific configuration sections

## CLI

```bash
bunx oh-my-opencode install   # Interactive setup
bunx oh-my-opencode doctor    # Health diagnostics
bunx oh-my-opencode run       # Non-interactive session
```

## Build

```bash
bun run build          # Build plugin (ESM + declarations + schema)
bun run build:all      # Build + platform binaries
bun run typecheck      # tsc --noEmit
bun test               # Run test suite
```
