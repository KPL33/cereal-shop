import { useContext } from "react";
import { AppContext } from "../../../../context/AppContext";
import PropTypes from "prop-types";

import Select from "react-dropdown-select";



const options = [
  {
    value: "shirt",
    label: "T-Shirt - $6.99",
  },
  {
    value: "mug",
    label: "Coffee Mug - $4.99",
  },
  {
    value: "commuter",
    label: "Commuter Mug - $10.99",
  },
];

const MerchSelect = ({ onSelectChange }) => {
  const {
    quantity,
    setQuantity,
    selectedMerch,
    setSelectedMerch,
    loggedIn,
  } = useContext(AppContext);

  const handleOnChange = (values) => {
    setSelectedMerch(values.length > 0 ? values[0].value : null);
    
    // Invoke the onSelectChange prop if it's provided
    if (typeof onSelectChange === "function") {
      onSelectChange(values.length > 0 ? values[0].value : null);
    }
  };

  const handleAddToCart = () => {
    if (loggedIn) {
      if (selectedMerch) {
        console.log("Adding to cart:", selectedMerch.label);
        // Call a function to add selected merch to cart or update parent state
        setAtcClicked(true); // Trigger an action to indicate "Add to Cart" was clicked
      }
    } else {
      console.log("User must log in to add to cart");
      // Handle login redirection or display message
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

      <button
        className="atc"
        onClick={handleAddToCart}
        disabled={!loggedIn}
        style={{ opacity: loggedIn ? 1 : 0.8, fontSize: "2rem" }}
      >
        {loggedIn ? "Add to cart" : "Login to add to cart"}
      </button>
    </div>
  );
};

// Define propTypes to validate the onSelectChange prop
MerchSelect.propTypes = {
  onSelectChange: PropTypes.func, // Expected function for onSelectChange
};

export default MerchSelect;
