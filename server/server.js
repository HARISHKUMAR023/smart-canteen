require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./Routes/product.routes');
const userauth = require('./Routes/user.routes');
const orderRoutes = require('./Routes/orderRoutes');
const cartRoutes = require('./Routes/cartRoutes');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
app.use(cors()); 

dotenv.config();

// Middleware
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



// Routes
app.use('/api/products', productRoutes);
app.use('/api/auth', userauth);
app.use('/api/orders', orderRoutes);
app.use('/api/cart', cartRoutes);

// Database connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
