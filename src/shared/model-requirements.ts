export type FallbackEntry = {
  providers: string[];
  model: string;
  variant?: string; // Entry-specific variant (e.g., GPT→high, Opus→max)
  reasoningEffort?: string;
  temperature?: number;
  top_p?: number;
  maxTokens?: number;
  thinking?: { type: "enabled" | "disabled"; budgetTokens?: number };
};

export type ModelRequirement = {
  fallbackChain: FallbackEntry[];
  variant?: string; // Default variant (used when entry doesn't specify one)
  requiresModel?: string; // If set, only activates when this model is available (fuzzy match)
  requiresAnyModel?: boolean; // If true, requires at least ONE model in fallbackChain to be available (or empty availability treated as unavailable)
  requiresProvider?: string[]; // If set, only activates when any of these providers is connected
};

export const AGENT_MODEL_REQUIREMENTS: Record<string, ModelRequirement> = {
  sisyphus: {
    fallbackChain: [],
  },
  hephaestus: {
    fallbackChain: [],
  },
  oracle: {
    fallbackChain: [],
  },
  librarian: {
    fallbackChain: [],
  },
  explore: {
    fallbackChain: [],
  },
  "multimodal-looker": {
    fallbackChain: [],
  },
  prometheus: {
    fallbackChain: [],
  },
  metis: {
    fallbackChain: [],
  },
  momus: {
    fallbackChain: [],
  },
  atlas: {
    fallbackChain: [],
  },
  "sisyphus-junior": {
    fallbackChain: [],
  },
};

export const CATEGORY_MODEL_REQUIREMENTS: Record<string, ModelRequirement> = {
  "visual-engineering": {
    fallbackChain: [],
  },
  ultrabrain: {
    fallbackChain: [],
  },
  deep: {
    fallbackChain: [],
  },
  artistry: {
    fallbackChain: [],
  },
  quick: {
    fallbackChain: [],
  },
  "unspecified-low": {
    fallbackChain: [],
  },
  "unspecified-high": {
    fallbackChain: [],
  },
  writing: {
    fallbackChain: [],
  },
};
