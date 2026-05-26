import { motion } from "framer-motion";
import { fadeUp } from "../../Home/animations";
import { stats, culture } from "../data/aboutContent";

export default function StatsCultureSection() {
  return (
    <section className="relative bg-black py-24 md:py-32 overflow-hidden border-t border-white/5">
      <div className="relative z-10 px-6 md:px-20 max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 pb-20 md:pb-28 border-b border-white/10"
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 pt-20 md:pt-28">
          <div>
            <motion.span
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="text-white/30 uppercase tracking-[0.3em] text-sm block mb-8"
            >
              {culture.label}
            </motion.span>

            <motion.h2
              variants={fadeUp}
              custom={0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="text-white text-3xl md:text-5xl font-extralight tracking-[-0.03em] leading-[1.1]"
            >
              {culture.title}
            </motion.h2>
          </div>

          <ul className="space-y-6">
            {culture.points.map((point, i) => (
              <motion.li
                key={i}
                variants={fadeUp}
                custom={0.1 + i * 0.08}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="flex gap-4 text-white/55 text-base md:text-lg leading-relaxed"
              >
                <span className="text-cyan-400/60 shrink-0 mt-1">—</span>
                {point}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
