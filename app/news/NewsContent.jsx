"use client";
import React, { useEffect, useRef, useState, Suspense } from 'react';
import { HiArrowRight } from 'react-icons/hi';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const API_URL = 'http://localhost:8000';

const NewsPage = ({
  itemsToShow = Infinity,
  showTitle = true,
  paddingTop = 208,
  paddingBottom = 160
}) => {
  const [news, setNews] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(true);
  const cursorRef = useRef(null);

  const handleMouseMove = (e) => {
    const cursor = cursorRef.current;
    if (cursor) {
      cursor.style.transform = `translate(${e.clientX - 50}px, ${e.clientY - 50}px)`;
    }
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`${API_URL}/api/news`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setNews(data.data);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // Calculate displayed items based on itemsToShow prop
  const displayedItems = news.slice(0, itemsToShow);

  if (loading) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <button className="inline-block rounded-full bg-[#26B3B4] text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0 cursor-wait">
          <div role="status" className="inline-block h-3 w-3 mr-2 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]">
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
          </div>
          Loading
        </button>
      </div>
    );
  }

  return (
    <div 
      className="bg-black text-white"
      style={{ 
        paddingTop: `${paddingTop}px`, 
        paddingBottom: `${paddingBottom}px`
      }}
      onMouseMove={handleMouseMove}
    >
      <div
        id="cursor"
        ref={cursorRef}
        className={`fixed top-0 left-0 w-[100px] h-[100px] pointer-events-none z-50 transition-transform duration-300 rounded-full ${
          isHovered ? 'opacity-100 scale-1' : 'opacity-0 scale-0'
        }`}
        style={{
          transform: 'translate(-50%, -50%)',
          backdropFilter: 'blur(5px)',
          backgroundColor: 'rgba(0, 0, 0, 0.35)',
        }}
      >
        <div className="cursor-inner relative w-full h-full rounded-full">
          <div className="cursor-circle absolute inset-0 flex items-center justify-center">
            <span className="text-white text-lg">DISCOVER</span>
          </div>
        </div>
      </div>

      <div className="text-white px-4 md:px-8 pt-16 md:pt-24">
        <div className="translate-y-[-100px]">
          {showTitle && (
            <>
              <h1 className="text-5xl md:text-6xl font-mansory py-5">NEWS</h1>
              <span className="md:text-lg text-md">
                ({displayedItems.length}) ARTICLE
              </span>
            </>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {displayedItems.map(item => (
              <motion.div key={item.id}>
                <Link 
                  href={showTitle? ("news/"+String(item.id)) : String(item.id)} 
                  className="flex flex-col md:flex-row p-3 cursor-none"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <motion.div 
                    className="relative md:w-1/2"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image 
                      src={`${API_URL}/${item.thumbnail1}`} 
                      alt="news image" 
                      width={300} 
                      height={400} 
                      className="object-cover cursor-none"
                    />
                  </motion.div>
                  <div className="texts pl-3 flex flex-col justify-between md:w-1/2 sm:pt-4 md:pt-0 cursor-none">
                    <div className="flex items-start justify-between">
                      <h1 className="font-mansory text-white text-[10px] lg:text-[15px]">{item.title}</h1>
                      <span>
                        <HiArrowRight size={16} color="gray" />
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex text-start gap-2 items-center">
                        <span className="rounded-xl bg-gray-500 px-2 text-xs md:text-md">NEWS</span>
                        <span className="text-xs md:text-md">{item.date}</span>
                      </div>
                      <hr className="border-gray-500 my-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

 const NewsPageWithSuspense= (props) => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <NewsPage {...props} />
    </Suspense>
  );
};

export default NewsPageWithSuspense;