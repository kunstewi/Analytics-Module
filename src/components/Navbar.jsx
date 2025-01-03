import LightDarkToggle from "./Light_Dark";
import '../styles/theme.css';

const Navbar = () => {
  return (
    <nav className="shadow-lg transition-all duration-200">
      <div className=" flex max-w-7xl mx-auto px-3 py-4 justify-between">
        <div className="flex items-center gap-1 cursor-pointer ">
          <h2 className="text-2xl text-[#2C2C2C] light:text-[#000000] transition-colors duration-200"> <b>A</b>nalytics Module</h2>
        </div>

        <div className="flex items-center gap-1 cursor-pointer">
          <LightDarkToggle/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
