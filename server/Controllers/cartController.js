const AddToCart = require('../Model/Cartmodel');

// Add a product to the cart
exports.addToCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;

  try {
    // Check if the item is already in the cart
    let cartItem = await AddToCart.findOne({ user: userId, 'products.product': productId });

    if (cartItem) {
      // If product already exists, update the quantity
      await AddToCart.updateOne(
        { user: userId, 'products.product': productId },
        { $inc: { 'products.$.quantity': quantity } }
      );
      res.status(200).json({ message: 'Cart updated successfully' });
    } else {
      // If product is not in the cart, add it
      await AddToCart.findOneAndUpdate(
        { user: userId },
        { $push: { products: { product: productId, quantity } } },
        { new: true, upsert: true }  // Create a new cart if it doesn't exist
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

  try {
    const cart = await AddToCart.findOne({ user: userId }).populate('products.product', 'name price imageUrl');

    if (!cart || cart.products.length === 0) {
      return res.status(404).json({ message: 'Cart is empty' });
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
