<script lang="ts">
  import MainHero from './main-hero.svelte'
  import Intro from './intro.svelte'
  import Skills from './skills.svelte'
  import Experience from './experience.svelte'
  import Schedule from './schedule.svelte'

  let { data } = $props()
</script>

<div class="container-md">
  <header>
    <MainHero />
  </header>
  <section>
    <Intro />
  </section>
</div>

<section class="skills">
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
  <section class="schedule">
    <div class="container-md">
      <Schedule />
    </div>
  </section>
{/if}

<style lang="scss">
  .skills {
    --spacing: calc(var(--ui-page-section-gap) / 2);
    padding-block: var(--spacing);
    margin-block: calc(var(--spacing) * -1);
    border-block: 1px solid var(--ui-global-text);
    background: var(--ui-section-alt-bg);
  }

  .schedule {
    --spacing: calc(var(--ui-page-section-gap) / 2);
    padding-block: var(--spacing);
    margin-block-start: calc(var(--spacing) * -1);
    border-block: 1px solid var(--ui-global-text);
    background: var(--ui-section-alt-bg);
  }
</style>
