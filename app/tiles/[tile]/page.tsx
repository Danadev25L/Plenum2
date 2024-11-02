"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';


const InteriorPortfolio = () => {
 const params = useParams();

interface Tile {
  name: string;
  image_url:string
}

// Update the state declaration
const [tiles, setTiles] = useState<Tile>({
  name: '',
  image_url:''
  // Initialize other properties as needed
});


useEffect(() => {
  const fetchTiles = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/tile-types/${params.tile}`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setTiles(data.data);
    } catch (error) {
      console.error('Error fetching news:', error);
    }  
  };

  fetchTiles();
}, [params.tile]);

  
  return (
    <div className="min-h-screen bg-black px-4 py-16 sm:py-24 md:py-4 lg:py-24 md:px-6 lg:px-8">
      {/* Logo */}
      <h1 className='text-white text-3xl md:text-4xl lg:text-5xl font-mansory uppercase mt-14 md:mt-40 mb-10 md:mb-28 lg:mb-36'>{tiles.name}</h1>

      <div className="mb-8 pt-8 sm:pt-0">

        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-light ">prismacer</h1>
      </div>

      {/* Main Container */}
      <div className="flex flex-col gap-6 sm:gap-3">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row gap-4 sm:gap-2 h-auto md:h-[700px]">
          {/* Top Left - Large Image */}
          <div className="relative group overflow-hidden md:flex-1 h-[300px] sm:h-[400px] md:h-full">
            {tiles.image_url &&
            <Image
             width={800}
             height={600}
              src={tiles.image_url}
              alt="Modern living room with lake view"
              className="w-full h-full object-cover"
              priority
            /> }

          </div>

          {/* Top Right - Two Square Images Stack */}
          <div className="flex flex-col gap-4 sm:gap-2 h-auto md:h-full">
            <div className="relative group overflow-hidden h-[300px] sm:h-[400px] md:h-[350px]">
              {tiles.image_url &&
              <Image
              width={800}
              height={600}            
               src={tiles.image_url}
               alt="Modern kitchen design"
               className="w-full md:w-[300px] lg:w-[450px] h-full object-cover"
             /> }
              
            </div>
            <div className="relative group overflow-hidden h-[300px] sm:h-[400px] md:h-[350px]">
            {tiles.image_url &&
              <Image
              width={800}
              height={600}            
               src={tiles.image_url}
               alt="Modern kitchen design"
               className="w-full md:w-[300px] lg:w-[450px] h-full object-cover"
             /> }
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row gap-4 sm:gap-2 h-auto md:h-[700px]">
          {/* Bottom Left - Two Square Images Side by Side */}
          <div className="flex flex-col gap-4 sm:gap-2 h-auto md:h-full">
            <div className="relative group overflow-hidden h-[300px] sm:h-[400px] md:h-[350px]">
            {tiles.image_url &&
              <Image
              width={800}
              height={600}            
               src={tiles.image_url}
               alt="Modern kitchen design"
               className="w-full md:w-[300px] lg:w-[450px] h-full object-cover"
             /> }
            </div>
            <div className="relative group overflow-hidden h-[300px] sm:h-[400px] md:h-[350px]">
            {tiles.image_url &&
              <Image
              width={800}
              height={600}            
               src={tiles.image_url}
               alt="Modern kitchen design"
               className="w-full md:w-[300px] lg:w-[450px] h-full object-cover"
             /> }
            </div>
          </div>

          {/* Bottom Right - Large Image */}
          <div className="relative group overflow-hidden md:flex-1 h-[300px] sm:h-[400px] md:h-full">
            {tiles.image_url &&
            <Image
              src={tiles.image_url}
              width={800}
              height={600}
              alt="Spacious modern room"
              className="w-full h-full object-cover"
            />
            }

          </div>
        </div>
      </div>
    </div>
  );
};

export default InteriorPortfolio;
