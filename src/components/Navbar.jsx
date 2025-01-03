import Logo from "../Assests/Images/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="flex max-w-7xl mx-auto px-3 py-4 justify-between">
        <div className="flex items-center gap-1 cursor-pointer">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
          <h2 > <b>A</b>nalytics Module</h2>
        </div>

        <div className="flex items-center gap-1 cursor-pointer">
          
        </div>
      </div>
    </nav>
  )
}

export default Navbar
