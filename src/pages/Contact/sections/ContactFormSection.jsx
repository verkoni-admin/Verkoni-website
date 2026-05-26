import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../../Home/animations";
import {
  contactInfo,
  socialLinks,
  projectTypes,
  formLabels,
} from "../data/contactContent";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white placeholder:text-white/30 text-base outline-none focus:border-cyan-500/40 focus:bg-white/[0.06] transition-colors duration-300";

export default function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    projectType: projectTypes[0],
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Project inquiry from ${form.name}${form.company ? ` — ${form.company}` : ""}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Company: ${form.company || "—"}`,
      `Project type: ${form.projectType}`,
      "",
      form.message,
    ].join("\n");

    window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <section
      id="form"
      className="relative bg-black py-16 md:py-24 overflow-hidden border-t border-white/5"
    >
      <div className="relative z-10 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
          {/* CONTACT DETAILS */}
          <motion.aside
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-2 space-y-10"
          >
            <div>
              <p className="text-white/30 uppercase tracking-[0.3em] text-xs mb-6">
                Direct contact
              </p>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-white text-xl md:text-2xl font-light hover:text-cyan-300/90 transition-colors break-all"
              >
                {contactInfo.email}
              </a>
              {contactInfo.phone && (
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="block text-white/60 text-lg mt-4 hover:text-white transition-colors"
                >
                  {contactInfo.phone}
                </a>
              )}
              {contactInfo.location && (
                <p className="text-white/50 text-base mt-4">{contactInfo.location}</p>
              )}
            </div>

            <div>
              <p className="text-white/30 uppercase tracking-[0.3em] text-xs mb-3">
                Response time
              </p>
              <p className="text-white/70 text-lg">{contactInfo.responseTime}</p>
            </div>

            <div>
              <p className="text-white/30 uppercase tracking-[0.3em] text-xs mb-4">
                Connect
              </p>
              <ul className="space-y-3">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 text-base hover:text-cyan-300/90 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.aside>

          {/* FORM */}
          <motion.div
            variants={fadeUp}
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/5 p-8 md:p-12">
                <h2 className="text-white text-2xl md:text-3xl font-light mb-4">
                  {formLabels.successTitle}
                </h2>
                <p className="text-white/55 text-base leading-relaxed mb-6">
                  {formLabels.successMessage}
                </p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-cyan-400/90 hover:text-cyan-300 transition-colors"
                >
                  {contactInfo.email}
                </a>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-white/40 text-sm hover:text-white/70 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      {formLabels.name}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder={formLabels.name}
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      {formLabels.email}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder={formLabels.email}
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="company" className="sr-only">
                      {formLabels.company}
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder={formLabels.company}
                      value={form.company}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="projectType" className="sr-only">
                      {formLabels.projectType}
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      className={`${inputClass} cursor-pointer`}
                    >
                      {projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-[#0a1218]">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">
                    {formLabels.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder={formLabels.message}
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-y min-h-[160px]`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-white text-black px-10 py-4 rounded-2xl text-sm md:text-base tracking-wide hover:scale-[1.02] hover:bg-white/90 transition-all duration-300"
                >
                  {formLabels.submit}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
