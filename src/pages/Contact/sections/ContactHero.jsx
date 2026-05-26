import { motion } from "framer-motion";
import { fadeUp } from "../../Home/animations";
import { contactHero } from "../data/contactContent";

export default function ContactHero() {
  return (
    <section className="relative bg-black pt-36 md:pt-44 pb-16 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#07111a] via-black to-black" />
      <div className="absolute top-0 right-0 w-[500px] h-[450px] bg-cyan-500/10 blur-[160px] rounded-full pointer-events-none translate-x-1/4" />

      <div className="relative z-10 px-6 md:px-20 max-w-7xl mx-auto">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-white/30 uppercase tracking-[0.3em] text-sm block mb-8"
        >
          {contactHero.label}
        </motion.span>

        <motion.h1
          variants={fadeUp}
          custom={0.08}
          initial="hidden"
          animate="visible"
          className="text-white text-4xl md:text-6xl lg:text-7xl font-extralight tracking-[-0.03em] leading-[1.08] max-w-4xl"
        >
          {contactHero.title}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          custom={0.16}
          initial="hidden"
          animate="visible"
          className="text-white/55 text-lg md:text-xl leading-relaxed mt-8 max-w-2xl"
        >
          {contactHero.description}
        </motion.p>
      </div>
    </section>
  );
}
