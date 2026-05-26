import { motion } from "framer-motion";
import { fadeUp } from "../../Home/animations";
import { aboutHero } from "../data/aboutContent";

export default function AboutHero() {
  return (
    <section className="relative bg-black pt-36 md:pt-44 pb-20 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#07111a] via-black to-black" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-cyan-500/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 px-6 md:px-20 max-w-7xl mx-auto">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-white/30 uppercase tracking-[0.3em] text-sm block mb-8"
        >
          {aboutHero.label}
        </motion.span>

        <motion.h1
          variants={fadeUp}
          custom={0.08}
          initial="hidden"
          animate="visible"
          className="text-white text-4xl md:text-6xl lg:text-7xl font-extralight tracking-[-0.03em] leading-[1.08] max-w-4xl"
        >
          {aboutHero.title}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          custom={0.16}
          initial="hidden"
          animate="visible"
          className="text-white/55 text-lg md:text-xl leading-relaxed mt-8 max-w-2xl"
        >
          {aboutHero.description}
        </motion.p>
      </div>
    </section>
  );
}
