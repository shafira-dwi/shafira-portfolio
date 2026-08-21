import { motion } from "motion/react";

const experiences = [
  {
    index: "01",
    company: "CV RPA Panglima",
    tagline: "Retail Operations",
    period: "Jan 2024 — Dec 2024",
    position: "Cashier",
    location: "Kab Bekasi, Indonesia",
    industry: "Retail",
    description: [
      "Operated POS systems to process daily sales transactions accurately and efficiently through both cash and non-cash payments.",
      "Prepared daily and monthly sales reports and performed regular stock opname to ensure consistency between system records and physical inventory.",
      "Worked efficiently and accurately while handling transactions, customer queues, and daily operations in a fast-paced environment.",
    ],
  },
  {
    index: "02",
    company: "PT Giandhi Inti Fantasi",
    tagline: "Customer Service & Operations",
    period: "Dec 2024 — Mar 2025",
    position: "Cashier — Seasonal Staff",
    location: "East Jakarta, Indonesia",
    industry: "Entertainment",
    description: [
      "Processed customer transactions efficiently and provided information about facility rules, particularly during high-traffic periods.",
      "Assisted customers in understanding ticketing systems and promotions while providing friendly and informative service.",
      "Managed cash handling of up to IDR 20 million per shift and prepared accurate financial reports with zero discrepancies.",
    ],
  },
];

function ExperienceItem({ experience }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -4 }}
      className="group relative grid grid-cols-1 gap-8 rounded-2xl border border-transparent px-5 py-12 transition-all duration-300 hover:border-zinc-200 hover:bg-white hover:shadow-sm md:grid-cols-12 md:gap-10 md:px-6 md:py-16"
    >
      {/* Company */}
      <div className="relative z-10 md:col-span-3">
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-xs text-[#8b6f47] transition-transform duration-300 group-hover:translate-x-1">{experience.index}</span>

          <span className="h-px w-8 bg-[#8b6f47]/40" />
        </div>

        <h3 className="text-3xl font-extrabold leading-tight tracking-tight text-zinc-900 transition-transform duration-300 md:text-4xl">{experience.company}</h3>

        <div className="mt-4 space-y-1">
          <p className="text-sm font-medium text-zinc-500">{experience.tagline}</p>

          <p className="text-sm tabular-nums text-zinc-400">{experience.period}</p>
        </div>
      </div>

      {/* Details */}
      <div className="relative z-10 md:col-span-3">
        <div className="grid grid-cols-2 gap-y-4">
          <span className="text-sm text-zinc-400">Position</span>
          <span className="text-sm font-semibold text-zinc-900">{experience.position}</span>

          <span className="text-sm text-zinc-400">Location</span>
          <span className="text-sm font-semibold text-zinc-900">{experience.location}</span>

          <span className="text-sm text-zinc-400">Industry</span>
          <span className="text-sm font-semibold text-zinc-900">{experience.industry}</span>
        </div>
      </div>

      {/* Description */}
      <div className="relative z-10 space-y-4 md:col-span-6">
        {experience.description.map((item, index) => (
          <p key={index} className="text-sm leading-7 text-zinc-600 transition-colors duration-300 group-hover:text-zinc-800">
            {item}
          </p>
        ))}
      </div>
    </motion.div>
  );
}

const Experience = () => {
  return (
    <section id="experience" className="w-full bg-[#f8f7f4] px-6 py-24 text-zinc-900 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="border-b border-zinc-200 pb-8">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#8b6f47]">Experience</p>

          <h2 className="text-5xl font-extrabold leading-[0.9] tracking-tight md:text-6xl">
            WORK
            <br />
            EXPERIENCE.
          </h2>
        </motion.div>

        {/* Experience List */}
        <div>
          {experiences.map((experience) => (
            <ExperienceItem key={experience.index} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
