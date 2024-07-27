"use client";

import { useState } from "react";

const EditButton = ({ id }: { id: string }) => {
  const [getId, setGetId] = useState("");
  console.log(getId);

  const handleGetId = (id: string) => {
    setGetId((prev) => (prev === id ? "" : id));
  };

  const handleShowPopUp = () => {
    setGetId("");
  };

  return (
    <>
      {getId === id && (
        <ul className="absolute p-3 -top-7 space-y-2 left-6 bg-white shadow text-left">
          <li>
            <button onClick={handleShowPopUp} className="w-36">
              დეტალურად ნახვა
            </button>
          </li>
          <li>
            <button onClick={handleShowPopUp}>წაშლა</button>
          </li>
          <li>
            <button onClick={handleShowPopUp}>რედაქტირება</button>
          </li>
        </ul>
      )}
      <button
        onClick={() => handleGetId(id)}
        className="rotate-90 block text-xl font-bold"
      >
        ...
      </button>
    </>
  );
};

export default EditButton;
