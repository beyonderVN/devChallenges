import { useEffect, useState } from "react"

export const useHash = () => {
  const [channelId, setChannelId] = useState(decodeURI(document.location.hash))
  useEffect(() => {
    window &&
      (window.onpopstate = function (event) {
        setChannelId(decodeURI(document.location.hash))
      })
  }, [])
  return channelId
}
