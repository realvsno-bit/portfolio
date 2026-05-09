import { useEffect, useMemo, useState } from 'react';
import resumeImg from './assets/resume-builder.png';
import calculatorImg from './assets/calculator.png';
import profile from './assets/profile.png';

export default function Portfolio() {
  const projects = [
    {
      title: 'Modern Calculator',
      desc: 'A stylish calculator built with React and Tailwind CSS.(USING AI)',
      link: 'https://github.com/realvsno-bit/calculator',
      image: calculatorImg,
    },
    {
      title: 'Resume Maker',
      desc: 'A modern resume builder with live preview and PDF export.',
      link: 'https://github.com/realvsno-bit/resume-maker',
      image: resumeImg,
    },
  ];

  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Tailwind CSS',
    'Node.js',
  ];

  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [cursorActive, setCursorActive] = useState(false);

  useEffect(() => {
    const onMove = (e) => setCursor({ x: e.clientX, y: e.clientY });
    const onDown = () => setCursorActive(true);
    const onUp = () => setCursorActive(false);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
    };
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const stars = useMemo(
    () =>
      Array.from({ length: 22 }).map((_, i) => ({
        top: `${(i * 7) % 100}%`,
        left: `${(i * 13) % 100}%`,
        size: i % 3 === 0 ? 3 : 2,
        delay: `${i * 0.12}s`,
        opacity: 0.35 + (i % 5) * 0.08,
      })),
    []
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.18),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(99,102,241,0.16),_transparent_22%),linear-gradient(135deg,_#020207_0%,_#090515_45%,_#120a24_100%)] font-sans text-white">
      <style>{`
        html { scroll-behavior: smooth; }
        body { cursor: none; }
      `}</style>

      {/* ambient stars */}
      <div className="pointer-events-none absolute inset-0 opacity-80">
        {stars.map((s, idx) => (
          <span
            key={idx}
            className="absolute rounded-full bg-white shadow-[0_0_16px_rgba(255,255,255,0.85)] animate-pulse"
            style={{
              top: s.top,
              left: s.left,
              width: `${s.size}px`,
              height: `${s.size}px`,
              opacity: s.opacity,
              animationDelay: s.delay,
            }}
          />
        ))}
      </div>

      {/* cursor */}
      <div
        className="pointer-events-none fixed z-[9999] hidden h-3 w-3 rounded-full bg-fuchsia-300 shadow-[0_0_18px_rgba(232,121,249,0.95)] md:block"
        style={{ transform: `translate3d(${cursor.x - 6}px, ${cursor.y - 6}px, 0)` }}
      />
      <div
        className={`pointer-events-none fixed z-[9998] hidden h-12 w-12 rounded-full border border-violet-300/45 backdrop-blur-[2px] transition-transform duration-75 md:block ${
          cursorActive ? 'scale-125 border-fuchsia-300/70' : 'scale-100'
        }`}
        style={{ transform: `translate3d(${cursor.x - 24}px, ${cursor.y - 24}px, 0)` }}
      />

      {/* top glow */}
      <div className="pointer-events-none absolute left-[-8%] top-[-6%] h-[420px] w-[420px] rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-10%] top-[12%] h-[360px] w-[360px] rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-12%] left-[18%] h-[320px] w-[320px] rounded-full bg-violet-500/10 blur-3xl" />

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/35 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-8">
          <h1 className="text-2xl font-extrabold tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 via-violet-300 to-indigo-300">
            REALVSNO
          </h1>

          <div className="hidden gap-6 text-sm text-violet-100/70 md:flex">
            <button className="transition hover:text-white" onClick={() => scrollTo('about')}>About</button>
            <button className="transition hover:text-white" onClick={() => scrollTo('skills')}>Skills</button>
            <button className="transition hover:text-white" onClick={() => scrollTo('projects')}>Projects</button>
            <button className="transition hover:text-white" onClick={() => scrollTo('contact')}>Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-[92vh] flex-col items-center justify-center px-6 py-24 text-center md:px-10">
        <div className="mb-8 rounded-full border border-violet-300/20 bg-white/5 p-2 shadow-[0_0_35px_rgba(168,85,247,0.12)] backdrop-blur">
          <img
            src={profile}
            alt="profile"
            className="h-32 w-32 rounded-full object-cover border border-white/20 shadow-2xl"
          />
        </div>

        <div className="max-w-4xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-violet-100/80">
            <span className="h-2 w-2 rounded-full bg-fuchsia-300 shadow-[0_0_12px_rgba(232,121,249,0.9)]" />
            Available for work
          </p>

          <h2 className="text-5xl font-black leading-tight md:text-7xl lg:text-8xl">
            <span className="block text-white">Vishnu</span>
            <span className="block bg-gradient-to-r from-fuchsia-300 via-violet-300 to-indigo-300 bg-clip-text text-transparent">
              Nautiyal
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-violet-100/65 md:text-lg">
            Frontend Developer & Full Stack Learner building modern, responsive, and user-friendly web experiences.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => scrollTo('projects')}
            className="rounded-2xl bg-gradient-to-r from-fuchsia-500 to-violet-500 px-6 py-3 font-semibold text-white shadow-[0_0_30px_rgba(168,85,247,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_0_45px_rgba(168,85,247,0.45)]"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="rounded-2xl border border-violet-300/30 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10"
          >
            Contact Me
          </button>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-4xl rounded-3xl border border-violet-300/15 bg-white/5 p-8 shadow-2xl backdrop-blur md:p-10">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">About Me</h2>
          <p className="text-lg leading-8 text-violet-100/80">
            Im a passionate Full Stack Web Development learner 💻🚀 who enjoys building modern, responsive, and interactive websites.
            Im constantly improving my skills in frontend and backend technologies, learning how to create complete web applications from design to deployment.
            I enjoy exploring new tools, solving coding problems, and turning ideas into real projects.
            My goal is to grow into a skilled developer capable of building fast, scalable, and user-friendly web experiences.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-6 py-24 md:px-10">
        <h2 className="mb-14 text-center text-4xl font-bold md:text-5xl">Skills</h2>
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 md:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="rounded-2xl border border-violet-300/15 bg-white/5 p-6 text-center shadow-lg backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-violet-300/40 hover:bg-violet-400/10 hover:shadow-[0_0_30px_rgba(168,85,247,0.18)]"
            >
              <p className="text-lg font-semibold text-white">{skill}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 py-24 md:px-10">
        <h2 className="mb-14 text-center text-4xl font-bold md:text-5xl">Projects</h2>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl border border-violet-300/15 bg-white/5 shadow-2xl backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-violet-300/35 hover:bg-white/10"
            >
              <div className="relative h-44 overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.35),_transparent_40%),linear-gradient(135deg,_rgba(15,23,42,0.95),_rgba(88,28,135,0.55))]">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/10 opacity-0 transition duration-300 group-hover:opacity-100" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover opacity-85 transition duration-300 group-hover:scale-105 group-hover:opacity-100"
                />
              </div>

              <div className="p-8">
                <h3 className="mb-4 text-2xl font-bold text-white">{project.title}</h3>
                <p className="leading-7 text-violet-100/70">{project.desc}</p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex rounded-xl border border-violet-300/20 bg-violet-400/15 px-5 py-2.5 font-medium text-white transition hover:scale-105 hover:bg-violet-300/25"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-24 pb-32 md:px-10">
        <div className="mx-auto max-w-4xl rounded-3xl border border-violet-300/15 bg-white/5 p-10 text-center shadow-2xl backdrop-blur">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">Contact Me</h2>
          <p className="mb-10 text-lg text-violet-100/70">
            Let’s connect and build something amazing together.
          </p>

          <div className="flex flex-col justify-center gap-6 text-lg md:flex-row">
            <a
              href="mailto:realvsno@example.com"
              className="rounded-2xl bg-gradient-to-r from-fuchsia-500 to-violet-500 px-6 py-4 font-semibold text-white shadow-[0_0_30px_rgba(168,85,247,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_0_45px_rgba(168,85,247,0.4)]"
            >
              Email Me
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-violet-300/25 bg-white/5 px-6 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
