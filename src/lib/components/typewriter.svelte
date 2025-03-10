<script lang="ts">
  type Props = {
    text: string[]
    charMs?: number
    fadeMs?: number
    onEnd?: () => {}
  }
  let { text, charMs = 3, fadeMs = 250, onEnd }: Props = $props()

  let lines = $derived(text.map((line) => line.split(' ')))

  // Char count * charMs to get the total time.
  let animationTimeMs = $derived(text.map((line) => line.split('')).flat(2).length * charMs)

  let index = 0

  const getCount = () => index++

  $effect(() => {
    index = 0

    if (!onEnd) return
    let handler: NodeJS.Timeout

    handler = setTimeout(() => onEnd(), animationTimeMs)

    return () => clearTimeout(handler)
  })
</script>

<div class="typewriter" aria-label={text.join(' ')}>
  {#each lines as words}
    <p
      class="typewriter"
      style={`--char-ms: ${charMs}ms; --fade-ms: ${fadeMs}ms`}
      aria-hidden="true"
    >
      {#each words as word}
        {#if words.length !== 0}
          {@const _ = getCount()}
          {' '}
        {/if}
        {#each word.split('') as char}
          <span style={`--index: ${getCount()}`}>{char}</span>
        {/each}
      {/each}
    </p>
  {/each}
</div>

<style lang="scss">
  .typewriter {
    span {
      opacity: 1;
      transition:
        opacity var(--fade-ms) ease,
        filter var(--fade-ms) ease;
      transition-delay: calc(var(--char-ms) * var(--index));
      filter: none;

      @starting-style {
        opacity: 0;
        filter: blur(3px);
      }
    }

    p:last-child {
      margin-block-end: 0;
    }
  }
</style>
