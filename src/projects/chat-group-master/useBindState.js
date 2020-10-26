import { useContext, useMemo } from "react"
import { ProviderContext } from "./ProviderContext"

export const useBindState = key => {
  const { store } = useContext(ProviderContext)
  return useMemo(() => {
    const result = Array.isArray(key)
      ? key.map(key => store.state[key])
      : store.state[key]
    console.table({ key, result })
    return [
      result,
      {
        merge: value =>
          typeof value === "function"
            ? store.merge(key, value(store.state[key]))
            : store.merge(key, value),
      },
    ]
  }, [store.state, key])
}
