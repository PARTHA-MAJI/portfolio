import { Link } from "react-router-dom";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white pt-24 pb-10 px-4 md:px-16">
      {/* 1. HERO SECTION */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 mt-8 md:mt-20">
        {/* Left: Text Content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <span className="inline-block px-3 py-1 bg-gray-800 text-blue-400 text-xs md:text-sm rounded-full border border-gray-700">
            Available for Projects
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight">
            Hi, I'm <span className="gradient-text">Partha Pratim Maji</span>
          </h1>

          <p className="text-gray-400 text-base md:text-xl max-w-lg mx-auto md:mx-0 leading-relaxed">
            A <b>Full Stack MERN Developer</b> passionate about building
            scalable web applications and real-time systems.
          </p>

          {/* Buttons: Stack on mobile, Row on desktop */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start w-full">
            <Link
              to="/projects"
              className="w-full sm:w-auto px-8 py-3 bg-primary rounded-lg font-bold hover:bg-purple-700 transition shadow-lg text-center"
            >
              View My Work
            </Link>

            <a
              href="https://github.com/PARTHA-MAJI"
              target="_blank"
              className="w-full sm:w-auto px-8 py-3 border border-gray-700 rounded-lg font-bold hover:bg-gray-800 transition flex items-center justify-center gap-2"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </div>

        {/* Right: Visual (Hidden on very small phones if needed, or scaled down) */}
        <div className="flex-1 flex justify-center relative mt-10 md:mt-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/30 rounded-full blur-[80px]"></div>

          <div className="relative bg-gray-900 border border-gray-800 p-6 rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition duration-500 max-w-[280px] md:max-w-xs">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <code className="text-xs md:text-sm font-mono text-gray-300">
              <span className="text-purple-400">const</span> developer ={" "}
              <span className="text-yellow-400">{"{"}</span>
              <br />
              &nbsp;&nbsp;name: <span className="text-green-400">"Partha"</span>
              ,<br />
              &nbsp;&nbsp;skills: [
              <span className="text-green-400">"MERN"</span>],
              <br />
              &nbsp;&nbsp;hardWorker:{" "}
              <span className="text-blue-400">true</span>
              <br />
              <span className="text-yellow-400">{"}"}</span>;
            </code>
          </div>
        </div>
      </div>

      {/* 2. STATS SECTION (Grid: 2 cols on mobile, 4 on desktop) */}
      <div className="max-w-5xl mx-auto mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 text-center border-y border-gray-800 py-8">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white">3+</h3>
          <p className="text-gray-500 text-xs md:text-sm">Projects Built</p>
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white">10+</h3>
          <p className="text-gray-500 text-xs md:text-sm">Tech Stack Used</p>
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white">100%</h3>
          <p className="text-gray-500 text-xs md:text-sm">Commitment</p>
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white">24/7</h3>
          <p className="text-gray-500 text-xs md:text-sm">Learning Attitude</p>
        </div>
      </div>

      {/* 3. TECH STACK (Icons wrap naturally) */}
      <div className="max-w-5xl mx-auto mt-16 mb-10">
        <p className="text-center text-gray-500 mb-8 uppercase tracking-widest text-xs md:text-sm">
          Powering Apps With
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-3xl md:text-4xl text-gray-400">
          <FaReact className="hover:text-blue-400 transition" />
          <FaNodeJs className="hover:text-green-500 transition" />
          <SiMongodb className="hover:text-green-400 transition" />
          <SiExpress className="hover:text-white transition" />
          <SiTailwindcss className="hover:text-cyan-400 transition" />
          <SiJavascript className="hover:text-yellow-400 transition" />
        </div>
      </div>
    </div>
  );
};

export default Home;
