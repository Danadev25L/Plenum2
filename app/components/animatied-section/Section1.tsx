import { motion, useAnimation } from 'framer-motion';
import image1 from "@/public/se1.jpg"
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const Section1 = () => {
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView2) {
      controls2.start('visible');
    }
  }, [controls2, inView2]);

  useEffect(() => {
    if (inView3) {
      controls3.start('visible');
    }
  }, [controls3, inView3]);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 120 }, // start further from the bottom
    visible: {
      opacity: 1,
      y: 0, // move to the top
      transition: { duration: 0.9  , delay:0.3}
    },
  };
  const fadeInUpVariants3 = {
    hidden: { opacity: 0, y: 250 }, 
    visible: {
      opacity: 1,
      y: 0, 
      transition: { duration: 1.1  , delay:0.1}
    },
  };
  const fadeInUpVariants2 = {
    hidden: { opacity: 0, y: 100 }, 
    visible: {
      opacity: 1,
      y: 0, // move to the top
      transition: { duration: 0.6}
    },
  };
  const fadeInUpVariants4 = {
    hidden: { opacity: 0, y: 35 }, 
    visible: {
      opacity: 1,
      y: 0, // move to the top
      transition: { duration: 0.7 , delay:0.1}
    },
  };


  return (
    <div className='container mx-auto px-4 sm:px-8 md:px-16 lg:px-28 py-12 sm:py-16 md:py-20 lg:py-28 w-full flex flex-col gap-12 sm:gap-20 md:gap-28 lg:gap-36'>
      
      <div className='title w-full text-center'>
        <h1 className='text-[32px] leading-none uppercase  md:text-5xl lg:text-8xl font-mansory w-full'>
          SURFACES INSPIRED 
          <br />
          BY <span className='text-teal-500'>NATURE</span>, WHICH 
          <br />
          GO BEYOND NATURE.
        </h1>
      </div>

      <motion.div
        ref={ref2}
        initial="hidden"
        animate={controls2}
        variants={fadeInUpVariants2}
        className='about w-full md:w-[60%] lg:w-[35%] md:ml-auto pb-8 md:pb-12 lg:pb-20'
      >
        <div className='description flex flex-col gap-6 md:gap-8'>
          <p>Plenum produces ceramic slabs which challenge the traditional uses of this material, creating large sized minimum thickness surfaces, which are used in exterior architecture, interior design and furnishings.</p>
          <motion.div
            ref={ref2}
            initial="hidden"
            animate={controls2}
            variants={fadeInUpVariants4}
            className=''
          >
          <button className='button border-opacity-90 border-white text-lg w-max custom-button py-1 px-3 rounded-lg'>ABOUT US</button>
          </motion.div>
        </div>
      </motion.div>
      
        <motion.div
          ref={ref3}
          initial="hidden"
          animate={controls3}
          variants={fadeInUpVariants}
          className='image&text flex flex-col md:flex-row justify-between h-max gap-8 md:gap-12 pb-10'
        >
          <div className='text w-full md:w-[50%] flex flex-col gap-6 md:gap-10'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-mansory'>AUTOMOBILI <br /> LAMBORGHINI <br /> SURFACES</h1>
            <motion.p variants={fadeInUpVariants}>Automobili Lamborghini Surfaces is the result of the collaboration between Automobili Lamborghini and Laminam, two iconic Italian brands renowned for their quality and design excellence. The two companies have joined forces, combining their vision and style to offer the interior design industry with luxury surfaces with unique character.</motion.p>
          </div>

          <div className='image w-full md:w-[35%] object-cover h-max'>
          <motion.div
          ref={ref3}
          initial="hidden"
          animate={controls3}
          variants={fadeInUpVariants3}
          className='image&text flex flex-col md:flex-row justify-between h-max gap-8 md:gap-12 pb-10'
        >
            <Image src={image1} alt='image1' width={1000} height={2000} className='w-full h-auto' />
            </motion.div>
          </div>
        </motion.div>
      </div>
  );
};

export default Section1;
