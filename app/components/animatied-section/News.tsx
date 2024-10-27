import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { HiArrowRight } from "react-icons/hi2";
import Image from "next/image";
import image10 from "@/public/spain+5 1.png";
import image11 from "@/public/spain+5 2.png";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const NewsSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [isHovered, setIsHovered] = useState(false);
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const textAnimation = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
  };

  // Function to handle mouse movement for the custom cursor
  const handleMouseMove = (e: React.MouseEvent) => {
    const cursor = cursorRef.current;
    if (cursor) {
      cursor.style.transform = `translate(${e.clientX - 50}px, ${e.clientY - 50}px)`;
    }
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div 
      className="container mx-auto flex flex-col px-4 sm:px-6 md:px-8 lg:px-20 pt-20 md:pt-36 lg:pt-52"
      onMouseMove={handleMouseMove}
    >
      {/* Custom Cursor */}
      <div 
        id="cursor" 
        ref={cursorRef} 
        className={`fixed top-0 left-0 w-[100px] h-[100px] pointer-events-none z-50 transition-transform duration-300 rounded-full ${isHovered ? 'opacity-100 scale-1' : 'opacity-0 scale-0'}`}
        style={{ transform: 'translate(-50%, -50%)', backdropFilter: 'blur(5px)', backgroundColor: 'rgba(0, 0, 0, 0.35)' }}
      >
        <div className="cursor-inner relative w-full h-full rounded-full ">
          <div className="cursor-circle absolute inset-0 flex items-center justify-center">
            <span className="text-white text-md">DISCOVER</span>
          </div>
        </div>
      </div>

      <motion.div
        className="title flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8"
        initial="hidden"
        animate={controls}
        variants={textAnimation}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-mansory uppercase mb-4 sm:mb-0">LATEST NEWS</h1>
        <Link href="/news">
          <button className="button custom-button border border-white hover:bg-white hover:text-black rounded-md py-2 px-4 text-xs sm:text-sm">
            READ ALL THE NEWS
          </button>
        </Link>
      </motion.div>

      <motion.div
        className="content flex flex-col lg:flex-row py-4 gap-8"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={textAnimation}
      >
        {[image10, image11].map((image, index) => (
          <div 
            key={index} 
            className="item flex flex-col sm:flex-row lg:w-1/2 mb-8 lg:mb-0 cursor-none"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="sm:w-2/5 lg:w-2/5 mb-4 sm:mb-0 sm:mr-4">
              <div className="w-full h-48 sm:h-full relative">
                <Image 
                  src={image} 
                  alt="news image" 
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="texts flex flex-col justify-between flex-grow">
              <div className="flex items-start justify-between mb-4">
                <h1 className="font-mansory text-white text-md md:text-lg pr-4">
                  VISIT OF MR. JUAN JOSÉ ESCOBAR STEMMANN (AMBASSADOR OF SPAIN IN IRAQ) TO OUR SHOWROOM
                </h1>
                <span className="cursor-pointer flex-shrink-0">
                  <HiArrowRight size={20} color="gray" />
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="rounded-xl bg-gray-500 px-2 py-1 text-xs">NEWS</span>
                <span className="text-xs">September 2024</span>
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
