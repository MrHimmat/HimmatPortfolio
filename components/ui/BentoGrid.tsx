"use client";
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GlobeDemo";
// import { span } from "framer-motion/client";
// import { loop } from "three/webgpu";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[9rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("himmatmutekar999@gmail.com");
    setCopied(true);
  };
  return (
    <div
      className={cn(
        "row-span-1  relative rounded-3xl overflow-hidden group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none  dark:bg-black dark:border-white/[0.3] bg-white border  justify-between flex flex-col ",
        className
      )}
      style={{
        background: "rgb(2,0,36)",
        backgroundColor:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(47,64,68,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center "}h-full`}>
        <div className="absolute w-full h-full">
          {img && (
            <img
              src={img}
              alt="Displayed Image"
              className={cn(imgClassName, "object-center object-cover ")}
              // style={{ marginRight: "4px", paddingRight: "10px" }}
            />
          )}
        </div>

        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5
          } && 'w-full opacity-80' `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={"object-cover,object-center ,w-full,h-full"}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            {" "}
            <div className="absolute  flex items-center justify-center z-50  text-white font-bold"></div>{" "}
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative px-5 md:h-full flex flex-col min-h-40 p-5 lg:p-10"
          )}
        >
          <div className="font-sans text-blue-500 font-normal lg:text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10 dark:text-neutral-300">
            {description}
          </div>
          <div className="font-sans   font-bold     text-neutral-600 dark:text-neutral-200 lg:text-3xl max-w-96 z-50">
            {title}
          </div>

          {id === 2 && <GlobeDemo />}

          {id === 3 && (
            <div className="flex gap-1 mt-14 lg:gap-9 w-fit absolute -right-3 lg:right-2">
              <div className="flex flex-col gap-3 lg:mt-16 lg:gap-6">
                {[
                  "React.js",
                  "Javascript",
                  "Node.js",
                  "Express.js",
                  "Next.js",
                ].map((item) => (
                  <span
                    key={item}
                    className="py-1 lg:py-1 lg:px-3 px-3 text-xs lg:text-base opacity-50 text-white-100 font-serif font-bold olg:opacity-100 rounded-lg text-center bg-[#000102]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className=" relative ">
              <div className={`absolute  -bottom-5 right-0`}>
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              </div>
              <div className="mt-3 mb-5">
                <MagicButton
                  title={copied ? "Email Copied" : "Copy My Email"}
                  icon={<IoCopyOutline />}
                  position="left"
                  handleClick={handleCopy}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
