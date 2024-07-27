"use client";
import deleteStudent from "@/_actions/deleteStudent/deleteStudent";
import AddNewStudent from "@/components/AddNewStudent/AddNewStudent";
import PopUpContainer from "@/components/PopUpContainer/PopUpContainer";
import { useState } from "react";

const EditButton = ({ id }: { id: string }) => {
  const [getId, setGetId] = useState("");
  const [show, setShow] = useState(false);
  const [askIndex, setAskIndex] = useState(-1);

  const handleGetId = (id: string) => {
    setGetId((prev) => (prev === id ? "" : id));
  };

  const handleShowPopUp = (index: number) => {
    setShow(true);
    setAskIndex(index);
  };

  const titles = [
    "დეტალურად ნახვა",
    "ნამდვილად გსურთ სტუდენტის წაშლა ?",
    "რედაქტირება",
  ];

  const handleDeleteStudent = async (id: string) => {
    try {
      await deleteStudent(id);
      setShow(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {show && (
        <PopUpContainer title={titles[askIndex]} setShow={setShow}>
          {askIndex === 0 && <AddNewStudent mode="view" id={id} />}
          {askIndex === 1 && (
            <div className="flex items-center gap-2 mt-14">
              <button
                onClick={() => handleDeleteStudent(getId)}
                className="bg-primaryBlue text-white w-full py-3 rounded-lg"
              >
                კი
              </button>
              <button
                onClick={() => setShow(false)}
                className="w-full py-3 text-primaryBlue rounded-lg bg-gray-200"
              >
                არა
              </button>
            </div>
          )}
          {askIndex === 2 && <div>Edit</div>}
        </PopUpContainer>
      )}
      <span className="relative">
        {getId === id && (
          <ul className="absolute p-3 -top-7 space-y-2 left-6 bg-white shadow text-left">
            {["დეტალურად ნახვა", "წაშლა", "რედაქტირება"].map((item, index) => (
              <li key={item}>
                <button
                  onClick={() => handleShowPopUp(index)}
                  className={`${index === 0 && "w-36"}`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        )}
        <button
          onClick={() => handleGetId(id)}
          className="rotate-90 block text-xl font-bold"
        >
          ...
        </button>
      </span>
    </>
  );
};

export default EditButton;
