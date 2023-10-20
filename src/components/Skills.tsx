// components/Skills.jsx

const Skills = () => {
  return (
    <div className="py-[5rem] p-[0rem]">
      <h2 className="text-[2rem] font-[600] mb-[1rem]">Habilidades</h2>

      <div className="grid grid-cols-4 gap-8 py-[2rem] xs:grid-cols-1">
        <div className="bg-[#DADADB] text-[#1D1E20] p-4 flex justify-center items-center gap-[1rem] rounded-lg shadow-md transition-transform transform cursor-context-menu hover:bg-[#e44d26]">
          <i className="fa-brands fa-html5 html-icon text-[1.5rem]"></i>
          <p className="text-[1.2rem]">HTML</p>
        </div>
        <div className="bg-[#DADADB] text-[#1D1E20] p-4 flex justify-center items-center gap-[1rem] rounded-lg shadow-md transition-transform transform cursor-context-menu hover:bg-[#264DE4]">
          <i className="fa-brands fa-css3-alt css-icon text-[1.5rem]"></i>
          <p className="text-[1.2rem]">CSS</p>
        </div>
        <div className="bg-[#DADADB] text-[#1D1E20] p-4 flex justify-center items-center gap-[1rem] rounded-lg shadow-md transition-transform transform cursor-context-menu hover:bg-[#F7DF1E]">
          <i className="fa-brands fa-js-square js-icon text-[1.5rem]"></i>
          <p className="text-[1.2rem]">JavaScript</p>
        </div>
        <div className="bg-[#DADADB] text-[#1D1E20] p-4 flex justify-center items-center gap-[1rem] rounded-lg shadow-md transition-transform transform cursor-context-menu hover:bg-[#61DAFB]">
          <i className="fa-brands fa-react react-icon text-[1.5rem]"></i>
          <p className="text-[1.2rem]">React</p>
        </div>
        <div className="bg-[#DADADB] text-[#1D1E20] p-4 flex justify-center items-center gap-[1rem] rounded-lg shadow-md transition-transform transform cursor-context-menu hover:bg-[#339933]">
          <i className="fa-brands fa-node-js node-icon text-[1.5rem]"></i>
          <p className="text-[1.2rem]">Node</p>
        </div>
        <div className="bg-[#DADADB] text-[#1D1E20] p-4 flex justify-center items-center gap-[1rem] rounded-lg shadow-md transition-transform transform cursor-context-menu hover:bg-[#3776AB]">
          <i className="fa-brands fa-python python-icon text-[1.5rem]"></i>
          <p className="text-[1.2rem]">Python</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
