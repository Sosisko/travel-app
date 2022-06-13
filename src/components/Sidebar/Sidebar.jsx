import React from "react";
import Logo from "../Logo/Logo";
import { SidebarDate } from "./SidebarData";
import "./Sidebar.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Logo className="logo" />
      <nav className="navbar">
        <ul className="navbar_items">
          {SidebarDate.map((val, key) => {
            return (
              <Link to={val.link} style={{ textDecoration: "none" }}>
                <li className="navbar_item" key={key}>
                  <div className="navbar_icon">{val.icon}</div>
                  <div className="navbar_title">{val.title}</div>
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
