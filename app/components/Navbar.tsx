"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import whiteLogo from "@/public/logo_white.png";
import blackLogo from "@/public/logo_black.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState<string | boolean>(false);
  const [isMobile, setIsMobile] = useState(false); 

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
     const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); 
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { label: "PROJECTS", href: "/projects" },
    { label: "WALL TILES", href: "/walls" },
    { label: "FLOOR TILES", href: "/floors" },
    { label: "ROOF TILES", href: "/roofs" },
    { label: "BATH & WC", href: "/bath-wc" },
    { label: "ARCHIVE", href: "/archive" },
  ];

  return (
    <nav
      className={`transition-all duration-700 ease-in-out ${
        isHovered && !isMobile ? "lg:bg-white lg:text-black" : "bg-transparent text-white"
      }`}
      onMouseEnter={() => !isMobile && setIsHovered(true)} // Only apply hover on non-mobile
      onMouseLeave={() => !isMobile && setIsHovered(false)}
    >
      <div className="px-4 md:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image
                src={isHovered && !isMobile ? blackLogo : whiteLogo} // Mobile uses white logo
                alt="logo"
                width={100}
                height={50}
              />
            </Link>
          </div>

          {/* Menu Items - Hidden on Small Screens */}
          <div className="hidden lg:flex items-center justify-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={` text-sm font-medium relative ${
                  isHovered ? "text-black" : "text-white"
                } ${isHovered === item.label ? "underline" : ""}`}
                onMouseEnter={() => setIsHovered(item.label)}
                onMouseLeave={() => setIsHovered("")}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Contact Button - Hidden on Small Screens */}
          <div className="hidden lg:flex items-center">
            <Link href="/contact" className="text-sm font-medium">
              CONTACT
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (for medium screens and smaller) */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0 bg-white" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-4">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-grow px-4 py-6 overflow-y-auto">
            <Link href="/">
              <h2 className="text-4xl md:text-7xl text-gray-800 pb-32 md:pb-36">HOME</h2>
            </Link>
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block pb-8 md:pb-12 text-4xl md:text-7xl hover:text-gray-700 text-black"
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}

            {/* Contact in Mobile Menu */}
            <Link
              href="/contact"
              className="block text-4xl md:text-7xl hover:text-gray-700 text-black"
              onClick={toggleMenu}
            >
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
