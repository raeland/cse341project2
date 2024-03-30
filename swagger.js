const swaggerAutogen = require('swagger-autogen')()

const doc = {
    info: {
        title: 'Users Api',
        description: 'Users Api'
    },
    // host: '..........onrender.com',
    host: 'localhost:80800',
    schemes: ['http', 'https']
}

const outputFile = './swagger.json'
const endpointsFiles = ['./routes/index.js']

// This will generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc)