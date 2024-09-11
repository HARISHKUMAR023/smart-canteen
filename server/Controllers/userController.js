const User = require('../Model/Usermodel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Secret key for JWT
const JWT_SECRET = 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTcyNTYxNDU0NiwiaWF0IjoxNzI1NjE0NTQ2fQ.ie6I0WfGVLv9XaDq2BGk01XsxZKQkHrlKl2DzdXnnbg'; // Use a secure key in production

// Register user
exports.register = async (req, res) => {
  const { phoneNumber, name, department, year, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ phoneNumber });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists with this phone number' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      phoneNumber,
      name,
      department,
      year,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error registering user', error: err.message });
  }
};

// Login user
exports.login = async (req, res) => {
  const { phoneNumber, password } = req.body;

  try {
    // Find user by phone number
    const user = await User.findOne({ phoneNumber });

    if (!user) {
      return res.status(400).json({ message: 'Invalid phone number or password' });
    }

    // Check if the user is active
    if (!user.isActive) {
      return res.status(403).json({ message: 'User account is deactivated' });
    }

    // Check the password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid phone number or password' });
    }

    // Create JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token, message: 'Login successful' });
  } catch (err) {
    res.status(500).json({ message: 'Error logging in', error: err.message });
  }
};

// Get user profile (protected route)
exports.getProfile = async (req, res) => {
  try {
    // req.userId comes from the JWT middleware
    const user = await User.findById(req.userId).select('-password');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching user profile', error: err.message });
  }
};
