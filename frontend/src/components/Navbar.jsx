import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleLinkClick = () => setIsOpen(false);

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-primary font-bold border-b-2 border-primary"
      : "text-gray-300 hover:text-white transition-all duration-300";
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f172a]/95 backdrop-blur-md border-b border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        {/* LOGO */}
        <Link
          to="/"
          className="text-xl font-bold tracking-tight flex items-center gap-1 group"
          onClick={handleLinkClick}
        >
          <span className="text-primary text-2xl group-hover:scale-110 transition-transform">
            &lt;
          </span>
          <span className="text-white">Partha</span>
          <span className="text-primary text-2xl group-hover:scale-110 transition-transform">
            /&gt;
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className={getLinkClass("/")}>
            Home
          </Link>
          <Link to="/projects" className={getLinkClass("/projects")}>
            Projects
          </Link>

          <Link
            to="/resume"
            className="px-5 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-bold rounded-full hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300 transform hover:scale-105"
          >
            Resume
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {isOpen && (
        <div className="md:hidden bg-[#0f172a] border-t border-gray-800 absolute top-16 left-0 w-full flex flex-col items-center py-8 space-y-8 animate-in fade-in slide-in-from-top-4">
          <Link
            to="/"
            className={`text-xl ${getLinkClass("/")}`}
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            to="/projects"
            className={`text-xl ${getLinkClass("/projects")}`}
            onClick={handleLinkClick}
          >
            Projects
          </Link>

          {/* MOBILE LINK FIX */}
          <Link
            to="/resume"
            onClick={handleLinkClick}
            className="px-10 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-lg shadow-lg active:scale-95 transition-all"
          >
            View Resume
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
