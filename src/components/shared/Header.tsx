import React from "react";
import { Check } from "lucide-react";

interface HeaderProps {
  Heading: string;
  tripName: string;
  step: number;
}

const Header: React.FC<HeaderProps> = ({ Heading, tripName, step }) => {
  return (
    <div className="mx-auto max-w-lg text-center bg-slate-100 py-4">
      {step === 1 && (
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="w-3 h-3 bg-primary rounded-full">
            <Check className="text-white h-3 w-3 flex items-center justify-center" />
          </div>
          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        </div>
      )}
      {step === 2 && (
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="w-3 h-3 bg-primary rounded-full">
            <Check className="text-white h-3 w-3 flex items-center justify-center" />
          </div>
          <div className="w-3 h-3 bg-primary rounded-full">
            <Check className="text-white h-3 w-3 flex items-center justify-center" />
          </div>
          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        </div>
      )}

      {step === 3 && (
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="w-3 h-3 bg-primary rounded-full">
            <Check className="text-white h-3 w-3 flex items-center justify-center" />
          </div>
          <div className="w-3 h-3 bg-primary rounded-full">
            <Check className="text-white h-3 w-3 flex items-center justify-center" />
          </div>
          <div className="w-3 h-3 bg-primary rounded-full">
            <Check className="text-white h-3 w-3 flex items-center justify-center" />
          </div>
        </div>
      )}
      <h1 className="text-2xl font-bold sm:text-3xl">{Heading}</h1>

      <p className="mt-4 text-gray-500 font-semibold">{tripName}</p>
    </div>
  );
};

export default Header;
