"use client";

import { useEffect, useState } from "react";

import ProjectContainer from "../components/ProjectContainer";

import featured from "../../public/data/featured.json";

const Projects = () => {
  const [featuredProjects, setFeaturedProjects] = useState([]);

  useEffect(() => {
    setFeaturedProjects(featured);
  }, []);

  return (
    <section data-scroll-section id="projects" className="flex flex-col py-24">
      <div data-scroll className="container mx-auto px-6">
        <div className="flex flex-col gap-16 text-center">
          <div className="flex flex-col gap-4">
            <h1 className="text-7xl">
              <span className="font-neue tracking-normal font-bold">
                All Projects
              </span>
            </h1>
            <p>
              This is a list of all my publicly available projects and
              commissions.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-5">
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
  );
};

export default Projects;
