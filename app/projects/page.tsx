import React from 'react';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import image1 from "@/public/p1.png"
import image2 from "@/public/p2.png"
import image3 from "@/public/p3.png"
import image4 from "@/public/p4.png"
import image5 from "@/public/p5.png"
import image6 from "@/public/p6.png"
import image7 from "@/public/p7.png"
import image8 from "@/public/p8.png"
import image9 from "@/public/p9.png"
import Navbar from '../components/Navbar';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'Muhanad cars in sulaymaniyah',
    image: image1,
    description: 'Plenum offers a range of services dedicated to kitchen designers and kitchen studios, with the aim of providing innovative, top-quality design solutions.',
  },
  {
    id: 2,
    title: 'RUBY TOWER',
    image: image2,
    description: 'Plenum offers a range of services dedicated to kitchen designers and kitchen studios, with the aim of providing innovative, top-quality design solutions.',
  },
  {
    id: 3,
    title: 'SPANISH VILLAGE',
    image: image3,
    description: 'Plenum offers a range of services dedicated to kitchen designers and kitchen studios, with the aim of providing innovative, top-quality design solutions.',
  },
  {
    id: 4,
    title: 'BARSA COURT',
    image: image4,
    description: 'Plenum offers a range of services dedicated to kitchen designers and kitchen studios, with the aim of providing innovative, top-quality design solutions.',
  },
  {
    id: 5,
    title: 'AMERICAN CONSULATE',
    image: image5,
    description: 'Plenum offers a range of services dedicated to kitchen designers and kitchen studios, with the aim of providing innovative, top-quality design solutions.',
  },
  {
    id: 6,
    title: 'Mini Salava Facades',
    image: image6,
    description: 'Plenum offers a range of services dedicated to kitchen designers and kitchen studios, with the aim of providing innovative, top-quality design solutions.',
  },
  {
    id: 7,
    title: 'LEVANT RESTURANT',
    image: image7,
    description: 'Plenum offers a range of services dedicated to kitchen designers and kitchen studios, with the aim of providing innovative, top-quality design solutions.',
  },
  {
    id: 8,
    title: 'MONUMENT ERBIL',
    image: image8,
    description: 'Plenum offers a range of services dedicated to kitchen designers and kitchen studios, with the aim of providing innovative, top-quality design solutions.',
  },
  {
    id: 9,
    title: 'TOWN HOUSE SULAYMANI',
    image: image9,
    description: 'Plenum offers a range of services dedicated to kitchen designers and kitchen studios, with the aim of providing innovative, top-quality design solutions.',
  },
];

const Projects = () => {
  return (
      <div className='bg-black'>
        <Navbar />
          <div className=" text-white min-h-screen px-8 pt-[120px] pb-56">
          <h1 className="text-5xl md:text-6xl font-light mb-4">PROJECTS</h1>
          <p className="text-xl mb-8">(12) PROJECTS</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {projects.map((project) => (
            <Link href={`/projects/${project.id}`} key={project.id} className="group w-full max-w-[450px]">
            <div className="relative overflow-hidden">
              <Image 
             src={project.image} 
             alt={project.title} 
             className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
             <ChevronRight className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="mt-4 space-y-2">
           <h3 className="text-xl font-bold">{project.title}</h3>
           <p className="text-sm text-gray-300">{project.description}</p>
         </div>
       </Link>
      ))}
    </div>
  </div>
</div>
  );
};

export default Projects;