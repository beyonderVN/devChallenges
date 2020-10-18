import React from "react"
const baseSource ={
	channels:{
		dog:{
			id:'dog',
		name:'dog',
		members:['ti','teo','doremon']
		},
		cat:{
			id:'cat',
		name:'cat',
		members:['ti','teo','doremon']
		}
	},
	users:{
		ti:{
			id:'ti',
		name:'ti',
		},
		teo:{
			id:'teo',
		name:'teo',
		},
		doremon:{
			id:'doremon',
			name:'doremon',}
	}
}
const createSource = ()=>{
	const source={
		channels:{
			id
		},
		users:{

		}

	}
	const schemas ={
		channel:{
			id:'source.channels/{channelId}.id',
			name:'source.channels/{channelId}.name',
			description:'source.channels/{channelId}.description',
			members:`source.channels/{channelId}.members`
		},
		'source.channels/{channelId}.members':{
			id:'source.user/{userId}.id',
		},
		user:{
			id:'source.user/{userId}.id',
			name:'source.user/{userId}.name',
		}
	}
	return source
}
export default function chat_group_master() {
  return (
    <>
      <style>
        {`
                    .chat_group_master{
                        --primary:#0090d7;
                        --bg:#1f1f1f;
                        --bg-1:#2a2b2f;
                        --bg-2:#2f3237;
                        --bg-3:#32353a;
                        color:white
                    }
                    
                    .bg{
                        background:var(--bg)
                    }
                    .bg-1{
                        background:var(--bg-1)
                    }
                    .bg-2{
                        background:var(--bg-2)
                    }
                    .bg-3{
                        background:var(--bg-3)
                    }
                    .bg-primary{
                        background:var(--primary)
                    }
                `}
      </style>
      <div className="chat_group_master w-full h-screen bg-3">
        <div className=" container mx-auto w-full h-full  flex overflow-auto">
          <div className="w-64 flex flex-col bg-1">
            <div className="h-12 shadow flex space-x-3 px-3 items-center">
							<div className="font-bold">Channels</div>
						</div>
            <div className="flex-1 overflow-auto"></div>
            <div className="h-12 bg"></div>
          </div>
          <div className="flex-1 flex flex-col bg-2">
            <div className="h-12 shadow"></div>
            <div className="flex-1 overflow-auto"></div>
            <div className="p-6">
              <div className="p-2 w-full flex items-center space-x-3 bg-3 rounded-lg shadow-2xl">
                <input className="flex-1 appearance-none focus:outline-none bg-transparent "></input>
                <button className="w-8 h-8 bg-primary rounded-lg">✒</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
