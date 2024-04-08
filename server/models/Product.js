import { DataTypes, Model } from "sequelize";
import sequelize from "../config/connection.js";

class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    amountInStock: {
      type: DataTypes.INTEGER,
      allowNull: true, // Allow null because we'll handle default value in the hook
      defaultValue: 0, // Default value for amountInStock
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    value: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0, // Default value for value
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: "product",
    underscored: true,
    hooks: {
      // Hook called before a product is saved or updated
      beforeSave: async (product) => {
        // Ensure both price and amountInStock are not null or undefined
        if (product.price !== null && product.amountInStock !== null) {
          // Calculate the value based on price and amountInStock
          product.value = parseFloat(product.price) * product.amountInStock;
        } else {
          // If either price or amountInStock is null or undefined, set value to 0
          product.value = 0;
        }
      },
    },
  }
);

export default Product;
