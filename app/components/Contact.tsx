"use client";
import { motion } from "framer-motion";
import { Mail, Phone, Zap, MapPin } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export default function Contact() {
  return (
    <motion.section 
      id="contact" 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true }} 
      variants={fadeUp} 
      className="relative w-full bg-[#020617] border-t border-blue-900/30 mt-20 overflow-hidden"
    >
      
      {/* === MODERN 3D BACKGROUND (Glowing Orbs & Grid) === */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
        {/* 1. ಗ್ರಿಡ್ ಎಫೆಕ್ಟ್ (Grid) */}
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #3b82f6 1px, transparent 1px),
              linear-gradient(to bottom, #3b82f6 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        ></div>

        {/* 2. ಗ್ಲೋಯಿಂಗ್ ಗೋಳಗಳು (Glowing Orbs) */}
        <motion.div 
          animate={{ y: [0, -30, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-10 w-64 h-64 bg-blue-600/30 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ y: [0, 30, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-10 right-10 w-72 h-72 bg-purple-600/20 rounded-full blur-[120px]"
        />
      </div>

      {/* === MAIN CONTENT === */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 py-20 sm:py-24 text-center">
        
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/30 mb-6 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
          <Zap className="text-blue-400" size={32} />
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
          Let's work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">together.</span>
        </h2>
        
        <p className="text-base sm:text-lg text-gray-400 mb-12 max-w-lg mx-auto leading-relaxed">
          Looking for a developer who understands marketing? Let's build something that scales your business.
        </p>
        
        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full mb-12">
          <a href="mailto:sadikalike7@gmail.com" className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-500 transition-all text-base shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:scale-105">
            <Mail size={20} className="group-hover:animate-bounce" /> Email Me
          </a>
          <a href="tel:+918217436350" className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold hover:bg-white/10 transition-all text-base hover:scale-105">
            <Phone size={20} className="group-hover:rotate-12 transition-transform" /> Call Me
          </a>
        </div>

        {/* Location Info Only */}
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
          <MapPin size={16} className="text-blue-500" /> Mangaluru, India
        </div>

      </div>
    </motion.section>
  );
}