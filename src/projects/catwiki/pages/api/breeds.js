// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  fetch("https://api.thecatapi.com/v1/breeds")
    .then(res => {
      return res.json()
    })
    .then(data => {
      res.statusCode = 200
      res.json(data)
    })
    .catch(console.error)
}
