import { browser } from '$app/environment'
import { persistedState } from '$lib/utils'

type ColorMode = 'auto' | 'light' | 'dark'

const detectMode = (): ColorMode => {
  if (!browser) return 'auto'

  const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

  return darkMode ? 'dark' : 'light'
}

export const colorMode = persistedState('color-mode', detectMode())

$effect.root(() => {
  // Sets the color theme in the <html> tag.
  $effect(() => {
    document.documentElement.dataset.theme = colorMode.value
  })
})
