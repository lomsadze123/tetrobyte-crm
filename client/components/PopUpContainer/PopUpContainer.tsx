import { ReactNode } from "react";
import ClosePopUp from "../UseClientComponents/AddNew/ClosePopUp";

const PopUpContainer = ({
  title,
  setShow,
  children,
}: {
  title: string;
  setShow: (show: boolean) => void;
  children: ReactNode;
}) => {
  return (
    <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center shadow-sm">
      <div className="bg-white p-4 w-full max-w-[648px]">
        <div className="flex justify-between items-center">
          <ClosePopUp title={title} setShow={setShow} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default PopUpContainer;
