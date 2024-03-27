const router = require('express').Router();
const inventoryController = require('../controllers/inventory');

router.get('/', inventoryController.getAllItems)
router.get('/:id', inventoryController.getSingleItem)
router.post('/', inventoryController.createItem)
router.put('/:id', inventoryController.updateItem)
router.delete('/:id', inventoryController.deleteItem)

module.exports = router