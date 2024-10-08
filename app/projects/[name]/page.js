"use client";
import { useParams } from "next/navigation";
import projectsData from "../../../public/data/projects.json";
import Image from "next/image";
import ProjectContainer from "@/app/components/ProjectContainer";

const ProjectPage = () => {
  const params = useParams();
  const { name } = params;

  // Fetch project data based on the name
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
                <div>
                  {project.roles.map((role, index) => (
                    <div
                      className="rounded-full border border-purple-400 px-5 py-1"
                      key={index}
                    >
                      <h2>
                        <span className="font-neue tracking-normal">
                          {role.title}
                        </span>
                      </h2>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status */}
              <div className="flex gap-2 items-center mb-4">
                <p className="text-gray-500">{project.duration}</p>
                <span
                  className={`font-neue text-xs tracking-normal inline-block border px-3 py-1 rounded-md text-white ${
                    project.status === "complete"
                      ? "border-green-500"
                      : "border-orange-500"
                  }`}
                >
                  {project.status === "complete" ? "Complete" : "Pending"}
                </span>
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
                      className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                    >
                      Live Site
                    </a>
                  </li>
                )}
                {project.github_repo.has_repo && (
                  <li>
                    <a
                      href={project.github_repo.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-gray-900 transition-colors"
                    >
                      GitHub Repo
                    </a>
                  </li>
                )}
                {project.figma_uizard.has_project && (
                  <li>
                    <a
                      href={project.figma_uizard.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-purple-500 text-white font-bold py-2 px-4 rounded hover:bg-purple-600 transition-colors"
                    >
                      Figma/Uizard Project
                    </a>
                  </li>
                )}
                {project.paper.has_paper && (
                  <li>
                    <a
                      href={project.paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition-colors"
                    >
                      Paper
                    </a>
                  </li>
                )}
              </ul>
            </div>
            
            {/* Tech Stack */}
            <div>
              <h2 className="text-xl font-semibold">Tech Stack:</h2>
              <p>{project.tech_stack.join(", ")}</p>
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
