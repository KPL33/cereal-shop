import { useContext } from "react";
import { AppContext } from "../../../../context/AppContext";
import Select from "react-dropdown-select";

import {
  decrementAtc,
  incrementAtc,
  handleFoodSelection,
  handleAddToCart,
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

  const handleCartClick = () => {
    handleAddToCart(loggedIn, selectedFood);
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
          <span className="count">{quantity}</span>
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
