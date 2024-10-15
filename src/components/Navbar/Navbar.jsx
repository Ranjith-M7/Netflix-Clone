import React, { useEffect, useRef } from "react";
import logo from "../../assets/logo.png";

import { FaSearch, FaRegBell, FaRegUser, FaCaretDown } from "react-icons/fa";
import { logout } from "../../firebase";

const Navbar = () => {
  const navRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        navRef.current.classList.add("bg-black");
      } else {
        navRef.current.classList.remove("bg-black");
      }
    });
  }, []);

  return (
    <div
      className="fixed w-full p-5 px-[6%] flex justify-between text-sm text-gray-300 bg-gradient-to-b from-black/70 to-transparent z-10 transition-all duration-300"
      ref={navRef}
    >
      <div className="flex items-center gap-12">
        <img src={logo} alt="Netflix Logo" className="w-20 sm:w-32" />
        <ul className="hidden gap-5 list-none lg:flex">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">TV Shows</li>
          <li className="cursor-pointer">Movies</li>
          <li className="cursor-pointer">New & Popular</li>
          <li className="cursor-pointer">My List</li>
          <li className="cursor-pointer">Browse by Language</li>
        </ul>
      </div>
      <div className="flex items-center gap-3 sm:gap-5">
        <FaSearch size={20} className="cursor-pointer" />
        <p className="hidden sm:block">Children</p>
        <FaRegBell size={20} className="cursor-pointer" />
        <div className="relative flex items-center gap-2 cursor-pointer group">
          <FaRegUser size={20} />
          <FaCaretDown size={20} />
          <div className="absolute top-full right-0 bg-gray-900 p-4 rounded-md underline text-xs  hidden group-hover:block z-10 whitespace-nowrap">
            <p onClick={logout} className="cursor-pointer">
              Sign Out of Netflix
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
