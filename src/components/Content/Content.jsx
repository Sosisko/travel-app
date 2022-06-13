import React from 'react';
import './Content.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Navigation from './Navigation/Navigation';
import Calendar from './Calendar/Calendar';
import Сalculate from './Calculate/Calculate';
import Setting from './Setting/Setting';

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
    </div>
  );
};



export default Content;
