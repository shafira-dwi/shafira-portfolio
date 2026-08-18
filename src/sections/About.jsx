import { motion } from "motion/react";
import profileImage from "../assets/profile.jpeg";

const About = () => {
  return (
    <section id="about" className="w-full bg-[#f8f7f4] px-6 py-24 text-zinc-900 md:px-12 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2 md:gap-24">
        {/* Visual */}
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }} className="relative flex justify-center">
          {/* Accent Circle */}
          <div className="absolute h-72 w-72 rounded-full bg-[#8b6f47]/10 md:h-96 md:w-96" />

          {/* Photo Placeholder */}
          <div className="relative z-10 flex h-[380px] w-[280px] items-center justify-center overflow-hidden rounded-[2rem] border border-[#8b6f47]/20 bg-white shadow-sm md:h-[480px] md:w-[360px]">
            <img src={profileImage} alt="Shafira Dwi" className="h-[90%] w-[90%] rounded-[1.7rem] object-contain" />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, delay: 0.15 }}>
          {/* Section Label */}
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-[#8b6f47]">About Me</p>

          {/* Heading */}
          <h2 className="max-w-xl text-5xl font-extrabold leading-[0.95] tracking-tight md:text-6xl lg:text-6xl">
            Shafira Dwi
            <br />
            Nuraulia
          </h2>

          {/* Description */}
          <div className="mt-8 max-w-xl space-y-5 text-sm leading-7 text-zinc-600 md:text-base">
            <p>I'm an Information Systems student with a focus on backend development and web applications.</p>

            <p>I enjoy working with APIs, databases, authentication, and application logic to build systems that are structured, reliable, and easy to maintain.</p>

            <p>I'm continuously developing my skills through personal and collaborative projects while preparing for a career as a Backend Developer.</p>
          </div>

          {/* Small Info */}
          <div className="mt-10 grid max-w-xl grid-cols-2 gap-8 border-t border-zinc-200 pt-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Focus</p>
              <p className="mt-2 text-sm font-medium text-zinc-900">Backend Development</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Currently</p>
              <p className="mt-2 text-sm font-medium text-zinc-900">Information Systems Student</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
