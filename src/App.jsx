import profile from './assets/profile.png'
export default function Portfolio() {
  const projects = [
  {
    title: "Modern Calculator",
    desc: "A stylish calculator built with React and Tailwind CSS.",
    link: "https://github.com/realvsno-bit/calculator",
  },
  {
    title: "Weather App",
    desc: "A responsive weather application using APIs and JavaScript.",
    link: "https://github.com/realvsno-bit/weather-app",
  },
  {
    title: "Task Manager",
    desc: "A clean productivity app with task tracking and local storage.",
    link: "https://github.com/realvsno-bit/task-manager",
  },
]

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Node.js",
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-white/10 sticky top-0 backdrop-blur-md bg-black/60 z-50">
        <h1 className="text-2xl font-bold tracking-wide">REALVSNO</h1>

        <div className="flex gap-6 text-sm text-gray-300">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center px-6 py-32">
        <img
          src={profile}
          alt="profile"
          className="w-32 h-32 rounded-full object-cover border border-white/20 shadow-2xl mb-8"
        />

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Vishnu Nautiyal
        </h1>

        <p className="text-gray-400 mt-6 max-w-2xl text-lg">
          Frontend Developer & Full Stack Learner building modern,
          responsive, and user-friendly web experiences.
        </p>

        <div className="flex gap-4 mt-10 flex-wrap justify-center">
         <a
          href="#projects"
          className="px-6 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition duration-300 shadow-xl"
        >
          View Projects
        </a>

          <button className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/10 transition duration-300">
            Contact Me
          </button>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 md:px-20 py-20">
        <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>

          <p className="text-gray-300 leading-8 text-lg">
            Im a passionate Full Stack Web Development learner 💻🚀 who enjoys building modern, responsive, and interactive websites.
            Im constantly improving my skills in frontend and backend technologies, learning how to create complete web applications from design to deployment. 
            I enjoy exploring new tools, solving coding problems, and turning ideas into real projects. 
            My goal is to grow into a skilled developer capable of building fast, scalable, and user-friendly web experiences.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-6 md:px-20 py-20">
        <h2 className="text-4xl font-bold text-center mb-14">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:scale-105 hover:bg-white/10 transition duration-300 shadow-lg"
            >
              <p className="text-lg font-semibold">{skill}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 md:px-20 py-20">
        <h2 className="text-4xl font-bold text-center mb-14">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:-translate-y-2 hover:bg-white/10 transition duration-300 shadow-2xl"
            >
              <div className="h-40 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 mb-6" />

              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

              <p className="text-gray-400 leading-7">{project.desc}</p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 px-5 py-2 rounded-xl bg-white text-black font-medium hover:scale-105 transition duration-300"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 md:px-20 py-20 pb-32">
        <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-10 text-center shadow-2xl">
          <h2 className="text-4xl font-bold mb-6">Contact Me</h2>

          <p className="text-gray-400 mb-10 text-lg">
            Let’s connect and build something amazing together.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6 text-lg">
            <a
              href="mailto:realvsno@example.com"
              className="px-6 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition duration-300"
            >
              Email Me
            </a>

            <a
              href="https://github.com"
              target="_blank"
              className="px-6 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
