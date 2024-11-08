import express from "express";
import cors from "cors";
const app = express();
import userRouter from "./routers/userRouter.js";
import { connectMongoDB } from "./config/mongoDBConfig.js";

const PORT = process.env.PORT || 8000;
connectMongoDB();

// Middlewares
app.use(express.json());
app.use(cors());

app.use("/api/v1/users", userRouter);

app.get("/", (req, res) => {
  res.json({
    message: "Sever is Live",
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server Running at localhost: ${PORT}`);
});
