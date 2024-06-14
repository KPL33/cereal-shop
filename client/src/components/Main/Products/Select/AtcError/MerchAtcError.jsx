// MerchAtcError.jsx
import useAppContext from "../../../../../context/useAppContext";
import "./atc-error.css";

const MerchAtcError = () => {
  const {
    merchQuantityError,
    selectedMerch,
    merchAtcClicked,
    merchQuantity,
    selectedSize,
  } = useAppContext();

  console.log("MerchAtcError rendered. merchAtcClicked:", merchAtcClicked);

  let errorMessage = "";

  if (merchAtcClicked) {
    if (!selectedMerch) {
      errorMessage = "Please select an item before adding to cart.";
    } else if (selectedMerch.label.includes("T-Shirt") && !selectedSize) {
      errorMessage = "Please select a T-Shirt size before adding to cart.";
    } else if (merchQuantity < 1 || merchQuantity > 99) {
      errorMessage = "Please enter a quantity between 1 and 99.";
    }
  }

  console.log("Determined errorMessage:", errorMessage);

  return (
    <div className="atc-error-container">
      {errorMessage && <h3 className="quantity-error">{errorMessage}</h3>}
    </div>
  );
};

export default MerchAtcError;
