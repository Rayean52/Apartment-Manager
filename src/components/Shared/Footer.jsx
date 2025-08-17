import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold mb-3">About FlatFlow</h2>
          <p className="text-sm leading-relaxed text-gray-400">
            FlatFlow is a modern apartment and building management system
            designed to streamline rental processes, communication, and
            community engagement between residents and property owners.
          </p>
          <p className="mt-2 text-sm italic text-gray-500">
            “Smart living starts with better management.”
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <nav className="flex flex-col gap-2 text-sm">
            <Link to="/about-us" className="link link-hover">About Us</Link>
            <Link to="/contact-us" className="link link-hover">Contact Us</Link>
            <Link to="/faqs" className="link link-hover">FAQ</Link>
            <Link to="/privacy-policy" className="link link-hover">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="link link-hover">Terms & Conditions</Link>
          </nav>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Contact Information</h2>
          <p className="text-sm text-gray-400">📍 123 Main Street, Dhaka, Bangladesh</p>
          <p className="text-sm text-gray-400">📞 +880 1234-567890</p>
          <p className="text-sm text-gray-400">✉️ support@FlatFlow.com</p>

          <div className="mt-4 flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition">
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition">
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-red-500 transition">
              <i className="fab fa-youtube fa-lg"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} FlatFlow Management. All rights reserved.
        </p>
        <p className="mt-1">
          Designed & built with ❤️ to simplify rental and apartment life.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
