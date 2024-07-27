"use server";
import { revalidatePath } from "next/cache";

const updateStudent = async (id: string, updateData: any) => {
  try {
    const response = await fetch(
      `http://localhost:3001/api/updateStudent/${id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateData),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update student");
    }

    revalidatePath("/");

    return response.json();
  } catch (error) {
    console.log("Error updating student", error);
    return {
      message: "An error occurred while updating the student",
    };
  }
};

export default updateStudent;
