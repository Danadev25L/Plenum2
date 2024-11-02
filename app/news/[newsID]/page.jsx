"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
 import { useParams } from 'next/navigation';
import NewsPageWithSuspense from '../NewsContent';

const SingleNews = () => {
  const [news, setNews] = useState([]);
  const API_URL = 'http://localhost:8000';
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`${API_URL}/api/news/${params.newsID}`);
        const data = await response.json();
        setNews(data.data);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [params]);

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
    <div className='bg-black pt-32'>
      <div className="text-white min-h-screen px-4 pt-16 md:pt-[120px] sm:p-8 flex justify-center">
        <div className="max-w-full sm:max-w-[665px] space-y-6 sm:space-y-8">
          <h1 className="text-2xl md:text-4xl font-mansory text-center mb-4 w-full sm:w-[665px]">
            {news.title}
          </h1>
          
            <div className="flex flex-col items-center space-y-2">
              <p className="text-center text-xs sm:text-sm">{news.month} {news.year}</p>
              <span className="bg-gray-800 px-2 py-1 rounded-xl text-[10px] md:text-xs text-center">NEWS</span>
            </div>

          
          <Image
            src={`${API_URL}${news.thumbnail1}`}
            alt="News image"
            width={665}
            height={600}
            className="w-full h-auto"
          />
          
          <h1 className="text-sm md:text-2xl uppercase text-start font-mansory">
            {news.article}
          </h1>
          
          <p className="text-xs md:text-[16px] leading-normal">
            {news.description}
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Image
              src={`${API_URL}${news.thumbnail2}`}
              alt="News image"
              width={322}
              height={375}
              className="w-full sm:w-auto h-auto"
            />
            <Image
              src={`${API_URL}${news.thumbnail3}`}
              alt="News image"
              width={322}
              height={375}
              className="w-full sm:w-auto h-auto"
            />
          </div>
          
          <p className="text-xs md:text-[16px] leading-normal">
            {news.description}
          </p>
        </div>
      </div>
       {/* Related News Section */}
       <div className='pt-36 md:pt-52'>
        <h2 className=' text-white text-3xl md:text-5xl font-mansory uppercase px-9 '>read also</h2>
        <NewsPageWithSuspense itemsToShow={3} showTitle={false} paddingBottom={80} paddingTop={4}/>
        </div>
    </div>
  );
};

export default SingleNews;
