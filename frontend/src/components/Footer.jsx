const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8 mt-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
        {/* Text */}
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-bold">Partha Maji</span>. All rights
          reserved.
        </p>

        {/* Icons */}
        <div className="flex gap-6">
          <a
            href="https://github.com/PARTHA-MAJI"
            target="_blank"
            className="text-gray-400 hover:text-white transition text-lg"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/maji-partha"
            target="_blank"
            className="text-gray-400 hover:text-blue-400 transition text-lg"
          >
            LinkedIn
          </a>
          <a
            href="mailto:parthapratimmaji81@gmail.com"
            className="text-gray-400 hover:text-red-400 transition text-lg"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
