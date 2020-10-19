import React from "react";
import { LayoutContent } from "./LayoutContent";
import { LayoutMenu } from "./LayoutMenu";
import { LayoutWrap } from "./LayoutWrap";
import entities from './source'
export default function Channel({channelId}) {
  return (
    <LayoutWrap>
      <LayoutMenu>
        <div className="h-12 shadow flex space-x-3 px-3 items-center">
          <div className="font-bold">All Channels</div>
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
        <div className="flex-1 overflow-auto">
   
        </div>
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
  );
}
