import { Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";

const links = ["Home", "About", "Experience", "Skills", "Projects", "Contact"];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/-sadik-performance-marketer", icon: FaLinkedin },
  { label: "GitHub", href: "https://github.com/sadikalike", icon: FaGithub },
  { label: "Instagram", href: "https://www.instagram.com/growzy.digital", icon: SiInstagram },
  { label: "Email", href: "mailto:sadikalike7@gmail.com", icon: Mail },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-blue-900/30 bg-[#020617]">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          
          {/* Brand & Description */}
          <div>
            <a href="/#home" className="text-xl sm:text-2xl font-bold tracking-tighter text-white">
              Muhammad Sadik P<span className="text-blue-500">.</span>
            </a>
            <p className="text-sm text-gray-500 mt-3 max-w-xs mx-auto md:mx-0 leading-relaxed">
              Performance Marketer & Website Developer building high-converting digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-4">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 w-fit mx-auto md:mx-0">
              {links.map((l) => (
                <li key={l}>
                  <a href={`/#${l.toLowerCase()}`} className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-4">Connect</h4>
            <div className="flex items-center justify-center md:justify-start gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-11 h-11 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-center text-xs text-gray-500">
          <p>© 2026 Muhammad Sadik P. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}