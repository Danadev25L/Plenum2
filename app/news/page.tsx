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
    link: '/news/1', // Add the link for navigation
  },
  {
    id: 2,
    image: image11,
    title: 'VISIT OF MR. JUAN JOSÉ ESCOBAR STEMMANN (AMBASSADOR OF SPAIN IN IRAQ) TO OUR SHOWROOM',
    date: 'September 2024',
    link: '/news/2', // Add the link for navigation
  },
  {
    id: 3,
    image: image10,
    title: 'VISIT OF MR. JUAN JOSÉ ESCOBAR STEMMANN (AMBASSADOR OF SPAIN IN IRAQ) TO OUR SHOWROOM',
    date: 'September 2024',
    link: '/news/3', // Add the link for navigation
  },
  {
    id: 4,
    image: image11,
    title: 'VISIT OF MR. JUAN JOSÉ ESCOBAR STEMMANN (AMBASSADOR OF SPAIN IN IRAQ) TO OUR SHOWROOM',
    date: 'September 2024',
    link: '/news/4', // Add the link for navigation
  },
  {
    id: 5,
    image: image10,
    title: 'VISIT OF MR. JUAN JOSÉ ESCOBAR STEMMANN (AMBASSADOR OF SPAIN IN IRAQ) TO OUR SHOWROOM',
    date: 'September 2024',
    link: '/news/5', // Add the link for navigation
  },
  {
    id: 6,
    image: image11,
    title: 'VISIT OF MR. JUAN JOSÉ ESCOBAR STEMMANN (AMBASSADOR OF SPAIN IN IRAQ) TO OUR SHOWROOM',
    date: 'September 2024',
    link: '/news/6', // Add the link for navigation
  },
];

const NewsPage = () => {
  return (
    <div className='bg-black text-white'>
      <div className='container px-2 md:px-20 pt-72'>
        <div className="translate-y-[-100px]">
          <h1 className='text-5xl md:text-6xl font-light py-5 '>NEWS</h1>
          <span className=' md:text-lg text-md'>
            (6) ARTICLE
          </span>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10'>
            {newsItems.map(item => (
              <Link key={item.id} href={item.link} className='flex flex-col md:flex-row bg-black p-3  hover:bg-gray-800 transition duration-200'>
                <Image src={item.image} alt='news image' width={300} height={400} className='object-cover md:w-1/2' />
                <div className='texts pl-3 flex flex-col justify-between md:w-1/2'>
                  <div className='flex items-start justify-between'>
                    <h1 className='font-light text-white text-sm md:text-md'>{item.title}</h1>
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
