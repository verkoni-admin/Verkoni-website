import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUp } from "../../Home/animations";
import { servicesCta } from "../data/servicesContent";

export default function ServicesCTA() {
  return (
    <section className="relative bg-black py-24 md:py-32 overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a1520] to-[#050a09]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(100vw,800px)] h-[350px] bg-cyan-500/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 px-6 md:px-20 max-w-7xl mx-auto text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-white text-3xl md:text-5xl lg:text-6xl font-extralight tracking-[-0.03em] leading-[1.1] max-w-3xl mx-auto"
        >
          {servicesCta.title}
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-white/50 text-lg leading-relaxed mt-6 max-w-xl mx-auto"
        >
          {servicesCta.description}
        </motion.p>

        <motion.div
          variants={fadeUp}
          custom={0.18}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to={servicesCta.primaryHref}
            className="bg-white text-black px-10 py-4 rounded-2xl text-sm md:text-base tracking-wide hover:scale-[1.02] hover:bg-white/90 transition-all duration-300"
          >
            {servicesCta.primaryLabel}
          </Link>
          <Link
            to={servicesCta.secondaryHref}
            className="border border-white/25 bg-white/5 text-white px-10 py-4 rounded-2xl text-sm md:text-base tracking-wide hover:scale-[1.02] hover:bg-white/10 hover:border-white/40 transition-all duration-300"
          >
            {servicesCta.secondaryLabel}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
