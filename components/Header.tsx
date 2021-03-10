import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { DarkModeButton } from "./DarkModeButton";
import { useWindowSize } from "../core/hooks/useWindowSize";

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
  const navigationMobileRef = useRef(null);
  const mobileIconRef = useRef(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const router = useRouter();
  const { width } = useWindowSize();

  const toggleMobileNavigation = () => {
    navigationMobileRef.current.classList.add("touched");
    navigationMobileRef.current.classList.toggle("translate-x-full");
    setMobileNavOpen(!mobileNavOpen);
  };

  const linkClicked = (event) => {
    if (event.currentTarget.href.indexOf("cv") > -1) {
      document.querySelectorAll("nav li a").forEach((navEl) => {
        navEl.classList.remove("active");
      });
    }
    if (width <= 768) {
      toggleMobileNavigation();
    }
  };

  const renderNavigationItems = () => {
    return (
      <>
        <li className="md:mr-6 hover:text-coolGray-600 dark:hover:text-amber-100">
          <Link href={{ pathname: "/", hash: "personal" }}>
            <a className="relative" onClick={linkClicked}>
              Personal
            </a>
          </Link>
        </li>
        <li className="mt-2 md:mt-0 md:mr-6 hover:text-coolGray-600 dark:hover:text-amber-100">
          <Link href={{ pathname: "/", hash: "blog" }}>
            <a className="relative" onClick={linkClicked}>
              Resources
            </a>
          </Link>
        </li>
        <li className="mt-2 md:mt-0 md:mr-6 hover:text-coolGray-600 dark:hover:text-amber-100">
          <Link href={{ pathname: "/", hash: "contact" }}>
            <a className="relative" onClick={linkClicked}>
              Contact
            </a>
          </Link>
        </li>
        <li className="mt-2 md:mt-0 hover:text-coolGray-600 dark:hover:text-amber-100">
          <Link href="/cv">
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
    <nav className="duration-300 fixed bg-white dark:bg-coolGray-900 dark:text-amber-50 h-16 w-full z-50 border-b top-0">
      <div className="flex h-full w-full max-w-screen-xl px-2 mx-auto container justify-between items-center">
        <div className={"w-40"}>
          <Link href={{ pathname: "/" }}>
            <a className="flex flex-row text-2xl hover:text-coolGray-600 dark:hover:text-amber-100">
              BullitBlog
            </a>
          </Link>
        </div>
        <ul className="hidden md:flex">{renderNavigationItems()}</ul>
        <ul
          ref={navigationMobileRef}
          className="duration-300 md:hidden absolute flex flex-col w-full top-16 left-0 py-3 items-center bg-coolGray-900 text-amber-50 transform translate-x-full"
        >
          {renderNavigationItems()}
        </ul>
        <div className="order-3 flex justify-end w-40 md:hidden">
          <div
            className={"cursor-pointer w-5 h-5 relative"}
            ref={mobileIconRef}
            onClick={toggleMobileNavigation}
          >
            <span
              className={classNames(
                "transform transition duration-300 ease-in-out absolute h-0.5 w-full bg-coolGray-900 dark:bg-amber-50 rounded-lg left-0",
                {
                  "rotate-45 top-2": mobileNavOpen,
                  "rotate-0": !mobileNavOpen,
                }
              )}
            />
            <span
              className={classNames(
                "absolute transition duration-300 ease-in-out h-0.5 w-full bg-coolGray-900 dark:bg-amber-50 rounded-lg left-0 top-2",
                {
                  "opacity-0": mobileNavOpen,
                  "opacity-100": !mobileNavOpen,
                }
              )}
            />
            <span
              className={classNames(
                "transform transition duration-300 ease-in-out absolute h-0.5 w-full bg-coolGray-900 dark:bg-amber-50 rounded-lg left-0",
                {
                  "-rotate-45 top-2": mobileNavOpen,
                  "rotate-0 top-4": !mobileNavOpen,
                }
              )}
            />
          </div>
        </div>
        <div className={"flex justify-center w-full md:w-32 md:justify-end"}>
          <DarkModeButton />
        </div>
      </div>
    </nav>
  );
};

// <header>
//   <div className="duration-300 border-b dark:bg-coolGray-900">
//     <div className={"flex p-2 max-w-screen-xl mx-auto items-center"}>
//       <div className={"w-28 md:w-32"}>
//         <Logo />
//       </div>
//       <div
//           className={
//             "flex w-full items-center justify-end md:justify-between md:flex-row-reverse"
//           }
//       >
//         <div
//             className={"flex justify-center w-full md:w-32 md:justify-end"}
//         >
//           <DarkModeButton />
//         </div>
//         <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
//           <div className="relative flex items-center justify-between h-16">
//             <div className="flex w-28 justify-end md:hidden">
//               <div
//                   ref={mobileIconRef}
//                   onClick={toggleMobileNavigation}
//                   className="md:hidden order-3 h-6 w-5 cursor-pointer relative"
//               >
//                     <span
//                         className={`transform transition duration-300 ease-in-out absolute h-1 w-full bg-darkPurple dark:bg-orange rounded-lg left-0 ${
//                             mobileNavOpen ? "rotate-135 top-2" : "rotate-0"
//                         }`}
//                     ></span>
//                 <span
//                     className={`absolute transition duration-300 ease-in-out h-1 w-full bg-darkPurple dark:bg-orange rounded-lg left-0 top-2 ${
//                         mobileNavOpen ? "opacity-0 -left-40" : "opacity-100"
//                     }`}
//                 ></span>
//                 <span
//                     className={`transform transition duration-300 ease-in-out absolute h-1 w-full bg-darkPurple dark:bg-orange rounded-lg left-0 ${
//                         mobileNavOpen ? "-rotate-135 top-2" : "rotate-0 top-4"
//                     }`}
//                 ></span>
//               </div>
//               {/*<button*/}
//               {/*  onClick={() => setIsOpen((value) => !value)}*/}
//               {/*  id="nav-toggle"*/}
//               {/*  className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"*/}
//               {/*>*/}
//               {/*  <svg*/}
//               {/*    className="fill-current h-3 w-3"*/}
//               {/*    viewBox="0 0 20 20"*/}
//               {/*    xmlns="http://www.w3.org/2000/svg"*/}
//               {/*  >*/}
//               {/*    <title>Menu</title>*/}
//               {/*    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />*/}
//               {/*  </svg>*/}
//               {/*</button>*/}
//             </div>
//             <div
//                 ref={navigationMobileRef}
//                 className={classNames(
//                     "w-full flex-grow md:flex md:items-center md:w-auto md:block pt-6 md:pt-0"
//                 )}
//             >
//               <div className="flex space-x-4">
//                 {navItems.map(({ text, link }) => (
//                     <a
//                         key={text}
//                         href={link}
//                         className="mr-5 text-sm font-semibold text-coolGray-900 hover:text-coolGray-600 dark:text-amber-50 dark:hover:text-amber-100"
//                     >
//                       {text}
//                     </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </div>
//   </div>
// </header>
