const AnalyzingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-40">
      <div className="flex text-6xl max-w-5xl mx-auto font-black font-envyBold ">
        <h1>
          Analyze Your Post Engagement
        </h1>
      </div>
      <div className="text-xl max-w-4xl justify-center items-center font-thin font-envyPropo pt-10">
        <input
          type="text"
          placeholder="Enter your Post URL"
          className="w-full px-60 py-4 text-2xl border-2 border-[#8569ff] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div className="mt-6 max-w-4xl">
        <button className="w-full px-60 py-4 bg-[#000000e0] hover:bg-[#000000] text-white text-2xl font-semibold rounded-md transition duration-300 ease-in-out transform hover:scale-105">
          Fetch Engagement Data
        </button>
      </div>
    </div>
  );
};


export default AnalyzingPage;