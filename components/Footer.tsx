import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data/GridItems";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-5 pb-5 " id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0  h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-60 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-white">
          Ready To Take <span className="text-purple">Your</span> Digital
          Presence To The <span className="text-purple">Next</span> Level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you to
          achieve your goals.
        </p>
        <a href="mailto:mrhimmat9@gmail.com">
          <MagicButton
            title="Let's Get In Touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row gap-4 flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal text-white font-light">
          Copyright © 2024 MrHimmat
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info?.link} // Add the URL from the socialMedia data
              target="_blank" // Opens the link in a new tab
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
