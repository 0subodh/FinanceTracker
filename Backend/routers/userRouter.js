import express from "express";
import { insertUser } from "../models/user/userModel.js";
import { generateHash } from "../utils/bcrypt.js";
const router = express.Router();

// User SignUp
router.post("/", async (req, res) => {
  try {
    req.body.password = generateHash(req.body.password);
    await insertUser(req.body);
    res.json({
      status: "success",
      message: "Your Account Has Been Created",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

export default router;
