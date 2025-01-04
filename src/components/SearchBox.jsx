import React, { useState, useEffect } from "react";

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    highlightText(value);
  };

  const highlightText = (searchText) => {
    // Remove existing highlights
    const body = document.body;
    const existingHighlights = document.querySelectorAll("mark");
    existingHighlights.forEach((highlight) => {
      const parent = highlight.parentNode;
      parent.replaceChild(
        document.createTextNode(highlight.textContent),
        highlight
      );
      parent.normalize();
    });

    if (!searchText.trim()) return;

    // Create a text node of the search term
    const searchRegex = new RegExp(searchText, "gi");
    const walk = document.createTreeWalker(body, NodeFilter.SHOW_TEXT, {
      acceptNode: (node) => {
        // Skip script and style elements
        if (
          node.parentElement.tagName === "SCRIPT" ||
          node.parentElement.tagName === "STYLE" ||
          node.parentElement.tagName === "INPUT"
        ) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      },
    });

    const textNodes = [];
    while (walk.nextNode()) textNodes.push(walk.currentNode);

    textNodes.forEach((node) => {
      const matches = node.textContent.match(searchRegex);
      if (matches) {
        const fragment = document.createDocumentFragment();
        let lastIndex = 0;

        node.textContent.replace(searchRegex, (match, index) => {
          fragment.appendChild(
            document.createTextNode(node.textContent.slice(lastIndex, index))
          );
          const mark = document.createElement("mark");
          mark.style.backgroundColor = "#FFEB3B";
          mark.style.padding = "0 2px";
          mark.style.borderRadius = "2px";
          mark.textContent = match;
          fragment.appendChild(mark);
          lastIndex = index + match.length;
        });

        fragment.appendChild(
          document.createTextNode(node.textContent.slice(lastIndex))
        );
        node.parentNode.replaceChild(fragment, node);
      }
    });
  };

  useEffect(() => {
    return () => {
      // Cleanup highlights when component unmounts
      const existingHighlights = document.querySelectorAll("mark");
      existingHighlights.forEach((highlight) => {
        const parent = highlight.parentNode;
        parent.replaceChild(
          document.createTextNode(highlight.textContent),
          highlight
        );
        parent.normalize();
      });
    };
  }, []);

  return (
    <div className="p-4 w-full max-w-[400px]">
      <div className="relative w-full">
        <input
          type="text"
          className="w-full py-3 px-4 pr-10 border-2  border-[#12344d] hover:border-[#dd8827] rounded-full text-base transition-colors duration-300 focus:outline-none focus:border-blue-500"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
          🔍
        </span>
      </div>
    </div>
  );
};

export default SearchBox;
