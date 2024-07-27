import { Request, Response } from "express";
import Student from "../models/student/student";

const postStudent = async (req: Request, res: Response) => {
  try {
    const {
      personalNumber,
      code,
      firstName,
      lastName,
      enrollmentYear,
      graduationYear,
      status,
      school,
      program,
      email,
      voucher,
      grant,
      citizenship,
      dateOfBirth,
      birthCity,
      languageOfInstruction,
      freshmanOrTransfer,
      mobilitySemesterCourse,
    } = req.body;

    const newStudent = new Student({
      personalNumber,
      code,
      firstName,
      lastName,
      enrollmentYear,
      graduationYear,
      status,
      school,
      program,
      email,
      voucher,
      grant,
      citizenship,
      dateOfBirth,
      birthCity,
      languageOfInstruction,
      freshmanOrTransfer,
      mobilitySemesterCourse,
    });

    await newStudent.save();

    console.log("Student saved successfully");

    return res.status(200).json({
      status: "success",
      message: "Student added successfully",
    });
  } catch (error) {
    console.log("Error when add student", error);
    res.status(500).json({ status: "error", message: "Student adding failed" });
  }
};

export default postStudent;
