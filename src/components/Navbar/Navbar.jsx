import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isInnerPage = ["/about", "/contact", "/services"].includes(location.pathname);
  const useLightNav = scrolled || isInnerPage;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-8 left-0 w-full z-50 px-8 md:px-15"
    >
      <div className="flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="relative">
          <motion.div
            animate={{
              opacity: useLightNav ? 1 : 0,
              backdropFilter: useLightNav ? "blur(12px)" : "blur(0px)",
              boxShadow: useLightNav
                ? "0 10px 40px rgba(0,0,0,0.12)"
                : "0 0 0 rgba(0,0,0,0)",
            }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0 bg-white rounded-2xl"
          />

          <div className="relative z-10 flex items-center gap-2 px-5 py-3 text-3xl md:text-[2.1rem] leading-none">
            <img
              src={useLightNav ? "/logo-black.png" : "/logo-white.png"}
              alt=""
              aria-hidden
              className="h-[1em] w-auto object-contain shrink-0 transition-all duration-300"
            />
            <h1
              className={`font-medium tracking-[0.01rem] transition-all duration-300 ${useLightNav ? "text-black" : "text-white"
                }`}
            >
              Verkoni
            </h1>
          </div>
        </Link>
      {/* </motion.div> */}

      {/* MENU */}
      <motion.div
        animate={{
          backgroundColor: useLightNav
            ? "rgba(255,255,255,0.95)"
            : "rgba(255,255,255,0)",
          backdropFilter: useLightNav ? "blur(14px)" : "blur(0px)",
          boxShadow: useLightNav
            ? "0 10px 40px rgba(0,0,0,0.12)"
            : "0 0 0 rgba(0,0,0,0)",
          border: useLightNav
            ? "1px solid rgba(255,255,255,0.15)"
            : "1px solid rgba(255,255,255,0)",
        }}
        transition={{ duration: 0.35 }}
        className="hidden md:flex items-center gap-8 px-6 py-3 rounded-2xl"
      >
        <Link
          to="/services"
          className={`text-sm tracking-wide transition-all duration-300 ${useLightNav
            ? "text-black/70 hover:text-black"
            : "text-white/80 hover:text-white"
            }`}
        >
          PLATFORM
        </Link>

        <Link
          to="/about"
          className={`text-sm tracking-wide transition-all duration-300 ${useLightNav
            ? "text-black/70 hover:text-black"
            : "text-white/80 hover:text-white"
            }`}
        >
          COMPANY
        </Link>

        {/* <Link
          to="/#faq"
          className={`text-sm tracking-wide transition-all duration-300 ${useLightNav
            ? "text-black/70 hover:text-black"
            : "text-white/80 hover:text-white"
            }`}
        >
          FAQ
        </Link> */}

        <Link
          to="/contact"
          className={`px-6 py-3 rounded-xl text-sm tracking-wide transition-all duration-300 ${useLightNav
            ? "bg-[#0f172a] text-white"
            : "bg-white text-black"
            }`}
        >
          WORK WITH US
        </Link>
      </motion.div>
    </div>
    </motion.nav >
  );
}