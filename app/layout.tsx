"use client";
import "./globals.css";
import Footer from "./components/Footer";
import { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !scrollRef.current) return;

    const locomotiveScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 0.73, // Adjust these values as needed
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

    // Refresh locomotive scroll on window resize
    window.addEventListener("resize", () => {
      locomotiveScroll.update();
    });

    // Cleanup function
    return () => {
      locomotiveScroll.destroy();
      window.removeEventListener("resize", () => {
        locomotiveScroll.update();
      });
    };
  }, []); // Empty dependency array

  return (
    <html lang="en">
      <body ref={scrollRef}>
        <main className="flex-grow">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}