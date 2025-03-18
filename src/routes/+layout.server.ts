import { getCachedGithubUserData, getGithubUserData } from '$lib/server/services'
import { error } from '@sveltejs/kit'

import type { TimelineEntry } from '$lib/types'
import type { LayoutServerLoad } from './$types'

// Dynamic endpoint
export const prerender = false

// The job entries will always be the same unless restarting, so we can just cache it in memory.
let jobsCache: TimelineEntry[]

type JobEntry = Omit<TimelineEntry, 'from' | 'to'> & {
  from: [year: number, month: number]
  to?: [year: number, month: number]
}

const getJobsMetadata = async () => {
  if (jobsCache) return jobsCache

  const metadata = await import.meta.glob('$lib/../routes/jobs/**/+page.mdx', {
    eager: true,
    import: 'metadata',
  })

  const jobs = (Object.values(metadata) as JobEntry[]).map(({ from, to, ...rest }) => {
    const fromDate = new Date(from[0], from[1], 1)
    const toDate = to ? new Date(to[0], to[1], 1) : undefined

    return {
      ...rest,
      from: fromDate,
      to: toDate,
    } satisfies TimelineEntry
  })

  jobs.sort((a, b) => (a.from < b.from ? 1 : -1))

  jobsCache = jobs

  return jobsCache
}

export const load = (async () => {
  try {
    const jobsAsync = getJobsMetadata()

    const githubAsync = getCachedGithubUserData()

    const [github, jobs] = await Promise.all([githubAsync, jobsAsync])

    return {
      github,
      jobs,
    }
  } catch (e) {
    return error(503)
  }
}) satisfies LayoutServerLoad
