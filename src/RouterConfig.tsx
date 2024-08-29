/* eslint-disable react-refresh/only-export-components */
import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
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

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Spinner />}>
        <HeroSection />
      </Suspense>
    ),
  },
  {
    path: "/",
    element: (
      <Suspense fallback={<Spinner />}>
        <App />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<Spinner />}>
        <NotFound />
      </Suspense>
    ),
    children: [
      {
        path: "/booking/form1/:tripName",
        element: (
          <Suspense fallback={<Spinner />}>
            <Form1 />
          </Suspense>
        ),
      },
      {
        path: "/booking/form2",
        element: (
          <Suspense fallback={<Spinner />}>
            <Form2 />
          </Suspense>
        ),
      },
      {
        path: "/success",
        element: (
          <Suspense fallback={<Spinner />}>
            <Success />
          </Suspense>
        ),
      },
      {
        path: "/failure",
        element: (
          <Suspense fallback={<Spinner />}>
            <Failure />
          </Suspense>
        ),
      },
      {
        path: "booking/participants/:tripId",
        element: (
          <Suspense fallback={<Spinner />}>
            <ParticipantDetails />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<Spinner />}>
        <NotFound />
      </Suspense>
    ),
  },
  {
    path: "/confirm",
    element: (
      <Suspense fallback={<Spinner />}>
        <ConfirmBooking />
      </Suspense>
    ),
  },
]);
