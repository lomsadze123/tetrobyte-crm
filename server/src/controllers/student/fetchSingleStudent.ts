import { Request, Response } from "express";
import Student from "../../models/student/student";
const fetchSingleStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    return res.status(200).json({ student });
  } catch (error) {
    console.log("Failed to fetch student", error);
    res
      .status(500)
      .json({ message: "Internal server error (fetching student)" });
  }
};

export default fetchSingleStudent;
