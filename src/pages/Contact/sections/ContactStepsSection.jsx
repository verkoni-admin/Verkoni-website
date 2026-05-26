import { motion } from "framer-motion";
import { fadeUp } from "../../Home/animations";
import { nextSteps } from "../data/contactContent";

export default function ContactStepsSection() {
  return (
    <section className="relative bg-black py-24 md:py-32 overflow-hidden border-t border-white/5">
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-cyan-500/8 blur-[160px] rounded-full pointer-events-none -translate-x-1/4" />

      <div className="relative z-10 px-6 md:px-20 max-w-7xl mx-auto">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-white/30 uppercase tracking-[0.3em] text-sm block mb-8"
        >
          {nextSteps.label}
        </motion.span>

        <motion.h2
          variants={fadeUp}
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-white text-3xl md:text-5xl font-extralight tracking-[-0.03em] leading-[1.1] max-w-3xl mb-16 md:mb-20"
        >
          {nextSteps.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {nextSteps.steps.map((step, i) => (
            <motion.div
              key={step.title}
              variants={fadeUp}
              custom={0.1 + i * 0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="relative"
            >
              <span className="text-cyan-400/50 text-sm tracking-[0.2em] mb-4 block">
                0{i + 1}
              </span>
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
    </section>
  );
}
