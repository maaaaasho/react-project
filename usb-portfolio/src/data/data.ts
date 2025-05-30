import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import React from "../assets/react.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import TypeScript from "../assets/typescript.png";
import pizza from "../assets/projects/pizza.jpeg";
import WorkIm from "../assets/projects/workImg.jpeg";
import RealEst from "../assets/projects/realestate.jpg";
import travel from "../assets/projects/travel1.jpeg";
import hasim from "../assets/projects/hasim.jpeg";
import shopcart from "../assets/projects/shopcart.avif";
import beach from "../assets/projects/beach.jpeg";
import shoe from "../assets/projects/s.jpeg";
import carr from "../assets/projects/carr.jpeg";
import car from "../assets/projects/car.jpeg";
import type { Project, Skill } from "../types/types";



export const skills: Skill[] = [
  {
    id: 1,
    title: "HTML",
    Image: HTML,
  },
  {
    id: 2,
    title: "CSS",
    Image: CSS,
  },
  {
    id: 3,
    title: "JavaScript",
    Image: JavaScript,
  },
  {
    id: 4,
    title: "React",
    Image: React,
  },
  {
    id: 5,
    title: "TypeScript",
    Image: TypeScript,
  },
  {
    id: 6,
    title: "Node",
    Image: Node,
  },
  {
    id: 7,
    title: "Github",
    Image: GitHub,
  },
  {
    id: 8,
    title: "Tailwindcss",
    Image: Tailwind,
  },
  {
    id: 9,
    title: "Firebase",
    Image: FireBase,
  },
];

export const projects: Project[] = [
  {
    id: 1,
    name: "real-estate",
    image: RealEst,
    github: "https://github.com/oumers535/real-estate.git",
    live: "https://usb-real-estate.netlify.app/",
  },
  {
    id: 1,
    name: "car-shop",
    image: car,
    github: "https://github.com/oumers535/car-shop.git",
    live: "https://usb-car-shop.netlify.app/",
  },
  {
    id: 1,
    name: "ሀሁ ገበያ",
    image: shoe,
    github: "https://github.com/oumers535/pizza-order.git",
    live: "https://hahugebeya.netlify.app/",
  },
  {
    id: 2,
    name: "Hahu Pizza Shop",
    image: pizza,
    github: "https://github.com/oumers535/pizza-order.git",
    live: "https://hahu-pizza.netlify.app/",
  },
  {
    id: 3,
    name: "Masho tech Shop",
    image: shopcart,
    github: "https://github.com/oumers535/shopping-cart.git",
    live: "https://mashoshopcart01.netlify.app/",
  },
  {
    id: 4,
    name: "Alif Travel web",
    image: travel,
    github: "https://github.com/oumers535/alif-tarvel.git",
    live: "https://alif-travel.netlify.app/",
  },

  {
    id: 5,
    name: "financial consult",
    image: WorkIm,
    github: "https://github.com/oumers535/financial--conssult.git",
    live: "https://abe-financial-consult.netlify.app/",
  },
  {
    id: 5,
    name: "Hasim Media",
    image: hasim,
    github: "https://github.com/oumers535/hasim-media.git",
    live: "https://hasim-media.netlify.app/",
  },
  {
    id: 6,
    name: "Car Show",
    image: carr,
    github: "https://github.com/oumers535/driver.git",
    live: "https://usb-driver.netlify.app/",
  },
  {
    id: 7,
    name: "Beaches",
    image: beach,
    github: "https://github.com/oumer809/projects.git",
    live: "https://usb-beache.netlify.app",
  },
];