import Cart from "../../models/Cart.js";

// Function to retrieve all carts
export const getAllCarts = async () => {
  try {
    // Retrieve all cart items from the database
    const carts = await Cart.findAll();
    return carts;
  } catch (error) {
    // Throw the error to be handled by the caller
    throw error;
  }
};

// Function to retrieve a cart by ID
export const getCartById = async (cartId) => {
  try {
    // Find a cart item by its ID
    const cart = await Cart.findByPk(cartId);
    return cart;
  } catch (error) {
    // Throw the error to be handled by the caller
    throw error;
  }
};
