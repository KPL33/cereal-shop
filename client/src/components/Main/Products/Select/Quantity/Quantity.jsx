import useAppContext from "../../../../../context/useAppContext";
import "./quantity.css";
import {
  decrementAtc,
  incrementAtc,
} from "../../../../../../../utils/addToCart";

const Quantity = () => {
  const { quantity, setQuantity, selectedProduct } = useAppContext();

  const handleDecrement = () => {
    decrementAtc(quantity, setQuantity);
  };

  const handleIncrement = () => {
    incrementAtc(quantity, setQuantity);
  };

  return (
    <section className="quantity-container">
      {selectedProduct && (
        <div id="food-quantity">
          <button onClick={handleDecrement}>–</button>
          <input
            type="text"
            className="count"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value, 10) || "")}
          />
          <button onClick={handleIncrement}>+</button>
        </div>
      )}
    </section>
  );
};

export default Quantity;
