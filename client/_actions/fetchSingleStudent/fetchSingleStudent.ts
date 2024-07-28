const API_URL = "https://tetrobyte-crm.onrender.com";

const fetchSingleStudent = async (id: string) => {
  try {
    const response = await fetch(`${API_URL}/api/fetchStudent/${id}`);

    if (!response.ok) {
      throw new Error("Failed to fetching student");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching student", error);
    return {
      message: "An error occurred while fetching the user",
    };
  }
};

export default fetchSingleStudent;
