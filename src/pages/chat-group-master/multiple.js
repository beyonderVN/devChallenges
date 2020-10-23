import React, { useEffect, useLayoutEffect, useMemo } from "react"
export default function multiple() {
  return (
    <div className="w-screen h-screen grid p-6 gap-6 grid-cols-1 lg:grid-cols-2 bg-gray-600">
      <iframe
        width="100%"
        height="100%"
        className="col-span-1 "
        frameBorder={0}
        title="map"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src="http://localhost:8000/chat-group-master"
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
        src="http://localhost:8000/chat-group-master/server"
      />
    </div>
  )
}
