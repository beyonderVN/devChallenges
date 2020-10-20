import React, { createContext, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useReducer, useState } from "react"
import { LayoutContent } from "./LayoutContent"
import { LayoutMenu } from "./LayoutMenu"
import { LayoutWrap } from "./LayoutWrap"
import Channel from './Channel'
import entities,{nestedEntities} from './source'
window&&(window.entities=entities)
window&&(window.nestedEntities=nestedEntities)
 function Home() {
  const [auth,{merge} ]= useBindState(appSchema.auth)
  return (
    <LayoutWrap>
      <LayoutMenu>
        <div className="h-12 shadow flex space-x-3 px-2 items-center">
          <div className="hidden md:flex font-bold">Channels</div>
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
        {auth&&<div className="h-12 bg flex items-center px-2">
        <div className="font-bold ">
            <div
              className="btn flex-shrink-0 z-10 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center"
            >
              {auth}
            </div>
            <div className="hidden md:flex"></div>
          </div></div>}
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
const useStore = (initialState)=>{
  const [state, dispatch]= useReducer(reducer,initialState)
  const merge = useCallback((key,value)=>dispatch({
    type:'merge',
    payload:{
      [key]:value
    }
  }),[])
  return {state,merge,}
}
const useBindState = (key)=>{
  const {store} = useContext(ProviderContext)
  return [
    store.state[key],
    {
      merge:value=>store.merge(key,value)
    }
  ]
}
const appSchema ={
  viewCount:'app.viewCount.{{channelId}}',
  auth:'app.auth',
  currentChannel:'app.currentChannel',
}
const ProviderContext = createContext({})

const Provider = ({auth,children})=>{
  const store= useStore({
    ...nestedEntities,
    [appSchema.auth]:auth
  })
  
  
  window&&(window.store=store)
  

  return <ProviderContext.Provider value={{store}}>
    {children}
  </ProviderContext.Provider>
}
const Routes = ()=>{
  const channelId = useHash()
  const viewCountKey = appSchema.viewCount.replace('{{channelId}}',channelId)
  const [viewCount,{merge} ]= useBindState(viewCountKey)
  useEffect(()=>{
    merge((viewCount||0)+1)
  },[channelId])
  if(channelId){
    return <Channel channelId={channelId}/>
  }
  return <Home /> 
}
export default ()=>{
  const [auth,setAuth] = useState()
  if(!Boolean(auth)){
    return <div  className="bg-gray-900 py-6 w-screen space-y-6 h-screen overflow-auto w-full flex flex-wrap justify-center items-center">
      <div className="font-bold text-xl text-gray-100">Login</div>
      <div className="max-w-md flex flex-wrap justify-center items-center ">
        {
          Object.keys(entities.users).map(key=>{
            return  <div id={key} onClick={()=>setAuth(key)} className="btn m-2 flex-shrink-0 z-10 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                      {key}
            </div>
          })
        }
      </div>
    </div>
  }
  return <Provider auth={auth}>
    <Routes/>
  </Provider>
}