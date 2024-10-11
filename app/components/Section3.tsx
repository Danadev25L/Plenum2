import { motion } from "framer-motion";
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

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const leftImageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeOut", delay: 0.4 } },
  };

  const rightImageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut", delay: 1 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut", delay: 1.8 } },
  };

  return (
    <div className="bg-black text-white min-h-screen p-4 sm:p-8 pt-24 sm:pt-52">
      <motion.h1
        className="text-3xl sm:text-5xl font-mansory md:pl-44 mb-6 sm:mb-8"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={titleVariants}
      >
        REFLECTED<br />SYNERGIES
      </motion.h1>

      <div className="flex flex-col sm:grid sm:grid-cols-3 gap-6 sm:gap-8">
        <motion.div
          className="col-span-2"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={leftImageVariants}
        >
          <Image src={image5} alt="Bathroom interior" className="h-auto mb-4" />
        </motion.div>

        <div className="flex flex-col gap-4 sm:gap-0 sm:justify-between" ref={ref}>
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={rightImageVariants}
          >
            <Image src={image6} alt="Bathroom detail" className="mb-4" />
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={textVariants}
          >
            <h2 className="text-xl sm:text-2xl mb-3 sm:mb-4 font-mansory">BATH & WC</h2>
            <motion.p className="text-xs sm:text-sm mb-3 sm:mb-4" variants={textVariants}>
              The profound dialog between humans and nature translates into an interplay of glimpses and reflections, where humans and the earth, twin faces, reflect each other and collaborate in perfect synergy.
            </motion.p>
            <motion.button 
              className="custom-button hover:bg-white hover:text-black text-white border-[1px] border-white px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-md"
              variants={textVariants}
            >
              EXPLORE BATH & WC
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
