<script>
  import { ProjectEntry } from '$lib/components'
</script>

<h2>Demos and projects</h2>

<p>
  The following are some personal projects and challenges I've been working on my free time and
  while job hunting.
</p>

<ul>
  <li>
    <ProjectEntry
      title="Psicoenlce"
      url="https://psicoenlace.ar"
      pic="/img/projects/psicoenlace.ar.webp"
    >
      <p>
        This project is a website to promote a group of psychologists. Their main goal is to reach
        Argentineans that are living abroad who could use remote sessions with someone who
        understands their traditions and share their native language.
      </p>
    </ProjectEntry>
  </li>
  <li>
    <ProjectEntry
      title="Frontend Challenge (Svelte)"
      url={['https://svelte-challenge.rigoli.dev', 'https://github.com/rijuma/svelte-challenge']}
      pic="/img/projects/svelte-challenge.webp"
    >
      <p>
        This is a challenge I've made for a company that required a profile UI oriented, attention
        to details and proven skills with both vanilla HTML, CSS and JavaScript with no frameworks
        and Svelte 5 with TailwindCSS. Three images were provided and the instructions were to
        replicate those in both scenarios, so six deliverables in total.
      </p>
    </ProjectEntry>
  </li>

  <!-- <li>
    <ProjectEntry
      title="GraphQL Challenge (React + GraphQL)"
      url={['https://cside-challenge.rigoli.dev', 'https://github.com/rijuma/cside-challenge']}
      pic="/img/projects/graphql-challenge.webp"
    >
      <p>
        This challenge was about creating a frontend application that included features like
        searching for repositories, giving details about a repository and list its issues with
        incremental pagination and the possibility to expand on anm issue, see its comments and also
        have incremental pagination. The technologies used in this repository were Vite, React,
        Tanstack Router, React Relay, Radix UI and Biome for linting.
      </p>
      <p>
        The requirements didn't include a public deployment to avoid exposing the GitHub token, but
        I've setup a simple API Gateway that handle it, so it wouldn't be exposed. Check the proxy
        code on <a
          href="https://github.com/rijuma/cside-challenge-proxy"
          target="_blank"
          rel="external noopener">this repository</a
        >.
      </p>
    </ProjectEntry>
  </li> -->
</ul>

<style lang="scss">
  ul {
    display: flex;
    flex-direction: column;
    margin-block: 3rem;
    gap: 3rem;
  }
</style>
