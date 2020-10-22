import React from "react"
import { appSchema } from "./appSchema"
import entities from "./source"
import { useBindState } from "./useBindState"

export const Login = () => {
  const [auth, { merge: setAuth }] = useBindState(appSchema.auth)
  return (
    <div className="bg-gray-900 py-6  w-screen space-y-6 h-screen overflow-auto w-full flex flex-col items-center">
      <div className="font-bold text-xl text-gray-100">Login</div>
      <div className="max-w-md flex flex-wrap justify-center items-center ">
        {Object.keys(entities.users).map(key => {
          return (
            <div
              id={key}
              onClick={() => setAuth(key)}
              className="btn m-2 flex-shrink-0 z-10 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center"
            >
              {key}
            </div>
          )
        })}
      </div>
    </div>
  )
}
