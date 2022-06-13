import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Calendar from '../Content/Calendar/Calendar';
import Home from '../Content/Home/Home';
import Navigation from '../Content/Navigation/Navigation';
import Setting from '../Content/Setting/Setting';
import Сalculate from '../Content/Calculate/Calculate';

export const MainRouter = ({ children }) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navigation" element={<Navigation />} />
        <Route path="/calculate" element={<Сalculate />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
      {children}
    </Router>
  );
};
