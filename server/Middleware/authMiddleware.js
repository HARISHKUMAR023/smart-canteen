const jwt = require('jsonwebtoken');

const JWT_SECRET = 'your_jwt_secret_key_here'; // Same secret as in controller

// Middleware to verify JWT token
const auth = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;  // Extract userId from the decoded token
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token' });
  }
};

module.exports = auth;
