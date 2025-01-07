import { useState, useEffect } from "react";

const AnalyzingPage = () => {
  const [value, setValue] = useState("");
  const [questions, setQuestions] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [showTitle, setShowTitle] = useState(true);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    //Simulate response later with langflow
    if (value.trim()) {
      const newQuestion = {
        question: value, // Store user question
        response: "Response will be generated here...", // Placeholder for response
      };

      setQuestions([...questions, newQuestion]); //Add new question to the list
      setValue(""); // Clear the input field
      setSubmitted(true); // Disable form as it has been submitted

      // Hide the title after the first submission
      if (showTitle) {
        setShowTitle(false);
      }
    }
  };

  // Scroll to the bottom of the page whenever a new question is added
  useEffect(() => {
    // Scroll to the bottom of the container when questions change
    const container = document.getElementById("responses-container");
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [questions]); // This will trigger whenever questions are updated

  return (
    <div className="min-h-screen flex flex-col items-center px-10 pt-40 md:pt-48 lg:pt-60">
      {showTitle && (
        <div className="text-center ">
          <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-envyBold">
            Analyze Your Post Engagement!
          </h1>
        </div>
      )}
      <div
        id="responses-container"
        className="flex-grow w-full max-w-4xl justify-center items-center font-thin font-envyPropo pt-4"
      >
        {/* Display each question and its response */}
        {questions.map((q, index) => (
          <div
            key={index}
            className="w-full md:w-[600px] lg:w-[800px] mx-auto p-4 md:p-6 lg:p-6 border-2 border-[#8569ff] rounded-md text-base md:text-lg lg:text-xl mt-4"
          >
            <p>
              <strong>Question:</strong> {q.question}
            </p>
            <p>
              <strong>Response:</strong> {q.response}
            </p>{" "}
            {/* Response placeholder */}
          </div>
        ))}
        <div
          className={`relative w-full ${
            submitted ? "mt-6 md:mt-8 lg:mt-10" : "flex-grow"
          }`}
        >
          <textarea
            placeholder="Enter your Post URL"
            rows="1"
            value={value}
            onChange={handleChange}
            className="text-area w-full mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-5 lg:py-6 text-lg md:text-xl lg:text-2xl border-2 border-[#8569ff] rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[80px] md:min-h-[90px] lg:min-h-[100px] resize-none leading-tight"
            style={{
              height: `${Math.max(60, value.split("\n").length * 30)}px`, // Dynamic resizing
            }}
          />
          <button
            onClick={handleSubmit}
            className="absolute
              right-3 md:right-4
              bottom-4
              px-3 py-0.5
              bg-[#5d66579e] hover:bg-[#000000] 
              text-white text-xl font-semibold 
              rounded-full transition duration-500 ease-in-out hover:scale-105
              md:bottom-[20px]
              md:text-2xl"
          >
            ↑
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnalyzingPage;
