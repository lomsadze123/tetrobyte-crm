import express from "express";
import fetchStudent from "../controllers/student/fetchStudent";
import postStudent from "../controllers/student/postStudent";
import deleteStudent from "../controllers/student/deleteStudent";
import fetchSingleStudent from "../controllers/student/fetchSingleStudent";
import updateStudent from "../controllers/student/updateStudent";

const studentRouter = express.Router();

studentRouter.get("/fetchStudents", fetchStudent);

studentRouter.post("/postStudent", postStudent);

studentRouter.delete("/deleteStudent/:id", deleteStudent);

studentRouter.get("/fetchStudent/:id", fetchSingleStudent);

studentRouter.put("/updateStudent/:id", updateStudent);

export default studentRouter;
