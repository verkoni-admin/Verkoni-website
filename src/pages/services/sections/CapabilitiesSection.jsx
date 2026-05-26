import { motion } from "framer-motion";
import { fadeUp } from "../../Home/animations";
import { capabilities } from "../data/servicesContent";

export default function CapabilitiesSection() {
  return (
    <section className="relative bg-black py-24 md:py-32 overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050d14] to-black" />

      <div className="relative z-10 px-6 md:px-20 max-w-7xl mx-auto">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-white/30 uppercase tracking-[0.3em] text-sm block mb-8"
        >
          {capabilities.label}
        </motion.span>

        <motion.h2
          variants={fadeUp}
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-white text-3xl md:text-5xl font-extralight tracking-[-0.03em] leading-[1.1] max-w-3xl mb-6"
        >
          {capabilities.title}
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={0.15}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-white/50 text-lg leading-relaxed max-w-2xl mb-16 md:mb-20"
        >
          {capabilities.description}
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {capabilities.categories.map((category, i) => (
            <motion.div
              key={category.name}
              variants={fadeUp}
              custom={0.1 + i * 0.06}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
            >
              <h3 className="text-white text-lg font-medium mb-5">
                {category.name}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item} className="text-white/55 text-sm leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
