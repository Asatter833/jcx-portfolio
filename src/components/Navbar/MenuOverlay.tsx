import React from "react";
import "../../styles/globals.css";
import Link from "next/link";

const MenuOverlay: React.FC<{
  navbarOpen: boolean;
  setNavbarOpen: any;
}> = ({ navbarOpen, setNavbarOpen }) => {
  return (
    <>
      <div
        className={`h-screen w-full bg-slate-800 bg-opacity-70 ${
          navbarOpen ? "fixed" : "hidden"
        } top-[72px] left-0 transition duration-200
        `}
        onClick={() => setNavbarOpen((n: any) => !n)}
      />
      <nav
        className={`fixed flex top-0 left-0 w-full sm:w-[85vw] md:w-[65vw] px-12 sm:px-24 z-10 h-screen overflow-y-auto pt-24 bg-gray-900 transform delay-100 transition duration-500 ease-in-out ${
          navbarOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-full"
        }`}
      >
        <div className="flex flex-col justify-between h-full w-full">
          <div className="pb-2">
            <ul>
              <li className="nav-li">
                <Link
                  href="/"
                  className="nav-link"
                  onClick={() => {
                    setNavbarOpen(false);
                  }}
                >
                  <h1 className="[&>span]:text-line-color">
                    HO<span>ME</span>
                  </h1>
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
                  <h1 className="[&>span]:text-line-color">
                    AB<span>OUT</span>
                  </h1>
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
                  <h1 className="[&>span]:text-line-color">
                    PR<span>OPERTIES</span>
                  </h1>
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
                  <h1 className="[&>span]:text-line-color">
                    GA<span>LLERY</span>
                  </h1>
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
                  <h1 className="[&>span]:text-line-color">
                    NE<span>WS & BLOGS</span>
                  </h1>
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
                  <h1 className="[&>span]:text-line-color">
                    CA<span>REER</span>
                  </h1>
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
                  <h1 className="[&>span]:text-line-color">
                    CO<span>NTACT</span>
                  </h1>
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-between pb-14 gap-10 ">
            <div>
              <Link
                href="/"
                className="text-sm text-slate-400 focus:outline-none tracking-normal hover:text-line-color transition-all duration-200 ease-in-out"
                onClick={() => {
                  setNavbarOpen(false);
                }}
              >
                <h6>PROJECTS PROGRESS</h6>
              </Link>
              <Link
                href="/"
                className="text-sm text-slate-400 focus:outline-none tracking-normal hover:text-line-color transition-all duration-200 ease-in-out"
                onClick={() => {
                  setNavbarOpen(false);
                }}
              >
                <h6>TEAM</h6>
              </Link>
              <Link
                href="/"
                className="text-sm text-slate-400 focus:outline-none tracking-normal hover:text-line-color transition-all duration-200 ease-in-out"
                onClick={() => {
                  setNavbarOpen(false);
                }}
              >
                <h6>NEWS AND OFFERS</h6>
              </Link>
              <Link
                href="/"
                className="text-sm text-slate-400 focus:outline-none tracking-normal hover:text-line-color transition-all duration-200 ease-in-out"
                onClick={() => {
                  setNavbarOpen(false);
                }}
              >
                <h6>WHY US!</h6>
              </Link>
            </div>
            <div className="border-b border-line-color" />
            <div className="text-slate-400 text-xs">
              <p>
                JCX Business Tower
                <br />
                Plot 1136/A,
                <br />
                Japan Street, Block # I, <br />
                Bashundhara R/A, Dhaka - 1229,
                <br /> Bangladesh
              </p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MenuOverlay;
