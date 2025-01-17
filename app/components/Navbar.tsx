"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logoA from "@/public/logA.png"
import logoB from "@/public/logb.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isBrandsDrawerOpen, setIsBrandsDrawerOpen] = useState(false);
  const [logoData, setLogoData] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  interface Brand {
    id: number;
    name: string;
    logo_url: string;
  }

  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const response = await fetch('http://plenum.a-h-y.com/api/brands');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setLogoData(data.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchLogo();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const toggleMenu = () => setIsOpen(!isOpen);



  const menuItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about-us" },
    { label: "PROJECT", href: "/projects" },
    { label: "BRANDS", href: "#", isBrands: true },
    { label: "PARTNER", href: "/partners" },
    { label: "SHOWROOMS", href: "/showrooms" },
    { label: "NEWS", href: "/news" },
  ];

  const handleMenuItemClick = (item: { label: string; href: string; isBrands?: undefined; } | { label: string; href: string; isBrands: boolean; }) => {
    if (item.isBrands && (isMobile || window.innerWidth < 1024)) {
      setIsBrandsDrawerOpen(true);
      setIsOpen(false);
    }
  };

  const BrandsDrawer = () => (
    <div className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ease-in-out ${isBrandsDrawerOpen ? "translate-x-0 bg-white" : "translate-x-full"
      }`}>
      <div className="flex flex-col h-full">
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsBrandsDrawerOpen(false)}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex-grow px-4 py-6 overflow-y-auto">
          {logoData.map((brand) => (
            <Link
              key={brand.id}
              href={brand.name}
              className="block pb-8 text-3xl hover:text-gray-700 text-black"
              onClick={() => setIsBrandsDrawerOpen(false)}
            >
              {brand.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

  const showBrandsDropdown = hoveredItem === "BRANDS" && !isMobile;
  const isExpanded = (isNavHovered || hoveredItem) && !isMobile;

  return (
    <>
      <nav className="w-full top-0 z-50 relative">
        <div
          className={`absolute inset-0 w-full bg-white transition-transform duration-500 ease-in-out origin-top -z-10 ${isExpanded ? 'scale-y-100' : 'scale-y-0'
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
              <div className="flex-shrink-0 flex items-center">
                <Link href="/">
                <div className="relative">
                  <Image
                    width={105}
                    height={60}
                    quality={100}
                    src={logoA}
                    alt="logo"
                    className={`w-max h-auto absolute transition-opacity duration-700 ${
                      isExpanded ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  <Image
                    width={105}
                    height={60}
                    quality={100}
                    src={logoB}
                    alt="logo"
                    className={`w-max h-auto transition-opacity duration-700 ${
                      isExpanded ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </div>
                </Link>
              </div>

              {/*for large screens*/}

              <div className="hidden lg:flex items-center justify-center gap-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`menu text-sm relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:transition-all after:duration-400 after:scale-x-0 hover:after:scale-x-100 ${isExpanded ? "text-gray-800 hover:text-black after:bg-black" : "text-white after:bg-white"
                      } transition-colors duration-500`}
                    onMouseEnter={() => setHoveredItem(item.label)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="hidden lg:flex items-center">
                <Link
                  href="/contact"
                  className={`text-sm hover:font-medium relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:transition-all after:duration-400 after:scale-x-0 hover:after:scale-x-100 ${isExpanded ? "text-black after:bg-black" : "text-white after:bg-white"
                    } transition-colors duration-500`}
                >
                  CONTACT
                </Link>
              </div>

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

          <div
            className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${showBrandsDropdown ? 'opacity-100 max-h-[110px]' : 'opacity-0 max-h-0'
              }`}
            onMouseEnter={() => setHoveredItem("BRANDS")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="container mx-auto px-4 py-6 flex items-center justify-center h-[150px]">
              <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
                {logoData.map((brand) => (
                  <div
                    key={brand.name}
                    id="brands"
                    className="flex items-center justify-center px-max py-max rounded-full transition-colors duration-300 p-5"
                  >
                    <Link href={"brands/" + brand.id}>
                      <Image
                        src={brand.logo_url}
                        alt={brand.name}
                        width={100}
                        height={40}
                        className="brand-image h-max px-6 transition-opacity duration-300 cursor-pointer"
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ease-in-out ${isOpen ? "translate-x-0 bg-white" : "translate-x-full"
            }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-end p-4">
              <button
                onClick={toggleMenu}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <X size={30} />
              </button>
            </div>


            {/* ipad and mobile */}
            <div className="flex-grow px-4 py-6 overflow-y-auto">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block pb-8 md:pb-12 text-4xl md:text-6xl hover:text-black text-gray-800"
                  onClick={() => {
                    handleMenuItemClick(item);
                    if (!item.isBrands) toggleMenu();
                  }}
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/contact"
                className="block text-4xl md:text-6xl hover:text-black text-gray-800"
                onClick={toggleMenu}
              >
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <BrandsDrawer />
    </>
  );
};

export default Navbar;