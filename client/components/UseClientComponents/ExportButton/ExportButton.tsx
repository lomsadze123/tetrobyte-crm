"use client";
import exportExcel from "@/_actions/exportExcel/exportExcel";
import fetchStudents from "@/_actions/fetchStudents/fetchStudents";

const ExportButton = () => {
  return (
    <button
      className="border-primaryBlue border rounded-lg py-1 px-10 text-primaryBlue"
      onClick={async () => {
        const students = await fetchStudents();
        await exportExcel(students.students);
      }}
    >
      ექსპორტი
    </button>
  );
};

export default ExportButton;
