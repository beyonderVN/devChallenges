let createEntities = string=>{
    const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x)
    const createEntity = (string)=>({
        id:string,
        name:string
    })
    var emojiStringToArray = function (str) {
      const split = str.replace(' ',).split(/([\uD800-\uDBFF][\uDC00-\uDFFF])/);
      const arr = [];
      let char
      for (var i=0; i<split.length; i++) {
        char = split[i]
        if (char !== "") {
          arr.push(char);
        }
      }
      return arr;
    };
    let result = []
    result = emojiStringToArray(string)
    result = result.map(item=>item.trim()).filter(item=>item&&item.length&&item!==" "&&item!=="‍")
    result = pipe(...result.map((string)=>(result,value)=>{
    const user = createEntity(string)
    result[string]=user 
    return result
  }))({})
  return result
  
  }
  let entities = {
    users:createEntities("😀😃😄😁😆😅😂🤣☺️😊😇🙂🙃😉😌😍🥰😘😗😙😚😋😛😝😜🤪🤨🧐🤓😎🤩🥳😏😒😞😔😟😕🙁☹️😣😖😫😩🥺😢😭😤😠😡🤬🤯😳🥵🥶😱😨😰😥😓🤗🤔🤭🤫🤥😶😐😑😬🙄😯😦😧😮😲🥱😴🤤😪😵🤐🥴🤢🤮🤧😷🤒🤕🤑🤠😈👿👹👺🤡💩👻💀☠️👽👾🤖🎃😺😸😹😻😼😽🙀😿😾"),
    channels:createEntities("🐶🐱🐭🐹🐰🦊🐻🐼🐨🐯🦁🐮🐷🐽🐸🐵🙈🙉🙊🐒🐔🐧🐦🐤🐣🐥🦆🦅🦉🦇🐺🐗🐴🦄🐝🐛🦋🐌🐞🐜🦟🦗🕷🕸🦂🐢🐍🦎🦖🦕🐙🦑🦐🦞🦀🐡🐠🐟🐬🐳🐋🦈🐊🐅🐆🦓🦍🦧🐘🦛🦏🐪🐫🦒🦘🐃🐂🐄🐎🐖🐏🐑🦙🐐🦌🐕🐩🦮🐕‍🦺🐈🐓🦃🦚🦜🦢🦩🕊🐇🦝🦨🦡🦦🦥🐁🐀🐿🦔🐾🐉🐲🌵🎄🌲🌳🌴🌱🌿☘️🍀🎍🎋🍃🍂🍁🍄🐚🌾💐🌷🌹🥀🌺🌸🌼🌻🌞🌝🌛🌜🌚🌕🌖🌗🌘🌑🌒🌓🌔🌙🌎🌍🌏🪐💫⭐️🌟✨⚡️☄️💥🔥🌪🌈☀️🌤⛅️🌥☁️🌦🌧⛈🌩🌨❄️☃️⛄️🌬💨💧💦☔️☂️🌊🌫")
  }

	
	const nestingEntities =(result,entities,key)=> {
    if(typeof entities===typeof ''){
        return {
            ...result,
          [key]:entities
        }
    }
    return {
      ...result,
      ...Object.keys(entities).reduce((result,value,)=>{
        return nestingEntities(result,entities[value],key+'.'+value)
      },{})
    }
}
export const nestedEntities=nestingEntities({},entities,'entities')
export default entities