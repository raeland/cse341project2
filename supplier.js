const mongodb = require('../data/database')
const ObjectId = require('mongodb').ObjectId

/* **************************
 * Retrieves ALL Suppliers from the database
 * *******************************/
const getAllSuppliers = async (req, res) => {
    //#swagger.tags=['Suppliers']
    try {
        const result = await mongodb.getDatabase().db().collection('supplier').find()
        result.toArray().then((suppliers) => {
            res.setHeader('Content-Type', 'application/json')
            res.status(200).json(suppliers)
        });            
    } catch (error) {
        res.status(500).json(`An error occured: ${error}`)
    }
}

/* **************************
 * Retrieves A Single Supplier from database
 * *******************************/
const getSingleSupplier = async (req, res) => {
    //#swagger.tags=['Suppliers']
    try {
        const supplierId = new ObjectId(req.params.id);
        const result = await mongodb.getDatabase().db().collection('supplier').find({ _id: supplierId })
        result.toArray().then((suppliers) => {
            res.setHeader('Content-Type', 'application/json')
            res.status(200).json(suppliers[0])
        })
    } catch (error) {
        res.status(500).json(`An error occured: ${error}`)
    }
};

/* **************************
 * Inserts A Supplier to the database
 * *******************************/
const createSupplier = async (req, res) => {
    //#swagger.tags=['Suppliers']
    const supplier = {
        supplier: req.body.supplier,
        address: req.body.address,
        phone: req.body.phone,
        url: req.body.url
    }
    const response = await mongodb.getDatabase().db().collection('supplier').insertOne(supplier)
    if (response.acknowledged) {
        res.status(204).send()
    } else {
        res.status(500).json(response.error || 'Some error occured while creating the item.')
    }
}

/* **************************
 * Updates A Supplier in the database
 * *******************************/
const updateSupplier = async (req, res) => {
    //#swagger.tags=['Suppliers']
    try {
        const supplierId = new ObjectId(req.params.id)
        const supplier = {
            supplier: req.body.supplier,
            address: req.body.address,
            phone: req.body.phone,
            url: req.body.url
        }
        const response = await mongodb.getDatabase().db().collection('supplier').replaceOne({ _id: supplierId }, supplier)           
        if (response.modifiedCount > 0) {
            res.status(204).send()
        }
    } catch (error) {
        res.status(500).json(`Error occured: ${error}`)
    }
}

/* **************************
 * Deletes A Supplier from the database
 * *******************************/
const deleteSupplier = async (req, res) => {
    //#swagger.tags=['Suppliers']
    try {
        const supplierId = new ObjectId(req.params.id)
        const response = await mongodb.getDatabase().db().collection('supplier').deleteOne({ _id: supplierId })      
        if (response.deletedCount > 0) {
            res.status(204).send()
        }
    } catch (error) {
        res.status(500).json(`An error occured: ${error}`)
    }
}


module.exports = {
    getAllSuppliers,
    getSingleSupplier,
    createSupplier,
    updateSupplier,
    deleteSupplier
}