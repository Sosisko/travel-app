import React from "react";
import "./App.css";
import Content from "./Content/Content";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  return (
    <div className="app-wrapper">
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
