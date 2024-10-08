import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa";

const ProjectContainer = ({ href, imageSrc, title, description, isDisplay }) => {
  const Wrapper = href ? 'a' : 'div';

  return (
    <Wrapper
      href={href ? href : undefined} 
      target={href ? "_blank" : undefined} 
      rel={href ? "noopener noreferrer" : undefined} 
      className="group block border border-gray-700 traansition-all duration-500 rounded-lg overflow-hidden shadow-md bg-stone-900 hover:shadow-[0_4px_15px_0_#412F84]"
    >
      <div className="p-2 flex items-center">
        <div className="flex gap-1">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
        </div>
      </div>
      <div className={`${!isDisplay ? "h-[400px]" : "h-[250px]"} block w-full overflow-hidden`}>
        <Image
          height={2000} 
          width={2000} 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full block object-cover object-top transition-transform duration-300 hover:scale-105" 
        />
      </div>
      {(title || description) && (
        <div className="p-4 text-start flex justify-between items-center">
          <div>
            {title && <h3 className="m-0 text-xl"><span className="font-neue font-bold tracking-normal">{title}</span></h3>}
            {description && <p className="text-gray-400 text-base">{description}</p>}
          </div>
          <FaArrowRight className="transform -rotate-45 transition-transform duration-300 group-hover:rotate-0"/>
        </div>
      )}
    </Wrapper>
  );
};

ProjectContainer.propTypes = {
  href: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  isDisplay: PropTypes.bool
};

export default ProjectContainer;
