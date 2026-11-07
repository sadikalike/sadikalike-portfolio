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
    <motion.section 
      id="experience" 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true }} 
      variants={fadeUp} 
      className="relative pt-24 border-t border-white/5 mt-20 overflow-hidden"
    >
      
      {/* === SKY LIGHTS & SMALL BOXES BACKGROUND === */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* 1. ಚಿಕ್ಕ ಚಿಕ್ಕ ತೇಲಾಡುವ ಬಾಕ್ಸ್‌ಗಳು (Small Floating Boxes) */}
        {Array.from({ length: 15 }).map((_, i) => {
          // ಬಾಕ್ಸ್‌ಗಳ ಸೈಜ್, ಸ್ಥಾನ ಮತ್ತು ವೇಗವನ್ನು ರಾಂಡಮ್ ಆಗಿ ಮಾಡುವುದು
          const size = Math.random() * 15 + 5; 
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const duration = Math.random() * 10 + 10;
          
          return (
            <motion.div
              key={`box-${i}`}
              animate={{ 
                y: [0, -30, 0], 
                rotate: [0, 90, 0],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{ 
                duration: duration, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute border border-blue-500/20 bg-blue-500/5 rounded-sm"
              style={{ 
                width: size, 
                height: size, 
                left: `${left}%`, 
                top: `${top}%` 
              }}
            />
          );
        })}

        {/* 2. ಆಕಾಶದಲ್ಲಿ ಮಿನುಗುವ ಬೆಳಕು (Sky Lights / Twinkling Stars) */}
        {Array.from({ length: 20 }).map((_, i) => {
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const duration = Math.random() * 3 + 2;
          
          return (
            <motion.div
              key={`star-${i}`}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0.5, 1.5, 0.5]
              }}
              transition={{ 
                duration: duration, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"
              style={{ 
                left: `${left}%`, 
                top: `${top}%` 
              }}
            />
          );
        })}

        {/* 3. ಬೆಳಕಿನ ರೇಖೆ (Glowing Line) - ಆಳ ಸೇರಿಸಲು */}
        <motion.div 
          animate={{ opacity: [0.05, 0.2, 0.05] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
        />
      </div>

      {/* === MAIN CONTENT === */}
      <div className="relative z-10 w-full px-5 sm:px-6">
        
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">Experience</h2>
          <p className="text-blue-500 font-medium text-lg">Where I've Worked</p>
        </div>
        
        <div className="space-y-6 w-full max-w-4xl mx-auto">
          
          {/* 1. Skillon English Academy */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl w-full text-left border border-white/5 hover:border-blue-500/30 transition-all bg-[#0a1128]/60 backdrop-blur-lg">
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
          <div className="glass-card p-6 sm:p-8 rounded-3xl w-full text-left border border-white/5 hover:border-purple-500/30 transition-all bg-[#0a1128]/60 backdrop-blur-lg">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 gap-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white">Founder & Freelance Digital Marketer</h3>
              <span className="text-xs font-semibold text-purple-400 bg-purple-500/10 px-4 py-1.5 rounded-full w-fit">2024 - Present</span>
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
      </div>
    </motion.section>
  );
}