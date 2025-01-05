import React, { useState, useEffect, useRef } from "react";

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const searchRef = useRef(null);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    highlightText(value);
  };

  const toggleSearch = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      setTimeout(() => {
        document.querySelector('input[type="text"]').focus();
      }, 100);
    }
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
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      // Keep your existing cleanup code for highlights
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
      <div className="inline-flex items-center" ref={searchRef}>
        <div className={`flex items-center transition-all duration-300 ${isExpanded ? 'w-[300px]' : 'w-8'}`}>
          <input
            type="text"
            className={`w-full py-2 px-4 pr-8 border-2 border-[#12344d] hover:border-[#dd8827] rounded-full text-base transition-all duration-300 focus:outline-none focus:border-blue-500 ${
              isExpanded ? 'opacity-100 visible' : 'opacity-0 invisible w-0 p-0'
            }`}
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <button 
            onClick={toggleSearch}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            🔍
          </button>
        </div>
      </div>
    );
  };
export default SearchBox;