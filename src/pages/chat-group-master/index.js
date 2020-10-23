import React, { useEffect, useLayoutEffect, useMemo } from "react"

import { Routes } from "./Routes"
import { Provider } from "./Provider"

export default () => {
  return (
    <Provider>
      <Routes />
    </Provider>
  )
}
