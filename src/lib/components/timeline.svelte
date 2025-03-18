<script lang="ts">
  import { transition } from '$lib/utils'
  import { ChevronDown, ChevronRight, ChevronUp } from '@lucide/svelte'
  import { expanded } from '$lib/stores'

  import type { TimelineEntry } from '$lib/types'

  type Props = {
    data: TimelineEntry[]
  }
  let { data }: Props = $props()

  const formatDate = (date: Date) => {
    const month = date.toLocaleString('en', { month: 'long' })
    const year = date.getFullYear()

    return `${month} ${year}`
  }

  const filteredData = $derived(expanded.value ? data : data.slice(0, 2))

  const toggle = () => transition(() => (expanded.value = !expanded.value))
</script>

<div class="timeline">
  <div class="data">
    {#each filteredData as { name, slug, pic, from, to, role, tech, intro }}
      <div class="event">
        <a href={`/jobs/${slug}`} class="info">
          <div class="dates">
            <div class="from">{formatDate(from)}</div>
            <div class="to">
              {#if to}
                to {formatDate(to)}
              {:else}
                Still here!
              {/if}
            </div>
            <div class="logo">
              <img src={pic} alt={name} />
            </div>
          </div>
          <div class="details">
            <div class="heading">
              <h3>{name}</h3>
              <div class="position">
                {role}
              </div>
              <ul class="tech">
                {#each tech as t}
                  <li>{t}</li>
                {/each}
              </ul>
            </div>
            {#each intro as row}
              <p>{row}</p>
            {/each}
            <p class="more">... read more &raquo;</p>
          </div>
        </a>
      </div>
    {/each}
  </div>
  <div class="toggle" class:expanded={expanded.value}>
    <button class="button small" onclick={toggle}>
      {#if !expanded.value}
        <ChevronDown /> See older jobs <ChevronDown />
      {:else}
        <ChevronUp /> Hide older jobs <ChevronUp />
      {/if}
    </button>
  </div>
</div>

<style lang="scss">
  // These styles turned out to be quite cumbersome...

  .timeline {
    position: relative;
  }

  .more {
    font-size: 0.8rem;

    color: var(--ui-link-fg);
  }

  .toggle {
    position: absolute;
    inset: auto -1rem 0;
    display: grid;
    place-items: center;
    padding-block: 4rem 2rem;
    background: linear-gradient(to bottom, transparent, var(--ui-global-bg) 50%);
    font-size: 0.8rem;

    &.expanded {
      position: static;
      background: none;
      padding: 0;
    }
  }

  // Every full block in the timeline.
  .event {
    --pin-background: var(--ui-global-bg);
    --pin-radius: 0.6rem;
    --pin-margin: 1.8rem;
    --arrow-margin: 0.5rem;
    --arrow-height: 0.8rem;
    --path-color: color-mix(in oklab, var(--ui-accent-color), transparent 50%);
    --block-color: color-mix(in oklab, var(--path-color), transparent 90%);
    --block-color-hover: color-mix(in oklab, var(--path-color), transparent 80%);
    --line-radius: 2.25rem;
    --path-width: 3px;
    --outer-padding: 2rem;
    --inner-padding: 0.5rem;
    --inner-radius: 1rem;
    --padding: calc(var(--outer-padding) + var(--inner-padding));
    --title-size: 1.6rem;
    --text-size: 1rem;
    --details-background: var(--block-color-hover);

    position: relative;
    margin: calc(var(--path-width) * -1);
    padding: var(--outer-padding) var(--outer-padding) calc(var(--outer-padding) * 4);

    // Timeline outline path
    &::before {
      content: '';
      position: absolute;
      pointer-events: none;
      inset: 0;
      border: var(--path-width) solid var(--path-color);
    }

    &:nth-child(odd) {
      // C-like form for the timeline path
      &::before {
        border-right: 0;
        border-radius: var(--line-radius) 0 0 calc(var(--line-radius) * 4);
        right: 50%;
      }

      // Left pin positions
      .info {
        &::after,
        &::before {
          transform: translate(-50%, -50%);
          inset: var(--pin-margin) auto auto
            calc((var(--outer-padding) - var(--path-width) / 2) * -1);
        }

        // Left pin arrow
        &::before {
          transform: translate(0, -50%);
        }
      }

      .dates {
        flex-direction: row;
      }
    }

    &:nth-child(even) {
      // Inverted C-like form for the timeline path
      &::before {
        border-left: 0;
        border-radius: 0 var(--line-radius) calc(var(--line-radius) * 4) 0;
        left: 50%;
      }

      .info {
        // Right pin positions
        &::before,
        &::after {
          transform: translate(50%, -50%);
          inset: var(--pin-margin) calc((var(--outer-padding) - var(--path-width) / 2) * -1) auto
            auto;
        }

        // Right pin arrow
        &::before {
          transform: translate(0, -50%) scaleX(-1);
        }
      }

      .dates {
        flex-direction: row-reverse;
      }
    }

    &:first-child {
      // Timeline path
      &::before {
        border-block-start: 0;
        border-start-start-radius: 0;
        inset-block-start: calc(var(--arrow-margin) + var(--arrow-height) / 2);
      }

      // Top arrow
      &::after {
        content: '';
        border-style: solid;
        border-width: 1rem 0.5rem;
        border-color: transparent transparent var(--ui-accent-color);
        position: absolute;
        inset: var(--arrow-margin) auto auto 0;
        transform: translate(calc(-50% + var(--path-width) / 2), -50%);
      }
    }

    // Last element on the timeline.
    &:last-child {
      &::before {
        // Having a border bottom 0 is all it takes for that cool tail thingy!
        border-block-end: 0;
      }
    }
  }

  // Inner block
  .info {
    --pin-color: var(--path-color);
    display: flex;
    flex-direction: column;
    position: relative;
    line-height: 1.5;
    background: var(--block-color);
    border-radius: var(--inner-radius);
    color: currentColor;

    user-select: none;

    * {
      pointer-events: none;
    }

    // Outline when hovering
    &:hover {
      box-shadow:
        1px 1px 0 var(--ui-accent-color),
        -1px -1px 0 var(--ui-accent-color),
        -1px 1px 0 var(--ui-accent-color),
        1px -1px 0 var(--ui-accent-color);
      background: var(--block-color-hover);

      &::before,
      &::after {
        --pin-color: var(--ui-accent-color);
      }

      .more {
        color: var(--ui-link-fg-hover);
      }
    }

    // Glowing pin on hovering
    &::before,
    &::after {
      content: '';
      position: absolute;
      transition: border-color var(--ui-transition-duration) ease;
      pointer-events: none;
    }

    // Pin arrow
    &::before {
      --arrow-height: calc(var(--pin-radius) * 1.05);
      border-style: solid;
      border-width: var(--arrow-height) calc(var(--arrow-height) * 2);
      border-color: transparent transparent transparent var(--pin-color);
    }

    // Pin circle
    &::after {
      border-radius: 99rem;
      border: var(--path-width) solid var(--pin-color);
      width: calc(var(--pin-radius) * 2);
      height: calc(var(--pin-radius) * 2);
      background: var(--pin-background);
    }
  }

  .dates {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem 1rem;
    align-items: baseline;
    padding: 0.6rem 1rem;
    text-transform: capitalize;
    white-space: nowrap;
  }

  .from {
    font-size: calc(var(--title-size) * 0.8);
    font-weight: bold;
  }

  .to {
    font-size: calc(var(--text-size) * 0.8);
  }

  .position {
    font-style: italic;
    margin-block-end: 0.25rem;
  }

  .tech {
    display: inline-flex;
    color: currentColor;
    gap: 0.5rem;
    flex-wrap: wrap;
    font-size: 0.6rem;

    li {
      border: 1px solid var(--path-color);
      padding: 0.05rem 0.25rem;
      border-radius: 0.4rem;
      font-family: monospace;
      margin-block-end: 1rem;
    }
  }

  .logo {
    display: none;
    text-align: center;
    padding: 1rem;
    background: var(--details-background);
    border-end-start-radius: var(--inner-radius);

    img {
      display: block;
      width: 100%;
      max-width: 3rem;
      margin: auto;
      background: #fff;
      border-radius: 99rem;
      aspect-ratio: 1 / 1;
      overflow: hidden;
      box-shadow: 0 0 0.5em 0 var(--path-color);
    }
  }

  .details {
    flex-grow: 1;
    padding-inline: 1rem;
    background: var(--details-background);
    border-end-start-radius: var(--inner-radius);
    border-end-end-radius: var(--inner-radius);
  }

  .heading {
    text-align: center;
  }

  h3 {
    font-size: var(--title-size);
    line-height: 1.5;
    margin-block-end: 0;
    color: currentColor;
  }

  p {
    font-size: var(--text-size);
    color: currentColor;
  }

  @include bp(md) {
    .event {
      --title-size: 1.6rem;
      --text-size: 1rem;
      --pin-margin: 1.4rem;

      &:nth-child(odd) {
        .info {
          flex-direction: row;
        }

        .details {
          border-radius: 0 var(--inner-radius) var(--inner-radius) 0;
        }
      }

      &:nth-child(even) {
        .info {
          flex-direction: row-reverse;
        }

        .details {
          border-radius: var(--inner-radius) 0 0 var(--inner-radius);
        }
      }
    }

    .logo {
      display: block;
      background: none;
    }

    .dates {
      flex-direction: column !important;
      align-items: center;
      gap: 0;
      padding-block: 0;
    }

    .from {
      font-size: var(--title-size);
    }

    .to {
      font-size: var(--text-size);
    }

    .details {
      border-radius: var(--inner-radius) 0 0 var(--inner-radius);
      padding-inline: 1rem;
    }

    .heading {
      text-align: left;
    }
  }
</style>
