"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-[69px]">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <a
            href="/"
            className="flex items-center text-gray-800 text-lg font-semibold"
          >
            <img
              src="/aicofounder-logo-black.svg"
              alt="AiCoFounder"
              className="h-7 w-auto"
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-5">
          <a
            href="#"
            className="text-[#4D4D4C] hover:text-[#B85C44] text-sm font-medium"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-[#4D4D4C] hover:text-[#B85C44] text-sm font-medium"
          >
            Our story
          </a>

          <div className="flex items-center space-x-3">
            <button className="border border-gray-300 text-gray-700 text-sm font-medium px-4 py-2 rounded-md hover:bg-[#ECE9E2] transition">
              Sign in
            </button>
            <button className="bg-[#B85C44] text-white px-4 py-2 text-sm font-medium rounded-md hover:bg-[#a8503b] transition">
              Get started
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
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

      {/* Mobile Drawer */}
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
        {/* Mobile Drawer Header */}
        <div className="flex justify-between items-center p-5 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <img
              src="/aicofounder-logo.svg"
              alt="AiCoFounder"
              className="h-5 w-auto"
            />
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-800 focus:outline-none"
          >
            <X size={22} />
          </button>
        </div>

        {/* Mobile Menu Items */}
        <div className="flex flex-col justify-between h-[calc(100%-4rem)] p-6">
          <div className="space-y-4 flex flex-col">
            <a
              href="#"
              className="text-[#333333] hover:text-[#B85C44] font-medium text-lg"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-[#333333] hover:text-[#B85C44] font-medium text-lg"
            >
              Our story
            </a>
          </div>

          <div className="space-y-3">
            <button className="w-full px-4 py-3 bg-[#c1603f] text-white font-medium rounded-lg hover:bg-[#a85035] transition">
              Get started
            </button>
            <button className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 hover:bg-gray-100 transition">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
