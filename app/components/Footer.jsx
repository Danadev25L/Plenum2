// import Image from 'next/image';
// import logo from "@/public/logA.png"

// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-[#26B3B4] text-white p-8 overflow-hidden ">
//       <div className="container mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           <div className="col-span-1">
//             <p className="mb-4">
//               Plenum produces ceramic slabs which challenge the
//               traditional uses of this material, creating large sized
//               minimum thickness surfaces, which are used in exterior
//               architecture, interior design and furnishings.
//             </p>
//             <Image src={logo} alt="Logo" width={150} height={100}
//               className="pt-6" />
//           </div>

//           <div className="col-span-1 grid grid-cols-1 md:grid-cols-3 gap-4 text-[14px]">
//             <div>
//               <h3 className=" mb-6">COMPANY</h3>
//               <ul className="space-y-1 font-light	">
//                 <li>PROJECTS</li>
//                 <li>WALL TILES</li>
//                 <li>FLOOR TILES</li>
//                 <li>ROOF TILES</li>
//                 <li>BATH & WC</li>
//                 <li>ARCHIVE</li>
//               </ul>
//             </div>

//             <div>
//               <h3 className=" mb-6">FOLLOW</h3>
//               <ul className="space-y-1 mb-4 cursor-pointer font-light	">
//                 <li className='font-thin'>FACEBOOK</li>
//                 <li>INSTAGRAM</li>
//                 <li>X (TWITTER)</li>
//                 <li>LINKEDIN</li>
//               </ul>
//               <p className="text-sm my-5">
//                 Subscribe to our newsletter to keep up
//                 to date with our latest news and to
//                 receive product updates.
//               </p>
//               <button
//                 style={{ border: "2px solid #D1D5DB" }}
//                 className="custom-button py-2 px-6 custom-button hover:custom-button w-max"
//               >
//                 SUBSCRIBE NOW
//               </button>
//             </div>

//             <div className='font-light '>
//               <h3 className=" mb-6">CONTACT</h3>
//               <p>+964 (0) 750 629 3333</p>
//               <p>+964 (0) 771 855 3303</p>
//               <p>CONTACT@PLENUMCERAMICA.COM</p>
//             </div>
//           </div>
//         </div>

//         <div className="mt-8 text-[14px]">
//           ©2024 PLENUM CERAMICA. ALL RIGHTS RESERVED.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// Footer Component
"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import logo from "@/public/logA.png";

const Footer = () => {
  const footerRef = useRef(null);
  const [footerHeight, setFooterHeight] = useState(0);
  const [social, setSocial] = useState([]);
  useEffect(() => {
    if (footerRef.current) {
      const updateFooterHeight = () => setFooterHeight(footerRef.current.offsetHeight);
      updateFooterHeight();
      window.addEventListener('resize', updateFooterHeight);
      return () => window.removeEventListener('resize', updateFooterHeight);
    }
  }, []);


  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://plenum.a-h-y.com/api/social-medias');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setSocial(data.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <>
      <div style={{ height: footerHeight }} aria-hidden="true" />

      <footer
        ref={footerRef}
        className="fixed bottom-0 left-0 w-full bg-[#26B3B4] text-white p-4 sm:p-6 lg:p-8 z-10 overflow-y-auto max-h-screen mx-auto scrollbar-hide"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
            {/* Company Description and Logo */}
            <div className="col-span-1">
              <p className="mb-4 text-sm sm:text-base font-extralight md:w-3/4">
                Plenum produces ceramic slabs which challenge the
                traditional uses of this material, creating large-sized
                minimum thickness surfaces, which are used in exterior
                architecture, interior design, and furnishings.
              </p>
              <Image
                src={logo}
                alt="Logo"
                width={150}
                height={100}
                className="pt-4 sm:pt-6"
              />
            </div>

            {/* Links and Contact Section */}
            <div className="col-span-1 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              {/* Company Links and Subscribe Section */}
              <div className="space-y-4">
                <h3 className="font-medium">COMPANY</h3>
                <ul className="space-y-1 font-extralight">
                  <li>PROJECTS</li>
                  <li>WALL TILES</li>
                  <li>FLOOR TILES</li>
                  <li>ROOF TILES</li>
                  <li>BATH & WC</li>
                  <li>ARCHIVE</li>
                </ul>
                <p className="text-sm font-extralight mt-6">
                  Subscribe to our newsletter to keep up
                  to date with our latest news and receive product updates.
                </p>
                <button
                  className="border-[0.5px] border-gray-300 rounded-md py-2 px-4 sm:px-6 w-max hover:bg-white hover:text-[#26B3B4] transition-colors duration-300 font-extralight"
                >
                  SUBSCRIBE NOW
                </button>
              </div>

              {/* Follow Us Section */}
              <div className="space-y-4">
                <h3 className="font-medium">FOLLOW</h3>
                <ul className="space-y-1 font-extralight">
                  {social.map((media) => {
                    return (
                      <li key={media.id} className='cursor-pointer'
                        onClick={() => window.open(media.link, '_blank')}
                      >
                        {media.name}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Contact Section */}
              <div className="space-y-4">
                <h3 className="font-medium">CONTACT</h3>
                <div className="font-extralight space-y-1">
                  <p>+964 (0) 750 629 3333</p>
                  <p>+964 (0) 771 855 3303</p>
                  <p className="break-words">CONTACT@PLENUMCERAMICA.COM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom Text */}
          <div className="mt-6 lg:mt-8 text-xs sm:text-sm border-t border-white/20 pt-4 font-extralight">
            ©2024 PLENUM CERAMICA. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

