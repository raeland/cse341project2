const express = require('express')
const graphqlHTTP = require('express-graphql')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const mongodb = require('./data/database')
const dotenv = require('dotenv').config()

const app = express()

app.use(bodyParser.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    next()
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    next()
  })
app.use('/', require('./routes'))

const port = process.env.PORT || 8080
  
mongodb.initDb((err) => {
  if (err) {
      console.log(err);
  } else {
      app.listen(port, () => {console.log(`Database is listening and node running on port ${port}`)});
  }
})