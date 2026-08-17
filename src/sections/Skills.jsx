import { useEffect, useState } from "react";

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
    node: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1.5 21.1 6.75v10.5L12 22.5l-9.1-5.25V6.75L12 1.5Zm0 2.1L5.1 7.58v8.84L12 20.4l6.9-3.98V7.58L12 3.6Z" />
      </svg>
    ),

    nestjs: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a5.4 5.4 0 0 0-5.4 5.4v1.1h2.1V7.4a3.3 3.3 0 0 1 6.6 0v1.1h2.1V7.4A5.4 5.4 0 0 0 12 2Z" />
        <path d="M7.3 10.1h9.4v5.2c0 3-2.1 5.1-4.7 5.1s-4.7-2.1-4.7-5.1v-5.2Z" />
      </svg>
    ),

    laravel: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.2 3.1a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2Zm9.6 0a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2ZM4.1 9.2h4.7v2.1H6.2v5.4h4.4v2.1H4.1V9.2Zm8.2 0H17v2.1h-2.8v1.7h2.5v2.1h-2.5v1.6H17v2.1h-4.7V9.2Z" />
      </svg>
    ),

    postgresql: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2c-4.4 0-7.5 2.5-7.5 6.1 0 2.1 1 3.8 2.7 4.9-.2 1.8.1 4.1 1.5 5.7 1.1 1.3 2.7 1.9 4.5 1.5l1.2-2.1c.8.4 1.7.6 2.5.4 1.7-.4 2.7-1.9 2.7-3.5 0-.6-.1-1.2-.4-1.8 1.4-1.1 2.3-2.8 2.3-5.1C21.5 4.5 16.9 2 12 2Zm0 2c3.8 0 7.5 1.8 7.5 4.1 0 2.4-1.3 3.7-3.1 4.4l-.7.3.4.7c.4.7.5 1.4.3 2-.2.7-.7 1.2-1.4 1.4-.7.2-1.5 0-2.2-.5l-.8-.6-1.8 3.1c-.8.1-1.5-.2-2-.8-.9-1-1.1-2.9-.8-4.4l.1-.7-.6-.3c-1.5-.8-2.4-2.1-2.4-3.8C6.5 5.8 8.8 4 12 4Z" />
      </svg>
    ),

    typescript: (
      <svg viewBox="0 0 24 24">
        <rect width="24" height="24" rx="2" fill="#3178C6" />
        <path
          d="M5 11h8v2h-3v7H8v-7H5v-2Zm9 0h5v2h-3c-.7 0-1 .3-1 .8 0 .4.2.6.8.9l1.2.5c1.5.6 2.2 1.5 2.2 2.9 0 1.9-1.3 3-3.5 3-1.5 0-2.6-.5-3.3-1.5l1.5-1.2c.5.6 1 .9 1.8.9.8 0 1.2-.3 1.2-.9 0-.4-.2-.7-.8-.9l-1.2-.5c-1.5-.6-2.1-1.5-2.1-2.9 0-1.8 1.2-3 3.3-3Z"
          fill="white"
        />
      </svg>
    ),

    git: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.8 11.1 12.9 2.2a1.7 1.7 0 0 0-2.4 0L8.6 4.1l2.2 2.2c.5-.2 1.1-.1 1.5.3.4.4.5 1 .3 1.5l2.1 2.1c.5-.2 1.1-.1 1.5.3.6.6.6 1.5 0 2.1-.6.6-1.5.6-2.1 0-.4-.4-.5-1-.3-1.5l-2-2v5.3c.2.1.4.2.5.4.6.6.6 1.6 0 2.2-.6.6-1.6.6-2.2 0-.6-.6-.6-1.6 0-2.2.1-.1.3-.3.5-.4V9c-.2-.1-.4-.2-.5-.4-.6-.6-.6-1.6 0-2.2L8.2 4.5 2.2 10.5a1.7 1.7 0 0 0 0 2.4l8.9 8.9c.7.7 1.7.7 2.4 0l8.3-8.3c.7-.7.7-1.7 0-2.4Z" />
      </svg>
    ),
  };

  return icons[type];
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
            WORK
            <br />
            WITH.
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
                  <div className="h-full w-full" style={{ color: skill.color }}>
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
