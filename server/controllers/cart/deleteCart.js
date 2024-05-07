import Cart from "../../models/Cart.js";

// Function to delete a cart by ID
export const deleteCartById = async (cartId) => {
  try {
    // Find the cart item by ID and delete it
    const cart = await Cart.findByPk(cartId);
    if (!cart) {
      return { success: false, message: "Cart not found" };
    }

    await cart.destroy();
    return { success: true, message: "Cart deleted successfully" };
  } catch (error) {
    // Throw the error to be handled by the caller
    throw error;
  }
};
