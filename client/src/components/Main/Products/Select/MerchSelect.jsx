import Select from "react-dropdown-select";
import "./prod-select.css";

const options = [
  {
    value: 1,
    label: "T-Shirt - $6.99",
  },
  {
    value: 2,
    label: "Coffee Mug - $4.99",
  },
  {
    value: 3,
    label: "Commuter Mug - $10.99",
  },
];

const MerchSelect = () => {
  const handleOnChange = (values) => {
    // Handle selected values
    console.log("Selected values:", values);
  };

  return (
    <div className="action-buttons">
      <Select
        className="select-menu"
        options={options}
        onChange={handleOnChange}
        labelField="label" // Set labelField to "label"
        searchable={false} // Disable the search functionality, blinking cursor.
      />
      <button className="atc">Add to cart</button>
    </div>
  );
};

export default MerchSelect;
