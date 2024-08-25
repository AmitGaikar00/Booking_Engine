import React from "react";
import { Link } from "react-router-dom";

const ConfirmBooking: React.FC = () => {
  return (
    <div className="grid h-screen place-content-center bg-white px-4">
      <div className="text-center">
        <h1 className="text-7xl md:text-9xl font-black text-gray-200">Success!</h1>

        <p className="text-2xl font-bold tracking-tight sm:text-4xl text-green-500">
          your booking is confirmed
        </p>


        <Link
          to="http://routesdeindia.com/" // Use Link to navigate back to the home page
          className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
        >
          Go Back to site
        </Link>
      </div>
    </div>
  );
};

export default ConfirmBooking;
