"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight, Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

// "Updates" ಲಿಂಕ್ ಸೇರಿಸಲಾಗಿದೆ
const links = ["About", "Experience", "Skills", "Projects", "Updates", "Contact"];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/-sadik-performance-marketer", icon: FaLinkedin, external: true },
  { label: "GitHub", href: "https://github.com/sadikalike", icon: FaGithub, external: true },
  { label: "Email", href: "mailto:sadikalike7@gmail.com", icon: Mail, external: false },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  // Background change on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    
    const sections = ["home", ...links.map((l) => l.toLowerCase())];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-3 sm:top-4 inset-x-0 z-50 px-2 sm:px-6">
      <nav
        className={`max-w-6xl mx-auto rounded-full border transition-all duration-300 ${
          scrolled
            ? "bg-[#030712]/80 border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
            : "bg-[#030712]/40 border-white/5"
        } backdrop-blur-xl`}
      >
        <div className="flex items-center justify-between h-14 pl-4 pr-1.5 md:pl-5 md:pr-2 gap-2">
          
          {/* Logo: Full Name */}
          <a href="/#home" className="font-bold tracking-tighter text-white whitespace-nowrap">
            <span className="text-[18px] md:text-xl lg:text-2xl">
              Muhammad Sadik P<span className="text-blue-500">.</span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map((item) => {
              const id = item.toLowerCase();
              const isActive = active === id;
              
              // "Updates" ಗೆ ಪ್ರತ್ಯೇಕ ಲಿಂಕ್, ಉಳಿದವುಗಳಿಗೆ ಸ್ಕ್ರಾಲ್ ಲಿಂಕ್
              // ಇಲ್ಲಿ ನೇರವಾಗಿ string ನೀಡಲಾಗಿದೆ, ಯಾವುದೇ condition ಇಲ್ಲ
              let href = `/#${id}`;
              if (id === "updates") {
                href = "/updates";
              }

              return (
                <li key={item}>
                  <a
                    href={href}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      isActive ? "text-white" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-blue-500/15 border border-blue-500/30"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-0.5 md:gap-2">
            {/* Social icons */}
            <div className="flex items-center gap-0.5 md:gap-1 md:mr-1">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    {...(s.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    aria-label={s.label}
                    className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full text-gray-400 hover:text-blue-400 hover:bg-white/10 transition-all"
                  >
                    <Icon className="w-4 h-4 md:w-[18px] md:h-[18px]" />
                  </a>
                );
              })}
            </div>

            <a
              href="/#contact"
              className="hidden md:flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white pl-5 pr-4 py-2.5 rounded-full text-sm font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.35)]"
            >
              Hire Me <ArrowUpRight size={16} />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden max-w-6xl mx-auto mt-2 rounded-3xl border border-white/10 bg-[#030712]/90 backdrop-blur-xl p-3 shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
          >
            {links.map((item) => {
              const id = item.toLowerCase();
              
              // ಮೊಬೈಲ್‌ನಲ್ಲಿಯೂ ಅದೇ ಲಾಜಿಕ್
              let href = `/#${id}`;
              if (id === "updates") {
                href = "/updates";
              }

              return (
                <a
                  key={item}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-2xl text-base font-medium transition-colors ${
                    active === id
                      ? "bg-blue-500/15 text-white"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item}
                </a>
              );
            })}

            <a
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="mt-3 flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white px-4 py-3 rounded-2xl text-base font-semibold transition-all"
            >
              Hire Me <ArrowUpRight size={18} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}