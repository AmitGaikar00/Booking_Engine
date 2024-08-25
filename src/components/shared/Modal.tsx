import { X } from "lucide-react";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
  isOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({ onClose, children, isOpen }) => {

  return createPortal(
    <div
      className={`p-5 fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-250 ease-in-out bg-black bg-opacity-50 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`bg-white rounded-xl w-full max-w-xl max-h-[75vh] mx-auto p-6 shadow-lg relative overflow-y-scroll hide-scrollbar scroll-smooth transform transition-transform duration-250 ease-in-out ${
          isOpen ? "scale-100" : "scale-95"
        }`}
      >
        <button
          className="absolute top-3 right-3 text-white rounded-full bg-primary hover:bg-blue-400 p-1 transition-all duration-300 ease-in-out"
          onClick={onClose}
        >
          <X className="w-4 h-4" />
        </button>
        <div className="">{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
