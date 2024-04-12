import './products.css';

const Products = () => {
    return (
      <section className="products">
        <h1 className="products-title">
          What would you like to check out today?
        </h1>
        <div className="product-categories">
          <div className="product-card" id="cereal-card">
            <h2 className="product-card-title">Food</h2>
            <img
              className="product-card-image"
              id="cereal-pic"
              src=""
              alt="A picture of a bowl of cereal."
            />
            <h4 className="product-card-description">
              Hungry? You&apos;ve come to the right place!
            </h4>
          </div>

          <div className="product-card" id="merch-card">
            <h2 className="product-card-title">Merchandise</h2>
              <img
                className="product-card-image"
                id="merch-pic"
                src=""
                alt="A picture of a coffee mug."
              />
            <h4 className="product-card-description">
              Love our products? Spread the word!
            </h4>
          </div>
        </div>
      </section>
    );
};

export default Products;