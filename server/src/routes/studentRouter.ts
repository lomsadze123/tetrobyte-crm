import express from "express";
import fetchStudent from "../controllers/student/fetchStudent";
import postStudent from "../controllers/postStudent";

const studentRouter = express.Router();

studentRouter.get("/test", fetchStudent);
studentRouter.post("/postStudent", postStudent);

export default studentRouter;
