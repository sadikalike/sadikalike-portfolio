"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-[85vh] flex items-center justify-center w-full py-10">
      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16">
        
        {/* Left Side: Text */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
        >
          {/* Desktop Badge */}
          <div className="hidden md:flex mb-6 items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] sm:text-xs font-medium text-green-400 uppercase tracking-widest">Available for new opportunities</span>
          </div>

          <h1 className="text-[3rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 text-white">
            Muhammad <br className="hidden sm:block md:hidden" /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700">Sadik P.</span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed font-medium max-w-md mb-8">
            A <span className="text-blue-500 font-bold">Performance Marketer</span> focused on scaling businesses through data-driven ad campaigns and high-converting landing pages.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 w-full sm:w-auto">
            <a href="#projects" className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-500 transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(37,99,235,0.4)]">
              View My Work <ArrowUpRight size={18} />
            </a>
            <a href="#contact" className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-white/20 text-white font-bold hover:bg-white/5 transition-all flex items-center justify-center">
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 flex flex-col items-center justify-center md:justify-end"
        >
          {/* Mobile Badge */}
          <div className="flex md:hidden mb-6 items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] sm:text-xs font-medium text-green-400 uppercase tracking-widest">Available for new opportunities</span>
          </div>

          {/* Image Container with Zoom Effect */}
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-[60px] opacity-30 z-0"></div>
            
            <div className="relative w-full h-full z-10 rounded-full overflow-hidden border-2 border-blue-500/20 bg-[#0a1128]">
              <img 
                src="/sadik.png" 
                alt="Muhammad Sadik P" 
                className="w-full h-full object-cover object-top scale-110" 
                style={{ filter: "contrast(1.1) brightness(1.05)" }} 
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}