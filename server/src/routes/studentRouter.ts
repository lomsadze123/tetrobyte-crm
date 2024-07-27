import express from "express";
import fetchStudent from "../controllers/student/fetchStudent";
import postStudent from "../controllers/student/postStudent";

const studentRouter = express.Router();

studentRouter.get("/fetchStudents", fetchStudent);
studentRouter.post("/postStudent", postStudent);

export default studentRouter;
