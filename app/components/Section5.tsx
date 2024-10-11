import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { HiArrowRight } from "react-icons/hi2";
import Image from 'next/image';
import image10 from "@/public/spain+5 1.png"
import image11 from "@/public/spain+5 2.png"
import Link from "next/link";

const NewsSection = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  const textAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } }
  };

  return (
    <div className='container flex flex-col px-4 sm:px-6 md:px-8 lg:px-20 pt-20 md:pt-36 lg:pt-52'>
      <motion.div
        className='title flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8'
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={textAnimation}
      >
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-mansory uppercase mb-4 sm:mb-0'>LATEST NEWS</h1>
        <Link href="/news">
          <button className='button custom-button border border-white hover:bg-white hover:text-black rounded-md py-2 px-4 text-xs sm:text-sm'>
            READ ALL THE NEWS
          </button>
        </Link>
      </motion.div>

      <motion.div
        className='content flex flex-col lg:flex-row py-4 gap-8'
        ref={ref}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={textAnimation}
      >
        {[image10, image11].map((image, index) => (
          <div key={index} className='item flex flex-col sm:flex-row lg:w-1/2 mb-8 lg:mb-0'>
            <div className='sm:w-2/5 lg:w-2/5 mb-4 sm:mb-0 sm:mr-4'>
              <div className="w-full h-48 sm:h-full relative">
                <Image 
                  src={image} 
                  alt='news image' 
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            </div>
            <div className='texts flex flex-col justify-between flex-grow'>
              <div className='flex items-start justify-between mb-4'>
                <h1 className='font-mansory text-white text-md  md:text-lg pr-4'>
                  VISIT OF MR. JUAN JOSÉ ESCOBAR STEMMANN (AMBASSADOR OF SPAIN IN IRAQ) TO OUR SHOWROOM
                </h1>
                <span className='cursor-pointer flex-shrink-0'>
                  <HiArrowRight size={20} color='gray'/>
                </span>
              </div>
              <div className='flex flex-wrap items-center gap-2 mb-4'>
                <span className='rounded-xl bg-gray-500 px-2 py-1 text-xs'>NEWS</span>
                <span className='text-xs'>September 2024</span>
              </div>
              <hr className="border-t border-gray-500" />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default NewsSection;
