"use client";
import AddNewStudent from "@/components/AddNewStudent/AddNewStudent";
import PopUpContainer from "@/components/PopUpContainer/PopUpContainer";
import { useState } from "react";

const AddNew = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      {show && (
        <PopUpContainer title="ახლის დამატება" setShow={setShow}>
          <AddNewStudent mode="add" id={""} setShow={setShow} />
        </PopUpContainer>
      )}
      <button
        onClick={() => setShow(true)}
        className="bg-primaryBlue text-white py-1 px-6 rounded-lg"
      >
        ახლის დამატება
      </button>
    </>
  );
};

export default AddNew;
