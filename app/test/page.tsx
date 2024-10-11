"use client"
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import image2 from "@/public/imageD.png";
import image3 from "@/public/imageD2.png";
import image4 from "@/public/imageLL.png";

const TileSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const [selectedTile, setSelectedTile] = useState("Floor"); // Store the selected tile type

  const tiles = [
    { type: "Floor", image: image4, title: "FLOOR TILES" },
    { type: "Wall", image: image3, title: "WALL TILES" },
    { type: "Roof", image: image2, title: "ROOF TILES" }
  ];

  const selectedTileIndex = tiles.findIndex(tile => tile.type === selectedTile);
  const reorderedTiles = [
    tiles[(selectedTileIndex + 2) % 3], // Left tile
    tiles[selectedTileIndex],           // Center tile (selected)
    tiles[(selectedTileIndex + 1) % 3]  // Right tile
  ];

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  const handleTileClick = (type:any) => {
    setSelectedTile(type);
  };

  return (
    <div className="text-white min-h-screen flex flex-col items-center py-20">
      {/* Title */}
      <motion.h1
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeInVariants}
        className="text-[43px] md:text-8xl font-mansory text-center mb-14"
      >
        TYPES OF TILES
      </motion.h1>

      {/* Menu Buttons */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeInVariants}
        className="flex justify-center space-x-4 pb-12"
      >
        <button onClick={() => handleTileClick("Floor")} className={`py-2 px-4 rounded-full ${selectedTile === "Floor" ? "bg-teal-500" : "text-white"}`}>
          Floor Tiles
        </button>
        <button onClick={() => handleTileClick("Wall")} className={`py-2 px-4 ${selectedTile === "Wall" ? "bg-teal-500" : "text-white"}`}>
          Wall Tiles
        </button>
        <button onClick={() => handleTileClick("Roof")} className={`py-2 px-4 ${selectedTile === "Roof" ? "bg-teal-500" : "text-white"}`}>
          Roof Tiles
        </button>
      </motion.div>

      {/* Tile Images Section */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeInVariants}
        className="relative w-full overflow-hidden px-4"
      >
        <div className="flex flex-nowrap gap-6 md:gap-8 lg:gap-12 items-center">
          {reorderedTiles.map((tile, index) => (
            <motion.div
              key={tile.type}
              className={`w-[${index === 1 ? "40%" : "30%"}] sm:w-[${index === 1 ? "44%" : "28%"}] flex-shrink-0 relative overflow-hidden bg-cover bg-center h-[${index === 1 ? "400px" : "300px"}] sm:h-[${index === 1 ? "500px" : "400px"}] md:h-[${index === 1 ? "650px" : "500px"}]`}
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1, scale: index === 1 ? 1.05 : 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image src={tile.image} alt={`${tile.type} Tile`} layout="fill" objectFit="cover" className="w-full h-full" />
              {index === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute inset-0 flex flex-col items-center justify-end pb-6"
                >
                  <h2 className="text-3xl md:text-6xl font-mansory">{tile.title}</h2>
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
