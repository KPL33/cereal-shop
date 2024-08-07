import express from "express";

import createUserRouter from "./users/createUser.js";
import loginUserRouter from "./users/loginUser.js";
import getUserRouter from "./users/getUser.js";
import editUserRouter from "./users/editUser.js";
import deleteUserRouter from "./users/deleteUser.js";

import createProductRouter from "./products/createProduct.js";
import editProductRouter from "./products/editProduct.js";
import getProductRouter from "./products/getProduct.js";
import deleteProductRouter from "./products/deleteProduct.js";

import createCartRouter from "./carts/createCart.js";
import editCartRouter from "./carts/editCart.js";
import getCartRouter from "./carts/getCart.js";
import deleteCartRouter from "./carts/deleteCart.js";

import createProdInCartRouter from "./cartProducts/createProdInCart.js";
import editProdInCartRouter from "./cartProducts/editProdInCart.js";
import getProdInCartRouter from "./cartProducts/getProdInCart.js";
import deleteProdInCartRouter from "./cartProducts/deleteProdInCart.js";

import sendContactFormEmailRouter from "./sendContactFormEmail.js";

const router = express.Router();

// Routes at which each can receive requests...
router.use("/users", createUserRouter);
router.use("/users", loginUserRouter);
router.use("/users", getUserRouter);
router.use("/users", editUserRouter);
router.use("/users", deleteUserRouter);

router.use("/products", createProductRouter);
router.use("/products", editProductRouter);
router.use("/products", getProductRouter);
router.use("/products", deleteProductRouter);

router.use("/carts", createCartRouter);
router.use("/carts", editCartRouter);
router.use("/carts", getCartRouter);
router.use("/carts", deleteCartRouter);

router.use("/cart/products", createProdInCartRouter);
router.use("/cart/products", editProdInCartRouter);
router.use("/cart/products", getProdInCartRouter);
router.use("/cart/products", deleteProdInCartRouter);

router.use("/send", sendContactFormEmailRouter);

export default router;
