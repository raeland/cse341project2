const router = require('express').Router()

router.use('/', require('./swagger'))

//router.get("/", (req, res) => { 
    //#swagger.tags=['Hello World']
  // res.send ('Hello World')
//})

router.use('/inventory', require('./inventory'))
router.use('/supplier', require('./supplier'))

module.exports = router
