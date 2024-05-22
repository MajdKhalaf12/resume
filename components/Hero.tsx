"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Spotlight } from "./ui/Spotlight";
import majd from "../public/Majd Profile.jpg";
import { motion } from "framer-motion";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "tween",
          duration: 0.7,
        }}
      >
        <div className="flex justify-center relative my-5 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            {/* { <Image
              src={majd}
              alt="Majd portrait"
              width="192"
              height="192"
              quality="95"
              className="md:h-60 md:w-60 h-40 w-40 rounded-full object-cover border-[0.2rem] border-purple "
            />} */}
            <p className=" md:text-6xl my-5 text-3xl tracking-tight text-center">
              <span>HEY, I am Majd Khalaf</span>
              <br />
              <TypeAnimation
                sequence={[
                  "Front-end Developer",
                  1000,
                  "UI/UX Designer",
                  1000,
                  "Graphic Designer",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
                className="font-bold italic text-purple"
              />
            </p>

            <p className="uppercase md:tracking-wider mb-6 text-sm md:text-lg lg:text-2xl">
              +3 Years of Experience
            </p>
            <a href="#about">
              <MagicButton
                icon={<FaLocationArrow />}
                position="right"
                title="Show my work"
              />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
