import useAppContext from "../../../../../context/useAppContext";
import axios from "axios";

import "./atc-button.css";

const AtcButton = () => {
  const {
    loggedIn,
    selectedFood,
    foodQuantity,
    setFoodQuantityError,
    setAtcClicked,
    setSelectionError, // Add setSelectionError from context
  } = useAppContext();

  const handleCartClick = async () => {
    if (!selectedFood) {
      setAtcClicked(true);
      setSelectionError(true);
      return;
    }

    if (loggedIn) {
      if (foodQuantity < 1 || foodQuantity > 99) {
        setFoodQuantityError(true);
        return;
      }

      setFoodQuantityError(false);
      setAtcClicked(true);

      try {
        const userId = localStorage.getItem("userId");
        const currentCartId = localStorage.getItem("currentCartId");

        if (!userId || !currentCartId) {
          console.error("userId or cartId not found in localStorage");
          return;
        }

        const endpoint = `http://localhost:3000/products/${selectedFood.value}`;
        console.log("GET request endpoint:", endpoint); // Log the endpoint

        const foodItemInfoResponse = await axios.get(endpoint);

        const foodItemPrice = foodItemInfoResponse.data.price;
        const foodItemTotal = foodItemPrice * foodQuantity;

        const payload = {
          userId: userId,
          cartId: currentCartId,
          foodItemId: selectedFood.value,
          productId: selectedFood.value,
          quantity: foodQuantity,
          foodItemPrice: foodItemPrice,
          foodItemTotal: foodItemTotal,
        };

        const response = await axios.post(
          "http://localhost:3000/cart/products/",
          payload
        );

        console.log("Food item added to cart:", response.data);
      } catch (error) {
        console.error("Error adding food item to cart:", error);
      }
    }
  };

  return (
    <button
      className="atc"
      onClick={handleCartClick}
      disabled={!loggedIn}
      style={{ opacity: loggedIn ? 1 : 0.8, fontSize: "2rem" }}
    >
      {loggedIn ? "Add to cart" : "Login to add to cart"}
    </button>
  );
};

export default AtcButton;
