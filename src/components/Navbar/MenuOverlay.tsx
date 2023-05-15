import React from "react";
import "./index.css";

const MenuOverlay: React.FC<{
  navbarOpen: boolean;
  setNavbarOpen: any;
}> = ({ navbarOpen, setNavbarOpen }) => {
  return (
    <nav
      className={`fixed flex top-0 left-0 w-full px-10 z-10 h-screen pt-24 bg-gray-900 transform delay-100 transition duration-500 ease-in-out ${
        navbarOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
      }`}
    >
      <ul>
        <li className="nav-li">
          <a
            href="/"
            className="nav-link"
            onClick={() => {
              setNavbarOpen(false);
            }}
          >
            Home
          </a>
        </li>
        <li className="nav-li">
          <a
            href="/"
            className="nav-link"
            onClick={() => {
              setNavbarOpen(false);
            }}
          >
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuOverlay;
