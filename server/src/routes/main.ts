import express from "express";
import studentRouter from "./studentRouter";

const router = express.Router();

router.use("/", studentRouter);

export default router;
