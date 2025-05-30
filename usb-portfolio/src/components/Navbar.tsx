import { useState } from 'react';
import {FaSun,FaMoon,} from 'react-icons/fa';
import { IoCloseSharp, IoMenuSharp } from "react-icons/io5";
import type { NavbarProps } from '../types/types';



const Navbar = ({darkMode, setDarkMode}: NavbarProps) => {
const [menu, setMenu] =useState<boolean>(true);
const toggleMenu = () => {
  setMenu(!menu);
};
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-30 transition-colors duration-500">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center max-w-[1440px]">
          <h1 className="text-2xl font-bold text-purple-700 dark:text-purple-400 cursor-default select-none">
            <a href="#hero">Oumer Sherif</a>
          </h1>
          <ul className='hidden md:flex items-center gap-10 '>
            <li className=' dark:text-white hover:text-purple-600 duration-200 '><a href="#hero">Home</a></li>
            <li className=' dark:text-white hover:text-purple-600 duration-200 '><a href="#about">About</a></li>
            <li className=' dark:text-white hover:text-purple-600 duration-200 '><a href="#contact">Contact</a></li>
            <li className=' dark:text-white hover:text-purple-600 duration-200 '><a href="#projects">Projects</a></li>
            <li className=' dark:text-white hover:text-purple-600 duration-200 '><a href="#skills">Skills</a></li>

          </ul>
          <button
           
            onClick={() => setDarkMode(!darkMode)}
            className="text-gray-600 dark:text-gray-300 focus:outline-none"
             
          >
            {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
          </button>
          <div onClick={()=> {toggleMenu()}} className='md:hidden text-gray-600 dark:text-gray-300 cursor-pointer'>
            {menu? <IoCloseSharp size={24} /> : <IoMenuSharp size={24} />}
          </div>
          
        </div>
        {menu && <ul className='flex-col md:hidden items-center space-y-6 p-6 '>
            <li onClick={()=> setMenu(false)} className=' dark:text-white hover:text-purple-600 duration-200 '><a href="#hero">Home</a></li>
            <li onClick={()=> setMenu(false)} className=' dark:text-white hover:text-purple-600 duration-200 '><a href="#about">About</a></li>
            <li onClick={()=> setMenu(false)} className=' dark:text-white hover:text-purple-600 duration-200 '><a href="#contact">Contact</a></li>
            <li onClick={()=> setMenu(false)} className=' dark:text-white hover:text-purple-600 duration-200 '><a href="#projects">Projects</a></li>
            <li onClick={()=> setMenu(false)} className=' dark:text-white hover:text-purple-600 duration-200 '><a href="#skills">Skills</a></li>

          </ul>}
      </nav>
  )
}

export default Navbar