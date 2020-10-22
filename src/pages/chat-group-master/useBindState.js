import { useContext, useMemo } from "react"
import { ProviderContext } from "./ProviderContext"

export const useBindState = key => {
  const { store } = useContext(ProviderContext)
  return useMemo(
    () => [
      store.state[key],
      {
        merge: value =>
          typeof value === "function"
            ? store.merge(key, value(store.state[key]))
            : store.merge(key, value),
      },
    ],
    store.state[key]
  )
}
