"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export default function Projects() {
  return (
    <motion.section id="projects" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="pt-24 border-t border-white/5 mt-20 pb-12">
      
      {/* ಶೀರ್ಷಿಕೆ ಮಧ್ಯದಲ್ಲೇ ಇರಲಿ */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">Featured Projects</h2>
        <p className="text-blue-500 font-medium text-lg">My Recent Work</p>
      </div>
      
      {/* ಕಾರ್ಡ್‌ಗಳು ಮಧ್ಯದಲ್ಲಿವೆ, ಆದರೆ ಒಳಗಿನ ಅಂಶಗಳು ಎಡಕ್ಕೆ ಒರಗಿಕೊಂಡಿವೆ */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
        
        <a href="https://subhamastucafe.in" target="_blank" rel="noopener noreferrer" className="group glass-card rounded-3xl p-6 block w-full hover:bg-white/5 transition-all text-left flex flex-col">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors flex justify-between items-center gap-2 mb-3">
            Subhamastu Cafe <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </h3>
          <p className="text-sm text-gray-400 mb-5">Website dev & Meta/Google Ads for franchise leads.</p>
          <div className="flex gap-2 text-xs text-blue-400/80">
            <span className="px-2.5 py-1 bg-blue-500/10 rounded-md">Web Dev</span>
            <span className="px-2.5 py-1 bg-blue-500/10 rounded-md">Meta Ads</span>
          </div>
        </a>

        <a href="https://indrabhayaquaratna.com" target="_blank" rel="noopener noreferrer" className="group glass-card rounded-3xl p-6 block w-full hover:bg-white/5 transition-all text-left flex flex-col">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors flex justify-between items-center gap-2 mb-3">
            Indrabhavya <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </h3>
          <p className="text-sm text-gray-400 mb-5">Website & targeted lead gen campaigns.</p>
          <div className="flex gap-2 text-xs text-blue-400/80">
            <span className="px-2.5 py-1 bg-blue-500/10 rounded-md">Next.js</span>
            <span className="px-2.5 py-1 bg-blue-500/10 rounded-md">Google Ads</span>
          </div>
        </a>

        <a href="https://skillonenglishacademy.com" target="_blank" rel="noopener noreferrer" className="group glass-card rounded-3xl p-6 block w-full hover:bg-white/5 transition-all text-left flex flex-col">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors flex justify-between items-center gap-2 mb-3">
            Skillon Academy <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </h3>
          <p className="text-sm text-gray-400 mb-5">Website development & marketing for an English academy.</p>
          <div className="flex gap-2 text-xs text-blue-400/80">
            <span className="px-2.5 py-1 bg-blue-500/10 rounded-md">Web Dev</span>
            <span className="px-2.5 py-1 bg-blue-500/10 rounded-md">Marketing</span>
          </div>
        </a>

        <a href="https://malnadinteriors.co.in" target="_blank" rel="noopener noreferrer" className="group glass-card rounded-3xl p-6 block w-full hover:bg-white/5 transition-all text-left flex flex-col">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors flex justify-between items-center gap-2 mb-3">
            Malnad Interiors <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </h3>
          <p className="text-sm text-gray-400 mb-5">Website design & data-driven Google Ads.</p>
          <div className="flex gap-2 text-xs text-blue-400/80">
            <span className="px-2.5 py-1 bg-blue-500/10 rounded-md">Web Dev</span>
            <span className="px-2.5 py-1 bg-blue-500/10 rounded-md">Google Ads</span>
          </div>
        </a>

      </div>
    </motion.section>
  );
}