import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const myCV = "./Majd Al-Khalaf Resume.pdf";
export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full opacity-20",
    titleClassName: "justify-end",
    img: "./Majd Profile.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "./grid.svg",
    spareImg: "./b4.svg",
  },

  {
    id: 5,
    title: "Will not leave until achieve",
    description: "My life motto",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName:
      "justify-center md:justify-start lg:justify-center font-bold italic  ",
    img: "./Arabic-Font.svg",
    spareImg: "./grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Cialdini Arabia Website UI",
    des: "With Dr.Ahmad Misto the First pioneer with Cialdini institute the field of Sales and Enablement",
    img: "./cialdini_institute_website.png",
    iconLists: ["./figma.svg"],
    link: "https://www.figma.com/proto/3MBt5eDQTZsK9jyLgIDpAd/Cialdini-Arabia?node-id=4-3907&t=G4KPgSKb46og9M3S-1",
  },
  {
    id: 2,
    title: "Ejet Alkahraba UI",
    des: "Landing page with figma for a company about electricity block outs.",
    img: "./Ejet alkahraba website.png",
    iconLists: ["./figma.svg", "./framer-svgrepo-com.svg"],
    link: "https://www.figma.com/proto/UqL6ifeowaS4TRIN4Bo2PS/Ejet-alkharaba-website?node-id=3-2299&starting-point-node-id=3%3A2299",
  },
  {
    id: 3,
    title: "Game Hub",
    des: "Took a course with Mosh Hamadani which has resulted this website.",
    img: "./Game-hub.png",
    iconLists: ["./re.svg", "./ts.svg"],
    link: "https://majdkhalaf12.github.io/Game-hub/",
  },
  {
    id: 4,
    title: "My Drive Data",
    des: 'on Drive where you will find mostly Raw Designs without "THE PERFECT PRESENTATION" and doodles.',
    img: "./google-drive.png",
    iconLists: [],
    link: "https://drive.google.com/drive/folders/1LATmvRPdatX3NSjFVlfz5QIxm2zDHdtB?usp=drive_link",
  },
];

export const testimonials = [
  {
    quote:
      "Majd Al Khalaf did an excellent job designing image assets for my game. He was creative, responsive, and fast, delivering high-quality work that exceeded my expectations. I highly recommend him for any design project.",
    name: "Baraa Al-Halabi",
    title: "Game Developer at Gamio",
    img: "./Baraa Halabi.jpg",
  },
];

export const companies = [
  {
    id: 1,
    name: "EjetAlkharaba",
    nameImg: "./Ejet alkahraba-Logo.svg",
  },
  {
    id: 2,
    name: "Almountada",
    nameImg: "./Almountada Logo.svg",
  },
  {
    id: 3,
    name: "Cialdini Arabia",
    nameImg: "./cialdini_institute.png",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Motion Graphic Designer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "./slow-motion.svg",
  },
  {
    id: 2,
    title: "Damascus University",
    desc: "at 2022 started as a Computer Science student.",
    className: "md:col-span-2",
    thumbnail: "./graduation-hat.svg",
  },
  {
    id: 3,
    title: "Graphic Designer",
    desc: "in OTOM8 company started as a graphic designer for more than 8 months.",
    className: "md:col-span-2",
    thumbnail: "./edit-tools.svg",
  },
  {
    id: 4,
    title: "Frontend Developer",
    desc: "Self training with courses as a Front-end Developer.",
    className: "md:col-span-2",
    thumbnail: "./exp1.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "./git.svg",
    href: "https://github.com/MajdKhalaf12",
  },
  {
    id: 2,
    img: "./facebook.svg",
    href: "https://www.facebook.com/majd.alkhalaf12/",
  },
  {
    id: 3,
    img: "./link.svg",
    href: "https://www.linkedin.com/in/majd-al-khalaf",
  },
  {
    id: 4,
    img: "./wha.svg",
    href: "https://wa.link/isy87k",
  },
];
