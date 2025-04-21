// server/routes/stripe.js
const express = require('express');
const router = express.Router();
const Stripe = require('stripe');
const stripe = Stripe('your_stripe_secret_key'); // Replace with your actual Stripe secret key

router.post('/create-checkout-session', async (req, res) => {
  const { items } = req.body;

  const line_items = items.map(item => ({
    price_data: {
      currency: 'inr',
      product_data: {
        name: item.name,
        images: [item.imageUrl], // Optional
      },
      unit_amount: item.price * 100, // Stripe expects amount in the smallest currency unit (paise for INR)
    },
    quantity: item.quantity,
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: 'https://your-success-url.com', // Replace with your actual success URL
      cancel_url: 'https://your-cancel-url.com',   // Replace with your actual cancel URL
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Stripe session creation failed' });
  }
});

module.exports = router;
