import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in environment variables");
}

const DEFAULT_OPTIONS = {
  expiresIn: "7d",
  algorithm: "HS256",
};

export const generateToken = ({ email }) => {
  try {
    // Include only necessary non-sensitive data
    const payload = {
      email,
    };

    return jwt.sign(payload, JWT_SECRET, DEFAULT_OPTIONS);
  } catch (error) {
    console.error("JWT generation error:", error);
    throw new Error("Failed to generate authentication token");
  }
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET, { algorithms: ["HS256"] });
  } catch (error) {
    console.error("JWT verification error:", error);

    // Provide specific error messages
    if (error.name === "TokenExpiredError") {
      throw new Error("Authentication token has expired");
    }
    if (error.name === "JsonWebTokenError") {
      throw new Error("Invalid authentication token");
    }

    throw new Error("Failed to verify authentication token");
  }
};
