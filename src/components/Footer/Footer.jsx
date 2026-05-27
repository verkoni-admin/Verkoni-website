const navigateLinks = [
  { label: "Platform", href: "/services" },
  { label: "Company", href: "/about" },
  { label: "Team", href: "/about#team" },
  { label: "Work with us", href: "/contact" },
];

const connectLinks = [
  // { label: "LinkedIn", href: "https://www.linkedin.com/company/verkoni" },
  // { label: "X", href: "#" },
];

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative min-h-[85vh] overflow-x-hidden bg-[#050a09]">
      {/* Moody background — organic curves (Verkoni cyan/teal) */}
      <div className="absolute inset-0 bg-[#050a09]" />
      <div className="absolute inset-0 opacity-90 bg-[radial-gradient(ellipse_120%_80%_at_70%_20%,rgba(20,120,100,0.45)_0%,transparent_55%)]" />
      <div className="absolute inset-0 opacity-80 bg-[radial-gradient(ellipse_90%_70%_at_20%_60%,rgba(6,182,212,0.25)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_50%_100%,rgba(0,0,0,0.85)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />

      <div className="relative z-10 flex flex-col min-h-[85vh] px-8 md:px-16 lg:px-20 pt-24 md:pt-32 pb-12 md:pb-16">
        {/* NAVIGATE + CONNECT */}
        <div className="flex flex-col sm:flex-row justify-between gap-16 sm:gap-24 max-w-7xl w-full">
          <div>
            <p className="text-white/45 text-[11px] uppercase tracking-[0.35em] mb-10 md:mb-14">
              Navigate
            </p>
            <ul className="space-y-5 md:space-y-6">
              {navigateLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white text-2xl md:text-3xl lg:text-4xl font-light tracking-tight hover:text-cyan-200/90 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* <div className="sm:text-right">
            <p className="text-white/45 text-[11px] uppercase tracking-[0.35em] mb-10 md:mb-14">
              Connect
            </p>
            <ul className="space-y-5 md:space-y-6">
              {connectLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white text-2xl md:text-3xl lg:text-4xl font-light tracking-tight hover:text-cyan-200/90 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}
        </div>

        {/* COPYRIGHT + BACK TO TOP */}
        <div className="mt-auto flex items-end justify-between gap-6 pt-24 md:pt-32 pb-6 md:pb-8 max-w-7xl w-full">
          <p className="text-white/40 text-[10px] md:text-[11px] uppercase tracking-[0.2em] leading-relaxed max-w-md">
            © {year} Verkoni. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="shrink-0 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white/80 backdrop-blur-sm hover:bg-white/15 hover:border-white/40 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-5 w-5 md:h-6 md:w-6"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 19V5m0 0l-7 7m7-7l7 7"
              />
            </svg>
          </button>
        </div>

        {/* OVERSIZED BRAND NAME */}
        <div className="w-full text-center mt-4 md:mt-8">
          <p
            className="text-white font-semibold tracking-[-0.04em] leading-none"
            style={{ fontSize: "clamp(3.5rem, 14vw, 11rem)" }}
          >
            Verkoni
          </p>
        </div>
      </div>
    </footer>
  );
}
