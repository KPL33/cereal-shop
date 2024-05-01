// Decrement quantity
export const decrementAtc = (currentQuantity, setQuantity) => {
  if (currentQuantity > 1) {
    setQuantity(currentQuantity - 1);
  }
};

// Increment quantity
export const incrementAtc = (currentQuantity, setQuantity) => {
  setQuantity(currentQuantity + 1);
};

// Handle change in food selection
export const handleFoodSelection = (values, setSelectedFood, setQuantity) => {
  setSelectedFood(values.length > 0 ? values[0] : null);
  setQuantity(1); // Reset quantity to 1 when food selection changes
};

// Handle adding item to cart
export const handleAddToCart = (loggedIn, selectedFood) => {
  if (loggedIn) {
    // Handle adding item to cart (e.g., call an API to add to cart)
    if (selectedFood) {
      console.log("Adding to cart:", selectedFood.label);
      // Add logic to actually add item to cart (e.g., call API)
    }
  } else {
    // Redirect user to login page or display message
    console.log("User must log in to add to cart");
  }
};
