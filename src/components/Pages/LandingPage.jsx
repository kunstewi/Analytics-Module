import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen justify-between sm:justify-center md:justify-center items-center pt-20 sm:pt-40">
      <div className="flex flex-col text-xl sm:text-3xl md:text-4xl lg:text-6xl w-auto mx-auto font-black font-envyBold text-center ">
        <h1>
          Unlock The Power Of Your <br /> Social Media Posts
        </h1>
      </div>
      <div className="text-xs sm:text-base md:text-lg lg:2xl w-auto font-thin font-envyPropo text-center pt-4 px-5">
        <h2>
          Analyze engagement across platforms. <br /> Make data-driven decisions to
          boost your online presence.
        </h2>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center mt-4 sm:mr-10 gap-4 sm:gap-4 px-4 sm:px-0">
        <button 
        onClick={() => navigate("/analyzing")}
        className="w-full sm:w-auto bg-[#2e2d2d] hover:bg-[#020202] text-[#fff] font-bold py-2 sm:py-3 px-4 sm:px-5 rounded-md text-sm sm:text-base transition-all duration-300 transform hover:scale-105">
          Start Analyzing
        </button>
        <button
          onClick={() => navigate("/docs")}
          className="w-full sm:w-auto bg-[#3bab6a] hover:bg-[#19c2b1] text-[#fff] font-bold py-2 sm:py-3 px-4 sm:px-5 rounded text-sm sm:text-base transition-all duration-300 transform hover:scale-105"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
