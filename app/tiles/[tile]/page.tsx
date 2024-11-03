"use client"
import React, { useEffect, useState } from 'react';
 import { useParams } from 'next/navigation';


const InteriorPortfolio = () => {
  const params = useParams();

  interface Image {
    image_url: string;
    id: number;
  }
  
  interface GalleryItem {
    brand_name: string;
    images: Image[];
  }
  
  interface Tile {
    brand_name: string;
    gallery: GalleryItem[];
  }
  
  // Update the state declaration
  const [tiles, setTiles] = useState<Tile>({
    brand_name: '',
    gallery: []
  });


  useEffect(() => {
    const fetchTiles = async () => {
      try {
        const response = await fetch(`http://plenum.a-h-y.com/api/tile-types/${params.tile}`);

        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setTiles(data.data);
        console.log("saad = ", data);


      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchTiles();
  }, [params.tile]);


  return (
    <div className="min-h-screen bg-black px-4 py-16 sm:py-24 md:py-4 lg:py-24 md:px-6 lg:px-8">
      {/* Logo */}
      <h1 className='text-white text-3xl md:text-4xl lg:text-5xl font-mansory uppercase mt-14 md:mt-40 mb-10 md:mb-28 lg:mb-10'>{tiles.brand_name}</h1>

      {/* Main Container */}
      {tiles?.gallery?.map((item: GalleryItem, index: number) => {
        return (
          <React.Fragment key={index}>
            <div className='w-full flex flex-col justify-center items-center gap-4'>
              <h1 className='text-white text-xl md:text-2xl lg:text-3xl font-mansory uppercase mt-14 md:mt-40 mb-10 md:mb-28 lg:mb-10 w-full text-start'>{item?.brand_name}</h1>
              {/* Left */}
              {item?.images.length >= 3 && (
                <div className="relative w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <div className='col-span-1 lg:col-span-2'>
                    <img src={item?.images[0].image_url} alt="tile-image" className='h-auto lg:h-full w-full' />
                  </div>
                  <div className='flex flex-col justify-center items-center gap-4'>
                    <img src={item?.images[1].image_url} alt="tile-image" className='w-full' />
                    <img src={item?.images[2].image_url} alt="tile-image" className='w-full' />
                  </div>
                </div>
              )}
              {/* Right */}
              {item?.images.length > 3 && item?.images.length <= 6 && (
                <div className="relative w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <div className='flex flex-col justify-center items-center gap-4'>
                    <img src={item?.images[3].image_url} alt="tile-image" className='w-full' />
                    <img src={item?.images[4].image_url} alt="tile-image" className='w-full' />
                  </div>
                  <div className='col-span-1 lg:col-span-2'>
                    <img src={item?.images[5].image_url} alt="tile-image" className='h-auto lg:h-full w-full' />
                  </div>
                </div>
              )}
            </div>
          </React.Fragment>
        )
      })}

    </div>
  );
};

export default InteriorPortfolio;
