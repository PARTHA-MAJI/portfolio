const Resume = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white py-24 px-6 md:px-12 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          My <span className="gradient-text">Resume</span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
          A detailed timeline of my education and technical expertise.
        </p>

        {/* Download Button */}
        <a
          href="/resume.pdf"
          download="Partha_Maji_Resume.pdf"
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition shadow-lg text-sm md:text-base"
        >
          Download PDF Version
        </a>
      </div>

      {/* GRID: 1 Col (Mobile) -> 2 Cols (Desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        {/* Education Column */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-800 pb-2">
            Education
          </h2>

          <div className="mb-8 pl-4 border-l-2 border-primary space-y-2">
            <h3 className="text-lg md:text-xl font-bold text-white">
              Bachelor of Computer Science
            </h3>
            <p className="text-primary font-semibold text-sm">
              Brainware University
            </p>
            <p className="text-xs text-gray-500">2022 - 2026</p>
            <p className="text-gray-400 text-sm">
              CGPA: 7.7 | Algorithms & Web Engineering
            </p>
          </div>

          <div className="mb-8 pl-4 border-l-2 border-primary space-y-2">
            <h3 className="text-lg md:text-xl font-bold text-white">
              Class XII (Science)
            </h3>
            <p className="text-primary font-semibold text-sm">
              Dakshin Anukha Mokshada Vidyabhaban
            </p>
            <p className="text-xs text-gray-500">2022</p>
            <p className="text-gray-400 text-sm">Percentage: 90%</p>
          </div>

          <div className="mb-8 pl-4 border-l-2 border-primary space-y-2">
            <h3 className="text-lg md:text-xl font-bold text-white">Class X</h3>
            <p className="text-primary font-semibold text-sm">
              Dakshin Anukha Mokshada Vidyabhaban
            </p>
            <p className="text-xs text-gray-500">2020</p>
            <p className="text-gray-400 text-sm">Percentage: 54%</p>
          </div>
        </div>

        {/* Skills Column */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-800 pb-2">
            Technical Skills
          </h2>

          <div className="space-y-6">
            <div>
              <p className="text-gray-300 font-semibold mb-2 text-sm uppercase tracking-wider">
                Languages
              </p>
              <div className="flex flex-wrap gap-2">
                {["JavaScript (ES6+)", "C++", "Python", "SQL"].map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 bg-gray-800 rounded text-xs md:text-sm text-gray-300 border border-gray-700"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-gray-300 font-semibold mb-2 text-sm uppercase tracking-wider">
                Frontend
              </p>
              <div className="flex flex-wrap gap-2">
                {["React.js", "Tailwind CSS", "Bootstrap", "Redux"].map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 bg-gray-800 rounded text-xs md:text-sm text-gray-300 border border-gray-700"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-gray-300 font-semibold mb-2 text-sm uppercase tracking-wider">
                Backend
              </p>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Express", "MongoDB", "Joi", "REST APIs"].map(
                  (s) => (
                    <span
                      key={s}
                      className="px-3 py-1 bg-gray-800 rounded text-xs md:text-sm text-gray-300 border border-gray-700"
                    >
                      {s}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div>
              <p className="text-gray-300 font-semibold mb-2 text-sm uppercase tracking-wider">
                AI & Tools
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "OpenCV",
                  "YOLO",
                  "Streamlit",
                  "Cloudinary",
                  "Git",
                  "AWS",
                ].map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 bg-gray-800 rounded text-xs md:text-sm text-gray-300 border border-gray-700"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
