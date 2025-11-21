"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a3a2e]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-[#4a9d7f] rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
              <span className="text-white text-sm md:text-base font-bold">
                🌿
              </span>
            </div>
            <span className="text-white text-lg md:text-xl font-semibold">
              FlowVision.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-white hover:text-[#4a9d7f] transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white/80 hover:text-[#4a9d7f] transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-white/80 hover:text-[#4a9d7f] transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              href="/review"
              className="text-white/80 hover:text-[#4a9d7f] transition-colors font-medium"
            >
              Review
            </Link>
            <Link
              href="/contact"
              className="text-white/80 hover:text-[#4a9d7f] transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button
              aria-label="Search"
              className="hidden sm:flex w-9 h-9 md:w-10 md:h-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <svg
                className="w-4 h-4 md:w-5 md:h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button
              aria-label="Shopping Cart"
              className="hidden sm:flex w-9 h-9 md:w-10 md:h-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors relative"
            >
              <svg
                className="w-4 h-4 md:w-5 md:h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#4a9d7f] rounded-full text-xs flex items-center justify-center">
                0
              </span>
            </button>
            <button
              aria-label="User Account"
              className="hidden sm:flex w-9 h-9 md:w-10 md:h-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <svg
                className="w-4 h-4 md:w-5 md:h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1a3a2e] border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            <Link
              href="/"
              className="block text-white hover:text-[#4a9d7f] transition-colors font-medium py-2"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-white/80 hover:text-[#4a9d7f] transition-colors font-medium py-2"
            >
              About
            </Link>
            <Link
              href="/services"
              className="block text-white/80 hover:text-[#4a9d7f] transition-colors font-medium py-2"
            >
              Services
            </Link>
            <Link
              href="/review"
              className="block text-white/80 hover:text-[#4a9d7f] transition-colors font-medium py-2"
            >
              Review
            </Link>
            <Link
              href="/contact"
              className="block text-white/80 hover:text-[#4a9d7f] transition-colors font-medium py-2"
            >
              Contact
            </Link>
            <div className="flex gap-3 pt-4 border-t border-white/10">
              <button
                aria-label="Search"
                className="flex-1 h-10 flex items-center justify-center rounded-lg bg-white/10"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <button
                aria-label="Cart"
                className="flex-1 h-10 flex items-center justify-center rounded-lg bg-white/10 relative"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </button>
              <button
                aria-label="Account"
                className="flex-1 h-10 flex items-center justify-center rounded-lg bg-white/10"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
