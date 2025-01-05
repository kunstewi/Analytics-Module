import { Link } from "react-router-dom";
import Toggle from "./Toggle";
import { Github } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="shadow-2xl transition-all duration-200">
      <div className=" flex max-w-7xl mx-auto px-3 py-4 justify-between">
        <Link to="/" className="flex items-center gap-1 cursor-pointer ">
          <h2 className="text-2xl hover:text-[#779dda] font-envyBold font-black">
            <b className="text-3xl font-serif">A</b>nalytics <b className="text-3xl font-serif">M</b>odule
          </h2>
        </Link>

        <div className="flex items-center gap-2">
          
          <Link 
            to="https://github.com/Znackt/Analytics-Module" 
            target="_blank"
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center"
          >
            <Github className="w-5 h-5" />
          </Link>

          <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200">
            <Toggle />
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;