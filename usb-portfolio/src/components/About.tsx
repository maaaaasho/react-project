
const About = () => {
  return (
    <section id="about" className="pt-4 max-w-4xl mx-auto pb-24">
      <div className="text-center text-white py-16">
         <h1 data-aos='zoom-in' className="text-3xl sm:text-4xl  font-bold  mb-16  inline border-b-4 border-pink-600 " >
        About Me
      </h1>
      </div>
     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 ">
        <div className="overflow-hidden mx-auto" data-aos='fade-up'>
          <img
            src='https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29kaW5nfGVufDB8fDB8fHww'
            alt=""
            className="rounded-full w-52 h-52 object-cover object-center"
          />
        </div>
        <div data-aos='fade-up'>
          <p className="text-gray-300 sm:text-lg font-light select-text">
            I am a passionate frontend developer specializing in <span className="text-gray-400 italic">React, Tailwindcss and
            TypeScript.</span>  I enjoy transforming complex ideas into simple,
            interactive web apps with a focus on usability, performance, and
            clean code. Constantly I am fast learning and adapting to new technologies to
            deliver the best user experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
