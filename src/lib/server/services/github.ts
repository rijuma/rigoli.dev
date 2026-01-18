import { GITHUB_API_URL, GITHUB_TAG, GITHUB_URL } from '$lib/const'
import { z } from 'zod'

import type { GithubUser } from '$lib/types'

const githubUserApiSchema = z
  .object({
    html_url: z.url(),
    avatar_url: z.url(),
    bio: z.string(),
    hireable: z
      .boolean()
      .nullable()
      .default(false)
      .transform((value) => value ?? false),
  })
  .transform(({ html_url: profileUrl, avatar_url: avatarUrl, ...rest }) => ({
    profileUrl,
    avatarUrl,
    ...rest,
  }))

const githubUserOrgsSchema = z.array(
  z
    .object({
      login: z.string(),
      avatar_url: z.url(),
      description: z.string(),
    })
    .transform(({ login: tag, avatar_url: avatarUrl, ...rest }) => ({
      tag,
      profileUrl: `${GITHUB_URL}/org/${tag}`,
      avatarUrl,
      ...rest,
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

const TTL = 5 * 60 * 1000 // 5 minutes cache (Github has 60 requests per minute for unauthenticated users)

// This is a global variable. It would be shared on every render for every request.
let cache:
  | {
      github: GithubUser
      exp: number
    }
  | undefined = undefined

let currentFetch: ReturnType<typeof getGithubUserData> | null = null

// Just a queue if multiple requests want to fetch at the same time.
const fetchGithub = async () => {
  if (currentFetch) return currentFetch

  currentFetch = getGithubUserData()
  currentFetch.finally(() => (currentFetch = null)) // Clear

  return currentFetch
}

export async function getCachedGithubUserData() {
  try {
    const now = Date.now()

    // If the cached data is fresh, we return it.
    if (cache && cache.exp + TTL > now) return cache.github

    // Else, we fetch the github endpoint and save it to the cache.
    const userData = await fetchGithub()

    if (!userData) throw new Error('Failed to fetch GitHub user data')

    cache = {
      github: {
        ...userData,
        hireable: false,
      },
      exp: Date.now(),
    }

    return userData
  } catch (e) {
    // Intentionally silent - fallback to cached data below
  }

  // If fetching fails, we return the last cached data anyways (if any).
  if (cache) return cache.github

  // If even that fails, then we are f*cked...
  throw new Error('Service unavailable.')
}
