import React from "react"
import { LayoutContent } from "./LayoutContent"
import { LayoutMenu } from "./LayoutMenu"
import { LayoutWrap } from "./LayoutWrap"
import entities from "./source"
export default function Channel({ channelId }) {
  return (
    <LayoutWrap>
      <LayoutMenu>
        <div className="h-12 shadow flex space-x-3 px-3 items-center">
          <div className="font-bold flex items-center">
            <div onClick={()=>window.history.go(-1)} className="btn flex-shrink-0 z-10 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg>

            </div>
            <div className="hidden md:flex">All Channels</div>
          </div>
        </div>
        <div className="flex-1 overflow-auto"></div>
        <div className="h-12 bg"></div>
      </LayoutMenu>
      <LayoutContent>
        <div className="h-12 shadow px-3 flex items-center">
          <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
            {channelId}
          </div>
        </div>
        <div className="flex-1 overflow-auto"></div>
        <div className="p-6">
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
            <button className="w-8 h-8 bg-primary rounded-lg">✒</button>
          </label>
        </div>
      </LayoutContent>
    </LayoutWrap>
  )
}
