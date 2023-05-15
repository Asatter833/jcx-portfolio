import React from "react";
import "./hoverStyle.css";

const Index: React.FC = () => {
  return (
    <div className="container">
      <a href="#" className="button">
        <div className="button__line"></div>
        <div className="button__line"></div>
        <span className="button__text">CONTACT US</span>
      </a>
    </div>
  );
};

export default Index;
