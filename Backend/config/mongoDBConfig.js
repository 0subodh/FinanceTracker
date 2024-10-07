import mongoose from "mongoose";
const MONGO_URL = "mongodb://localhost:27017/financeTracker";

export const connectMongoDB = async () => {
  try {
    const connection = await mongoose.connect(MONGO_URL);
    connection && console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};
