const express = require('express')
const app = express()
const logger = require('morgan')
const bodyParser = require('body-parser')

const http = require('http')
// app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

require('dotenv').config()
const payableController = require('./controllers/payable')
const transactionController = require('./controllers/transaction')

app.get('/payables', payableController.index)
app.post('/payables', payableController.create)
app.get('/transactions', transactionController.index)
app.post('/transactions', transactionController.create)


module.exports = app; 
