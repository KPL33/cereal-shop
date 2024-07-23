import express from "express";

import createUserRouter from "./users/createUser.js";

const router = express.Router();

router.use("/users", createUserRouter);

export default router;
