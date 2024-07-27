"use client";

const ClosePopUp = ({
  title,
  setShow,
}: {
  title: string;
  setShow: (show: boolean) => void;
}) => {
  return (
    <>
      <h1>{title}</h1>
      <button onClick={() => setShow(false)}>X</button>
    </>
  );
};

export default ClosePopUp;
