import Image from 'next/image';
import logo from "@/public/logA.png"

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#26B3B4] text-white p-8 overflow-hidden ">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="col-span-1">
            <p className="mb-4">
              Plenum produces ceramic slabs which challenge the
              traditional uses of this material, creating large sized
              minimum thickness surfaces, which are used in exterior
              architecture, interior design and furnishings.
            </p>
            <Image src={logo} alt="Logo" width={150} height={100}
            className="pt-6" />
           </div>
          
          <div className="col-span-1 grid grid-cols-1 md:grid-cols-3 gap-4 text-[14px]">
            <div>
              <h3 className=" mb-6">COMPANY</h3>
              <ul className="space-y-1 font-light	">
                <li>PROJECTS</li>
                <li>WALL TILES</li>
                <li>FLOOR TILES</li>
                <li>ROOF TILES</li>
                <li>BATH & WC</li>
                <li>ARCHIVE</li>
              </ul>
            </div>
            
            <div>
              <h3 className=" mb-6">FOLLOW</h3>
              <ul className="space-y-1 mb-4 cursor-pointer font-light	">
                <li className='font-thin'>FACEBOOK</li>
                <li>INSTAGRAM</li>
                <li>X (TWITTER)</li>
                <li>LINKEDIN</li>
              </ul>
              <p className="text-sm my-5">
                Subscribe to our newsletter to keep up
                to date with our latest news and to
                receive product updates.
              </p>
              <button
  style={{ border: "2px solid #D1D5DB" }} 
  className="custom-button py-2 px-6 custom-button hover:custom-button w-max"
>
  SUBSCRIBE NOW
</button>
            </div>
            
            <div className='font-light '>
              <h3 className=" mb-6">CONTACT</h3>
              <p>+964 (0) 750 629 3333</p>
              <p>+964 (0) 771 855 3303</p>
              <p>CONTACT@PLENUMCERAMICA.COM</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-[14px]">
          ©2024 PLENUM CERAMICA. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;