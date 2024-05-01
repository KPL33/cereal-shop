import { DataTypes, Model } from "sequelize";
import sequelize from "../config/connection.js";
import User from "./User.js";
import Purchase from "./Purchase.js";

class Cart extends Model {}

Cart.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    itemTotal: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    cartTotal: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "cart",
    timestamps: false,
  }
);

const associate = (models) => {
  const { User, Purchase } = models;

  // Define associations
  Cart.belongsTo(User, { foreignKey: "userId", as: "user" }); // Each cart belongs to a user
  Cart.belongsTo(Purchase, { foreignKey: "purchaseId", as: "purchase" }); // Assuming a Cart is associated with a Purchase

  // Additional associations can be defined based on application needs
};

export default { Cart, associate };
