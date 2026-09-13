import React, { useState } from "react";
import { FiFacebook, FiGithub } from "react-icons/fi";
import { IoLogoJavascript, IoIosMenu, IoIosClose } from "react-icons/io";
import { FaSass, FaLess, FaReact, FaHtml5, FaInstagram, FaShopify, FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiNextdotjs, SiVisualstudiocode } from "react-icons/si";
import { TbDeviceDesktop } from "react-icons/tb";
import { CiDark, CiLight } from "react-icons/ci";
import { TbShoppingBagCheck } from "react-icons/tb";
import { HiOutlineCode } from "react-icons/hi";

export default function PortfolioLayout() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const name = "Francisco Jiménez";
  const role = "Web Developer";
  const bio = "Building digital experiences for the web.";

  const projects = [
    { id: 1, title: "React", icon: <FaReact /> },
    { id: 2, title: "Tailwind CSS", icon: <RiTailwindCssFill /> },
    { id: 3, title: "JavaScript", icon: <IoLogoJavascript /> },
    { id: 4, title: "TypeScript", icon: <SiTypescript /> },
    { id: 5, title: "SASS", icon: <FaSass /> },
    { id: 6, title: "Next.js", icon: <SiNextdotjs /> },
    { id: 7, title: "Responsive", icon: <TbDeviceDesktop /> },
    { id: 8, title: "LESS", icon: <FaLess /> },
    { id: 9, title: "HTML5", icon: <FaHtml5 /> },
    { id: 10, title: "Shopify", icon: <FaShopify /> },
    { id: 11, title: "Liquid Engine", icon: <HiOutlineCode /> },
    { id: 12, title: "Git", icon: <FaGitAlt /> },
    { id: 13, title: "GitHub", icon: <FiGithub /> },
    { id: 14, title: "VS Code", icon: <SiVisualstudiocode /> },
    { id: 15, title: "Online Store 2.0", icon: <TbShoppingBagCheck /> },
  ];

  const edu = [
    {
      id: 1,
      name: "Universidad Simón Bolívar",
      date: "2013 - 2017",
      degree: "Business Organization",
    },
    {
      id: 2,
      name: "Instituto Técnico Jesús Obrero",
      date: "2008 - 2013",
      degree: "Data Processing Technician",
    },
  ];

  const exp = [
    {
      id: 1,
      name: "Greenbulk - Venezuela",
      date: "Nov 2022 - Abr 2025",
      details: "Macros, JavaScript",
    },
  ];

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const themeClass = darkMode
    ? "bg-zinc-100 text-zinc-900"
    : "bg-zinc-900 text-zinc-100";

  const cardThemeClass = darkMode
    ? "bg-zinc-200 text-zinc-900 border border-zinc-300"
    : "bg-zinc-800 text-zinc-100 border border-zinc-700/50";

  return (
    <div className={`min-h-screen transition-colors duration-300 ${themeClass}`}>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-colors duration-300 ${
          darkMode
            ? "bg-zinc-100/80 border-b border-zinc-200"
            : "bg-zinc-900/80 border-b border-zinc-800"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-x-4">
              <a href="#about" className="text-xl font-bold tracking-wider">
                FJ
              </a>
              <button
                onClick={toggleDarkMode}
                aria-label="Toggle theme"
                className={`p-2 rounded-full text-lg transition-colors duration-300 ${
                  darkMode
                    ? "bg-zinc-200 hover:bg-zinc-300 text-zinc-900"
                    : "bg-zinc-800 hover:bg-zinc-700 text-zinc-100"
                }`}
              >
                {darkMode ? <CiDark /> : <CiLight />}
              </button>
            </div>

            {/* Navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-6 text-sm font-medium">
                <li>
                  <a href="#expe" className="hover:text-zinc-400 transition-colors">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#skills" className="hover:text-zinc-400 transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#education" className="hover:text-zinc-400 transition-colors">
                    Education
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-zinc-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                className="p-1 rounded-md text-2xl focus:outline-none"
              >
                {isMenuOpen ? <IoIosClose /> : <IoIosMenu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div
            className={`md:hidden border-b ${
              darkMode
                ? "bg-zinc-100 border-zinc-200"
                : "bg-zinc-900 border-zinc-800"
            }`}
          >
            <ul className="px-4 pt-2 pb-4 space-y-2 font-medium">
              <li>
                <a
                  href="#expe"
                  className="block py-2 px-3 rounded hover:bg-zinc-500/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="block py-2 px-3 rounded hover:bg-zinc-500/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="block py-2 px-3 rounded hover:bg-zinc-500/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2 px-3 rounded hover:bg-zinc-500/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      <main className="pt-16">
        {/* About Section */}
        <section
          id="about"
          className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
            <div className="mb-6">
              <img
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover shadow-lg border-2 border-zinc-500"
                src="/fotocarnet.jpeg"
                alt={name}
              />
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-2">
              {name}
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-zinc-400 font-medium mb-4">
              {role}
            </h2>
            <p className="text-base sm:text-lg md:text-xl max-w-2xl text-zinc-400 mb-8">
              {bio}
            </p>
            <a href="#contact">
              <button
                type="button"
                className="font-bold bg-zinc-300 text-zinc-900 px-6 py-3 rounded-lg hover:bg-zinc-200 transition-colors shadow-md"
              >
                Contact
              </button>
            </a>
          </div>
        </section>

        {/* Experience Section */}
        <section id="expe" className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center sm:text-left">
              Experience
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {exp.map((ex) => (
                <div
                  key={ex.id}
                  className={`${cardThemeClass} p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow`}
                >
                  <h3 className="text-xl font-bold mb-1">{ex.name}</h3>
                  <p className="text-zinc-400 text-sm mb-3">{ex.details}</p>
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    {ex.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center sm:text-left">
              Skills
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className={`${cardThemeClass} p-4 rounded-xl flex flex-col items-center justify-center gap-2 text-center hover:scale-105 transition-transform duration-200`}
                >
                  <div className="text-3xl text-zinc-400">{project.icon}</div>
                  <span className="text-sm font-semibold">{project.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center sm:text-left">
              Education
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {edu.map((ed) => (
                <div
                  key={ed.id}
                  className={`${cardThemeClass} p-6 rounded-xl shadow-sm`}
                >
                  <h3 className="text-xl font-bold mb-1">{ed.name}</h3>
                  <p className="text-zinc-400 mb-3">{ed.degree}</p>
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    {ed.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className={`py-16 ${
            darkMode ? "bg-zinc-200/60" : "bg-zinc-800/60"
          }`}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-base sm:text-lg mb-8 text-zinc-400 max-w-xl mx-auto">
              I'm always open to new opportunities and collaborations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
              <a
                className="w-full"
                href="mailto:franciscojimnz@gmail.com"
              >
                <button className="w-full bg-zinc-300 text-zinc-900 hover:bg-zinc-200 font-medium py-3 px-4 rounded-lg transition-colors text-sm sm:text-base truncate">
                  franciscojimnz@gmail.com
                </button>
              </a>
              <a
                className="w-full"
                href="mailto:franciscojavier641@hotmail.com"
              >
                <button className="w-full bg-zinc-300 text-zinc-900 hover:bg-zinc-200 font-medium py-3 px-4 rounded-lg transition-colors text-sm sm:text-base truncate">
                  franciscojavier641@hotmail.com
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-700/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-zinc-400 text-center sm:text-left">
              &copy; {new Date().getFullYear()} Francisco Jiménez. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://github.com/Franciscosx"
                className="text-zinc-400 hover:text-zinc-100 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FiGithub className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/franciscojimenezsx"
                className="text-zinc-400 hover:text-zinc-100 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/francisco.imnz/"
                className="text-zinc-400 hover:text-zinc-100 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FiFacebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}