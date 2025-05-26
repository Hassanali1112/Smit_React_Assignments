import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-indigo-700">
          Eventify
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link
            to="/"
            className="text-gray-700 hover:text-indigo-600 font-medium transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-indigo-600 font-medium transition"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-indigo-600 font-medium transition"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/login"
            className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-600 hover:text-white transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
          >
            Sign Up
          </Link>
        </div>

        {/* Hamburger Icon with Animation */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 group"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`bg-indigo-700 h-1 w-6 rounded transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`bg-indigo-700 h-1 w-6 rounded my-1 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`bg-indigo-700 h-1 w-6 rounded transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <div className="flex flex-col space-y-4 px-6 py-4">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-indigo-600 font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-indigo-600 font-medium"
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-indigo-600 font-medium"
            >
              Contact
            </Link>
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="text-indigo-600 hover:text-white hover:bg-indigo-600 font-medium border border-indigo-600 rounded px-4 py-2 transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              onClick={() => setMenuOpen(false)}
              className="bg-indigo-600 text-white font-medium rounded px-4 py-2 hover:bg-indigo-700 transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
