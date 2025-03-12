<script>
  import { SkillBar } from '$lib/components'
</script>

<h2>Skills</h2>

<ul class="skills">
  <li><SkillBar label="React" value={9} /></li>
  <li><SkillBar label="Typescript / JS" value={9} /></li>
  <li><SkillBar label="Svelte" value={8} /></li>
  <li><SkillBar label="Node" value={8} /></li>
  <li><SkillBar label="PHP" value={7} /></li>
  <li><SkillBar label="Python / Django" value={6} /></li>
  <li><SkillBar label="Ruby / RoR" value={6} /></li>
</ul>

<style lang="scss">
  .skills {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
  }

  @include bp(md) {
    .skills {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
</style>
