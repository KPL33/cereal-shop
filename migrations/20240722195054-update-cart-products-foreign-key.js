"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint(
      "cartProducts",
      "cartProducts_cartId_fkey"
    );
    await queryInterface.addConstraint("cartProducts", {
      fields: ["cartId"],
      type: "foreign key",
      name: "cartProducts_cartId_fkey",
      references: {
        table: "carts",
        field: "id",
      },
      onDelete: "CASCADE",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint(
      "cartProducts",
      "cartProducts_cartId_fkey"
    );
    await queryInterface.addConstraint("cartProducts", {
      fields: ["cartId"],
      type: "foreign key",
      name: "cartProducts_cartId_fkey",
      references: {
        table: "Cart",
        field: "id",
      },
      onDelete: "CASCADE",
    });
  },
};
