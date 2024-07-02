import React from "react";
import { CiMail } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#191919]">
      <div className="max-w-5xl mx-auto space-y-6 py-12 px-3">
        <div className="text-[#EEEDEB] space-y-2">
          <h2 className="text-2xl font-semibold">Contact Me</h2>
          <p className="text-sm text-[#EEEDEB] leading-6">
            I'm always eager to connect with others and share knowledge. Whether
            you have a question, need advice, or want to discuss potential
            collaborations, I'd love to hear from you.
          </p>
        </div>
        <div className="flex items-center gap-2 text-white">
          <CiMail size={20} />
          <p className="underline text-[#FF8660] cursor-pointer">
            rafiwaliullah0@gmail.com
          </p>
        </div>

        <div className="flex items-center gap-4 text-3xl text-[#EEEDEB]">
          <a href="https://www.facebook.com/ami.rafi.507">
            <FaFacebook />
          </a>
          <a href="https://github.com/WaliullahRafi">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
