import useAppContext from "../../../../../context/useAppContext";
import axios from "axios";
import "./atc-button.css";

const MerchAtcButton = () => {
  const {
    loggedIn,
    selectedMerch,
    selectedSize,
    merchQuantity,
    setMerchQuantityError,
    setMerchAtcClicked,
    setMerchSelectionError,
    setMerchSizeError, // Add this line to get the setMerchSizeError setter
  } = useAppContext();

  const handleCartClick = async () => {
    setMerchAtcClicked(true);
    console.log("ATC clicked, setMerchAtcClicked(true)");

    if (!selectedMerch) {
      setMerchSelectionError(true);
      return;
    }

    if (selectedMerch?.label.includes("T-Shirt") && !selectedSize) {
      setMerchSizeError(true); // Set merchSizeError to true
      setMerchSelectionError(true);
      return;
    } else {
      setMerchSizeError(false); // Set merchSizeError to false if size is selected
    }

    if (loggedIn) {
      if (merchQuantity < 1 || merchQuantity > 99) {
        setMerchQuantityError(true);
        return;
      }

      setMerchQuantityError(false);

      try {
        const userId = localStorage.getItem("userId");
        const currentCartId = localStorage.getItem("currentCartId");

        if (!userId || !currentCartId) {
          console.error("userId or cartId not found in localStorage");
          return;
        }

        const merchItemInfoResponse = await axios.get(
          `http://localhost:3000/products/${selectedMerch.value}`
        );

        const merchItemPrice = merchItemInfoResponse.data.price;
        const merchItemTotal = merchItemPrice * merchQuantity;

        const payload = {
          userId: userId,
          cartId: currentCartId,
          merchItemId: selectedMerch.value,
          productId: selectedMerch.value,
          quantity: merchQuantity,
          merchItemPrice: merchItemPrice,
          merchItemTotal: merchItemTotal,
        };

        const response = await axios.post(
          "http://localhost:3000/cart/products/",
          payload
        );

        console.log("Merch item added to cart:", response.data);
      } catch (error) {
        console.error("Error adding merch item to cart:", error);
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

export default MerchAtcButton;
