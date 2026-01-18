<script lang="ts">
  type Props = {
    name: string
    tag: string
  }
  let { name, tag }: Props = $props()
</script>

<div
  class="nametag"
  style="--count: {Math.max(name.length, tag.length)}"
  aria-label={`${name} a.k.a. ${tag}`}
>
  <div class="name" aria-hidden="true">
    {#each name as letter, index}
      <span style="--index: {index}">{letter}</span>
    {/each}
  </div>
  <div class="tag" aria-hidden="true">
    {#each tag as letter, index}
      <span style="--index: {index}">{letter}</span>
    {/each}
  </div>
</div>

<style lang="scss">
  .nametag {
    --height: 1.4em;
    --duration: 0.25s;

    display: block;
    font-family: monospace;
    font-size: 1.1em;
    line-height: var(--height);
    height: var(--height);
    overflow: hidden;
    user-select: none;
    color: currentColor;

    span {
      --offset: calc(var(--index) / var(--count) * var(--duration));
      display: inline-block;
      width: 1ch;
      transition: transform var(--duration) ease-in-out;
      transition-delay: var(--offset);
    }

    &:hover {
      span {
        transform: translateY(calc(var(--height) * -1));
      }
    }
  }

  @include bp(md) {
    .nametag {
      margin-bottom: 0;
    }
  }
</style>
