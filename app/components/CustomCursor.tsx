"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      id="cursor"
      className="fixed top-0 left-0 w-24 h-24 pointer-events-none z-50"
      style={{
        translate: "-50%, -50%",
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <div className="cursor-inner">
        <div className="cursor-circle rounded-full">
          <div className="cursor__link">
            <span className="_cta-3">Discover</span>
          </div>
          <div className="cursor__expand">
            <span className="_cta-3">Gallery</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CustomCursor;