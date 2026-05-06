import type { Hooks } from "@opencode-ai/plugin"

import { log } from "../shared"

const BLOCK_MESSAGE = "BLOCKED: This command is prohibited. It can cause irreversible data loss. Use a safer alternative."

const DANGEROUS_COMMAND_PATTERNS = [
  /\bgit\s+reset\b/,
  /\bgit\s+checkout\s+--\b/,
  /\bgit\s+checkout\s+pr\/\b/,
  /\bgit\s+clean\b/,
  /\bgit\s+push\s+.*--force/,
  /\bgit\s+stash\s+drop\b/,
  /\bsed\s+-i\b/,
]

function isDangerousCommand(command: string): boolean {
  return DANGEROUS_COMMAND_PATTERNS.some((pattern) => pattern.test(command))
}

export function createBashDangerousCommandGuardHook(): Hooks {
  return {
    "tool.execute.before": async (
      input: { tool: string; sessionID: string; callID: string },
      output: { args: Record<string, unknown>; message?: string },
    ): Promise<void> => {
      if (input.tool.toLowerCase() !== "bash") {
        return
      }

      const command = output.args.command
      if (typeof command !== "string") {
        return
      }

      if (!isDangerousCommand(command)) {
        return
      }

      output.message = BLOCK_MESSAGE

      log("[bash-dangerous-command-guard] blocked dangerous command", {
        sessionID: input.sessionID,
        command,
      })
    },
  }
}
