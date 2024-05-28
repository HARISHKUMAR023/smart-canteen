const express = require('express');
const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct,uploadProductImage } = require('../Controllers/product.contollers');

const router = express.Router();

// Get all products
router.get('/', getAllProducts);

// Get a single product by ID
router.get('/:id', getProductById);

// Create a new product
router.post('/', uploadProductImage,createProduct);

// Update a product by ID
router.put('/:id', updateProduct);

// Delete a product by ID
router.delete('/:id', deleteProduct);

module.exports = router;
