"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-200 ${
        isScrolled ? "backdrop-blur-md bg-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-[69px]">
        <div className="flex items-center">
          <Link
            to="/"
            className="flex items-center text-gray-800 text-lg font-semibold"
          >
            <img
              src="/images/aicofounder-logo-black.svg"
              alt="AiCoFounder"
              className="h-5 sm:h-6 md:h-7 w-auto"
            />
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="#" className="text-[#4D4D4C] hover:text-[#B85C44] text-sm">
            Pricing
          </Link>
          <Link to="#" className="text-[#4D4D4C] hover:text-[#B85C44] text-sm">
            Our story
          </Link>

          <div className="flex items-center space-x-2 md:pl-2">
            <button className="border border-gray-300 text-gray-700 text-sm font-medium px-4 py-2 rounded-md hover:bg-[#ECE9E2] transition">
              Sign in
            </button>
            <button className="bg-[#B85C44] text-white px-4 py-2 text-sm font-medium rounded-md hover:bg-[#a8503b] transition">
              Get started
            </button>
          </div>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <button className="bg-[#B85C44] text-white px-4 py-1.5 text-sm font-medium rounded-md hover:bg-[#a8503b] transition">
            Get started
          </button>
          <button
            onClick={() => setIsOpen(true)}
            className="text-gray-800 focus:outline-none"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      <div
        className={`fixed md:hidden inset-0 bg-black bg-opacity-30 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      <div
        className={`fixed md:hidden top-0 right-0 w-full h-full bg-[#f7f6f3] shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-[22px] border-b border-gray-200">
          <div className="flex items-center">
            <img
              src="/images/aicofounder-logo.svg"
              alt="AiCoFounder"
              className="h-5 w-auto"
            />
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-800 focus:outline-none"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex flex-col justify-between h-[calc(100%-4rem)] p-6">
          <div className="space-y-4 flex flex-col">
            <Link
              to="#"
              className="text-[#333333] hover:text-[#B85C44] font-medium text-lg"
            >
              Pricing
            </Link>
            <Link
              to="#"
              className="text-[#333333] hover:text-[#B85C44] font-medium text-lg"
            >
              Our story
            </Link>
          </div>

          <div className="space-y-4">
            <button className="w-full text-base px-4 py-[12px] bg-[#B85C44] text-white font-normal rounded-md hover:bg-[#a85035] transition">
              Get started
            </button>
            <button className="w-full text-base px-4 py-[12px] border border-gray-300 font-normal rounded-md text-black hover:bg-[#eceae4] transition">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
