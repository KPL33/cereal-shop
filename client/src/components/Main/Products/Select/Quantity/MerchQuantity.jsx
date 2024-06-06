import useAppContext from "../../../../../context/useAppContext";
import "./quantity.css";
import {
  decrementAtc,
  incrementAtc,
} from "../../../../../../../utils/addToCart";

const MerchQuantity = () => {
  const { merchQuantity, setMerchQuantity, selectedMerch } = useAppContext();

  const handleDecrement = () => {
    decrementAtc(merchQuantity, setMerchQuantity);
  };

  const handleIncrement = () => {
    incrementAtc(merchQuantity, setMerchQuantity);
  };

  return (
    <section className="quantity-container">
      {selectedMerch && (
        <div id="merch-quantity">
          <button onClick={handleDecrement}>–</button>
          <input
            type="text"
            className="count"
            value={merchQuantity}
            onChange={(e) =>
              setMerchQuantity(parseInt(e.target.value, 10) || "")
            }
          />
          <button onClick={handleIncrement}>+</button>
        </div>
      )}
    </section>
  );
};

export default MerchQuantity;
