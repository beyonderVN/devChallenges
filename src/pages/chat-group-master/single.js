import React, { useEffect, useLayoutEffect, useMemo } from "react"
import entities, {
  nestedEntities,
} from "../../projects/chat-group-master/source"
import { Routes } from "../../projects/chat-group-master/Routes"
import { useStore } from "../../projects/chat-group-master/useStore"
import { ProviderContext } from "../../projects/chat-group-master/ProviderContext"

function getdata() {
  let result = nestedEntities
  try {
    result = JSON.parse(localStorage.getItem("data") || "{}") || nestedEntities
  } catch (error) {
    result = nestedEntities
  }
  return result
}
const data = getdata()
function logger(next) {
  return action => {
    setTimeout(() => console.table(action))

    return next(action)
  }
}
function emit(next) {
  return action => {
    setTimeout(() => localStorage.setItem("data", JSON.stringify(action)))
    return next(action)
  }
}
const Provider = ({ children }) => {
  const store = useStore(data, logger(emit))

  useLayoutEffect(() => {
    window.addEventListener(
      "storage",
      function (event) {
        if (event.storageArea === localStorage) {
          console.log(localStorage.getItem("action"))
        }
      },
      false
    )
  }, [])
  return (
    <ProviderContext.Provider value={{ store }}>
      {children}
    </ProviderContext.Provider>
  )
}
export default () => {
  return (
    <Provider>
      <Routes />
    </Provider>
  )
}
