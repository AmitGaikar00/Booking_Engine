import { Loader2 } from "lucide-react";
import React from "react";

const Spinner: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto grid h-screen place-content-center">
      <Loader2 className="mr-2 h-8 w-8 animate-spin text-primary" />
    </div>
  );
};

export default Spinner;
