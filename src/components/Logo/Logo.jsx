import React from "react";
import "./Logo.css";
import logo from "../../img/logo.png";

const Logo = () => {
  return (
    <>
      <h1 className="logo_title">
        <img className="logo_icon" src={logo}></img>TravelGo
      </h1>
    </>
  );
};

export default Logo;
