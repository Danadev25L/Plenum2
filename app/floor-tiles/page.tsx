import React from 'react';
import image1 from "@/public/f1.png"
import image2 from "@/public/f2.png"
import image3 from "@/public/f3.png"
import image4 from "@/public/f4.png"
import image5 from "@/public/f5.png"
import image6 from "@/public/f6.png"
import image7 from "@/public/f7.png"
import image8 from "@/public/f8.png"
import image9 from "@/public/f9.png"
import image10 from "@/public/f10.png"
import image11 from "@/public/f11.png"
import image12 from "@/public/f12.png"
import Image from 'next/image';
import Navbar from '../components/Navbar';

const floorTileImages = [
  { src: image1, alt: 'Living room with large windows', caption: 'prismacer' },
  { src: image2, alt: 'Modern living room', caption: 'AB' },
  { src: image3, alt: 'Kitchen with dining area', caption: 'prismacer' },
  { src: image4, alt: 'Minimalist living room', caption: 'prismacer' },
  { src: image5, alt: 'Living room with marble floor', caption: 'AB' },
  { src: image6, alt: 'Modern living room with accent colors', caption: 'prismacer' },
  { src: image7, alt: 'Minimalist living room', caption: 'prismacer' },
  { src: image8, alt: 'Living room with marble floor', caption: 'AB' },
  { src: image9, alt: 'Modern living room with accent colors', caption: 'prismacer' },
  { src: image10, alt: 'Minimalist living room', caption: 'prismacer' },
  { src: image11, alt: 'Living room with marble floor', caption: 'AB' },
  { src: image12, alt: 'Modern living room with accent colors', caption: 'prismacer' },
];

const FloorTilesGallery: React.FC = () => {
  return (

  <div className='bg-black'>
      <Navbar  />
    <div className=" text-white p-4 md:p-8 overflow-hidden mt-10">
          <h1 className="text-5xl md:text-6xl font-light my-12">FLOOR TILES</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 pb-36">
            {floorTileImages.map((image, index) => (
              <div key={index} className="relative flex justify-center">
                <div className="w-full max-w-[450px] h-[300px]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover rounded-sm"
                  />
                  <p className="absolute bottom-2 right-2 text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
                    {image.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};

export default FloorTilesGallery;