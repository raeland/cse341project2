const express = require('express')
const bodyParser = require('body-parser')
const mongodb = require('./data/database')
const session = require('express-session')
const cors = require('cors')

const port = process.env.PORT || 8080
const app = express()

app
    .use(bodyParser.json())
    .use(session({
        secret: "secret",
        resave: false,
        saveUninitialized: true,
    }))

    // This is the basic epxression session ({..}) initialization.
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
        );
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
        next();
    })
    .use(cors({ methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'] }))
    .use(cors({ origin: '*' }))
    .use('/', require('./routes'))    
    
   // mongodb.initDb((err) => {
     //   if (err) {
       //     console.log(err);
        //} else {
          //  app.listen(port, () => {console.log(`Database is listening and node running on port ${port}`)});
       // }
   // })