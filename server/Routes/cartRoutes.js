const express = require('express');
const router = express.Router();
const cartController = require('../Controllers/cartController');
// const auth = require('../middleware/authMiddleware');

// Add a product to the cart
router.post('/add',  cartController.addToCart);

// Get cart items for a user
router.get('/',  cartController.getCart);

// Remove a product from the cart
router.delete('/remove',  cartController.removeFromCart);

module.exports = router;
