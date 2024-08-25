import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { FormProvider } from "@/context/FormContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Form1 from "./pages/Form1.tsx";
import Form2 from "./pages/Form2.tsx";
import Success from "./pages/Success.tsx";
import Failure from "./pages/Failure.tsx";
import NotFound from "./pages/NotFound.tsx";
import ParticipantDetails from "./pages/ParticipantDetails.tsx";
import ConfirmBooking from "./pages/ConfirmBooking.tsx";
import HeroSection from "./components/shared/HeroSection.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeroSection />,
  },
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/booking/form1/:tripName",
        element: <Form1 />,
      },
      {
        path: "/booking/form2",
        element: <Form2 />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/failure",
        element: <Failure />,
      },
      {
        path: "booking/participants/:tripId",
        element: <ParticipantDetails />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/confirm",
    element: <ConfirmBooking />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FormProvider>
      <RouterProvider router={router} />
    </FormProvider>
  </React.StrictMode>
);
