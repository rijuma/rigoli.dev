<script>
  import { SkillBar } from '$lib/components'
</script>

<h2>Skills</h2>

<section>
  <h3>Backend</h3>
  <ul class="skills">
    <li><SkillBar label="Typescript / Node.js" value={9} /></li>
    <li><SkillBar label="Svelte/kit" value={8} /></li>
    <li><SkillBar label="PHP / Laravel / Codeigniter" value={7} /></li>
    <li><SkillBar label="Python / Django" value={6} /></li>
    <li><SkillBar label="Ruby / Ruby on Rails" value={6} /></li>
  </ul>
</section>

<section>
  <h3>Frontend</h3>
  <ul class="skills">
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
  <ul class="skills">
    <li><SkillBar label="HTML5" value={9} /></li>
    <li><SkillBar label="CSS / SCSS" value={9} /></li>
    <li><SkillBar label="Typescript / Javascript" value={9} /></li>
  </ul>
</section>

<style lang="scss">
  section {
    padding: 0.5rem 0 0.5rem 0.5rem;
    border-inline-start: 2px solid currentColor;
  }

  .skills {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr;
  }

  @include bp(sm) {
    .skills {
      grid-template-columns: 1fr 1fr;
    }
  }

  @include bp(md) {
    .skills {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
</style>
