import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-5/6 justify-between pt-20 sm:pt-40">
      <div className="flex flex-col text-2xl sm:text-4xl md:text-6xl lg:text-8xl w-full mx-auto font-black font-envyBold text-center ">
        <h1>
          Unlock The Power Of Your Social Media Posts
        </h1>
      </div>
      <div className="text-base  sm:text-lg md:text-3xl max-w-5xl mx-auto font-thin font-envyPropo text-center pt-6">
        <h2>
          Analyze engagement across platforms. Make data-driven decisions to
          boost your online presence.
        </h2>
      </div>
      <div className="flex items-center justify-center mt-8 mr-10">
        <button className="bg-[#2e2d2d] hover:bg-[#020202] text-[#f4f5f0] font-bold mr-4 py-3 px-5 rounded-md">
          Start Analyzing
        </button>
        <button
          onClick={() => navigate("/docs")}
          className="bg-[#3bab6a] hover:bg-[#19c2b1] text-[#020202] font-bold mr-2 py-3 px-5 rounded"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
