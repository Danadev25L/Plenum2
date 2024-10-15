"use client";
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const locomotiveScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 0.73,
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

    // Cleanup LocomotiveScroll instance
    return () => {
      locomotiveScroll.destroy();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div ref={scrollRef}>{children}</div>;
}