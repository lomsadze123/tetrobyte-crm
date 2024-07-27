import { model, Schema } from "mongoose";

const studentSchema = new Schema({
  personalNumber: { type: String, required: true },
  code: { type: String },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  enrollmentYear: { type: String, required: true },
  graduationYear: { type: String },
  status: { type: String },
  school: { type: String, required: true },
  program: { type: String, required: true },
  email: { type: String },
  voucher: { type: String, required: true },
  grant: { type: String, required: true },
  citizenship: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  birthCity: { type: String, required: true },
  languageOfInstruction: { type: String, required: true },
  freshmanOrTransfer: { type: String, required: true },
  mobilitySemesterCourse: { type: Number, required: true },
});

const Student = model("Student", studentSchema);

export default Student;
