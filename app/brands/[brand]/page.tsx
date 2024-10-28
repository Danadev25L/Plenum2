import React from 'react';
import Image from 'next/image';
import logoImage from '@/public/rocca.png';
import mainImage from '@/public/br1.jpg';
import image1 from '@/public/br2.jpg'
import image2 from '@/public/br3.jpg'
import image3 from '@/public/br4.jpg'

const images = [

  { src: image1, alt: 'Image 1' },
  { src: image2, alt: 'Image 2' },
  { src: image3, alt: 'Image 3' },
  { src: image1, alt: 'Image 4' },
  { src: image2, alt: 'Image 5' },
  { src: image3, alt: 'Image 6' },
  { src: image1, alt: 'Image 7' },
  { src: image2, alt: 'Image 8' },
  { src: image3, alt: 'Image 9' },
]

const RocaPromo = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-40">
      {/* Title Section */}
      <div className="px-4 md:px-8 mb-16">
        <h1 className="text-3xl md:text-5xl font-mansory">ROCA</h1>
      </div>

      {/* Blue Banner with Logo Section */}
      <div className=" py-16 relative flex justify-center items-center h-[200px] md:h-[300px] lg:h-[450px]"
      style={{backgroundColor:"#075FA7"}}
      >
        <Image
          src={logoImage}
          alt="Roca Logo"
          className="w-24 md:w-48 h-auto absolute"
        />
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Title and Description */}
        <div className="mt-28   space-y-6 lg:space-y-10 md:text-center text-left">
          <h2 className="text-lg md:text-xl lg:text-3xl font-mansory max-w-xl mx-auto text-left">
          PROMOTE INNOVATIVE <br />  SOLUTIONS FOR PROFESSIONALS
          </h2>
          <p className="text-gray-300 text-sm lg:text-base max-w-xl md:mx-auto text-left">
          Plenum values well-established brand names, especially in fashion. A brand like Roca with soft and enveloping shapes,
         the finest raw materials, timeless color combinations, and key decorative elements of the Maison.           </p>
        </div>

        {/* New Image Placeholder */}
        <div className="mt-12 md:flex md:justify-center">
          <div className="w-full md:w-[800px] h-max ">
           <Image src={mainImage} alt={'main-img'} />
          </div>
        </div>


        {/* Bottom Description */}
        <div className="mt-10 lg:mt-20 space-y-4 md:text-center text-left pb-16">
          <p className="text-gray-300 text-sm lg:text-base max-w-xl md:mx-auto text-left">
          Founded in 1917 in Gavà, Spain, Roca is synonymous with excellence in bathroom furnishings and ceramics worldwide.
           Since its inception, Roca has been at the forefront of design and innovation, blending tradition with cutting-edge technology. 
           Over the years, the brand has expanded its influence globally, maintaining its reputation for superior craftsmanship and style.          </p>
          <p className="text-gray-300 text-sm lg:text-base max-w-xl md:mx-auto text-left">
          This living project is completed with a line of bathroom furnishings for an ALL-ROUND LOOK featuring the unmistakable Roca style.           </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-1 gap-y-1 md:gap-y-2 md:gap-x-2 lg:gap-y-3 lg:gap-x-2 pb-32 md:pb-60">
          {images.map((image, index) => (
            <div key={index} className=" max-w-[460px] max-h-[300px]">
              <Image 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RocaPromo;
