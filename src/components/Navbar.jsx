import LightDarkToggle from "./Light_Dark";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="shadow-lg transition-all duration-200">
      <div className=" flex max-w-7xl mx-auto px-3 py-4 justify-between">
        <Link to="/" className="flex items-center gap-1 cursor-pointer ">
          <h2 className="text-2xl text-[#2C2C2C] hover:text-[#174b9e] font-envyBold font-black">
            <b>A</b>nalytics Module
          </h2>
        </Link>

        <div className="flex items-center gap-1 cursor-pointer">
          <LightDarkToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
