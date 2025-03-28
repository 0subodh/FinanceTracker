import express from "express";
import {
  createUser,
  loginUser,
  getUser,
} from "../controllers/user/userController.js";
import { auth } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", createUser);
router.post("/login", loginUser);
router.get("/", auth, getUser);

export default router;
