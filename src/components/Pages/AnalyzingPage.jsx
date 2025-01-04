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
    <div className="min-h-screen flex flex-col items-center p-60">
      {showTitle && (
        <div className="text-center mb-4">
          <h1 className="text-4xl font-envyBold">
            Analyze Your Post Engagement!
          </h1>
        </div>
      )}
      <div
        id="responses-container"
        className="flex-grow max-w-4xl justify-center items-center font-thin font-envyPropo pt-4"
      >
        {/* Display each question and its response */}
        {questions.map((q, index) => (
          <div
            key={index}
            className="w-[800px] p-6 light:bg-gray-100 border-2 border-[#8569ff] rounded-md text-xl mt-4"
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
        <div className={`relative w-full ${submitted ? "mt-10" : "flex-grow"}`}>
          <textarea
            placeholder="Enter your Post URL"
            rows="1"
            value={value}
            onChange={handleChange}
            className="w-[800px] px-8 py-6 text-2xl border-2 border-[#8569ff] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[100px] resize-none leading-tight"
            style={{
              height: `${Math.max(60, value.split("\n").length * 30)}px`, // Dynamic resizing
            }}
          />
          <button
            onClick={handleSubmit}
            className="absolute right-2 bottom top-3/4 transform -translate-y-1/2 px-3 py-0.5 bg-[#5d66579e] hover:bg-[#000000] text-white text-2xl font-semibold rounded-full transition duration-300 ease-in-out hover:scale-105"
          >
            ↑
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnalyzingPage;
