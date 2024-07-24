import CartProduct from "../../models/CartProduct.js";
import User from "../../models/User.js";
import Product from "../../models/Product.js";

// Function to get all products in the cart or a specific product by ID
const getProductsInCart = async (id = null) => {
  try {
    if (id) {
      // If an ID is provided, find the specific CartProduct by ID
      const productInCart = await CartProduct.findByPk(id, {
        include: [
          {
            model: User,
            attributes: ["id", "email", "firstName", "lastName"], // Include specific attributes of User
          },
          {
            model: Product,
            attributes: ["id", "name"], // Include specific attributes of Product
          },
        ],
      });

      if (!productInCart) {
        throw new Error("Product not found in cart");
      }

      return productInCart;
    } else {
      // If no ID is provided, get all CartProducts
      const productsInCart = await CartProduct.findAll({
        include: [
          {
            model: User,
            attributes: ["id", "email", "firstName", "lastName"], // Include specific attributes of User
          },
          {
            model: Product,
            attributes: ["id", "name"], // Include specific attributes of Product
          },
        ],
      });

      return productsInCart;
    }
  } catch (error) {
    throw error;
  }
};

export default getProductsInCart;
