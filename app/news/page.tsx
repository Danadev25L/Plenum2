import React from 'react';
import { HiArrowRight } from 'react-icons/hi';
import Image from 'next/image';
import Link from 'next/link';
import image10 from '@/public/spain+5 1.png';
import image11 from '@/public/spain+5 2.png';

const newsItems = [
  {
    id: 1,
    image: image10,
    title: 'VISIT OF MR. JUAN JOSÉ ESCOBAR STEMMANN (AMBASSADOR OF SPAIN IN IRAQ) TO OUR SHOWROOM',
    date: 'September 2024',
    link: '/news/1',
  },
  {
    id: 2,
    image: image11,
    title: 'VISIT OF MR. JUAN JOSÉ ESCOBAR STEMMANN (AMBASSADOR OF SPAIN IN IRAQ) TO OUR SHOWROOM',
    date: 'September 2024',
    link: '/news/2',
  },
  {
    id: 3,
    image: image10,
    title: 'VISIT OF MR. JUAN JOSÉ ESCOBAR STEMMANN (AMBASSADOR OF SPAIN IN IRAQ) TO OUR SHOWROOM',
    date: 'September 2024',
    link: '/news/3',
  },
  {
    id: 4,
    image: image11,
    title: 'VISIT OF MR. JUAN JOSÉ ESCOBAR STEMMANN (AMBASSADOR OF SPAIN IN IRAQ) TO OUR SHOWROOM',
    date: 'September 2024',
    link: '/news/4',
  },
  {
    id: 5,
    image: image10,
    title: 'VISIT OF MR. JUAN JOSÉ ESCOBAR STEMMANN (AMBASSADOR OF SPAIN IN IRAQ) TO OUR SHOWROOM',
    date: 'September 2024',
    link: '/news/5',
  },
  {
    id: 6,
    image: image11,
    title: 'VISIT OF MR. JUAN JOSÉ ESCOBAR STEMMANN (AMBASSADOR OF SPAIN IN IRAQ) TO OUR SHOWROOM',
    date: 'September 2024',
    link: '/news/6',
  },
];

const NewsPage = ({ itemsToShow = newsItems.length, showTitle = true , paddingTop = 56}) => {
  const displayedItems = newsItems.slice(0, itemsToShow);

  return (
    <div className={`bg-black text-white pt-${paddingTop} pb-40`}>
      <div className={`text-white px-4 md:px-8 pt-16 md:pt-24 `}>
        <div className="translate-y-[-100px]">
          {showTitle && (
            <>
              <h1 className='text-5xl md:text-6xl font-mansory py-5'>NEWS</h1>
              <span className='md:text-lg text-md'>
                ({displayedItems.length}) ARTICLE
              </span>
            </>
          )}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10'>
            {displayedItems.map(item => (
              <Link key={item.id} href={item.link} className='flex flex-col md:flex-row bg-black p-3 hover:bg-gray-800 transition duration-200'>
                <Image src={item.image} alt='news image' width={300} height={400} className='object-cover md:w-1/2' />
                <div className='texts pl-3 flex flex-col justify-between md:w-1/2'>
                  <div className='flex items-start justify-between'>
                    <h1 className='font-mansory text-white text-sm md:text-md '>{item.title}</h1>
                    <span className='cursor-pointer'>
                      <HiArrowRight size={16} color='gray' />
                    </span>
                  </div>
                  <div className='flex text-start gap-2 items-center mt-2'>
                    <span className='rounded-xl bg-gray-500 px-2 text-xs md:text-md'>NEWS</span>
                    <span className='text-xs md:text-md'>{item.date}</span>
                  </div>
                  <hr className='border-gray-500 my-2' />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
