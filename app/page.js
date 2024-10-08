"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import Image from "next/image";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaSpotify,
  FaBriefcase,
} from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import { RiDownloadLine, RiVerifiedBadgeFill } from "react-icons/ri";

import ParticlesBackground from "./components/Particles";
import ProjectContainer from "./components/ProjectContainer";
import Marquee from "./components/Marquee";

import carousel from "../public/data/carousel.json";
import featured from "../public/data/featured.json";

const Home = () => {
  const [track, setTrack] = useState(null);
  const [carouselImages, setCarouselImages] = useState([]);
  const [featuredProjects, setFeaturedProjects] = useState([]);

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

    setFeaturedProjects(featured);
    setCarouselImages(carousel);
    fetchLastPlayed();
  }, []);
 
  return (
    <>
      <div className="relative">
        {/* Home */}
        <section data-scroll-section id="home" className="h-screen relative">
          <ParticlesBackground />
          <div className="flex flex-col justify-center items-center text-center h-full gap-10">
            <h1
              data-scroll
              data-scroll-speed="8"
              data-scroll-position="top"
              className="text-4xl light head-underline"
            >
              Hey there, I'm <span>Kenneth Docot</span>👋
            </h1>
            <div className="flex flex-col">
              <h3
                data-scroll
                data-scroll-speed="7"
                data-scroll-position="top"
                className="text-xl light"
              >
                I'm an aspiring <span>Software Engineer</span>
              </h3>
              <h3
                data-scroll
                data-scroll-speed="5"
                data-scroll-position="top"
                className="text-xl light"
              >
                With a passion for development
              </h3>
            </div>
          </div>
        </section>

        {/* Project Auto-Slider */}
        <section data-scroll-section data-scroll>
          <div
            data-scroll
            data-scroll-speed="2"
            data-scroll-position="top"
            className="slider-container"
          >
            <Swiper
              modules={[Autoplay]}
              spaceBetween={10}
              slidesPerView={3}
              allowTouchMove={false}
              loop={true}
              speed={6500}
              freeMode={true}
              autoplay={{
                disableOnInteraction: false,
                delay: 0,
              }}
            >
              {carouselImages.map((project, index) => (
                <SwiperSlide key={index}>
                  <ProjectContainer imageSrc={project.src} alt={project.alt} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Projects */}
        <section
          data-scroll-section
          id="projects"
          className="flex flex-col py-24"
        >
          <div data-scroll className="container mx-auto px-6">
            <div className="flex flex-col gap-24">
              <h1 className="text-center text-3xl">
                <span>Featured Projects</span>
              </h1>
              <div className="grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-5">
                {featuredProjects.map((project, index) => (
                  <ProjectContainer
                    key={index}
                    href={project.href}
                    imageSrc={project.src}
                    title={project.title}
                    description={project.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section data-scroll-section id="about" className="flex flex-col py-24">
          <div className="container mx-auto px-6">
            <div className="flex flex-col gap-24">
              <h1 className="text-center text-3xl">
                <span>About Me</span>
              </h1>
              <div className="grid grid-cols-8 gap-4">
                {/* Bento Row 1 */}

                {/* Name and Info */}
                <div className="group relative overflow-hidden col-span-4 row-span-1 p-[1px] rounded-lg transition-all duration-700 hover:shadow-[0_4px_15px_0_#412F84]">
                  <div className="absolute inset-[-1000%] duration-700 transition-all opacity-0 group-hover:opacity-100 group-hover:animate-shimmer bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <div className="h-full w-full p-8 flex gap-5 font-neue items-center justify-center rounded-lg bg-[#282828] text-white backdrop-blur-3xl">
                    <div className="w-[140px] h-[140px] rounded-full overflow-hidden">
                      <Image
                        src={"/images/docs.jpeg"}
                        width={300}
                        height={300}
                        className="w-full h-full object-none object-top"
                      />
                    </div>
                    <div className="flex-1 text-justify">
                      <p>
                        My name is <span>Kenneth Docot</span>.
                      </p>
                      <br />
                      <p>
                        I'm a 22-year-old <span>Freelance Developer</span> for
                        The Path, with a
                        <span> burning passion for development</span> and a
                        mission to build
                        <span> reliable and scalable solutions</span>.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Projects Developed */}
                <div className="group relative overflow-hidden col-span-2 row-span-1 p-[1px] rounded-lg transition-all duration-700 hover:shadow-[0_4px_15px_0_#412F84]">
                  <div className="absolute inset-[-1000%] duration-700 transition-all opacity-0 group-hover:opacity-100 group-hover:animate-shimmer bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <div className="h-full w-full p-8 flex flex-col font-neue items-center justify-center rounded-lg bg-[#282828] text-white backdrop-blur-3xl">
                    <p className="text-6xl font-bold">
                      <span>10+</span>
                    </p>
                    <p>Projects Developed</p>
                  </div>
                </div>

                {/* Freelancing Experience */}
                <div className="group relative overflow-hidden col-span-2 row-span-1 p-[1px] rounded-lg transition-all duration-700 hover:shadow-[0_4px_15px_0_#412F84]">
                  <div className="absolute inset-[-1000%] duration-700 transition-all opacity-0 group-hover:opacity-100 group-hover:animate-shimmer bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <div className="h-full w-full p-8 flex flex-col font-neue items-center justify-center rounded-lg bg-[#282828] text-white backdrop-blur-3xl">
                    <p className="text-6xl font-bold">
                      <span>1.5+</span>
                    </p>
                    <p>Years of Freelancing Experience</p>
                  </div>
                </div>

                {/* Bento Row 2 */}

                {/* Fun Fact */}
                <div className="group relative overflow-hidden col-span-3 row-span-1 p-[1px] rounded-lg transition-all duration-700 hover:shadow-[0_4px_15px_0_#412F84]">
                  <div className="absolute inset-[-1000%] duration-700 transition-all opacity-0 group-hover:opacity-100 group-hover:animate-shimmer bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <div className="h-full w-full p-8 flex gap-4 font-neue items-center justify-center rounded-lg bg-[#282828] text-white backdrop-blur-3xl">
                    <p className="text-5xl text-center flex">🏅</p>
                    <p>
                      <span>Fun Fact: </span>Won 2 Gold Medals for my Alma
                      Mater, swimming freestyle at the PAPRISA Meet.
                    </p>
                  </div>
                </div>

                {/* Valedictorian */}
                <div className="group relative overflow-hidden col-span-3 row-span-1 p-[1px] rounded-lg transition-all duration-700 hover:shadow-[0_4px_15px_0_#412F84]">
                  <div className="absolute inset-[-1000%] duration-700 transition-all opacity-0 group-hover:opacity-100 group-hover:animate-shimmer bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <div className="h-full w-full p-8 flex gap-4 font-neue items-center justify-center rounded-lg bg-[#282828] text-white backdrop-blur-3xl">
                    <p className="text-5xl text-center flex">🎓</p>
                    <p>
                      Graduated as the <span>Batch Valedictorian</span> of Pasig
                      Catholic College, Batch 2023-2024
                    </p>
                  </div>
                </div>

                {/* Last Played */}
                <div className="group relative overflow-hidden col-span-2 row-span-1 p-[1px] rounded-lg transition-all duration-700 hover:shadow-[0_4px_15px_0_#11998E]">
                  <div className="absolute inset-[-1000%] duration-700 transition-all opacity-0 group-hover:opacity-100 group-hover:animate-shimmer bg-[conic-gradient(from_270deg_at_50%_50%,#6DD5ED_0%,#11998E_50%,#6DD5ED_100%)]" />
                  <div className="h-full w-full p-8 gap-12 flex flex-col font-neue rounded-lg bg-[#282828] text-white backdrop-blur-3xl">
                    <div className="flex items-center gap-4">
                      <FaSpotify className="text-green-300 w-[40px] h-[40px]" />
                      <p className="text-green-300 text-xl">
                        <span>Last Played</span>
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div>
                        <div>
                          <Image
                            src={track?.image}
                            width={100}
                            height={100}
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col truncate">
                        <p className="truncate">
                          <span>{track?.name}</span>
                        </p>
                        <p>{track?.artist}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bento Row 3 */}

                {/* My Socials */}
                <div className="group relative overflow-hidden col-span-2 row-span-1 p-[1px] rounded-lg transition-all duration-700 hover:shadow-[0_4px_15px_0_#412F84]">
                  <div className="absolute inset-[-1000%] duration-700 transition-all opacity-0 group-hover:opacity-100 group-hover:animate-shimmer bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <div className="h-full w-full p-8 gap-5 flex flex-col font-neue items-center justify-center rounded-lg bg-[#282828] text-white backdrop-blur-3xl">
                    <ul className="flex gap-10">
                      <li>
                        <a href="#">
                          <FaFacebookF className="w-[30px] h-[30px] duration-500 transition-all hover:text-blue-500" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FaGithub className="w-[30px] h-[30px] duration-500 transition-all hover:text-yellow-100" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FaLinkedinIn className="w-[30px] h-[30px] duration-500 transition-all hover:text-blue-400" />
                        </a>
                      </li>
                    </ul>
                    <p className="text-2xl">
                      <span>My Socials</span>
                    </p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="group relative overflow-hidden col-span-4 row-span-1 p-[1px] rounded-lg transition-all duration-700 hover:shadow-[0_4px_15px_0_#412F84]">
                  <div className="absolute inset-[-1000%] duration-700 transition-all opacity-0 group-hover:opacity-100 group-hover:animate-shimmer bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <div className="h-full w-full p-8 gap-5 flex flex-col font-neue rounded-lg bg-[#282828] text-white backdrop-blur-3xl">
                    <p className="text-center text-2xl">
                      <span>Tech Stack</span>
                    </p>
                    <Marquee />
                  </div>
                </div>

                {/* Resume */}
                <div className="group relative overflow-hidden col-span-2 row-span-1 p-[1px] rounded-lg transition-all duration-700 hover:shadow-[0_4px_15px_0_#412F84]">
                  <div className="absolute inset-[-1000%] duration-700 transition-all opacity-0 group-hover:opacity-100 group-hover:animate-shimmer bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <div className="h-full w-full p-8 flex gap-4 font-neue items-center justify-center rounded-lg bg-[#282828] text-white backdrop-blur-3xl">
                    <a
                      className="flex justify-center items-center gap-4"
                      href="#"
                    >
                      <RiDownloadLine className="w-[40px] h-[40px]" />
                      <p className="text-2xl">
                        <span>Resume</span>
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section data-scroll-section className="flex flex-col py-24">
          <div id="education" className="container mx-auto px-6">
            <h1 className="text-center text-3xl mb-16">
              <span>Education</span>
            </h1>
            <div className="flex gap-12">
              {/* Education Information (Left Section) */}
              <div
                className="flex flex-col space-y-8 w-3/4 h-max"
                data-scroll
                data-scroll-speed="1"
              >
                {/* Senior High Experience */}
                <div className="group relative overflow-hidden p-[1px] rounded-lg transition-all duration-700 hover:shadow-[0_4px_15px_0_#412F84]">
                  <div className="absolute inset-[-1000%] duration-700 transition-all opacity-0 group-hover:opacity-100 group-hover:animate-shimmer bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <div className="h-full w-full p-6 font-neue rounded-lg bg-[#282828] text-white backdrop-blur-3xl">
                    <h2 className="text-3xl font-bold mb-2">
                      <span className="font-neue">
                        TVL Strand - Information and Communications Technology
                      </span>
                    </h2>
                    <p className="text-lg text-gray-400 flex items-center gap-2 mb-4">
                      <IoSchool />
                      Pasig Catholic College, 2018 - 2020
                    </p>
                    <div className="flex w-full gap-10">
                      <div className="flex flex-1 flex-col border-r-2 border-r-white">
                        <h3 className="mb-2">
                          <span className="font-neue font-bold tracking-normal text-lg">
                            Academic Achievements
                          </span>
                        </h3>
                        <ul className="pl-4 text-sm flex flex-col gap-2 list-disc text-gray-400">
                          <li>
                            Best Thesis (Apollo: An Online SHS Thesis Library),
                            2020
                          </li>
                          <li>Specialized Subjects Excellence Awardee, 2020</li>
                          <li>1st Place - Arduino Challenge @ TIP Manila, 2020</li>
                          <li>With Honors, 2018 - 2020</li>
                        </ul>
                      </div>
                      <div className="flex flex-1 flex-col">
                        <h3 className="font-bold tracking-normal text-lg mb-2">
                          <span className="font-neue font-bold tracking-normal text-lg">
                            Leadership Experience
                          </span>
                        </h3>
                        <ul className="pl-4 text-sm flex flex-col gap-2 list-disc text-gray-400">
                          <li>President - TVL Council, 2020</li>
                          <li>Class Vice President, 2020</li>
                          <li>Year Level Beadle - TVL Council, 2019</li>
                          <li>Class President, 2019</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col">
                      <h3 className="font-bold tracking-normal text-lg mt-4 mb-2">
                        <span className="font-neue font-bold tracking-normal text-lg">
                          Certifications Gained
                        </span>
                      </h3>
                      <ul className="pl-4 text-sm flex flex-col gap-2 list-disc text-gray-400">
                        <li>
                          <a className="flex items-center gap-1 head-underline w-max">
                            Microsoft Office Specialist (MS PowerPoint) - issued
                            by Microsoft, Jun. 2020
                            <RiVerifiedBadgeFill className="text-green-400" />
                          </a>
                        </li>
                        <li>
                          <a className="flex items-center gap-1 head-underline w-max">
                            National Certificate II (Computer Systems Servicing)
                            - issued by TESDA, Apr. 2020
                            <RiVerifiedBadgeFill className="text-green-400" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* College Experience */}
                <div className="group relative overflow-hidden p-[1px] rounded-lg transition-all duration-700 hover:shadow-[0_4px_15px_0_#412F84]">
                  <div className="absolute inset-[-1000%] duration-700 transition-all opacity-0 group-hover:opacity-100 group-hover:animate-shimmer bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <div className="h-full w-full p-6 font-neue rounded-lg bg-[#282828] text-white backdrop-blur-3xl">
                    <h2 className="text-3xl font-bold mb-2">
                      <span className="font-neue">
                        Bachelor of Science in Information Technology
                      </span>
                    </h2>
                    <p className="text-lg text-gray-400 flex items-center gap-2 mb-4">
                      <IoSchool />
                      Pasig Catholic College, 2020 - 2024
                    </p>
                    <div className="flex w-full gap-10">
                      <div className="flex flex-1 flex-col border-r-2 border-r-white">
                        <h3 className="mb-2">
                          <span className="font-neue font-bold tracking-normal text-lg">
                            Academic Achievements
                          </span>
                        </h3>
                        <ul className="pl-4 text-sm flex flex-col gap-2 list-disc text-gray-400">
                          <li>Valedictorian, 2024</li>
                          <li>Cum Laude, 2024</li>
                          <li>Academic Achiever Awardee, 2020 - 2024</li>
                          <li>Dean's Lister, 2020 - 2023</li>
                        </ul>
                      </div>
                      <div className="flex flex-1 flex-col">
                        <h3 className="font-bold tracking-normal text-lg mb-2">
                          <span className="font-neue font-bold tracking-normal text-lg">
                            Leadership Experience
                          </span>
                        </h3>
                        <ul className="pl-4 text-sm flex flex-col gap-2 list-disc text-gray-400">
                          <li>PRO Internal - ITS Council, 2022 - 2024</li>
                          <li>Year Level Beadle - ITS Council, 2020 - 2022</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col">
                      <h3 className="font-bold tracking-normal text-lg mt-4 mb-2">
                        <span className="font-neue font-bold tracking-normal text-lg">
                          Certifications Gained
                        </span>
                      </h3>
                      <ul className="pl-4 text-sm flex flex-col gap-2 list-disc text-gray-400">
                        <li>
                          <a href="" className="flex items-center gap-1 head-underline w-max">
                            CCNA: Introduction to Networks - issued by Cisco |
                            Dec. 2021
                            <RiVerifiedBadgeFill className="text-green-400" />
                          </a>
                        </li>
                        <li>
                          <a href="" className="flex items-center gap-1 head-underline w-max">
                            CCNA: Switching, Routing, and Wireless Essentials -
                            issued by Cisco | Jun. 2022
                            <RiVerifiedBadgeFill className="text-green-400" />
                          </a>
                        </li>
                        <li>
                          <a href="" className="flex items-center gap-1 head-underline w-max">
                            Cybersecurity Essentials - issued by Cisco | Jan.
                            2023
                            <RiVerifiedBadgeFill className="text-green-400" />
                          </a>
                        </li>
                        <li>
                          <a href="" className="flex items-center gap-1 head-underline w-max">
                            Network Security - issued by Cisco | Aug. 2023
                            <RiVerifiedBadgeFill className="text-green-400" />
                          </a>
                        </li>
                        <li>
                          <a href="" className="flex items-center gap-1 head-underline w-max">
                            CCNA: Enterprise Networking, Security, and
                            Automation - issued by Cisco | Sep. 2023
                            <RiVerifiedBadgeFill className="text-green-400" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Sticky Logo */}
              <div
                data-scroll
                data-scroll-sticky
                data-scroll-target="#education"
                className="w-1/4 h-max"
              >
                <Image
                  src={"/images/pcc_logo.png"}
                  width={300}
                  height={300}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section
          data-scroll-section
          id="experience"
          className="flex flex-col py-32"
        >
          <div className="container mx-auto px-6">
            <h1 className="text-center text-3xl mb-16">
              <span>Work Experience</span>
            </h1>

            <div className="-my-6">
            {/* The Path */}
              <div className="relative pl-8 sm:pl-32 py-6 group">
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                    Mar. 2023
                  </time>
                  <div className="text-xl font-bold text-white">
                    <h2>
                      <span className="font-neue tracking-normal">
                        Full-Stack Developer (Freelance)
                      </span>
                    </h2>
                  </div>
                </div>
                <div className="text-gray-200">
                  <p className="flex gap-2 items-center">
                    <span>
                      <FaBriefcase />
                    </span>
                    The Path
                  </p>
                  <div className="flex flex-1 flex-col mt-2 text-gray-400">
                    As a Fullstack Developer for The Path, I worked on both the
                    frontend and backend development for a range of projects,
                    providing customized solutions based on the specific needs
                    and technologies preferred by clients.
                    <h3 className="font-bold tracking-normal mt-2 mb-2">
                      <span className="font-neue font-bold tracking-normal text-gray-200">
                        Responsibilities
                      </span>
                    </h3>
                    <ul className="pl-4 flex flex-col gap-2 list-disc text-gray-400">
                      <li>
                        Developed full-stack web applications tailored to each
                        client's preferred technology stack, ensuring high
                        quality and reliability.
                      </li>
                      <li>
                        Created and maintained an e-commerce platform,
                        delivering seamless user experiences and streamlined
                        backend operations.
                      </li>
                      <li>
                        Collaborated directly with clients to gather
                        requirements, ensuring the final product aligned
                        perfectly with their needs.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            {/* GoCommerce */}
              <div className="relative pl-8 sm:pl-32 py-6 group">
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                    Mar. 2024
                  </time>
                  <div className="text-xl font-bold text-white">
                    <h2>
                      <span className="font-neue tracking-normal">
                        Web Developer Intern
                      </span>
                    </h2>
                  </div>
                </div>
                <div className="text-gray-200">
                  <a
                    href="https://gocommerce.asia/"
                    className="flex gap-2 items-center head-underline w-max"
                  >
                    <span>
                      <FaBriefcase />
                    </span>
                    Nauts & Vectors Company, Inc. (GoCommerce)
                  </a>
                  <div className="flex flex-1 flex-col mt-2 text-gray-400">
                    During my internship at GoCommerce, I played a crucial role
                    in transforming design prototypes into fully functional web
                    pages for the company’s .COM brands and their clients,
                    ensuring a consistent and polished look and feel across all
                    products.
                    <h3 className="font-bold tracking-normal mt-2 mb-2">
                      <span className="font-neue font-bold tracking-normal text-gray-200">
                        Responsibilities
                      </span>
                    </h3>
                    <ul className="pl-4 flex flex-col gap-2 list-disc text-gray-400">
                      <li>
                        Converted Figma prototypes into pixel-perfect,
                        production-grade Shopify code, adhering to best
                        practices for frontend development.
                      </li>
                      <li>
                        Conducted quality assurance (QA) testing and implemented
                        conversion rate optimization (CRO) strategies to improve
                        the user experience and effectiveness of the company’s
                        e-commerce sites.
                      </li>
                      <li>
                        Provided research and insights on potential use cases
                        and customer journey flows, contributing to
                        decision-making processes within the development and
                        marketing teams.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="flex flex-col" id="contact" data-scroll-section>
          <div
            className="container mx-auto px-6 flex flex-col py-24"
            data-scroll-container
          >
            <div className="flex flex-col">
              <h2 className="text-center text-6xl uppercase font-bold mb-8 text-white">
                Get In Touch
              </h2>

              {/* Card Containers */}
              <div className="flex space-x-4 justify-center">
                {/* Email */}
                <div
                  className="group relative overflow-hidden p-[1px] shadow rounded-lg transition-all duration-700 hover:shadow-[0_4px_15px_0_#412F84]"
                  data-scroll
                >
                  <div className="absolute inset-[-1000%] duration-700 transition-all opacity-0 group-hover:opacity-100 group-hover:animate-shimmer bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <div className="h-full w-full p-8 flex font-neue items-center justify-center rounded-lg bg-[#282828] text-white backdrop-blur-3xl">
                    <FaEnvelope className="w-6 h-6 text-white mr-3" />
                    <div>
                      <p className="text-lg font-semibold text-white">
                        <span>Email</span>
                      </p>
                      <p className="text-white">docotkat@gmail.com</p>
                    </div>
                  </div>
                </div>

                {/* Mobile */}
                <div
                  className="group relative overflow-hidden p-[1px] shadow rounded-lg transition-all duration-700 hover:shadow-[0_4px_15px_0_#412F84]"
                  data-scroll
                >
                  <div className="absolute inset-[-1000%] duration-700 transition-all opacity-0 group-hover:opacity-100 group-hover:animate-shimmer bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <div className="h-full w-full p-8 flex font-neue items-center justify-center rounded-lg bg-[#282828] text-white backdrop-blur-3xl">
                    <FaPhoneAlt className="w-6 h-6 text-white mr-3" />
                    <div>
                      <p className="text-lg font-semibold text-white">
                        <span>Mobile No</span>
                      </p>
                      <p className="text-white">+(63) 915 111 0325</p>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div
                  className="group relative overflow-hidden p-[1px] shadow rounded-lg transition-all duration-700 hover:shadow-[0_4px_15px_0_#412F84]"
                  data-scroll
                >
                  <div className="absolute inset-[-1000%] duration-700 transition-all opacity-0 group-hover:opacity-100 group-hover:animate-shimmer bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <div className="h-full w-full p-8 flex font-neue items-center justify-center rounded-lg bg-[#282828] text-white backdrop-blur-3xl">
                    <FaMapMarkerAlt className="w-6 h-6 text-white mr-3" />
                    <div>
                      <p className="text-lg font-semibold text-white">
                        <span>Address</span>
                      </p>
                      <p className="text-white">Pasig City, Metro Manila</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
