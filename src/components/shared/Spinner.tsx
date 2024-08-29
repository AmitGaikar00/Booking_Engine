import { Loader2 } from "lucide-react";
import React from "react";
import { createPortal } from "react-dom";

const Spinner: React.FC = () => {
  return createPortal(
    <div className="max-w-2xl mx-auto grid h-screen place-content-center">
      <Loader2 className="mr-2 h-8 w-8 animate-spin text-primary" />
    </div>,
    document.body
  );
};

export default Spinner;
