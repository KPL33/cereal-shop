import { useContext } from "react";
import Select from "react-dropdown-select";
import "./prod-select.css";
import { AppContext } from "../../../../context/AppContext"; // Import the AppContext

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

const Food = () => {
  const { quantity, setQuantity, selectedOption, setSelectedOption } = useContext(AppContext); // Access the context values

  const handleOnChange = (values) => {
    // Handle selected values
    console.log("Selected values:", values);
    setSelectedOption(values.length > 0 ? values[0] : null); // Update selectedOption in context
    setQuantity(1); // Reset quantity when an option is selected
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="action-buttons">
      <Select
        className="select-menu"
        options={options}
        onChange={handleOnChange}
        labelField="label" // Set labelField to "label"
        searchable={false} // Disable the search functionality
      />
      {selectedOption && ( // Render .food-quantity only when selectedOption is truthy
        <div id="food-quantity">
          <button onClick={decrementQuantity}>–</button>
          <span className="count">{quantity}</span>
          <button onClick={incrementQuantity}>+</button>
        </div>
      )}
      <button className="atc">Add to cart</button>
    </div>
  );
};

export default Food;
