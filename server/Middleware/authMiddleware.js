const jwt = require('jsonwebtoken');

// const JWT_SECRET = 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTcyNTYxNDU0NiwiaWF0IjoxNzI1NjE0NTQ2fQ.ie6I0WfGVLv9XaDq2BGk01XsxZKQkHrlKl2DzdXnnbg'; // Same secret as in controller


const auth = (req, res, next) => {
  // Directly get the token from the Authorization header without checking for 'Bearer'
  const token = req.header('Authorization');
  console.log(token);
  
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    // Verify the token without splitting 'Bearer '
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;  // Attach the userId from the decoded token to the request
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token', err });
  }
};


module.exports = auth;
