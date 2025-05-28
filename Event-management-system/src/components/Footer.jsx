import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black/70">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-10 grid gap-8 md:grid-cols-3 text-center md:text-left">
        {/* Logo & Description */}
        <div>
          <h2 className="text-xl font-bold text-indigo-700">Eventify</h2>
          <p className="text-white mt-2">
            Organize your events with confidence and style.
          </p>
          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-indigo-600 transition"
            >
              <Facebook size={20} />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-indigo-600 transition"
            >
              <Twitter size={20} />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-indigo-600 transition"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-indigo-600 transition"
            >
              <Linkedin size={20} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-600">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  ` ${isActive ? "text-indigo-400" : "text-white"}  hover:text-indigo-600 font-medium transition`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  ` ${isActive ? "text-indigo-400" : "text-white"}  hover:text-indigo-600 font-medium transition`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  ` ${isActive ? "text-indigo-400" : "text-white"}  hover:text-indigo-600 font-medium transition`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="font-semibold text-white mb-2">Legal</h3>
          <ul className="space-y-1 text-gray-600">
            <li>
              <Link to="/terms" className="hover:text-indigo-600 text-white">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-indigo-600 text-white">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-white text-sm py-4 border-t">
        © {new Date().getFullYear()} Eventify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
