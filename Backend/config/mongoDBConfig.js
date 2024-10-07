import mongoose from "mongoose";
const MONGO_URL = "mongodb://localhost:27017/financeTracker";

export const connectMongoDB = async () => {
  try {
    const connnection = await mongoose.connect(MONGO_UR);
    connection && console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};
