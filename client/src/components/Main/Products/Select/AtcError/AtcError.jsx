import useAppContext from "../../../../../context/useAppContext";
import "./atc-error.css";

const AtcError = () => {
  const { quantityError, selectedProduct, atcClicked } = useAppContext();

  const errorMessage =
    (!selectedProduct && atcClicked) || quantityError
      ? !selectedProduct && atcClicked
        ? "Please select an item before adding to cart."
        : "Please enter a quantity between 1 and 99."
      : "";

  return (
    <div className="atc-error-container">
      {errorMessage && <h3 className="quantity-error">{errorMessage}</h3>}
    </div>
  );
};

export default AtcError;
