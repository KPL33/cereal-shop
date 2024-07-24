import express from "express";

import createUserRouter from "./users/createUser.js";
import getUserRouter from "./users/getUser.js";

const router = express.Router();

router.use("/users", createUserRouter);
router.use("/users", getUserRouter);

export default router;
