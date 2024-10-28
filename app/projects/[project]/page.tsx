"use client"
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import image1 from "@/public/sp1.png"
import image2 from "@/public/sp2.png"
import image3 from "@/public/sp3.png"
import image4 from "@/public/sp4.jpg"
import image5 from "@/public/sp5.jpg"
import { Images, X } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
 
const SingleProject = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const cursorRef = useRef(null);

  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    const cursor = cursorRef.current;
    if (cursor) {
      cursor.style.transform = `translate(${e.clientX - 50}px, ${e.clientY - 50}px)`;
    }
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isGalleryOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isGalleryOpen])

  // Gallery images array using imported images
  const galleryImages = [
    { src: image1, alt: 'Gallery image 1' },
    { src: image2, alt: 'Gallery image 2' },
    { src: image3, alt: 'Gallery image 3' },
    { src: image4, alt: 'Gallery image 4' },
    { src: image5, alt: 'Gallery image 5' },
  ]

  return (
    <div 
      className='bg-black pt-28 pb-24 md:pb-44 lg:pb-60'
      onMouseMove={handleMouseMove}
    >
      {/* Custom Cursor */}
      <div
        id="cursor"
        ref={cursorRef}
        className={`fixed top-0 left-0 w-[100px] h-[100px] pointer-events-none z-50 transition-transform duration-300 rounded-full ${
          isHovered ? 'opacity-100 scale-1' : 'opacity-0 scale-0'
        }`}
        style={{
          transform: 'translate(-50%, -50%)',
          backdropFilter: 'blur(5px)',
          backgroundColor: 'rgba(0, 0, 0, 0.35)',
        }}
      >
        <div className="cursor-inner relative w-full h-full rounded-full">
          <div className="cursor-circle absolute inset-0 flex items-center justify-center">
            <span className="text-white text-md">GALLERY</span>
          </div>
        </div>
      </div>

      <div className='overflow-hidden'>
        <div className='image&title flex flex-col px-4 md:px-8 pt-16 md:pt-[120px]'>
          <h1 className="text-3xl md:text-6xl font-mansory mb-4 text-white">MUHANAD CARS IN <br /> SULAYMANIYAH</h1>
          <Image 
            src={image1}
            alt="image"
            className='w-max h-max pt-6'
          />
        </div>
        
        <div className="texts flex flex-col py-16 md:py-36 md:mb-20">
          <div className="px-4 md:px-4 lg:px-28">
            <div className="firstPart flex flex-col md:flex-row md:gap-8">
              <div className="md:w-1/2">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-mansory uppercase mb-4 text-white">
                  Communicate class, distinction and art
                </h1>
                <p className="text-white pt-6">
                  These were the goals of the architectural project for the Nobili S.p.A. corporate headquarters. Square, pure volumes, enhanced externally by one of the spheres of the great sculptor Arnaldo Pomodoro. Laminam large slabs contribute to the overall grandeur, with three iconic collections used: IN-SIDE, Fokos, and Calce.
                </p>
              </div>
              
              <div className="bg-black text-white p-8 font-sans mt-16 md:mt-32 lg:mt-48 md:w-1/2">
                <div className="max-w-2xl mx-auto">
                  <div className="grid grid-cols-2 gap-y-6 text-lg font-mansory">
                    <div className="uppercase">Location</div>
                    <div className="text-right">Erbil</div>
                    <hr className="col-span-2 border-t border-gray-500" />
                    
                    <div className="uppercase">Year</div>
                    <div className="text-right">2020</div>
                    <hr className="col-span-2 border-t border-gray-500" />
                    
                    <div className="uppercase">Applications</div>
                    <div className="text-right">Bath & WC</div>
                    <hr className="col-span-2 border-t border-gray-500" />
                    
                    <div className="uppercase">Project Type</div>
                    <div className="text-right">Headquarter</div>
                    <hr className="col-span-2 border-t border-gray-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='flex justify-between gap-4 md:gap-14 pb-24 pt-24 md:pt-44 lg:pt-52'>
            <div className='content-center pl-6 md:pl-36 lg:pl-52'>
              <Image src={image3} alt='imag3' />
            </div>
            <div>
              <Image src={image2} alt='image2'/>
            </div>
          </div>

          <div className="px-4 md:px-4 lg:px-28">
            <div className="secondPart mt-16">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-mansory uppercase mb-4 text-white">
                Italian excellence
              </h1>
              <p className="text-white pt-6 lg:w-1/2">
                Located in the province of Novara, Nobili S.p.A. is an Italian leader in the field of taps and bathroom fittings. The only European company in the sector with an entirely integrated production cycle, every year it dedicates significant resources to perfecting its production processes and adopting some of the most advanced technologies available. The Nobili Technology Centre, its Suno-based production site, is the most streamlined and efficient plant in the entire sector, its layout able to guarantee constant growth and extremely high quality standards with a very low environmental impact.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* gallery section */}
      <div className="gallery-section pb-24">
        <div className="flex items-center justify-between mb-8 md:mb-24">
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-mansory mx-auto text-white">GALLERY</h2>
        </div>
        
        <div className="flex gap-5 relative px-4 md:px-8">
          <div 
            className="flex-[2] relative cursor-none"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Image 
              src={image4}
              alt="Gallery image 1"
              className="w-max h-max object-cover"
            />
          </div>
          <div 
            className="flex-1 relative cursor-none"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Image 
              src={image5}
              alt="Gallery image 2"
              className="w-max h-max object-cover"
            />
          </div>
          <div className="flex flex-col items-center content-center">
            <button
              onClick={() => setIsGalleryOpen(true)}
              className="w-4 h-5 md:h-16 md:w-16 rounded-full md:bg-gray-800 md:border-[0.5px] md:border-gray-500 hover:bg-gray-900 transition-all duration-500 flex justify-center items-center"
            >
              <Images color='white'/>
            </button>
            <span className="text-white mt-2 text-left text-[8px] md:text-sm">
              View Gallery({galleryImages.length})
            </span>
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      {isGalleryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black"
            onClick={() => setIsGalleryOpen(false)}
          />
          
          {/* Modal content */}
          <div className="relative z-10 w-full h-full max-h-screen flex items-center justify-center px-4">
            {/* Close button */}
            <button
              onClick={() => setIsGalleryOpen(false)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Swiper */}
            <div className="w-full max-w-[90vw] h-[90vh]">
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                className="w-full h-full gallery-swiper"
                onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
              >
                {galleryImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        className="object-contain max-h-[85vh]"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
    
              {/* Gallery counter */}
              <div className="absolute bottom-8 right-8 text-white px-4 py-2 rounded-full">
                {currentSlide}/{galleryImages.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SingleProject