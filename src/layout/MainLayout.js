import React from "react";
import { MainHeader } from "../components/MainHeader";

export const MainLayout = ({ children }) => {
  return (
    <>
      <MainHeader />
      {children}
    </>
  );
};
