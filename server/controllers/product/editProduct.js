import Product from "../../models/Product.js";

const editProduct = async (productId, productData) => {
  try {
    // Define the valid fields for updates
    const validFields = [
      "name",
      "category",
      "description",
      "price",
      "amountInStock",
    ];

    // Validate if the product exists
    const productToUpdate = await Product.findByPk(productId);
    if (!productToUpdate) {
      throw new Error("Product not found");
    }

    // Check if at least one valid field is provided in the request data
    const hasValidField = validFields.some((field) => field in productData);
    if (!hasValidField) {
      throw new Error(
        "At least one of name, category, description, price, or amountInStock is required."
      );
    }

    // Validate specific fields if they are included in the request data
    if (productData.price) {
      // Validate price format
      if (isNaN(productData.price)) {
        throw new Error(
          "Product price must be a valid number (Numerals and 1 decimal only; No $ should be included)."
        );
      }
    }

    // Update the product
    const updatedProduct = await productToUpdate.update(productData);

    return updatedProduct;
  } catch (error) {
    throw error;
  }
};

export default editProduct;
