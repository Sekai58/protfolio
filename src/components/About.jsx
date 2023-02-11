import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b to-[#000000] via-[#030003] from-[#110510] text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I am an enthusiastic learner currently building experience in UI/UX
          design and Frontend development using React JS. If you are in search
          of a UI/UX designer intern or an enthusiastic ReactJS Developer
          intern, you have come to the right place. Let's get in touch.
        </p>

        <br />

        <p className="text-xl">
          I am a Final year Engineering researcher interested in web development
          and currently seeking to establish a career as the next frontend
          developer. I am a motivated self-starter who is able to work
          independently as well as part of a team and eager to utilize my skills
          in a reputed organization.
        </p>
      </div>
    </div>
  );
};

export default About;
