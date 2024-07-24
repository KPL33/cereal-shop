import express from "express";

import createUserRouter from "./users/createUser.js";
import loginUserRouter from "./users/loginUser.js";
import getUserRouter from "./users/getUser.js";
import editUserRouter from "./users/editUser.js";
import deleteUserRouter from "./users/deleteUser.js";

const router = express.Router();

router.use("/users", createUserRouter);
router.use("/users", loginUserRouter);
router.use("/users", getUserRouter);
router.use("/users", editUserRouter);
router.use("/users", deleteUserRouter);

export default router;
