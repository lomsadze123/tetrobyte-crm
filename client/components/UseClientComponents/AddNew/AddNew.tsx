"use client";
import AddNewStudent from "@/components/AddNewStudent/AddNewStudent";
import PopUpContainer from "@/components/PopUpContainer/PopUpContainer";
import { useState } from "react";

const AddNew = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      {show && (
        <PopUpContainer setShow={setShow}>
          <AddNewStudent />
        </PopUpContainer>
      )}
      <button
        onClick={() => setShow(true)}
        className="bg-primaryBlue text-white py-1 px-6  rounded-lg m-2"
      >
        ახლის დამატება
      </button>
    </>
  );
};

export default AddNew;
