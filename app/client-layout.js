"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import localFont from "next/font/local";
import { Syncopate } from "next/font/google";

import "./globals.css";
import "swiper/css";
import "swiper/css/autoplay";

import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

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
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let locomotiveScroll;

    const initializeScroll = () => {
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
      }

      const loadingInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            clearInterval(loadingInterval);
            return 100;
          }
          return prev + 10;
        });
      }, 300);

      import("locomotive-scroll").then((LocomotiveScroll) => {
        locomotiveScroll = new LocomotiveScroll.default({
          el: scrollRef.current,
          smooth: true,
          lerp: 0.1,
          multiplier: 0.4,
          smartphone: {
            smooth: true,
            multiplier: 1,
          },
          tablet: {
            smooth: true,
            multiplier: 1,
          },
        });

        const timeout = setTimeout(() => {
          setFadeOut(true);
          setProgress(100);
          clearInterval(loadingInterval);

          // Wait for the fade-out transition to finish before setting loading to false
          setTimeout(() => {
            setIsLoading(false);
          }, 300);
        }, 1500);

        return () => clearTimeout(timeout);
      });
    };

    initializeScroll();

    const updateScroll = () => {
      if (locomotiveScroll) {
        locomotiveScroll.update();
      }
    };

    window.addEventListener("scroll", updateScroll);

    return () => {
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
      }
      window.removeEventListener("scroll", updateScroll);
    };
  }, [pathname]);

  return (
    <html lang="en">
      <body
        ref={scrollRef}
        data-scroll-container
        className={`${syncopateRegular.variable} ${syncopateBold.variable} ${neueMontreal.variable} antialiased relative`}
      >
        {
          isLoading && (
            <Loading 
              progress={progress} 
              className={`transition-opacity duration-700 ${fadeOut ? 'opacity-0' : 'opacity-100'}`} 
            />
          )
        }
        <div className={`transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
          <CustomCursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
