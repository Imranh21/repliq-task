import React, { ReactNode, useEffect, useState } from "react";
import SidebarComponent from "./sidebar";

enum HideNavbar {
  LOGIN = "login",
  REGISTRER = "register",
}

interface Props {
  children: ReactNode;
}
const LayoutWrapper = ({ children }: Props) => {
  return (
    <div className="flex ">
      <SidebarComponent />
      <div className="w-[80%] ml-[20%] overflow-y-auto">{children}</div>
    </div>
  );
};

export default LayoutWrapper;
