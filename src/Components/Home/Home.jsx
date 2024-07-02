import React from "react";
import Img from "../../assets/Avatar.png";
import CV from "../../assets/Rafi.pdf";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { RiReactjsFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#161513] min-h-[80vh]">
      <div className="flex flex-col items-center justify-center space-y-8 mt-4 lg:mt-20 px-3">
        <img src={Img} />
        <h2 className="text-center text-3xl lg:text-5xl font-bold leading-[120%] text-[#EEEDEB]">
          Hello, I am <span className="text-[#FF8660]">Rafi</span>, <br />
          Junior Frontend Developer
        </h2>
        <p className="text-base lg:text-[1.2rem] font-normal text-center text-[#EEEDEB] max-w-4xl mx-auto">
          I have honed my skills through various projects, gaining hands-on
          experience in HTML, CSS, JavaScript, and modern frameworks like React.
          My enthusiasm for creating intuitive and visually appealing user
          interfaces drives me to continuously learn and adapt to the
          ever-evolving landscape of Web Development.
        </p>

        <div className="flex gap-4">
          <a
            href={CV}
            download
            className="btn rounded-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-black duration-500"
          >
            <MdOutlineFileDownload size={25} />
            Download CV
          </a>
        </div>

        <div className="space-y-8 flex flex-col items-center justify-center">
          <h4 className="text-xl text-[#EEEDEB]">EXPERIENCE WITH</h4>
          <div className="flex items-center gap-8 text-3xl lg:text-4xl text-[#FF8660]">
            <FaHtml5 />
            <FaCss3Alt />
            <RiTailwindCssFill />
            <RiJavascriptFill />
            <RiReactjsFill />
            <IoLogoFirebase />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
