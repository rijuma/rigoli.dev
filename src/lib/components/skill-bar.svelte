<script lang="ts">
  import { CircleHelp } from '@lucide/svelte'

  type Props = {
    label: string
    tooltip?: string
    value: number
    max?: number
  }
  let { label, tooltip, value, max = 10 }: Props = $props()
</script>

<div
  class="skill"
  aria-label={`Proficiency in ${label}: ${value} out of ${max}.`}
  data-tooltip={tooltip}
>
  <div class="label" aria-hidden="true">
    {label}
    {#if tooltip}
      <span class="questionmark"><CircleHelp /></span>
    {/if}
  </div>
  <div class="gauge" style={`--value: ${value}; --max: ${max};`} aria-hidden="true"></div>
</div>

<style lang="scss">
  .skill {
    border-radius: 0.4rem;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    line-height: 1;
    font-size: 0.8rem;

    // Tooltip
    &::before {
      font-size: 1em;
      line-height: 1.5;
    }
  }

  .label {
    display: flex;
    gap: 0.5ch;
    line-height: 1.2;
    align-items: center;
    font-weight: bold;
  }

  .questionmark {
    font-size: 0.8em;
    display: block;
    line-height: 1;
  }

  .gauge {
    position: relative;
    border-radius: 99rem;
    height: 0.5rem;
    overflow: hidden;
    box-shadow: 0 0 1px 1px var(--ui-accent-color-high);

    &:before {
      --percent: calc((100% - var(--value) / var(--max, 1) * 100%));
      content: '';
      position: absolute;
      inset: 0 var(--percent) 0 0;
      background: color-mix(in oklab, var(--ui-accent-color), transparent var(--percent));
      border-inline-end: 1px solid var(--ui-accent-color-high);
    }
  }
</style>
