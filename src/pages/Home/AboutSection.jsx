import { motion } from "framer-motion";
import { fadeUp } from "./animations";

const values = [
  {
    title: "Engineering-first",
    description:
      "We ship production systems—not slide decks. Every solution is built to perform, integrate, and scale.",
  },
  {
    title: "AI with purpose",
    description:
      "Automation only matters when it saves time and drives outcomes. We focus on high-impact workflows first.",
  },
  {
    title: "Partnership mindset",
    description:
      "We work alongside your team with clear communication, transparent timelines, and long-term support.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="company"
      className="relative bg-black py-28 md:py-40 overflow-hidden border-t border-white/5"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#07111a] to-black" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-cyan-500/8 blur-[160px] rounded-full pointer-events-none translate-x-1/3" />

      <div className="relative z-10 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <motion.span
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="text-white/30 uppercase tracking-[0.3em] text-sm block mb-8"
            >
              Who we are
            </motion.span>

            <motion.h2
              variants={fadeUp}
              custom={0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="text-white text-4xl md:text-5xl lg:text-6xl font-extralight tracking-[-0.03em] leading-[1.1]"
            >
              A team obsessed with building smarter systems.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={0.15}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="text-white/50 text-lg leading-relaxed mt-8 max-w-lg"
            >
              Verkoni is an AI and software studio helping businesses automate
              operations, modernize products, and move faster with technology
              that actually ships.
            </motion.p>
          </div>

          <div className="space-y-8">
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                custom={0.1 + i * 0.08}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="border-l border-cyan-500/30 pl-6 md:pl-8"
              >
                <h3 className="text-white text-xl md:text-2xl font-light mb-2">
                  {item.title}
                </h3>
                <p className="text-white/55 text-base leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
