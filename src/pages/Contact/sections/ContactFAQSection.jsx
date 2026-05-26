import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUp } from "../../Home/animations";
import { contactFaqs } from "../data/contactContent";

export default function ContactFAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

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
              Before you reach out
            </motion.span>

            <motion.h2
              variants={fadeUp}
              custom={0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="text-white text-3xl md:text-5xl font-extralight tracking-[-0.03em] leading-[1.1]"
            >
              Common questions.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={0.15}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="text-white/50 text-lg leading-relaxed mt-6"
            >
              More answers on our{" "}
              <Link
                to={{ pathname: "/", hash: "faq" }}
                className="text-cyan-400/80 hover:text-cyan-300 transition-colors"
              >
                homepage FAQ
              </Link>
              .
            </motion.p>
          </div>

          <div className="space-y-3">
            {contactFaqs.map((faq, i) => {
              const isOpen = openIndex === i;

              return (
                <motion.div
                  key={faq.question}
                  variants={fadeUp}
                  custom={0.05 + i * 0.05}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/[0.03] transition-colors duration-300"
                  >
                    <span className="text-white text-base md:text-lg font-light">
                      {faq.question}
                    </span>
                    <span
                      className={`shrink-0 text-cyan-400/80 text-xl transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                    >
                      +
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-white/55 text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
