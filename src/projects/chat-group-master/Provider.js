import React, { useLayoutEffect } from "react"
import { ProviderContext } from "./ProviderContext"
import { useStore } from "./useStore"

function getdata() {
  let result = {}
  try {
    result = JSON.parse(localStorage.getItem("data") || "{}")
  } catch (error) {
    result = {}
  }
  return result
}
export const data = getdata()
export function logger(next) {
  return action => {
    setTimeout(() => console.table(action))
    return next(action)
  }
}
export function emit(next) {
  return action => {
    return next(action)
  }
}
const compose = (...fns) => x => fns.reduce((v, f) => f(v), x)
export const Provider = ({ children }) => {
  const store = useStore(data, compose(logger, emit))
  useLayoutEffect(() => {
    const event = function (event) {
      if (event.storageArea === localStorage) {
        const action = localStorage.getItem("server_action")
        if (action) {
          const parsedAction = JSON.parse(action)
          switch (parsedAction.type) {
            case "new_message":
              store.mergeAll(parsedAction.payload)
              break

            default:
              break
          }
        }
      }
    }
    window.addEventListener("storage", event, false)
    return () => {
      window.removeEventListener("storage", event)
    }
  }, [store])
  useLayoutEffect(() => {
    window.store = store
    localStorage.setItem("data", JSON.stringify(store.state))
  }, [store])

  return (
    <ProviderContext.Provider value={{ store }}>
      {children}
    </ProviderContext.Provider>
  )
}
