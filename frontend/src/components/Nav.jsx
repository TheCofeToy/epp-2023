import { Link } from "react-router-dom";
import { useState } from "react";
import earistLogo from "../assets/earist-logo-1.png";

function Nav() {
  //transtion delay in navbar in mobile devices
  const inTransition = 300;
  const outTransition = 100;

  //navigation bar function opener
  const [isOpen, setIsOpen] = useState(false);

  //
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  //closing the navlinks in mobile devices when clicked
  const closeMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  // Function to handle link clicks and scroll to top
  const handleLinkClick = (path) => {
    if (window.location.pathname === path) {
      window.scrollTo(0, 0);
    } else {
      history.push(path);
    }
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <header className="w-full p-8 bg-[#fafafa]/80 backdrop-blur-sm fixed top-0 z-20 ">
      <nav className=" flex items-center justify-between gap-32 z-10">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-9 h-9 md:hidden cursor-pointer"
            onClick={toggleMenu}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <img
            src={earistLogo}
            className="md:block hidden absolute w-24 top-1 md:left-10 right-0"
          />
          <h1 className="md:ml-32 ml-14 top-10 absolute font-semibold md:text-lg text-red-900 uppercase">
            Eulogio "Amang" Rodriguez Institute of Science and Technology
          </h1>
          {/* group logo
          <img
            src={logo}
            className="w-48 hidden md:block absolute right-0 top-[-48px] md:top-[-40px] md:right-[870px]"/>
            */}
        </div>
        <div
          className={`md:hidden absolute left-5 top-20 dark:bg-gray-500/30 dark:hover:text-pink-600 ease-in-out dark:border-none bg-white z-10 border border-gray-200 rounded-lg shadow-lg p-4 ${
            isOpen
              ? "opacity-100 visible transition duration-" + inTransition
              : "opacity-0 invisible transition duration-" + outTransition
          }`}
        >
          <div className="flex flex-col gap-6 text-gray-900 text-md">
            <Link
              onClick={closeMenu}
              className="dark:text-white dark:hover:text-[#dc2626] ease-in-out duration-300 hover:bg-red-800 p-2 hover:text-amber-300 rounded-sm"
              to="/earist-extension-program/"
            >
              Home
            </Link>
            <Link
              onClick={closeMenu}
              className="dark:text-white dark:hover:text-[#dc2626] ease-in-out duration-300 hover:bg-red-800 p-2 hover:text-amber-300 rounded-sm"
              to="/earist-extension-program/programs"
            >
              Programs & Events
            </Link>
            <Link
              onClick={closeMenu}
              className="dark:text-white dark:hover:text-[#dc2626] ease-in-out duration-300 hover:bg-red-800 p-2 hover:text-amber-300 rounded-sm"
              to="/earist-extension-program/news"
            >
              News
            </Link>
          </div>
        </div>
        <div className="hidden md:flex gap-10 text-gray-700 text-md uppercase">
          <Link
            onClick={() => handleLinkClick("/earist-extension-program/")}
            className="text-red-900 hover:bg-red-800 hover:p-2 p-2 ease-in-out duration-300 hover:text-amber-300 rounded-sm"
            to="/"
          >
            Home
          </Link>
          <Link
            onClick={() => handleLinkClick("/earist-extension-program/")}
            className="text-red-900 hover:bg-red-800 hover:p-2 p-2 ease-in-out duration-300 hover:text-amber-300 rounded-sm"
            to="/programs"
          >
            Programs & Events
          </Link>
          {/* {uncomment this when needed: this is a news link} */}
          {/*   <Link */}
          {/*     onClick={() => handleLinkClick("/earist-extension-program/")} */}
          {/*     className="text-red-900 hover:bg-red-800 hover:p-2 ease-in-out duration-300 hover:text-amber-300 rounded-sm p-2" */}
          {/*     to="/news" */}
          {/*   > */}
          {/*     News */}
          {/*   </Link> */}
        </div>
      </nav>
    </header>
  );
}

export default Nav;
