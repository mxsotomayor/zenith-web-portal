"use client"

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
import React from "react";
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
      url: "/",
    },
    {
      icon: <Building size="16" />,
      name: "Business",
      url: "/business",
    },
  ];

  
  const toogleSearch = () => {
    setShowSearch(!showSearch);
  }

  return (
    <nav className="dark:bg-gray-900 fixed w-full z-20 top-0 start-0 overflow-hidden ">
      {/* Search block */}
      <SearchBox showSearch={showSearch} toogleSearch={toogleSearch} />
      <GlobalMenu show={showMenu} />
      {/* Menu block */}
      <div className="w-full bg-blue-900">
        <div className="container mx-auto">
          <div className="flex flex-row items-center">
            <ul className="flex flex-row items-center text-xs">
              {topItems.map((item, index) => (
                <li
                  key={index}
                  className={`${
                    index === selectedSite
                      ? "bg-orange-500 font-bold"
                      : "text-white"
                  } px-4 py-2 uppercase`}
                >
                  <Link href={item.url} className="flex items-center gap-2">
                    {" "}
                    {item.icon} {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex justify-end text-white font-thin flex-1">
              <ul className="flex flex-row items-center space-x-8 text-xs">
                <li>
                  <Link href="">Branches</Link>
                </li>
                <li>
                  <Link href="">Need Help?</Link>
                </li>
                <li>
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
      <div className="bg-orange-500">
        <div className="container flex flex-wrap items-center justify-between mx-auto p-4">
          <button onClick={() => setShowMenu(!showMenu)} >
            { showMenu ? <X size="32"/> : <Menu size="32" />}
          </button>
          <Link href="#" className="flex items-center space-x-3  ml-4">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              iBanca Online
            </span>
          </Link>
          <div className="flex items-center md:order-2 gap-x-6 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button onClick={toogleSearch}>
              <Search />
            </button>
            <Link href="/signup"
              type="button"
              className="text-white bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex items-center gap-x-3"
            >
              <UserPlus size="16" /> Become a Customer!
            </Link>
            <Link href="/login" className="flex items-center gap-2">
              <Unlock size="16" /> Sign In!
            </Link>
          </div>
          <div
            className="items-center justify-end hidden w-full md:flex md:w-auto md:order-1 flex-1 mx-8"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white hover:underline  rounded-sm md:bg-transparent bg-blue-500 md:p-0 text-sm"
                  aria-current="page"
                >
                  Business
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white hover:underline  rounded-sm md:bg-transparent   md:p-0  text-sm"
                  aria-current="page"
                >
                  Personal
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white hover:underline  rounded-sm md:bg-transparent   md:p-0  text-sm"
                  aria-current="page"
                >
                  Digital Banking
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white hover:underline  rounded-sm md:bg-transparent   md:p-0  text-sm"
                  aria-current="page"
                >
                  UniTrust
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white hover:underline  rounded-sm md:bg-transparent   md:p-0  text-sm"
                  aria-current="page"
                >
                  UniLeasing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white hover:underline  rounded-sm md:bg-transparent   md:p-0  text-sm"
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
