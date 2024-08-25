import { IndianRupee } from "lucide-react";
import React from "react";

interface Props {
  showDetails: boolean;
}

const BillSummary : React.FC<Props> = ({showDetails}) => {
  return (
    <div className="relative bg-slate-100">
      <div
        className={`transition-all duration-700 ease-in-out ${
          showDetails
            ? "max-h-screen opacity-100 px-8 py-4"
            : "max-h-0 opacity-0 "
        } overflow-hidden`}
      >
        <div className="">
          <h3 className="text-sm font-bold text-gray-600 pb-2 mx-auto text-center">
            Bill Summary
          </h3>
          <ul className="text-sm text-gray-600">
            <li className="flex items-center justify-between">
              <span>Total Price </span>
              <strong className="flex items-center justify-center">
                <IndianRupee className="h-2.5 w-2.5" />
                1900/-
              </strong>
            </li>
            <li className="flex items-center justify-between">
              <span>Booking amount </span>
              <strong className="flex items-center justify-center">
                {" "}
                <IndianRupee className="h-2.5 w-2.5" />
                1900/-
              </strong>
            </li>
            <li className="flex items-center justify-between">
              <span>Payment Gateway Charges </span>
              <strong className="flex items-center justify-center">
                {" "}
                <IndianRupee className="h-2.5 w-2.5" />
                500/-
              </strong>
            </li>
            <li className="flex items-center justify-between">
              <span>Final Payable amount</span>{" "}
              <strong className="flex items-center justify-center">
                {" "}
                <IndianRupee className="h-2.5 w-2.5" />
                1450/-
              </strong>
            </li>
            <br />
            <li className="flex items-center justify-between">
              <span>Payable Now </span>
              <strong className="flex items-center justify-center">
                {" "}
                <IndianRupee className="h-2.5 w-2.5" />
                1450/-
              </strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BillSummary;
