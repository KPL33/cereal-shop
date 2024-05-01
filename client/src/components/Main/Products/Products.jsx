import { useContext } from 'react';
import { AppContext } from '../../../context/AppContext.jsx';

import bowl from '../../../../src/assets/bowl.jpg';
import commuter from '../../../../src/assets/commuter_mug.jpg';
import mug from '../../../../src/assets/mug.jpg';
import shirt from '../../../../src/assets/shirt.jpg';

import FoodSelect from "./Select/FoodSelect.jsx";
import MerchSelect from "./Select/MerchSelect.jsx";

import "./products.css";

const Products = () => {
  const { selectedMerch } = useContext(AppContext);

  return (
    <section className="products">
      <h1 className="products-title">
        What would you like to check out today?
      </h1>
      <div className="product-card-container">
        <div className="product-card" id="food-card">
          <h2 className="product-card-title">Cereal</h2>
          <img
            className="product-card-image"
            id="food-pic"
            src={bowl}
            alt="A picture of a bowl of cereal."
          />
          <h4 className="product-card-description">
            Hungry? You&apos;re in the right place!
          </h4>
          <FoodSelect className="select-menu" />
        </div>

        <div className="product-card" id="merch-card">
          <h2 className="product-card-title">Merchandise</h2>
          <img
            className="product-card-image"
            id="merch-pic"
            src={
              selectedMerch === "mug"
                ? mug
                : selectedMerch === "commuter"
                ? commuter
                : shirt
            }
            alt="A picture of merchandise."
          />
          <h4 className="product-card-description">
            Love our products? Spread the word!
          </h4>
          <MerchSelect className="select-menu" />
        </div>

      </div>
    </section>
  );
};

export default Products;
