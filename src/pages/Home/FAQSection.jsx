import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp } from "./animations";

const faqs = [
  {
    question: "What types of projects do you take on?",
    answer:
      "We specialize in AI automation, custom software development, and digital transformation—from workflow automation and internal tools to customer-facing platforms and full system integrations.",
  },
  {
    question: "How long does a typical engagement take?",
    answer:
      "Timelines vary by scope. Discovery and MVP automations can ship in 4–8 weeks; larger platform builds often run 3–6 months. We define milestones upfront so you always know what to expect.",
  },
  {
    question: "Do you work with existing tools and teams?",
    answer:
      "Yes. We integrate with your current stack—CRMs, databases, APIs, and cloud services—and collaborate with your in-house engineers or operate as an extended team.",
  },
  {
    question: "How do you price projects?",
    answer:
      "We offer fixed-scope projects and ongoing retainer partnerships depending on your needs. After discovery, we provide a clear proposal with deliverables, timeline, and investment.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We provide documentation, handoff, and optional ongoing support—monitoring, optimization, and feature extensions so your systems keep improving as you grow.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="relative bg-black py-28 md:py-40 overflow-hidden border-t border-white/5"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#07111a] to-black" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-cyan-500/8 blur-[160px] rounded-full pointer-events-none -translate-x-1/4" />

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
              FAQ
            </motion.span>

            <motion.h2
              variants={fadeUp}
              custom={0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="text-white text-4xl md:text-5xl lg:text-6xl font-extralight tracking-[-0.03em] leading-[1.1]"
            >
              Questions we hear often.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={0.15}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="text-white/50 text-lg leading-relaxed mt-6 max-w-md"
            >
              Don&apos;t see your question? Reach out—we&apos;re happy to walk
              through your specific situation.
            </motion.p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => {
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
