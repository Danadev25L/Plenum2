"use client";
import { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !scrollRef.current) return;

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const locomotiveScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: isMobile ? 1.4 : 0.73,
      class: "is-revealed",
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
      laptop:{
        smooth: true,
      }
    });

    window.addEventListener("resize", () => {
      locomotiveScroll.update();
    });

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
      window.removeEventListener("resize", checkMobile);
    };
  }, [isMobile]);

  return <div ref={scrollRef}>{children}</div>;
}
