import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { HiArrowRight } from "react-icons/hi2";
import Image from 'next/image';
import  image10 from "@/public/spain+5 1.png"
import  image11 from "@/public/spain+5 2.png"

const News = () => {


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
    <div className='container flex flex-col px-2 md:px-20 pt-72'>
      <motion.div
        className='title flex justify-between pb-14'
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={textAnimation}
      >
        <h1 className='text-3xl md:text-6xl font-light'>LATEST NEWS</h1>
        <button style={{border:"1px solid white", fontSize:"10px"}} className='button hover:bg-white hover:text-black rounded-md h-max py-2 px-3 md:text-md'>
          READ ALL THE NEWS
        </button>
      </motion.div>

      <motion.div
        className='content flex flex-col md:flex-row py-4 gap-6'
        ref={ref}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={textAnimation}
      >
        <div className='item-1 flex md:w-1/2'>
          <div className='sm:w-[40%] h-full'>
            <Image src={image10} alt='news image' width={300} height={400} />
          </div>
          <div className='texts pl-3 flex flex-col justify-between'>
            <div className='flex items-start justify-between'>
              <h1 className='font-light text-white text-sm md:text-xl'>
                VISIT OF MR. JUAN JOSÉ ESCOBAR STEMMANN (AMBASSADOR OF SPAIN IN IRAQ) TO OUR SHOWROOM
              </h1>
              <span className='cursor-pointer'>
                <HiArrowRight size={16} color='gray'/>
              </span>
            </div>
            <div className='flex text-start gap-2 items-center'>
              <span className='rounded-xl bg-gray-500 px-2 text-xs md:text-md'>NEWS</span>
              <span className='text-xs md:text-lg'>September 2024</span>
            </div>
            <hr style={{border:"solid 1px gray"}} />
          </div>
        </div>

        <div className='item-2 flex md:w-1/2 object-contain'>
          <div className='sm:w-[40%]'>
            <Image src={image11} alt='news image' width={300} height={400} />
          </div>
          <div className='texts pl-3 flex flex-col justify-between'>
            <div className='flex items-start justify-between'>
              <h1 className='font-light text-white text-sm md:text-xl'>
                VISIT OF MR. JUAN JOSÉ ESCOBAR STEMMANN (AMBASSADOR OF SPAIN IN IRAQ) TO OUR SHOWROOM
              </h1>
              <span className='cursor-pointer'>
                <HiArrowRight size={16} color='gray'/>
              </span>
            </div>
            <div className='flex text-start gap-2 items-center'>
              <span className='rounded-xl bg-gray-500 px-2 text-xs md:text-md'>NEWS</span>
              <span className='text-xs md:text-lg'>September 2024</span>
            </div>
            <hr style={{border:"solid 1px gray"}} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};


export default News;