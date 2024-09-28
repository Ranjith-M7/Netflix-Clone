import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

import { FaSearch } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <FaSearch size={20} style={{ cursor: "pointer" }} />
        <p>Children</p>
        <FaRegBell size={20} style={{ cursor: "pointer" }} />
        <div className="navbar-profile">
          <FaRegUser size={20} className="profile" />
          <FaCaretDown size={20} />
          <div className="dropdown">
            <p>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;