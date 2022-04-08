const express = require('express')
const app = express()
const {productRouter} = require('./routes')

app.use('/api',productRouter)

app.get('/', function (req, res) {
    res.send('hello world')
  })
  
  app.listen(4000, ()=>{
      console.log("App is running");
  })
