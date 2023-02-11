import React from "react";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-b from-[#000000] to-[#110510] p-4 text-white"
    >
      <ul className="flex flex-row mt-5 justify-center ">
        <li className="flex-none ml-2 hover:scale-75">
          <a
            href="mailto:amritachi58@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <HiOutlineMail size={33} />
            </span>
          </a>
        </li>
        <li className="flex-none ml-2 hover:scale-75">
          <a href="https://github.com/Sekai58" target="_blank" rel="noreferrer">
            <span>
              <FaGithub size={30} />
            </span>
          </a>
        </li>
        <li className="flex-none ml-2 hover:scale-75">
          <a
            href="https://www.facebook.com/amrita.bhattarai.50596/"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <FaFacebook size={30} />
            </span>
          </a>
        </li>
      </ul>
      <div className="flex justify-center mt-2">Get in touch!</div>
    </div>
  );
};

export default Contact;
