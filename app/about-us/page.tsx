import React from 'react';
import Image from 'next/image';
import about from "@/public/about-us.jpg";

const PartnerSection = () => {
  return (
    <div className="bg-black text-white min-h-screen px-4 md:px-8 pt-52 pb-40">
      {/* Title Section */}
      <h1 className="text-4xl lg:text-5xl font-mansory mb-16">PARTNER</h1>
      
      {/* Banner Image Section */}
      <div className="mb-16 relative">
        <div className="relative w-full aspect-[3/1]">
          <Image
            src={about}
            alt="about us"
            className="w-max h-max object-cover"
             
          />
        </div>
      </div>
      
      {/* Description Section */}
      <div className="space-y-6  md:text-left max-w-3xl md:mx-auto">
        <h2 className="text-3xl md:text-4xl font-mansory uppercase pb-10">
           Together, for well-being
        </h2>
        <p>
          We design premium quality natural surfaces to inspire architects, designers, and all those who wish to shape places 
          where we can live well and feel confident. We are explorers, empathetic interpreters of reality in its every form.
           Thanks to the talent of our people, we set trend in terms of elegance and quality, using cutting-edge technologies 
           to ensure timeless surfaces that offer exceptional performance levels through sustainable production processes.
        </p>
        
        <p>
        From kitchen worktops to furnishing elements, flooring and cladding, and also exterior façades: for us, 
        every space tells a story.
        </p>

        <p>
        We are storytellers, unwavering supporters of responsible aesthetics that respect mankind and the environment, 
        that liaise with Nature and with the needs of its advocates.
        </p>
      </div>
    </div>
  );
};

export default PartnerSection;
