import { motion } from "framer-motion";
import { fadeUp } from "./animations";

const testimonials = [
  {
    quote:
      "Verkoni automated our onboarding pipeline in weeks. What used to take our team days now runs in the background—flawlessly.",
    name: "Sarah Chen",
    role: "COO",
    company: "Nexus Labs",
  },
  {
    quote:
      "They didn't just build software—they understood our business. The platform they delivered became core to how we operate.",
    name: "Marcus Webb",
    role: "Founder",
    company: "Scalepath",
  },
  {
    quote:
      "Clear process, fast execution, and systems that scale. Exactly what we needed for our digital transformation.",
    name: "Elena Rodriguez",
    role: "VP Engineering",
    company: "Arcline",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative bg-black py-28 md:py-40 overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050d14] to-black" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-cyan-500/8 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 px-6 md:px-20 max-w-7xl mx-auto">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-white/30 uppercase tracking-[0.3em] text-sm block mb-8"
        >
          Client voices
        </motion.span>

        <motion.h2
          variants={fadeUp}
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-white text-4xl md:text-6xl font-extralight tracking-[-0.03em] leading-[1.1] max-w-3xl mb-16 md:mb-20"
        >
          Trusted by teams building what&apos;s next.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item, i) => (
            <motion.blockquote
              key={item.name}
              variants={fadeUp}
              custom={0.1 + i * 0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10"
            >
              <p className="text-white/70 text-base md:text-lg leading-relaxed flex-1">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="mt-8 pt-6 border-t border-white/10">
                <p className="text-white font-light text-lg">{item.name}</p>
                <p className="text-white/40 text-sm mt-1">
                  {item.role}, {item.company}
                </p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
