import React from "react";
import logo from "../assets/logo-light.svg";
import { sideBarMenu } from "../ultis/menu";
import { NavLink } from "react-router-dom";

const activeStyle =
  "py-2 px-[25px] font-semibold flex gap-[12px] text-[#0F7070] text-[13px]";
const notActiveStyle =
  "py-2 px-[25px] font-semibold flex gap-[12px] text-[#2a3030] text-[13px]";

const sidebarLeft = () => {
  return (
    <div className="flex h-full flex-col bg-main-200">
      <div className="w-full h-[70px] py-[15px] px-[25px] flex align-middle">
        <img
          src={logo}
          alt="logo"
          className="w-[120px] h-[40px] object-contain"
        />
      </div>
      <div className="flex flex-col">
        {sideBarMenu.map((item) => {
          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              className={({ isActive }) => {
                console.log(isActive);
                return isActive ? activeStyle : notActiveStyle;
              }}
            >
              {item.icon}
              <span>{item.text}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default sidebarLeft;
