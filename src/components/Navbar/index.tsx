"use client";

import {
  Building,
  ChevronDown,
  Menu,
  Search,
  Unlock,
  User,
  UserPlus,
  X,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect } from "react";
import SearchBox from "./SearchBox";
import GlobalMenu from "./GlobalMenu";

interface SubSitesLinks {
  icon?: React.ReactNode;
  name: string;
  url: string;
}

interface NavBarProps {
  selectedSite?: number;
}

function NavBar({ selectedSite = 0 }: NavBarProps) {
  const [showSearch, setShowSearch] = React.useState(false);

  const [showMenu, setShowMenu] = React.useState(false);

  const topItems: SubSitesLinks[] = [
    {
      icon: <User size="16" />,
      name: "Personal",
      url: "",
    },
    {
      icon: <Building size="16" />,
      name: "Business",
      url: "/business",
    },
  ];

  const toogleSearch = () => {
    setShowSearch(!showSearch);
  };

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMenu]);

  const CURRENT_BASE_SITE = topItems[selectedSite].url;

  return (
    <nav className="dark:bg-gray-900 fixed w-full z-50 top-0 start-0 overflow-hidden ">
      {/* Search block */}
      <SearchBox showSearch={showSearch} toogleSearch={toogleSearch} />
      <GlobalMenu show={showMenu} />
      {/* Menu block */}
      <div className="w-full bg-orange-500">
        <div className="container mx-auto">
          <div className="flex flex-row items-center">
            <ul className="flex flex-row items-center text-xs">
              {topItems.map((item, index) => (
                <li
                  key={index}
                  className={`${
                    index === selectedSite ? "bg-white font-bold" : "text-white"
                  } px-4 py-2 uppercase`}
                >
                  <Link
                    href={item.url + "/"}
                    className="flex items-center gap-2"
                  >
                    {" "}
                    {item.icon} {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="justify-end text-white font-thin flex-1 px-4 xxl:px-0">
              <ul className="flex flex-row justify-end items-center md:space-x-8 text-xs">
                <li className="hidden  md:flex">
                  <Link href="">Branches</Link>
                </li>
                <li className="hidden  md:flex">
                  <Link href="/help">Need Help?</Link>
                </li>
                <li className="hidden  md:flex">
                  <Link href="">Call us! 297-6000</Link>
                </li>
                <li>
                  <Link href="" className="flex items-center">
                    Spanish <ChevronDown size="16" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="container flex flex-wrap items-center justify-start lg:justify-between mx-auto p-4">
          <button onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? <X size="32" /> : <Menu size="32" />}
          </button>
          <Link
            href={CURRENT_BASE_SITE + "/"}
            className="flex items-center md:space-x-3  md:ml-4"
          >
            {/* VENDOR LOGO */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              <Image
                src="/oie_liyvudiqai3a.png"
                width={120}
                height={50}
                alt=""
              />
            </span>
          </Link>
          <div className="flex items-center md:order-2 gap-x-4  md:gap-x-6 rtl:space-x-reverse ms-auto lg:ms-0">
            <button onClick={toogleSearch}>
              <Search />
            </button>

            <Link
              href={CURRENT_BASE_SITE + "/login"}
              className="flex items-center gap-2"
            >
              <Unlock size="16" />{" "}
              <span className="hidden md:block">Sign In!</span>
            </Link>

            <Link
              href={CURRENT_BASE_SITE + "/signup"}
              type="button"
              className="text-white bg-orange-500 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex items-center gap-x-3 py-3"
            >
              <UserPlus size="16" />{" "}
              <span className="hidden md:block">Join Us!</span>
            </Link>
          </div>
          <div
            className="items-center justify-end hidden w-full lg:flex md:w-auto md:order-1 flex-1 mx-8"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3  hover:underline  rounded-sm md:bg-transparent bg-blue-500 md:p-0 text-sm"
                  aria-current="page"
                >
                  Business
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3  hover:underline  rounded-sm md:bg-transparent   md:p-0  text-sm"
                  aria-current="page"
                >
                  Personal
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3  hover:underline  rounded-sm md:bg-transparent   md:p-0  text-sm"
                  aria-current="page"
                >
                  Digital Banking
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3  hover:underline  rounded-sm md:bg-transparent   md:p-0  text-sm"
                  aria-current="page"
                >
                  UniTrust &trade;
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3  hover:underline  rounded-sm md:bg-transparent   md:p-0  text-sm"
                  aria-current="page"
                >
                  UniLeasing &trade;
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3  hover:underline  rounded-sm md:bg-transparent   md:p-0  text-sm"
                  aria-current="page"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
