import fetchSingleStudent from "@/_actions/fetchSingleStudent/fetchSingleStudent";
import postStudent from "@/_actions/postStudent/postStudent";
import updateStudent from "@/_actions/updateStudent/updateStudent";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useStudent = ({
  mode,
  id,
  setShow,
}: {
  mode: "view" | "edit" | "add";
  id: string;
  setShow?: (show: boolean) => void;
}) => {
  const isReadOnly = mode === "view";
  const [student, setStudent] = useState<StudentsTypes["students"][0] | null>(
    null
  );

  useEffect(() => {
    if (mode !== "add") {
      const handleFetchStudent = async () => {
        const response = await fetchSingleStudent(id);
        setStudent(response.student);
      };

      handleFetchStudent();
    }
  }, [id, mode]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const studentData = Object.fromEntries(formData.entries());

    try {
      if (mode === "add") {
        const res = await postStudent(new FormData(e.currentTarget));

        res.success
          ? setShow && setShow(false)
          : toast.error("შეავსეთ საჭირო ინფორმაცია !");
      } else if (mode === "edit") {
        const res = await updateStudent(id, studentData);

        res
          ? setShow && setShow(false)
          : toast.error("შეავსეთ საჭირო ინფორმაცია !");
      }
    } catch (error) {}
  };

  return { handleSubmit, isReadOnly, student };
};

export default useStudent;
