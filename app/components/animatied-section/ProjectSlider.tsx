import { useState, useRef, useEffect } from 'react';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import Image, { StaticImageData } from 'next/image';
import image7 from "@/public/mini+slava+site+1 1.png";
import image8 from "@/public/american+embassy+2 1.png";
import image9 from "@/public/1-2 1.png";
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  image: StaticImageData;
}

const projects: Project[] = [
  {
    title: 'Mini Salava Facades',
    description: 'Plenum offers a range of services dedicated to kitchen designers and kitchen studios...',
    image: image7,
  },
  {
    title: 'American Consulate',
    description: 'Service for stonemasons to make a kitchen worktop, a bathroom vanity top, or a table top...',
    image: image8,
  },
  {
    title: 'Spanish Village',
    description: 'In the construction and interior design industry, finding innovative and reliable surface...',
    image: image9,
  },
  {
    title: 'Erbil Village',
    description: 'In the construction and interior design industry, finding innovative and reliable surface...',
    image: image7,
  },
  {
    title: 'Erbil Village',
    description: 'In the construction and interior design industry, finding innovative and reliable surface...',
    image: image9,
  },
];

const ProjectSlider = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleScrollRight();
    }, 4000); // Slowed down interval for sliding

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0 }
    );

    if (scrollContainerRef.current) {
      observer.observe(scrollContainerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      
      if (scrollLeft + clientWidth >= scrollWidth - 1) {
        setTimeout(() => {
          scrollContainerRef.current?.scrollTo({
            left: 0,
            behavior: 'smooth',
          });
        }, 2000);
      } else {
        scrollContainerRef.current.scrollBy({
          left: 300,
          behavior: 'smooth',
        });
      }
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const cursor = cursorRef.current;
    if (cursor) {
      cursor.style.transform = `translate(${e.clientX - 50}px, ${e.clientY - 50}px)`;
    }
  };

  const animation = {
    hidden: { opacity: 0, y: 220 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" , } },
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (

    <motion.div
    initial="hidden"
    animate={isVisible ? "visible" : "hidden"}
    variants={animation}
  >
    <div 
      className={`text-white pt-40 md:pt-64 px-6 md:px-16 lg:px-24 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      onMouseMove={handleMouseMove}
    >
      <div className='flex mb-20 items-start justify-between'>
        <h1 className="text-left text-2xl md:text-5xl font-mansory uppercase">
          Projects by Plenum Ciramica
        </h1>
        <span onClick={handleScrollRight} className='cursor-pointer'>
          <IoIosArrowDroprightCircle size={35} />
        </span>
      </div>

      <div className="relative">
        {/* Add a gradient shadow on the right to represent image sliding */}
        <div className="absolute top-0 right-0 w-28 h-full bg-gradient-to-l from-black/60 to-transparent z-10 pointer-events-none"></div>
        
        <div
          ref={scrollContainerRef}
          className="grid grid-flow-col gap-8 overflow-x-auto scrollbar-hide"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {projects.map((project, index) => (
            <Link href={"projects"} key={index}>
              <div
                className="group cursor-pointer overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 min-w-[300px] lg:min-w-[400px]"
              >
                <div className="relative">
                  <Image
                  width={500}
                  height={300}
                    src={project.image}
                    alt={project.title}
                    className="max-w-[390px] max-h-[293px] object-cover transition-transform duration-500 hover:scale-105"
                    layout="responsive"
                  />
                </div>
                <div className="text-left py-6">
                  <h2 className="text-3xl font-mansory uppercase mb-4">{project.title}</h2>
                  <p className="text-white">{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </motion.div>
    
  );
};

export default ProjectSlider;
