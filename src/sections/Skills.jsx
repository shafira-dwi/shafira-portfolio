import { useEffect, useState } from "react";
import { FaNodeJs, FaLaravel, FaGitAlt } from "react-icons/fa";
import { SiNestjs, SiPostgresql, SiTypescript } from "react-icons/si";

const skills = [
  {
    name: "Node.js",
    type: "node",
    color: "#339933",
    radius: 110,
    size: 48,
    speed: 0.7,
    phase: 0,
  },
  {
    name: "NestJS",
    type: "nestjs",
    color: "#E0234E",
    radius: 110,
    size: 48,
    speed: 0.7,
    phase: (2 * Math.PI) / 3,
  },
  {
    name: "Laravel",
    type: "laravel",
    color: "#FF2D20",
    radius: 110,
    size: 48,
    speed: 0.7,
    phase: (4 * Math.PI) / 3,
  },
  {
    name: "PostgreSQL",
    type: "postgresql",
    color: "#336791",
    radius: 190,
    size: 50,
    speed: -0.45,
    phase: 0,
  },
  {
    name: "TypeScript",
    type: "typescript",
    color: "#3178C6",
    radius: 190,
    size: 48,
    speed: -0.45,
    phase: (2 * Math.PI) / 3,
  },
  {
    name: "Git",
    type: "git",
    color: "#F05032",
    radius: 190,
    size: 48,
    speed: -0.45,
    phase: (4 * Math.PI) / 3,
  },
];

const SkillIcon = ({ type }) => {
  const icons = {
    node: <FaNodeJs />,
    nestjs: <SiNestjs />,
    laravel: <FaLaravel />,
    postgresql: <SiPostgresql />,
    typescript: <SiTypescript />,
    git: <FaGitAlt />,
  };

  return icons[type] || null;
};

const Skills = () => {
  const [time, setTime] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    if (paused) return;

    let animationFrame;
    let lastTime = performance.now();

    const animate = (currentTime) => {
      const delta = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      setTime((prev) => prev + delta);

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [paused]);

  return (
    <section id="skills" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f8f7f4] px-6 py-24 text-zinc-900 md:px-12">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 md:grid-cols-2">
        {/* Text */}
        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#8b6f47]">Technical Skills</p>

          <h2 className="text-5xl font-extrabold leading-[0.9] tracking-tight md:text-7xl">
            WHAT I
            <br />
            WORK WITH.
            <br />
          </h2>

          <p className="mt-8 max-w-md text-sm leading-7 text-zinc-600 md:text-base">Technologies and tools I use to build backend systems, APIs, and database-driven applications.</p>
        </div>

        {/* Orbit */}
        <div
          className="relative mx-auto flex h-[420px] w-[420px] items-center justify-center md:h-[500px] md:w-[500px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => {
            setPaused(false);
            setHoveredSkill(null);
          }}
        >
          {/* Outer orbit */}
          <div className="absolute h-[380px] w-[380px] rounded-full border border-[#8b6f47]/15" />

          {/* Inner orbit */}
          <div className="absolute h-[220px] w-[220px] rounded-full border border-[#8b6f47]/20" />

          {/* Center */}
          <div className="relative z-20 flex h-24 w-24 items-center justify-center rounded-full border border-[#8b6f47]/30 bg-white shadow-lg">
            <span className="text-2xl font-semibold tracking-tight text-[#8b6f47]">{"</>"}</span>
          </div>

          {/* Skills */}
          {skills.map((skill) => {
            const angle = time * skill.speed + skill.phase;

            const x = Math.cos(angle) * skill.radius;
            const y = Math.sin(angle) * skill.radius;

            const isHovered = hoveredSkill === skill.name;

            return (
              <div
                key={skill.name}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
                  zIndex: isHovered ? 50 : 10,
                }}
              >
                <button
                  type="button"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className={`relative flex items-center justify-center rounded-full bg-white p-3 shadow-md transition-transform duration-300 ${isHovered ? "scale-125" : ""}`}
                  style={{
                    width: skill.size,
                    height: skill.size,
                    border: `1px solid ${skill.color}35`,
                    boxShadow: isHovered ? `0 0 25px ${skill.color}45` : undefined,
                  }}
                  aria-label={skill.name}
                >
                  <div className="flex h-full w-full items-center justify-center text-2xl" style={{ color: skill.color }}>
                    <SkillIcon type={skill.type} />
                  </div>

                  {isHovered && <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-white">{skill.name}</span>}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
