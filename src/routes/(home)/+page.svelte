<script lang="ts">
  import Contact from './contact.svelte'
  import Demos from './demos.svelte'
  import Experience from './experience.svelte'
  import Intro from './intro.svelte'
  import MainHero from './main-hero.svelte'
  import Navigation from './navigation.svelte'
  import Skills from './skills.svelte'

  let { data } = $props()

  let showTopNav = $state(false)

  const handleHeroVisibilityChange = (visible: boolean) => (showTopNav = !visible)
</script>

<Navigation visible={showTopNav} />

<div class="container-md">
  <header>
    <MainHero onVisibilityChange={handleHeroVisibilityChange} />
  </header>
  <section>
    <Intro />
  </section>
</div>

<section class="alt skills">
  <div class="container-md">
    <Skills />
  </div>
</section>

<section>
  <div class="container-md">
    <Experience jobs={data.jobs} />
  </div>
</section>

<section>
  <div class="container-md">
    <Demos />
  </div>
</section>

<section class="alt schedule">
  <div class="container-md">
    <Contact />
  </div>
</section>

<style lang="scss">
  .alt {
    --spacing: calc(var(--ui-page-section-gap) / 2);

    position: relative;
    padding-block: var(--spacing);
    border-block: 1px solid var(--ui-global-text);
    background: var(--ui-section-alt-bg);

    &:before,
    &:after {
      content: '';
      position: absolute;
      height: 0.5rem;
    }

    &:before {
      inset: 0 0 auto;
      background: linear-gradient(to bottom, #0003, transparent);
    }

    &:after {
      background: linear-gradient(to top, #0003, transparent);
      inset: auto 0 0;
    }
  }

  .skills {
    margin-block: calc(var(--spacing) * -1);
  }

  .schedule {
    margin-block-start: calc(var(--spacing) * -1);
  }

  * :global(h2) {
    text-align: center;
  }
</style>
