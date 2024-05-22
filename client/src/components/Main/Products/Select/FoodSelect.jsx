import { useContext } from "react";
import { AppContext } from "../../../../context/AppContext";
import Select from "react-dropdown-select";
import axios from "axios"; // Import axios for HTTP requests

import {
  decrementAtc,
  incrementAtc,
  handleFoodSelection,
} from "../../../../../../utils/addToCart.js";

import "./prod-select.css";

const options = [
  {
    value: 1,
    label: "0.5 lbs. cereal - $4.99 ea.",
  },
  {
    value: 2,
    label: "2.0 lbs. cereal - $8.99 ea.",
  },
  {
    value: 3,
    label: "5.0 lbs. cereal - $12.99 ea.",
  },
  {
    value: 4,
    label: "10.0 lbs. cereal - $21.99 ea.",
  },
];

const FoodSelect = () => {
  const {
    quantity,
    setQuantity,
    selectedFood,
    setSelectedFood,
    loggedIn,
    quantityError,
    setQuantityError,
  } = useContext(AppContext);

  const handleOnChange = (values) => {
    handleFoodSelection(values, setSelectedFood, setQuantity);
  };

  const handleDecrement = () => {
    decrementAtc(quantity, setQuantity);
  };

  const handleIncrement = () => {
    incrementAtc(quantity, setQuantity);
  };

  const handleCartClick = async () => {
    if (loggedIn && selectedFood) {
      if (quantity < 1 || quantity > 99) {
        setQuantityError(true);
      } else {
        setQuantityError(false);
        try {
          // Retrieve userId and cartId from localStorage
          const userId = localStorage.getItem("userId");
          const currentCartId = localStorage.getItem("currentCartId");

          if (!userId || !currentCartId) {
            // Handle case when userId or cartId is not found in localStorage
            console.error("userId or cartId not found in localStorage");
            return;
          }

          // Fetch productPrice from backend based on selectedFood.value (productId)
          const productInfoResponse = await axios.get(
            `http://localhost:3000/products/${selectedFood.value}`
          );
          const productPrice = productInfoResponse.data.price;

          // Calculate productTotal
          const productTotal = productPrice * quantity;

          // Prepare the payload for adding to cart
          const payload = {
            userId: userId,
            cartId: currentCartId,
            productId: selectedFood.value,
            quantity: quantity,
            productPrice: productPrice,
            productTotal: productTotal,
          };

          // Make the POST request to add the product to the cart
          const response = await axios.post(
            "http://localhost:3000/cart/products/",
            payload
          );
          console.log("Item added to cart:", response.data);
        } catch (error) {
          console.error("Error adding item to cart:", error);
        }
      }
    }
  };

  return (
    <div className="action-buttons">
      <Select
        className="select-menu"
        options={options}
        onChange={handleOnChange}
        labelField="label"
        searchable={false}
      />
      {selectedFood && (
        <div id="food-quantity">
          <button onClick={handleDecrement}>–</button>

          <div className="quantity-container">
            <input
              type="text"
              className="count"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value, 10) || "")}
            />
            <h3
              className="quantity-error"
              style={{ display: quantityError ? "block" : "none" }}
            >
              Please enter a quantity between 1 and 99.
            </h3>
          </div>
          <button onClick={handleIncrement}>+</button>
        </div>
      )}
      <button
        className="atc"
        onClick={handleCartClick}
        disabled={!loggedIn}
        style={{ opacity: loggedIn ? 1 : 0.8, fontSize: "2rem" }}
      >
        {loggedIn ? "Add to cart" : "Login to add to cart"}
      </button>
    </div>
  );
};

export default FoodSelect;
