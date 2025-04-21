import React from "react";

export const About = () => {
  return (
    <div
      name="about"
      className="bg-white dark:bg-gray-900 text-black dark:text-white p-4 transition-colors duration-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-auto">
        <div className="mb-8">
          <p className="text-center text-4xl font-bold inline border-b-4 border-green-600">
            About
          </p>
        </div>
        <div className="max-w-[1000px] w-full grid grid-rows-2 sm:grid-cols-2 gap-0 sm:gap-8 px-4">
          <div className="sm:text-right text-3xl md:text-4xl font-bold">
            <p>
              Hi, <span className="text-green-500">I'm Dhea</span>, nice to
              meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              I'm studying for my bachelor's degree at the <b className="text-green-500">Institute of Technology National Bandung </b>
              majoring in informatics. I have an interest in -
              <b className="text-red-500">
                web development, UI/UX design, and programming.
              </b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
