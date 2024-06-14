import { useEffect } from "react";
import useAppContext from "../../../../context/useAppContext";
import Select from "react-dropdown-select";
import PropTypes from "prop-types";

import ShirtSizes from "./ShirtSizes/ShirtSizes.jsx";
import MerchQuantity from "./Quantity/MerchQuantity.jsx";
import MerchAtcButton from "./AtcButton/MerchAtcButton.jsx";
import MerchAtcError from "./AtcError/MerchAtcError.jsx"; // Import MerchAtcError

import { handleProductSelection } from "../../../../../../utils/addToCart.js";

import "./prod-select.css";

const options = [
  { value: 5, label: "T-Shirt - $6.99" }, // Example: use an ID
  { value: 9, label: "Coffee Mug - $4.99" },
  { value: 10, label: "Commuter Mug - $10.99" },
];

const MerchSelect = () => {
  const {
    setMerchQuantity,
    selectedMerch,
    setSelectedMerch,
    selectedSize,
    setSelectedSize,
    merchQuantityError,
    setMerchSelectionError,
    setMerchAtcClicked,
    merchAtcClicked,
    merchSizeError,
    setMerchSizeError,
  } = useAppContext();

  useEffect(() => {
    console.log("MerchSelect mounted. Resetting selectedMerch and errors.");
    setSelectedMerch(null);
    setMerchSelectionError(false);
    setMerchAtcClicked(false);
    setMerchSizeError(false);
  }, [
    setSelectedMerch,
    setMerchSelectionError,
    setMerchAtcClicked,
    setMerchSizeError,
  ]);

  const handleOnChange = (values) => {
    console.log("Merch selected:", values);
    handleProductSelection(values, setSelectedMerch, setMerchQuantity);
    setMerchSizeError(false); // Reset size error on new selection
    if (merchAtcClicked) {
      setMerchAtcClicked(false);
      console.log("handleOnChange reset merchAtcClicked to false");
    }
  };

  const handleSizeChange = (size, productId) => {
    setSelectedSize(size);
    setSelectedMerch({ value: productId, label: `T-Shirt - ${size}` });
    if (merchAtcClicked) {
      setMerchAtcClicked(false);
      console.log("handleSizeChange reset merchAtcClicked to false");
    }
  };

  useEffect(() => {
    console.log("selectedMerch changed:", selectedMerch);
    if (
      selectedMerch &&
      selectedMerch.label.includes("T-Shirt") &&
      !selectedSize
    ) {
      setMerchSizeError(true);
    } else {
      setMerchSizeError(false);
    }
  }, [selectedMerch, selectedSize, setMerchSizeError]);

  return (
    <div className="prod-select-details">
      <div className="prod-name-quantity">
        <Select
          className="select-menu"
          options={options}
          onChange={handleOnChange}
          labelField="label"
          valueField="value"
          searchable={false}
        />
        {selectedMerch && <MerchQuantity />}
      </div>

      <div className="atc-details">
        {selectedMerch?.label.includes("T-Shirt") && (
          <ShirtSizes
            selectedSize={selectedSize}
            onSizeChange={handleSizeChange}
          />
        )}
        
          <MerchAtcButton />
          {(!selectedMerch || merchQuantityError || merchSizeError) && (
            <MerchAtcError />
          )}
        
      </div>
    </div>
  );
};

MerchSelect.propTypes = {
  onSelectChange: PropTypes.func,
};

export default MerchSelect;
