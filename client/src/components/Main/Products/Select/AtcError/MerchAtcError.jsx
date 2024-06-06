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

  const errorMessage =
    (!selectedMerch && merchAtcClicked) ||
    merchQuantityError ||
    (!selectedSize &&
      selectedMerch?.label.includes("T-Shirt") &&
      merchAtcClicked)
      ? !selectedMerch && merchAtcClicked
        ? "Please select an item before adding to cart."
        : !selectedSize &&
          selectedMerch?.label.includes("T-Shirt") &&
          merchAtcClicked
        ? "Please select a T-Shirt size before adding to cart."
        : merchQuantity < 1 || merchQuantity > 99
        ? "Please enter a quantity between 1 and 99."
        : ""
      : "";

  return (
    <div className="atc-error-container">
      {errorMessage && <h3 className="quantity-error">{errorMessage}</h3>}
    </div>
  );
};

export default MerchAtcError;
