import React, { useEffect } from "react"
import { LayoutContent } from "./LayoutContent"
import { LayoutMenu } from "./LayoutMenu"
import { LayoutWrap } from "./LayoutWrap"
import entities from "./source"
import { useBindState } from "./useBindState"
import { appSchema } from "./appSchema"
import { ChatBox } from "./channel"

export function Home() {
  const [auth, { merge }] = useBindState(appSchema.auth)
  const [isMember, { merge: join }] = useBindState(
    appSchema.isMember.replace("{{channelId}}", "").replace("{{userId}}", auth)
  )
  useEffect(() => {
    !isMember && join(true)
  }, [])
  return (
    <LayoutWrap>
      <LayoutMenu>
        <div className="h-12 shadow flex space-x-3 px-2 items-center">
          <div className="hidden md:flex font-bold">Channels</div>
        </div>
        <div className="flex-1 overflow-auto ">
          <div className="h-full flex flex-col">
            {Object.keys(entities.channels).map(channelId => (
              <a
                href={`#${channelId}`}
                id={channelId}
                tabIndex="0"
                className="btn flex items-center target:bg-gray-300 p-2 border-l border-transparent"
              >
                <div className="z-10 w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center">
                  {channelId}
                </div>
                <div className="truncate flex-1" />
              </a>
            ))}
          </div>
        </div>
        {auth && (
          <div className="h-12 bg flex items-center px-2">
            <div className="font-bold ">
              <div
                onClick={() => merge(undefined)}
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
        <ChatBox channelId="" isMember={isMember} />
      </LayoutContent>
    </LayoutWrap>
  )
}
