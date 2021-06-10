const express = require('express')
const app = express()
const os = require('os');
 
app.get('/', function (req, res) {
  res.json({
      name: "test-app",
      version: "1.0.0",
      host: os.hostname()
  })
})
 
app.listen(3000)
console.log(`app started on port: ${3000}`);