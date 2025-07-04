import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { DarkModeButton } from "./DarkModeButton";
import { useWindowSize } from "../../core/hooks/useWindowSize";
import { OutsideClick } from "../OutsideClick";
import { useAnimateLogo } from "../../core/useAnimateLogo";

const navItems: { link: string; text: string }[] = [
  {
    link: "#",
    text: "Personal",
  },
  {
    link: "#",
    text: "Resources",
  },
  {
    link: "#",
    text: "Contact",
  },
  {
    link: "#",
    text: "CV",
  },
];

export const Header = () => {
  const logoRef = useRef(null);
  const headerRef = useRef(null);
  const navigationMobileRef = useRef(null);
  const mobileIconRef = useRef(null);
  const [navIsOpen, setNavIsOpen] = useState(false);
  const router = useRouter();
  const { width } = useWindowSize();
  useAnimateLogo(logoRef);

  const toggleScrolled = () => {
    if (window.pageYOffset > 0) {
      headerRef?.current?.classList.add("scrolled");
    } else {
      headerRef?.current?.classList.remove("scrolled");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleScrolled);
    return () => window.removeEventListener("scroll", toggleScrolled);
  }, []);

  const openMobileNav = () => {
    navigationMobileRef.current.classList.add("touched");
    navigationMobileRef.current.classList.remove("translate-x-full");
    setNavIsOpen(true);
  };

  const closeMobileNav = () => {
    navigationMobileRef.current.classList.add("touched");
    navigationMobileRef.current.classList.add("translate-x-full");
    setNavIsOpen(false);
  };

  const linkClicked = (event) => {
    if (event.currentTarget.href.indexOf("cv") > -1) {
      document.querySelectorAll("nav li a").forEach((navEl) => {
        navEl.classList.remove("active");
      });
    }
    if (width <= 768) {
      closeMobileNav();
    }
  };

  const renderNavigationItems = () => {
    return (
      <>
        <li className="md:mr-6 hover:text-coolGray-600 dark:hover:text-amber-100">
          <Link href={"/"}>
            <a className="relative" onClick={linkClicked}>
              Personal
            </a>
          </Link>
        </li>
        <li className="mt-2 md:mt-0 md:mr-6 hover:text-coolGray-600 dark:hover:text-amber-100">
          <Link href={"/resources"}>
            <a className="relative" onClick={linkClicked}>
              Resources
            </a>
          </Link>
        </li>
        <li className="mt-2 md:mt-0 md:mr-6 hover:text-coolGray-600 dark:hover:text-amber-100">
          <Link href={"/contacts"}>
            <a className="relative" onClick={linkClicked}>
              Contact
            </a>
          </Link>
        </li>
        <li className="mt-2 md:mt-0 hover:text-coolGray-600 dark:hover:text-amber-100">
          <Link href={"/cv"}>
            <a
              onClick={linkClicked}
              className={`relative ${
                router.pathname === "/cv" ? "active" : ""
              }`}
            >
              CV
            </a>
          </Link>
        </li>
      </>
    );
  };

  return (
    <nav
      ref={headerRef}
      className="transition-shadow duration-200 fixed bg-lightGray-50 dark:bg-coolGray-800 dark:text-white h-16 w-full z-50 top-0"
    >
      <div className="flex h-full w-full max-w-screen-xl px-2 mx-auto container justify-between items-center md:px-4">
        <div>
          <div className={"w-36 md:w-48 whitespace-pre"}>
            <Link href={{ pathname: "/" }}>
              <a
                ref={logoRef}
                className="flex flex-row text-xl w-min dark:text-emerald-500 md:text-2xl hover:text-coolGray-600 dark:hover:text-emerald-400"
              />
            </Link>
          </div>
        </div>
        <ul className="hidden md:flex">{renderNavigationItems()}</ul>
        <div
          ref={navigationMobileRef}
          className=" md:hidden absolute w-full top-16 left-0 py-3 bg-lightGray-50 dark:bg-coolGray-800 transform translate-x-full"
        >
          <OutsideClick enable={false} onClick={closeMobileNav}>
            <ul className={"flex flex-col items-center"}>
              {renderNavigationItems()}
            </ul>
          </OutsideClick>
        </div>
        <div className="order-3 md:hidden">
          <div className={"xs:w-36 flex justify-end"}>
            <div
              className={"cursor-pointer w-5 h-5 relative"}
              ref={mobileIconRef}
              onClick={!navIsOpen ? openMobileNav : closeMobileNav}
            >
              <span
                className={classNames(
                  "transform transition duration-200 ease-in-out absolute h-0.5 w-full bg-coolGray-900 dark:bg-amber-50 rounded-lg left-0",
                  {
                    "rotate-45 top-2": navIsOpen,
                    "rotate-0": !navIsOpen,
                  }
                )}
              />
              <span
                className={classNames(
                  "absolute transition duration-200 ease-in-out h-0.5 w-full bg-coolGray-900 dark:bg-amber-50 rounded-lg left-0 top-2",
                  {
                    "opacity-0": navIsOpen,
                    "opacity-100": !navIsOpen,
                  }
                )}
              />
              <span
                className={classNames(
                  "transform transition duration-200 ease-in-out absolute h-0.5 w-full bg-coolGray-900 dark:bg-amber-50 rounded-lg left-0",
                  {
                    "-rotate-45 top-2": navIsOpen,
                    "rotate-0 top-4": !navIsOpen,
                  }
                )}
              />
            </div>
          </div>
        </div>
        <div
          className={
            "flex justify-end w-full pr-4 xs:pr-0 xs:justify-center md:w-48 md:justify-end"
          }
        >
          <DarkModeButton />
        </div>
      </div>
    </nav>
  );
};
