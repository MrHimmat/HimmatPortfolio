"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { TextHoverEffect } from "./ui/text-hover-effect";

const Hero = () => {
  // const [hover, setHover] = React.useState(false);
  // const text = "Portfolio  Of, MrHimmat";

  return (
    <div className="pb-10 " id="home">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw] " fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute  top-0 left-0 flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-[80vw] flex flex-col items-center">
          <h2 className="lg:text-7xl text-3xl">
            <TextHoverEffect text="Himmat" duration={3} />
          </h2>

          <TextGenerateEffect
            className=" text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Mastering the Art of Continuous Learning"
          />
          <p className="text-center text-white md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hello Jee, I&apos;m MrHimmat, A Fullstack Developer
          </p>

          <a href="#projects" className="mt-4">
            <MagicButton
              title="Show My Work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
