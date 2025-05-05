"use client";
import { CloseIcon } from "@/assets/icons";
import { ModalType } from "@/types/ModalType";
import React from "react";

const Modal: React.FC<ModalType> = ({
  children,
  modalClass,
  open,
  setOpen,
}) => {
  return (
    <div
      id="modal_wrapper"
      onClick={(e) =>
        (e.target as HTMLDivElement).id == "modal_wrapper" && setOpen(false)
      }
      className={`fixed z-50 flex justify-center ${
        open ? "scale-100" : "scale-0"
      } items-center inset-0 bg-[#00000079]`}
    >
      <div
        className={`${modalClass} w-[500px] duration-400 absolute h-[420px] bg-white shadow-md flex items-center justify-center  rounded-md`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-2 right-2 cursor-pointer"
        >
          <CloseIcon />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
