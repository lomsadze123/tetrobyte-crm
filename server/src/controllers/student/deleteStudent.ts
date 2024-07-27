import Student from "../../models/student/student";
import { Request, Response } from "express";

const deleteStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedStudent = await Student.findByIdAndDelete(id);

    if (!deletedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    console.log("deleted successfully");

    res
      .status(202)
      .json({ message: "Student deleted successfully", deletedStudent });
  } catch (error) {
    console.log("Error deleting student", error);
    res
      .status(500)
      .json({ message: "Internal server error (Deleting student)" });
  }
};

export default deleteStudent;
