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

      {/* Mobile ನಲ್ಲಿ ಪ್ಯಾಡಿಂಗ್ ಕಡಿಮೆ ಮಾಡಲಾಗಿದೆ (py-10) */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-10 md:py-14">
        
        {/* Mobile ನಲ್ಲಿ gap-8, Desktop ನಲ್ಲಿ gap-10 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 text-center md:text-left">
          
          {/* Brand & Description */}
          <div>
            <a href="/#home" className="text-lg sm:text-xl md:text-2xl font-bold tracking-tighter text-white">
              Muhammad Sadik P<span className="text-blue-500">.</span>
            </a>
            <p className="text-xs sm:text-sm text-gray-500 mt-2 md:mt-3 max-w-xs mx-auto md:mx-0 leading-relaxed">
              Performance Marketer & Website Developer building high-converting digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-blue-500 mb-3 md:mb-4">Quick Links</h4>
            {/* Mobile ನಲ್ಲಿ ಫಾಂಟ್ ಸೈಜ್ ಕಡಿಮೆ ಮಾಡಲಾಗಿದೆ (text-xs) */}
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 w-fit mx-auto md:mx-0 text-xs sm:text-sm">
              {links.map((l) => (
                <li key={l}>
                  <a href={`/#${l.toLowerCase()}`} className="text-gray-400 hover:text-blue-400 transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-blue-500 mb-3 md:mb-4">Connect</h4>
            <div className="flex items-center justify-center md:justify-start gap-2.5 md:gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    // Mobile ನಲ್ಲಿ ಐಕಾನ್ ಸೈಜ್ ಚಿಕ್ಕದಾಗಿದೆ (w-9 h-9)
                    className="w-9 h-9 md:w-11 md:h-11 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all"
                  >
                    <Icon className="w-4 h-4 md:w-[18px] md:h-[18px]" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 md:mt-12 pt-5 md:pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-center text-[10px] md:text-xs text-gray-500">
          <p>© 2026 Muhammad Sadik P. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}