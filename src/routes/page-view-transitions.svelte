<script lang="ts">
  import { onNavigate } from '$app/navigation'

  // Makes use of the view transition on client routing.
  onNavigate((navigation) => {
    if (!document.startViewTransition) return

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve()
        await navigation.complete
      })
    })
  })
</script>
