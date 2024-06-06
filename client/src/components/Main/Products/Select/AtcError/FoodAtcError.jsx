// FoodAtcError.jsx
import useAppContext from "../../../../../context/useAppContext";
import "./atc-error.css";

const FoodAtcError = () => {
  const { foodQuantityError, selectedFood, atcClicked, foodQuantity } =
    useAppContext();

  const errorMessage =
    (!selectedFood && atcClicked) || foodQuantityError
      ? !selectedFood && atcClicked
        ? "Flip select an item before adding to cart."
        : foodQuantity < 1 || foodQuantity > 99
        ? "Please enter a quantity between 1 and 99."
        : ""
      : "";

  return (
    <div className="atc-error-container">
      {errorMessage && <h3 className="quantity-error">{errorMessage}</h3>}
    </div>
  );
};

export default FoodAtcError;
