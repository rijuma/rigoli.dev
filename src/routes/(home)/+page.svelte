<script lang="ts">
  import { APP_VERSION } from '$lib/const'
  import MainHero from './main-hero.svelte'

  let { data } = $props()

  console.log({ github: data.github })
</script>

<MainHero />

{JSON.stringify({ APP_VERSION })}
