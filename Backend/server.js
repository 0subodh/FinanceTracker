import express from "express";
import cors from "cors";
const app = express();
import userRouter from "./src/routes/userRoutes.js";
import transactionRouter from "./src/routes/transactionRoutes.js";
import { connectMongoDB } from "./src/config/mongoDBConfig.js";
import { auth } from "./src/middlewares/authMiddleware.js";
import { errorHandler } from "./src/middlewares/errorHandlerMiddleware.js";

const PORT = process.env.PORT || 8000;
connectMongoDB();

// Middlewares
app.use(express.json());
app.use(cors());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/transactions", auth, transactionRouter);

app.get("/", (req, res) => {
  res.json({
    message: "Sever is Live",
  });
});

// 404 page not found
app.use("*", (req, res, next) => {
  const error = new Error("Page Not Found");
  error.statusCode = 404;
  next(error);
});

// Global Error Handler
app.use(errorHandler);

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server Running at localhost: ${PORT}`);
});
