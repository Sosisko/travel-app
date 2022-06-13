import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Content from './components/Content/Content';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Sidebar />
        <Content />
      </div>
    </Router>
  );
}

export default App;
