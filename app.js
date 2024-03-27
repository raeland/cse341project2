const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const mongodb = require('./data/database')
const dotenv = require('dotenv').config()

const port = process.env.PORT || 3000
const app = express()

app.use(bodyParser.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    next()
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    next()
  })
app.use('/', require('./routes'))

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err)
  } else {
    app.listen(port)
    console.log(`Connected to DB and listening on ${port}`)
  }
})