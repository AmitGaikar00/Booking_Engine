import React, { useEffect } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

const App: React.FC = () => {
  useEffect(() => {
    if (navigator.userAgent.indexOf("iPhone") > -1) {
      const viewport = document.querySelector("[name=viewport]");
      if (viewport) {
        viewport.setAttribute(
          "content",
          "width=device-width, initial-scale=1, maximum-scale=1"
        );
      }
    }
  }, []);

  return (
    <main className="flex items-center justify-center">
      <div className="flex-1 max-w-lg min-h-screen overflow-y-scroll hide-scrollbar shadow-xl bg-white">
        <Outlet />
        <ScrollRestoration />
      </div>
    </main>
  );
};

export default App;
