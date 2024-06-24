import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#164863] py-4">
      <div className="container">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl text-white">
            About Us
          </Link>
          <Link to="/" className="text-2xl text-white">
            Contact Us
          </Link>
          <Link to="/" className="text-2xl text-white">
            Privacy & Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
