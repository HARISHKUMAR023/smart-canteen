const express = require('express');
const router = express.Router();
const orderController = require('../Controllers/orderController');
// const auth = require('../middleware/authMiddleware');

// Place an order
// router.post('/place', auth, orderController.placeOrder);
router.post('/place', orderController.placeOrder);

// Get all orders for the user
router.get('/myorders',  orderController.getOrdersForUser);

module.exports = router;
