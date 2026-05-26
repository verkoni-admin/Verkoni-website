import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUp } from "./animations";

export default function CTASection() {
  return (
    <section
      id="contact"
      className="relative bg-black py-28 md:py-36 overflow-hidden border-t border-white/5"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a1520] to-[#050a09]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(100vw,900px)] h-[400px] bg-cyan-500/12 blur-[180px] rounded-full pointer-events-none" />

      <div className="relative z-10 px-6 md:px-20 max-w-7xl mx-auto text-center">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-white/30 uppercase tracking-[0.3em] text-sm block mb-8"
        >
          Let&apos;s build
        </motion.span>

        <motion.h2
          variants={fadeUp}
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-white text-4xl md:text-6xl lg:text-7xl font-extralight tracking-[-0.03em] leading-[1.08] max-w-4xl mx-auto"
        >
          Ready to transform how your business operates?
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={0.15}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-white/50 text-lg md:text-xl leading-relaxed mt-6 max-w-2xl mx-auto"
        >
          Tell us about your goals. We&apos;ll respond within one business day
          with next steps and how we can help.
        </motion.p>

        <motion.div
          variants={fadeUp}
          custom={0.22}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/contact"
            className="bg-white text-black px-10 py-4 rounded-2xl text-sm md:text-base tracking-wide hover:scale-[1.02] hover:bg-white/90 transition-all duration-300 shadow-[0_0_50px_rgba(255,255,255,0.1)]"
          >
            GET IN TOUCH
          </Link>
          <a
            href="#faq"
            className="border border-white/25 bg-white/5 backdrop-blur-sm text-white px-10 py-4 rounded-2xl text-sm md:text-base tracking-wide hover:scale-[1.02] hover:bg-white/10 hover:border-white/40 transition-all duration-300"
          >
            VIEW FAQ
          </a>
        </motion.div>

        <motion.p
          variants={fadeUp}
          custom={0.28}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="text-white/35 text-sm mt-10 tracking-wide"
        >
          hello@verkoni.com
        </motion.p>
      </div>
    </section>
  );
}
