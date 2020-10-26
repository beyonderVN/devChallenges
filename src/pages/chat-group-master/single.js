import React, { useEffect, useLayoutEffect, useMemo } from "react"
import { Provider } from "../../projects/chat-group-master/Provider"
import { Routes } from "../../projects/chat-group-master/Routes"

export default () => {
  return (
    <Provider>
      <Routes />
    </Provider>
  )
}
