import CartProductModel from "../../models/CartProduct.js";

const createProdInCart = async (req, res) => {
    const { userId, productId, quantity } = req.body;

    try {
        let cartProduct = await CartProductModel.findOne({
          where: {
            userId,
            productId,
            cartId: { [Op.ne]: null }, // Look for products already associated with a cart
          },
        });

        if (!cartProduct) {
            cartProduct = await CartProduct.create({
                userId,
                productId,
                quantity,
            });
            res.status(201).json(cartProduct);
        } else {
            cartProduct.quantity += quantity;
            await cartProduct.save();
            res.status(200).json(cartProduct);
        }
    } catch (error) {
        console.error("Error adding product to cart:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export default {
    createProdInCart,
};
