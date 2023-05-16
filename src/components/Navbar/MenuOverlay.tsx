import React from "react";
import "./index.css";
import Link from "next/link";

const MenuOverlay: React.FC<{
  navbarOpen: boolean;
  setNavbarOpen: any;
}> = ({ navbarOpen, setNavbarOpen }) => {
  return (
    <nav
      className={`fixed flex  top-0 left-0 w-full sm:w-[85vw] md:w-[65vw] px-12 sm:px-24 z-10 h-screen pt-24 bg-gray-900 transform delay-100 transition duration-500 ease-in-out ${
        navbarOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
      }`}
    >
      <div className="flex flex-col justify-between">
        <div>
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
                <h1>PROPERTIES</h1>
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
                <h1>GALLERY</h1>
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
        </div>

        <div className="flex flex-row justify-between pb-14">
          <div>
            <Link
              href="/"
              className="text-sm text-white focus:outline-none tracking-normal opacity-50 hover:opacity-100 hover:pl-8 transition-all duration-200 ease-in-out"
              onClick={() => {
                setNavbarOpen(false);
              }}
            >
              <h6>PROJECTS PROGRESS</h6>
            </Link>
            <Link
              href="/"
              className="text-sm text-white focus:outline-none tracking-normal opacity-50 hover:opacity-100 hover:pl-8 transition-all duration-200 ease-in-out"
              onClick={() => {
                setNavbarOpen(false);
              }}
            >
              <h6>TEAM</h6>
            </Link>
            <Link
              href="/"
              className="text-sm text-white focus:outline-none tracking-normal opacity-50 hover:opacity-100 hover:pl-8 transition-all duration-200 ease-in-out"
              onClick={() => {
                setNavbarOpen(false);
              }}
            >
              <h6>NEWS AND OFFERS</h6>
            </Link>
            <Link
              href="/"
              className="text-sm text-white focus:outline-none tracking-normal opacity-50 hover:opacity-100 hover:pl-8 transition-all duration-200 ease-in-out"
              onClick={() => {
                setNavbarOpen(false);
              }}
            >
              <h6>WHY US!</h6>
            </Link>
          </div>
          <div className="text-white opacity-50">
            <p>
              JCX Business Tower Plot 1136/A,
              <br />
              Japan Street, Block # I, <br />
              Bashundhara R/A, Dhaka - 1229,
              <br /> Bangladesh
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MenuOverlay;
