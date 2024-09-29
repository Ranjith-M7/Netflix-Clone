import React from "react";
import "./Footer.css";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <FaFacebookF size={25} className="icon"/>
        <FaInstagram size={25} className="icon"/>
        <FaXTwitter size={25} className="icon"/>
        <FaYoutube size={25} className="icon"/>
      </div>
      <ul>
        <li>Audio Description</li>
        <li>HeIp Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>lnvestor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright-text">© 1997-2024 Netflix, Inc.</p>
    </div>
  );
};

export default Footer;
