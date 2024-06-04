import useAppContext from "../../../../../context/useAppContext";
import axios from "axios";

import "./atc-button.css";

const AtcButton = () => {
  const {
    loggedIn,
    selectedProduct,
    quantity,
    setQuantityError,
    setAtcClicked,
    atcClicked,
    setSelectionError, // Add setSelectionError from context
  } = useAppContext();

  const handleCartClick = async () => {
    if (!selectedProduct) {
      setAtcClicked(true);
      setSelectionError(true); // Set selectionError to true when atc is clicked without selecting a product
      return;
    }

    if (loggedIn) {
      if (quantity < 1 || quantity > 99) {
        setQuantityError(true);
        return;
      }

      setQuantityError(false);
      setAtcClicked(true);
      console.log("atcClicked:", atcClicked);

      try {
        const userId = localStorage.getItem("userId");
        const currentCartId = localStorage.getItem("currentCartId");

        if (!userId || !currentCartId) {
          console.error("userId or cartId not found in localStorage");
          return;
        }

        const productInfoResponse = await axios.get(
          `http://localhost:3000/products/${selectedProduct.value}`
        );

        const productPrice = productInfoResponse.data.price;
        const productTotal = productPrice * quantity;

        const payload = {
          userId: userId,
          cartId: currentCartId,
          productId: selectedProduct.value,
          quantity: quantity,
          productPrice: productPrice,
          productTotal: productTotal,
        };

        const response = await axios.post(
          "http://localhost:3000/cart/products/",
          payload
        );

        console.log("Item added to cart:", response.data);
      } catch (error) {
        console.error("Error adding item to cart:", error);
      }
    }
  };

  return (
    <section className="atc-details">
      <button
        className="atc"
        onClick={handleCartClick}
        disabled={!loggedIn}
        style={{ opacity: loggedIn ? 1 : 0.8, fontSize: "2rem" }}
      >
        {loggedIn ? "Add to cart" : "Login to add to cart"}
      </button>
    </section>
  );
};

export default AtcButton;
