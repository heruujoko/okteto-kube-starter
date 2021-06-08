const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.json({
      name: "test-app",
      version: "1.0.0"
  })
})
 
app.listen(3000)
console.log(`app started on port: ${3000}`);