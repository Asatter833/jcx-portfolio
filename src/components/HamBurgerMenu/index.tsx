"use client";

import React from "react";
import "../HamBurgerMenu/menuStyle.css";

const Index: React.FC = () => {
  return (
    <div
      className="hamburger"
      id="hamburger-11"
      onClick={(e) => e.currentTarget.classList.toggle("is-active")}
    >
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </div>
  );
};

export default Index;
