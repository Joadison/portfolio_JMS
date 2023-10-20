// components/Projects.jsx

import { projectData } from "./data.js";

const Projects = () => {
  return (
    <div className="py-[2rem] px-0 xs:mt-[5rem]">
      <h2 className="text-[2rem] font-[600] mb-4">Projetos</h2>
      <div className="grid grid-cols-3 gap-8 xs:grid-cols-1">
        {projectData &&
          projectData.map((project) => (
            <div
              className="border border-[#e6e6e6] p-[20px] rounded-md hover:bg-[#FFCC1A] hover:text-[#000000]"
              key={project.id}
            >
              <div className="flex justify-between items-start mb-5 ">
                <i className="fa-regular fa-folder-open folder-icon"></i>
                <div className="flex gap-x-5">
                  <a
                    href={project.gitHubLink}
                    className="text-[1.50rem] mr-1 cursor-pointer transition-all duration-500 ease-in-out hover:text-[#000000]"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>
              </div>
              <h3 className="text-[16px] mb-[10px]">{project.title}</h3>
              <p className="text-[10px] mb-[10px]">{project.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
