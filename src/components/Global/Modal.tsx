'use client'
import React, { useState } from "react";

type ModalType = {
  isOpen: boolean;
 bgImage?:string;
  closeModal: () => void;
  children:React.ReactNode
};

const FullScreenModal = ({ isOpen, closeModal,children,bgImage }: ModalType) => {

  return (
    <>
    {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50"  style={{
          backgroundImage:
            `url(${bgImage})`,
        }}>
          <div className="relative w-[100%] h-full p-6 bg-black bg-opacity-70 text-white">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-900 text-5xl"
            >
              ✕
            </button>
           <div>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default FullScreenModal;
