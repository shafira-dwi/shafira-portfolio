import { motion } from "motion/react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-[#f8f7f4] px-6 pb-10 pt-32 text-zinc-900 md:px-12">
      {/* Main Content */}
      <div className="mx-auto grid min-h-[calc(100vh-160px)] max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-3 md:gap-0">
        {/* Left Content */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="text-center md:text-left">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">Backend Developer</p>

          <p className="max-w-sm text-sm leading-7 text-zinc-600 md:text-base">I build web applications and backend systems with a focus on clean architecture, reliable APIs, and database-driven solutions.</p>
        </motion.div>

        {/* Center Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex items-center justify-center"
        >
          <div className="relative flex h-64 w-64 items-center justify-center rounded-full bg-[#8b6f47]/10 md:h-80 md:w-80">
            <div className="flex h-36 w-36 items-center justify-center rounded-full border border-[#8b6f47]/30 bg-white shadow-sm md:h-48 md:w-48">
              <span className="text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">&lt;/&gt;</span>
            </div>
          </div>
        </motion.div>

        {/* Right Heading */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="text-center md:text-left"
        >
          <h1 className="text-6xl font-extrabold leading-[0.85] tracking-tight md:text-7xl lg:text-7xl">
            BUILDING
            <br />
            DIGITAL
            <br />
            SYSTEMS.
          </h1>
        </motion.div>
      </div>

      {/* Bottom Content */}
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <div className="flex items-center gap-4">
          {/* GitHub */}
          <a href="https://github.com/shafira-dwi/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-zinc-500 transition-colors hover:text-zinc-900">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.87 8.36 6.84 9.72.5.1.68-.22.68-.49v-1.72c-2.78.62-3.37-1.38-3.37-1.38-.46-1.2-1.12-1.52-1.12-1.52-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.64-1.38-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.2 9.2 0 0 1 12 7.14c.85 0 1.7.12 2.5.36 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9v2.81c0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/shafira-dwi-nuraulia-92aa95323/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-zinc-500 transition-colors hover:text-zinc-900">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.57V8.99H3.56v11.46Z" />
            </svg>
          </a>
        </div>

        <span className="text-sm text-zinc-500">Information Systems Student</span>
      </div>
    </section>
  );
};

export default Hero;
