const Chapter4 = () => {
  return (
    <div className="chapter-content">
      <h1 className="text-4xl pb-5 font-extrabold text-blue-700 border-b-2 border-blue-300">
        Chapter 4: How to use our App ?
      </h1>
      <section className="mb-8">
        <div className="space-y-4 text-lg leading-relaxed text-gray-700 bg-blue-50 p-4 rounded-lg mt-10">
          <h3 className="text-2xl font-semibold text-blue-600 mb-3">
            To Begin using NX-Analytics follow these steps:
          </h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Head onto <code className="bg-gray-100 px-2 py-1 rounded">/analyzing</code> endpoint on our application</li>
            <li>Paste your Social media post URL in the Analyzing page</li>
            <li>
              Click on the button which is on the bottom-right of the Text-Area
            </li>
            <li>Enjoy The results</li>
          </ol>
        </div>
      </section>
    </div>
  );
};

export default Chapter4;
