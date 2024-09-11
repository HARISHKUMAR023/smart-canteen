const AddToCart = require('../Model/Cartmodel');
const Product = require('../Model/product.model')
// Add a product to the cart
exports.addToCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;
  console.log(userId,productId, quantity)

   
  
  try { 
    const product = await Product.findOne({ _id: productId });
    
    if (!product) {
      return res.status(200).json({ message: 'Product not found' });
    }
    
    // Calculate total price for the product (product price * quantity)
    const itemTotalPrice = product.price * quantity;
    // console.log('Item Total Price:', itemTotalPrice);
    // Check if the item is already in the cart
    let cartItem = await AddToCart.findOne({ user: userId, 'items.product': productId });
    // console.log(cartItem

    // )
    // console.log(cartItem)
    //  let productdl = await Poduct.findOne({ _id: productId });
      //  console.log(productdl.price)
      //  const tm = productdl.price * quantity 
      //  console.log(tm)
    if (cartItem) {
  
      await AddToCart.updateOne(
        { user: userId, 'items.product': productId },
        { $set: { 'items.$.quantity': quantity },
        $inc:{'totalPrice': itemTotalPrice}
      
      },
       
      );
      res.status(200).json({ message: 'Cart updated successfully' });
    } else {
      // If product is not in the cart, add it
      await AddToCart.findOneAndUpdate(
        { user: userId },
        { $push: { items: { product: productId, quantity, totalPrice: itemTotalPrice  } } },
        { new: true, upsert: true }  // Create a new cart if it doesn't exist
      );
      const updatedCart = await AddToCart.findOne({ user: userId });
      const totalCartPrice = updatedCart.items.reduce((sum, item) => sum + item.totalPrice, 0);
  
      // Update the cart's total price
      await AddToCart.updateOne(
        { user: userId },
        { $set: { 'totalPrice': totalCartPrice } }
      );
      res.status(201).json({ message: 'Product added to cart successfully' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error adding product to cart', error: err.message });
  }
};

// Get cart items for a user
exports.getCart = async (req, res) => {
  const userId = req.userId;
  console.log(userId)
  try {
    const cart = await AddToCart.findOne({ user: userId }).populate('items.product', 'name price imageUrl');

    if (!cart || cart.items.length === 0) {
      return res.status(200).json({ message: 'Cart is empty' });
    }

    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching cart', error: err.message });
  }
};

// Remove a product from the cart
exports.removeFromCart = async (req, res) => {
  const { userId, productId } = req.body;

  try {
    // Remove the product from the cart
    const updatedCart = await AddToCart.findOneAndUpdate(
      { user: userId },
      { $pull: { products: { product: productId } } },
      { new: true }
    );

    if (!updatedCart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    res.status(200).json({ message: 'Product removed from cart', cart: updatedCart });
  } catch (err) {
    res.status(500).json({ message: 'Error removing product from cart', error: err.message });
  }
};
