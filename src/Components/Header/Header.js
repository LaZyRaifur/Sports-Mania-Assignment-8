import React from "react";
import "../Header/Header.css";
import banner from "../images/header-images.jpg";

const Header = () => {
  return (
    <div className="header-container">
      <img src={banner} alt="" />
      <div className="title">
        <h1>Super League 2021</h1>
      </div>
    </div>
  );
};

export default Header;
