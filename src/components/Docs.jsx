import React from "react";
import { useNavigate, Route, Routes } from "react-router-dom";
import Chapter1 from "../components/Book/chapter-1";
import Chapter2 from "../components/Book/chapter-2";
import Chapter3 from "../components/Book/chapter-3";
import Chapter4 from "../components/Book/chapter-4";

const chapters = [
  { id: 1, name: "Introduction", path: "/docs/chapter-1", component: Chapter1 },
  { id: 2, name: "Setup", path: "/docs/chapter-2", component: Chapter2 },
  {
    id: 3,
    name: "How does Analytics Module works?",
    path: "/docs/chapter-3",
    component: Chapter3,
  },
  {
    id: 4,
    name: "How can you contribute",
    path: "/docs/chapter-4",
    component: Chapter4,
  },
];

const ChapterContent = ({ Component }) => (
  <div className="p-8">
    <div className="prose dark:prose-invert max-w-none">
      <Component />
    </div>
  </div>
);

const Docs = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen">
      <div className="w-64 border-r border-gray-200 dark:[#000000] p-4">
        <h2
          className="text-lg font-bold mb-4 cursor-pointer hover:text-blue-600"
          onClick={() => navigate("/docs")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === "Space") {
              e.preventDefault();
              navigate("/docs");
            }
          }}
        >
          The Analytics Docs
        </h2>
        <nav>
          <ul>
            {chapters.map((chapter) => (
              <li
                key={chapter.id}
                className="cursor-pointer py-2 px-3 dark:hover:bg-[#f2f2] rounded"
                onClick={() => navigate(chapter.path)}
                role="menuitem"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === "Space") {
                    e.preventDefault();
                    navigate(chapter.path);
                  }
                }}
              >
                {chapter.name}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex-1 ">
        <Routes>
          <Route
            path="/"
            element={
              <div className="p-8">
                <h1 className="text-2xl font-bold light:text-white">
                  Welcome to Documentation
                </h1>
                <p>Select a chapter from the left to begin.</p>
              </div>
            }
          />
          {chapters.map((chapter) => (
            <Route
              key={chapter.id}
              path={`chapter-${chapter.id}`}
              element={<ChapterContent Component={chapter.component} />}
            />
          ))}
        </Routes>
      </div>
    </div>
  );
};
export default Docs;
