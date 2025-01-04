import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-5/6 justify-between p-40">
      <div className="flex text-5xl max-w-5xl mx-auto font-black font-envyBold text-center ">
        <h1>
          Unlock The Power Of Your Social Media <br /> Posts
        </h1>
      </div>
      <div className="text-xl max-w-5xl mx-auto font-thin font-envyPropo text-center pt-6">
        <h2>
          Analyze engagement across platforms. Make data-driven decisions to{" "}
          <br />
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
