<script lang="ts">
  import { SkillBar } from '$lib/components'
</script>

<div class="skills">
  <h2>Skills</h2>

  <section>
    <h3>Backend</h3>
    <ul class="skill-bars">
      <li><SkillBar label="Typescript / Node.js" value={9} /></li>
      <li><SkillBar label="Svelte/kit" value={8} /></li>
      <li><SkillBar label="PHP / Laravel / Codeigniter" value={7} /></li>
      <li><SkillBar label="Python / Django" value={6} /></li>
      <li><SkillBar label="Ruby / Ruby on Rails" value={6} /></li>
    </ul>
  </section>

  <section>
    <h3>Frontend</h3>
    <ul class="skill-bars">
      <li><SkillBar label="Typescript / Javascript" value={9} /></li>
      <li><SkillBar label="React.js" value={9} /></li>
      <li><SkillBar label="Svelte" value={8} /></li>
      <li>
        <SkillBar
          label="jQuery"
          tooltip="Nowadays devs give jQuery an evil eye, but it has a special place in my heart. Pepperidge farm remembers."
          value={8}
        />
      </li>
    </ul>
  </section>

  <section>
    <h3>UI</h3>
    <ul class="skill-bars">
      <li><SkillBar label="HTML5" value={9} /></li>
      <li><SkillBar label="CSS / SCSS" value={9} /></li>
      <li><SkillBar label="Typescript / Javascript" value={9} /></li>
    </ul>
  </section>
</div>

<style lang="scss">
  section {
    padding: 0.5rem 0 0.5rem 0.5rem;
    border-inline-start: 2px solid currentColor;
  }

  .skills section:not(:first-of-type) {
    margin-block-start: 2rem;
  }

  .skill-bars {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr;
  }

  @include bp(sm) {
    .skill-bars {
      grid-template-columns: 1fr 1fr;
    }
  }

  @include bp(md) {
    .skill-bars {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
</style>
