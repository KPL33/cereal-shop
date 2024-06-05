import { useEffect } from "react";
import useAppContext from "../../../../context/useAppContext";
import Select from "react-dropdown-select";
import Quantity from "./Quantity/Quantity.jsx";
import AtcButton from "./AtcButton/AtcButton.jsx";
import AtcError from "./AtcError/AtcError.jsx";

import "./prod-select.css";
import { handleProductSelection } from "../../../../../../utils/addToCart.js";

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

const FoodSelect = () => {
  const {
    setFoodQuantity,
    selectedFood,
    setSelectedFood,
    foodQuantityError,
    setSelectionError,
    setAtcClicked,
  } = useAppContext();

  useEffect(() => {
    console.log("Component mounted. Resetting selectedFood and errors.");
    // Reset selectedFood and selectionError when the component mounts
    setSelectedFood(null);
    setSelectionError(false);
    setAtcClicked(false);
  }, [setSelectedFood, setSelectionError, setAtcClicked]);

  const handleOnChange = (values) => {
    console.log("Food selected:", values);
    handleProductSelection(values, setSelectedFood, setFoodQuantity);
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
        {selectedFood && <Quantity />}
      </div>

      <div className="atc-details">
        <AtcButton />
        {(!selectedFood || foodQuantityError) && <AtcError />}
      </div>
    </div>
  );
};

export default FoodSelect;
