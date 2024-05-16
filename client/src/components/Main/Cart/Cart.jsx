import { useEffect, useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import axios from "axios";

import "./cart.css";

const Cart = () => {
  const { cartProducts, setCartProducts } = useContext(AppContext);

  useEffect(() => {
    const fetchCartProducts = async () => {
      try {
        const currentCartId = localStorage.getItem("currentCartId");

        if (!currentCartId) {
          console.error("No current cart ID found in local storage.");
          return;
        }

        const response = await axios.get(
          `http://localhost:3000/carts/${currentCartId}`
        );
        const cartData = response.data;

        // Map the data to the format needed for the cart component
        const updatedProducts = cartData.Products.map((product) => ({
          id: product.id,
          productName: product.name,
          productQuantity: product.CartProduct.productQuantity,
          productPrice: product.CartProduct.productPrice,
          productTotal: product.CartProduct.productTotal,
        }));

        setCartProducts(updatedProducts);
      } catch (error) {
        console.error("Error fetching cart products:", error);
      }
    };

    fetchCartProducts();
  }, [setCartProducts]);

  return (
    <section className="cart">
      <div className="cart-container">
        <h2 className="title">Here&apos;s your cart!</h2>

        <div className="in-cart">
          <div className="category-title-area">
            <div className="product-column">
              <h3 className="column-title product-column-title">Product</h3>
            </div>
            <div className="quantity-column">
              <h3 className="column-title">Quantity</h3>
            </div>
            <div className="price-column">
              <h3 className="column-title">Price</h3>
            </div>
            <div className="prod-total-column">
              <h3 className="column-title">Product Total</h3>
            </div>
          </div>

          {cartProducts.map((product) => (
            <div key={product.id} className="cart-items">
              <div className="product-column">
                <p className="product-name">{product.productName}</p>
              </div>

              <div className="quantity-column">
                <p className="product-quantity">{product.productQuantity}</p>
              </div>

              <div className="price-column">
                <p className="product-price">${product.productPrice}</p>
              </div>

              <div className="prod-total-column">
                <p className="prod-total-price">${product.productTotal}</p>
              </div>
            </div>
          ))}
        </div>

        <div id="cart-total">
          <h3>Order Total:</h3>
          <p className="price-fineprint">(Pre-tax; Shipping is FREE!)</p>
          <p className="cart-total-dollars">
            $
            {cartProducts
              .reduce(
                (total, product) => total + parseFloat(product.productTotal),
                0
              )
              .toFixed(2)}
          </p>
        </div>

        <button className="checkout-button">
          <h4 className="checkout-text">Check out!</h4>
        </button>
      </div>
    </section>
  );
};

export default Cart;
