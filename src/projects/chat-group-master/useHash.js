import { useEffect, useState } from "react"

export const useHash = () => {
  const [channelId, setChannelId] = useState()
  useEffect(() => {
    window &&
      (window.onpopstate = function (event) {
        setChannelId(decodeURI(document.location.hash))
      })
  }, [])
  return channelId
}
