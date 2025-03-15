<script lang="ts">
  import type { Snippet } from 'svelte'

  type Props = {
    shadowBottom?: boolean
    children: Snippet
  }
  let { children, shadowBottom = false }: Props = $props()
</script>

<div class="mac-frame" class:shadow-bottom={shadowBottom}>
  <div class="header">
    <div class="dot red"></div>
    <div class="dot amber"></div>
    <div class="dot green"></div>
  </div>
  <div class="content">
    {@render children?.()}
  </div>
</div>

<style lang="scss">
  .mac-frame {
    display: inline-block;
    position: relative;

    &.shadow-bottom .content {
      position: relative;

      &::after {
        content: '';
        position: absolute;
        inset: auto 0 0;
        background: linear-gradient(to top, #0003, transparent);
        height: 0.5rem;
      }
    }
  }

  .header {
    background: #b4b4b4;
    opacity: 0.9;
    padding: 10px;
    border-radius: 7px 7px 0px 0px;
    background: linear-gradient(to bottom, #f6f6f6 0%, #dadada 100%); /* W3C */
    border: 1px solid #d8d8d8;
    border-inline-end: 1px solid #b4b4b4;
  }

  .content {
    border: 1px solid #d8d8d8;
    border-inline-start: 0;
    background: #fff;
  }

  .dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #f9f9f9;
    border-radius: 50%;
    margin: 0 4px 0 0;

    &.red {
      background: #ff6057;
      border: 1px solid #e14640;
    }

    &.amber {
      background: #ffbd2e;
      border: 1px solid #dfa123;
    }

    &.green {
      background: #27c93f;
      border: 1px solid #1dad2b;
    }
  }
</style>
