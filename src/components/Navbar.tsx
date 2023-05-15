import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react";
import HamBurgerMenu from "./HamBurgerMenu";
import HoverButton from "./HoverButton";
import Image from "next/image";
import Logo from "../../public/logo.svg";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "#",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
  {
    label: "Contact",
    page: "contact",
  },
];

const Navbar = () => {
  return (
    <header className="w-full mx-auto px-12 py-4 fixed top-0 z-50 bg-slate-900">
      <div className="flex justify-between items-center">
        <div className="flex gap-12 items-center">
          <div className="flex flex-row gap-2 justify-between items-center">
            <HamBurgerMenu />
            <p className="text-base font-medium text-slate-300">Menu</p>
          </div>
          <div>
            <HoverButton />
          </div>
        </div>
        <div>
          <Image
            src={Logo}
            width={100}
            height={60}
            alt="Picture of the author"
          />
        </div>
        <div className="flex flex-row gap-8">
          <p className="text-sm font-extralight text-slate-300">16777</p>
          <p className="text-sm font-extralight text-slate-300">
            SALES@JCXBD.COM
          </p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
