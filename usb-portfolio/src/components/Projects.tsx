
import { projects } from "../data/data.ts";

const Projects = () => {
  

  return (
    <div id="projects" className="w-full  py-16">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full">
        <div className="pb-8 text-center text-white">
          <p data-aos='zoom-in' className="text-4xl font-bold inline border-b-4 border-pink-600  ">
            Projects
          </p>
          <p data-aos='zoom-in' className="py-6"> Check out some of my recent work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {projects.map((item, index) => (
            <div  data-aos='fade-up'
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#040c16] rounded-md  bg-cover  bg-center  bg-no-repeat relative  transition-transform duration-300 "
            >
              <div className="py-1 opacity-0 hover:opacity-100 duration-300 hover:bg-blue-600 w-full h-full rounded-lg">
                <p className="pb-4 text-center text-2xl font bold text-white tracking-wider ">
                  {item.name}
                </p>
                <div className="pt-4 text-center ">
                  <a href={item.github} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Code
                    </button>
                  </a>

                  <a href={item.live} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
