"use client"
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import icon1 from "@/public/Ellipse.png"
import icon2 from "@/public/Group 6816.png"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { useParams } from 'next/navigation'

const SingleProject = () => {
  const params = useParams()
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [currentSlide, setCurrentSlide] = useState(1)
  const [isHovered, setIsHovered] = useState(false)
  const cursorRef = useRef(null)

  const handleMouseMove = (e) => {
    const cursor = cursorRef.current
    if (cursor) {
      cursor.style.transform = `translate(${e.clientX - 50}px, ${e.clientY - 50}px)`
    }
  }

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)

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

  const API_URL = 'http://localhost:8000'

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${API_URL}/api/projects/${params.project}`)
        if (!response.ok) throw new Error('Network response was not ok')
        const data = await response.json()
        setProject(data.data)
       } catch (error) {
        console.error('Error fetching projects:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [params.project])

  // Get gallery images from project thumbnails
  const getGalleryImages = () => {
    if (!project) return []
    const images = []
    if (project.thumbnail1) images.push({ src: `${API_URL}/${project.thumbnail1}`, alt: 'Gallery image 1' })
    if (project.thumbnail2) images.push({ src: `${API_URL}/${project.thumbnail2}`, alt: 'Gallery image 2' })
    if (project.thumbnail3) images.push({ src: `${API_URL}/${project.thumbnail3}`, alt: 'Gallery image 3' })
    return images
  }

  if (loading) {
    return (
      <div className="bg-black pt-28 pb-24 md:pb-44 lg:pb-60 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="bg-black pt-28 pb-24 md:pb-44 lg:pb-60 flex items-center justify-center">
        <div className="text-white text-xl">Project not found</div>
      </div>
    )
  }

  const galleryImages = getGalleryImages()

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
          <h1 className="text-3xl md:text-6xl font-mansory mb-4 text-white uppercase">{project?.title}</h1>

          {project?.thumbnail1 && (
            <Image 
              src={`${API_URL}/${project.thumbnail1}`}
              alt="image"
              width={1356}
              height={856}
              className='max-w-[359px] max-h-[244px] md:max-w-[756px] md:max-h-[488px] lg:max-w-[1356px] lg:max-h-[856px] pt-6'
            />
          )}
        </div>
        
        <div className="texts flex flex-col py-16 md:py-36 md:mb-20">
          <div className="px-4 md:px-4 lg:px-28">
            <div className="firstPart flex flex-col md:flex-row md:gap-8">
              <div className="md:w-1/2">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-mansory uppercase mb-4 text-white">
                  {project?.article1}
                </h1>
                <p className="text-white pt-6">
                  {project?.short_description}
                </p>
              </div>
              
              <div className="bg-black text-white p-8 font-sans mt-16 md:mt-32 lg:mt-48 md:w-1/2">
                <div className="max-w-2xl mx-auto">
                  <div className="grid grid-cols-2 gap-y-6 text-lg font-mansory">
                    <div className="uppercase">Location</div>
                    <div className="text-right capitalize">{project?.project_locatio}</div>
                    <hr className="col-span-2 border-t border-gray-500" />
                    
                    <div className="uppercase">Year</div>
                    <div className="text-right capitalize">{project?.date}</div>
                    <hr className="col-span-2 border-t border-gray-500" />
                    
                    <div className="uppercase">Applications</div>
                    <div className="text-right capitalize">{project?.project_category}</div>
                    <hr className="col-span-2 border-t border-gray-500" />
                    
                    <div className="uppercase">Project Type</div>
                    <div className="text-right capitalize">{project?.project_type}</div>
                    <hr className="col-span-2 border-t border-gray-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='flex justify-between gap-4 md:gap-14 pb-24 pt-24 md:pt-44 lg:pt-52'>
            {project?.thumbnail3 && (
              <div className='content-center pl-6 md:pl-36 lg:pl-52'>
                <Image 
                  src={`${API_URL}/${project.thumbnail2}`} 
                  alt='image3'
                  width={318}
                  height={307}
                />
              </div>
            )}
            {project?.thumbnail2 && (
              <div>
                <Image 
                  src={`${API_URL}/${project.thumbnail3}`} 
                  alt='image2'
                  width={562}
                  height={714}
                />
              </div>
            )}
          </div>

          <div className="px-4 md:px-4 lg:px-28">
            <div className="secondPart mt-16">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-mansory uppercase mb-4 text-white">
                {project?.article2}
              </h1>
              <p className="text-white pt-6 lg:w-1/2">
                {project?.description2}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* gallery section */}
      {galleryImages.length > 0 && (
        <div className="gallery-section pb-24">
          <div className="flex items-center justify-between mb-8 md:mb-24">
            <h2 className="text-2xl md:text-5xl lg:text-6xl font-mansory mx-auto text-white">GALLERY</h2>
          </div>
          
          <div className="flex gap-5 relative px-4 md:px-8">
            {galleryImages[0] && (
              <div 
                className="flex-[2] relative cursor-none"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Image 
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  width={890}
                  height={1200}
                  className="min-w-[176px] min-h-[224px] md:min-w-[413px] md:min-h-[522px] lg:min-w-[890px] lg:min-h-[1200px] object-cover"
                  onClick={() => setIsGalleryOpen(true)}
                />
              </div>
            )}
            
            {galleryImages[1] && (
              <div 
                className="flex-1 relative cursor-none"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Image 
                  src={galleryImages[1].src}
                  alt={galleryImages[1].alt}
                  width={445}
                  height={692}
                  className="min-w-[88px] min-h-[137px] md:min-w-[207px] md:min-h-[321px] lg:min-w-[445px] lg:min-h-[692px] object-cover"
                  onClick={() => setIsGalleryOpen(true)}
                />
              </div>
            )}

            <div className="flex flex-col items-center content-center">
              <div 
                className="relative inline-block cursor-pointer"
                onClick={() => setIsGalleryOpen(true)}
              >
                <Image src={icon1} alt="bg-logo" className="max-w-10 md:max-w-[90px]"/>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image src={icon2} alt="overlay-icon" className="max-w-4 md:max-w-[35px] z-10" />
                </div>
              </div>
              <span className="text-white mt-2 text-left text-[8px] md:text-sm">
                View Gallery({galleryImages.length})
              </span>
            </div>
          </div>
        </div>
      )}

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
              className="absolute top-4 right-4 z-20 p-2 rounded-full border-[0.5px] border-gray-700 hover:bg-gray-950 transition-colors duration-500"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Swiper */}
            <div className="w-full max-w-[90vw] h-[90vh]">
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                speed={800}
                loop={true}
                className="w-full h-full gallery-swiper"
                onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
                watchSlidesProgress={true}
                grabCursor={true}
                  effect="fade"
                fadeEffect={{
                  crossFade: true
                }}
              >
                {galleryImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={1200}
                        height={800}
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