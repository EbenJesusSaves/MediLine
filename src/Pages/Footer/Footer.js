import React from "react";
import "./Footer.css";
import logo from "../../Images/logo.png";

const Footer = () => {
  return (
    <div className="footer text-center text-white">
      <img
        src={
          "https://smartopdweb.onrender.com/static/media/smartlogo.1da0e2d2b39c42422bb9.webp"
        }
        alt=""
        width="180"
        height="50"
      />
      <div className="container mb-3">
        <h4>Follow us</h4>
        <i className="fab fa-facebook-square mx-4"></i>
        <i className="fab fa-twitter mx-4"></i>
        <i className="fab fa-instagram mx-4"></i>
        <i className="fab fa-linkedin-in mx-4"></i>
      </div>
    </div>
  );
};

export default Footer;
