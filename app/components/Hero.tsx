"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center justify-center w-full py-6 md:py-16 overflow-hidden">
      
      {/* === MODERN ANIMATED GRID BACKGROUND (Full Screen) === */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Animated Grid */}
        <div className="absolute inset-0 animated-grid opacity-60"></div>
        
        {/* Modern Glowing Orbs */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-green-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="w-full max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 lg:gap-16 relative z-10">
        
        {/* === LEFT SIDE (Text Content) === */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1"
        >
          
          {/* Desktop Badge */}
          <div className="hidden md:flex mb-5 items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#030712]/80 border border-green-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(34,197,94,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] sm:text-xs font-semibold text-green-400 uppercase tracking-widest">Available for new opportunities</span>
          </div>

          {/* Name */}
          <h1 className="text-[3rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-3 text-white">
            Muhammad <br className="hidden sm:block md:hidden" /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700">Sadik P.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed font-medium max-w-md mb-6 md:mb-8">
            A <span className="text-blue-500 font-bold">Performance Marketer</span> focused on scaling businesses through data-driven ad campaigns and high-converting landing pages.
          </p>
          
          {/* Buttons (One Line on Mobile) */}
          <div className="flex flex-row justify-center md:justify-start gap-3 w-full sm:w-auto">
            <a href="#projects" className="flex-1 sm:flex-none px-4 sm:px-7 py-3 rounded-full bg-blue-600 text-white font-semibold text-xs sm:text-base hover:bg-blue-500 transition-all flex items-center justify-center gap-1.5 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              View My Work <ArrowUpRight size={16} className="sm:w-[18px] sm:h-[18px]" />
            </a>
            <a href="#contact" className="flex-1 sm:flex-none px-4 sm:px-7 py-3 rounded-full bg-[#030712]/50 border border-white/10 backdrop-blur-md text-white font-semibold text-xs sm:text-base hover:bg-white/5 transition-all flex items-center justify-center">
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* === RIGHT SIDE (Image) === */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="w-full md:w-1/2 flex flex-col items-center justify-center md:justify-end relative order-1 md:order-2 mb-4 md:mb-0"
        >
          {/* Mobile Badge */}
          <div className="flex md:hidden mb-4 items-center justify-center gap-2 px-3 py-1 rounded-full bg-[#030712]/80 border border-green-500/30 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[9px] sm:text-xs font-semibold text-green-400 uppercase tracking-widest">Available for new opportunities</span>
          </div>

          {/* Image Container */}
          <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-[320px] lg:h-[320px]">
            {/* Rotating Border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-green-500 to-blue-500 animate-[spin_5s_linear_infinite] opacity-40 blur-[2px]"></div>
            
            {/* Image */}
            <div className="absolute inset-[3px] rounded-full overflow-hidden border-2 border-[#030712] bg-[#030712] z-10">
              <img 
                src="/sadik.png" 
                alt="Muhammad Sadik P" 
                className="w-full h-full object-cover object-top scale-110" 
                style={{ filter: "contrast(1.1) brightness(1.05)" }} 
              />
            </div>
            
            {/* Glow */}
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-[50px] opacity-20 -z-10"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}