import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUp } from "./animations";
import { services } from "../services/data/servicesContent";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative bg-black py-28 md:py-40 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#07111a] to-black" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 px-6 md:px-20 max-w-7xl mx-auto">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-white/30 uppercase tracking-[0.3em] text-sm block mb-8"
        >
          What we do
        </motion.span>

        <motion.h2
          variants={fadeUp}
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-white text-4xl md:text-6xl font-extralight tracking-[-0.03em] leading-[1.1] max-w-4xl mb-6"
        >
          Technology that removes friction and unlocks growth.
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={0.15}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-white/50 text-lg md:text-xl leading-relaxed max-w-2xl mb-20"
        >
          From intelligent automation to full-stack product engineering, we help
          teams move faster with systems built for the long run.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <motion.article
              key={service.tag}
              variants={fadeUp}
              custom={0.1 + i * 0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10 hover:border-cyan-500/30 hover:bg-white/[0.05] transition-colors duration-500"
            >
              <span className="text-cyan-400/60 text-sm font-light tracking-widest">
                {service.tag}
              </span>
              <h3 className="text-white text-2xl md:text-3xl font-light mt-6 mb-4">
                {service.title}
              </h3>
              <p className="text-white/55 text-base leading-relaxed">
                {service.summary}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          custom={0.4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 pt-12 border-t border-white/10"
        >
          <p className="text-white/40 text-sm uppercase tracking-[0.2em]">
            Trusted by forward-thinking teams
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              to="/services"
              className="text-white/50 text-sm tracking-wide hover:text-white transition-colors text-center sm:text-left"
            >
              View all services →
            </Link>
            <Link
              to="/contact"
              className="bg-white text-black px-8 py-4 rounded-2xl text-sm tracking-wide hover:scale-105 hover:bg-white/90 transition-all duration-300 text-center"
            >
              START A PROJECT
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
