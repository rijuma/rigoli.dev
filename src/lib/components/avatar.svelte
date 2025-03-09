<script lang="ts">
  import { page } from '$app/state'
  import { NAME } from '$lib/const'

  let github = $derived(page.data?.github)
</script>

<div class="avatar">
  {#if github?.avatarUrl}
    <img src={github?.avatarUrl} alt={NAME} draggable="false" />
  {/if}
</div>

<style lang="scss">
  .avatar {
    overflow: hidden;
    border-radius: 99rem;
    width: 4em;
    aspect-ratio: 1 / 1;
    position: relative;
    box-shadow: 1px 1px 1px 1px #0008;
    cursor: grab;

    &::after {
      inset: 0;
      content: '';
      box-shadow: inset 0 0 3px 1px #0008;
      position: absolute;
      border-radius: 99rem;
      pointer-events: none;
    }

    img {
      filter: grayscale(1);
      transition: all 0.5s ease;
      transform-origin: top center;
      scale: 1;

      &:hover {
        filter: grayscale(0);
        scale: 1.2;
      }
    }
  }
</style>
