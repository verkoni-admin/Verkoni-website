import { motion } from "framer-motion";
import { fadeUp } from "./animations";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We map your workflows, pain points, and goals to find where automation and software deliver the highest impact.",
  },
  {
    number: "02",
    title: "Architect",
    description:
      "We design scalable systems—integrations, data flows, and product structure—built for clarity and long-term growth.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Our team ships production-ready solutions with clean code, rigorous testing, and seamless handoff to your team.",
  },
  {
    number: "04",
    title: "Scale",
    description:
      "We monitor, optimize, and extend what we build so your operations keep improving as your business evolves.",
  },
];

const stats = [
  { value: "50+", label: "Projects delivered" },
  { value: "3x", label: "Avg. efficiency gain" },
  { value: "24/7", label: "System reliability" },
];

export default function ProcessSection() {
  return (
    <section className="relative bg-black py-28 md:py-40 overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050d14] to-black" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/8 blur-[180px] rounded-full pointer-events-none translate-x-1/4 translate-y-1/4" />

      <div className="relative z-10 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20 md:mb-28">
          <div>
            <motion.span
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="text-white/30 uppercase tracking-[0.3em] text-sm block mb-8"
            >
              How we work
            </motion.span>

            <motion.h2
              variants={fadeUp}
              custom={0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="text-white text-4xl md:text-5xl lg:text-6xl font-extralight tracking-[-0.03em] leading-[1.1]"
            >
              A clear path from idea to impact.
            </motion.h2>
          </div>

          <motion.p
            variants={fadeUp}
            custom={0.15}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-white/50 text-lg md:text-xl leading-relaxed lg:pt-14"
          >
            Every engagement follows a structured process—so you always know
            what&apos;s next, when you&apos;ll see results, and how we measure success.
          </motion.p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                custom={0.1 + i * 0.08}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="relative"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/40 bg-cyan-500/10 text-cyan-400/90 text-xs tracking-widest">
                    {step.number}
                  </span>
                  {i < steps.length - 1 && (
                    <div className="lg:hidden flex-1 h-px bg-white/10" />
                  )}
                </div>
                <h3 className="text-white text-xl md:text-2xl font-light mb-3">
                  {step.title}
                </h3>
                <p className="text-white/55 text-base leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          variants={fadeUp}
          custom={0.35}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-24 md:mt-32 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 pt-16 border-t border-white/10"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="text-white text-4xl md:text-5xl font-extralight tracking-tight">
                {stat.value}
              </p>
              <p className="text-white/40 text-sm uppercase tracking-[0.2em] mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
