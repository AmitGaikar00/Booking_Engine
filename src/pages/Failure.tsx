import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Failure: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-5 py-10">
      {/* Centered Content */}
      <div className="flex flex-col items-center flex-grow justify-center">
        {/* Failure Symbol */}
        <div className="flex items-center justify-center rounded-full bg-red-100 mb-5 p-5">
          <div className="rounded-full bg-red-500 p-2">
            <X className="text-white h-8 w-8" />
          </div>
        </div>

        {/* Texts */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">
            Payment Failed!
          </h1>
          <p className="text-slate-500">
            Your payment failed. Please try again.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full max-w-xl">
        {/* Contact Details */}
        <div className="text-xs text-center mx-auto text-gray-700 mb-5">
          <p>
            <strong>Phone No: </strong>8668523657
          </p>
          <p>
            <strong>Mail ID: </strong>routesdeindia@gmail.com
          </p>
        </div>

        {/* Button */}
        <div className="py-5 max-w-md mx-auto">
          <Button variant="destructive" onClick={() => navigate("/")} className="w-full text-md" size="lg">
            Return to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Failure;
