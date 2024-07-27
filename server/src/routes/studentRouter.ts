import express from "express";
import fetchStudent from "../controllers/student/fetchStudent";
import postStudent from "../controllers/student/postStudent";
import deleteStudent from "../controllers/student/deleteStudent";

const studentRouter = express.Router();

studentRouter.get("/fetchStudents", fetchStudent);
studentRouter.post("/postStudent", postStudent);

studentRouter.delete("/deleteStudent/:id", deleteStudent);

export default studentRouter;
