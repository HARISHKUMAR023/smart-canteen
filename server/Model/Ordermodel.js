const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
});

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  // Assuming you have a User model
    required: true,
  },
  items: [orderItemSchema],
  totalPrice: {
    type: Number,
    required: true,
  },
  shippingAddress: {
    type: String,
    required: true,
  },
//   paymentMethod: {
//     type: String,
//     required: true,
//   },
  status: {
    type: String,
    enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
    default: 'Pending',
  },
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
