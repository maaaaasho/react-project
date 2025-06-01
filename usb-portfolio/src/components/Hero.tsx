import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <header
      id="hero"
      className=" container mx-auto px-6 py-48 md:py-64 text-center select-none h-screen"
    >
      <div>
      <h2
        data-aos="zoom-in"
        className="text-5xl font-extrabold text-white mb-4 leading-tight"
      >
        I'm Oumer Sherif
      </h2>
      <h3
        data-aos="fade-up "
        className="text-2xl sm:text-5xl font-extrabold text-white mb-4 leading-tight"
      >
        Frontend React Developer
      </h3>
      <div className="flex">
         <p
        data-aos="fade-up"
        className="text-gray-300 max-w-2xl mx-auto text-xl "
      >
        Making modern, accessible, and performant web applications with {'   '}
      
      <ReactTyped
        strings={[
          "React",
          "Tailwindcss",
          "TypeScript",
          "Zustand",
        ]}
        typeSpeed={140}
        backSpeed={150}      
        loop
        className="text-gray-400 italic text-xl "
      
      />
      </p>
      </div>
     
      </div>
     <div className="mt-6 flex-col sm:flex-row space-y-5 space-x-5 justify-center ">
      <a
        data-aos="fade-up"
        href="#contact"
        className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-300"
      >
        Get in Touch
      </a>
      <a
        href="certeficates.pdf"
        download
        className="inline-block border-2 border-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-300"
      >
        Download CV
      </a></div>
    </header>
  );
};

export default Hero;
