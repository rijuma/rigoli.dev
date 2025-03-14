<script lang="ts">
  import MainHero from './main-hero.svelte'
  import Intro from './intro.svelte'
  import Skills from './skills.svelte'
  import Experience from './experience.svelte'
  import Schedule from './schedule.svelte'

  let { data } = $props()
</script>

<header>
  <div class="container-md">
    <MainHero />
  </div>
</header>

<section>
  <div class="container-md">
    <Intro />
  </div>
</section>

<section>
  <div class="container-md">
    <Skills />
  </div>
</section>

<section>
  <div class="container-md">
    <Experience jobs={data.jobs} />
  </div>
</section>

{#if data.github.hireable}
  <section>
    <div class="container-md">
      <Schedule />
    </div>
  </section>
{/if}
