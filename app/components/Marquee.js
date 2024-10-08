import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaSass,
  FaPhp,
  FaNodeJs,
  FaReact,
  FaAngular,
  FaPython,
  FaJava,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiMysql,
  SiMongodb,
  SiCodeigniter,
  SiExpress,
  SiTypescript,
  SiIonic,
  SiNextdotjs,
  SiShopify,
  SiVisualbasic,
  SiVisualstudiocode,
  SiAndroidstudio,
  SiTrello,
  SiJira,
  SiAzuredevops,
} from "react-icons/si";

const Marquee = () => {
    const techStack = [
        { icon: <FaHtml5 className="transition-colors duration-300 group-hover/span:text-[#E34F26]" />, name: "HTML5", color: "#E34F26" },
        { icon: <FaCss3Alt className="transition-colors duration-300 group-hover/span:text-[#1572B6]" />, name: "CSS3", color: "#1572B6" },
        {
          icon: <FaBootstrap className="transition-colors duration-300 group-hover/span:text-[#7952B3]" />,
          name: "Bootstrap", color: "#7952B3",
        },
        { icon: <FaSass className="transition-colors duration-300 group-hover/span:text-[#CC6699]" />, name: "SASS", color: "#CC6699" },
        { icon: <FaPhp className="transition-colors duration-300 group-hover/span:text-[#777BB4]" />, name: "PHP", color: "#777BB4" },
        { icon: <SiMysql className="transition-colors duration-300 group-hover/span:text-[#4479A1]" />, name: "MySQL", color: "#4479A1" },
        {
          icon: <SiCodeigniter className="transition-colors duration-300 group-hover/span:text-[#EF4223]" />,
          name: "CodeIgniter", color: "#EF4223",
        },
        { icon: <FaNodeJs className="transition-colors duration-300 group-hover/span:text-[#339933]" />, name: "Node.js", color: "#339933" },
        { icon: <SiMongodb className="transition-colors duration-300 group-hover/span:text-[#47A248]" />, name: "MongoDB", color: "#47A248" },
        { icon: <SiExpress className="transition-colors duration-300 group-hover/span:text-[#000000]" />, name: "Express", color: "#000000" },
        { icon: <FaReact className="transition-colors duration-300 group-hover/span:text-[#61DAFB]" />, name: "React", color: "#61DAFB" },
        { icon: <FaAngular className="transition-colors duration-300 group-hover/span:text-[#DD0031]" />, name: "Angular", color: "#DD0031" },
        { icon: <SiNextdotjs className="transition-colors duration-300 group-hover/span:text-[#000000]" />, name: "Next.js", color: "#000000" },
        {
          icon: <SiTypescript className="transition-colors duration-300 group-hover/span:text-[#3178C6]" />,
          name: "TypeScript", color: "#3178C6",
        },
        { icon: <SiIonic className="transition-colors duration-300 group-hover/span:text-[#3880FF]" />, name: "Ionic", color: "#3880FF" },
        { icon: <FaPython className="transition-colors duration-300 group-hover/span:text-[#3776AB]" />, name: "Python", color: "#3776AB" },
        { icon: <FaJava className="transition-colors duration-300 group-hover/span:text-[#007396]" />, name: "Java", color: "#007396" },
        {
          icon: <SiVisualbasic className="transition-colors duration-300 group-hover/span:text-[#5C2D91]" />,
          name: "VB.Net", color: "#5C2D91",
        },
        {
          icon: <SiVisualstudiocode className="transition-colors duration-300 group-hover/span:text-[#007ACC]" />,
          name: "VS Code", color: "#007ACC",
        },
        {
          icon: <SiAndroidstudio className="transition-colors duration-300 group-hover/span:text-[#3DDC84]" />,
          name: "Android Studio", color: "#3DDC84",
        },
        { icon: <SiTrello className="transition-colors duration-300 group-hover/span:text-[#0079BF]" />, name: "Trello", color: "#0079BF" },
        { icon: <SiJira className="transition-colors duration-300 group-hover/span:text-[#0052CC]" />, name: "Jira", color: "#0052CC" },
        { icon: <FaGitAlt className="transition-colors duration-300 group-hover/span:text-[#F05032]" />, name: "Git", color: "#F05032" },
        { icon: <FaGithub className="transition-colors duration-300 group-hover/span:text-[#181717]" />, name: "GitHub", color: "#181717" },
        {
          icon: <SiAzuredevops className="transition-colors duration-300 group-hover/span:text-[#0078D7]" />,
          name: "Azure DevOps", color: "#0078D7",
        },
        { icon: <SiShopify className="transition-colors duration-300 group-hover/span:text-[#7AB55C]" />, name: "Shopify", color: "#7AB55C" },
      ];

  return (
    <div className="marquee-wrapper overflow-hidden whitespace-nowrap py-4">
      <div className="marquee animate-marquee inline-block hover:[animation-play-state:paused]">
        {[...techStack, ...techStack].map((tech, index) => (
          <span
            key={index}
            className="group/span inline-block mx-4 text-3xl hover:cursor-help"
          >
            <div className="flex flex-col gap-2 items-center">
              {tech.icon} <span className={`text-sm font-neue transition-colors duration-300 group-hover/span:text-[${tech.color}]`}>{tech.name}</span>
            </div>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
