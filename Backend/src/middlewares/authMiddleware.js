import { verifyToken } from "../utils/jwt.js";

export function auth(req, res, next) {
  try {
    const { authorization } = req.headers;

    // 1.validate the token
    const decoded = verifyToken(authorization);

    // 2. get user email from the token
    const { email } = decoded;

    // 3. get user by email
    next();
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
}
