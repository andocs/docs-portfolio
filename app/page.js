"use client";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { BsLinkedin } from "react-icons/bs";
import { FaSpotify } from "react-icons/fa";

import Navbar from "./components/Navbar";
import ParticlesBackground from "./components/Particles";
import CustomCursor from "./components/CustomCursor";
import ProjectContainer from "./components/ProjectContainer";

const Home = () => {
  const [track, setTrack] = useState(null);

  useEffect(() => {
    const fetchLastPlayed = async () => {
      try {
        const response = await fetch("api/spotify-last-played");
        const data = await response.json();
        setTrack(data);
      } catch (error) {
        console.error("Error fetching last played track:", error);
      }
    };

    fetchLastPlayed();
  }, []);

  console.log(track);

  const scrollRef = useRef(null);
  const projects = [
    {
      href: "https://example.com/project1",
      imageSrc: "path/to/project1.png",
    },
    {
      href: "https://example.com/project2",
      imageSrc: "path/to/project2.png",
    },
    {
      href: "https://example.com/project2",
      imageSrc: "path/to/project2.png",
    },
    {
      href: "https://example.com/project2",
      imageSrc: "path/to/project2.png",
    },
    // Add more projects as needed
  ];

  const featuredProjects = [
    {
      href: "https://example.com/project1",
      imageSrc: "path/to/project1.png",
    },
    {
      href: "https://example.com/project2",
      imageSrc: "path/to/project2.png",
    },
    {
      href: "https://example.com/project2",
      imageSrc: "path/to/project2.png",
    },
    {
      href: "https://example.com/project2",
      imageSrc: "path/to/project2.png",
    },
    // Add more projects as needed
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 8000,
    easing: "linear",
    autoplaySpeed: 3000,
    draggable: false,
  };

  useEffect(() => {
    let locomotiveScroll;

    import("locomotive-scroll").then((LocomotiveScroll) => {
      locomotiveScroll = new LocomotiveScroll.default({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.1,
        multiplier: 1.2,
      });
    });
    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <main data-scroll-container ref={scrollRef}>
        <Navbar />
        {/* Home */}
        <section data-scroll-section id="home" className="h-screen relative">
          <ParticlesBackground />
          <div className="flex flex-col justify-center items-center text-center h-full gap-10">
            <h1
              data-scroll
              data-scroll-speed="8"
              data-scroll-position="top"
              className="text-4xl light head-underline show"
            >
              Hey there, I'm <span>Kenneth Docot</span>
            </h1>
            <div className="flex flex-col">
              <h3
                data-scroll
                data-scroll-speed="5"
                data-scroll-position="top"
                className="text-xl light show"
              >
                I'm an aspiring <span>Software Engineer</span>
              </h3>
              <h3
                data-scroll
                data-scroll-speed="5"
                data-scroll-position="top"
                className="text-xl light show"
              >
                With a passion for development
              </h3>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section
          data-scroll-section
          id="projects"
          className="flex flex-col py-32"
        >
          <div
            data-scroll
            data-scroll-speed="2"
            data-scroll-position="top"
            className="slider-container"
          >
            <Slider {...settings}>
              {projects.map((project, index) => (
                <ProjectContainer
                  key={index}
                  href={project.href}
                  imageSrc={project.imageSrc}
                  title={project.title}
                  description={project.description}
                />
              ))}
            </Slider>
          </div>

          <div className="flex flex-col gap-24">
            <h1 className="text-center text-3xl">
              <span>Featured Projects</span>
            </h1>
            <div className="grid grid-cols-2 grid-rows-2 px-8 gap-x-4 gap-y-5">
              {featuredProjects.map((project, index) => (
                <ProjectContainer
                  key={index}
                  href={project.href}
                  imageSrc={project.imageSrc}
                  title={project.title}
                  description={project.description}
                />
              ))}
            </div>
          </div>
          {/* <h2 data-scroll>M</h2> */}
        </section>

        {/* About */}
        <section data-scroll-section id="about" className="flex flex-col py-32">
          <div className="flex flex-col">
            <h1 className="text-center text-3xl">
              <span>About Me</span>
            </h1>
            <div className="grid grid-cols-8 gap-4 px-8">
              {/* Row 1 */}
              <div className="col-span-4 row-span-1 p-8 items-center bg-white bg-opacity-5 rounded-lg flex gap-5">
                <div className="w-[140px] h-[140px] rounded-full overflow-hidden">
                  <Image src={'/images/docs.jpeg'} width={300} height={300} className="w-full h-full object-none object-top"/>
                </div>
                <div className="flex-1 text-justify"><p>My name is <span>Kenneth Docot</span>, a Freelance Full Stack Developer for The Path. I'm interested in Software Engineering, be it in the field of <span>Web Development</span> or <span>Software Development</span>.</p></div>
              </div>
          
              <div className="col-span-2 row-span-1 bg-white bg-opacity-5 rounded-lg p-4 text-center">
                <BsLinkedin className="text-blue-300" />
              </div>
              <div className="col-span-2 row-span-1 bg-white bg-opacity-5 rounded-lg p-4 text-center">
                <FaSpotify className="text-green-300"/>
              </div>

              {/* Row 2 */}
              <div className="col-span-2 row-span-1 bg-white bg-opacity-5 rounded-lg p-4 text-center">
                Short Column 3
              </div>
              <div className="col-span-4 row-span-1 bg-white bg-opacity-5 rounded-lg p-4 text-center">
                Long Column 2
              </div>
              <div className="col-span-2 row-span-1 bg-white bg-opacity-5 rounded-lg p-4 text-center">
                Short Column 4
              </div>

              {/* Row 3 */}
              <div className="col-span-3 row-span-1 bg-white bg-opacity-5 rounded-lg p-4 text-center">
                Medium Column 1
              </div>
              <div className="col-span-3 row-span-1 bg-white bg-opacity-5 rounded-lg p-4 text-center">
                Medium Column 2
              </div>
              <div className="col-span-2 row-span-1 bg-white bg-opacity-5 rounded-lg p-4 text-center">
                Short Column 5
              </div>
            </div>
          </div>
          {/* <h2 data-scroll>M</h2> */}
        </section>
      </main>
    </>
  );
};

export default Home;
