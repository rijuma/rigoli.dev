<script lang="ts">
  type Props = {
    pic?: string
    name: string
    from: [number, number]
    to?: [number, number]
    role: string
    tech: string
    websites: string[]
  }

  const YEAR_IN_MS = 60 * 60 * 24 * 365.25 * 1000
  const MONTH_IN_MS = YEAR_IN_MS / 12

  let { pic, name, from, to, role, tech, websites }: Props = $props()

  const parseDate = ([yyyy, mm]: number[]) => {
    const date = new Date(`${yyyy}-${mm}-1`)
    const month = date.toLocaleString('en', { month: 'long' })
    const year = date.getFullYear()

    return `${month} ${year}`
  }

  const timeDiff = (from: number[], to?: number[]) => {
    const dateFrom = new Date(`${from[0]}-${from[1]}-1`)
    const dateTo = to ? new Date(`${to[0]}-${to[1]}-1`) : new Date()
    const dateDiff = +dateTo - +dateFrom

    const dy = Math.floor(dateDiff / YEAR_IN_MS)
    const dm = Math.floor((dateDiff % YEAR_IN_MS) / MONTH_IN_MS)

    const output = []

    if (dy > 0) output.push(dy === 1 ? '1 year' : `${dy} years`)
    if (dm > 0) output.push(dm === 1 ? '1 month' : `${dm} months`)

    return output.join(', ')
  }
</script>

<div class="job-heading">
  <h1>{name}</h1>

  <div class="split">
    {#if pic}
      <div class="logo">
        <img src={pic} alt={name} />
      </div>
    {/if}
    <div class="info">
      <p class="role"><b>{role}</b></p>

      <p class="dates">
        {parseDate(from)}
        &ndash;
        {#if to}
          {parseDate(to)}
        {:else}
          Present
        {/if}
        <i><small>({timeDiff(from, to)})</small></i>
      </p>

      <div class="tech">
        <span class="label">Tech used:</span>
        <ul>
          {#each tech as t}
            <li>{t}</li>
          {/each}
        </ul>
      </div>

      <p>
        Websites:
        {#each websites as website, index}
          {#if index > 0}
            {`, `}
          {/if}
          <a href={website} target="_blank" rel="noopener">{website}</a>
        {/each}
      </p>
    </div>
  </div>
</div>

<style lang="scss">
  .split {
    display: flex;
    gap: 2rem;
    flex-direction: column;
    justify-content: space-between;
  }

  .logo {
    --logo-size: min(80vw, 8rem);
    width: var(--logo-size);
    aspect-ratio: 1 / 1;
    display: grid;
    place-content: center;
    background: white;
    border-radius: 99rem;
    overflow: hidden;
    margin: auto;

    img {
      width: var(--logo-size);
    }
  }

  .tech {
    display: flex;
    line-height: 1;
    align-items: baseline;
    gap: 0.5rem;
    margin-block-end: 1rem;

    ul {
      display: flex;
      gap: 0.5rem;
      margin: 0;
      font-size: 0.8em;
    }

    li {
      list-style: none;
      margin: 0;
      border: 1px solid var(--ui-global-text);
      border-radius: 0.4rem;
      padding: 0 0.5rem;
    }
  }

  @include bp(md) {
    .split {
      flex-direction: row-reverse;
      align-items: flex-start;
    }

    .logo {
      margin: initial;
    }
  }
</style>
