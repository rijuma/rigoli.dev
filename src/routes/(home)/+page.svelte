<script lang="ts">
  import MainHero from './main-hero.svelte'
  import Intro from './intro.svelte'
  import Skills from './skills.svelte'
  import Experience from './experience.svelte'
  import Schedule from './schedule.svelte'

  let { data } = $props()
</script>

<header>
  <MainHero />
</header>

<section>
  <Intro />
</section>

<section>
  <Skills />
</section>

<section>
  <Experience jobs={data.jobs} />
</section>

{#if data.github.hireable}
  <section>
    <Schedule />
  </section>
{/if}
