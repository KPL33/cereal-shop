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
    setFoodSelectionError,
    setShowFoodAtcMessageBox,
    showFoodAtcMessageBox,
  } = useAppContext();

  const [showAnimation, setShowAnimation] = useState(false);
  const [messageType, setMessageType] = useState("");
  const [messageContent, setMessageContent] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false); // State for button disabled

  useEffect(() => {
    if (showFoodAtcMessageBox) {
      setShowAnimation(true);
      setIsButtonDisabled(true); // Disable button when message appears

      const timer = setTimeout(() => {
        setShowAnimation(false);
        setShowFoodAtcMessageBox(false);
        setIsButtonDisabled(false); // Re-enable button after message disappears
        setFoodSelectionError(false); // Reset food selection error
        setFoodQuantityError(false); // Reset food quantity error
      }, 7000); // Extend to 7 seconds to match your requirement

      return () => clearTimeout(timer);
    }
  }, [
    showFoodAtcMessageBox,
    setShowFoodAtcMessageBox,
    setFoodSelectionError,
    setFoodQuantityError,
  ]);

  const handleCartClick = async () => {
    if (!selectedFood) {
      setAtcClicked(true);
      setFoodSelectionError(true);
      setMessageType("negative");
      setMessageContent("Please select food.");
      setShowFoodAtcMessageBox(true); // Show the message box
      return;
    }

    if (loggedIn) {
      if (foodQuantity < 1 || foodQuantity > 99) {
        setFoodQuantityError(true);
        setMessageType("negative");
        setMessageContent("Qty. must be less than 99.");
        setShowFoodAtcMessageBox(true); // Show the message box
        return;
      }

      setFoodQuantityError(false);
      setAtcClicked(true);

      try {
        const userId = localStorage.getItem("userId");
        const currentCartId = localStorage.getItem("currentCartId");

        if (!userId || !currentCartId) {
          console.error("userId or cartId not found in localStorage");
          setMessageType("negative");
          setMessageContent("User ID or Cart ID not found.");
          setShowFoodAtcMessageBox(true); // Show the message box
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

        setMessageType("positive");
        setMessageContent("Added to cart!");
        setShowFoodAtcMessageBox(true); // Set to true after successful addition
      } catch (error) {
        console.error("Error adding food item to cart:", error);
        setMessageType("negative");
        setMessageContent("Error adding food item to cart.");
        setShowFoodAtcMessageBox(true); // Ensure message box is shown on error
      }
    }
  };

  return (
    <div className="atc-container">
      <button
        className="atc-button"
        onClick={handleCartClick}
        disabled={!loggedIn || isButtonDisabled}
      >
        {loggedIn ? "Add to cart" : "Login to add to cart"}
      </button>
      <div className="message-box-wrapper">
        {showAnimation && (
          <MessageBox message={messageContent} type={messageType} />
        )}
      </div>
    </div>
  );
};

export default FoodAtc;
