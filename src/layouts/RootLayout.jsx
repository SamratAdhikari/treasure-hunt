import React from "react";
import { Outlet } from "react-router-dom";
import ToggleSelectionBar from "../components/Quiz/ToggleSelectionBar";

const RootLayout = () => {
  return (
    <div>
      <main>
        <ToggleSelectionBar/>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;