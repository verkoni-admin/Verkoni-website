import { motion } from "framer-motion";
import { fadeUp } from "../../Home/animations";
import { whyVerkoni, engagementModels } from "../data/servicesContent";

export default function WhyAndEngagementSection() {
  return (
    <section className="relative bg-black py-24 md:py-32 overflow-hidden border-t border-white/5">
      <div className="relative z-10 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24">
          <div>
            <motion.span
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="text-white/30 uppercase tracking-[0.3em] text-sm block mb-8"
            >
              {whyVerkoni.label}
            </motion.span>

            <motion.h2
              variants={fadeUp}
              custom={0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="text-white text-3xl md:text-4xl font-extralight tracking-[-0.03em] leading-[1.1] mb-12"
            >
              {whyVerkoni.title}
            </motion.h2>

            <div className="space-y-8">
              {whyVerkoni.points.map((point, i) => (
                <motion.div
                  key={point.title}
                  variants={fadeUp}
                  custom={0.1 + i * 0.08}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  className="border-l border-cyan-500/30 pl-6"
                >
                  <h3 className="text-white text-xl font-light mb-2">
                    {point.title}
                  </h3>
                  <p className="text-white/55 text-base leading-relaxed">
                    {point.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <motion.span
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="text-white/30 uppercase tracking-[0.3em] text-sm block mb-8"
            >
              Engagement models
            </motion.span>

            <div className="space-y-6">
              {engagementModels.map((model, i) => (
                <motion.article
                  key={model.title}
                  variants={fadeUp}
                  custom={0.1 + i * 0.08}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 hover:border-cyan-500/25 transition-colors duration-500"
                >
                  <h3 className="text-white text-xl font-light mb-2">
                    {model.title}
                  </h3>
                  <p className="text-white/55 text-base leading-relaxed">
                    {model.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
