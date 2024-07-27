import { connect } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL || "";

const connectDB = async () => {
  try {
    await connect(MONGODB_URL);
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
