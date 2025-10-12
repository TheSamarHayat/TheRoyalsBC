"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationLinks = [
    { href: "/", label: "HOME", isActive: true },
    { href: "/gallery", label: "GALLERY", isActive: false },
    { href: "/contact", label: "CONTACT US", isActive: false },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm relative">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logoblue.png"
                alt="The Royals Badminton Club"
                width={60}
                height={60}
                className="rounded-full"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`font-semibold hover:text-primary transition-colors ${
                  link.isActive
                    ? "text-primary hover:text-primary/80"
                    : "text-gray-700 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Modal Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/50 transition-opacity duration-300"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Modal Content */}
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <div
                className={`bg-white rounded-lg shadow-xl w-[90%] max-w-md transform transition-all duration-300 ${
                  isMenuOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
                }`}
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <div className="flex items-center">
                    <Image
                      src="/images/logoblue.png"
                      alt="The Royals Badminton Club"
                      width={40}
                      height={40}
                      className="rounded-full mr-3"
                    />
                    <span className="font-bold text-gray-800">Menu</span>
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5 text-gray-700" />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-6">
                  <nav className="flex flex-col space-y-4">
                    {navigationLinks.map((link, index) => (
                      <Link
                        key={index}
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`font-semibold hover:text-primary transition-colors py-3 px-4 rounded-md hover:bg-gray-50 ${
                          link.isActive
                            ? "text-primary bg-primary/10"
                            : "text-gray-700"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>

                {/* Modal Footer */}
                <div className="bg-primary h-2 rounded-b-lg"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
