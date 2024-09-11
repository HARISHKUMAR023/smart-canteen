const express = require('express');
const router = express.Router();
const orderController = require('../Controllers/orderController');
const auth = require('../Middleware/authMiddleware');

// Place an order
// router.post('/place', auth, orderController.placeOrder);
router.post('/',auth, orderController.placeOrder);

// Get all orders for the user
router.get('/myorders',  orderController.getOrdersForUser);

//get all arders for admin panel
router.get('/allorders',  orderController.gerAllorders)

module.exports = router;
