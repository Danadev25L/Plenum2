import React from 'react';
import Image from 'next/image';
import HeaderImg from '@/public/header.png';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HeaderImg}
          alt="Header Background"
          layout="fill"
          fill
          objectFit="cover"

        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        <Navbar />

        {/* Main content in the center */}
        <div className="flex-grow flex flex-col items-center justify-center text-white">
          <h1 className="text-3xl font-mansory uppercase sm:text-4xl md:text-5xl lg:text-6xl text-center mb-6">
            Materials made with<br />
            love, chosen for<br />
            your style.
          </h1>
        </div>

        {/* Button at the bottom */}
        <div className="flex justify-center pb-24 md:pb-14">
          <button className="custom-button cursor-pointer md:text-xl lg:text-sm">
            EXPLORE PLENUM
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
