import { useEffect } from "react";
import About from "./components/About";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import AOS from "aos";
import 'aos/dist/aos.css';

import ContactUs from "./components/ContactUs";

const  App =()=> {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);


  return (
    <div className="min-h-screen bg-gray-900 transition-colors duration-500">
      <Navbar />
      <Hero />
      <main className="container mx-auto px-6">
        <About />
        <Skills />
        <Projects />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}
export default App;