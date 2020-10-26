import React, { useEffect } from "react"
import Channel from "./Channel"
import entities from "./source"
import { useBindState } from "./useBindState"
import appSchema from "./appSchema"
import { Home } from "./Home"
import { useHash } from "./useHash"
import { Login } from "./Login"
export const Routes = () => {
  const channelId = useHash()
  const [auth, { merge: setAuth }] = useBindState(appSchema.auth)
  const viewCountKey = appSchema.viewCount.replace("{{channelId}}", channelId)
  const [viewCount, { merge }] = useBindState(viewCountKey)
  useEffect(() => {
    merge((viewCount || 0) + 1)
  }, [channelId])
  if (!Boolean(auth)) {
    return <Login />
  }
  if (channelId) {
    return <Channel channelId={channelId} />
  }
  return <Home />
}
