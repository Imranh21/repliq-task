import React, { useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SidebarConstants } from "../../../constants/sidebar";

const SidebarComponent = () => {
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    localStorage.removeItem("token");
    navigate("login");
  }, [navigate]);

  return (
    <div className="sidebar flex flex-col w-[20%] fixed top-0 bottom-0 text-gray-900 lg:left-0 p-2 overflow-y-auto text-center bg-gray-50">
      <div className="text-gray-100 text-xl">
        <div
          onClick={() => navigate("/")}
          className="p-2.5 mt-1 flex items-center"
        >
          <h1 className="font-bold text-gray-900 text-[15px] ml-2">
            Repliq-Taks
          </h1>
        </div>
        <div className="my-2 bg-gray-200 h-[1px]"></div>
      </div>

      {SidebarConstants.map((sidebarItem) => (
        <NavLink
          style={({ isActive }) => {
            return { color: isActive ? "green" : "#264653" };
          }}
          to={sidebarItem?.route}
          key={sidebarItem.id}
          className="p-2.5 text-[15px]  text-gray-900 font-bold mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-100 text-white"
        >
          {sidebarItem?.text}
        </NavLink>
      ))}

      <p
        onClick={handleLogout}
        className="mt-auto p-2.5 text-[15px]  text-gray-900 font-bold mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-100 text-gray-800"
      >
        Logout
      </p>
    </div>
  );
};

export default SidebarComponent;
