import React, { useEffect } from "react"
import appSchema from "./appSchema"
import { LayoutContent } from "./LayoutContent"
import { LayoutMenu } from "./LayoutMenu"
import { LayoutWrap } from "./LayoutWrap"
import entities from "./source"
import { useBindState } from "./useBindState"

export const ChatBox = ({ channelId, isMember }) => {
  const [messageLength = 0] = useBindState(
    appSchema.messages_length.replace("{{channelId}}", channelId)
  )
  const ids = new Array(Number(messageLength)).fill(null).map((_, index) => {
    return appSchema.messages_id
      .replace("{{channelId}}", channelId)
      .replace("{{messageId}}", Number(messageLength) - 1 - index)
  })
  const [messages = []] = useBindState(ids)

  const [auth, { merge: setAuth }] = useBindState(appSchema.auth)
  const handleSendMessage = e => {
    if (e) {
      e.preventDefault()
    }
    const node = document.querySelector("#input")
    if (node && node.value && node.value.length) {
      localStorage.setItem(
        "action",
        JSON.stringify({
          type: "new_message",
          payload: {
            channelId,
            user: auth,
            message: node.value,
          },
        })
      )
      // setmessages((messages = []) => [
      //   {
      //     created: Date.now(),
      //     user: auth,
      //     message: node.value,
      //   },
      //   ...messages,
      // ])
      node.value = ""
    }
  }
  const lastMessageId =
    messages && messages.length && messages[0] && messages[0].created
  useEffect(() => {
    if (lastMessageId) {
      const e = document.querySelector("#messageId_" + lastMessageId)
      e.scrollIntoView()
    }
  }, [lastMessageId])
  return (
    <>
      <div className="h-12 shadow px-3 flex items-center">
        <div className="w-8 h-8  flex items-center justify-center">
          {channelId}
        </div>
      </div>
      <div className="flex-1 overflow-auto ">
        <div className="flex flex-col flex-col-reverse p-1 space-y-reverse space-y-3 justify-end min-h-full px-2">
          <div />
          {messages.filter(Boolean).map(({ created, user, message }, index) => (
            <div
              id={"messageId_" + created}
              key={created}
              className="flex items-stretch max-w-xl self-start max-w-full space-x-2 "
            >
              <div className="btn flex-shrink-0 z-10 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                {user}
              </div>
              <div className="flex flex-col">
                <time className="block text-gray-600 text-xs">
                  {new Date(created).toLocaleDateString()}
                </time>
                <div className="flex-1 rounded background-200 overflow-auto">
                  <div className="overflow-x-hidden whitespace-pre-line">
                    {message}
                  </div>
                  <div className="w-24" />
                </div>
              </div>
            </div>
          ))}
          <div className="text-center text-sm font-bold text-gray-600 p-3">
            END
          </div>
          <div className="flex-1 " style={{ marginTop: 100 }}>
            <div className="mt-12" />
          </div>
        </div>
      </div>
      {isMember && (
        <form onSubmit={handleSendMessage} className="p-2">
          <label
            htmlFor="input"
            tabIndex="0"
            className="p-2 w-full flex hover:shadow-outline items-center space-x-3 bg-3 rounded-md shadow-xl"
          >
            <input
              id="input"
              name="input"
              className="flex-1 appearance-none focus:outline-none bg-transparent "
            ></input>
            <input
              style={{
                position: "absolute",
                visibility: "hidden",
              }}
              type="submit"
              tabindex="-1"
            />
            <button
              className="w-8 h-8 bg-primary rounded-lg"
              onClick={handleSendMessage}
            >
              ✒
            </button>
          </label>
        </form>
      )}
    </>
  )
}
export default function Channel({ channelId }) {
  const [auth, { merge: setAuth }] = useBindState(appSchema.auth)
  const [isMember, { merge: join }] = useBindState(
    appSchema.isMember
      .replace("{{channelId}}", channelId)
      .replace("{{userId}}", auth)
  )
  useEffect(() => {
    !isMember && join(true)
  }, [channelId])
  return (
    <LayoutWrap>
      <LayoutMenu>
        <div className="h-12 shadow flex space-x-3 px-2 items-center">
          <div className="font-bold flex items-center">
            <div
              onClick={() => window.history.back()}
              className="btn flex-shrink-0 z-10 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>
              </svg>
            </div>
            <div className="hidden md:flex">All Channels</div>
          </div>
        </div>
        <div className="flex-1 overflow-auto"></div>
        {auth && (
          <div className="h-12 bg flex items-center px-2">
            <div className="font-bold ">
              <div
                onClick={() => setAuth(undefined)}
                className="btn flex-shrink-0 z-10 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center"
              >
                {auth}
              </div>
              <div className="hidden md:flex"></div>
            </div>
          </div>
        )}
      </LayoutMenu>
      <LayoutContent>
        <ChatBox {...{ channelId, isMember }} />
      </LayoutContent>
    </LayoutWrap>
  )
}
