import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import image2 from "@/public/imageD.png";
import image3 from "@/public/imageD2.png";
import image4 from "@/public/imageLL.png";

const TileSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });
  const [imagesRef, imagesInView] = useInView({ triggerOnce: false, threshold: 0.1 });

  const [selectedTile, setSelectedTile] = useState("Floor");
 
  const tiles = [
    { type: "Floor", image: image4, title: "FLOOR TILES" },
    { type: "Wall", image: image3, title: "WALL TILES" },
    { type: "Roof", image: image2, title: "ROOF TILES" }
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
    hidden: { opacity: 0, y: 150 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.4, delay: 0.4 } }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 , y: 160 },
    imagesVisible: { 
      opacity: 1, 
      y:0,
      scale: 1, 
      transition: { duration: 1.3, ease: "easeOut" , delay: 0.1} 
    }
  };

  const handleTileClick = (type: string) => {
    setSelectedTile(type);
   };

  return (
    <div className="text-white min-h-screen flex flex-col items-center justify-center pb-20 pt-0 md:py-20 bg-black">
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
            className={`py-2 px-4 rounded-full ${selectedTile === tile.type ? "bg-teal-500" : "bg-transparent border border-white"}`}
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
              className={`flex-shrink-0 relative overflow-hidden bg-cover bg-center ${
                index === 1 
                  ? `h-[350px] sm:h-[450px] md:h-[600px] w-[42%] sm:w-[36%] md:w-[32%] px-3 sm:px-4 md:px-5`
                  : `h-[300px] sm:h-[400px] md:h-[500px] w-[28%] sm:w-[30%] md:w-[28%]`
              }`}
              initial={{ opacity: 0.8, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                scale: index === 1 ? 1.05 : 1,
                transition: { duration: 0.9, ease: "easeInOut" }
              }}
              whileHover={{ scale: index === 1 ? 1.05 : 1.02, transition: { duration: 0.3 } }}
            >
              <Image src={tile.image} alt={`${tile.type} Tile`} layout="fill" objectFit="cover"/>
              {index === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute inset-0 flex flex-col items-center justify-end pb-6"
              >
                <h2 className="text-center text-3xl md:text-5xl md:pb-16 font-mansory">{tile.title}</h2>
              </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TileSection;
