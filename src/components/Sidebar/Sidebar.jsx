import React from "react";
import Logo from "../Logo/Logo";
import { SidebarDate } from "./SidebarData";
import "./Sidebar.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Logo className="logo" />
      <Router>
        <nav className="navbar">
          <ul className="navbar_items">
            {SidebarDate.map((val, key) => {
              return (
                <li className="navbar_item" key={key} Link to={val.link}>
                  <div className="navbar_icon">{val.icon}</div>
                  <div className="navbar_title">{val.title}</div>
                </li>
              );
            })}
          </ul>
        </nav>
        
      </Router>
    </div>
  );
};

export default Sidebar;
