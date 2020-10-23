import { useCallback, useReducer } from "react"
import { reducer } from "./reducer"

export const useStore = (initialState, middleware) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const merge = useCallback(
    (key, value) =>
      middleware(dispatch)({
        type: "merge",
        payload: {
          [key]: value,
        },
      }),
    []
  )
  const mergeAll = useCallback(
    obj =>
      middleware(dispatch)({
        type: "merge",
        payload: obj,
      }),
    []
  )
  window.state = state

  return { state, merge, mergeAll }
}
