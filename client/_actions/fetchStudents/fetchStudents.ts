const API_URL = "https://tetrobyte-crm.onrender.com";

const fetchStudents = async () => {
  try {
    const response = await fetch(`${API_URL}/api/fetchStudents`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  } catch (error) {
    console.log("Error while fetching students", error);
  }
};

export default fetchStudents;
