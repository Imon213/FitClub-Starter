import React from "react";
import "./Footer.css";
import github from "../../assets/github.png";
import linkdin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
     
      <div className="footer">
        <div className="socia-media-logo">
          <img src={github} alt="" />
          <img src={instagram} alt="" />
          <img src={linkdin} alt="" />
        </div>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="blur blur-f-1"></div>
        <div className="blur blur-f-2"></div>
      </div>
      
    </div>
  );
};

export default Footer;
