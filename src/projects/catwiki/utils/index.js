const fetch = require("node-fetch")
var fs = require("fs")
var https = require("https")
//Node.js Function to save image from External URL.
export function saveImageToDisk(url, localPath) {
  var file = fs.createWriteStream(localPath)
  var request = https.get(url, function (response) {
    response.pipe(file)
    console.log(localPath)
  })
}
export function saveJsonToDisk(data, localPath) {
  fs.writeFile(localPath, JSON.stringify(data, null, 2), err => {
    if (err) throw err
    console.log("Data written to file: " + localPath)
  })
}
