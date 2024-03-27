const router = require('express').Router()
const supplierController = require('../controllers/supplier')

router.get('/', supplierController.getAllSuppliers)

router.get('/:id', supplierController.getSingleSupplier)

router.post('/', supplierController.createSupplier)

router.put('/:id', supplierController.updateSupplier)

router.delete('/:id', supplierController.deleteSupplier)

module.exports = router