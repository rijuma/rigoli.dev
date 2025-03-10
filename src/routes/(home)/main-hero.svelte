<script lang="ts">
  import { Avatar, Links, NameTag } from '$lib/components'
</script>

<div class="heading">
  <Avatar />
  <div class="info">
    <NameTag name="Marcos Rigoli" tag="rijuma" />
    <Links />
  </div>
</div>

<style lang="scss">
  .heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1em;
    font-size: 1.6rem;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    width: 100%;
    max-width: 10em;
    margin-top: 0.6em;
  }

  @include bp(md) {
    .heading {
      flex-direction: row;
      gap: 1em;
      font-size: 1rem;
    }

    .info {
      max-width: none;
      align-items: flex-start;
      margin-top: 0;
    }
  }
</style>
