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
      <h1 className="text-2xl text-primaryBlue font-semibold">{title}</h1>
      <button className="font-semibold text-xl" onClick={() => setShow(false)}>
        X
      </button>
    </>
  );
};

export default ClosePopUp;
