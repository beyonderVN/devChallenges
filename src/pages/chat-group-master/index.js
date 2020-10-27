import React, { useEffect, useLayoutEffect, useMemo } from "react"
export default function multiple({ location }) {
  return (
    <div className="w-screen h-screen grid p-6 gap-6 grid-cols-1 lg:grid-cols-2 bg-gray-700">
      <iframe
        width="100%"
        height="100%"
        className="col-span-1 lg:col-span-2  bg-gray-500 p-3"
        frameBorder={0}
        title="map"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src={`${location.origin}/chat-group-master/server`}
      />
      <iframe
        width="100%"
        height="100%"
        className="col-span-1 "
        frameBorder={0}
        title="map"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src={`${location.origin}/chat-group-master/single`}
      />
      <iframe
        width="100%"
        height="100%"
        className="col-span-1"
        frameBorder={0}
        title="map"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src={`${location.origin}/chat-group-master/single`}
      />
    </div>
  )
}
