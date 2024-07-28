"use client";
import exportExcel from "@/_actions/exportExcel/exportExcel";
import fetchStudents from "@/_actions/fetchStudents/fetchStudents";
import ExportIcon from "@/public/export.svg";
import Image from "next/image";

const ExportButton = () => {
  return (
    <button
      className="flex items-center gap-2 border-primaryBlue border rounded-lg py-2 px-12 text-primaryBlue"
      onClick={async () => {
        const students = await fetchStudents();
        await exportExcel(students.students);
      }}
    >
      <span>ექსპორტი</span>
      <Image src={ExportIcon} alt="Export icon" />
    </button>
  );
};

export default ExportButton;
