const express = require('express') // It requires Express
const { globalRouter } = require("./routes/global.routes");
const app = express() //app has express object
const port = 3000 //default port number

app.use("/",globalRouter)

app.listen(port, () => {
  console.log(`My app listening on port ${port}`)
})