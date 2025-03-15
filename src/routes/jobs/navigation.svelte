<script lang="ts">
  import { TopNavigation } from '$lib/components'
  import StickyHeader from '$lib/components/sticky-header.svelte'

  let stuck = $state(false)
</script>

<StickyHeader bind:stuck>
  <TopNavigation shadow={stuck} />
</StickyHeader>
