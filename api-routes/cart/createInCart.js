import express from "express";
import { createInCart } from "../../controllers/cart/createInCart.js"; // Import the cart controller responsible for creating cart items

const router = express.Router();

// Route for creating a new item in the cart
router.post("/", async (req, res) => {
  try {
    // Extract cart data from the request body
    const cartData = req.body;

    // Call the cart controller to create a new item in the cart
    const newInCart = await createInCart(cartData);

    // Respond with the newly created cart item
    res.status(201).json(newInCart);
  } catch (error) {
    // Handle errors
    console.error("Error placing new item in cart:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
