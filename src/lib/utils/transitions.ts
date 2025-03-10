export const transition = async (update: () => void) => {
  if (document?.startViewTransition) {
    const transition = document.startViewTransition(() => update())
    await transition.finished
  } else {
    update()
  }
}
