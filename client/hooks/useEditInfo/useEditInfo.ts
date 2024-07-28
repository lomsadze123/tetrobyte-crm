import deleteStudent from "@/_actions/deleteStudent/deleteStudent";
import { useState } from "react";
import { toast } from "react-toastify";

const useEditInfo = ({ id }: { id: string }) => {
  const [selectedId, setSelectedId] = useState("");
  const [show, setShow] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleSelectId = () => {
    setSelectedId((prev) => (prev === id ? "" : id));
  };

  const handleShowPopUp = (index: number) => {
    setShow(true);
    setActiveIndex(index);
    index !== 1 ? setSelectedId("") : setSelectedId("id");
  };

  const handleDeleteStudent = async () => {
    try {
      await deleteStudent(id);
      setShow(false);
      toast.success("წარმატებით წაიშალა !");
    } catch (error) {
      console.log(error);
    }
  };
  return {
    handleSelectId,
    handleShowPopUp,
    handleDeleteStudent,
    selectedId,
    show,
    activeIndex,
    setShow,
  };
};

export default useEditInfo;
