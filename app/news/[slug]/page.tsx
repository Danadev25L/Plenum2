import Navbar from '@/app/components/Navbar';
import React from 'react';
import Image from 'next/image';
import image1 from "@/public/news1.jpg"
import image2 from "@/public/news22.jpg"
import image3 from "@/public/news3.jpg"
import NewsPage from '../page';

const SingleNews = () => {
  return (
    <div className='bg-black'>
      <Navbar />
      <div className="text-white min-h-screen px-4 pt-16 md:pt-[120px] sm:p-8 flex justify-center">
        <div className="max-w-full sm:max-w-[665px] space-y-6 sm:space-y-8">
          <h1 className="text-2xl md:text-4xl font-mansory text-center mb-4 w-full sm:w-[665px]">
            VISIT OF MR JUAN JOSÉ ESCOBAR STEMMANN (AMBASSADOR OF SPAIN IN IRAQ) TO OUR SHOWROOM
          </h1>
          
            <div className="flex flex-col items-center space-y-2">
              <p className="text-center text-xs sm:text-sm">September 2024</p>
              <span className="bg-gray-800 px-2 py-1 rounded-xl text-[10px] md:text-xs text-center">NEWS</span>
            </div>

          
          <Image
            src={image1}
            alt="News image"
            width={665}
            height={600}
            className="w-full h-auto"
          />
          
          <h1 className="text-sm md:text-2xl uppercase text-start font-mansory">
            AS WE EXPERIENCE A REAL REVOLUTION IN THE WAY WE WORK, WE BEGAN TO WONDER HOW THE ARCHITECTURE OF WORKSPACES IS EVOLVING.
          </h1>
          
          <p className="text-xs md:text-[16px] leading-normal">
            Located in the province of Navarre, Nagar S.p.A. is an Italian leader in the field of taps and bathroom fittings. The only European company in the sector with an entirely integrated production cycle, every year it produces over 6.5 million pieces destined for the world market. Its collection includes over 8,000 articles divided into more than 30 product families. The Noken Technology Centre, its new brand showroom, has a fresh and innovative smart space that combines functional areas with product exhibition, creating an extremely high-quality showcase with a very low environmental impact.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Image
              src={image2}
              alt="News image"
              width={322}
              height={375}
              className="w-full sm:w-auto h-auto"
            />
            <Image
              src={image3}
              alt="News image"
              width={322}
              height={375}
              className="w-full sm:w-auto h-auto"
            />
          </div>
          
          <p className="text-xs md:text-[16px] leading-normal">
            Located in the province of Navarre, Nagar S.p.A. is an Italian leader in the field of taps and bathroom fittings. The only European company in the sector with an entirely integrated production cycle, every year it produces over 6.5 million pieces destined for the world market. Its collection includes over 8,000 articles divided into more than 30 product families. The Noken Technology Centre, its new brand showroom, has a fresh and innovative smart space that combines functional areas with product exhibition, creating an extremely high-quality showcase with a very low environmental impact.
          </p>
        </div>
      </div>
       {/* Related News Section */}
       <div className='pt-36 md:pt-52'>
        <h2 className=' text-white text-3xl md:text-5xl font-mansory uppercase px-9 '>read also</h2>
        <NewsPage itemsToShow={3} showNavbar={false} showTitle={false} paddingButton={10}/>
        </div>
    </div>
  );
};

export default SingleNews;
