"use server";
import { revalidatePath } from "next/cache";

const postStudent = async (formData: FormData) => {
  try {
    const studentData = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      personalNumber: formData.get("personalNumber") as string,
      enrollmentYear: formData.get("enrollmentYear") as string,
      graduationYear: `${
        (formData.get("enrollmentYear") as string).split("-")[1]
      }-
        ${
          Number((formData.get("enrollmentYear") as string).split("-")[1]) + 1
        }`,
      birthCity: formData.get("birthCity") as string,
      dateOfBirth: formData.get("dateOfBirth") as string,
      school: formData.get("school") as string,
      program: formData.get("program") as string,
      voucher: formData.get("voucher") as string,
      grant: formData.get("grant") as string,
      citizenship: formData.get("citizenship") as string,
      freshmanOrTransfer: formData.get("freshmanOrTransfer") as string,
      languageOfInstruction: formData.get("languageOfInstruction") as string,
      mobilitySemesterCourse: (formData.get("mobilitySemesterCourse") ??
        6) as number,
      agent: formData.get("agent") as string,
    };

    const response = await fetch("http://localhost:3001/api/postStudent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studentData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    revalidatePath("/");
    return { success: true, message: "Created successfully" };
  } catch (error) {
    console.log("Error while creating Student", error);
    return {
      success: false,
      message: "An error occurred while creating the Student",
    };
  }
};

export default postStudent;
