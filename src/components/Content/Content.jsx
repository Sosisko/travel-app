import React from 'react';
import './Content.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home/Home'
import Navigation from './Navigation/Navigation'
import Calendar from './Calendar/Calendar'
import Setting from './Setting/Setting'
import Сalculate from './Calculate/Calculate'

const Content = () => {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navigation" element={<Navigation />} />
        <Route path="/calculate" element={<Сalculate />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
      {/* <img src="https://images.unsplash.com/photo-1542332213-31f87348057f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" /> */}
    </div>
  );
};

export default Content;
