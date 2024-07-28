"use client";
import AddNewStudent from "@/components/AddNewStudent/AddNewStudent";
import PopUpContainer from "@/components/PopUpContainer/PopUpContainer";
import { useState } from "react";
import PlusIcon from "@/public/plus.svg";
import Image from "next/image";

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
        className="flex items-center gap-2 bg-primaryBlue text-white py-2 px-6 rounded-lg"
      >
        <span>ახლის დამატება</span>
        <Image src={PlusIcon} alt="Plus icon" />
      </button>
    </>
  );
};

export default AddNew;
