import { motion } from "framer-motion";
import { fadeUp } from "../../Home/animations";
import { values } from "../data/aboutContent";

export default function ValuesSection() {
  return (
    <section className="relative bg-black py-24 md:py-32 overflow-hidden border-t border-white/5">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/8 blur-[160px] rounded-full pointer-events-none translate-x-1/3" />

      <div className="relative z-10 px-6 md:px-20 max-w-7xl mx-auto">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-white/30 uppercase tracking-[0.3em] text-sm block mb-8"
        >
          Our values
        </motion.span>

        <motion.h2
          variants={fadeUp}
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-white text-3xl md:text-5xl font-extralight tracking-[-0.03em] leading-[1.1] max-w-3xl mb-16 md:mb-20"
        >
          Principles that guide every project we take on.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {values.map((item, i) => (
            <motion.article
              key={item.title}
              variants={fadeUp}
              custom={0.1 + i * 0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10 hover:border-cyan-500/25 transition-colors duration-500"
            >
              <h3 className="text-white text-xl md:text-2xl font-light mb-3">
                {item.title}
              </h3>
              <p className="text-white/55 text-base leading-relaxed">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
