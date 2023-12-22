import React from "react";
import { createPortal } from "react-dom";

import { IoMdClose } from "react-icons/io";

export default function MobileMenu({ children, onClose }) {
  const root = document.getElementById("modal");
  return (
    <>
      {" "}
      {createPortal(
        <div className=" z-20 absolute left-0 top-0 right-0 bottom-0  bg-black/50 ">
          <div className=" h-screen absolute top-0 right-0 backdrop-blur-md px-5 rounded-l-lg">
            <div
              onClick={onClose}
              className="text-white w-7  h-7 cursor-pointer absolute right-4 top-4"
            >
              <IoMdClose size={28} />
            </div>
            <div className="mt-20">{children}</div>
          </div>
        </div>,
        root
      )}
    </>
  );
}
