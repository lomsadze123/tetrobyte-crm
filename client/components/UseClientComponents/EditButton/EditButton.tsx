"use client";
import deleteStudent from "@/_actions/deleteStudent/deleteStudent";
import AddNewStudent from "@/components/AddNewStudent/AddNewStudent";
import PopUpContainer from "@/components/PopUpContainer/PopUpContainer";
import titles from "@/data/EditButtonTitles";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditButton = ({ id }: { id: string }) => {
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

  return (
    <>
      <ToastContainer />
      {show && (
        <PopUpContainer title={titles[activeIndex]} setShow={setShow}>
          {activeIndex === 0 && <AddNewStudent mode="view" id={id} />}
          {activeIndex === 1 && (
            <div className="flex items-center gap-2 mt-14">
              <button
                onClick={handleDeleteStudent}
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
          {activeIndex === 2 && (
            <AddNewStudent mode="edit" id={id} setShow={setShow} />
          )}
        </PopUpContainer>
      )}
      <span className="relative">
        {selectedId === id && (
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
          onClick={handleSelectId}
          className="rotate-90 block text-xl font-bold"
        >
          ...
        </button>
      </span>
    </>
  );
};

export default EditButton;
