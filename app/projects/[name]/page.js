"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import projectsData from "../../../public/data/projects.json";
import ProjectContainer from "@/app/components/ProjectContainer";
import * as FontAwesome from "react-icons/fa";
import * as SiFont from "react-icons/si";
import * as TbIcons from "react-icons/tb";
import PhoneContainer from "@/app/components/PhoneContainer";

const getIconComponent = (iconName) => {
  if (FontAwesome[iconName]) {
    return FontAwesome[iconName];
  } else if (SiFont[iconName]) {
    return SiFont[iconName];
  } else if (TbIcons[iconName]) {
    return TbIcons[iconName];
  } else {
    return null;
  }
};

const ProjectPage = () => {
  const params = useParams();
  const { name } = params;
  const project = projectsData.projects.find(
    (proj) => proj.page.toLowerCase() === name.toLowerCase()
  );

  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsSticky(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <section data-scroll-section className="flex flex-col md:py-24">
      <div id="project" className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Side - Sticky Info */}
          <div
            data-scroll
            {...(isSticky && { "data-scroll-sticky": "" })}
            {...(isSticky && { "data-scroll-position": "top" })}
            {...(isSticky && { "data-scroll-offset": "-20%, 20%" })}
            {...(isSticky && { "data-scroll-target": "#project" })}
            className="w-full md:w-1/2 h-max space-y-8"
          >
            <div>
              <div className="flex flex-wrap md:flex-nowrap items-center gap-x-6 mb-2">
                <h1 className="w-max text-5xl md:text-6xl">
                  <span className="font-neue tracking-normal font-bold">
                    {project.name}
                  </span>
                </h1>
                {/* Roles */}
                <div className="overflow-hidden whitespace-nowrap h-full relative">
                  <div className="flex gap-2 no-scroll">
                    {project.roles.map((role, index) => (
                      <div
                        className="inline-block rounded-md border border-purple-400 px-2 w-max"
                        key={index}
                      >
                        <h2>
                          <span className="font-neue tracking-normal text-xs">
                            {role.title}
                          </span>
                        </h2>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Status */}
              <div className="flex flex-wrap md:flex-nowrap gap-2 items-center mb-4">
                <p className="text-gray-500">{project.duration}</p>
                <div className="flex items-center gap-1">
                  <span
                    className={`rounded-full w-1.5 h-1.5 ${
                      project.status === "Completed"
                        ? "bg-green-400"
                        : "bg-orange-400"
                    }`}
                  />
                  <span className="font-neue text-xs tracking-normal inline-block text-white">
                    {project.status}
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base">{project.description}</p>
            </div>

            {/* Links */}
            {(project.site.has_site ||
              project.github_repo.has_repo ||
              project.figma_uizard.has_project ||
              project.paper.has_paper) && (
              <div>
                <ul className="flex sm:flex-nowrap flex-wrap justify-start gap-2">
                  {project.site.has_site && (
                    <li>
                      <a
                        href={project.site.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex relative overflow-hidden text-xs text-white p-[1px] rounded transition-all duration-700 hover:shadow-[0_4px_15px_0_#412F84]"
                      >
                        <div className="absolute inset-[-1000%] duration-700 transition-all animate-shimmer bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <div className="h-full w-full py-2 px-4 gap-1.5 flex font-neue items-center justify-center rounded bg-blue-600 text-white backdrop-blur-3xl">
                          Live Site
                          <FontAwesome.FaArrowRight className="transform -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
                        </div>
                      </a>
                    </li>
                  )}
                  {project.github_repo.has_repo && (
                    <li>
                      <a
                        href={project.github_repo.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex relative overflow-hidden text-xs text-white p-[1px] rounded transition-all duration-700 hover:shadow-[0_4px_15px_0_#412F84]"
                      >
                        <div className="absolute inset-[-1000%] duration-700 transition-all animate-shimmer bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <div className="h-full w-full py-2 px-4 gap-1.5 flex font-neue items-center justify-center rounded bg-[#282828] text-white backdrop-blur-3xl">
                          GitHub Repo
                          <FontAwesome.FaGithub />
                        </div>
                      </a>
                    </li>
                  )}
                  {project.figma_uizard.has_project && (
                    <li>
                      <a
                        href={project.figma_uizard.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex relative overflow-hidden text-xs text-white p-[1px] rounded transition-all duration-700 hover:shadow-[0_4px_15px_0_#412F84]"
                      >
                        <div className="absolute inset-[-1000%] duration-700 transition-all animate-shimmer bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <div className="h-full w-full py-2 px-4 gap-1.5 flex font-neue items-center justify-center rounded bg-[#282828] text-white backdrop-blur-3xl">
                          Prototype
                          <FontAwesome.FaFigma />
                        </div>
                      </a>
                    </li>
                  )}
                  {project.paper.has_paper && (
                    <li>
                      <a
                        href={project.paper.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative overflow-hidden text-xs p-[1px] flex items-center text-white rounded transition-all duration-700 hover:shadow-[0_4px_15px_0_#412F84]"
                      >
                        <div className="absolute inset-[-1000%] duration-700 transition-all animate-shimmer bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <div className="h-full w-full py-2 px-4 gap-1.5 flex font-neue items-center justify-center rounded bg-[#282828] text-white backdrop-blur-3xl">
                          Paper
                          <FontAwesome.FaArrowRight className="transform -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
                        </div>
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            )}
            {/* Tech Stack */}
            <div>
              <h2 className="text-xl font-semibold mb-4">
                <span className="font-neue tracking-normal font-bold">
                  Tech Stack
                </span>
              </h2>
              <div className="flex flex-wrap items-center gap-4">
                {project.tech_stack.map((tech, index) => {
                  const IconComponent = getIconComponent(tech.icon);
                  return (
                    <div
                      key={index}
                      className="relative flex items-center space-x-2 border border-purple-600 rounded-md p-2 group hover:cursor-help"
                    >
                      {IconComponent && (
                        <span className="text-2xl">
                          <IconComponent />
                        </span>
                      )}

                      {/* Tooltip */}
                      <div className="absolute transition-all duration-700 -z-50 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm rounded-lg left-1/2 -translate-x-1/2 py-1 px-2 whitespace-nowrap transform top-[120%] [margin-left:0!important] h-max group-hover:z-10">
                        {tech.name} {/* The tooltip text */}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side - Project Images */}
          <div
            className="flex flex-col items-center space-y-8 w-full md:w-1/2 h-max"
            data-scroll
          >
            {project.images.map((image, index) => {
              return project.isMobile ? (
                <PhoneContainer key={index} imageSrc={image.src} />
              ) : (
                <ProjectContainer key={index} imageSrc={image.src} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
