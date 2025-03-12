import '../styles/main.scss'

import type { LayoutLoad } from './$types'

export const load = (async ({ data }) => {
  return data
}) satisfies LayoutLoad
