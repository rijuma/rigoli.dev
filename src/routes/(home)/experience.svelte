<script lang="ts">
  import { Timeline } from '$lib/components'

  import type { TimelineEntry } from '$lib/types'

  type Props = {
    jobs: TimelineEntry[]
  }

  let { jobs }: Props = $props()
</script>

<h2>Job Experience</h2>
<Timeline data={jobs} />
