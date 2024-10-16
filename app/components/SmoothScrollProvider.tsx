"use client";

import { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 775);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!scrollRef.current) return;

    const locomotiveScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: isMobile ? 1.3 : 0.7,
      class: "is-revealed",
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
      laptop: {
        smooth: true,
      },
    });

    const handleResize = () => {
      locomotiveScroll.update();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      locomotiveScroll.destroy();
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <div data-scroll-container ref={scrollRef} style={{ minHeight: '100vh' }}>
      {children}
    </div>
  );
  }
