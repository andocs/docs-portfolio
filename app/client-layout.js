"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

import localFont from "next/font/local";
import { Syncopate } from "next/font/google";

import "./globals.css";
import "swiper/css";
import "swiper/css/autoplay";

import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const neueMontreal = localFont({
  src: [
    {
      path: "./fonts/NeueMontreal-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/NeueMontreal-Regular.otf",
      weight: "450",
      style: "normal",
    },
    {
      path: "./fonts/NeueMontreal-Medium.otf",
      weight: "530",
      style: "normal",
    },
    {
      path: "./fonts/NeueMontreal-Bold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/NeueMontreal-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/NeueMontreal-Italic.otf",
      weight: "450",
      style: "italic",
    },
    {
      path: "./fonts/NeueMontreal-MediumItalic.otf",
      weight: "530",
      style: "italic",
    },
    {
      path: "./fonts/NeueMontreal-BoldItalic.otf",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--font-neue-montreal",
});

const syncopateBold = Syncopate({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-syncopate-bold",
});

const syncopateRegular = Syncopate({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-syncopate-regular",
});

export function ClientRootLayout({ children }) {
  const pathname = usePathname();
  const scrollRef = useRef(null);

  useEffect(() => {
    let locomotiveScroll;

    const initializeScroll = () => {
      if (locomotiveScroll) locomotiveScroll.destroy();

      import("locomotive-scroll").then((LocomotiveScroll) => {
        locomotiveScroll = new LocomotiveScroll.default({
          el: scrollRef.current,
          smooth: true,
          lerp: 0.1,
          multiplier: 0.4,
        });
      });
    };

    initializeScroll();

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, [pathname]);

  return (
    <html lang="en">
      <body
        ref={scrollRef}
        data-scroll-container
        className={`${syncopateRegular.variable} ${syncopateBold.variable} ${neueMontreal.variable} antialiased`}
      >
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
