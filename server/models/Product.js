import { DataTypes, Model } from "sequelize";
import sequelize from "../config/connection.js";
import Cart from "./Cart.js"; // Import Cart model
import Purchase from "./Purchase.js"; // Import Purchase model

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
      allowNull: true,
      defaultValue: 0,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    value: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: "product",
    underscored: true,
  }
);

const associate = (models) => {
  const { User } = models;

  // Association with Cart model (many-to-many)
  Product.belongsToMany(User, { through: Cart, foreignKey: "productId" });

  // Association with Purchase model (many-to-many)
  Product.belongsToMany(User, { through: Purchase, foreignKey: "productId" });
};

export default { Product, associate };
