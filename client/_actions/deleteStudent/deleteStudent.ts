"use server";
import { revalidatePath } from "next/cache";

const API_URL = "https://tetrobyte-crm.onrender.com";

const deleteStudent = async (id: string) => {
  try {
    const response = await fetch(`${API_URL}/api/deleteStudent/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("deleted successfully");

    if (!response.ok) {
      throw new Error("Failed to delete student");
    }

    revalidatePath("/");

    return { message: "Student deleted successfully" };
  } catch (error) {
    console.log("Error deleting student", error);
    return {
      message: "An error occurred while deleting the user",
    };
  }
};

export default deleteStudent;
