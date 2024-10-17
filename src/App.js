import React, { useState } from "react";
import { Menu, X, Github, Facebook, Instagram } from "lucide-react";
import { IoLogoJavascript } from "react-icons/io";
import { FaSass, FaLess, FaReact, FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiNextdotjs } from "react-icons/si";
import { DiResponsive } from "react-icons/di";


export default function PortfolioLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [name, setName] = useState("Francisco Jiménez");
  const [role, setRole] = useState("Software Engineer");
  const [bio, setBio] = useState("I build accessible, inclusive products and digital experiences for the web.");
  const [projects, setProjects] = useState([
    { id: 1, title: "React", icon: <FaReact />, description: "Description of Project 1" },
    { id: 2, title: "Tailwind CSS", icon: <RiTailwindCssFill /> },
    { id: 3, title: "JavaScript", icon: <IoLogoJavascript /> },
    { id: 4, title: "TypeScript", icon: <SiTypescript /> },
    { id: 5, title: "SASS", icon: <FaSass /> },
    { id: 6, title: "Next.js", icon: <SiNextdotjs /> },
    { id: 7, title: "Responsive Design", icon: <DiResponsive /> },
    { id: 8, title: "LESS", icon: <FaLess /> },
    { id: 9, title: "HTML", icon: <FaHtml5 /> },
  ]);
  const edu = [{ id: 1, name: "Universidad Simón Bolívar", date: "2013-2017", var: "Business Organization" },
  { id: 2, name: "Instituto Técnico Jesús Obrero", date: "2008-2013", var: "Data Processing Technician" }
  ]
  const exp = [{ id: 1, name: "Greenbulk - Venezuela", date: "Nov 2022-Abr 2023", var: "Macros, JavaScript" }]

  const handleEdit = (setter) => (event) => {
    setter(event.target.value);
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#" className="text-xl font-bold">
                FJ
              </a>
            </div>
            <nav className="hidden md:block">
              <ul className="flex space-x-4">
              <li>
                  <a href="#expe" className="hover:text-zinc-300">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#skills" className="hover:text-zinc-300">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-zinc-300">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <ul className="px-2 pt-2 pb-3 space-y-1">
            <li>
                <a
                  href="#expe"
                  className="block px-3 py-2 hover:bg-zinc-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block px-3 py-2 hover:bg-zinc-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block px-3 py-2 hover:bg-zinc-800"
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
        <section
          id="about"
          className="min-h-screen flex items-center justify-center"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div class="flex justify-center items-center rounded-full">
              <img class="rounded-full max-h-80" src="/fotocarnet.jpeg" alt="FranciscoJimenezalternate text" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              <input
                type="text"
                value={name}
                className="bg-transparent text-center w-full"
              />
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-zinc-400 mb-6">
              <input
                type="text"
                value={role}
                className="bg-transparent text-center w-full"
              />
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl mb-8">
              <textarea
                value={bio}
                className="bg-transparent text-center w-full resize-none"
                rows={3}
              />
            </p>
            <a href="#contact">
              <button type="button" className="font-bold bg-zinc-200 text-zinc-900 hover:bg-zinc-400 bg-zinc-800 p-3 rounded-lg">
                Contact
              </button>
            </a>
          </div>
        </section>

        <section id="expe" className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {exp.map((ex) => (
                <div key={ex.id} className="bg-zinc-800 p-6 rounded-lg">
                  <input
                    type="text"
                    value={ex.name}
                    className="text-xl font-bold mb-2 bg-transparent w-full"
                  />
                  <textarea
                    value={ex.var}
                    className="text-zinc-300 bg-transparent w-full resize-none"
                    rows={3}
                  />
                  <p>{ex.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="bg-zinc-800 p-2 rounded-lg flex justify-center items-center">
                  <input
                    type="text"
                    value={project.title}
                    className="text-xl font-bold mb-2 bg-transparent"
                  />
                  <div className="self-auto size-3 text-3xl font-bold mb-5">
                    {project.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {edu.map((ed) => (
                <div key={ed.id} className="bg-zinc-800 p-6 rounded-lg">
                  <input
                    type="text"
                    value={ed.name}
                    className="text-xl font-bold mb-2 bg-transparent w-full"
                  />
                  <textarea
                    value={ed.var}
                    className="text-zinc-300 bg-transparent w-full resize-none"
                    rows={3}
                  />
                  <p>
                    {ed.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-zinc-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <p className="text-lg mb-8">
              I'm always open to new opportunities and collaborations.
            </p>
            <div className="flex justify-center items-center gap-8">

              <div className="w-1/3 bg-zinc-200 text-zinc-900 hover:bg-zinc-400 bg-zinc-800 p-3 rounded-lg">franciscojimnz@gmail.com</div>
              <div className="w-1/3 bg-zinc-200 text-zinc-900 hover:bg-zinc-400 bg-zinc-800 p-3 rounded-lg">franciscojavier641@hotmail.com</div>

            </div>
          </div>
        </section>

      </main>

      <footer className="bg-zinc-900 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <p>&copy; 2024 Francisco Jiménez.</p>
            <div className="flex space-x-4">
              <a href="https://github.com/Franciscosx" className="text-zinc-400 hover:text-zinc-100">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/franciscojimenezsx" className="text-zinc-400 hover:text-zinc-100">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.facebook.com/francisco.imnz/" className="text-zinc-400 hover:text-zinc-100">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
