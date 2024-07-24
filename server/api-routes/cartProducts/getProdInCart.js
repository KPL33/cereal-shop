import express from "express";
import getProductsInCart from "../../controllers/prodInCart/getProdInCart.js";

const router = express.Router();

// Endpoint to retrieve all products in a user's cart
router.get("/", async (req, res) => {
  try {
    const productsInCart = await getProductsInCart();
    return res.status(200).json(productsInCart); // Return all products in the cart
  } catch (error) {
    console.error("Error getting products in cart:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Endpoint to retrieve a specific product in the cart by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const productInCart = await getProductsInCart(id);
    return res.status(200).json(productInCart); // Return the product in the cart
  } catch (error) {
    console.error("Error getting product in cart:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
