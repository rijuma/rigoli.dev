import type { LayoutServerLoad } from './$types'
import { getGithubUserData } from '$lib/server/services'
import { error } from '@sveltejs/kit'
import type { GithubUser } from '$lib/types'

// Dynamic endpoint
export const prerender = false

const TTL = 60 * 60 * 1000 // 1 hour cache

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

export const load = (async () => {
  try {
    const now = Date.now()

    // If the cached data is fresh, we return it.
    if (cache && cache.exp + TTL > now)
      return {
        github: cache.github,
      }

    // Else, we fetch the github endpoint and save it to the cache.
    const userData = await fetchGithub()

    if (!userData) throw new Error()

    cache = {
      github: userData,
      exp: Date.now(),
    }

    return {
      github: userData,
    }
  } catch (e) {}

  // If fetching fails, we return the last cached data anyways (if any).
  if (cache)
    return {
      github: cache.github,
    }

  // If even that fails, then we are f*cked...
  return error(503)
}) satisfies LayoutServerLoad
