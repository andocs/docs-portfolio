"use client";
import { useParams } from "next/navigation";

import projectsData from "../../../public/data/projects.json";

import ProjectContainer from "@/app/components/ProjectContainer";

import * as FontAwesome from "react-icons/fa";
import * as SiFont from "react-icons/si";

const getIconComponent = (iconName) => {
  if (FontAwesome[iconName]) {
    return FontAwesome[iconName];
  } else if (SiFont[iconName]) {
    return SiFont[iconName];
  } else {
    return null;
  }
};

const ProjectPage = () => {
  const params = useParams();
  const { name } = params;

  const project = projectsData.projects.find(
    (proj) => proj.name.toLowerCase() === name.toLowerCase()
  );

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <section data-scroll-section className="flex flex-col py-24">
      <div id="project" className="container mx-auto px-6">
        <div className="flex gap-12">
          {/* Left Side - Sticky Info */}
          <div
            data-scroll
            data-scroll-sticky
            data-scroll-position="top"
            data-scroll-offset="-20%, 20%"
            data-scroll-target="#project"
            className="w-1/2 h-max space-y-8"
          >
            <div>
              <div className="flex items-center gap-6 mb-2">
                <h1 className="text-6xl">
                  <span className="font-neue tracking-normal font-bold">
                    {project.name}
                  </span>
                </h1>
                {/* Roles */}
                <div className="overflow-hidden whitespace-nowrap w-full h-full relative">
                  <div className="flex gap-1 no-scroll">
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
              <div className="flex gap-2 items-center mb-4">
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

              <p>{project.description}</p>
            </div>

            {/* Links */}
            <div>
              <ul className="flex space-x-4">
                {project.site.has_site && (
                  <li>
                    <a
                      href={project.site.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex gap-1.5 items-center bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                    >
                      Live Site
                      <FontAwesome.FaArrowRight className="transform -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
                    </a>
                  </li>
                )}
                {project.github_repo.has_repo && (
                  <li>
                    <a
                      href={project.github_repo.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-1.5 items-center bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-gray-600 transition-colors"
                    >
                      GitHub Repo
                      <FontAwesome.FaGithub />
                    </a>
                  </li>
                )}
                {project.figma_uizard.has_project && (
                  <li>
                    <a
                      href={project.figma_uizard.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-1.5 items-center bg-purple-500 text-white font-bold py-2 px-4 rounded hover:bg-purple-600 transition-colors"
                    >
                      Prototype
                      <FontAwesome.FaFigma />
                    </a>
                  </li>
                )}
                {project.paper.has_paper && (
                  <li>
                    <a
                      href={project.paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex gap-1.5 items-center bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition-colors"
                    >
                      Paper
                      <FontAwesome.FaArrowRight className="transform -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
                    </a>
                  </li>
                )}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h2 className="text-xl font-semibold mb-4">
                <span className="font-neue tracking-normal font-bold">
                  Tech Stack
                </span>
              </h2>
              <div className="flex flex-wrap items-center space-x-4">
                {project.tech_stack.map((tech, index) => {
                  const IconComponent = getIconComponent(tech.icon);
                  return (
                    <div
                      key={index}
                      className="flex items-center space-x-2 border border-purple-600 rounded-md p-2"
                    >
                      {IconComponent && (
                        <span className="text-2xl">
                          <IconComponent />
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side - Project Images */}
          <div className="flex flex-col space-y-8 w-1/2 h-max" data-scroll>
            {project.images.map((image, index) => (
              <ProjectContainer key={index} imageSrc={image.src} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
