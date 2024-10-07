import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import image2 from "@/public/imageD.png"
import image3 from "@/public/imageD2.png"
import image4 from "@/public/imageLL.png"

const TileSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const controls2 = useAnimation();
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.2 });

  const controls3 = useAnimation();
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (inView2) {
      controls2.start('visible');
    }
    if (inView3) {
      controls3.start('visible');
    }
  }, [controls, controls2, controls3, inView, inView2, inView3]);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  return (
    <div className="text-white min-h-screen flex flex-col items-center py-10">
      {/* Title */}
      <motion.h1
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeInVariants}
        className="text-5xl md:text-8xl font-light mb-14"
      >
        TYPES OF TILES
      </motion.h1>

      {/* Menu Buttons */}
      <motion.div
        ref={ref2}
        initial="hidden"
        animate={controls2}
        variants={fadeInVariants}
        className="flex justify-center space-x-4 pb-52"
      >
        <button className="bg-teal-500 text-white py-2 px-4 rounded-full">Floor Tiles</button>
        <button className="text-white py-2 px-4">Wall Tiles</button>
        <button className="text-white py-2 px-4">Roof Tiles</button>
      </motion.div>

      {/* Tile Images Section */}
      <motion.div
        ref={ref3}
        initial="hidden"
        animate={controls3}
        variants={fadeInVariants}
        className="relative w-full overflow-hidden px-4"
      >
        <div className="flex flex-nowrap gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Roof Tile */}
          <div className="w-[30%] sm:w-[28%] flex-shrink-0 relative overflow-hidden bg-cover bg-center h-[300px] sm:h-[400px] md:h-[500px] self-center">
            <Image src={image2} alt='Roof Tile' layout="fill" objectFit="cover" className="w-full h-full" />
          </div>

          {/* Floor Tile */}
          <div className="w-[40%] sm:w-[44%] flex-shrink-0 relative overflow-hidden bg-cover bg-center h-[400px] sm:h-[500px] md:h-[650px]">
            <Image src={image4} alt='Floor Tile' layout="fill" objectFit="cover" className="w-full h-full" />
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-6">
              <h2 className="text-3xl md:text-6xl font-light">FLOOR <br /> TILES</h2>
            </div>
          </div>

          {/* Wall Tile */}
          <div className="w-[30%] sm:w-[28%] flex-shrink-0 relative overflow-hidden bg-cover bg-center h-[300px] sm:h-[400px] md:h-[500px] self-center">
            <Image src={image3} alt='Wall Tile' layout="fill" objectFit="cover" className="w-full h-full" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TileSection;