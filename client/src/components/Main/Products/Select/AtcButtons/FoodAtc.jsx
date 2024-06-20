import useAppContext from "../../../../../context/useAppContext";
import axios from "axios";
import MessageBox from "../../../MessageBox/MessageBox";
import "./atc-button.css";
import { useState, useEffect } from "react";

const FoodAtc = () => {
  const {
    loggedIn,
    selectedFood,
    foodQuantity,
    setFoodQuantityError,
    setAtcClicked,
    setSelectionError,
    setShowFoodAtcMessageBox,
    showFoodAtcMessageBox,
  } = useAppContext();

  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (showFoodAtcMessageBox) {
      setShowAnimation(true);
      const timer = setTimeout(() => {
        setShowAnimation(false);
        setShowFoodAtcMessageBox(false);
      }, 5000); // Adjust the duration to match the animation duration

      return () => clearTimeout(timer);
    }
  }, [showFoodAtcMessageBox, setShowFoodAtcMessageBox]);

  const handleCartClick = async () => {
    if (!selectedFood) {
      setAtcClicked(true);
      setSelectionError(true);
      setShowFoodAtcMessageBox(false); // Ensure message box is hidden on error
      return;
    }

    if (loggedIn) {
      if (foodQuantity < 1 || foodQuantity > 99) {
        setFoodQuantityError(true);
        setShowFoodAtcMessageBox(false); // Ensure message box is hidden on error
        return;
      }

      setFoodQuantityError(false);
      setAtcClicked(true);

      try {
        const userId = localStorage.getItem("userId");
        const currentCartId = localStorage.getItem("currentCartId");

        if (!userId || !currentCartId) {
          console.error("userId or cartId not found in localStorage");
          setShowFoodAtcMessageBox(false); // Ensure message box is hidden on error
          return;
        }

        const endpoint = `http://localhost:3000/products/${selectedFood.value}`;
        console.log("GET request endpoint:", endpoint);

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

        setShowFoodAtcMessageBox(true); // Set to true after successful addition
      } catch (error) {
        console.error("Error adding food item to cart:", error);
        setShowFoodAtcMessageBox(false); // Ensure message box is hidden on error
      }
    }
  };

  return (
    <div className="atc-container">
      <button
        className="atc-button"
        onClick={handleCartClick}
        disabled={!loggedIn}
        style={{ opacity: loggedIn ? 1 : 0.8 }}
      >
        {loggedIn ? "Add to cart" : "Login to add to cart"}
      </button>
      <div className="message-box-wrapper">
        {showAnimation && (
          <MessageBox message="Added to cart!" type="positive" />
        )}
      </div>
    </div>
  );
};

export default FoodAtc;
