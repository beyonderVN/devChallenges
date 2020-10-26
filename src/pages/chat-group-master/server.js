import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react"

import entities, {
  nestedEntities,
} from "../../projects/chat-group-master/source"
import appSchema from "../../projects/chat-group-master/appSchema"
function getdata() {
  let result = {}
  try {
    result = JSON.parse(localStorage.getItem("data") || "{}")
  } catch (error) {
    result = {}
  }
  return result
}
export default () => {
  const dataRef = useRef()
  const [update, setUpdate] = useState()
  const actionsRef = useRef([])

  useLayoutEffect(() => {
    const data = getdata()
    dataRef.current = data || nestedEntities
    localStorage.removeItem("action")
    const event = function (event) {
      if (event.storageArea === localStorage) {
        const action = localStorage.getItem("action")
        if (action) {
          const parsedAction = JSON.parse(action)
          actionsRef.current.unshift(parsedAction)
          switch (parsedAction.type) {
            case "new_message":
              const { channelId, user, message } = parsedAction.payload
              const messagesLengthKey = appSchema.messages_length.replace(
                "{{channelId}}",
                channelId
              )
              const newmessagesLength =
                (dataRef.current[messagesLengthKey] || 0) + 1

              const messId = newmessagesLength - 1
              const messageskey = appSchema.messages_id
                .replace("{{channelId}}", channelId)
                .replace("{{messageId}}", messId)

              const newMess = {
                id: messId,
                channelId,
                created: Date.now(),
                user,
                message,
              }

              const payload = {
                [messagesLengthKey]: newmessagesLength,
                [messageskey]: newMess,
              }
              localStorage.setItem(
                "server_action",
                JSON.stringify({
                  type: "new_message",
                  payload: payload,
                })
              )

            default:
              dataRef.current = {
                ...dataRef.current,
                ...parsedAction.payload,
                ...payload,
              }
              localStorage.setItem(
                "server_data",
                JSON.stringify(dataRef.current)
              )
              break
          }
        }
        localStorage.removeItem("action")
        setUpdate(Date.now())
      }
    }
    window.addEventListener("storage", event, false)
    return () => {
      window.removeEventListener("storage", event)
    }
  }, [])
  return (
    <div className="w-screen h-screen whitespace-pre-wrap overflow-auto">
      {JSON.stringify(actionsRef.current, null, 2)}
    </div>
  )
}