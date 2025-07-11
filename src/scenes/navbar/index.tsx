import React, { useState } from "react";
import logoRH from "../../assets/images/logoRH.png";
import { Link } from "react-router-dom";
import {
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

Link;
useState;

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#807e7e] shadow-sm px-4 py-3 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/*LOGO and BRAND name*/}
        <div className="flex items-center">
          <img alt="logo" src={logoRH} height={100} width={100} />
        </div>

        {/* Right-side icons -- mobile only */}
        <div className="flex items-center space-x-4 md:hidden">
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer"
          >
            {menuOpen ? (
              <XMarkIcon className="w-7 h-7 text-white" />
            ) : (
              <Bars3BottomRightIcon className="w-7 h-7 text-white item-right" />
            )}
          </div>
        </div>

        {/* Desktop navigation links */}
        <div className="hidden md:flex items-center space-x-8 text-white">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/booking" className="hover:underline">
            Booking
          </Link>
          <Link to="/aboutus" className="hover:underline">
            About us
          </Link>
          <Link to="/ourmenu" className="hover:underline">
            Our Menu
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
          <Link to="/customer" className="hover:underline">
            Customer
          </Link>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <div
        className={`md:hidden overflow-hidden item-right transition-max-h duration-300  text-white ${
          menuOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <div className="flex flex-col space-y-2 px-4 pb-4">
          <Link
            to="/"
            className="hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/booking"
            className="hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Booking
          </Link>
          <Link
            to="/aboutus"
            className="hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            About us
          </Link>
          <Link
            to="/ourMenu"
            className="hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Our Menu
          </Link>
          <Link
            to="/contact"
            className="hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/customer"
            className="hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Customer
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
