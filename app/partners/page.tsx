"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
 


const PartnerSection = () => {


  interface Partner {
    image_url: string;
    descreption: string;
    // Add other properties your partner data might have
  }
  const [partners, setPartners] = useState<Partner>({
    image_url: '',
    descreption: ''
    // Initialize other properties as needed
  });
  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/partners");
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setPartners(data.data);
        console.log('Partners data:', data.data); // Log the data directly
      } catch (error) {
        console.error('Error fetching news:', error);
      }  
    };
  
    fetchPartners();
  }, []);

  
  return (
    <div className="bg-black text-white min-h-screen px-4 md:px-8 pt-52 pb-40">
      {/* Title Section */}
      <h1 className="text-4xl lg:text-5xl font-mansory mb-16">PARTNER</h1>
      
      {/* Banner Image Section with Overlay Text */}
      <div className="mb-16">
        {partners.image_url && 
            <Image
            src={partners.image_url
              }
            alt="RSCC Group of Companies"
            className="w-full h-full object-cover"
            fill
          />
        }

          
       </div>
      
      {/* Description Section */}
      <div className="space-y-6  md:text-left max-w-3xl md:mx-auto">
        <p className='text-white'>
        {partners.descreption}
        </p>
        
      </div>
    </div>
  );
};

export default PartnerSection;
