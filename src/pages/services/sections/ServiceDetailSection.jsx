import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUp } from "../../Home/animations";
import { services } from "../data/servicesContent";

function ServiceBlock({ service, index }) {
  const isEven = index % 2 === 0;

  return (
    <section
      id={service.id}
      className="relative bg-black py-24 md:py-32 overflow-hidden border-t border-white/5 scroll-mt-28"
    >
      {index % 2 === 1 && (
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-cyan-500/6 blur-[160px] rounded-full pointer-events-none translate-x-1/3" />
      )}

      <div className="relative z-10 px-6 md:px-20 max-w-7xl mx-auto">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 ${!isEven ? "lg:[direction:rtl] lg:*:[direction:ltr]" : ""}`}
        >
          <div>
            <motion.span
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="text-cyan-400/60 text-sm tracking-widest"
            >
              {service.tag}
            </motion.span>

            <motion.h2
              variants={fadeUp}
              custom={0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="text-white text-3xl md:text-5xl font-extralight tracking-[-0.03em] leading-[1.1] mt-4 mb-6"
            >
              {service.title}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={0.12}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="text-white/50 text-lg leading-relaxed"
            >
              {service.description}
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={0.18}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="mt-8"
            >
              <p className="text-white/30 text-xs uppercase tracking-[0.25em] mb-3">
                Ideal for
              </p>
              <ul className="space-y-2">
                {service.idealFor.map((item) => (
                  <li
                    key={item}
                    className="text-white/60 text-base flex gap-2"
                  >
                    <span className="text-cyan-400/50">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="space-y-10">
            <motion.div
              variants={fadeUp}
              custom={0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              <h3 className="text-white text-lg font-medium mb-4">
                What we deliver
              </h3>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-white/55 text-base leading-relaxed flex gap-3"
                  >
                    <span className="text-cyan-400 shrink-0 mt-1">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={0.16}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
            >
              <h3 className="text-white/30 text-xs uppercase tracking-[0.25em] mb-4">
                Deliverables
              </h3>
              <ul className="space-y-2">
                {service.deliverables.map((item) => (
                  <li key={item} className="text-white/70 text-sm md:text-base">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <Link
              to="/contact"
              className="inline-block text-cyan-400/80 text-sm hover:text-cyan-300 transition-colors"
            >
              Discuss {service.title} →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServiceDetailSection() {
  return (
    <>
      {services.map((service, index) => (
        <ServiceBlock key={service.id} service={service} index={index} />
      ))}
    </>
  );
}
