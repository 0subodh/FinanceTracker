import express from "express";
import { insertUser } from "../models/user/userModel.js";
const router = express.Router();

// User SignUp
router.post("/", async (req, res) => {
  try {
    const user = await insertUser(req.body);
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
