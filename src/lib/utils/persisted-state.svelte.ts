import { APP_VERSION } from '$lib/const'

export type PersistedStoreType = 'local' | 'session'

export function persistedState<T, S = any>(
  key: string,
  initial: T,
  store: PersistedStoreType = 'local',
  options: {
    onSerialize?: (obj: T, initial: T) => S
    onDeserealize?: (obj: T | S, initial: T) => T
  } = {},
) {
  let current: T = initial

  if (typeof window !== 'undefined') {
    const storage = store === 'local' ? localStorage : sessionStorage

    const savedStr = storage.getItem(key)

    if (savedStr) {
      try {
        const { __v: version, value: savedValue } = JSON.parse(savedStr) as {
          __v: string
          value: T | S
        }
        if (version !== APP_VERSION) throw new Error('Saved payload version mismatch. Discarded.')
        current = options.onDeserealize
          ? options.onDeserealize(savedValue, initial)
          : (savedValue as T)
      } catch (e) {}
    }

    $effect.root(() => {
      $effect(() => {
        const storeValue = options.onSerialize ? options.onSerialize(state, initial) : state

        storage.setItem(key, JSON.stringify({ __v: APP_VERSION, value: storeValue }))
      })
    })
  }

  let state: T = $state(current)

  return {
    get value() {
      return state
    },

    set value(new_state) {
      state = new_state
    },

    clearStorage() {
      localStorage.removeItem(key)
    },

    reset() {
      state = initial
      localStorage.removeItem(key)
    },
  }
}
