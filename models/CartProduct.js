import { DataTypes, Model } from "sequelize";
import sequelize from "../config/connection.js";
import Cart from "./Cart.js"; // Import Cart model
import Product from "./Product.js"; // Import Product model

class CartProduct extends Model {}

CartProduct.init(
  {
    cartId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Cart,
        key: "id",
      },
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Product,
        key: "id",
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    productTotal: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    // Adding column for storing cart total
    cartTotal: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "CartProduct",
    tableName: "cartProducts",
  }
);

// Define associations
const associate = () => {
  // Establish associations with other models
  CartProduct.belongsTo(Cart, { foreignKey: "cartId" });
  CartProduct.belongsTo(Product, { foreignKey: "productId" });
};

// Call associate function to establish associations
associate();

export default CartProduct;
