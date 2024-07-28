import dotenv from "dotenv";
dotenv.config();
import express, { Express } from "express";
import cors from "cors";
import connectDB from "./config/db";
import studentRouter from "./routes/studentRouter";

const app: Express = express();
const PORT = process.env.PORT || 3001;

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api", studentRouter);

app.listen(PORT, () => console.log("Server listening on port " + PORT));
