import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import image2 from "@/public/imageD.png";
import image3 from "@/public/imageD2.png";
import image4 from "@/public/imageLL.png";
import { useRef } from 'react';

const TileSection = () => {
  const router = useRouter();
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });
  const [imagesRef, imagesInView] = useInView({ triggerOnce: false, threshold: 0.1 });

  const [selectedTile, setSelectedTile] = useState("Floor");
  const [isHovered, setIsHovered] = useState(false);
  const cursorRef = useRef<HTMLDivElement | null>(null);

  const tiles = [
    { type: "Floor", image: image4, title: "FLOOR TILES", path: "floors" },
    { type: "Wall", image: image3, title: "WALL TILES", path: "walls" },
    { type: "Roof", image: image2, title: "ROOF TILES", path: "roofs" }
  ];

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    if (imagesInView) {
      controls.start("imagesVisible");
    }
  }, [controls, imagesInView]);

  const selectedTileIndex = tiles.findIndex(tile => tile.type === selectedTile);
  const reorderedTiles = [
    tiles[(selectedTileIndex + 2) % 3],
    tiles[selectedTileIndex],
    tiles[(selectedTileIndex + 1) % 3]
  ];

  const fadeInVariants = {
    hidden: { opacity: 0, y: 230 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.25, delay: 0.4 } }
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 280 },
    imagesVisible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: "easeOut", delay: 0.15 } 
    }
  };

  const handleTileClick = (type: string) => {
    setSelectedTile(type);
  };

  // Function to handle mouse movement for the custom cursor
  const handleMouseMove = (e: React.MouseEvent) => {
    const cursor = cursorRef.current;
    if (cursor) {
      cursor.style.transform = `translate(${e.clientX - 50}px, ${e.clientY - 50}px)`;
    }
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div 
      className="text-white min-h-screen flex flex-col items-center justify-center pb-20 pt-0 md:py-20 bg-black"
      onMouseMove={handleMouseMove}
    >
      {/* Custom Cursor */}
      <div 
        id="cursor" 
        ref={cursorRef} 
        className={`fixed top-0 left-0 w-[100px] h-[100px] pointer-events-none  z-50 transition-transform duration-300 rounded-full ${isHovered ? 'opacity-100 scale-1' : 'opacity-0 scale-0'}`}
        style={{ transform: 'translate(-50%, -50%)', backdropFilter: 'blur(5px)',
          backgroundColor: 'rgba(0, 0, 0, 0.35)',}}
      >
        <div className="cursor-inner relative w-full h-full rounded-full ">
          <div className="cursor-circle absolute inset-0 flex items-center justify-center">
            <span className="text-white text-lg ">
              Discover
            </span>
          </div>
        </div>
      </div>

      {/* Tile Section */}
      <motion.h1
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeInVariants}
        className="text-4xl md:text-6xl lg:text-8xl font-mansory text-center mb-14"
      >
        TYPES OF TILES
      </motion.h1>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={fadeInVariants}
        className="flex justify-center space-x-4 pb-28"
      >
        {tiles.map((tile) => (
          <button
            key={tile.type}
            onClick={() => handleTileClick(tile.type)}
            className={`py-2 px-4 rounded-full ${selectedTile === tile.type ? 'bg-teal-500' : 'bg-transparent hover:bg-gray-400 hover:text-black'}`}
          >
            {tile.type} Tiles
          </button>
        ))}
      </motion.div>

      <motion.div
        ref={imagesRef}
        initial="hidden"
        animate={controls}
        variants={imageVariants}
        className="relative w-full overflow-hidden px-2 sm:px-3 md:px-4"
      >
        <div className="flex flex-nowrap gap-6 sm:gap-8 md:gap-14 items-center justify-between">
          {reorderedTiles.map((tile, index) => (
            <motion.div
              key={tile.type}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => router.push(`/${tile.path}`)}
              className={`flex-shrink-0 relative overflow-hidden bg-cover bg-center cursor-none ${index === 1 ? 'h-[350px] sm:h-[450px] md:h-[600px] w-[42%] sm:w-[36%] md:w-[32%] px-3 sm:px-4 md:px-5' : 'h-[300px] sm:h-[400px] md:h-[500px] w-[28%] sm:w-[30%] md:w-[28%]'}`}
            >
              <Image src={tile.image} alt={`${tile.type} Tile`} layout="fill" objectFit="cover"  />
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 bg-black bg-opacity-30">
                <h2 className="text-center text-2xl md:text-4xl font-mansory">{tile.title.split(" ")[0]} <br />  {tile.title.split(" ")[1]}</h2>

              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TileSection;
