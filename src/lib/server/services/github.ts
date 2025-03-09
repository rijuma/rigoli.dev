import { z } from 'zod'
import { GITHUB_TAG, GITHUB_URL, GITHUB_API_URL } from '$lib/const'

import type { GithubUser } from '$lib/types'

const githubUserApiSchema = z
  .object({
    html_url: z.string().url(),
    avatar_url: z.string().url(),
  })
  .transform(({ html_url: profileUrl, avatar_url: avatarUrl }) => ({
    profileUrl,
    avatarUrl,
  }))

const githubUserOrgsSchema = z.array(
  z
    .object({
      login: z.string(),
      avatar_url: z.string().url(),
      description: z.string(),
    })
    .transform(({ login: tag, avatar_url: avatarUrl, description }) => ({
      tag,
      profileUrl: `${GITHUB_URL}/org/${tag}`,
      avatarUrl,
      description,
    })),
)

export async function getGithubUserData() {
  try {
    const tag = GITHUB_TAG

    const userResponse = await fetch(`${GITHUB_API_URL}/users/${tag}`)
    const user = githubUserApiSchema.parse(await userResponse.json())

    const orgsResponse = await fetch(`${GITHUB_API_URL}/users/${tag}/orgs`)
    const orgs = githubUserOrgsSchema.parse(await orgsResponse.json())

    return {
      tag,
      ...user,
      orgs,
    } satisfies GithubUser
  } catch (e) {
    console.error('Error updating Github data: ', (e as Error).message)

    return
  }
}
