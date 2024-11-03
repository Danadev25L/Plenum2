"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import type { Swiper as SwiperType } from 'swiper';

const Carousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const buttonRefs = useRef<HTMLButtonElement[]>([]);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });

  interface Tile {
    id: string | number;
    name: string;
    image_url: string;
  }
  const [tiles, setTiles] = useState<Tile[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cursor = cursorRef.current;
      if (cursor) {
        const x = e.clientX - 50; // Adjust for the cursor size
        const y = e.clientY - 50; // Adjust for the cursor size
        cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const goToSlide = (index: number) => {
    const totalSlides = tiles.length;
    const circularIndex = (index + totalSlides) % totalSlides;

    if (swiperRef.current) {
      swiperRef.current.slideToLoop(circularIndex);
    }

    buttonRefs.current[circularIndex]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };

  useEffect(() => {
    const fetchTypesOfTiles = async () => {
      try {
        const response = await fetch(`http://plenum.a-h-y.com/api/tile-types`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setTiles(data.data);

      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchTypesOfTiles();
  }, []);

  return (
    <div
      ref={containerRef}
      className="container mx-auto mb-20 lg:pb-28 md:pt-24"
    >
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 w-[100px] h-[100px] pointer-events-none z-50 transition-transform duration-500 ease-out rounded-full ${isHovered ? 'opacity-100 scale-1' : 'opacity-0 scale-0'
          }`}
        style={{
          backdropFilter: 'blur(5px)',
          backgroundColor: 'rgba(0, 0, 0, 0.35)',
        }}
      >
        <div className="cursor-inner relative w-full h-full rounded-full">
          <div className="cursor-circle absolute inset-0 flex items-center justify-center">
            <span className="text-white text-md">DISCOVER</span>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 70 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="frames__top text-center"
      >
        <h4 className="text-3xl md:text-5xl lg:text-6xl font-mansory uppercase mb-6 md:mb-10 lg:mb-14 text-white">
          Types of Tiles
        </h4>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex justify-center py-2  space-x-6 mb-16 md:mb-24 lg:mb-28 overflow-x-auto scrollbar-hide"
      >
        {tiles.map((slide: Tile, index: number) => (
          <button
            key={index}
            ref={(el) => {
              buttonRefs.current[index] = el!;
            }}
            onClick={() => goToSlide(index)}
            className={`px-2 py-1 md:px-3 md:py-2 lg:px-6 lg:py-3 rounded-full transition-all duration-500 ease-in-out transform
              ${activeIndex === index ? 'bg-[#26B3B4] text-white scale-105 shadow-md' : 'text-white'} 
              text-[10px] md:text-[14px] lg:text-[16px] whitespace-nowrap`}
          >
            {slide.name}
          </button>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 400 }}
        transition={{ duration: 1, delay: 0.75 }}
        className="relative"
      >
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          initialSlide={3}
          spaceBetween={24}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          speed={800}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
            1400: { slidesPerView: 3 }
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="frames__slider"
        >
          {tiles.map((slide: Tile, index: number) => (
            <SwiperSlide key={index}>
              <Link href={"tiles/" + slide.id} className="block">
                <div
                  className={`card__wrapper bg-background rounded-md shadow-lg transition-transform duration-500 ease-in-out cursor-none
                  ${index === activeIndex ? 'scale-105' : 'scale-90'}`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="card__media relative">
                    <Image
                      src={slide.image_url}
                      alt={slide.name}
                      className="object-cover mx-auto sm:w-max sm:h-max lg:min-w-[490px] md:min-h-[678px]"
                      layout="responsive" // Alternative to `fill`
                      width={490} // Specify a reasonable width
                      height={678}
                    />
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 card__main">
                      <h5 className="text-xl md:text-3xl font-mansory text-center text-white uppercase">
                        {slide.name.split(' ')[0]} <br /> {slide.name.split(' ')[1]}
                      </h5>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default Carousel;
