import dotenv from "dotenv";
dotenv.config();
import express, { Express } from "express";
import connectDB from "./config/db";
import router from "./routes/main";

const app: Express = express();
const PORT = process.env.PORT || 3001;

connectDB();

app.use(express.json());

app.use("/api", router);

app.listen(PORT, () => console.log("Server listening on port " + PORT));
