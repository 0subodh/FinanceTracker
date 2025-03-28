import { getUserByEmail } from "../models/user/userModel.js";
import { verifyToken } from "../utils/jwt.js";

export async function auth(req, res, next) {
  try {
    // 1. recieve the token
    const { authorization } = req.headers;

    // 2.validate the token
    const decoded = verifyToken(authorization);

    // 3. get user email from the token
    const { email } = decoded;

    // 4. get user by email
    if (!email) {
      throw new Error("Invalid token");
    }
    const user = await getUserByEmail(email);
    if (user?._id) {
      user.password = undefined;
      req.user = user;
      next();
    }
    res.status(403).json({
      status: "error",
      message: "Invalid token",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
}
