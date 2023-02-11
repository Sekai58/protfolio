import React from "react";
import ProfileImage from "../assets/profile.png";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-[#000000] via-[#030003] to-[#110510] pt-10"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-xl md:text-3xl lg:5xl font-bold text-white mr-8">
            UI/UX designer & Frontend Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md px-2">
            I am an passionate learner currently available for internship to
            utilize my skiil and grow professionally & personally.
          </p>
        </div>

        <div>
          <img
            src={ProfileImage}
            alt="my profile"
            className="rounded-[120px] mx-auto w-4/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
