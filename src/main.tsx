import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { FormProvider } from "@/context/FormContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./RouterConfig";  


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FormProvider>
      <RouterProvider router={router} />
    </FormProvider>
  </React.StrictMode>
);
