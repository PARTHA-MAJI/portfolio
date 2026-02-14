import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const [projects] = useState([
    {
      _id: "1",
      title: "Stock Trading Platform",
      description:
        "A comprehensive trading dashboard featuring real-time stock data.",
      techStack: ["React", "Node.js", "MongoDB", "Passport.js"],
      githubLink: "https://github.com/PARTHA-MAJI",
      liveLink: "",
      isComingSoon: true,
    },
    {
      _id: "2",
      title: "Wanderlust Market",
      description:
        "A full-stack vacation rental marketplace with geolocation mapping.",
      techStack: ["Express", "EJS", "MapTiler", "Cloudinary"],
      githubLink: "https://github.com/PARTHA-MAJI",
      liveLink: "https://wanderlust-project-0vuh.onrender.com/listings",
      isComingSoon: false,
    },
    {
      _id: "3",
      title: "AI Object Detector",
      description: "Real-time computer vision app using YOLO-World.",
      techStack: ["Python", "YOLOv8", "OpenCV", "Streamlit"],
      githubLink: "https://github.com/PARTHA-MAJI",
      liveLink: "",
      isComingSoon: true,
    },
  ]);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white py-24 px-6 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        Featured <span className="gradient-text">Projects</span>
      </h1>

      {/* GRID LAYOUT: 1 Col (Mobile) -> 2 Cols (Tablet) -> 3 Cols (Desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project._id}
            className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-primary transition duration-300 flex flex-col"
          >
            <div className="mb-4">
              <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-6 mt-auto">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium px-2.5 py-1 bg-gray-800 text-blue-200 rounded border border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3 pt-4 border-t border-gray-800">
              <a
                href={project.githubLink}
                target="_blank"
                className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition text-sm font-semibold"
              >
                <FaGithub /> Code
              </a>

              {project.isComingSoon ? (
                <button
                  disabled
                  className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-gray-800/50 text-gray-500 text-sm font-semibold cursor-not-allowed border border-gray-700"
                >
                  Coming Soon
                </button>
              ) : (
                <a
                  href={project.liveLink}
                  target="_blank"
                  className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-primary hover:bg-purple-700 transition text-sm font-semibold shadow-lg"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
