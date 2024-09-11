const Order = require('../Model/Ordermodel');
const AddToCart = require('../Model/Cartmodel');

// Place a new order
exports.placeOrder = async (req, res) => {
  const userId = req.userId;
  const {  items, totalPrice, status, shippingAddress } = req.body;
  console.log(userId, items,  totalPrice, status, shippingAddress)
  try {
    // Create a new order
    const newOrder = new Order({
      user: userId,
      items,
      totalPrice,
      status,
      shippingAddress
    });

    await newOrder.save();

    // You can also empty the cart after placing an order if necessary
    await AddToCart.deleteMany({ user: userId });

    res.status(201).json({ message: 'Order placed successfully', order: newOrder });
  } catch (err) {
    res.status(500).json({ message: 'Error placing order', error: err.message });
    console.log(err.message)
  }
};

// Get all orders for a user
exports.getOrdersForUser = async (req, res) => {
  const userId = req.userId; // Extracted from JWT middleware

  try {
    const orders = await Order.find({ user: userId }).populate('products.product', 'name price');

    if (orders.length === 0) {
      return res.status(404).json({ message: 'No orders found for this user' });
    }

    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching orders', error: err.message });
  }
};

//get all other in    orders for all user for admin 
exports.gerAllorders = async (req,res)=>{
   try{
    const orders = await Order.find().populate('items.product','name price imageUrl').populate('user','name phoneNumber')
    if ( orders.length === 0){
      return res.status(200).json({message:'No orders found for today'})
    }
    res.status(200).json(orders)

   }catch(err){
      res.status(500).json({message:'Error in backend orders'})
   }
}
