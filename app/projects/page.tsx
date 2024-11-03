'use client';

import React, { useEffect, useState, Suspense, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiArrowRight } from 'react-icons/hi';


// const API_URL = 'http://plenum.a-h-y.com';

const Projects = () => {
  const [loading, setLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  const textAnimation = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const cursor = cursorRef.current;
    if (cursor) {
      cursor.style.transform = `translate(${e.clientX - 50}px, ${e.clientY - 50}px)`;
    }
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);


  interface Project {
    id: number;
    title: string;
    short_description: string;
    thumbnail1: string;
    // Add any other properties your project data includes
  }

  const [projects, setProjects] = useState<Project[]>([]);



  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://plenum.a-h-y.com/api/projects');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProjects(data.data);
        console.log(data);

      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <button className="inline-block rounded-full bg-[#26B3B4] text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0 cursor-wait" type="button">
          <div role="status" className="inline-block h-3 w-3 mr-2 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]">
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
          </div>
          Loading
        </button>
      </div>
    );
  }

  return (
    <div className='bg-black pt-28' onMouseMove={handleMouseMove}>
      {/* Custom Cursor */}
      <div
        id="cursor"
        ref={cursorRef}
        className={`fixed top-0 left-0 w-[100px] h-[100px] pointer-events-none z-50 transition-transform duration-300 rounded-full ${isHovered ? 'opacity-100 scale-1' : 'opacity-0 scale-0'}`}
        style={{ transform: 'translate(-50%, -50%)', backdropFilter: 'blur(5px)', backgroundColor: 'rgba(0, 0, 0, 0.35)' }}
      >
        <div className="cursor-inner relative w-full h-full rounded-full">
          <div className="cursor-circle absolute inset-0 flex items-center justify-center">
            <span className="text-white text-lg">DISCOVER</span>
          </div>
        </div>
      </div>

      <motion.div
        className="text-white min-h-screen px-4 md:px-8 pt-16 md:pt-[120px] pb-72"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={textAnimation}
      >
        <h1 className="text-5xl md:text-6xl font-mansory mb-4">PROJECTS</h1>
        <p className="text-xl mb-14 md:mb-28">({projects.length}) PROJECTS</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-y-14 md:gap-x-3 md:gap-y-14 lg:gap-x-0 lg:gap-y-28 justify-items-center">
          {projects.map(({ id, title, short_description, thumbnail1 }) => (
            <Link
              href={`/projects/${id}`}
              key={id}
              className="group  cursor-none"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="relative overflow-hidden cursor-none">
                <Image
                  src={thumbnail1 || '/default-placeholder.jpg'}
                  alt={title}
                  width={480}
                  height={300}
                  className="md:max-w-[372px] md:max-h-[228px] lg:max-w-[480px] lg:max-h-[290px]  object-cover transition-transform duration-500 group-hover:scale-100"
                />
              </div>
              <div className="mt-4 space-y-2 cursor-none">
                <h3 className="text-xl font-mansory uppercase">{title}</h3>
                <div className='flex justify-between'>
                  <p className="text-sm text-gray-300">{short_description}</p>
                  <span className="content-end pr-3">
                    <HiArrowRight size={21} color='gray' />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const ProjectsWithSuspense = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Projects />
    </Suspense>
  );
};

export default ProjectsWithSuspense;
