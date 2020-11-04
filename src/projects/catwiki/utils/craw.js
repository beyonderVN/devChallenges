import { saveImageToDisk, saveJsonToDisk } from "."
const fs = require("fs")
export async function craw() {
  const res = await fetch("https://api.thecatapi.com/v1/breeds")
  const data = await res.json()
  data.map(item => {
    fetch(`https://api.thecatapi.com/v1/images/search?breed_id=` + item.id)
      .then(res => res.json())
      .then(resJson => {
        const imagepath = `./public/static/images/${item.id}.png`
        const jsonpath = `./public/static/catwiki/${item.id}.json`

        saveImageToDisk(resJson[0].url, imagepath)
        saveJsonToDisk(resJson[0], jsonpath)
      })
    return item
  })
}
