import React from 'react';
import Logo from '../Logo/Logo';
import { SidebarDate } from './SidebarData';
import './Sidebar.css';

import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Logo className="logo" />
      <nav className="navbar">
        <ul className="navbar_items">
          {SidebarDate.map((val, key) => {
            return (
              <li key={key}>
                <NavLink  className="navbar_item"
                  to={val.link}
                  style={{ textDecoration: 'none' }}
                  
                >
                  <div className="navbar_icon">{val.icon}</div>
                  <div className="navbar_title">{val.title}</div>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
