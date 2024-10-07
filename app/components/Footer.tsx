import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-teal-500 text-white p-8 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="col-span-1">
            <p className="mb-4">
              Plenum produces ceramic slabs which challenge the
              traditional uses of this material, creating large sized
              minimum thickness surfaces, which are used in exterior
              architecture, interior design and furnishings.
            </p>
            <h2 className="text-2xl font-bold mb-2">PleNum</h2>
            <p>ceramica</p>
          </div>
          
          <div className="col-span-1 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="font-bold mb-2">COMPANY</h3>
              <ul className="space-y-1">
                <li>PROJECTS</li>
                <li>WALL TILES</li>
                <li>FLOOR TILES</li>
                <li>ROOF TILES</li>
                <li>BATH & WC</li>
                <li>ARCHIVE</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-2">FOLLOW</h3>
              <ul className="space-y-1 mb-4">
                <li>FACEBOOK</li>
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
  style={{ border: "2px solid #D1D5DB" }} // Updated border style
  className="text-white bg-transparent border-2 border-gray-300 py-2 px-6 rounded-md text-sm transition-all duration-500 ease-in-out hover:text-black hover:bg-white hover:bg-opacity-90 w-max"
>
  SUBSCRIBE NOW
</button>

            </div>
            
            <div>
              <h3 className="font-bold mb-2">CONTACT</h3>
              <p>+964 (0) 750 629 3333</p>
              <p>+964 (0) 771 855 3303</p>
              <p>CONTACT@PLENUMCERAMICA.COM</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-sm">
          ©2024 PLENUM CERAMICA. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;