import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-10 grid gap-8 md:grid-cols-3 text-center md:text-left">
        {/* Logo & Description */}
        <div>
          <h2 className="text-xl font-bold text-indigo-700">Eventify</h2>
          <p className="text-gray-600 mt-2">
            Organize your events with confidence and style.
          </p>
          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-indigo-600 transition"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-indigo-600 transition"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-indigo-600 transition"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-indigo-600 transition"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-600">
            <li>
              <Link to="/" className="hover:text-indigo-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-indigo-600">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-indigo-600">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Legal</h3>
          <ul className="space-y-1 text-gray-600">
            <li>
              <Link to="/terms" className="hover:text-indigo-600">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-indigo-600">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm py-4 border-t">
        © {new Date().getFullYear()} Eventify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
