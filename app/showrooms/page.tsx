import React from 'react';
import showroom1 from "@/public/showroom1.jpg"
import showroom2 from "@/public/showroom2.jpg"
import Image from 'next/image';

const ShowroomsSection = () => {

  
  const showrooms = [
    {
      name: 'SHORSH SHOWROOM',
      image: showroom1,
      description: 'Plenum offers a range of services dedicated to kitchen designers and kitchen studios, with the aim of providing innovative, top-quality design solutions.',
      phone: '+39 02 8909 2496'
    },
    {
      name: 'BAKHTYARI SHOWROOM',
      image: showroom2,
      description: 'Plenum offers a range of services dedicated to kitchen designers and kitchen studios, with the aim of providing innovative, top-quality design solutions.',
      phone: '+39 02 8909 2496'
    }
  ];

  return (
    <div className="bg-black text-white px-4 py-32 md:px-8 md:pt-44 lg:py-52 ">
      <h1 className="text-3xl md:text-5xl font-mansory mb-12 md:mb-20">SHOWROOMS</h1>
      
      <div className="grid md:grid-cols-2 gap-8 gap-y-10">
        {showrooms.map((showroom, index) => (
          <div key={index} className="space-y-4 ">
            <div className="relative">
              <Image
                src={showroom.image}
                alt={showroom.name}
                className="w-max h-max object-cover"
              />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-lg md:text-xl lg:text-[26px] tracking-wider font-mansory mt-6 lg:mt-10 lg:mb-8">
                {showroom.name}
              </h2>
              
              <p className="text-xs lg:text-sm text-gray-300 leading-relaxed md:w-[290px] lg:w-1/2">
                {showroom.description}
              </p>
              
              <p className="text-xs md:text-sm text-gray-300">
                Phone: {showroom.phone}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowroomsSection;