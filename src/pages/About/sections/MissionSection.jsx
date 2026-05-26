import { motion } from "framer-motion";
import { fadeUp } from "../../Home/animations";
import { mission } from "../data/aboutContent";

export default function MissionSection() {
  return (
    <section className="relative bg-black py-24 md:py-32 overflow-hidden border-t border-white/5">
      <div className="relative z-10 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <motion.span
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="text-white/30 uppercase tracking-[0.3em] text-sm block mb-8"
            >
              {mission.label}
            </motion.span>

            <motion.h2
              variants={fadeUp}
              custom={0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="text-white text-3xl md:text-5xl font-extralight tracking-[-0.03em] leading-[1.1]"
            >
              {mission.title}
            </motion.h2>
          </div>

          <div className="space-y-6">
            {mission.paragraphs.map((paragraph, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                custom={0.1 + i * 0.08}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="text-white/55 text-base md:text-lg leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}

            <motion.blockquote
              variants={fadeUp}
              custom={0.3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="border-l border-cyan-500/40 pl-6 md:pl-8 mt-8"
            >
              <p className="text-white/70 text-lg md:text-xl font-light italic leading-relaxed">
                {mission.vision}
              </p>
            </motion.blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
