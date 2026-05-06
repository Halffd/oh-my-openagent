import { z } from "zod"

import { GitEnvPrefixSchema } from "./git-env-prefix"

export const GitMasterConfigSchema = z.object({
  commit_footer: z.union([z.boolean(), z.string()]).default(false),
  include_co_authored_by: z.boolean().default(false),
  git_env_prefix: GitEnvPrefixSchema,
})

export type GitMasterConfig = z.infer<typeof GitMasterConfigSchema>
