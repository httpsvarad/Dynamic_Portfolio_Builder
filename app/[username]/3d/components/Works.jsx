import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { c } from "maath/dist/index-43782085.esm";
import "./textclip.css";

const ProjectCard = ({ projectDetails = [] }) => {
  // console.log(projectDetails);
  return (
    // <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-[#100D25] p-5 rounded-2xl sm:w-[360px] w-full"
    >
      {/* <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex gap-2 justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-2/3 h-2/3 object-contain"
              />
            </div>
            <div
              onClick={() => {
                window.open(liveUrl, "_blank");
              }}
              className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={livelink}
                alt="live url"
                className="w-2/3 h-2/3 object-contain"
              />
            </div>
          </div>
        </div> */}

      <div className="mt-5">
        <div className="flex justify-between my-auto items-center">
          <h3 className="text-white font-bold text-[24px]">Name</h3>
          <div className="badge badge-outline text-[#33bc91]">Primary</div>
        </div>
        <p className="mt-2 text-secondary text-[14px] h-[8rem] overflow-y-scroll">
          Description
        </p>
      </div>

      {/* <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div> */}
    </Tilt>
    // </motion.div>
  );
};

const Works = ({ projectDetails = [] }) => {
  // console.log(projectDetails);
  return (
    <>
      {/* <motion.div variants={textVariant()}> */}
      <p className={`${styles.sectionSubText} `}>My Showcase</p>
      <h2
        className={`${styles.sectionHeadText} text-grad-clip animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black`}
      >
        Projects.
      </h2>
      {/* </motion.div> */}

      <div className="w-full flex">
        <p
          variants={fadeIn("", "", 1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The following projects highlight my skills and experience through real-world applications. Each project is concisely described and includes links to code repositories and live demos. These works demonstrate my ability to solve complex problems, adapt to various technologies and efficiently manage projects.
        </p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projectDetails.map((project) => (

          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-[#151030] p-5 rounded-2xl sm:w-[360px] w-full"
          >
            {/* <div className="relative w-full h-[230px]">
  <img
    src={image}
    alt="project_image"
    className="w-full h-full object-cover rounded-2xl"
  />

  <div className="absolute inset-0 flex gap-2 justify-end m-3 card-img_hover">
    <div
      onClick={() => window.open(source_code_link, "_blank")}
      className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
    >
      <img
        src={github}
        alt="source code"
        className="w-2/3 h-2/3 object-contain"
      />
    </div>
    <div
      onClick={() => {
        window.open(liveUrl, "_blank");
      }}
      className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
    >
      <img
        src={livelink}
        alt="live url"
        className="w-2/3 h-2/3 object-contain"
      />
    </div>
  </div>
</div> */}

            <div className="mt-5" key={project?.id}>
              <div className="flex justify-between my-auto items-center">
                <h3 className="text-white font-bold text-[24px]">{project?.name}</h3>
                {project?.label && (
                  <div className="badge badge-outline text-[#33bc91]">{project?.label}</div>
                )}

              </div>
              <p className="mt-3 text-[#DFD9FF] text-[14px] ">
                {project?.desc}
              </p>
              <a target="blank" href={project?.url}><button className="btn btn-sm mt-3 bg-blue-700 hover:bg-blue-900 border-0 text-white">Explore</button></a>

              <p className="mt-3 text-[#ec37b6] italic text-[14px]">
                {project?.tech}
              </p>
            </div>



            {/* <div className="mt-4 flex flex-wrap gap-2">
  {tags.map((tag) => (
    <p
      key={`${name}-${tag.name}`}
      className={`text-[14px] ${tag.color}`}
    >
      #{tag.name}
    </p>
  ))}
</div> */}
          </Tilt>


        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
