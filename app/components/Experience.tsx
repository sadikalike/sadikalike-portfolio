"use client";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { SiInstagram } from "react-icons/si";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export default function Experience() {
  return (
    <motion.section id="experience" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="pt-24 border-t border-white/5 mt-20">
      
      {/* ಶೀರ್ಷಿಕೆ ಮಧ್ಯದಲ್ಲೇ ಇರಲಿ */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">Experience</h2>
        <p className="text-blue-500 font-medium text-lg">Where I've Worked</p>
      </div>
      
      {/* ಕಾರ್ಡ್‌ಗಳು ಮಧ್ಯದಲ್ಲಿವೆ, ಆದರೆ ಒಳಗಿನ ಅಂಶಗಳು ಎಡಕ್ಕೆ ಒರಗಿಕೊಂಡಿವೆ */}
      <div className="space-y-6 w-full max-w-4xl mx-auto">
        
        {/* 1. Skillon English Academy */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl w-full text-left">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 gap-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white">Marketing Team Member</h3>
            <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 px-4 py-1.5 rounded-full w-fit">Nov 2025 - Present</span>
          </div>
          <p className="text-gray-400 font-medium mb-3 text-sm sm:text-base">Skillon English Academy, Mangaluru</p>
          
          <div className="flex flex-wrap gap-3 mb-4 text-xs sm:text-sm">
            <a href="https://skillonenglishacademy.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors bg-blue-500/10 px-3 py-1 rounded-md">
              <Globe size={14} /> Website
            </a>
            <a href="https://www.instagram.com/skillon_kannada" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-pink-400 hover:text-pink-300 transition-colors bg-pink-500/10 px-3 py-1 rounded-md">
              <SiInstagram size={14} /> Instagram
            </a>
          </div>

          <ul className="text-sm text-gray-500 list-disc list-inside space-y-2">
            <li>Built the academy's website and handle its marketing.</li>
            <li>Support digital marketing campaigns and lead generation activities.</li>
          </ul>
        </div>

        {/* 2. Growzy Digital */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl w-full text-left">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 gap-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white">Founder & Freelance Digital Marketer</h3>
            <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 px-4 py-1.5 rounded-full w-fit">2024 - Present</span>
          </div>
          <p className="text-gray-400 font-medium mb-3 text-sm sm:text-base">Growzy Digital (Freelance Agency)</p>
          
          <div className="flex flex-wrap gap-3 mb-4 text-xs sm:text-sm">
            <a href="https://www.instagram.com/growzy.digital" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-pink-400 hover:text-pink-300 transition-colors bg-pink-500/10 px-3 py-1 rounded-md">
              <SiInstagram size={14} /> Instagram
            </a>
          </div>

          <ul className="text-sm text-gray-500 list-disc list-inside space-y-2">
            <li>Handle multiple freelance clients end to end: website development, branding, competitor research, target audience research, Meta Ads and Google Ads campaigns.</li>
            <li>Built websites and ran Meta/Google Ads for subhamastucafe.in, indrabhayaquaratna.com, and malnadinteriors.co.in.</li>
          </ul>
        </div>

      </div>
    </motion.section>
  );
}