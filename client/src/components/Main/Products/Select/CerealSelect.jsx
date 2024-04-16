import Select from "react-dropdown-select";
import "./cereal-select.css";

const options = [
  {
    value: 1,
    label: "0.5 lbs. cereal - $4.99",
  },
  {
    value: 2,
    label: "2.0 lbs. cereal - $8.99",
  },
  {
    value: 3,
    label: "5.0 lbs. cereal - $12.99",
  },
  {
    value: 4,
    label: "10.0 lbs. cereal - $21.99",
  },
];

const CerealSelect = () => {
  const handleOnChange = (values) => {
    // Handle selected values
    console.log("Selected values:", values);
  };

  return (
    <div className="action-buttons">
      <button className="atc">Add to cart</button>
      <Select
        className="select-menu"
        options={options}
        onChange={handleOnChange}
        labelField="label" // Set labelField to "label"
        searchable={false} // Disable the search functionality
      />
    </div>
  );
};

export default CerealSelect;
