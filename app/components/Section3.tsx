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

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="bg-black text-white min-h-screen p-4 sm:p-8 pt-24 sm:pt-52">
      <motion.h1
        className="text-3xl sm:text-5xl font-light mb-6 sm:mb-8"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={animationVariants}
      >
        REFLECTED<br />SYNERGIES
      </motion.h1>

      <div className="flex flex-col sm:grid sm:grid-cols-3 gap-6 sm:gap-8">
        {/* Image with animation */}
        <motion.div
          className="col-span-2"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={animationVariants}
        >
          <Image src={image5} alt="Bathroom interior" className="h-auto mb-4" />
        </motion.div>

        <div className="flex flex-col gap-4 sm:gap-0 sm:justify-between" ref={ref}>
          {/* Second Image with animation */}
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={animationVariants}
          >
            <Image src={image6} alt="Bathroom detail" className="mb-4" />
          </motion.div>

          {/* Animated text */}
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={animationVariants}
          >
            <h2 className="text-xl sm:text-2xl mb-3 sm:mb-4">BATH & WC</h2>
            <p className="text-xs sm:text-sm mb-3 sm:mb-4">
              The profound dialog between humans and nature translates into an interplay of glimpses and reflections, where humans and the earth, twin faces, reflect each other and collaborate in perfect synergy.
            </p>
            <button style={{ border: "solid 1px" }} className="hover:bg-white hover:text-black text-white px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-md">
              EXPLORE BATH & WC
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Section3;