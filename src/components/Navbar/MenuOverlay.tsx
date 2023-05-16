import React from "react";
import "./index.css";
import Link from "next/link";

const MenuOverlay: React.FC<{
  navbarOpen: boolean;
  setNavbarOpen: any;
}> = ({ navbarOpen, setNavbarOpen }) => {
  return (
    <nav
      className={`fixed flex  top-0 left-0 w-full sm:w-[65vw] px-24 z-10 h-screen pt-24 bg-gray-900 transform delay-100 transition duration-500 ease-in-out ${
        navbarOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
      }`}
    >
      <ul>
        <li className="nav-li">
          <Link
            href="/"
            className="nav-link"
            onClick={() => {
              setNavbarOpen(false);
            }}
          >
            <h1>HOME</h1>
          </Link>
        </li>
        <li className="nav-li">
          <Link
            href="/about"
            className="nav-link"
            onClick={() => {
              setNavbarOpen(false);
            }}
          >
            <h1>ABOUT</h1>
          </Link>
        </li>
        <li className="nav-li">
          <Link
            href="/projects"
            className="nav-link"
            onClick={() => {
              setNavbarOpen(false);
            }}
          >
            <h1>PROJECTS</h1>
          </Link>
        </li>
        <li className="nav-li">
          <Link
            href="/news"
            className="nav-link"
            onClick={() => {
              setNavbarOpen(false);
            }}
          >
            <h1>NEWS & BLOGS</h1>
          </Link>
        </li>
        <li className="nav-li">
          <Link
            href="/career"
            className="nav-link"
            onClick={() => {
              setNavbarOpen(false);
            }}
          >
            <h1>CAREER</h1>
          </Link>
        </li>
        <li className="nav-li">
          <Link
            href="/contact"
            className="nav-link"
            onClick={() => {
              setNavbarOpen(false);
            }}
          >
            <h1>CONTACT</h1>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuOverlay;
