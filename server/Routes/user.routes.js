const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');
// const auth = require('../middleware/authMiddleware');

// User registration
router.post('/register', userController.register);

// User login
router.post('/login', userController.login);

// Protected route to get user profile
// router.get('/profile', auth, userController.getProfile);

module.exports = router;
