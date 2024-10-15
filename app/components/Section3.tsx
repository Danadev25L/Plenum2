import { delay, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import image5 from "@/public/image 6.png";
import image6 from "@/public/shoresh5 1.png";
import Image from "next/image";

const Section3 = () => {
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

  const animationVariants = {
    hidden: { opacity: 0, y: 125 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
  };
  const animationVariants2 = {
    hidden: { opacity: 0, y: 160 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.3, ease: "easeOut" , delay:0.2 } },
  };
  const animationVariants3 = {
    hidden: { opacity: 0, y: 160 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: "easeOut" , delay:1.5 } },
  };

  return (
<div className="bg-black text-white min-h-screen px-4 sm:p-8 pt-0 md:pt-36 sm:pt-52">
      <motion.h1
        className="text-3xl text-left sm:text-5xl font-mansory md:pl-44 mb-6 sm:mb-8"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={animationVariants}
      >
        REFLECTED<br />SYNERGIES
      </motion.h1>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
        <motion.div
          className="w-full sm:w-2/3"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={animationVariants2}
        >
          <Image src={image5} alt="Bathroom interior" className="h-auto w-full lg:pr-80" />
        </motion.div>

        <div className="w-full sm:w-1/3 flex flex-col justify-between gap-4" ref={ref}>
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={animationVariants2}
          >
            <Image src={image6} alt="Bathroom detail"  />
          </motion.div>

          <motion.div
            className="sm:sticky sm:top-20 mt-4 sm:mt-0"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={animationVariants3}
          >
            <h2 className="text-xl sm:text-2xl mb-3 sm:mb-4 font-mansory">BATH & WC</h2>
            <p className="text-xs sm:text-sm mb-3 sm:mb-4">
              The profound dialog between humans and nature translates into an interplay of glimpses and reflections, where humans and the earth, twin faces, reflect each other and collaborate in perfect synergy.
            </p>
            <button 
              className="custom-button hover:bg-white hover:text-black text-white border-[1px] border-white px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-md"
            >
              EXPLORE BATH & WC
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
