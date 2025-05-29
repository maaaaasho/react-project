
const Hero = () => {
  return (
    <header id='hero' className=" container mx-auto px-6 py-48 md:py-64 text-center select-none h-screen">
       <h2 data-aos="fade-up" className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
          I'm Oumer Sherif
        </h2>
        <h2 data-aos="fade-up "  className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
          Frontend React Developer
        </h2>
        <p data-aos="fade-up"  className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-xl mb-8">
          Making modern, accessible, and performant web applications with React, Tailwindcss and TypeScript.
        </p>
        <a data-aos="fade-up" 
          href="#contact"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-300"
        >
          Get in Touch
        </a>
      </header>
  )
}

export default Hero