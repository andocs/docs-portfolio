import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa";

const PhoneContainer = ({ href, imageSrc, title, description }) => {
  const Wrapper = href ? 'a' : 'div';

  return (
    <Wrapper
      href={href ? href : undefined} 
      target={href ? "_blank" : undefined} 
      rel={href ? "noopener noreferrer" : undefined} 
      className="group block w-[300px] h-[600px] border border-gray-700 transition-all duration-500 rounded-[35px] overflow-hidden shadow-md bg-stone-900 hover:shadow-[0_4px_15px_0_#412F84] relative"
    >

      {/* iPhone Header */}
      <div className="p-2 flex justify-between items-center"/>

      {/* Image Section */}
      <div className="block w-full overflow-hidden">
        <Image
          height={2000} 
          width={2000} 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full block object-cover object-top transition-transform duration-300 hover:scale-105" 
        />
      </div>

      {/* Title and Description */}
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

PhoneContainer.propTypes = {
  href: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string
};

export default PhoneContainer;
