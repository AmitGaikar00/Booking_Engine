import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { FormProvider } from "@/context/FormContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Spinner from "./components/shared/Spinner";

const Form1 = lazy(() => import("./pages/Form1"));
const Form2 = lazy(() => import("./pages/Form2"));
const Success = lazy(() => import("./pages/Success"));
const Failure = lazy(() => import("./pages/Failure"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ParticipantDetails = lazy(() => import("./pages/ParticipantDetails"));
const ConfirmBooking = lazy(() => import("./pages/ConfirmBooking"));
const HeroSection = lazy(() => import("./components/shared/HeroSection"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Spinner width="12" height="12" />}>
        <HeroSection />
      </Suspense>
    ),
  },
  {
    path: "/",
    element: (
      <Suspense fallback={<Spinner width="12" height="12" />}>
        <App />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<Spinner width="12" height="12" />}>
        <NotFound />
      </Suspense>
    ),
    children: [
      {
        path: "/booking/form1/:tripName",
        element: (
          <Suspense fallback={<Spinner width="12" height="12" />}>
            <Form1 />
          </Suspense>
        ),
      },
      {
        path: "/booking/form2",
        element: (
          <Suspense fallback={<Spinner width="12" height="12" />}>
            <Form2 />
          </Suspense>
        ),
      },
      {
        path: "/success",
        element: (
          <Suspense fallback={<Spinner width="12" height="12" />}>
            <Success />
          </Suspense>
        ),
      },
      {
        path: "/failure",
        element: (
          <Suspense fallback={<Spinner width="12" height="12" />}>
            <Failure />
          </Suspense>
        ),
      },
      {
        path: "booking/participants/:tripId",
        element: (
          <Suspense fallback={<Spinner width="12" height="12" />}>
            <ParticipantDetails />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<Spinner width="12" height="12" />}>
        <NotFound />
      </Suspense>
    ),
  },
  {
    path: "/confirm",
    element: (
      <Suspense fallback={<Spinner width="12" height="12" />}>
        <ConfirmBooking />
      </Suspense>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FormProvider>
      <RouterProvider router={router} />
    </FormProvider>
  </React.StrictMode>
);
