import React from 'react';
import Image from 'next/image';
import partner from "@/public/Rectangle 3841.jpg";
import logo from"@/public/partner.png";



const PartnerSection = () => {
  return (
    <div className="bg-black text-white min-h-screen px-4 md:px-8 pt-52 pb-40">
      {/* Title Section */}
      <h1 className="text-4xl lg:text-5xl font-mansory mb-16">PARTNER</h1>
      
      {/* Banner Image Section with Overlay Text */}
      <div className="mb-16 relative">
        <div className="relative w-full aspect-[3/1]">
          <Image
            src={partner}
            alt="RSCC Group of Companies"
            className="w-full h-full object-cover"
            fill
          />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center space-x-4">
              <Image src={logo} alt={'partner logo'} className=" w-40 md:w-[400px] lg:w-[515px]" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Description Section */}
      <div className="space-y-6  md:text-left max-w-3xl md:mx-auto">
        <p>
          We are Iraq’s leading importer and supplier of the world’s finest tile products and related fixtures.
        </p>
        
        <p >
        We bring you the best quality tiles from across the globe. Ours is the largest showroom in Iraq and we feature
         a vast selection of tiles-from the time-honored classics to the latest design trends. 
        </p>

        <p >
        We provide personalized service and expert advice to corporate clients and private customers.
         Our design team provides beautiful solutions for your home, restaurant, retail, business or commercial building.
        </p>
      </div>
    </div>
  );
};

export default PartnerSection;
