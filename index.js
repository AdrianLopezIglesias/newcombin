const express = require('express')
const app = express()
const logger = require('morgan')
const bodyParser = require('body-parser')

const http = require('http')
// app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

require('dotenv').config()
const productController = require('./controllers/product')
const cartController = require('./controllers/cart')
const comboController = require('./controllers/combo')

app.get('/products/', productController.index)
app.get('/combos/', comboController.index)
app.get('/cart/all', cartController.index)
app.post('/cart/add', cartController.add)
app.post('/cart/close', cartController.close)
app.get('/cart/remaining', cartController.remaining)
app.get('/cart/calculate_total', cartController.calculate_total)
app.get('/cart/checkout', cartController.checkout)

module.exports = app; 
