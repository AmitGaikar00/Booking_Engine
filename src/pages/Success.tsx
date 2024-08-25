import { Button } from "@/components/ui/button";
import { Check, IndianRupee } from "lucide-react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Success: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const mode = searchParams.get("mode");
  const utr = searchParams.get("utr");
  // const txnId = searchParams.get("txnId");
  const amount = searchParams.get("amount");
  const tripId = searchParams.get("tripId");
  
  const navigate = useNavigate();

  // mode=UPI
  // utr=403993715532165013
  // txnId=9105455a-83f2-4112-8264-28a915d69d78
  // amount=1990.10
  // status=success
  // message=Transaction completed successfully
  // tripId=f20bfe6f-b5eb-462f-ba07-46822826af1e 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5">
      {/* Success Symbol */}
      <div className="flex items-center justify-center rounded-full bg-green-100 p-5 mt-5">
        <div className="rounded-full bg-green-500 p-2">
          <Check className="text-white h-8 w-8" />
        </div>
      </div>

      {/* Texts */}
      <div className="flex flex-col items-center justify-center p-5 space-y-2">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">
          Payment Successful
        </h1>
        <p className="text-slate-500">
          Your Payment has been successfully done.
        </p>
      </div>

      {/* Payment Details */}
      <div className="bg-slate-100 rounded-xl w-full max-w-sm py-4 px-6 text-sm space-y-2 mt-5">
        <div className="flex items-center justify-between">
          <span>Amount:</span>{" "}
          <h1 className="font-bold text-md flex items-center">
            <IndianRupee className="h-3 w-3" />
            {amount}
          </h1>
        </div>
        <div className="flex items-center justify-between pb-2">
          <span>Payment status:</span>{" "}
          <h1 className="text-white rounded-full bg-green-500 px-2 py-0.5 text-xs">
            Success
          </h1>
        </div>

        <div className="border-t border-slate-400 "></div>

        <div className="flex items-center justify-between pt-2">
          <span>Booking ID:</span> <strong>{utr}</strong>
        </div>
        <div className="flex items-center justify-between">
          <span>payment method:</span> <strong>{mode}</strong>
        </div>
        <div className="flex items-center justify-between">
          <span>Time:</span> <strong>{new Date().toLocaleTimeString()}</strong>
        </div>
      </div>


      {/* footer */}
      <div className="py-10 mt-auto">
        {/* Note Text */}
        <p className="text-xs  mx-auto max-w-md text-gray-700 pt-6">
          <strong>Note:</strong>If you haven't received confirmation mail,
          kindly check your spam mails else contact us on below details.
        </p>

        {/* contact details */}
        <div className="text-xs text-center mx-auto max-w-md text-gray-700 pt-4">
          <p>
            <strong>Phone No: </strong>8668523657
          </p>
          <p>
            <strong>Mail ID: </strong>routesdeindia@gmail.com
          </p>
        </div>
        {/* Button */}
        <div className="pt-5">
          <Button onClick={() => navigate(`/booking/participants/${tripId}`)} className="w-full bg-primary text-md" size="lg">
            Fill the Participant details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Success;
