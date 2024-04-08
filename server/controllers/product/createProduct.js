import Product from "../../models/Product.js";

// Function to create a new product
export const createProduct = async (productData) => {
  try {
    // Validate the required fields
    if (!productData.name) {
      throw new Error("Product name is required.");
    }

    if (!productData.description) {
      throw new Error("Product description is required.");
    }

    if (!productData.price || isNaN(productData.price)) {
      throw new Error(
        "Product price must be a valid number (Numerals and 1 decimal only; No $ should be included)."
      );
    }

    // Create a new product based on the provided data
    const newProduct = await Product.create(productData);
    return newProduct;
  } catch (error) {
    // If an error occurs, throw it to be handled by the route
    throw error;
  }
};
