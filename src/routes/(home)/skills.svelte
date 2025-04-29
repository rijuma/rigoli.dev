<script lang="ts">
  import { SkillBar } from '$lib/components'
</script>

<div class="skills">
  <h2>Skills</h2>

  <section>
    <h3>Backend</h3>
    <ul class="skill-bars">
      <li><SkillBar label="Node + Typescript" value={9} hint="5+ years" /></li>
      <li><SkillBar label="PHP / Codeigniter" value={7} hint="4+ years" /></li>
      <li><SkillBar label="Svelte/kit" value={6} hint="2+ years" /></li>
      <li><SkillBar label="Python / Django" value={6} hint="2+ years" /></li>
      <li><SkillBar label="Ruby / Ruby on Rails" value={5} hint="1+ years" /></li>
    </ul>
  </section>

  <section>
    <h3>Frontend</h3>
    <ul class="skill-bars">
      <li><SkillBar label="Javascript + Typescript" value={9} hint="8+ years" /></li>
      <li><SkillBar label="React.js" value={8} hint="5+ years" /></li>
      <li><SkillBar label="Svelte" value={6} hint="2+ years" /></li>
      <li>
        <SkillBar
          label="jQuery"
          tooltip="Nowadays devs give jQuery an evil eye, but it has a special place in my heart. Pepperidge farm remembers."
          value={8}
          hint="5+ years"
        />
      </li>
    </ul>
  </section>

  <section>
    <h3>Databases</h3>
    <ul class="skill-bars">
      <li><SkillBar label="Postgres SQL" value={9} hint="6+ years" /></li>
      <li><SkillBar label="MySQL" value={9} hint="6+ years" /></li>
      <li><SkillBar label="GraphQL" value={5} hint="2+ years" /></li>
      <li><SkillBar label="MongoDB" value={5} hint="2+ years" /></li>
      <li><SkillBar label="Redis" value={4} hint="1+ years" /></li>
    </ul>
  </section>

  <section>
    <h3>UI</h3>
    <ul class="skill-bars">
      <li><SkillBar label="HTML5" value={9} hint="8+ years" /></li>
      <li><SkillBar label="CSS / SCSS" value={9} hint="8+ years" /></li>
      <li><SkillBar label="Javascript + Typescript" value={9} hint="8+ years" /></li>
    </ul>
  </section>

  <section>
    <h3>Utils</h3>
    <ul class="skill-bars">
      <li><SkillBar label="Docker + Compose" value={8} hint="6+ years" /></li>
      <li><SkillBar label="CI/CD" value={7} hint="5+ years" /></li>
      <li><SkillBar label="Datadog / New Relic" value={6} hint="3+ years" /></li>
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
