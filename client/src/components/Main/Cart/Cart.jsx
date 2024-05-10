import "./cart.css";

const Cart = () => {
  return (
    <section className="cart">
      <div className="cart-container">
        <h2 className="cart-title">Here&apos;s your cart!</h2>

        <div id="in-cart"></div>

        <button className="checkout-button">
          <h4 className="checkout-text">Check out!</h4>
        </button>

        <div id="cart-total">
          
        </div>
      </div>
    </section>
  );
};

export default Cart;
