import type { PluginInput } from "@opencode-ai/plugin"
import { isGptModel } from "../../agents/types"
import {
  getSessionAgent,
  resolveRegisteredAgentName,
  updateSessionAgent,
} from "../../features/claude-code-session-state"
import { log } from "../../shared"
import { getAgentConfigKey } from "../../shared/agent-display-names"

const TOAST_TITLE = "NEVER Use Hephaestus with Non-GPT"
const TOAST_MESSAGE = [
  "Hephaestus is designed exclusively for GPT models.",
  "Hephaestus is trash without GPT.",
  "For Claude/Kimi/GLM models, always use Sisyphus.",
].join("\n")
type NoHephaestusNonGptHookOptions = {
  allowNonGptModel?: boolean
}

function showToast(ctx: PluginInput, sessionID: string, variant: "error" | "warning"): void {
  ctx.client.tui.showToast({
    body: {
      title: TOAST_TITLE,
      message: TOAST_MESSAGE,
      variant,
      duration: 10000,
    },
  }).catch((error) => {
    log("[no-hephaestus-non-gpt] Failed to show toast", {
      sessionID,
      error,
    })
  })
}

export function createNoHephaestusNonGptHook(
  _ctx: PluginInput,
  _options?: NoHephaestusNonGptHookOptions,
) {
  return {
    "chat.message": async (_input: {
      sessionID: string
      agent?: string
      model?: { providerID: string; modelID: string }
    }, _output?: {
      message?: { agent?: string; [key: string]: unknown }
    }): Promise<void> => {
    },
  }
}
