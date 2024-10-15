import React from "react";
import { FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="max-w-5xl mx-auto my-0 py-8 px-[4%]">
      <div className="flex gap-5 my-12">
        <FaFacebookF size={25} className="cursor-pointer" />
        <FaInstagram size={25} className="cursor-pointer" />
        <FaXTwitter size={25} className="cursor-pointer" />
        <FaYoutube size={25} className="cursor-pointer" />
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8 text-xl  md:gap-2 md:text-sm">
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
      <p className="text-gray-500 text-sm">© 1997-2024 Netflix, Inc.</p>
    </div>
  );
};

export default Footer;
