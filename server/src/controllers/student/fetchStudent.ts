import { Request, Response } from "express";
import Student from "../../models/student/student";

const fetchStudent = async (_: Request, res: Response) => {
  try {
    const students = await Student.find({});

    res.status(200).json({
      students,
    });
  } catch (error) {
    console.log("Error fetching students", error);
    res
      .status(500)
      .json({ error: "Internal Server Error (Fetching students)" });
  }
};

export default fetchStudent;
