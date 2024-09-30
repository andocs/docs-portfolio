import React from 'react';
import PropTypes from 'prop-types';

const ProjectContainer = ({ href, imageSrc, title, description }) => {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden shadow-md">
      <div className="p-2 flex items-center">
        <div className="flex gap-1">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
        </div>
      </div>
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="block"
      >
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-auto block transition-transform duration-300 hover:scale-105" 
        />
      </a>
      {(title || description) && (
        <div className="p-4 text-center">
          {title && <h3 className="m-0 text-lg font-bold">{title}</h3>}
          {description && <p className="mt-2 text-gray-600 text-base">{description}</p>}
        </div>
      )}
    </div>
  );
};

ProjectContainer.propTypes = {
  href: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default ProjectContainer;
