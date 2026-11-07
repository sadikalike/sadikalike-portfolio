"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

// 3D ಬಾಕ್ಸ್‌ಗಳಿಗೆ ಸ್ಥಿರವಾದ ಮೌಲ್ಯಗಳು (Static Values)
const floatingBoxes = [
  { size: 40, left: 10, top: 15, duration: 15, rotateX: 20, rotateY: 30 },
  { size: 60, left: 25, top: 40, duration: 20, rotateX: 45, rotateY: 60 },
  { size: 30, left: 45, top: 20, duration: 12, rotateX: 10, rotateY: 80 },
  { size: 50, left: 65, top: 60, duration: 18, rotateX: 60, rotateY: 20 },
  { size: 70, left: 80, top: 30, duration: 25, rotateX: 30, rotateY: 45 },
  { size: 45, left: 15, top: 70, duration: 16, rotateX: 75, rotateY: 15 },
  { size: 35, left: 55, top: 80, duration: 14, rotateX: 25, rotateY: 70 },
  { size: 55, left: 90, top: 75, duration: 22, rotateX: 50, rotateY: 30 },
];

export default function Projects() {
  return (
    <motion.section 
      id="projects" 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true }} 
      variants={fadeUp} 
      className="relative pt-24 border-t border-white/5 mt-20 pb-12 overflow-hidden"
    >
      
      {/* === NEW MODERN 3D BACKGROUND (Real 3D Boxes/Cubes) === */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* 1. ನಿಜವಾದ 3D ಬಾಕ್ಸ್‌ಗಳು (Real 3D Cubes) */}
        {floatingBoxes.map((el, i) => (
          <motion.div
            key={`box-${i}`}
            animate={{ 
              y: [0, -50, 0],
              rotateX: [el.rotateX, el.rotateX + 180, el.rotateX + 360],
              rotateY: [el.rotateY, el.rotateY + 180, el.rotateY + 360],
            }}
            transition={{ 
              duration: el.duration, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute border border-blue-400/40 bg-blue-500/10 backdrop-blur-sm"
            style={{ 
              width: el.size,
              height: el.size,
              left: `${el.left}%`,
              top: `${el.top}%`,
              transformStyle: 'preserve-3d',
              // 3D ಲುಕ್ ನೀಡಲು Shadow
              boxShadow: 'inset 0 0 10px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.2)'
            }}
          />
        ))}

        {/* 2. Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-600/5 rounded-full blur-[150px]" />
      </div>

      {/* === MAIN CONTENT === */}
      <div className="relative z-10 w-full px-5 sm:px-6">
        
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">Featured Projects</h2>
          <p className="text-blue-500 font-medium text-lg">My Recent Work</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
          
          {/* Project 1 */}
          <div className="glass-card rounded-3xl p-6 flex flex-col border border-white/5 bg-[#0a1128]/60 backdrop-blur-lg hover:border-blue-500/30 transition-all text-left">
            <h3 className="text-xl font-bold text-white mb-3">Subhamastu Cafe</h3>
            
            <ul className="text-sm text-gray-400 mb-5 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">•</span> Website Development & Meta/Google Ads.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">•</span> Generated franchise leads and business growth.
              </li>
            </ul>
            
            <div className="flex gap-2 text-xs text-blue-400/80 mb-4">
              <span className="px-2.5 py-1 bg-blue-500/10 rounded-md">Web Dev</span>
              <span className="px-2.5 py-1 bg-blue-500/10 rounded-md">Meta Ads</span>
            </div>

            <a href="https://subhamastucafe.in" target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors bg-blue-500/10 px-3 py-1.5 rounded-md w-fit">
              Visit Website <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Project 2 (Indrabhavya) */}
          <div className="glass-card rounded-3xl p-6 flex flex-col border border-white/5 bg-[#0a1128]/60 backdrop-blur-lg hover:border-blue-500/30 transition-all text-left">
            <h3 className="text-xl font-bold text-white mb-3">Indrabhavya</h3>
            
            <ul className="text-sm text-gray-400 mb-5 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">•</span> Website development & targeted lead gen campaigns.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">•</span> Competitor research & audience targeting.
              </li>
            </ul>
            
            <div className="flex gap-2 text-xs text-blue-400/80 mb-4">
              <span className="px-2.5 py-1 bg-blue-500/10 rounded-md">Web Dev</span>
              <span className="px-2.5 py-1 bg-blue-500/10 rounded-md">Google Ads</span>
            </div>

            <a href="https://www.indrabhayiaquaratna.com/" target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors bg-blue-500/10 px-3 py-1.5 rounded-md w-fit">
              Visit Website <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Project 3 */}
          <div className="glass-card rounded-3xl p-6 flex flex-col border border-white/5 bg-[#0a1128]/60 backdrop-blur-lg hover:border-blue-500/30 transition-all text-left">
            <h3 className="text-xl font-bold text-white mb-3">Skillon Academy</h3>
            
            <ul className="text-sm text-gray-400 mb-5 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">•</span> Website development & marketing for English academy.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">•</span> Increased student engagement & admissions.
              </li>
            </ul>
            
            <div className="flex gap-2 text-xs text-blue-400/80 mb-4">
              <span className="px-2.5 py-1 bg-blue-500/10 rounded-md">Web Dev</span>
              <span className="px-2.5 py-1 bg-blue-500/10 rounded-md">Marketing</span>
            </div>

            <a href="https://skillonenglishacademy.com" target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors bg-blue-500/10 px-3 py-1.5 rounded-md w-fit">
              Visit Website <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Project 4 */}
          <div className="glass-card rounded-3xl p-6 flex flex-col border border-white/5 bg-[#0a1128]/60 backdrop-blur-lg hover:border-blue-500/30 transition-all text-left">
            <h3 className="text-xl font-bold text-white mb-3">Malnad Interiors</h3>
            
            <ul className="text-sm text-gray-400 mb-5 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">•</span> Website design & data-driven Google Ads.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">•</span> Boosted interior design enquiries.
              </li>
            </ul>
            
            <div className="flex gap-2 text-xs text-blue-400/80 mb-4">
              <span className="px-2.5 py-1 bg-blue-500/10 rounded-md">Web Dev</span>
              <span className="px-2.5 py-1 bg-blue-500/10 rounded-md">Google Ads</span>
            </div>

            <a href="https://malnadinteriors.co.in" target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors bg-blue-500/10 px-3 py-1.5 rounded-md w-fit">
              Visit Website <ArrowUpRight size={14} />
            </a>
          </div>

        </div>
      </div>
    </motion.section>
  );
}