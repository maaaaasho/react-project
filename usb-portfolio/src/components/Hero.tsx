import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <header
      id="hero"
      className=" container mx-auto px-6 flex justify-center items-center text-center select-none h-screen"
    >
      <div className="flex flex-col justify-center items-center  ">
        <div>
          <h2
            data-aos="zoom-in"
            className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight"
          >
            I'm Oumer Sherif
          </h2>
          <h3
            data-aos="fade-up "
            className="text-2xl sm:text-5xl font-extrabold text-white mb-4 leading-tight"
          >
            Frontend React Developer
          </h3>

          <p
            data-aos="fade-up"
            className="text-gray-300 max-w-2xl mx-auto text-xl "
          >
            Making modern, accessible, and performant web applications with
          </p>
        </div>
        <div>
          <ReactTyped
            strings={["React", "Tailwindcss", "TypeScript", "Zustand"]}
            typeSpeed={140}
            backSpeed={150}
            loop
            className="text-gray-400 italic text-xl py-6"
          />
        </div>

        <div className=" flex flex-col sm:flex-row gap-6 mt-10  ">
          <a
            data-aos="fade-up"
            href="#contact"
            className=" bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-300"
          >
            Get in Touch
          </a>
          <a
            href="certeficates.pdf"
            download
            className="border-2 border-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-300"
          >
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
