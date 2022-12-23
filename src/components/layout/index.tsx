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
  const [loginRoute, setLoginRoute] = useState<any>();
  const [regsiterRoute, setRegsiterRoute] = useState<any>();

  useEffect(() => {
    setLoginRoute(!window.location.pathname.includes(HideNavbar.LOGIN));
    setRegsiterRoute(!window.location.pathname.includes(HideNavbar.REGISTRER));
  }, [loginRoute, regsiterRoute]);

  return (
    <div className="flex ">
      <SidebarComponent />
      <div className="w-[80%] ml-[20%] overflow-y-auto">{children}</div>
    </div>
  );
};

export default LayoutWrapper;
