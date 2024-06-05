import { useState } from "react";
import Select from "react-dropdown-select";
import PropTypes from "prop-types";

import ShirtSizes from "./ShirtSizes/ShirtSizes.jsx";
import Quantity from "./Quantity/Quantity.jsx";
import AtcButton from "./AtcButton/AtcButton.jsx";
import AtcError from "./AtcError/AtcError.jsx";

import "./prod-select.css";

const options = [
  { value: "shirt", label: "T-Shirt - $6.99" },
  { value: "mug", label: "Coffee Mug - $4.99" },
  { value: "commuter", label: "Commuter Mug - $10.99" },
];

const MerchSelect = ({ onSelectChange }) => {
  const [selectedMerch, setSelectedMerch] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantityError, setQuantityError] = useState(false);

  const handleOnChange = (values) => {
    const selectedValue = values.length > 0 ? values[0].value : null;
    setSelectedMerch(selectedValue);
    if (typeof onSelectChange === "function") {
      onSelectChange(selectedValue);
    }
  };

  return (
    <div className="prod-select-details">
      <div className="prod-name-quantity">
        <Select
          className="select-menu"
          options={options}
          onChange={handleOnChange}
          labelField="label"
          searchable={false}
        />
        <Quantity />
      </div>
      <div className="atc-details">
        {selectedMerch === "shirt" && (
          <ShirtSizes
            selectedSize={selectedSize}
            onSizeChange={setSelectedSize}
          />
        )}
        <AtcButton
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          setQuantityError={setQuantityError}
        />
        {(!selectedProduct || quantityError) && <AtcError />}
      </div>
    </div>
  );
};

MerchSelect.propTypes = {
  onSelectChange: PropTypes.func,
};

export default MerchSelect;
