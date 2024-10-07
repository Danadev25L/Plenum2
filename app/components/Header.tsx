import React from 'react'
import Image from 'next/image'
import HeaderImg from '@/public/header.png'
import Navbar from './Navbar'


const Header = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 z-0">
        <Image
          src={HeaderImg}
          alt="Header Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="relative z-10 h-full flex flex-col">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-6 max-w-2xl  pb-28">
              Materials made with<br />
              love, chosen for<br />
              your style.
            </h1>

            <button className="custom-button">
            EXPLORE PLENUM
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header