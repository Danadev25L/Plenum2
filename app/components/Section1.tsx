import { motion, useAnimation } from 'framer-motion';
import image1 from "@/public/alpana.jpg"
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';




const Section1 = () => {



  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const controls2 = useAnimation();
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (inView2) {
      controls2.start('visible');
    }
  }, [controls, controls2, inView, inView2]);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 3 } }
  };

  return (
    <div className='container px-4 sm:px-8 md:px-16 lg:px-28 py-12 sm:py-16 md:py-20 lg:py-28 w-full flex flex-col gap-12 sm:gap-20 md:gap-28 lg:gap-36'>
      
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeInVariants}
        className='title w-full text-center'
      >
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light w-full'>
          SURFACES INSPIRED 
          <br />
          BY <span className='text-blue-300'>NATURE</span>, WHICH 
          <br />
          GO BEYOND NATURE.
        </h1>
      </motion.div>

      <motion.div
        ref={ref2}
        initial="hidden"
        animate={controls2}
        variants={fadeInVariants}
        className='about w-full md:w-[60%] lg:w-[35%] md:ml-auto pb-8 md:pb-12 lg:pb-20'
      >
        <div className='description flex flex-col gap-6 md:gap-8'>
          <p>Plenum produces ceramic slabs which challenge the traditional uses of this material, creating large sized minimum thickness surfaces, which are used in exterior architecture, interior design and furnishings.</p>
          <button style={{border:"1px solid white"}} className='button w-max custom-button py-1 px-3'>ABOUT US</button>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        className='image&text flex flex-col md:flex-row justify-between h-max gap-8 md:gap-12 pb-10'
      >
        <div className='text w-full md:w-[50%] flex flex-col gap-6 md:gap-10'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-light'>AUTOMOBILI <br /> LAMBORGHINI <br /> SURFACES</h1>
          <p>Automobili Lamborghini Surfaces is the result of the collaboration between Automobili Lamborghini and Laminam, two iconic Italian brands renowned for their quality and design excellence. The two companies have joined forces, combining their vision and style to offer the interior design industry with luxury surfaces with unique character.</p>
        </div>

        <div className='image w-full md:w-[35%] object-cover h-max'>
          <Image src={image1} alt='image1' width={1000} height={2000} className='w-full h-auto' />
        </div>
      </motion.div>
    </div>
  );
};

export default Section1;