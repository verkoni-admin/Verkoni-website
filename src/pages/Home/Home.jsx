import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ServicesSection from "./ServicesSection";
import ProcessSection from "./ProcessSection";
import AboutSection from "./AboutSection";
import TestimonialsSection from "./TestimonialsSection";
import FAQSection from "./FAQSection";
import CTASection from "./CTASection";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[100dvh] overflow-hidden bg-black">
        {/* BACKGROUND IMAGE — faces pinned to upper center */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/founders.png"
            alt="Verkoni team"
            className="absolute inset-0 h-full w-full object-contain object-[center_18%] sm:object-[center_12%] md:object-[center_8%] opacity-65"
          />
        </div>

        {/* Bottom-only overlay — keeps faces clear, darkens shirt area for text */}
        <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black via-black/75 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black to-transparent pointer-events-none" />

        {/* Subtle edge vignette (sides only, not over faces) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.35)_0%,transparent_18%,transparent_82%,rgba(0,0,0,0.35)_100%)] pointer-events-none" />

        {/* GLOW — low, behind copy */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[min(90vw,700px)] h-[280px] bg-cyan-500/8 blur-[140px] rounded-full pointer-events-none" />

        {/* CONTENT — anchored to bottom so it never covers faces */}
        <div className="relative z-10 flex min-h-[100dvh] flex-col justify-end px-6 pb-16 pt-28 md:px-16 md:pb-20 lg:px-24">
          <div className="mx-auto w-full max-w-7xl">
            <motion.span
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-4 inline-block text-white/50 text-xs md:text-sm uppercase tracking-[0.35em]"
            >
              Verkoni · AI & Software
            </motion.span>

            <motion.h1
              variants={fadeUp}
              custom={0.08}
              initial="hidden"
              animate="visible"
              className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight tracking-[-0.03em] leading-[1.08] max-w-3xl drop-shadow-[0_2px_24px_rgba(0,0,0,0.95)]"
            >
              Building the future of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-400/90">
                AI automation.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={0.16}
              initial="hidden"
              animate="visible"
              className="text-white/75 text-base sm:text-lg leading-relaxed mt-4 max-w-xl drop-shadow-[0_2px_16px_rgba(0,0,0,0.9)]"
            >
              We create scalable AI-powered software solutions, automation systems,
              and next-generation digital experiences for modern businesses.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={0.24}
              initial="hidden"
              animate="visible"
              className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <Link
                to="/services"
                className="flex items-center justify-center text-center bg-white text-black px-8 py-3.5 rounded-2xl text-sm md:text-base tracking-wide hover:scale-[1.02] hover:bg-white/90 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.12)]"
              >
                EXPLORE
              </Link>
              <Link
                to="/contact"
                className="flex items-center justify-center text-center border border-white/25 bg-black/40 backdrop-blur-sm text-white px-8 py-3.5 rounded-2xl text-sm md:text-base tracking-wide hover:scale-[1.02] hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              >
                CONTACT US
              </Link>
            </motion.div>
          </div>
        </div>

        {/* SCROLL HINT */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-6 right-8 z-10 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-white/30 text-[10px] uppercase tracking-[0.3em]">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </section>

      {/* SECOND SECTION */}
      <ServicesSection />

      {/* THIRD SECTION */}
      <ProcessSection />

      {/* FOURTH SECTION */}
      <AboutSection />

      {/* FIFTH SECTION */}
      {/* <TestimonialsSection /> */}

      {/* SIXTH SECTION */}
      <FAQSection />

      {/* SEVENTH SECTION — CTA before footer */}
      <CTASection />
    </>
  );
};

export default Home;
