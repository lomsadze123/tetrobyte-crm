import { Request, Response } from "express";
import Student from "../../models/student/student";

const updateStudent = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updateData = req.body;
  try {
    const updatedStudent = await Student.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    console.log("Updated successfully");

    res.status(200).json(updatedStudent);
  } catch (error) {
    console.log("Error while updating student", error);
    res
      .status(500)
      .json({ message: "An error occurred while updating the student" });
  }
};

export default updateStudent;
