<script lang="ts">
  type Props = {
    label: string
    value: number
    max?: number
  }
  let { label, value, max = 10 }: Props = $props()
</script>

<div class="skill" aria-label={`Proficiency in ${label}: ${value} out of ${max}.`}>
  <div class="label" aria-hidden="true">
    {label}
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
  }

  .gauge {
    position: relative;
    border-radius: 99rem;
    height: 0.5rem;
    overflow: hidden;
    border: 1px solid var(--accent-color-high);

    &:before {
      --percent: calc((100% - var(--value) / var(--max, 1) * 100%));
      content: '';
      position: absolute;
      inset: 0 var(--percent) 0 0;
      background: color-mix(in oklab, var(--accent-color), transparent var(--percent));
      border-inline-end: 1px solid var(--accent-color-high);
    }
  }
</style>
