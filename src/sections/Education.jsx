import { motion } from "motion/react";
import { GraduationCap, Trophy } from "lucide-react";

const education = [
  {
    type: "education",
    year: "2023 — Present",
    title: "Information Systems",
    organization: "Universitas Terbuka",
    description: "Currently pursuing a degree in Information Systems with an interest in backend development, data, and web applications.",
  },
  {
    type: "education",
    year: "April 2025",
    title: "Intro to Software Engineering",
    organization: "RevoU",
    description: "Completed RevoU’s Intro to Software Engineering program, developing foundational skills in Full Stack Development, GitHub-based version control, and UI/UX design principles.",
  },
];

const achievements = [
  {
    year: "July 2024",
    title: "1st Place — Kyupak Putri Dewasa",
    organization: "Indonesia Taekwondo Fun",
    description: "Achieved first place in the Women’s Adult Kyupak category at the district-level competition.",
  },
];

const TimelineItem = ({ item, index, isLast }) => {
  const isAchievement = item.type === "achievement";

  return (
    <div className="relative flex gap-5 md:gap-8">
      {/* Timeline */}
      <div className="relative flex w-8 shrink-0 flex-col items-center md:w-10">
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-[#8b6f47]/30 bg-[#f8f7f4] text-[#8b6f47] transition-all duration-300 group-hover:border-[#8b6f47] group-hover:bg-white md:h-10 md:w-10"
        >
          {isAchievement ? <Trophy className="h-4 w-4 md:h-5 md:w-5" strokeWidth={1.7} /> : <GraduationCap className="h-4 w-4 md:h-5 md:w-5" strokeWidth={1.7} />}
        </motion.div>

        {!isLast && <div className="absolute top-10 bottom-0 w-px bg-zinc-200" />}
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.6,
          delay: index * 0.1,
        }}
        whileHover={{ y: -4 }}
        className="group mb-8 w-full rounded-2xl border border-transparent bg-transparent p-5 transition-all duration-300 hover:border-zinc-200 hover:bg-white hover:shadow-sm md:mb-10 md:p-7"
      >
        <div className="grid gap-6 md:grid-cols-[180px_1fr] md:gap-10">
          {/* Date */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#8b6f47]">{isAchievement ? "Achievement" : "Education"}</p>

            <p className="mt-2 text-sm tabular-nums text-zinc-400">{item.year}</p>
          </div>

          {/* Details */}
          <div>
            <h3 className="text-2xl font-extrabold leading-tight tracking-tight text-zinc-900 transition-colors duration-300 md:text-3xl">{item.title}</h3>

            <p className="mt-2 text-sm font-medium text-zinc-500">{item.organization}</p>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-600 transition-colors duration-300 group-hover:text-zinc-800 md:text-base">{item.description}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Education = () => {
  const timeline = [
    ...education,
    ...achievements.map((item) => ({
      ...item,
      type: "achievement",
    })),
  ];

  return (
    <section id="education" className="w-full bg-[#f8f7f4] px-6 py-24 text-zinc-900 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="border-b border-zinc-200 pb-8">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#8b6f47]">Education & Achievements</p>

          <h2 className="text-5xl font-extrabold leading-[0.9] tracking-tight md:text-6xl">
            LEARNING
            <br />& GROWTH.
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="mt-10 md:mt-14">
          {timeline.map((item, index) => (
            <TimelineItem key={`${item.title}-${index}`} item={item} index={index} isLast={index === timeline.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
