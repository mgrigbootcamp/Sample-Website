const express = require('express')

const productRouter = express.Router()

productRouter.get('/product', function (req, res, next) {
    res.send ('Products will go here')
  })

  module.exports = productRouter