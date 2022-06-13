import React from "react";
import Logo from "../Logo/Logo";
import { SidebarDate } from "./SidebarData";
import "./Sidebar.css";

import Home from "../Content/Home/Home";
import Navigation from "../Content/Navigation/Navigation";
import Сalculate from "../Content/Calculate/Calculate";
import Calendar from "../Content/Calendar/Calendar";
import Setting from "../Content/Setting/Setting";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Logo className="logo" />
      <Router>
        <nav className="navbar">
          <ul className="navbar_items">
            {SidebarDate.map((val, key) => {
              return (
                <Link to={val.link}>
                  <li className="navbar_item" key={key}>
                    <div className="navbar_icon">{val.icon}</div>
                    <div className="navbar_title">{val.title}</div>
                  </li>
                </Link>
              );
            })}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/navigation" element={<Navigation />} />
          <Route path="/calculate" element={<Сalculate />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Sidebar;
