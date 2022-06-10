import React from "react";
import Logo from "../Logo/Logo";
import { SidebarDate } from "./SidebarDate";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Logo className="logo" />
      <nav className="navbar">
        <ul className="navbar_items" >
          {SidebarDate.map((val, key) => {
            return (
              <li
                className="navbar_item"
                key={key}
                onClick={() => {
                  window.location.pathname = val.link;
                }}
              >
                <div className="navbar_icon">{val.icon}</div>
                <div className="navbar_title">{val.title}</div>
              </li>
            );
          })}
        </ul>

        {/* <div>
          <a className="navbar_link">
            <CottageIcon />
            Home
          </a>
        </div>
        <div>
          <a>Navigation</a>
        </div>
        <div>
          <a>Calculate</a>
        </div>
        <div>
          <a>Calendar</a>
        </div>
        <div>
          <a>Setting</a>
        </div> */}
      </nav>
    </div>
  );
};

export default Sidebar;
