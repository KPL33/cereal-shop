import express from "express";
import createProdInCart from "../../controllers/prodInCart/createProdInCart.js";

// Create a router
const router = express.Router();

// Route for adding a product to the cart
router.post("/", async (req, res) => {
    try {
        const { userId, productId, quantity } = req.body;

        // Call controller function to add product to cart
        const newCartProduct = await createProdInCart.addToCart(
        userId,
        productId,
        quantity
        );

        // Send a success response with the newly created cart product
        res.status(201).json(newCartProduct);
    } catch (error) {
        // Handle errors
        console.error("Error adding product to cart:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

export default router;
