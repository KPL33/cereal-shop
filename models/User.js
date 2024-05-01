import { DataTypes, Model } from "sequelize";
import sequelize from "../config/connection.js";

class User extends Model {}

User.init(
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: true,
    modelName: "user",
    tableName: "users",
  }
);

const associate = (models) => {
  const { Product, Cart, Purchase } = models;

  User.belongsToMany(Product, { through: "Cart", foreignKey: "userId" });
  User.hasMany(Purchase, { foreignKey: "userId" });
  User.hasOne(Cart, { foreignKey: "userId" });
};

export default { User, associate };
