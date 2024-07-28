import fetchStudent from "@/_actions/fetchSingleStudent/fetchSingleStudent";
import postStudent from "@/_actions/postStudent/postStudent";
import updateStudent from "@/_actions/updateStudent/updateStudent";
import { useEffect, useState } from "react";

const useStudent = ({
  mode,
  id,
}: {
  mode: "view" | "edit" | "add";
  id: string;
}) => {
  const isReadOnly = mode === "view";
  const [student, setStudent] = useState<StudentsTypes["students"][0] | null>(
    null
  );

  useEffect(() => {
    if (mode !== "add") {
      const handleFetchStudent = async () => {
        const response = await fetchStudent(id);
        setStudent(response.student);
      };

      handleFetchStudent();
    }
  }, [id, mode]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const studentData = Object.fromEntries(formData.entries());

    if (mode === "add") {
      await postStudent(new FormData(e.currentTarget));
    } else if (mode === "edit") {
      await updateStudent(id, studentData);
    }
  };

  return { handleSubmit, isReadOnly, student };
};

export default useStudent;
