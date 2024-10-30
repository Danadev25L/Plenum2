"use client"
import React, { Suspense, useState, useEffect } from 'react';
import Image from 'next/image';
import image1 from "@/public/f1.png";
import image2 from "@/public/f2.png";
import image3 from "@/public/f3.png";
import image4 from "@/public/f4.png";
import image5 from "@/public/f5.png";
import image6 from "@/public/f6.png";

const floorTileImages = [
  { src: image1, alt: 'Living room with large windows', caption: 'prismacer' },
  { src: image2, alt: 'Modern living room', caption: 'AB' },
  { src: image3, alt: 'Kitchen with dining area', caption: 'prismacer' },
  { src: image4, alt: 'Minimalist living room', caption: 'prismacer' },
  { src: image5, alt: 'Living room with marble floor', caption: 'AB' },
  { src: image6, alt: 'Modern living room with accent colors', caption: 'prismacer' },
];

const FloorTilesGallery: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate image loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the time if needed
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <button className="inline-block rounded-full bg-teal-500 text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-green-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-green-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-green-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0" type="button">
          <div role="status" className="inline-block h-3 w-3 mr-2 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]">
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
          </div>
          Loading
        </button>
      </div>
    );
  }

  return (
    <div className='bg-black pt-40 '>
      <div className="text-white px-4 md:p-8 overflow-hidden">
        <h1 className="text-4xl md:text-5xl font-mansory my-12 mx-auto">FLOOR TILES</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-6 pb-36">
          {floorTileImages.map((image, index) => (
            <div key={index} className="flex flex-col items-start w-full max-w-[500px] mx-auto">
              <div className="w-full h-[300px]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-sm"
                />
              </div>
              <p className=" text-lg md:text-2xl bg-black bg-opacity-50 py-1 rounded">
                {image.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FloorTilesGalleryWithSuspense: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FloorTilesGallery />
    </Suspense>
  );
};

export default FloorTilesGalleryWithSuspense;
