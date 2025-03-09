import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#021a36] text-white py-10 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-[#0088E0]">Azure Partners</h2>
          <p className="text-sm text-gray-400 mt-2">
            AI Enablement, Research, and Industry Collaboration.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#0088E0]">Company</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="/about" className="text-gray-300 hover:text-white">
                About
              </a>
            </li>

            <li>
              <a href="/team" className="text-gray-300 hover:text-white">
                Team
              </a>
            </li>
            <li>
              <a
                href="mailto:andrew@azurepartners.ai"
                className="text-gray-300 hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#0088E0]">Follow Us</h3>
          <div className="flex space-x-4 mt-3">
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fab fa-github text-2xl"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm">
        © 2025 Azure Partners. All rights reserved.
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 rounded-lg bg-gradient-radial from-[#0073C6] to-transparent opacity-20 blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;
