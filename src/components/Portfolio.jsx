import React from "react";
import prj1 from "../assets/projects/prj1.png";
import prj2 from "../assets/projects/prj2.png";
import prj3 from "../assets/projects/prj3.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: prj1,
    },
    {
      id: 2,
      src: prj2,
    },
    {
      id: 3,
      src: prj3,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-[#000000] via-[#030003] to-[#110510] w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Protfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center h-5"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
