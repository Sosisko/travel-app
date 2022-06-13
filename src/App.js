import React from 'react';
import './App.css';
import Content from './components/Content/Content';
import { MainRouter } from './components/MainRouter/MainRouter';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <MainRouter>
      <div className="app-wrapper">
        <Sidebar />
        <Content />
      </div>
    </MainRouter>
  );
}

export default App;
