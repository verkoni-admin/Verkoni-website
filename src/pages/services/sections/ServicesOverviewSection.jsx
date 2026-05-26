import { motion } from "framer-motion";
import { fadeUp } from "../../Home/animations";
import { services } from "../data/servicesContent";

export default function ServicesOverviewSection() {
  return (
    <section className="relative bg-black py-16 md:py-24 overflow-hidden border-t border-white/5">
      <div className="relative z-10 px-6 md:px-20 max-w-7xl mx-auto">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-white/30 uppercase tracking-[0.3em] text-sm mb-12"
        >
          Our services
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <motion.a
              key={service.id}
              href={`#${service.id}`}
              variants={fadeUp}
              custom={0.1 + i * 0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="group block rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10 hover:border-cyan-500/30 hover:bg-white/[0.05] transition-colors duration-500"
            >
              <span className="text-cyan-400/60 text-sm tracking-widest">
                {service.tag}
              </span>
              <h2 className="text-white text-2xl md:text-3xl font-light mt-6 mb-4 group-hover:text-cyan-100/90 transition-colors">
                {service.title}
              </h2>
              <p className="text-white/55 text-base leading-relaxed">
                {service.summary}
              </p>
              <span className="inline-block mt-6 text-white/40 text-sm group-hover:text-cyan-400/80 transition-colors">
                View details →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
