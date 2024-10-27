"use client"
import image1 from "@/public/ab.png";
import image2 from "@/public/Infinity+logoL.png";
import image3 from "@/public/alapanaL.png";
import image4 from "@/public/armani+rocaL.png";
import image5 from "@/public/cobertL.png";
import image6 from "@/public/laminam.png"
import image7 from "@/public/prissmacerL.png";
import image8 from "@/public/rocca+.png"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
 
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
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

  const brandLogos = [
    { name: "AB", src: image1, width: 95, height: 60, href: "/brands/ab" },
    { name: "altaplania", src: image2, width: 150, height: 60, href: "/brands/altaplania" },
    { name: "ARMANI/Roca", src: image3, width: 140, height: 60, href: "/brands/armani-roca" },
    { name: "COBERT", src: image4, width: 140, height: 70, href: "/brands/cobert" },
    { name: "INFINITY", src: image5, width: 120, height: 60, href: "/brands/infinity" },
    { name: "LAMINAM", src: image6, width: 140, height: 60, href: "/brands/laminam" },
    { name: "pristmacer", src: image7, width: 140, height: 60, href: "/brands/pristmacer" },
    { name: "Roca", src: image8, width: 100, height: 60, href: "/brands/roca" }
];

  

  const menuItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about-us" },
    { label: "PROJECT", href: "/projects" },
    { label: "BRANDS", href: "/" },
    { label: "PARTNER", href: "/partners" },
    { label: "SHOWROOM", href: "/showroom" },
    { label: "NEWS", href: "/news" },
  ];

  const showBrandsDropdown = hoveredItem === "BRANDS" && !isMobile;
  const isExpanded = (isNavHovered || hoveredItem) && !isMobile;

  return (
    <nav className="w-full top-0 z-50 relative">
      {/* Single Background Element */}
      <div 
        className={`absolute inset-0 w-full bg-white transition-transform duration-500 ease-in-out origin-top -z-10 ${
          isExpanded ? 'scale-y-100' : 'scale-y-0'
        }`}
        style={{ 
          height: showBrandsDropdown ? 'calc(100% + 60px)' : '100%',
          transition: 'transform 500ms ease-in-out, height 500ms ease-in-out'
        }}
      />

      <div
        className="relative"
        onMouseEnter={() => !isMobile && setIsNavHovered(true)}
        onMouseLeave={() => {
          if (!isMobile) {
            setIsNavHovered(false);
            setHoveredItem(null);
          }
        }}
      >
        <div className="px-4 md:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <img
                  src={isExpanded ? "/logo_black.png" : "/logo_white.png"}
                  alt="logo"
                  className="w-24 h-auto transition-opacity duration-500"
                />
              </Link>
            </div>

            {/* Menu Items - Hidden on Small Screens */}
            <div className="hidden lg:flex items-center justify-center gap-8">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`menu text-sm relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:transition-all after:duration-400 after:scale-x-0 hover:after:scale-x-100 ${
                    isExpanded ? "text-gray-800 hover:text-black after:bg-black" : "text-white after:bg-white"
                  } transition-colors duration-500`}
                  onMouseEnter={() => setHoveredItem(item.label)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Contact Button - Hidden on Small Screens */}
            <div className="hidden lg:flex items-center">
              <Link 
                href="/contact" 
                className={`text-sm hover:font-medium relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:transition-all after:duration-400 after:scale-x-0 hover:after:scale-x-100 ${
                  isExpanded ? "text-black after:bg-black" : "text-white after:bg-white"
                } transition-colors duration-500`}
              >
                CONTACT
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-500 focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Brands Content */}
        <div 
          className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${
            showBrandsDropdown ? 'opacity-100 max-h-[110px]' : 'opacity-0 max-h-0'
          }`}
          onMouseEnter={() => setHoveredItem("BRANDS")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div className="container mx-auto px-4 py-6 flex items-center justify-center h-[150px]">
            <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
              {brandLogos.map((brand) => (
                <div 
                  key={brand.name} 
                  id="brands"
                  className="flex items-center justify-center px-max py-max rounded-full transition-colors duration-300" 
                > <Link href={`${brand.href}`}>
                  <Image
                    src={brand.src}
                    alt={brand.name}
                    width={brand.width}
                    height={brand.height}
                    className="brand-image h-max px-6 transition-opacity duration-300"
                  />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
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
