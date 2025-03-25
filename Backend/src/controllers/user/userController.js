import { generateHash, comparePassword } from "../../utils/bcrypt.js";
import User from "../../models/user/userSchema.js";
import { generateToken } from "../../utils/jwt.js";

export const createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ status: "error", message: "All fields are required" });
    }

    const hashedPassword = await generateHash(password);

    const user = await User.create({ name, email, password: hashedPassword });

    res.status(201).json({
      status: "success",
      message: "Your Account Has Been Created",
      user,
    });
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      return res.status(400).json({
        status: "error",
        message: "Email already exists",
      });
    }
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ status: "error", message: "All fields are required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ status: "error", message: "User not found" });
    }

    const isMatch = await comparePassword(password, user.password);

    if (!isMatch) {
      return res
        .status(400)
        .json({ status: "error", message: "Invalid credentials" });
    }

    const accessToken = generateToken({ email: email });

    user.password = undefined;

    res.status(200).json({
      status: "success",
      message: "Logged in successfully",
      user,
      accessToken,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
