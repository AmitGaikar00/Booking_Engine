import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

const App: React.FC = () => {

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
