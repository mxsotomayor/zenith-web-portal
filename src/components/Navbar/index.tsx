"use client";

import {
  ChevronDown,
  ChevronRight,
  Menu,
  Search,
  Unlock,
  X,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import GlobalMenu from "./GlobalMenu";
import { mainMenuItems, menuSettings } from "./dataInit";

function MenuItem(props: Record<string, any>) {
  const [displayMenu, setDisplayMenu] = useState(false);

  const onEnter = () => {
    setDisplayMenu(true);
  };

  const onLeave = () => {
    setDisplayMenu(false);
  };

  const LinkWrapper = ({ isLink }: { isLink: boolean }) => {
    if (isLink) {
      return (
        <Link
          href={props.href ?? "#"}
          target={props.target ?? "_self"}
          className="px-3 text-sm flex gap-x-2 items-center hover:bg-slate-50"
          aria-current="page"
        >
          <span dangerouslySetInnerHTML={{ __html: props.text }}></span>
        </Link>
      );
    }

    return (
      <span
        className="px-3 text-sm flex gap-x-2 items-center hover:bg-slate-50 cursor-pointer"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <span dangerouslySetInnerHTML={{ __html: props.text }}></span>
        {props.sections && <ChevronDown />}

        {props.sections && (
          <section
            className={`fixed w-screen h-auto bg-slate-50 cursor-default transition-all ease-in-out duration-300 z-10 shadow-xl ${
              displayMenu
                ? "top-24 opacity-100"
                : "top-40 opacity-0 pointer-events-none"
            } left-0 py-8 flex justify-center`}
          >
            <div className="container mx-auto px-4 2xl:mx-0 flex gap-4 z-20">
              {props.banner && (
                <Link href={props.banner.href} target={props.banner.target}>
                  <div className="bg-orange-400 w-60 h-72 rounded-lg flex justify-center items-center overflow-hidden relative">
                    <Image
                      src={props.banner.image.url}
                      width="240"
                      height="380"
                      alt={props.banner.image.altText}
                      className="object-cover w-full h-full"
                    />
                    <div className="w-full h-full absolute bg-gradient-to-b from-transparent to-gray-900  top-0 left-0 text-white flex flex-col justify-end p-4">
                      <h3 className="mb-1 font-bold text-xl text-ellipsis line-clamp-2">
                        {props.banner.campaign.header}
                      </h3>
                      <p className="text-semibold text-ellipsis line-clamp-3">
                        {props.banner.campaign.description}
                      </p>
                      <p className="underline text-blue-400 mt-1">
                        {" "}
                        {props.banner.campaign.cta}
                      </p>
                    </div>
                  </div>
                </Link>
              )}

              {/* main menu blocks */}
              <div className=" grid grid-cols-3 gap-4 flex-1">
                {props.sections.map((section, index) => (
                  <div key={index}>
                    <h4 className="font-bold text-xl text-orange-500 mb-3">
                      {section.header}
                    </h4>
                    <ul>
                      {section.links.map((sectionItem, _index) => (
                        <li key={_index} className="py-2">
                          <Link
                            href=""
                            className="text-md text-blue-800 gap-2 flex items-center group"
                          >
                            <ChevronRight className="min-w-4 w-4" />
                            <span className="text-ellipsis line-clamp-1 group-hover:underline">
                              {sectionItem.text}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </span>
    );
  };

  return (
    <li className="flex h-full">
      <LinkWrapper isLink={!props.sections} />
    </li>
  );
}

function NavBar({ selectedSite = 0 }: NavBarProps) {
  const [showSearch, setShowSearch] = React.useState(false);

  const [showMenu, setShowMenu] = React.useState(false);

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

  const CURRENT_BASE_SITE = menuSettings.subSites[selectedSite].subPath;

  return (
    <nav
      data-name="NavBar"
      className=" shadow-lg fixed w-full z-50 top-0 start-0 overflow-hidden "
    >
      {/* Search block */}
      <SearchBox showSearch={showSearch} toogleSearch={toogleSearch} />
      <GlobalMenu show={showMenu} />
      {/* Menu block */}
      <div className="w-full bg-orange-500">
        <div className="container mx-auto">
          <div className="flex flex-row items-center">
            <ul className="flex flex-row items-center text-xs">
              {menuSettings.subSites.map((item, index) => (
                <li
                  key={index}
                  className={`${
                    index === selectedSite
                      ? "bg-white font-semibold text-blue-900"
                      : "text-white"
                  } px-4 py-2 uppercase`}
                >
                  <Link
                    href={item.subPath + "/"}
                    className="flex items-center gap-2"
                  >
                    {" "}
                    {item.displayName}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="justify-end text-white font-thin flex-1 px-4 2xl:px-0">
              <ul className="flex flex-row justify-end items-center md:space-x-8 text-xs">
                {menuSettings.topRightMenus.map((item, index) => (
                  <li key={index} className="hidden  md:flex">
                    <Link href={item.url} target={item.target}>
                      {item.displayText}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="" className="flex items-center">
                    EN <ChevronDown size="16" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="container flex flex-wrap items-center justify-start lg:justify-between mx-auto h-16">
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
                src={menuSettings.logoUrl}
                width={120}
                height={50}
                alt={menuSettings.logoAltText}
              />
            </span>
          </Link>

          {/* ============= */}
          <div
            className="items-center justify-end hidden w-full lg:flex md:w-auto md:order-1 flex-1 mx-2 h-full"
            id="navbar-sticky"
          >
            <ul className="flex flex-row gap-x-3 font-medium  h-full z-40">
              {mainMenuItems.map((item, index) => (
                <MenuItem {...item} key={index} />
              ))}
            </ul>
          </div>
          <div className="flex items-center md:order-2 gap-x-4 border-l pl-2">
            {menuSettings.showSearch && (
              <button
                onClick={toogleSearch}
                className="bg-slate-50 hover:bg-slate-100 p-2 rounded-full"
              >
                <Search />
              </button>
            )}

            {menuSettings.showLogin && (
              <Link
                href={
                  process.env.NEXT_PUBLIC_ONLINE_BANKING_URL +
                  "/login" +
                  CURRENT_BASE_SITE
                }
                className="gap-2 text-white bg-orange-500 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 lg:py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex items-center gap-x-3 py-3"
              >
                <Unlock size="16" />{" "}
                <span className="hidden md:block">Mi Banca</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
