import React, { useCallback, useEffect, useLayoutEffect, useReducer, useState } from "react"
import { LayoutContent } from "./LayoutContent"
import { LayoutMenu } from "./LayoutMenu"
import { LayoutWrap } from "./LayoutWrap"
import Channel from './Channel'
import entities,{nestedEntities} from './source'
window&&(window.entities=entities)
window&&(window.nestedEntities=nestedEntities)
 function Home() {
  return (
    <LayoutWrap>
      <LayoutMenu>
        <div className="h-12 shadow flex space-x-3 px-2 items-center">
          <div className="font-bold">Channels</div>
        </div>
        <div className="flex-1 overflow-auto ">
          <div className="h-full flex flex-col">
            {
              Object.keys(entities.channels).map(channelId=>(
              <a href={`#${channelId}`} id={channelId} tabIndex="0" className="btn flex items-center target:bg-gray-300 p-2 border-l border-transparent">
                <div className="z-10 w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center">
                  {channelId}
                </div>
                <div className="truncate flex-1"/>
              </a>
              ))
            }
          </div>
        </div>
        <div className="h-12 bg"></div>
      </LayoutMenu>
      <LayoutContent>
        <div className="h-12 shadow"></div>
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
const useHash = ()=>{
  const [channelId,setChannelId] = useState(decodeURI(document.location.hash))
  useEffect(()=>{
    window&&(window.onpopstate = function(event) {
      setChannelId(decodeURI(document.location.hash))
    })
  },[])
  return channelId
}
function reducer(state, {type,payload}) {
  switch (type) {
    case 'merge':
      return {...state,
        ...payload
        };
        
    default:
      throw new Error();
  }
 
}
const useStore = ()=>{
  const [state, dispatch]= useReducer(reducer,nestedEntities)
  const merge = useCallback((key,value)=>dispatch({
    type:'merge',
    payload:{
      [key]:value
    }
  }),[])
  return {state,merge,}
}
const appSchema ={
  viewCount:'app.viewCount.{{channelId}}'
}
export default ()=>{
  const channelId = useHash()
  const store= useStore()
  const {state,merge} =store 
  window&&(window.store=store)
  useEffect(()=>{
    channelId&&(()=>{
      const viewCountKey = appSchema.viewCount.replace('{{channelId}}',channelId)
      viewCountKey&&(merge(viewCountKey,((state[viewCountKey]||0)+1)))
    })()
    
  },[merge,channelId])
  if(channelId){
    return <Channel channelId={channelId}/>
  }
  return <Home />
}