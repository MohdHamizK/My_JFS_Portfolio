import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center mb-10`}>
          My Skills.
        </h2>
      </motion.div>

      <div className='relative flex overflow-x-hidden group'>
        <div className='flex animate-marquee group-hover:pause whitespace-nowrap'>
          {technologies.map((technology, index) => (
            <div
              className='flex-shrink-0 w-28 h-28 mx-4'
              key={`tech-a-${index}`}
            >
              <img
                src={technology.icon}
                alt={technology.name}
                className='w-full h-full object-contain'
              />
            </div>
          ))}
        </div>

        <div
          className='flex animate-marquee group-hover:pause whitespace-nowrap'
          aria-hidden='true'
        >
          {technologies.map((technology, index) => (
            <div
              className='flex-shrink-0 w-28 h-28 mx-4'
              key={`tech-b-${index}`}
            >
              <img
                src={technology.icon}
                alt={technology.name}
                className='w-full h-full object-contain'
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");