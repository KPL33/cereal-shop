import express from "express";

import createUserRouter from "./users/createUser.js";
import loginUserRouter from "./users/loginUser.js";
import editUserRouter from "./users/editUser.js";
import getUserRouter from "./users/getUser.js";
import deleteUserRouter from "./users/deleteUser.js";

import createProductRouter from "./products/createProduct.js";
import editProductRouter from "./products/editProduct.js";
import getProductRouter from "./products/getProduct.js";
import deleteProductRouter from "./products/deleteProduct.js";

// Create a router
const router = express.Router();

// Use user routes
router.use("/users", createUserRouter);
router.use("/users", loginUserRouter);
router.use("/users", editUserRouter);
router.use("/users", getUserRouter);
router.use("/users", deleteUserRouter);

// Use product routes
router.use("/products", createProductRouter);
router.use("/products", editProductRouter);
router.use("/products", getProductRouter);
router.use("/products", deleteProductRouter);

// Export the router
export default router;
